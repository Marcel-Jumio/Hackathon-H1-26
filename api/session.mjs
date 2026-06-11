// /api/session — Vercel serverless function (WP: backend credentials flow)
// POST { apiKey, apiSecret, region, workflowKey, customerData? } ->
//   { sdkToken, sdkDc, accountId }
//
// Exchanges Jumio API credentials for an OAuth2 bearer token, then creates an
// account/workflow execution and returns the <jumio-sdk> session token.
// Credentials are used per-request only — never persisted server-side.

const DC_MAP = { 'amer-1': 'us', 'emea-1': 'eu', 'apac-1': 'sgp' };

function resolveDc(region) {
  return DC_MAP[region] ?? 'sgp';
}

async function getAccessToken(apiKey, apiSecret, region) {
  const url = `https://auth.${region}.jumio.ai/oauth2/token`;
  const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body: 'grant_type=client_credentials',
  });

  if (!res.ok) {
    const body = await res.text();
    throw Object.assign(new Error(`OAuth2 token request failed (${res.status}): ${body}`), { status: res.status });
  }

  const data = await res.json();
  return data.access_token;
}

async function createAccount(accessToken, region, workflowKey, customerData) {
  const url = `https://account.${region}.jumio.ai/api/v1/accounts`;

  const body = {
    customerInternalReference: `smartdemo-${Date.now()}`,
    workflowDefinition: { key: workflowKey },
    userConsent: {
      userIp: '226.80.211.232',
      userLocation: { country: 'MYS', state: 'IL' },
      consent: { obtained: 'yes', obtainedAt: new Date().toISOString() },
    },
  };

  if (customerData && (customerData.firstName || customerData.lastName || customerData.dateOfBirth)) {
    body.customerInternalReference = `smartdemo-${customerData.lastName ?? ''}-${Date.now()}`;
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!res.ok) {
    throw Object.assign(new Error(data.title ?? `Jumio account API error (${res.status})`), { status: res.status, jumioError: data });
  }
  return data;
}

/** Upload PREPARED_DATA (customer info) to the DATA credential, if the workflow has one. */
async function uploadPreparedData(accessToken, region, accountId, workflowExecutionId, credentialId, customerData) {
  const url = `https://api.${region}.jumio.ai/api/v1/accounts/${accountId}/workflow-executions/${workflowExecutionId}/credentials/${credentialId}/parts/PREPARED_DATA`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      firstName: customerData.firstName,
      lastName: customerData.lastName,
      dateOfBirth: customerData.dateOfBirth,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.warn(`[api/session] PREPARED_DATA upload failed (non-fatal): ${res.status} ${body}`);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { apiKey, apiSecret, region, workflowKey, customerData } = req.body ?? {};

  if (!apiKey || !apiSecret || !region || !workflowKey) {
    res.status(400).json({ error: 'apiKey, apiSecret, region and workflowKey are required' });
    return;
  }

  try {
    const accessToken = await getAccessToken(apiKey, apiSecret, region);
    const account = await createAccount(accessToken, region, workflowKey, customerData);

    if (customerData) {
      const dataCredential = account.workflowExecution?.credentials?.find((c) => c.category === 'DATA');
      if (dataCredential) {
        await uploadPreparedData(accessToken, region, account.account.id, account.workflowExecution.id, dataCredential.id, customerData);
      }
    }

    res.status(200).json({
      sdkToken: account.sdk?.token,
      sdkDc: resolveDc(region),
      accountId: account.account?.id,
    });
  } catch (err) {
    console.error('[api/session] Error:', err.message);
    res.status(err.status ?? 500).json({ error: err.message, jumioError: err.jumioError });
  }
}

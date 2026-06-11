// Shared Jumio API helpers used by /api/session.mjs and /api/publish.mjs.
// Credentials are used per-request only — never persisted server-side.

export const DC_MAP = { 'amer-1': 'us', 'emea-1': 'eu', 'apac-1': 'sgp' };

export function resolveDc(region) {
  return DC_MAP[region] ?? 'sgp';
}

export async function getAccessToken(apiKey, apiSecret, region) {
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

export async function createAccount(accessToken, region, workflowKey, customerData, tokenLifetime) {
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

  if (tokenLifetime) {
    body.tokenLifetime = tokenLifetime;
  }

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
export async function uploadPreparedData(accessToken, region, accountId, workflowExecutionId, credentialId, customerData) {
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
    console.warn(`[jumio] PREPARED_DATA upload failed (non-fatal): ${res.status} ${body}`);
  }
}

/** Token lifetime bounds for /api/publish. */
export const TOKEN_LIFETIME_MIN_MS = 5 * 60 * 1000; // 5 minutes
export const TOKEN_LIFETIME_MAX_MS = 60 * 24 * 60 * 60 * 1000; // 60 days

const LIFETIME_UNIT_MS = { m: 60 * 1000, h: 60 * 60 * 1000, d: 24 * 60 * 60 * 1000 };

/** Parses a Jumio tokenLifetime string (e.g. "30m", "7d") into milliseconds, or null if invalid. */
export function parseTokenLifetimeMs(value) {
  const match = /^(\d+)(m|h|d)$/.exec(String(value ?? '').trim());
  if (!match) return null;
  return Number(match[1]) * LIFETIME_UNIT_MS[match[2]];
}

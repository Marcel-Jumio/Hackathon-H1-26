// /api/session — Vercel serverless function (WP: backend credentials flow)
// POST { apiKey, apiSecret, region, workflowKey, customerData? } ->
//   { sdkToken, sdkDc, accountId }
//
// Exchanges Jumio API credentials for an OAuth2 bearer token, then creates an
// account/workflow execution and returns the <jumio-sdk> session token.
// Credentials are used per-request only — never persisted server-side.

import { getAccessToken, createAccount, uploadPreparedData, resolveDc } from './_jumio.mjs';

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

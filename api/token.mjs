// /api/token — Vercel serverless function (WP: backend credentials flow)
// POST { apiKey, apiSecret, region } -> { ok: true } | { error }
//
// Validates API credentials immediately by exchanging them for an OAuth2 bearer token.
// The token itself isn't returned to the client — this just confirms the credentials work
// before they're stored for later /api/session calls.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { apiKey, apiSecret, region } = req.body ?? {};

  if (!apiKey || !apiSecret || !region) {
    res.status(400).json({ error: 'apiKey, apiSecret and region are required' });
    return;
  }

  const url = `https://auth.${region}.jumio.ai/oauth2/token`;
  const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

  try {
    const tokenRes = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: 'grant_type=client_credentials',
    });

    if (!tokenRes.ok) {
      const body = await tokenRes.text();
      res.status(tokenRes.status).json({ error: `OAuth2 token request failed (${tokenRes.status}): ${body}` });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[api/token] Error:', err.message);
    res.status(500).json({ error: err.message });
  }
}

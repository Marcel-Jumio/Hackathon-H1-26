// /api/publish — Vercel serverless function (slug site generation)
// POST { profile, workflowKey, locale, apiKey, apiSecret, region, tokenLifetime?, customerData? }
//   -> { slug, url }
//
// Mints a single-use <jumio-sdk> session token via Jumio (using the publisher's
// credentials, used per-request only) and stores the brand profile + token in
// Vercel Blob under a unique slug. Published sites are served by /api/site.mjs
// at /studio/<slug> and remain valid until the token's lifetime expires.

import { put } from '@vercel/blob';
import { slugify } from '../microsite/render.mjs';
import {
  getAccessToken,
  createAccount,
  uploadPreparedData,
  resolveDc,
  parseTokenLifetimeMs,
  TOKEN_LIFETIME_MIN_MS,
  TOKEN_LIFETIME_MAX_MS,
} from './_jumio.mjs';

const DEFAULT_TOKEN_LIFETIME = '30m';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { profile, workflowKey, locale, apiKey, apiSecret, region, customerData } = req.body ?? {};
  const tokenLifetime = req.body?.tokenLifetime || DEFAULT_TOKEN_LIFETIME;

  if (!profile || !workflowKey || !apiKey || !apiSecret || !region) {
    res.status(400).json({ error: 'profile, workflowKey, apiKey, apiSecret and region are required' });
    return;
  }

  const lifetimeMs = parseTokenLifetimeMs(tokenLifetime);
  if (lifetimeMs == null || lifetimeMs < TOKEN_LIFETIME_MIN_MS || lifetimeMs > TOKEN_LIFETIME_MAX_MS) {
    res.status(400).json({ error: 'tokenLifetime must be between 5m and 60d' });
    return;
  }

  try {
    const accessToken = await getAccessToken(apiKey, apiSecret, region);
    const account = await createAccount(accessToken, region, workflowKey, customerData, tokenLifetime);

    if (customerData) {
      const dataCredential = account.workflowExecution?.credentials?.find((c) => c.category === 'DATA');
      if (dataCredential) {
        await uploadPreparedData(accessToken, region, account.account.id, account.workflowExecution.id, dataCredential.id, customerData);
      }
    }

    const slug = `${slugify(profile.brand?.name)}-${crypto.randomUUID().slice(0, 8)}`;

    const payload = {
      profile,
      locale: locale ?? profile.sdk?.locale ?? 'en',
      sdkToken: account.sdk?.token,
      sdkDc: resolveDc(region),
      publishedAt: Date.now(),
      expiresAt: Date.now() + lifetimeMs,
    };

    await put(`published/${slug}.json`, JSON.stringify(payload), {
      access: 'private',
      addRandomSuffix: false,
      contentType: 'application/json',
    });

    res.status(200).json({ slug, url: `/studio/${slug}` });
  } catch (err) {
    console.error('[api/publish] Error:', err.message);
    res.status(err.status ?? 500).json({ error: err.message, jumioError: err.jumioError });
  }
}

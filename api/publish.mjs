// /api/publish — Vercel serverless function (slug site generation)
// POST { profile, locale, sdkToken, sdkDc, expiresAt } -> { slug, url }
//
// Stores the brand profile + an already-minted <jumio-sdk> session (from
// /api/session, via "Create session & launch") in Vercel Blob under a unique
// slug. Published sites are served by /api/site.mjs at /studio/<slug> and
// remain valid until the session token's expiry.

import { put } from '@vercel/blob';
import { slugify } from '../microsite/render.mjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { profile, locale, sdkToken, sdkDc, expiresAt } = req.body ?? {};

  if (!profile || !sdkToken || !sdkDc || !expiresAt) {
    res.status(400).json({ error: 'profile, sdkToken, sdkDc and expiresAt are required' });
    return;
  }

  const slug = `${slugify(profile.brand?.name)}-${crypto.randomUUID().slice(0, 8)}`;

  const payload = {
    profile,
    locale: locale ?? profile.sdk?.locale ?? 'en',
    sdkToken,
    sdkDc,
    publishedAt: Date.now(),
    expiresAt,
  };

  try {
    await put(`published/${slug}.json`, JSON.stringify(payload), {
      access: 'private',
      addRandomSuffix: false,
      contentType: 'application/json',
    });

    res.status(200).json({ slug, url: `/studio/${slug}` });
  } catch (err) {
    console.error('[api/publish] Error:', err.message);
    res.status(500).json({ error: err.message });
  }
}

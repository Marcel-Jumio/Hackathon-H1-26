// /api/publish — Vercel serverless function (slug site generation)
// POST { profile, workflowKey, locale } -> { slug, url }
//
// Stores the brand profile + product config in Vercel Blob under a unique slug.
// Published sites are served by /api/site.mjs at /studio/<slug> and are valid for 24h.

import { put } from '@vercel/blob';
import { slugify } from '../microsite/render.mjs';

const PUBLISH_TTL_MS = 24 * 60 * 60 * 1000; // 1 day

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { profile, workflowKey, locale } = req.body ?? {};

  if (!profile || !workflowKey) {
    res.status(400).json({ error: 'profile and workflowKey are required' });
    return;
  }

  const slug = `${slugify(profile.brand?.name)}-${crypto.randomUUID().slice(0, 8)}`;

  const payload = {
    profile,
    workflowKey,
    locale: locale ?? profile.sdk?.locale ?? 'en',
    publishedAt: Date.now(),
    expiresAt: Date.now() + PUBLISH_TTL_MS,
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

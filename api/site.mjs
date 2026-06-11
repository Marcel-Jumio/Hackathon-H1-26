// /api/site — Vercel serverless function (slug site generation)
// GET ?slug=<slug> -> renders the published microsite HTML for /studio/<slug>
//
// Looks up the brand profile stored by /api/publish.mjs in Vercel Blob and renders it
// in "published" mode (visitors connect their own credentials to start the SDK).

import { get } from '@vercel/blob';
import { renderMicrosite } from '../microsite/render.mjs';

function notFoundPage(message) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Demo not found</title>
  <style>
    * { box-sizing: border-box; }
    html, body { height: 100%; margin: 0; }
    body {
      display: flex; align-items: center; justify-content: center;
      font-family: system-ui, sans-serif; background: #0e1512; color: #fff;
      text-align: center; padding: 2em;
    }
    h1 { font-size: 1.4em; margin: 0 0 0.5em; }
    p { opacity: 0.7; margin: 0; }
  </style>
</head>
<body>
  <div>
    <h1>${message}</h1>
    <p>Ask the sender for a fresh demo link.</p>
  </div>
</body>
</html>`;
}

export default async function handler(req, res) {
  const { slug } = req.query ?? {};

  if (!slug || Array.isArray(slug)) {
    res.status(400).send(notFoundPage('Invalid demo link'));
    return;
  }

  try {
    const blob = await get(`published/${slug}.json`, { access: 'private' });

    if (!blob) {
      res.status(404).send(notFoundPage('Demo not found'));
      return;
    }

    const data = await new Response(blob.stream).json();

    if (Date.now() > data.expiresAt) {
      res.status(410).send(notFoundPage('This demo link has expired'));
      return;
    }

    const html = renderMicrosite(data.profile, undefined, undefined, {
      published: true,
      sdkToken: data.sdkToken,
      sdkDc: data.sdkDc,
      locale: data.locale,
    });

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (err) {
    console.error('[api/site] Error:', err.message);
    res.status(500).send(notFoundPage('Something went wrong'));
  }
}

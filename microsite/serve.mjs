// Static server for the whole repo (WP4/WP5/WP6) — serves /studio (the editor), /engine and
// /microsite (ES modules), brand-profile.*.json, and any sites built by build.mjs under
// microsite/sites/<slug>/. A built site is reachable at http://localhost:PORT/microsite/sites/<slug>/
// — a stand-in for "<slug>.<our-domain>" until real subdomains are wired up.
//
// Usage: node microsite/serve.mjs [port]

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const port = Number(process.argv[2]) || 8080;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.wasm': 'application/wasm',
  '.gz': 'application/gzip',
};

createServer(async (req, res) => {
  try {
    let urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (urlPath === '/') urlPath = '/studio/index.html';

    let filePath = path.join(root, urlPath);
    if (!filePath.startsWith(root)) throw new Error('Forbidden');

    let stats = await stat(filePath).catch(() => null);

    // Fall back to public/ for absolute paths (e.g. /vendor/websdk/...), mirroring Vite's public dir.
    if (!stats) {
      const publicPath = path.join(root, 'public', urlPath);
      const publicStats = await stat(publicPath).catch(() => null);
      if (publicStats) {
        filePath = publicPath;
        stats = publicStats;
      }
    }

    if (stats?.isDirectory()) filePath = path.join(filePath, 'index.html');

    const data = await readFile(filePath);
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] ?? 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
}).listen(port, () => {
  console.log(`BrandMatch dev server: http://localhost:${port}/`);
  console.log(`  Studio:    http://localhost:${port}/studio/`);
  console.log(`  Build a site: node microsite/build.mjs brand-profile.sample.json`);
  console.log(`  Then visit:   http://localhost:${port}/microsite/sites/<slug>/`);
});

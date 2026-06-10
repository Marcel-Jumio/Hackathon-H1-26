// Vendors @jumio/websdk into public/vendor/websdk so it's served at /vendor/websdk/... by both
// Vite (dev + build, via the public/ dir) and microsite/serve.mjs.
//
// Run via `npm install` (postinstall) or manually: node scripts/vendor-websdk.mjs

import { cp, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');
const src = path.join(repoRoot, 'node_modules', '@jumio', 'websdk');
const dest = path.join(repoRoot, 'public', 'vendor', 'websdk');

if (!existsSync(src)) {
  console.error('@jumio/websdk not found in node_modules — run `npm install` first.');
  process.exit(1);
}

await mkdir(path.dirname(dest), { recursive: true });
await cp(src, dest, { recursive: true, force: true });
console.log(`Vendored @jumio/websdk -> ${path.relative(repoRoot, dest)}/`);

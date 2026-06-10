// Microsite builder (WP4) — turns a brand-profile.json into a static, demo-ready microsite
// under microsite/sites/<slug>/. References the @jumio/websdk runtime at /vendor/websdk
// (vendored once via `npm run vendor:websdk` — see scripts/vendor-websdk.mjs).
//
// Usage:
//   node microsite/build.mjs <path-to-brand-profile.json> [--dc=us|eu|sgp] [--token=...]
//
// Run from the repo root: node microsite/build.mjs brand-profile.sample.json

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderMicrosite, slugify } from './render.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');

function parseArgs(argv) {
  const args = { _: [] };
  for (const arg of argv) {
    const m = arg.match(/^--([^=]+)=(.*)$/);
    if (m) args[m[1]] = m[2];
    else args._.push(arg);
  }
  return args;
}

export async function buildSite(profile, { dc, token, locale } = {}) {
  const slug = slugify(profile.brand?.name);
  const html = renderMicrosite(profile, undefined, { dc, token, locale });

  const outDir = path.join(here, 'sites', slug);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, 'index.html'), html);

  return { slug, outDir };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const profilePath = args._[0];
  if (!profilePath) {
    console.error('Usage: node microsite/build.mjs <path-to-brand-profile.json> [--dc=us|eu|sgp] [--token=...]');
    process.exit(1);
  }

  if (!existsSync(path.join(repoRoot, 'public', 'vendor', 'websdk'))) {
    console.error('public/vendor/websdk not found — run `npm run vendor:websdk` first.');
    process.exit(1);
  }

  const profile = JSON.parse(await readFile(path.resolve(repoRoot, profilePath), 'utf8'));
  const { slug, outDir } = await buildSite(profile, { dc: args.dc, token: args.token, locale: args.locale });

  console.log(`Built microsite for "${profile.brand?.name}" -> ${path.relative(repoRoot, outDir)}/index.html`);
  console.log(`Serve it with: node microsite/serve.mjs   then open http://localhost:8080/microsite/sites/${slug}/`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

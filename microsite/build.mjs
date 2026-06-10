// Microsite builder (WP4) — turns a brand-profile.json into a static, demo-ready microsite
// under microsite/sites/<slug>/, with the @jumio/websdk runtime vendored alongside it
// (microsite/vendor/websdk/) so the whole thing can be served as static files.
//
// Usage:
//   node microsite/build.mjs <path-to-brand-profile.json> [--dc=us|eu|sgp] [--token=...]
//
// Run from the repo root: node microsite/build.mjs brand-profile.sample.json

import { readFile, writeFile, mkdir, cp, readdir } from 'node:fs/promises';
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

/** Copy the @jumio/websdk runtime into microsite/vendor/websdk (once / on demand). */
async function vendorWebsdk() {
  const src = path.join(repoRoot, 'node_modules', '@jumio', 'websdk');
  const dest = path.join(here, 'vendor', 'websdk');
  if (!existsSync(src)) {
    throw new Error('@jumio/websdk not found in node_modules — run `npm install` first.');
  }
  if (!existsSync(dest)) {
    await mkdir(path.dirname(dest), { recursive: true });
    await cp(src, dest, { recursive: true });
  }

  const jsDir = path.join(dest, 'js');
  const chunk = (await readdir(jsDir)).find((f) => /^index\..*\.js$/.test(f));
  if (!chunk) throw new Error(`Could not find the index chunk in ${jsDir}`);

  return {
    script: '../../vendor/websdk/index.js',
    modulePreload: `../../vendor/websdk/js/${chunk}`,
    style: '../../vendor/websdk/assets/style.css',
  };
}

export async function buildSite(profile, { dc, token } = {}) {
  const sdkAssets = await vendorWebsdk();
  const slug = slugify(profile.brand?.name);
  const html = renderMicrosite(profile, sdkAssets, { dc, token });

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

  const profile = JSON.parse(await readFile(path.resolve(repoRoot, profilePath), 'utf8'));
  const { slug, outDir } = await buildSite(profile, { dc: args.dc, token: args.token });

  console.log(`Built microsite for "${profile.brand?.name}" -> ${path.relative(repoRoot, outDir)}/index.html`);
  console.log(`Serve it with: node microsite/serve.mjs   then open http://localhost:8080/microsite/sites/${slug}/`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

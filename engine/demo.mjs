// Quick proof: feed the sample brand-profile through the engine and print the generated styling.
// Run from the repo root:  node engine/demo.mjs
import { readFile } from 'node:fs/promises';
import { buildHtml, ramp } from './brand-to-theme.mjs';

const profile = JSON.parse(await readFile(new URL('../brand-profile.sample.json', import.meta.url)));

console.log(`\nBrand: ${profile.brand.name}  (primary ${profile.brand.colors.primary})\n`);
console.log('Generated --jumio-sdk-color-primary ramp:');
console.table(ramp(profile.brand.colors.primary));
console.log('\nGenerated snippet to inject into the host page:\n');
console.log(buildHtml(profile));

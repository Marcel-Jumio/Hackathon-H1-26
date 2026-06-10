// Theming Engine (WP3) — STARTER / WIP
// Transforms a brand-profile (see ../brand-profile.schema.json) into the styling the Jumio WebSDK
// consumes: a <style> block of --jumio-sdk-* tokens, a logo <template>, a font <link>, and the
// light theme-mode element.
//
// Light mode only for now (see ../customization-reference.md). Zero dependencies — runs in the
// browser and in Node. This is a baseline for Singapore to extend, not a finished product.

const clamp = (n) => Math.max(0, Math.min(255, n));

/** Normalize "#abc" or "abc" or "aabbcc" -> "aabbcc" */
function normalizeHex(hex) {
  let h = String(hex).replace('#', '').trim();
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  return h;
}

/** Mix two hex colors. t=0 returns a, t=1 returns b. */
export function mix(a, b, t) {
  const ha = normalizeHex(a);
  const hb = normalizeHex(b);
  const channel = (i) => {
    const x = parseInt(ha.slice(i, i + 2), 16);
    const y = parseInt(hb.slice(i, i + 2), 16);
    return clamp(Math.round(x + (y - x) * t)).toString(16).padStart(2, '0');
  };
  return `#${channel(0)}${channel(2)}${channel(4)}`;
}

/** One brand hex -> the 7-step --jumio-sdk-color-primary ramp (1=lightest tint .. 7=dark shade). */
export function ramp(primary) {
  const W = '#ffffff';
  const K = '#000000';
  return {
    1: mix(primary, W, 0.85),
    2: mix(primary, W, 0.55),
    3: mix(primary, W, 0.25),
    4: primary, // main accent / button background
    5: mix(primary, K, 0.12),
    6: mix(primary, K, 0.34), // links / quiet-button text
    7: mix(primary, K, 0.22),
  };
}

/** brand-profile -> { "--jumio-sdk-...": value } map (light mode). */
export function buildTokens(profile) {
  const colors = profile.brand?.colors ?? {};
  const tokens = {};

  if (profile.brand?.fontFamily) {
    tokens['--jumio-sdk-font-family'] = `"${profile.brand.fontFamily}"`;
  }

  if (colors.primary) {
    const r = ramp(colors.primary);
    for (const step of [1, 2, 3, 4, 5, 6, 7]) {
      tokens[`--jumio-sdk-color-primary${step}`] = r[step];
    }
  }

  // foundational (light)
  if (colors.onPrimary) tokens['--jumio-sdk-theme-light-clickable-primary-default-color'] = colors.onPrimary;
  if (colors.text) tokens['--jumio-sdk-theme-light-text-color'] = colors.text;
  if (colors.pageBackground) tokens['--jumio-sdk-theme-light-page-bg-color'] = colors.pageBackground;
  if (colors.cardBackground) tokens['--jumio-sdk-theme-light-app-container-bg-color'] = colors.cardBackground;
  if (colors.destructive) tokens['--jumio-sdk-theme-light-clickable-destructive-default-bg-color'] = colors.destructive;

  // layout
  const pad = profile.layout?.containerPadding ?? {};
  for (const side of ['top', 'right', 'bottom', 'left']) {
    if (pad[side]) tokens[`--jumio-sdk-container-padding-${side}`] = pad[side];
  }

  // advanced escape hatch — passthrough verbatim (overrides anything above)
  Object.assign(tokens, profile.advanced?.tokenOverrides ?? {});

  return tokens;
}

/** brand-profile -> the HTML snippet to drop into the host page (where <jumio-sdk> lives). */
export function buildHtml(profile) {
  const tokens = buildTokens(profile);
  const cssLines = Object.entries(tokens)
    .map(([key, value]) => `    ${key}: ${value};`)
    .join('\n');

  const parts = [];
  if (profile.brand?.fontUrl) {
    parts.push(`<link rel="stylesheet" href="${profile.brand.fontUrl}" />`);
  }
  parts.push(`<style>\n  :root {\n${cssLines}\n  }\n</style>`);
  parts.push('<jumio-sdk-theme slot="theme" data-color="light"></jumio-sdk-theme>');
  if (profile.brand?.logo) {
    const alt = profile.brand?.name ?? '';
    const darkLogo = profile.brand?.logoDark ?? profile.brand.logo;
    parts.push(`<template id="jumio-logotype-light"><img src="${profile.brand.logo}" alt="${alt}" /></template>`);
    parts.push(`<template id="jumio-logotype-dark"><img src="${darkLogo}" alt="${alt}" /></template>`);
  }
  for (const [id, markup] of Object.entries(profile.content?.templates ?? {})) {
    parts.push(`<template id="${id}">${markup}</template>`);
  }
  return parts.join('\n');
}

/** Browser helper: inject the generated styling into the page (default: <head>). */
export function applyTheme(profile, target) {
  const root = target ?? document.head;
  const holder = document.createElement('template');
  holder.innerHTML = buildHtml(profile);
  root.append(holder.content.cloneNode(true));
}

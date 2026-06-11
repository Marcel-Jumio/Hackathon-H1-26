// Microsite renderer (WP4) — turns a brand-profile + the engine's styling snippet into a full
// standalone HTML page: a brand-skinned stepper that embeds <jumio-sdk> at the IDV step.
// Zero dependencies — runs in the browser and in Node.

import { buildHtml } from '../engine/brand-to-theme.mjs';

/** "Acme Bank" -> "acme-bank" */
export function slugify(name) {
  return String(name ?? 'brand')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'brand';
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function journeyBarHtml() {
  return `\
  <nav class="journey-bar">
    <div class="journey-segment journey-segment--placeholder">
      <span class="journey-segment__label">Placeholder</span>
      <span class="journey-segment__hint">Page before journey</span>
    </div>
    <div class="journey-segment journey-segment--active">
      <span class="journey-segment__label">Verification Journey</span>
      <span class="journey-segment__hint">Jumio WebSDK</span>
    </div>
    <div class="journey-segment journey-segment--placeholder">
      <span class="journey-segment__label">Placeholder</span>
      <span class="journey-segment__hint">Page after journey</span>
    </div>
  </nav>`;
}

/** Pulsing placeholder blocks shown at the IDV step before <jumio-sdk> is mounted. */
function skeletonHtml() {
  return `<div class="jumio-sdk-skeleton" aria-hidden="true">
        <div class="skeleton-line skeleton-line--title"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line skeleton-line--short"></div>
        <div class="skeleton-block"></div>
      </div>`;
}

const skeletonStyle = `
    .jumio-sdk-skeleton { display: flex; flex-direction: column; gap: 0.6em; padding: 1em 0; }
    .skeleton-line, .skeleton-block {
      border-radius: 6px;
      background: linear-gradient(90deg,
        var(--jumio-sdk-color-primary1, #e5e7eb) 25%,
        var(--jumio-sdk-color-primary2, #f3f4f6) 50%,
        var(--jumio-sdk-color-primary1, #e5e7eb) 75%);
      background-size: 200% 100%;
      animation: jumio-sdk-skeleton-pulse 1.4s ease-in-out infinite;
    }
    .skeleton-line { height: 0.9em; }
    .skeleton-line--title { width: 60%; height: 1.2em; }
    .skeleton-line--short { width: 40%; }
    .skeleton-block { height: 10em; }
    @keyframes jumio-sdk-skeleton-pulse {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }`;

/** Region options for the published-page credential form (mirrors studio/App.jsx REGIONS). */
const PUBLISH_REGIONS = [
  { value: 'amer-1', label: 'AMER (US)' },
  { value: 'emea-1', label: 'EMEA (EU)' },
  { value: 'apac-1', label: 'APAC (SGP)' },
];

const publishCredFormStyle = `
    .publish-cred-form { max-width: 360px; margin: 0 auto; text-align: left; }
    .publish-cred-form h3 { margin: 0 0 0.3em; font-size: 1.1em; text-align: center; }
    .publish-cred-form p.publish-cred-hint { margin: 0 0 1.2em; font-size: 0.85em; opacity: 0.7; text-align: center; }
    .publish-cred-form label { display: block; font-size: 0.8em; opacity: 0.75; margin: 0.8em 0 0.3em; }
    .publish-cred-form input, .publish-cred-form select {
      width: 100%; font: inherit; padding: 0.55em 0.7em; border-radius: 8px;
      border: 1px solid rgba(0,0,0,0.15); background: #fff; color: inherit;
    }
    .publish-cred-form .t-cta { width: 100%; text-align: center; margin-top: 1.2em; }
    .publish-cred-error { color: #d92d20; font-size: 0.8em; margin-top: 0.6em; min-height: 1.2em; }`;

/**
 * brand-profile -> full microsite HTML page (string).
 * The IDV step shows a themed skeleton with a "Start verification" button; clicking it mounts
 * <jumio-sdk> with the engine's generated theming dropped into <head>/<body>.
 *
 * @param {object} profile - brand-profile.json contents
 * @param {object} [sdkAssets] - paths to the @jumio/websdk runtime (default: vendored at /vendor/websdk/
 *   via `npm run vendor:websdk`, served by Vite's public/ dir and microsite/serve.mjs)
 * @param {string} [sdkAssets.script] - index.js (the SDK entry, type=module)
 * @param {string} [sdkAssets.modulePreload] - optional: the hashed chunk referenced by index.js
 *   (just a perf hint — index.js imports it itself, so this can be omitted)
 * @param {string} [sdkAssets.style] - assets/style.css
 * @param {object} [session] - { dc, token } for the <jumio-sdk> element
 * @param {object} [opts]
 * @param {boolean} [opts.started] - if true, render <jumio-sdk> directly instead of the skeleton
 */
export function renderMicrosite(profile, sdkAssets = {}, session = {}, opts = {}) {
  const brand = profile.brand ?? {};
  const journey = profile.journey ?? {};
  const steps = journey.steps?.length ? journey.steps : ['Create account', 'Verify identity', 'Done'];
  const idvStepIndex = journey.idvStepIndex ?? Math.min(1, steps.length - 1);
  const ctaLabel = journey.ctaLabel ?? 'Verify your identity';
  const themeSnippet = buildHtml(profile);

  const strings = profile.strings;
  const translationScript = strings && Object.keys(strings).length
    ? `\n  <script type="application/json" id="jumio-translation">${JSON.stringify(strings)}</script>`
    : '';

  const slots = profile.templateOverride?.slots ?? {};
  const templateTags = Object.entries(slots)
    .filter(([, html]) => html)
    .map(([id, html]) => `  <template id="${id}">${html}</template>`)
    .join('\n');
  const templateTagsBlock = templateTags ? `\n  <!-- Template overrides -->\n${templateTags}` : '';

  return `<!DOCTYPE html>
<html lang="${escapeHtml(profile.sdk?.locale ?? 'en')}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(brand.name ?? 'Brand')} — Onboarding</title>

  <!-- @jumio/websdk runtime, vendored to /vendor/websdk — see scripts/vendor-websdk.mjs -->
  <script type="module" crossorigin src="${escapeHtml(sdkAssets.script ?? '/vendor/websdk/index.js')}"></script>
  ${sdkAssets.modulePreload ? `<link rel="modulepreload" crossorigin href="${escapeHtml(sdkAssets.modulePreload)}" />` : ''}
  <link rel="stylesheet" crossorigin href="${escapeHtml(sdkAssets.style ?? '/vendor/websdk/assets/style.css')}" />

  <!-- Generated by the theming engine (WP3) from brand-profile.json -->
${themeSnippet.split('\n').map((l) => '  ' + l).join('\n')}${translationScript}${templateTagsBlock}

  <style>
    :root { --radius: ${escapeHtml(brand.radius ?? '12px')}; }
    * { box-sizing: border-box; }
    html, body { height: 100%; margin: 0; overflow: hidden; }
    body {
      font-family: var(--jumio-sdk-font-family, system-ui, sans-serif);
      color: var(--jumio-sdk-theme-light-text-color, #111418);
      background: var(--jumio-sdk-theme-light-page-bg-color, #f5f7fa);
      display: flex; flex-direction: column;
      overflow: hidden;
    }
    /* ── journey bar — Studio chrome, intentionally NOT brand-themed ── */
    .journey-bar {
      display: grid; grid-template-columns: 1fr 1fr 1fr;
      background: #0e1512;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      font-family: "Inter", system-ui, sans-serif;
    }
    .journey-segment {
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: 0.8em 1em; text-align: center; position: relative;
      color: #fff;
    }
    .journey-segment + .journey-segment {
      border-left: 1px solid rgba(255,255,255,0.07);
    }
    .journey-segment__label {
      font-size: 0.78em; font-weight: 600; letter-spacing: 0.01em;
    }
    .journey-segment__hint {
      font-size: 0.65em; margin-top: 0.15em; color: rgba(255,255,255,0.4);
    }
    .journey-segment--placeholder {
      opacity: 0.35;
    }
    .journey-segment--active {
      color: #7fe753;
    }
    .journey-segment--active .journey-segment__hint {
      color: rgba(127,231,83,0.55);
    }
    .journey-segment--active::after {
      content: ''; position: absolute; bottom: 0; left: 15%; right: 15%; height: 2px;
      background: #7fe753; border-radius: 2px 2px 0 0;
    }
    /* ── sdk area ── */
    .sdk-area {
      flex: 1; min-height: 0; display: flex; flex-direction: column;
      padding: ${escapeHtml(profile.layout?.containerPadding?.top ?? '1.5em')} ${escapeHtml(profile.layout?.containerPadding?.right ?? '1em')} ${escapeHtml(profile.layout?.containerPadding?.bottom ?? '1.5em')} ${escapeHtml(profile.layout?.containerPadding?.left ?? '1em')};
    }
    jumio-sdk { display: block; width: 100%; height: 100%; overflow: hidden; }
    .start-verification, .t-cta {
      font: inherit; font-weight: 600; cursor: pointer; border: none; border-radius: var(--radius);
      padding: 0.7em 1.2em; display: inline-block; margin-top: 1em;
      background: var(--jumio-sdk-color-primary4, #0a7d33);
      color: var(--jumio-sdk-theme-light-clickable-primary-default-color, #fff);
    }
    .start-verification:disabled, .t-cta:disabled { opacity: 0.45; cursor: not-allowed; }
    /* ── template snippet base styles ── */
    .t-banner { padding: 1em 1.25em; background: var(--jumio-sdk-theme-light-card-bg-color, #fff); border-radius: var(--radius); margin-bottom: 1em; }
    .t-banner h2 { margin: 0 0 0.3em; font-size: 1.05em; }
    .t-banner p  { margin: 0; font-size: 0.9em; opacity: 0.7; }
    .t-trust-row { display: flex; gap: 0.75em; flex-wrap: wrap; padding: 0.75em 0; margin-bottom: 0.75em; }
    .t-badge { background: var(--jumio-sdk-theme-light-card-bg-color, #fff); border-radius: 9999px; padding: 0.3em 0.8em; font-size: 0.82em; }
    .t-steps { padding-left: 1.4em; margin: 0 0 1em; line-height: 2; font-size: 0.9em; }
    .t-page { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 1.5em 1em; gap: 0.5em; }
    .t-page--card { background: var(--jumio-sdk-theme-light-card-bg-color, #fff); border-radius: var(--radius); max-width: 420px; margin: 0 auto; padding: 2em; }
    .t-icon { font-size: 2.5em; }
    .t-heading { margin: 0; font-size: 1.3em; }
    .t-body { margin: 0; font-size: 0.9em; opacity: 0.75; max-width: 360px; line-height: 1.6; }
    .t-link { color: var(--jumio-sdk-color-primary4, #0a7d33); }
    .t-consent-row { display: flex; align-items: center; gap: 0.5em; font-size: 0.88em; cursor: pointer; }
    .t-video-box { width: 100%; max-width: 480px; }
    .t-video-placeholder { background: #111; color: #fff; border-radius: var(--radius); padding: 3em 1em; font-size: 1.1em; text-align: center; opacity: 0.7; }
    .t-caption { font-size: 0.82em; opacity: 0.6; margin: 0; }
${skeletonStyle}
${publishCredFormStyle}
  </style>
</head>
<body>
${opts.published ? '' : journeyBarHtml()}

  <div class="sdk-area">
${(() => {
      if (opts.published) return publishedSdkBlock(profile, opts);

      const jumioSdkHtml = `<jumio-sdk dc="${escapeHtml(session.dc ?? 'us')}" token="${escapeHtml(session.token ?? 'REPLACE_WITH_SESSION_TOKEN')}" locale="${escapeHtml(session.locale || profile.sdk?.locale || 'en')}"></jumio-sdk>`;
      const launchScript = `
    <script>
      (function() {
        var btn = document.getElementById('start-verification');
        if (btn) {
          btn.addEventListener('click', function() {
            document.getElementById('jumio-sdk-mount').outerHTML = \`${jumioSdkHtml.replace(/`/g, '\\`')}\`;
            var b = document.getElementById('start-verification');
            if (b) b.remove();
          });
        }
      })();
    </script>`;
      if (opts.started) return `    ${jumioSdkHtml}`;

      return `    <div id="jumio-sdk-mount">${skeletonHtml()}</div>
    <button type="button" class="start-verification" id="start-verification">Start verification</button>
    ${launchScript}`;
    })()}
  </div>
</body>
</html>
`;
}

/**
 * Published-page SDK block: "Start verification" -> inline credential form -> /api/session
 * -> mount <jumio-sdk> with the returned token. Lets a shared demo link work for any visitor
 * without baking Jumio API credentials into the published page.
 */
function publishedSdkBlock(profile, opts) {
  const locale = escapeHtml(opts.locale || profile.sdk?.locale || 'en');
  const workflowKey = escapeHtml(opts.workflowKey ?? '');

  const regionOptions = PUBLISH_REGIONS
    .map(({ value, label }) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`)
    .join('');

  const credFormHtml = `<form id="publish-cred-form" class="publish-cred-form">
        <h3>Connect to start verification</h3>
        <p class="publish-cred-hint">Enter Jumio API credentials to start this demo.</p>
        <label for="publish-api-key">API Key</label>
        <input type="text" id="publish-api-key" name="apiKey" autocomplete="off" required />
        <label for="publish-api-secret">API Secret</label>
        <input type="password" id="publish-api-secret" name="apiSecret" autocomplete="off" required />
        <label for="publish-region">Region</label>
        <select id="publish-region" name="region">${regionOptions}</select>
        <button type="submit" class="t-cta">Start verification</button>
        <p class="publish-cred-error" id="publish-cred-error"></p>
      </form>`;

  const script = `
    <script>
      (function() {
        var WORKFLOW_KEY = ${JSON.stringify(workflowKey)};
        var LOCALE = ${JSON.stringify(locale)};
        var mount = document.getElementById('jumio-sdk-mount');

        function escAttr(s) {
          return String(s).replace(/[&<>"']/g, function(c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
          });
        }

        var form = document.getElementById('publish-cred-form');
        var errorEl = document.getElementById('publish-cred-error');
        var submitBtn = form.querySelector('button[type="submit"]');

        form.addEventListener('submit', function(e) {
          e.preventDefault();
          errorEl.textContent = '';
          submitBtn.disabled = true;
          submitBtn.textContent = 'Connecting…';

          fetch('/api/session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              apiKey: form.apiKey.value.trim(),
              apiSecret: form.apiSecret.value.trim(),
              region: form.region.value,
              workflowKey: WORKFLOW_KEY,
            }),
          })
            .then(function(r) { return r.json().then(function(data) { return { ok: r.ok, data: data }; }); })
            .then(function(res) {
              if (!res.ok) throw new Error(res.data.error || 'Could not start verification');
              mount.outerHTML = '<jumio-sdk dc="' + escAttr(res.data.sdkDc) + '" token="' + escAttr(res.data.sdkToken) + '" locale="' + escAttr(LOCALE) + '"></jumio-sdk>';
            })
            .catch(function(err) {
              errorEl.textContent = err.message;
              submitBtn.disabled = false;
              submitBtn.textContent = 'Start verification';
            });
        });
      })();
    </script>`;

  return `    <div id="jumio-sdk-mount">${credFormHtml}</div>
    ${script}`;
}

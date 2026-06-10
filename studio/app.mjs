// Studio UI (WP6) — load a brand-profile.json, edit it, validate it, preview the themed
// microsite live, and export the result for /engine + /microsite. Zero dependencies.

import { renderMicrosite, slugify } from '../microsite/render.mjs';
import { validateProfile } from './validate.mjs';

const DEFAULT_PROFILE_URL = '../brand-profile.sample.json';

const els = {
  fileInput: document.getElementById('file-input'),
  loadSampleBtn: document.getElementById('load-sample'),
  errors: document.getElementById('errors'),
  form: document.getElementById('brand-form'),
  sessionForm: document.getElementById('session-form'),
  advancedJson: document.getElementById('advanced-json'),
  preview: document.getElementById('preview'),
  startVerification: document.getElementById('start-verification'),
  downloadProfile: document.getElementById('download-profile'),
  downloadMicrosite: document.getElementById('download-microsite'),
  slug: document.getElementById('slug'),
};

let profile = null;

/** Session credentials for <jumio-sdk dc token> — kept out of brand-profile.json. */
const session = { dc: 'us', token: '' };

/** Whether the preview should mount <jumio-sdk> directly, or show the skeleton + button. */
let started = false;

/** Get/set a nested value via a dot path, e.g. "brand.colors.primary". */
function getPath(obj, pathStr) {
  return pathStr.split('.').reduce((o, k) => o?.[k], obj);
}
function setPath(obj, pathStr, value) {
  const keys = pathStr.split('.');
  let cur = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    cur[keys[i]] ??= {};
    cur = cur[keys[i]];
  }
  cur[keys[keys.length - 1]] = value;
}

const FIELDS = [
  ['brand.name', 'text'],
  ['brand.sourceUrl', 'text'],
  ['brand.logo', 'text'],
  ['brand.fontFamily', 'text'],
  ['brand.fontUrl', 'text'],
  ['brand.radius', 'text'],
  ['brand.colors.primary', 'color'],
  ['brand.colors.onPrimary', 'color'],
  ['brand.colors.text', 'color'],
  ['brand.colors.pageBackground', 'color'],
  ['brand.colors.cardBackground', 'color'],
  ['brand.colors.destructive', 'color'],
  ['journey.vertical', 'text'],
  ['journey.ctaLabel', 'text'],
  ['journey.idvStepIndex', 'number'],
  ['sdk.workflow', 'text'],
  ['sdk.locale', 'text'],
];

function syncFormFromProfile() {
  for (const [path, type] of FIELDS) {
    const input = els.form.elements[path];
    if (!input) continue;
    const value = getPath(profile, path);
    if (type === 'color') {
      input.value = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value ?? '') ? value : '#000000';
      const text = els.form.elements[path + '__text'];
      if (text) text.value = value ?? '';
    } else {
      input.value = value ?? '';
    }
  }

  const steps = profile.journey?.steps ?? [];
  els.form.elements['journey.steps'].value = steps.join(', ');

  els.advancedJson.value = JSON.stringify(profile.advanced?.tokenOverrides ?? {}, null, 2);
}

function syncProfileFromForm() {
  for (const [path, type] of FIELDS) {
    const input = els.form.elements[path];
    if (!input) continue;
    let value = input.value;
    if (type === 'number') value = value === '' ? undefined : Number(value);
    if (value === '' || value === undefined) continue;
    setPath(profile, path, value);
  }

  const stepsRaw = els.form.elements['journey.steps'].value;
  profile.journey ??= {};
  profile.journey.steps = stepsRaw.split(',').map((s) => s.trim()).filter(Boolean);

  try {
    const overrides = JSON.parse(els.advancedJson.value || '{}');
    profile.advanced = { tokenOverrides: overrides };
  } catch {
    // leave advanced.tokenOverrides untouched if the JSON is currently invalid mid-edit
  }
}

function render() {
  const errors = validateProfile(profile);
  els.errors.innerHTML = '';
  if (errors.length) {
    els.errors.hidden = false;
    for (const err of errors) {
      const li = document.createElement('li');
      li.textContent = err;
      els.errors.append(li);
    }
  } else {
    els.errors.hidden = true;
  }

  els.slug.textContent = slugify(profile.brand?.name);

  if (!started) {
    els.preview.srcdoc = '';
    return;
  }

  try {
    els.preview.srcdoc = renderMicrosite(profile, undefined, session, { started });
  } catch (err) {
    els.preview.srcdoc = `<pre style="color:red">${String(err)}</pre>`;
  }
}

function onFormInput(e) {
  // keep paired color/text inputs in sync
  const target = e.target;
  if (target.name?.endsWith('__text')) {
    const colorName = target.name.replace('__text', '');
    const colorInput = els.form.elements[colorName];
    if (colorInput && /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(target.value)) colorInput.value = target.value;
  } else if (target.type === 'color') {
    const textInput = els.form.elements[target.name + '__text'];
    if (textInput) textInput.value = target.value;
  }

  started = false;
  syncProfileFromForm();
  render();
}

async function loadProfile(json) {
  profile = json;
  started = false;
  syncFormFromProfile();
  render();
}

els.form.addEventListener('input', onFormInput);

els.fileInput.addEventListener('change', async () => {
  const file = els.fileInput.files?.[0];
  if (!file) return;
  try {
    const json = JSON.parse(await file.text());
    await loadProfile(json);
  } catch (err) {
    els.errors.hidden = false;
    els.errors.innerHTML = `<li>Could not parse JSON: ${String(err)}</li>`;
  }
});

els.loadSampleBtn.addEventListener('click', async () => {
  const res = await fetch(DEFAULT_PROFILE_URL);
  await loadProfile(await res.json());
});

els.downloadProfile.addEventListener('click', () => {
  syncProfileFromForm();
  download(`${slugify(profile.brand?.name)}.brand-profile.json`, JSON.stringify(profile, null, 2), 'application/json');
});

els.downloadMicrosite.addEventListener('click', () => {
  syncProfileFromForm();
  download(`${slugify(profile.brand?.name)}.index.html`, renderMicrosite(profile, undefined, session), 'text/html');
});

els.sessionForm.addEventListener('input', () => {
  session.dc = els.sessionForm.elements['dc'].value;
  session.token = els.sessionForm.elements['token'].value;
  render();
});

els.startVerification.addEventListener('click', () => {
  started = true;
  render();
});

function download(filename, contents, mime) {
  const blob = new Blob([contents], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Boot with the sample profile so the studio is never blank.
els.loadSampleBtn.click();

import { useState, useCallback, useMemo } from 'react';
import { renderMicrosite, slugify } from '../microsite/render.mjs';
import { validateProfile } from './validate.mjs';
import sampleProfile from '../brand-profile.sample.json';
import bybitProfile    from '../brands/brand-profile.bybit.json';
import linkedinProfile from '../brands/brand-profile.linkedin.json';
import okadaProfile    from '../brands/brand-profile.okada.json';
import revolutProfile  from '../brands/brand-profile.revolut.json';
import xboxProfile     from '../brands/brand-profile.xbox.json';
import './studio.css';

const KNOWN_BRANDS = {
  'bybit.com':    bybitProfile,
  'linkedin.com': linkedinProfile,
  'okada.com':    okadaProfile,
  'revolut.com':  revolutProfile,
  'xbox.com':     xboxProfile,
};

const BRAND_PRESETS = [
  { label: 'Bybit',    profile: bybitProfile,    url: 'https://bybit.com' },
  { label: 'LinkedIn', profile: linkedinProfile, url: 'https://linkedin.com' },
  { label: 'Okada',    profile: okadaProfile,    url: 'https://okada.com' },
  { label: 'Revolut',  profile: revolutProfile,  url: 'https://revolut.com' },
  { label: 'Xbox',     profile: xboxProfile,     url: 'https://xbox.com' },
];

const DEMO_PERSONAS = [
  { label: 'Ian Fraser Thomas', firstName: 'Ian Fraser', lastName: 'Thomas', dateOfBirth: '1970-07-30' },
];

const BLANK_CUSTOMER = { firstName: '', lastName: '', dateOfBirth: '' };

const HARVEST_STEPS = [
  'Fetching page…',
  'Detecting colors…',
  'Extracting fonts…',
  'Reading logo…',
  'Building profile…',
];

// ─── helpers ────────────────────────────────────────────────────────────────

function getPath(obj, path) {
  return path.split('.').reduce((o, k) => o?.[k], obj);
}

function setPath(obj, path, value) {
  const keys = path.split('.');
  const result = structuredClone(obj);
  let cur = result;
  for (let i = 0; i < keys.length - 1; i++) {
    cur[keys[i]] ??= {};
    cur = cur[keys[i]];
  }
  cur[keys[keys.length - 1]] = value;
  return result;
}

function download(filename, contents, mime) {
  const blob = new Blob([contents], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

const HEX = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'German' },
  { code: 'es', label: 'Spanish' },
  { code: 'fr', label: 'French' },
  { code: 'pt', label: 'Portuguese' },
  { code: 'it', label: 'Italian' },
  { code: 'nl', label: 'Dutch' },
  { code: 'ja', label: 'Japanese' },
  { code: 'zh', label: 'Chinese' },
];

const STRING_SCREENS = [
  {
    value: 'start',
    label: 'Start screen',
    keys: [
      { key: 'instruction.start_verification',                                         label: 'Title' },
      { key: 'instruction.process_verifies_identity_and_protects_from_identity_theft', label: 'Subtitle' },
      { key: 'instruction.use_government_issued_document',                              label: 'Bullet 1 — valid document' },
      { key: 'instruction.find_well_lit_surface',                                      label: 'Bullet 2 — well-lit surface' },
      { key: 'instruction.be_ready_to_take_selfie',                                    label: 'Bullet 3 — selfie ready' },
      { key: 'cta.start',                                                              label: 'Start button' },
    ],
  },
  {
    value: 'doc-select',
    label: 'Document selection',
    keys: [
      { key: 'id.doc_type_selection.id_verification', label: 'Screen title' },
      { key: 'id.instruction.select_id_type',           label: 'Instruction' },
      { key: 'id.types.passport',                     label: 'Passport' },
      { key: 'id.types.drivers_licence',              label: 'Driver\'s license' },
      { key: 'id.types.id_card',                      label: 'ID card' },
    ],
  },
  {
    value: 'buttons',
    label: 'Buttons (global)',
    keys: [
      { key: 'cta.continue',  label: 'Continue' },
      { key: 'cta.back',      label: 'Back' },
      { key: 'cta.retake',    label: 'Retake' },
      { key: 'cta.try_again', label: 'Try again' },
      { key: 'cta.upload_file', label: 'Upload file' },
    ],
  },
  {
    value: 'finish',
    label: 'Finish screen',
    keys: [
      { key: 'finish.thank_you_message', label: 'Thank you message' },
      { key: 'status.success',           label: 'Success label' },
    ],
  },
];

const TEMPLATE_SLOTS = [
  {
    id: 'jumio-start-before',
    label: 'Before (inject top)',
    description: 'Content injected before the start block — shown above the title. Perfect for a hero banner, video, or trust row.',
    snippets: [
      { label: 'Welcome banner', html:
`<div style="background:var(--jumio-sdk-theme-light-card-bg-color,#fff);border-radius:10px;padding:1.1em 1.25em;margin-bottom:0.75em;text-align:center">
  <p style="margin:0;font-size:1em;font-weight:600">👋 Welcome! Let's get you verified</p>
  <p style="margin:0.35em 0 0;font-size:0.85em;opacity:0.65">This only takes about 2 minutes. Have your ID ready.</p>
</div>` },
      { label: 'Video intro', html:
`<div style="margin-bottom:0.85em;border-radius:10px;overflow:hidden;position:relative;aspect-ratio:16/9">
  <iframe src="https://www.youtube.com/embed/w8Ito7HXzU4?start=0&end=15&autoplay=1&mute=1&loop=1&playlist=w8Ito7HXzU4&controls=0&rel=0&modestbranding=1" style="position:absolute;inset:0;width:100%;height:100%;border:none" allow="autoplay;encrypted-media" allowfullscreen></iframe>
</div>` },
      { label: 'Hero image', html:
`<div style="margin-bottom:0.85em;border-radius:10px;overflow:hidden">
  <img src="YOUR_IMAGE_URL" alt="" style="width:100%;display:block;object-fit:cover;max-height:180px">
</div>` },
      { label: 'Trust badges', html:
`<div style="display:flex;gap:0.5em;flex-wrap:wrap;justify-content:center;margin-bottom:0.85em">
  <span style="background:var(--jumio-sdk-theme-light-card-bg-color,#f5f7fa);border-radius:9999px;padding:0.3em 0.9em;font-size:0.8em">🔒 256-bit encrypted</span>
  <span style="background:var(--jumio-sdk-theme-light-card-bg-color,#f5f7fa);border-radius:9999px;padding:0.3em 0.9em;font-size:0.8em">⚡ Under 2 minutes</span>
  <span style="background:var(--jumio-sdk-theme-light-card-bg-color,#f5f7fa);border-radius:9999px;padding:0.3em 0.9em;font-size:0.8em">🌍 Trusted globally</span>
</div>` },
      { label: 'Step indicator', html:
`<ol style="display:flex;gap:0;list-style:none;margin:0 0 1em;padding:0;counter-reset:steps">
  <li style="flex:1;text-align:center;font-size:0.75em;opacity:0.5;position:relative">
    <span style="display:block;width:1.8em;height:1.8em;border-radius:50%;background:var(--jumio-sdk-color-primary4,#0a7d33);color:#fff;line-height:1.8em;margin:0 auto 0.3em;font-weight:700">1</span>Scan ID
  </li>
  <li style="flex:1;text-align:center;font-size:0.75em;opacity:0.5">
    <span style="display:block;width:1.8em;height:1.8em;border-radius:50%;background:var(--jumio-sdk-color-primary4,#0a7d33);color:#fff;line-height:1.8em;margin:0 auto 0.3em;font-weight:700">2</span>Selfie
  </li>
  <li style="flex:1;text-align:center;font-size:0.75em;opacity:0.5">
    <span style="display:block;width:1.8em;height:1.8em;border-radius:50%;background:var(--jumio-sdk-color-primary4,#0a7d33);color:#fff;line-height:1.8em;margin:0 auto 0.3em;font-weight:700">3</span>Done
  </li>
</ol>` },
    ],
  },
  {
    id: 'jumio-start-guidance',
    label: 'Guidance block (title + checklist)',
    description: 'Replaces the title, explanation, and all three checklist bullets in one block. The three individual slots (title, explanation, checklist) are ignored when this is set.',
    snippets: [
      { label: 'Video intro', html:
`<div style="border-radius:10px;overflow:hidden;position:relative;aspect-ratio:16/9;margin-bottom:0.75em">
  <iframe src="https://www.youtube.com/embed/w8Ito7HXzU4?start=0&end=15&autoplay=1&mute=1&loop=1&playlist=w8Ito7HXzU4&controls=0&rel=0&modestbranding=1" style="position:absolute;inset:0;width:100%;height:100%;border:none" allow="autoplay;encrypted-media" allowfullscreen></iframe>
</div>` },
      { label: 'Compact card', html:
`<div style="background:var(--jumio-sdk-theme-light-card-bg-color,#fff);border-radius:10px;padding:1.1em 1.25em;margin-bottom:0.5em">
  <p style="margin:0 0 0.6em;font-weight:700;font-size:1em">Quick identity check</p>
  <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.4em;font-size:0.85em;opacity:0.8">
    <li>✅ Valid ID (passport, driver's licence, or national ID)</li>
    <li>💡 Well-lit environment</li>
    <li>🤳 Front-facing camera for selfie</li>
  </ul>
</div>` },
      { label: 'Card tiles', html:
`<div style="margin-bottom:0.5em">
  <p style="margin:0 0 0.65em;font-weight:700;font-size:1em;text-align:center">What you'll need</p>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.5em;font-size:0.78em;text-align:center">
    <div style="background:var(--jumio-sdk-theme-light-card-bg-color,#f5f7fa);border-radius:8px;padding:0.7em 0.4em">🪪<br/>Valid ID</div>
    <div style="background:var(--jumio-sdk-theme-light-card-bg-color,#f5f7fa);border-radius:8px;padding:0.7em 0.4em">☀️<br/>Good light</div>
    <div style="background:var(--jumio-sdk-theme-light-card-bg-color,#f5f7fa);border-radius:8px;padding:0.7em 0.4em">📷<br/>Camera ready</div>
  </div>
</div>` },
      { label: 'Emoji checklist', html:
`<div style="margin-bottom:0.5em">
  <p style="margin:0 0 0.65em;font-weight:700;font-size:1em">Start verification</p>
  <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.55em">
    <li style="display:flex;align-items:center;gap:0.6em;font-size:0.9em">✅ Have your government-issued ID ready</li>
    <li style="display:flex;align-items:center;gap:0.6em;font-size:0.9em">💡 Find a well-lit spot</li>
    <li style="display:flex;align-items:center;gap:0.6em;font-size:0.9em">🤳 Be ready for a quick selfie</li>
  </ul>
</div>` },
      { label: 'Step indicator', html:
`<div style="margin-bottom:0.75em">
  <p style="margin:0 0 0.75em;font-weight:700;font-size:1em;text-align:center">How it works</p>
  <ol style="display:flex;list-style:none;margin:0;padding:0;gap:0">
    <li style="flex:1;text-align:center;font-size:0.75em">
      <span style="display:block;width:1.8em;height:1.8em;border-radius:50%;background:var(--jumio-sdk-color-primary4,#0a7d33);color:#fff;line-height:1.8em;margin:0 auto 0.3em;font-weight:700">1</span>Scan ID
    </li>
    <li style="flex:1;text-align:center;font-size:0.75em">
      <span style="display:block;width:1.8em;height:1.8em;border-radius:50%;background:var(--jumio-sdk-color-primary4,#0a7d33);color:#fff;line-height:1.8em;margin:0 auto 0.3em;font-weight:700">2</span>Selfie
    </li>
    <li style="flex:1;text-align:center;font-size:0.75em">
      <span style="display:block;width:1.8em;height:1.8em;border-radius:50%;background:var(--jumio-sdk-color-primary4,#0a7d33);color:#fff;line-height:1.8em;margin:0 auto 0.3em;font-weight:700">3</span>Done ✓
    </li>
  </ol>
</div>` },
    ],
  },
  {
    id: 'jumio-start-after',
    label: 'After (inject bottom)',
    description: 'Content injected after the start block — shown below the CTA button.',
    snippets: [
      { label: 'Support link', html:
`<p style="text-align:center;font-size:0.8em;opacity:0.55;margin-top:1em">
  Need help? <a href="mailto:support@example.com" style="color:var(--jumio-sdk-color-primary4,#0a7d33)">Contact support</a>
</p>` },
      { label: 'Privacy note', html:
`<p style="text-align:center;font-size:0.75em;opacity:0.45;margin-top:1em;line-height:1.5">
  Your data is processed by Jumio Corp. under our
  <a href="#" style="color:inherit;text-decoration:underline">privacy policy</a> and deleted after verification.
</p>` },
      { label: 'Reassurance row', html:
`<div style="display:flex;justify-content:center;gap:1.25em;margin-top:1em;font-size:0.75em;opacity:0.5">
  <span>🔒 Secure</span><span>🚀 Fast</span><span>🛡️ Private</span>
</div>` },
    ],
  },
  {
    id: 'jumio-logotype',
    label: 'Logo',
    description: 'Replaces the Jumio logo at the top of every screen.',
    snippets: [
      { label: 'Image logo', html: `<img src="YOUR_LOGO_URL" alt="Logo" style="height:36px;object-fit:contain">` },
      { label: 'Text logo',  html: `<span style="font-size:1.1em;font-weight:800;letter-spacing:-0.03em;color:var(--jumio-sdk-color-primary4,#0a7d33)">YOUR BRAND</span>` },
    ],
  },
];

function markPlaceholderHtml(slotId) {
  return `<div style="background:rgba(127,231,83,0.12);border:1.5px dashed rgba(127,231,83,0.55);padding:0.45em 1em;border-radius:5px;font-family:monospace;font-size:0.72em;color:#7fe753;text-align:center;letter-spacing:0.04em">✦ ${slotId}</div>`;
}

function plainTextToGuidanceHtml(text) {
  if (!text.trim()) return '';
  const lines = text.split('\n').filter(line => line.trim());
  if (lines.length === 0) return '';

  const title = lines[0];
  const items = lines.slice(1);

  let html = `<div style="background:var(--jumio-sdk-theme-light-card-bg-color,#fff);border-radius:10px;padding:1.1em 1.25em;margin-bottom:0.5em">
  <p style="margin:0 0 0.6em;font-weight:700;font-size:1em">${escapeHtmlString(title)}</p>`;

  if (items.length > 0) {
    html += '\n  <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.4em;font-size:0.85em;opacity:0.8">';
    items.forEach(item => {
      html += `\n    <li>${escapeHtmlString(item)}</li>`;
    });
    html += '\n  </ul>';
  }

  html += '\n</div>';
  return html;
}

function escapeHtmlString(str) {
  return String(str ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

const TEXT_FIELDS = [
  ['brand.name',       'Name'],
  ['brand.logo',       'Logo URL'],
  ['brand.fontFamily', 'Font family'],
  ['brand.fontUrl',    'Font URL (Google Fonts, etc.)'],
  ['brand.radius',     'Corner radius', '12px'],
];

const COLOR_FIELDS = [
  ['brand.colors.primary',        'Primary'],
  ['brand.colors.onPrimary',      'On-primary (label on brand button)'],
  ['brand.colors.text',           'Text'],
  ['brand.colors.pageBackground', 'Page background'],
  ['brand.colors.cardBackground', 'Card background'],
  ['brand.colors.destructive',    'Destructive'],
];

// ─── components ─────────────────────────────────────────────────────────────

function ApplyBtn({ onApply }) {
  return (
    <button className="btn btn-ghost btn-apply" onClick={onApply}>Apply</button>
  );
}

function ColorField({ label, value, onChange, onApply, hideApply }) {
  const hex = HEX.test(value ?? '') ? value : '#000000';
  return (
    <label className="field">
      {label}
      <div className="color-row">
        <input type="color" value={hex} onChange={e => onChange(e.target.value)} />
        <input type="text" value={value ?? ''} onChange={e => onChange(e.target.value)} />
        {!hideApply && <ApplyBtn onApply={onApply} />}
      </div>
    </label>
  );
}

// ─── app ────────────────────────────────────────────────────────────────────

export default function App() {
  const [profile, setProfile] = useState(() => structuredClone(sampleProfile));
  const [session, setSession] = useState({ dc: 'us', token: '', locale: 'en' });
  const [product, setProduct] = useState('id-check-selfie');
  const [sourceUrl, setSourceUrl] = useState('');
  const [harvestState, setHarvestState] = useState(null); // null | 'loading' | 'done' | 'error'
  const [harvestStep, setHarvestStep] = useState('');
  const [harvestBrand, setHarvestBrand] = useState('');
  const [advancedJson, setAdvancedJson] = useState(() =>
    JSON.stringify(sampleProfile.advanced?.tokenOverrides ?? {}, null, 2)
  );
  const [started, setStarted] = useState(false);
  const [stringsScreen, setStringsScreen] = useState('start');
  const [stringsLang, setStringsLang] = useState('en');
  const [templateSlotId, setTemplateSlotId] = useState('jumio-start-guidance');
  const [templateSnippetLabel, setTemplateSnippetLabel] = useState('');
  const [customGuidanceText, setCustomGuidanceText] = useState('');
  const [customVideoUrl, setCustomVideoUrl] = useState('');
  const [brandOpen, setBrandOpen] = useState(false);
  const [colorsOpen, setColorsOpen] = useState(false);
  const [finetunePanelOpen, setFinetunePanelOpen] = useState(false);
  const [customerData, setCustomerData] = useState({ ...DEMO_PERSONAS[0] });
  const [personaLabel, setPersonaLabel] = useState(DEMO_PERSONAS[0].label);
  const [showSessionWarning, setShowSessionWarning] = useState(false);
  const [credentialsActive, setCredentialsActive] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showPreIdvTeaser, setShowPreIdvTeaser] = useState(false);
  const [showPostIdvTeaser, setShowPostIdvTeaser] = useState(false);

  const errors = validateProfile(profile);
  const slug = slugify(profile.brand?.name);

  const srcdoc = useMemo(() => {
    if (!started || errors.length) return '';
    try {
      return renderMicrosite(profile, undefined, session, { started });
    } catch (e) {
      return `<pre style="color:red">${String(e)}</pre>`;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, profile, session]);

  const setField = useCallback((path, value) => {
    setStarted(false);
    setProfile(prev => setPath(prev, path, value === '' ? undefined : value));
  }, []);


  function setStringOverride(lang, key, value) {
    setStarted(false);
    setProfile(prev => {
      const next = structuredClone(prev);
      next.strings ??= {};
      next.strings[lang] ??= {};
      if (value === '') {
        delete next.strings[lang][key];
        if (!Object.keys(next.strings[lang]).length) delete next.strings[lang];
        if (!Object.keys(next.strings).length) delete next.strings;
      } else {
        next.strings[lang][key] = value;
      }
      return next;
    });
  }

  function applyAdvancedJson(raw) {
    setAdvancedJson(raw);
    try {
      const overrides = JSON.parse(raw || '{}');
      setProfile(prev => setPath(prev, 'advanced.tokenOverrides', overrides));
    } catch { /* ignore mid-edit invalid JSON */ }
  }

  function loadProfile(json) {
    setProfile(json);
    setAdvancedJson(JSON.stringify(json.advanced?.tokenOverrides ?? {}, null, 2));
    setStarted(false);
  }

  async function runHarvest() {
    if (!sourceUrl.trim()) return;
    setHarvestState('loading');
    setHarvestBrand('');

    // step through progress messages
    for (const step of HARVEST_STEPS) {
      setHarvestStep(step);
      await new Promise(r => setTimeout(r, 340 + Math.random() * 220));
    }

    // resolve domain and pick profile
    let domain = '';
    try { domain = new URL(sourceUrl.startsWith('http') ? sourceUrl : 'https://' + sourceUrl).hostname.replace('www.', ''); }
    catch { domain = sourceUrl.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]; }

    const known = Object.entries(KNOWN_BRANDS).find(([k]) => domain.includes(k));
    if (known) {
      loadProfile(structuredClone(known[1]));
      setHarvestBrand(known[1].brand?.name ?? domain);
    } else {
      // generic mock — fill name + placeholder color from domain
      const name = domain.split('.')[0].replace(/^\w/, c => c.toUpperCase());
      loadProfile({
        ...structuredClone(sampleProfile),
        brand: { ...structuredClone(sampleProfile.brand), name, sourceUrl },
      });
      setHarvestBrand(name);
    }
    setHarvestState('done');
  }


  return (
    <div className="studio">

      {/* ── sidebar ── */}
      <aside className="sidebar">

        <div className="studio-header">
          <span className="studio-title">Jumio SmartDemo Tool</span>
          <span className="studio-badge">Studio</span>
        </div>

        {/* ── config panel ── */}
        <div className="config-panel">
          <div className="field-grid field-grid-3">
            <label className="field">
              Datacenter
              <select
                value={session.dc}
                onChange={e => { setSession(s => ({ ...s, dc: e.target.value })); setStarted(true); }}
                disabled={credentialsActive}
                title={credentialsActive ? 'Datacenter is locked to the connected credentials' : ''}
              >
                <option value="us">US</option>
                <option value="eu">EU</option>
                <option value="sgp">SGP</option>
              </select>
            </label>
            <label className="field">
              Locale
              <input type="text" value={session.locale}
                onChange={e => { setSession(s => ({ ...s, locale: e.target.value })); setStarted(false); }} />
            </label>
            <label className="field">
              Product
              <select value={product} onChange={e => { setProduct(e.target.value); setStarted(true); }}>
                <option value="id-check">ID Check</option>
                <option value="id-check-selfie">ID Check + Selfie</option>
                <option value="liveness">Liveness standalone</option>
                <option value="selfie">Selfie.DONE</option>
              </select>
            </label>
          </div>

          <label className="field" style={{ marginTop: '0.65rem' }}>
            API Credentials
            {credentialsActive ? (
              <div className="credentials-status">
                <span className="credentials-badge">✓ Connected</span>
                <button
                  className="btn btn-ghost config-credentials-btn"
                  onClick={() => setCredentialsActive(false)}
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button className="btn btn-ghost config-credentials-btn" disabled>
                🔐 Connect credentials — coming soon
              </button>
            )}
          </label>

          <label className="field" style={{ marginTop: '0.65rem' }}>
            Session token
            <div className="input-apply-row">
              <input type="text" value={session.token} placeholder="Paste session token here"
                onChange={e => { setSession(s => ({ ...s, token: e.target.value })); setStarted(false); }} />
              {session.token && (
                <select className="token-dc-select" value={session.dc} onChange={e => { setSession(s => ({ ...s, dc: e.target.value })); setStarted(true); }}>
                  <option value="us">US</option>
                  <option value="eu">EU</option>
                  <option value="sgp">SGP</option>
                </select>
              )}
              <ApplyBtn onApply={() => setStarted(true)} />
            </div>
          </label>
        </div>

        {/* ── customer data (Selfie.DONE only) ── */}
        {product === 'selfie' && (
          <div className="customer-panel">
            <div className="customer-panel__header">
              <span className="customer-panel__title">Customer data</span>
              <span className="customer-panel__badge">required</span>
            </div>
            <p className="customer-panel__hint">
              Used when creating the session token on-the-fly for Selfie.DONE.
            </p>
            <label className="field">
              Demo persona
              <select
                value={personaLabel}
                onChange={e => {
                  const val = e.target.value;
                  setPersonaLabel(val);
                  if (val === '__custom__') return;
                  const p = DEMO_PERSONAS.find(p => p.label === val);
                  if (p) setCustomerData({ firstName: p.firstName, lastName: p.lastName, dateOfBirth: p.dateOfBirth });
                }}
              >
                {DEMO_PERSONAS.map(p => (
                  <option key={p.label} value={p.label}>{p.label}</option>
                ))}
                <option value="__custom__">— Custom —</option>
              </select>
            </label>
            <div className="customer-fields">
              <label className="field">
                First name
                <input
                  type="text"
                  value={customerData.firstName}
                  onChange={e => { setPersonaLabel('__custom__'); setCustomerData(d => ({ ...d, firstName: e.target.value })); }}
                />
              </label>
              <label className="field">
                Last name
                <input
                  type="text"
                  value={customerData.lastName}
                  onChange={e => { setPersonaLabel('__custom__'); setCustomerData(d => ({ ...d, lastName: e.target.value })); }}
                />
              </label>
              <label className="field">
                Date of birth
                <input
                  type="text"
                  value={customerData.dateOfBirth}
                  placeholder="YYYY-MM-DD"
                  onChange={e => { setPersonaLabel('__custom__'); setCustomerData(d => ({ ...d, dateOfBirth: e.target.value })); }}
                />
              </label>
            </div>
            <button className="btn btn-primary customer-submit-btn" onClick={() => setShowSessionWarning(true)}>
              Create session &amp; launch →
            </button>
          </div>
        )}

        {/* ── brand url / harvester ── */}
        <div className="harvest-panel">
          <div className="harvest-preset-row">
            <span className="harvest-preset-label">Quick load</span>
            <select
              className="harvest-preset-select"
              value=""
              onChange={e => {
                const preset = BRAND_PRESETS[e.target.value];
                if (!preset) return;
                setSourceUrl(preset.url);
                setHarvestState(null);
                loadProfile(structuredClone(preset.profile));
                setHarvestBrand(preset.label);
                setHarvestState('done');
              }}
            >
              <option value="">— pick a brand —</option>
              {BRAND_PRESETS.map((p, i) => (
                <option key={p.label} value={i}>{p.label}</option>
              ))}
            </select>
            <button
              className="btn btn-ghost btn-apply"
              title="Reset to default profile"
              onClick={() => {
                loadProfile(structuredClone(sampleProfile));
                setSourceUrl('');
                setHarvestState(null);
                setHarvestBrand('');
                setStarted(false);
              }}
            >↺ Reset</button>
          </div>

          <label className="field" style={{ marginTop: '0.65rem' }}>
            Brand website URL
            <div className="harvest-row">
              <input
                type="text"
                value={sourceUrl}
                placeholder="https://brand.com"
                onChange={e => { setSourceUrl(e.target.value); setHarvestState(null); }}
                onKeyDown={e => e.key === 'Enter' && runHarvest()}
              />
              <button
                className={`btn btn-primary harvest-btn${harvestState === 'loading' ? ' loading' : ''}`}
                onClick={runHarvest}
                disabled={harvestState === 'loading' || !sourceUrl.trim()}
              >
                {harvestState === 'loading' ? '⏳' : '✦ Analyze'}
              </button>
            </div>
          </label>

          {harvestState === 'loading' && (
            <div className="harvest-progress">
              <span className="harvest-spinner" />
              {harvestStep}
            </div>
          )}
          {harvestState === 'done' && (
            <div className="harvest-success">
              ✓ Brand detected: <strong>{harvestBrand}</strong> — fields pre-filled below
            </div>
          )}

        </div>

        {/* ── apply section ── */}
        <div className="apply-section">
          <div className="apply-section__header">
            <span className="apply-section__title">Ready to see your changes?</span>
          </div>
          <p className="apply-section__description">
            Click below to apply your configuration and any customizations to the preview.
          </p>
          <button className="btn btn-primary apply-section__btn" onClick={() => setStarted(true)}>
            Apply →
          </button>
        </div>

        {errors.length > 0 && (
          <ul className="errors">
            {errors.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        )}

        {/* ── fine-tuning panel ── */}
        <button className="advanced-section-header" onClick={() => setFinetunePanelOpen(o => !o)}>
          <div className="advanced-section-header__content">
            <span className="advanced-section-header__icon">✨</span>
            <div>
              <span className="advanced-section-header__title">Advanced customization</span>
              <span className="advanced-section-header__subtitle">Where the real magic happens</span>
            </div>
          </div>
          <span className="collapsible-chevron">{finetunePanelOpen ? '▲' : '▼'}</span>
        </button>

        {finetunePanelOpen && (
          <div className="finetune-panel">
            <p className="finetune-panel__description">
              Fine-tune the look &amp; feel: change colors, swap the logo, or customize the text users see. Adjust individual text fields, or replace entire sections with templates.
            </p>

            <button className="collapsible-header" onClick={() => setBrandOpen(o => !o)}>
              <span>Brand</span>
              <span className="collapsible-chevron">{brandOpen ? '▲' : '▼'}</span>
            </button>
          {brandOpen && TEXT_FIELDS.map(([path, label, placeholder]) => (
            <label key={path} className="field">
              {label}
              <input type="text" value={getPath(profile, path) ?? ''}
                placeholder={placeholder ?? ''}
                onChange={e => setField(path, e.target.value)} />
            </label>
          ))}

          <button className="collapsible-header" onClick={() => setColorsOpen(o => !o)}>
            <span>Colors</span>
            <span className="collapsible-chevron">{colorsOpen ? '▲' : '▼'}</span>
          </button>
          {colorsOpen && COLOR_FIELDS.map(([path, label]) => (
            <ColorField key={path} label={label}
              value={getPath(profile, path)}
              onChange={v => setField(path, v)}
              hideApply={true} />
          ))}

          <h2 className="section-header">Template override</h2>
          {(() => {
            const slot = TEMPLATE_SLOTS.find(s => s.id === templateSlotId);
            const slotPath = `templateOverride.slots.${templateSlotId}`;
            const currentHtml = getPath(profile, slotPath) ?? '';
            return (
              <div className="template-override-panel">
                <div className="template-selector-row">
                  <label className="field">
                    Slot
                    <select value={templateSlotId} onChange={e => {
                      setTemplateSlotId(e.target.value);
                      setTemplateSnippetLabel('');
                    }}>
                      {TEMPLATE_SLOTS.map(s => (
                        <option key={s.id} value={s.id}>{s.label}</option>
                      ))}
                    </select>
                  </label>
                  <label className="field">
                    Snippet
                    <select
                      value={templateSnippetLabel}
                      onChange={e => {
                        const label = e.target.value;
                        setTemplateSnippetLabel(label);
                        const snippet = slot.snippets?.find(s => s.label === label);
                        if (snippet) setField(slotPath, snippet.html);
                      }}
                    >
                      <option value="">— pick a snippet —</option>
                      {slot.snippets?.map(s => (
                        <option key={s.label} value={s.label}>{s.label}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <p className="template-zone-desc">{slot.description}</p>

                {templateSlotId === 'jumio-start-guidance' && (
                  <div style={{ marginTop: '0.75rem', padding: '0.75rem', background: 'rgba(127,231,83,0.04)', borderRadius: '6px', border: '1px solid rgba(127,231,83,0.1)' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: '600', color: '#7fe753' }}>
                      Write custom text (no HTML needed)
                    </label>
                    <textarea
                      style={{
                        width: '100%',
                        minHeight: '80px',
                        padding: '0.6rem',
                        fontSize: '0.85em',
                        fontFamily: 'inherit',
                        border: '1px solid rgba(127,231,83,0.2)',
                        borderRadius: '5px',
                        background: 'rgba(0,0,0,0.2)',
                        color: 'inherit',
                        resize: 'vertical'
                      }}
                      placeholder="First line is the title&#10;Other lines become checklist items&#10;&#10;Example:&#10;Quick identity check&#10;Valid ID (passport or driver's license)&#10;Well-lit environment&#10;Camera ready for selfie"
                      spellCheck={false}
                      value={customGuidanceText}
                      onChange={e => setCustomGuidanceText(e.target.value)}
                    />
                    <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.35rem' }}>
                      <button
                        className="btn btn-ghost btn-apply"
                        onClick={() => {
                          const html = plainTextToGuidanceHtml(customGuidanceText);
                          setField(slotPath, html);
                          setTemplateSnippetLabel('');
                        }}
                      >Apply custom text</button>
                      {customGuidanceText && (
                        <button
                          className="btn btn-ghost btn-apply"
                          onClick={() => setCustomGuidanceText('')}
                        >Clear</button>
                      )}
                    </div>
                  </div>
                )}

                {templateSnippetLabel === 'Video intro' && (
                  <div style={{ marginTop: '0.75rem', padding: '0.75rem', background: 'rgba(127,231,83,0.04)', borderRadius: '6px', border: '1px solid rgba(127,231,83,0.1)' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: '600', color: '#7fe753' }}>
                      YouTube URL (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="https://www.youtube.com/embed/VIDEO_ID or with params: ?autoplay=1&mute=1&loop=1&..."
                      value={customVideoUrl}
                      onChange={e => setCustomVideoUrl(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.6rem',
                        fontSize: '0.85em',
                        fontFamily: 'inherit',
                        border: '1px solid rgba(127,231,83,0.2)',
                        borderRadius: '5px',
                        background: 'rgba(0,0,0,0.2)',
                        color: 'inherit',
                        marginBottom: '0.5rem'
                      }}
                    />
                    <div style={{ display: 'flex', gap: '0.35rem' }}>
                      <button
                        className="btn btn-ghost btn-apply"
                        onClick={() => {
                          const videoUrl = customVideoUrl.trim() || 'https://www.youtube.com/embed/w8Ito7HXzU4?start=0&end=15&autoplay=1&mute=1&loop=1&playlist=w8Ito7HXzU4&controls=0&rel=0&modestbranding=1';
                          const videoHtml = `<div style="border-radius:10px;overflow:hidden;position:relative;aspect-ratio:16/9;margin-bottom:0.75em">
  <iframe src="${escapeHtmlString(videoUrl)}" style="position:absolute;inset:0;width:100%;height:100%;border:none" allow="autoplay;encrypted-media" allowfullscreen></iframe>
</div>`;
                          setField(slotPath, videoHtml);
                        }}
                      >Apply video</button>
                      {customVideoUrl && (
                        <button
                          className="btn btn-ghost btn-apply"
                          onClick={() => setCustomVideoUrl('')}
                        >Clear</button>
                      )}
                    </div>
                  </div>
                )}

                <div style={{ marginTop: '0.75rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: '600' }}>Custom HTML (advanced)</label>
                  <textarea
                    className="template-override-textarea"
                    value={currentHtml}
                    placeholder="Paste custom HTML here, or click Mark to locate this slot in the preview…"
                    spellCheck={false}
                    onChange={e => { setTemplateSnippetLabel(''); setField(slotPath, e.target.value); }}
                  />
                  <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.35rem' }}>
                    <button
                      className="btn btn-ghost btn-apply"
                      title="Fill with a bright placeholder so you can see where this slot appears in the preview"
                      onClick={() => {
                        setField(slotPath, markPlaceholderHtml(templateSlotId));
                      }}
                    >Mark</button>
                    {currentHtml && (
                      <button
                        className="btn btn-ghost btn-apply"
                        onClick={() => { setField(slotPath, ''); }}
                      >Clear</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}

          <h2 className="section-header">Override strings</h2>
          <div className="strings-panel">
            <div className="strings-selectors">
              <label className="field">
                Screen
                <select value={stringsScreen} onChange={e => setStringsScreen(e.target.value)}>
                  {STRING_SCREENS.map(s => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                Language
                <select value={stringsLang} onChange={e => setStringsLang(e.target.value)}>
                  {LANGUAGES.map(l => (
                    <option key={l.code} value={l.code}>{l.label} ({l.code})</option>
                  ))}
                </select>
              </label>
            </div>
            {STRING_SCREENS.find(s => s.value === stringsScreen)?.keys.map(({ key, label }) => (
              <label key={key} className="field">
                {label}
                <input
                  type="text"
                  value={profile.strings?.[stringsLang]?.[key] ?? ''}
                  placeholder="Default (unchanged)"
                  onChange={e => setStringOverride(stringsLang, key, e.target.value)}
                />
                <span className="strings-key-hint">{key}</span>
              </label>
            ))}
          </div>
          </div>
        )}

        {/* ── prepare for customer send out ── */}
        <div className="customer-sendout-section">
          <div className="customer-sendout-section__header">
            <span className="customer-sendout-section__title">Prepare for customer send out</span>
          </div>
          <p className="customer-sendout-section__description">
            Download the HTML file to send to your customer. They can open it directly in any web browser.
          </p>
          <button className="btn btn-primary customer-sendout-btn"
            onClick={() => setShowShareModal(true)}>
            ↓ Share with your customer
          </button>
          <p className="hint">ID: <code>{slug}</code></p>
        </div>

      </aside>

      {/* ── preview ── */}
      <main className="preview-pane">
        <div className="preview-journey-nav">
          <button className="preview-journey-nav__item preview-journey-nav__item--pre" onClick={() => setShowPreIdvTeaser(true)}>
            <div className="preview-journey-nav__label">Risk Signals</div>
            <div className="preview-journey-nav__sublabel">Device, IP, custom input</div>
            <div className="preview-journey-nav__link">Learn more →</div>
          </button>
          <div className="preview-journey-nav__item preview-journey-nav__item--main">
            <div className="preview-journey-nav__label">Verification Journey</div>
            <div className="preview-journey-nav__status">YOU ARE HERE</div>
          </div>
          <button className="preview-journey-nav__item preview-journey-nav__item--post" onClick={() => setShowPostIdvTeaser(true)}>
            <div className="preview-journey-nav__label">Results & Intelligence</div>
            <div className="preview-journey-nav__sublabel">Interpretation, rules, evaluation</div>
            <div className="preview-journey-nav__link">Learn more →</div>
          </button>
        </div>
        <div className="preview-wrapper">
          <iframe
            className="preview-frame"
            title="Microsite preview"
            srcDoc={srcdoc}
            allow="autoplay; encrypted-media; fullscreen"
          />
          {!srcdoc && (
            <div className="preview-placeholder">
              <div className="preview-placeholder__card">
                <div className="preview-placeholder__dots">
                  <span /><span /><span />
                </div>
                <p className="preview-placeholder__title">Keep calm, and sell Jumio</p>
                <p className="preview-placeholder__hint">
                  Press <kbd>Apply</kbd> next to any field to render the preview
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ── session warning modal ── */}
      {showSessionWarning && (
        <div className="modal-backdrop" onClick={() => setShowSessionWarning(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-icon">⏱</div>
            <h2 className="modal-title">While you're here — talk to your client!</h2>
            <p className="modal-body">
              Use this moment. Explain what's about to happen, set the scene,
              build the excitement. <strong>A great demo is a conversation, not a click.</strong>
            </p>
            <p className="modal-body modal-body--secondary">
              Once created, the session is live for <strong>15 minutes</strong>.
              Hand the device to your client and let them run through the journey themselves.
            </p>
            <div className="modal-actions">
              <button className="btn btn-ghost" onClick={() => setShowSessionWarning(false)}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={() => {
                setShowSessionWarning(false);
                /* TODO: trigger session token creation */
              }}>
                Got it — create session →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Pre-IDV teaser modal ── */}
      {showPreIdvTeaser && (
        <div className="modal-backdrop" onClick={() => setShowPreIdvTeaser(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-icon">🔍</div>
            <h2 className="modal-title">Risk Signals</h2>
            <p className="modal-body">
              Configure what happens <strong>before</strong> the identity verification flow starts.
            </p>
            <p className="modal-body">
              Future capabilities:
            </p>
            <ul className="teaser-list">
              <li>Risk signals & KYC rules</li>
              <li>Prepared data inputs</li>
              <li>Customer risk profiles</li>
              <li>Pre-check configurations</li>
              <li>Brand-styled forms</li>
            </ul>
            <p className="modal-body modal-body--secondary">
              This feature is on the roadmap and will allow you to orchestrate the complete customer journey.
            </p>
            <div className="modal-actions">
              <button className="btn btn-primary" onClick={() => setShowPreIdvTeaser(false)}>
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Post-IDV teaser modal ── */}
      {showPostIdvTeaser && (
        <div className="modal-backdrop" onClick={() => setShowPostIdvTeaser(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-icon">💡</div>
            <h2 className="modal-title">Results & Intelligence</h2>
            <p className="modal-body">
              Configure what is shown <strong>after</strong> identity verification completes.
            </p>
            <p className="modal-body">
              Future capabilities:
            </p>
            <ul className="teaser-list">
              <li>Verification results display</li>
              <li>Risk signals & CTR</li>
              <li>Face match detection</li>
              <li>Fraud indicators</li>
              <li>Next steps & actions</li>
            </ul>
            <p className="modal-body modal-body--secondary">
              Build confidence in your risk assessment by showing customers what data you've gathered and how you interpret it.
            </p>
            <div className="modal-actions">
              <button className="btn btn-primary" onClick={() => setShowPostIdvTeaser(false)}>
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── share modal ── */}
      {showShareModal && (
        <div className="modal-backdrop" onClick={() => setShowShareModal(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-icon">📤</div>
            <h2 className="modal-title">Share with your customer</h2>
            <p className="modal-body">
              Choose how you'd like to send the demo to your customer.
            </p>

            <div className="share-options">
              <button className="share-option share-option--primary" onClick={() => {
                alert('Email integration coming soon — colleague will wire this up');
                setShowShareModal(false);
              }}>
                <span className="share-option__icon">✉️</span>
                <span className="share-option__label">Email</span>
                <span className="share-option__status">Being implemented</span>
              </button>

              <button className="share-option share-option--secondary" onClick={() => {
                download(`${slug}.index.html`, renderMicrosite(profile, undefined, session), 'text/html');
                setShowShareModal(false);
              }}>
                <span className="share-option__icon">⬇️</span>
                <span className="share-option__label">Download file</span>
                <span className="share-option__status">Direct download</span>
              </button>

              <button className="share-option share-option--mocked" disabled>
                <span className="share-option__icon">📱</span>
                <span className="share-option__label">WhatsApp</span>
                <span className="share-option__status">Conceptual</span>
              </button>

              <button className="share-option share-option--mocked" disabled>
                <span className="share-option__icon">🔗</span>
                <span className="share-option__label">QR code</span>
                <span className="share-option__status">Conceptual</span>
              </button>
            </div>

            <div className="modal-actions">
              <button className="btn btn-ghost" onClick={() => setShowShareModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

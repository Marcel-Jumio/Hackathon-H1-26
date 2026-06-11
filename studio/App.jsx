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

function LaunchButton({ errors, onLaunch }) {
  return (
    <button
      className="btn btn-primary harvest-launch-btn"
      onClick={onLaunch}
      disabled={!!errors.length}
    >
      Show styled Web journey →
    </button>
  );
}

function ApplyBtn({ onApply }) {
  return (
    <button className="btn btn-ghost btn-apply" onClick={onApply}>Apply</button>
  );
}

function ColorField({ label, value, onChange, onApply }) {
  const hex = HEX.test(value ?? '') ? value : '#000000';
  return (
    <label className="field">
      {label}
      <div className="color-row">
        <input type="color" value={hex} onChange={e => onChange(e.target.value)} />
        <input type="text" value={value ?? ''} onChange={e => onChange(e.target.value)} />
        <ApplyBtn onApply={onApply} />
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
  const [brandOpen, setBrandOpen] = useState(false);
  const [colorsOpen, setColorsOpen] = useState(false);
  const [customerData, setCustomerData] = useState({ ...DEMO_PERSONAS[0] });
  const [personaLabel, setPersonaLabel] = useState(DEMO_PERSONAS[0].label);
  const [showSessionWarning, setShowSessionWarning] = useState(false);

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
          <div className="field-grid">
            <label className="field">
              Datacenter
              <select value={session.dc} onChange={e => { setSession(s => ({ ...s, dc: e.target.value })); setStarted(true); }}>
                <option value="us">US</option>
                <option value="eu">EU</option>
                <option value="sgp">SGP</option>
              </select>
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
            <button className="btn btn-ghost config-credentials-btn" disabled>
              🔐 Connect credentials — coming soon
            </button>
          </label>

          <label className="field" style={{ marginTop: '0.65rem' }}>
            Session token
            <div className="input-apply-row">
              <input type="text" value={session.token} placeholder="Paste session token here"
                onChange={e => { setSession(s => ({ ...s, token: e.target.value })); setStarted(false); }} />
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

          <LaunchButton errors={errors} onLaunch={() => setStarted(true)} />
        </div>


        {errors.length > 0 && (
          <ul className="errors">
            {errors.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        )}

        {/* ── fine-tuning panel ── */}
        <div className="finetune-panel">
          <div className="finetune-panel__header">
            <span className="finetune-panel__title">Fine-tuning</span>
            <span className="finetune-panel__hint">Optional — review &amp; adjust extracted values</span>
          </div>

          <button className="collapsible-header" onClick={() => setBrandOpen(o => !o)}>
            <span>Brand</span>
            <span className="collapsible-chevron">{brandOpen ? '▲' : '▼'}</span>
          </button>
          {brandOpen && TEXT_FIELDS.map(([path, label, placeholder]) => (
            <label key={path} className="field">
              {label}
              <div className="input-apply-row">
                <input type="text" value={getPath(profile, path) ?? ''} placeholder={placeholder ?? ''}
                  onChange={e => setField(path, e.target.value)} />
                <ApplyBtn onApply={() => setStarted(true)} />
              </div>
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
              onApply={() => setStarted(true)} />
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
                <div className="input-apply-row" style={{ alignItems: 'flex-start', marginTop: '0.5rem' }}>
                  <textarea
                    className="template-override-textarea"
                    value={currentHtml}
                    placeholder="Paste custom HTML here, or click Mark to locate this slot in the preview…"
                    spellCheck={false}
                    onChange={e => { setTemplateSnippetLabel(''); setField(slotPath, e.target.value); }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <ApplyBtn onApply={() => setStarted(true)} />
                    <button
                      className="btn btn-ghost btn-apply"
                      title="Fill with a bright placeholder so you can see where this slot appears in the preview"
                      onClick={() => {
                        setField(slotPath, markPlaceholderHtml(templateSlotId));
                        setStarted(true);
                      }}
                    >Mark</button>
                    {currentHtml && (
                      <button
                        className="btn btn-ghost btn-apply"
                        onClick={() => { setField(slotPath, ''); setStarted(true); }}
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
                <div className="input-apply-row">
                  <input
                    type="text"
                    value={profile.strings?.[stringsLang]?.[key] ?? ''}
                    placeholder="Default (unchanged)"
                    onChange={e => setStringOverride(stringsLang, key, e.target.value)}
                  />
                  <ApplyBtn onApply={() => setStarted(true)} />
                </div>
                <span className="strings-key-hint">{key}</span>
              </label>
            ))}
          </div>
        </div>

        <h2 className="section-header">Advanced — token overrides (JSON)</h2>
        <textarea value={advancedJson} onChange={e => applyAdvancedJson(e.target.value)} spellCheck={false} />
        <ApplyBtn onApply={() => setStarted(true)} />

        <label className="field" style={{ marginTop: '1.75rem' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)' }}>Locale</span>
          <div className="input-apply-row">
            <input type="text" value={session.locale}
              onChange={e => { setSession(s => ({ ...s, locale: e.target.value })); setStarted(false); }} />
            <ApplyBtn onApply={() => setStarted(true)} />
          </div>
        </label>
        <p className="hint">
          DC, token and locale fill <code>&lt;jumio-sdk&gt;</code> in the preview — not stored in <code>brand-profile.json</code>.
        </p>

        <div className="actions" style={{ marginTop: '0.6rem' }}>
          <button className="btn btn-ghost"
            onClick={() => download(`${slug}.brand-profile.json`, JSON.stringify(profile, null, 2), 'application/json')}>
            ↓ brand-profile.json
          </button>
          <button className="btn btn-ghost"
            onClick={() => download(`${slug}.index.html`, renderMicrosite(profile, undefined, session), 'text/html')}>
            ↓ microsite HTML
          </button>
        </div>
        <p className="hint" style={{ marginTop: '0.6rem' }}>Slug: <code>{slug}</code></p>

      </aside>

      {/* ── preview ── */}
      <main className="preview-pane">
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
                <p className="preview-placeholder__title">Keep calm, the magic is happening</p>
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

    </div>
  );
}

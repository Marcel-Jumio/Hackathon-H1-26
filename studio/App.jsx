import { useState, useRef, useCallback } from 'react';
import { renderMicrosite, slugify } from '../microsite/render.mjs';
import { validateProfile } from './validate.mjs';
import sampleProfile from '../brand-profile.sample.json';

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

const TEXT_FIELDS = [
  ['brand.name',       'Name'],
  ['brand.sourceUrl',  'Source URL'],
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

// ─── sub-components ──────────────────────────────────────────────────────────

function SectionHeader({ children }) {
  return (
    <h2 style={{
      fontSize: '0.68rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: '#0a7d33',
      margin: '1.4rem 0 0.45rem',
      paddingBottom: '0.3rem',
      borderBottom: '1px solid #e2e6ea',
    }}>
      {children}
    </h2>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: 'block', fontSize: '0.8rem', margin: '0.5rem 0 0.15rem', color: '#374151' }}>
      {label}
      {children}
    </label>
  );
}

function TextInput({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value ?? ''}
      placeholder={placeholder ?? ''}
      onChange={e => onChange(e.target.value)}
      style={inputStyle}
    />
  );
}

function ColorField({ label, value, onChange }) {
  const hex = HEX.test(value ?? '') ? value : '#000000';
  return (
    <Field label={label}>
      <div style={{ display: 'flex', gap: '0.4em', alignItems: 'center', marginTop: '0.2rem' }}>
        <input
          type="color"
          value={hex}
          onChange={e => onChange(e.target.value)}
          style={{ width: '2.4em', height: '2em', padding: 0, border: '1px solid #d1d5db', borderRadius: 6, cursor: 'pointer' }}
        />
        <input
          type="text"
          value={value ?? ''}
          onChange={e => onChange(e.target.value)}
          style={{ ...inputStyle, flex: 1 }}
        />
      </div>
    </Field>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.38em 0.5em',
  border: '1px solid #d1d5db',
  borderRadius: 6,
  font: 'inherit',
  fontSize: '0.82rem',
  color: '#111418',
  background: '#fff',
  marginTop: '0.15rem',
};

// ─── main app ────────────────────────────────────────────────────────────────

export default function App() {
  const [profile, setProfile] = useState(() => structuredClone(sampleProfile));
  const [session, setSession] = useState({ dc: 'us', token: '', locale: 'en' });
  const [advancedJson, setAdvancedJson] = useState(() =>
    JSON.stringify(sampleProfile.advanced?.tokenOverrides ?? {}, null, 2)
  );
  const [started, setStarted] = useState(false);
  const fileRef = useRef();

  const errors = validateProfile(profile);
  const slug = slugify(profile.brand?.name);

  // derived preview srcdoc
  let srcdoc = '';
  if (started && !errors.length) {
    try {
      srcdoc = renderMicrosite(profile, undefined, session, { started });
    } catch (e) {
      srcdoc = `<pre style="color:red">${String(e)}</pre>`;
    }
  }

  const setField = useCallback((path, value) => {
    setStarted(false);
    setProfile(prev => setPath(prev, path, value === '' ? undefined : value));
  }, []);

  const setNumField = useCallback((path, value) => {
    setStarted(false);
    setProfile(prev => setPath(prev, path, value === '' ? undefined : Number(value)));
  }, []);

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

  async function onFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      loadProfile(JSON.parse(await file.text()));
    } catch (err) {
      alert('Could not parse JSON: ' + String(err));
    }
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', height: '100vh', fontFamily: '"Inter", system-ui, sans-serif', fontSize: 14 }}>

      {/* ── sidebar ── */}
      <aside style={{ padding: '1.25rem 1.25rem 2rem', overflowY: 'auto', background: '#fff', borderRight: '1px solid #e2e6ea' }}>

        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <h1 style={{ margin: 0, fontSize: '1rem', fontFamily: '"Inter Tight", "Inter", system-ui, sans-serif', fontWeight: 700, color: '#111418' }}>
            BrandMatch Studio
          </h1>
          <span style={{
            fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase',
            background: '#0a7d33', color: '#fff', padding: '0.15em 0.55em', borderRadius: 99,
          }}>
            Studio
          </span>
        </div>

        {/* load / reset */}
        <div style={{ display: 'flex', gap: '0.5em', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
          <input ref={fileRef} type="file" accept="application/json" onChange={onFileChange}
            style={{ fontSize: '0.78rem', color: '#6b7280' }} />
          <Btn secondary onClick={() => loadProfile(structuredClone(sampleProfile))}>Reset</Btn>
        </div>

        {/* errors */}
        {errors.length > 0 && (
          <ul style={{
            background: '#fef2f2', color: '#991b1b', border: '1px solid #fecaca',
            borderRadius: 6, padding: '0.65em 1em 0.65em 1.6em', margin: '0.75rem 0',
            fontSize: '0.8em', listStyle: 'disc',
          }}>
            {errors.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        )}

        {/* brand fields */}
        <SectionHeader>Brand</SectionHeader>
        {TEXT_FIELDS.map(([path, label, placeholder]) => (
          <Field key={path} label={label}>
            <TextInput value={getPath(profile, path)} onChange={v => setField(path, v)} placeholder={placeholder} />
          </Field>
        ))}

        <SectionHeader>Colors</SectionHeader>
        {COLOR_FIELDS.map(([path, label]) => (
          <ColorField key={path} label={label}
            value={getPath(profile, path)}
            onChange={v => setField(path, v)} />
        ))}

        <SectionHeader>Journey</SectionHeader>
        <Field label="Vertical">
          <TextInput value={getPath(profile, 'journey.vertical')} onChange={v => setField('journey.vertical', v)} />
        </Field>
        <Field label="Steps (comma separated)">
          <TextInput
            value={(profile.journey?.steps ?? []).join(', ')}
            onChange={v => {
              setStarted(false);
              setProfile(prev => ({
                ...prev,
                journey: { ...prev.journey, steps: v.split(',').map(s => s.trim()).filter(Boolean) },
              }));
            }}
          />
        </Field>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 0.5em' }}>
          <Field label="IDV step index">
            <input type="number" min={0} value={getPath(profile, 'journey.idvStepIndex') ?? ''}
              onChange={e => setNumField('journey.idvStepIndex', e.target.value)}
              style={inputStyle} />
          </Field>
          <Field label="CTA label">
            <TextInput value={getPath(profile, 'journey.ctaLabel')} onChange={v => setField('journey.ctaLabel', v)} />
          </Field>
        </div>

        <SectionHeader>SDK</SectionHeader>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 0.5em' }}>
          <Field label="Workflow">
            <TextInput value={getPath(profile, 'sdk.workflow')} onChange={v => setField('sdk.workflow', v)} />
          </Field>
          <Field label="Locale">
            <TextInput value={getPath(profile, 'sdk.locale')} onChange={v => setField('sdk.locale', v)} />
          </Field>
        </div>

        <SectionHeader>Advanced — token overrides (JSON)</SectionHeader>
        <textarea
          value={advancedJson}
          onChange={e => applyAdvancedJson(e.target.value)}
          spellCheck={false}
          style={{ ...inputStyle, fontFamily: 'ui-monospace, monospace', fontSize: '0.78em', minHeight: '7em', resize: 'vertical', width: '100%' }}
        />

        <SectionHeader>Session (not saved in brand-profile.json)</SectionHeader>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 0.5em' }}>
          <Field label="Datacenter">
            <select value={session.dc} onChange={e => setSession(s => ({ ...s, dc: e.target.value }))} style={inputStyle}>
              <option value="us">us</option>
              <option value="eu">eu</option>
              <option value="sgp">sgp</option>
            </select>
          </Field>
          <Field label="Locale">
            <TextInput value={session.locale} onChange={v => setSession(s => ({ ...s, locale: v }))} />
          </Field>
        </div>
        <Field label="Session token">
          <TextInput value={session.token} onChange={v => setSession(s => ({ ...s, token: v }))}
            placeholder="REPLACE_WITH_SESSION_TOKEN" />
        </Field>
        <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.4rem 0 1rem' }}>
          Fills <code style={{ background: '#f3f4f6', padding: '0.1em 0.35em', borderRadius: 4 }}>&lt;jumio-sdk dc token locale&gt;</code> in the preview — not stored in <code style={{ background: '#f3f4f6', padding: '0.1em 0.35em', borderRadius: 4 }}>brand-profile.json</code>.
        </p>

        {/* actions */}
        <div style={{ display: 'flex', gap: '0.5em', margin: '0.75rem 0', flexWrap: 'wrap' }}>
          <Btn secondary onClick={() => { setStarted(true); }}>Start verification</Btn>
        </div>
        <div style={{ display: 'flex', gap: '0.5em', margin: '0.75rem 0', flexWrap: 'wrap' }}>
          <Btn onClick={() => download(`${slug}.brand-profile.json`, JSON.stringify(profile, null, 2), 'application/json')}>
            Download brand-profile.json
          </Btn>
          <Btn secondary onClick={() => download(`${slug}.index.html`, renderMicrosite(profile, undefined, session), 'text/html')}>
            Download microsite HTML
          </Btn>
        </div>
        <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.4rem 0' }}>
          Slug: <code style={{ background: '#f3f4f6', padding: '0.1em 0.35em', borderRadius: 4 }}>{slug}</code>
        </p>
      </aside>

      {/* ── preview ── */}
      <main style={{ padding: '1.25rem', overflowY: 'auto', background: '#f0f4f8' }}>
        <iframe
          title="Microsite preview"
          srcDoc={srcdoc}
          style={{ width: '100%', height: 'calc(100vh - 4.5rem)', border: '1px solid #d1d8e0', borderRadius: 10, background: '#fff', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}
        />
      </main>

    </div>
  );
}

function Btn({ children, onClick, secondary }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        font: 'inherit',
        fontSize: '0.82rem',
        fontWeight: 600,
        padding: '0.45em 1em',
        border: '1.5px solid #0a7d33',
        background: secondary ? '#fff' : '#0a7d33',
        color: secondary ? '#0a7d33' : '#fff',
        borderRadius: 6,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

# WebSDK Customization Reference

> The authoritative catalog of **what is customizable** in the Jumio WebSDK, and **how**.
> This is the WP2 contract foundation — WP1 (harvest), WP3 (theming engine), WP4 (microsite) and WP6 (studio UI) all build against this.
>
> Source of truth (verified in code): `libs/design-system/src/lib/styles/variables.scss`,
> `libs/websdk/websdk/src/lib/utils/templates.ts`, `libs/websdk/types/src/lib/merchant-settings.ts`.

---

## The one rule you need to remember

Every design token resolves through this pattern (the `defineValue` mixin):

```scss
--<token>: var(--jumio-sdk-<token>, var(--portal-<token>, <default>));
```

**→ To override any token, set `--jumio-sdk-<token>` on `:root`.** CSS custom properties inherit
through Shadow DOM, so a single `<style>` block on the host page re-themes the entire SDK. No build
step, no SDK fork.

```html
<style>
  :root {
    --jumio-sdk-color-primary4: #0a7d33;            /* main brand accent  */
    --jumio-sdk-theme-light-page-bg-color: #ffffff; /* page background    */
    --jumio-sdk-font-family: "Inter";               /* typeface           */
  }
</style>
```

---

## The 5 customization channels

| # | Channel | Mechanism | Size | Use it for |
|---|---|---|---|---|
| 1 | **Design tokens** | `--jumio-sdk-<token>` CSS vars | **342 tokens** | All colors, typography, buttons, cards |
| 2 | **Layout** | `--jumio-sdk-container-*` CSS vars | 7 | Padding / margin / alignment around the SDK |
| 3 | **Content slots** | `<template id="…">` HTML templates | ~45 slots | Logo, titles, checklists, before/after blocks |
| 4 | **Theme mode** | `<jumio-sdk-theme data-color="…">` | 1 | light / dark / auto |
| 5 | **Server branding** | backend `merchantSettings.branding` | 3 fields | primaryColor · accentColor · logoUri |

> **Strategy note for the hackathon:** a *normal* integration only gets Channel 5 (3 knobs).
> Our generator drives Channels 1–4 from a generated stylesheet + templates → **far** richer brand
> matching. That contrast ("3 knobs vs. full repaint") is a great pitch beat.

---

## Channel 1 — Design tokens

All 342 tokens live in `variables.scss`. You rarely set them one by one — you set a handful of
**foundational** tokens and let the **accent ramp** cover interactive states.

> **Scope (for now): light mode only.** Every color token also has a `theme-dark-*` twin, but we lock
> the SDK to light (`<jumio-sdk-theme data-color="light">`) and only generate `theme-light-*` tokens.
> Dark mode is a later add-on — ignore the dark variants for the hackathon.

### 1a. Foundational (set these first — biggest visual impact)

| Token (override as `--jumio-sdk-…`) | Default (light) | Controls |
|---|---|---|
| `font-family` | `IBM Plex Sans` | Global typeface |
| `theme-light-text-color` | near-black | Body & heading text |
| `theme-light-page-bg-color` | light gray | Page background |
| `theme-light-app-container-bg-color` | white | Card/container surface |

### 1b. Accent ramp — your brand color

`color-primary1..7` is a **7-step lightness ramp** of the brand color (1 = lightest tint → 7 = darkest
shade). It feeds buttons, progress, links, success marks, etc. Override the whole ramp and most
interactive elements follow:

| Token | Role |
|---|---|
| `color-primary1` | lightest tint (disabled bg, light mode) |
| `color-primary2` | active button bg (light) |
| `color-primary3` | active button bg (dark) |
| **`color-primary4`** | **main button background** (the brand color) |
| `color-primary5` | focus button bg (light) |
| `color-primary6` | links / quiet-button text (light) |
| `color-primary7` | disabled bg (dark) |

> Button label color is separate: set `theme-light-clickable-primary-default-color` to your
> "on-primary" color so text stays readable on the brand button.

### 1d. Ramp generation algorithm (the WP3 core)

The only real logic in the engine: turn **one brand hex** into the 7-step `color-primary` ramp.
Steps 1–3 are tints (mix toward white), step 4 is the brand color, steps 5–7 are shades (mix toward
black). Deterministic, no dependencies:

```js
// mix two hex colors; t = 0 keeps a, t = 1 returns b
function mix(a, b, t) {
  const h = (x) => [1, 3, 5].map((i) => parseInt(x.slice(i, i + 2), 16));
  const [ar, ag, ab] = h(a), [br, bg, bb] = h(b);
  const c = (x, y) => Math.round(x + (y - x) * t).toString(16).padStart(2, "0");
  return `#${c(ar, br)}${c(ag, bg)}${c(ab, bb)}`;
}

// brand hex -> { primary1..7 }
function ramp(primary) {
  const W = "#ffffff", K = "#000000";
  return {
    primary1: mix(primary, W, 0.85),  // lightest tint
    primary2: mix(primary, W, 0.55),
    primary3: mix(primary, W, 0.25),
    primary4: primary,                // main accent
    primary5: mix(primary, K, 0.12),
    primary6: mix(primary, K, 0.34),  // links / quiet text
    primary7: mix(primary, K, 0.22),
  };
}
```

Tune the `t` stops to taste — these match the feel of the SDK's default green ramp.

### 1c. Interactive states (only if you need fine control)

Naming is fully systematic:

```
theme-{light|dark}-clickable-{primary|secondary|tertiary|quiet|destructive}-{default|focus|active|disabled}-{color|bg-color|border-color}
theme-{light|dark}-card-{primary|secondary|tertiary}-{default|focus|active|disabled}-{color|bg-color|tag-color|tag-bg-color}
theme-{light|dark}-button-primary-{default|focus|active|disabled}-{color|bg-color}
```

If you can read that pattern, you can target any state of any control. Full enumerated list: see
`variables.scss` (342 lines, one `defineValue(...)` per token).

---

## Channel 2 — Layout

Override as `--jumio-sdk-…`; all default to safe-area insets / centered.

| Token | Controls |
|---|---|
| `container-padding-top` / `-right` / `-bottom` / `-left` | Padding around the SDK content |
| `container-margin-top` / `-bottom` | Outer margin |
| `container-justify-content` | Vertical alignment (`center`, `start`, `end`) |

---

## Channel 3 — Content slots (HTML templates)

Place a `<template id="…">…</template>` anywhere in the document. If present, the SDK renders your
content **instead of** its default for that slot. (This is how we swapped the logo and replaced the
shield checklist with plain bullets.)

### Logo (most common)
| Slot id | Shown when |
|---|---|
| `jumio-logotype` | always (single logo, both themes) |
| `jumio-logotype-light` | light color scheme |
| `jumio-logotype-dark` | dark color scheme |

### Per-screen slots
Every screen has **`<screen>-before`** and **`<screen>-after`** wrappers, plus specific named slots.
Screens: `jumio-start`, `jumio-setup`, `jumio-biometric-guidance`, `jumio-cross-device`,
`jumio-document-upload`, `jumio-finish`, `jumio-id-capture-source`, `jumio-id-document-select`,
`jumio-id-retry`, `jumio-id-upload`.

Notable named slots:

| Slot id | Replaces |
|---|---|
| `jumio-start-title` | Start screen heading |
| `jumio-start-explanation` | Start screen subtext |
| `jumio-start-checklist` | The whole start checklist |
| `jumio-start-guidance` | Title + checklist block together |
| `jumio-biometric-guidance-title` / `-explanation` / `-checklist` / `-illustration` | Selfie-guidance parts |
| `jumio-cross-device-title` / `-subtitle` | Cross-device handoff copy |
| `jumio-finish-success` / `-error` / `-outcome` | End-screen states |
| `jumio-id-document-select-title`, `jumio-id-retry-title`, `jumio-id-capture-source-title` | Per-step titles |
| `…-backward-button` (per screen) | Custom back button |

> ⚠️ A static template **replaces localized/dynamic content** — you lose i18n and any data-driven
> items for that slot. Prefer token/CSS theming for look-and-feel; use templates for logo and
> deliberate copy/markup changes.

---

## Channel 4 — Theme mode

```html
<jumio-sdk-theme slot="theme" data-color="auto"></jumio-sdk-theme>
```
`data-color` = `light` | `dark` | `auto` (follow system). Drives which `theme-light-*` / `theme-dark-*`
tokens apply.

---

## Channel 5 — Server-side branding (for reference)

From the backend account config (`merchantSettings.branding`) — small surface, not what we generate,
but good to know it exists:

| Field | Default | Note |
|---|---|---|
| `primaryColor` | `5acc29` | hex (no `#`) |
| `accentColor` | `ffffff` | hex (no `#`) |
| `logoUri` | – | base64 PNG, rendered if no logo template present |

---

## Worked example — brand inputs → generated output

This is the **WP3 target**. Given these brand inputs:

```jsonc
{ "themeMode": "light",
  "brand": {
    "fontFamily": "Inter",
    "fontUrl": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
    "logo": "/acme-logo.svg",
    "colors": { "primary": "#0a7d33", "onPrimary": "#ffffff",
                "text": "#111418", "pageBackground": "#ffffff", "cardBackground": "#f5f7fa" } } }
```

…the engine emits this (drop into the host page `<head>` / `<body>`):

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" />
<style>
  :root {
    --jumio-sdk-font-family: "Inter";

    /* brand color → 7-step ramp (generated by lightness) */
    --jumio-sdk-color-primary1: #d8f0e0;
    --jumio-sdk-color-primary2: #93d6ac;
    --jumio-sdk-color-primary3: #4cbd7d;
    --jumio-sdk-color-primary4: #0a7d33;   /* main accent */
    --jumio-sdk-color-primary5: #0a6e2d;
    --jumio-sdk-color-primary6: #075423;
    --jumio-sdk-color-primary7: #0a4a20;

    /* readable label on the brand button */
    --jumio-sdk-theme-light-clickable-primary-default-color: #ffffff;

    /* foundational */
    --jumio-sdk-theme-light-text-color: #111418;
    --jumio-sdk-theme-light-page-bg-color: #ffffff;
    --jumio-sdk-theme-light-app-container-bg-color: #f5f7fa;
  }
</style>

<jumio-sdk-theme slot="theme" data-color="light"></jumio-sdk-theme>
<template id="jumio-logotype-light"><img src="/acme-logo.svg" alt="Acme" /></template>
```

### The mapping table (the WP3 spec, in one place)

| Brand input | → Generated token(s) |
|---|---|
| `colors.primary` | `color-primary1..7` (ramp, see 1d) |
| `colors.onPrimary` | `theme-light-clickable-primary-default-color` |
| `colors.text` | `theme-light-text-color` |
| `colors.pageBackground` | `theme-light-page-bg-color` |
| `colors.cardBackground` | `theme-light-app-container-bg-color` |
| `fontFamily` + `fontUrl` | `font-family` token + `<link>` |
| `logo` | `jumio-logotype-light` template |
| `layout.containerPadding.*` | `container-padding-*` |
| `advanced.tokenOverrides` | passed through verbatim |

*(All light-mode only for now — see the scope note in Channel 1.)*

---

## How each team uses this doc

- **WP1 (Harvest)** — you must produce the *brand inputs* on the left of the mapping table: primary
  color, on-primary, text, backgrounds, font, logo (light/dark). That's your "done" definition.
- **WP3 (Theming engine)** — implement the mapping table → emit the `<style>` + `<template>` block.
  The ramp generator (section 1d) is the only non-trivial bit; copy the reference function. Light mode
  only — lock `<jumio-sdk-theme data-color="light">` and emit `theme-light-*` tokens.
- **WP4 (Microsite)** — inject the engine's output into your page `<head>`, then mount `<jumio-sdk>`
  at the IDV step. Theme mode via `<jumio-sdk-theme data-color>`.
- **WP6 (Studio UI)** — your form fields = the brand inputs. Validate against `brand-profile.schema.json`.
  Expose `advanced.tokenOverrides` as a raw key/value escape hatch for power users.
- **WP7 (Demo)** — pick hero brands whose primary color + logo make the ramp look great; pre-fill their
  brand inputs by hand using this doc.

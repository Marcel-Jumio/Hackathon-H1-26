# Architecture & Setup — how the pieces fit 🧩

> Read this to understand *where the WebSDK comes from*, *what the playground is for*, and *what
> actually happens when we "style the SDK."* It's the clean mental model the whole prototype rests on.

## TL;DR

- **npm** (`@jumio/websdk`) = the SDK **runtime** — we *consume* it.
- **The websdk-playground** = our **reference manual + sandbox** — we *read patterns from it locally*, we do **not** copy it into this (public) repo.
- **This repo** = our **new code** (engine, microsite, studio) + **facts we've abstracted** (the reference doc, the schema).
- **`brand-profile.json`** = the **input to the theming engine**. The engine turns it into styling that is
  *injected into* the page where the npm SDK runs. **Same SDK, re-skinned at runtime — never a fork or rebuild.**

## The three layers

| Layer | What it is | Where it lives | We… |
|---|---|---|---|
| **Runtime** | `@jumio/websdk` | npm | install & import it |
| **Reference / sandbox** | `websdk-playground` (company repo; we have a zip snapshot now, can clone the real one later) | each builder's machine, **local only** | read patterns, prototype, mock — don't republish |
| **Our project** | engine · microsite · studio + docs | **this public repo** | build here, consume the runtime |

## The data flow (this is the whole product)

```mermaid
flowchart LR
  BP["brand-profile.json<br/>(color · logo · font · copy)"] -->|input| ENG["WP3 Theming Engine"]
  ENG -->|emits| OUT["&lt;style&gt; --jumio-sdk-* vars<br/>+ logo &lt;template&gt; + font &lt;link&gt;"]
  NPM["@jumio/websdk<br/>(from npm)"] -->|imported into| SITE["/microsite host page"]
  OUT -->|injected into| SITE
  SITE -->|renders| RESULT["Branded showcase<br/>(the SAME SDK, re-skinned)"]
```

**One SDK → unlimited branded showcases.** Feed a different `brand-profile.json`, get a different-looking
page — with no change to the SDK package itself.

## What we reuse from the playground (the "intelligence")

The npm package is only the runtime. The playground is where the *know-how* lives — but most of it we
**reference**, not copy:

| From the playground | Comes from npm? | How we use it |
|---|---|---|
| WebSDK runtime | ✅ `@jumio/websdk` | consume |
| Design tokens (`variables.scss`) | ❌ | already abstracted → [`customization-reference.md`](./customization-reference.md) |
| Embedding patterns (`websdk-client`, `sample-app`) | ❌ | reference → reproduce a minimal version in `/microsite` |
| Session wiring (`.env` token/baseUrl, setup utils) | ❌ | reference → how to start a session with a token |
| i18n text keys | partially | reference → so the messaging team knows what copy exists |
| Playwright e2e patterns | ❌ | reference → for the WP1 crawler |
| Config (`.env`: token, DC, baseUrl) | ❌ | reference → how to point the SDK at a session |

## The IP boundary (important — this repo is public)

The playground is **internal Jumio code**. This repo is **public**. So: pull *patterns and facts* out of
the playground and write our own equivalents (that's why we wrote our *own* reference doc instead of
copying `variables.scss`). **Do not** bulk-copy the playground's source, test assets, or translations
into this repo.

## Sessions: pre-created tokens now, auto-creation later

The SDK needs a **session token + baseUrl** to run a real flow, and we **always use the real device
camera** — no mocking.

- **Now (hackathon):** use a handful of **pre-created session tokens**. Someone with Jumio test-account
  access generates a few valid tokens up front; we drop them into the microsite/studio to start a
  session. Tokens can expire, so keep a couple of fresh ones ready on demo day.
- **Later:** wire a small backend that calls the session-init API to **mint tokens on demand** — a
  natural job for the Studio's "Generate" button. Deliberately **out of scope** for the 2-day build.

This keeps the prototype tiny (no backend) while still being a real session on a real camera, with a
clean seam to automate token creation afterwards.

## Two setup unknowns to resolve on Day 1

1. **Is `@jumio/websdk` publicly installable, or a private/scoped npm package needing registry auth?**
   If private, the microsite build needs credentials. Confirm before building.
2. **Who generates the pre-created session tokens** (token + baseUrl), and how many do we need for the
   demo? They can expire — assign one person to have fresh ones ready on demo day.

## How this is "leverageable later" (beyond the hackathon)

- Swap the **zip snapshot** for the **live company repo** (`git clone`) once access is granted — nothing
  else changes, because we only depend on the published package, not the source.
- The **contract + engine** work for *any* brand, so this isn't throwaway hackathon code — it's the seed
  of a reusable "instant branded demo" tool.
- Because we *consume* rather than *fork*, upgrading the SDK later is just a version bump.

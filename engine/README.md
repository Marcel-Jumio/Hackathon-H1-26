# /engine — Theming Engine (WP3)

**Owner:** Singapore (builder) · **Skill:** high · this is the technical heart.

## Your mission
Turn a `brand-profile.json` into the styling the WebSDK consumes: a `<style>` block of
`--jumio-sdk-*` tokens + a logo `<template>`.

## Inputs → Outputs
- **In:** [`../brand-profile.sample.json`](../brand-profile.sample.json) (start with this mock)
- **Out:** an HTML snippet (`<link>` font + `<style>` tokens + `<template>` logo) the microsite drops into its `<head>`/`<body>`

## What's here (WIP starter — extend it)
A working baseline already exists so you don't start from a blank page:
- **`brand-to-theme.mjs`** — `mix()`, `ramp()`, `buildTokens()`, `buildHtml()`, `applyTheme()`. Zero deps, runs in browser + Node.
- **`demo.mjs`** — feeds the sample profile through and prints the generated snippet.

Try it from the repo root:
```bash
node engine/demo.mjs
```

> ⚠️ This is **WIP / a baseline**, not finished. Treat the ramp stops and token mapping as a starting
> point to tune — but freeze the *output shape* before Sales/Marketing rely on it.

## Your job (extend the starter)
1. Verify the generated tokens actually theme a real `<jumio-sdk>` (with Colombia's microsite).
2. Tune the `ramp()` stops so brand colors look good across the SDK.
3. Decide the exact snippet hand-off format with `/microsite`.

## Done when…
A real `brand-profile.json` in → styling that visibly re-skins a live `<jumio-sdk>`.

## Scope guardrails
- **Light mode only** for now — emit `theme-light-*`, lock `<jumio-sdk-theme data-color="light">`.
- Pass `advanced.tokenOverrides` through verbatim.

## Hand off to
**Colombia (/microsite)** — they inject your output. Agree on the snippet format early.

🛟 How to push: see [`../CONTRIBUTING.md`](../CONTRIBUTING.md). Stay in this folder.

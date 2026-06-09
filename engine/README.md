# /engine — Theming Engine (WP3)

**Owner:** Singapore (builder) · **Skill:** high · this is the technical heart.

## Your mission
Turn a `brand-profile.json` into the styling the WebSDK consumes: a `<style>` block of
`--jumio-sdk-*` tokens + a logo `<template>`.

## Inputs → Outputs
- **In:** [`../brand-profile.sample.json`](../brand-profile.sample.json) (start with this mock)
- **Out:** an HTML snippet (`<link>` font + `<style>` tokens + `<template>` logo) the microsite drops into its `<head>`/`<body>`

## First move (Day 1)
1. Implement the `ramp()` function from [`../customization-reference.md`](../customization-reference.md) §1d.
2. Map the brand inputs → `theme-light-*` tokens using the mapping table in that doc.
3. Feed it the sample JSON, print the `<style>` block, eyeball it.

## Done when…
Mock JSON in → correct light-mode CSS + logo template out. Bonus: a tiny demo page proving it themes a real `<jumio-sdk>`.

## Scope guardrails
- **Light mode only** for now — emit `theme-light-*`, lock `<jumio-sdk-theme data-color="light">`.
- Pass `advanced.tokenOverrides` through verbatim.

## Hand off to
**Colombia (/microsite)** — they inject your output. Agree on the snippet format early.

🛟 How to push: see [`../CONTRIBUTING.md`](../CONTRIBUTING.md). Stay in this folder.

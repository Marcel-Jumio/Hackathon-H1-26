# /microsite — Microsite Shell (WP4)

**Owner:** Colombia (builder) · **Skill:** mid.

## Your mission
A brand-skinned **onboarding page** with a 3-step stepper that embeds the live `<jumio-sdk>` at the
identity-verification step.

## Inputs → Outputs
- **In:** the engine's styling snippet (WP3) + `journey` fields from the brand profile (step names, CTA, `idvStepIndex`)
- **Out:** the actual page a prospect would see, themed per brand

## First move (Day 1)
1. Build a static 3-step stepper (e.g. *Create account → Verify identity → Done*).
2. Mount `<jumio-sdk>` at the IDV step.
3. Paste the engine's `<style>`+`<template>` snippet into the page and confirm it themes.

## Done when…
The page renders a themed SDK driven entirely by a `brand-profile.json` — swap the JSON, the page re-skins.

## Scope guardrails
- **Don't clone the brand's real site** — a clean, brand-*skinned* stepper reads as "their flow." Avoid scope creep.
- Copy on the page (hero line, reassurance text) comes from **Idaho (/messaging)** — don't write it yourself.

## Hand off to
**WP5 (sharing)** + the demo. Coordinate with Singapore on the snippet format.

🛟 How to push: see [`../CONTRIBUTING.md`](../CONTRIBUTING.md). Stay in this folder.

# /studio — Studio UI / Orchestration (WP6)

**Owner:** India (builder) · **Skill:** mid.

## Your mission
The "control panel": a URL field, a form to review/edit the brand inputs, and a **Generate** button
that produces the brand profile + triggers the microsite.

## Inputs → Outputs
- **In:** a URL (and/or manual edits) → a `brand-profile.json`
- **Out:** a validated profile handed to the engine/microsite

## First move (Day 1)
1. A form whose fields = the brand inputs (name, logo, colors, font).
2. On submit, produce JSON that **validates against** [`../brand-profile.schema.json`](../brand-profile.schema.json).
3. Add a raw "advanced" textarea for `tokenOverrides`.

## Done when…
Edit fields → Generate → a valid `brand-profile.json` comes out.

## Good to know
This WP has a **simple fallback** (a plain JSON textarea + button), so don't over-build. If you get the
crawler working (WP1 automation), that's a stretch bonus — not required for the demo.

## Hand off to
**Engine (/engine)** + **Microsite (/microsite)** — they consume your JSON.

🛟 How to push: see [`../CONTRIBUTING.md`](../CONTRIBUTING.md). Stay in this folder.

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

## API credentials & live sessions
The "Connect credentials" panel stores an API key/secret/region in the browser's `localStorage`
for 60 minutes (`studio/credentials.mjs`) and uses them to call `/api/session`
(`/api/session.mjs`), which exchanges them for an OAuth2 bearer token and creates a Jumio
account/workflow execution, returning the `<jumio-sdk>` session token + datacenter.

`/api/session.mjs` is a Vercel serverless function — `npm run dev` (Vite only) does **not** serve
`/api/*`. To test the credentials/session flow locally, run:

```
npx vercel dev
```

This serves both the Vite app and `/api/session` together, matching production. Without
`vercel dev`, the Studio still works fully via the manual "Session token" field.

## Hand off to
**Engine (/engine)** + **Microsite (/microsite)** — they consume your JSON.

🛟 How to push: see [`../CONTRIBUTING.md`](../CONTRIBUTING.md). Stay in this folder.

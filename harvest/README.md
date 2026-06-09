# /harvest — Brand Harvesting (WP1)

**Owner:** UK – Solutions Engineer · **Skill:** low → can grow into automation.

## Your mission
Produce a valid `brand-profile.json` for each hero brand — by hand to start with. You're the "design
detective": find the brand's colors, font, and logo, and put them in the right fields.

## Inputs → Outputs
- **In:** a brand's website + the assets Sales/PMM gather in [`../brands`](../brands)
- **Out:** a valid `brand-profile.json` per brand (drop finished ones in [`../brands`](../brands))

## First move (Day 1)
1. Pick one hero brand. Open its site.
2. Find its **primary color** (hex), **font**, and **logo** (right-click → copy image address, or a URL).
3. Fill a copy of [`../brand-profile.sample.json`](../brand-profile.sample.json). Check it against
   [`../brand-profile.schema.json`](../brand-profile.schema.json).

## Done when…
At least 2 hero brands have a complete, valid profile.

## Also yours
**Demo QA** — once the microsite works, sanity-check each branded result looks right.

## Hand off to
**Engine + Microsite** consume the profiles. **Sales/PMM** feed you the assets.

🛟 How to push: see [`../CONTRIBUTING.md`](../CONTRIBUTING.md). Stay in this folder (or /brands).

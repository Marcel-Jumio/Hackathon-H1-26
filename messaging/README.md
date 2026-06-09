# /messaging — Messaging & Narrative (WP8)

**Owner:** Idaho – Product Marketing · **Skill:** non-technical (high domain).
**No coding required** — work on the website (see [`../CONTRIBUTING.md`](../CONTRIBUTING.md#the-no-git-way-for-everyone-else)).

## Your mission
Own **the words**. Write the core messages that get woven into both the product page and the pitch — so
everything says the same thing.

## The magic: your words become data
You don't hand off a doc that gets ignored. Your copy drops straight into fields the builders already
read from `brand-profile.json`:

| Your copy | Where it lands |
|---|---|
| The action line ("Verify in 30 seconds") | `journey.ctaLabel` |
| Step names that signal value | `journey.steps` |
| Trust/value line on the SDK start screen | `content.templates["jumio-start-explanation"]` |
| Start-screen headline | `content.templates["jumio-start-title"]` |
| Microsite hero + reassurance microcopy | handed to Colombia (/microsite) |

## First move (Day 1)
1. Write **the one value narrative** — the single sentence the page, SDK, and pitch all echo.
2. Derive from it: a CTA label, 3 step names, a one-line start-screen explanation.
3. Put them in `messaging.md` here (the SE will wire them into the brand profiles).

## The discipline ⚠️
**2–3 short messages, max.** We're selling *frictionless* onboarding — a wall of text on the start
screen contradicts the pitch. Tight and high-signal wins.

## Work with
**Sales (/pitch)** — align on the single core message Day 1. **Builders** render whatever you put in the JSON fields.

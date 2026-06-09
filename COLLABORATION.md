# How we work together 🤝

> Read this first. It tells you **who owns what** and **the one rule** that keeps 8 people from
> stepping on each other. For *how to push your work safely*, see **[CONTRIBUTING.md](./CONTRIBUTING.md)**.

## The one rule

**The only thing that connects the teams is one file: `brand-profile.json`.**
If you produce it or consume it, you can work on your own, in your own folder, without waiting for
anyone. That's it. That's the whole coordination model.

- 📓 What's customizable → [`customization-reference.md`](./customization-reference.md)
- 📐 The exact data shape → [`brand-profile.schema.json`](./brand-profile.schema.json)
- 📄 A worked example → [`brand-profile.sample.json`](./brand-profile.sample.json)

## 🚧 Project status & when each track starts

**Everything is WIP right now.** The project runs in two phases:

1. **Foundation first (builders).** Stabilize the `brand-profile.json` contract/schema, the theming
   engine, and the folder structure — until a real brand profile produces a visibly themed `<jumio-sdk>`.
   Then we **freeze the contract**.
2. **Then Sales & Marketing start.** Once the shape is frozen, `/brands` and `/messaging` are safe to
   fill — their work plugs into the locked schema, so nothing they produce gets invalidated by churn.

> If you're Sales/PMM: **read and plan now**, but hold on producing brand profiles / final copy until the
> foundation is marked **stable** (watch this section + the team channel).

**Freeze checklist — what "stable" means:**
- [ ] schema fields locked
- [ ] engine emits the agreed snippet shape
- [ ] microsite renders a themed SDK from one real profile

✅ all three → **green light for Sales & Marketing.**

## Who owns what

| You are… | Your job | Your folder | Work package |
|---|---|---|---|
| **Austria (orchestrator)** | Keep the contract + board, unblock people, run handoffs | — | WP2 (done ✅) |
| **Singapore (builder)** | The theming engine: brand JSON → SDK styling | [`/engine`](./engine) | WP3 |
| **Colombia (builder)** | The microsite that embeds the themed SDK | [`/microsite`](./microsite) | WP4 |
| **India (builder)** | The Studio UI: URL + edit form + Generate button | [`/studio`](./studio) | WP6 |
| **UK – Solutions Engineer** | Turn gathered brand assets into valid JSON + QA the demo | [`/harvest`](./harvest) | WP1 |
| **UK – Sales + US Pacific – Sales** | Pick hero brands, gather their assets, own the pitch | [`/pitch`](./pitch) + [`/brands`](./brands) | WP7 |
| **Idaho – Product Marketing** | The core messages woven into the page & SDK copy | [`/messaging`](./messaging) | WP8 |

**Each folder has its own README** telling you your first move and what "done" looks like. Open yours.

## The golden rule of staying out of each other's way

👉 **Only edit files inside your own folder.** Different files = no collisions. If you ever need to
touch a shared file (like the schema), ping Austria first.

## Critical path (what must work, in order)

```
WP2 contract ✅  →  WP3 engine  →  WP4 microsite  →  DEMO
                    (WP1 harvest, WP7 pitch, WP8 messaging run in parallel the whole time)
```

If we run short on people, **WP3 + WP4 + WP7 + WP8** are non-negotiable; WP5 (sharing) and WP6 (studio
UI) have simple fallbacks.

## Follow-the-sun (our timezones are a feature)

Singapore/India → Austria/UK → Colombia → US Pacific gives us almost round-the-clock progress.
The only thing that makes it work: **the end-of-day handoff note**. Before you log off, add 3 lines to
[`HANDOFF.md`](./HANDOFF.md): *what I did · what's next · what's blocked.* The next region starts from that.

## The one live conversation worth having
**Idaho (messaging) + Sales (pitch) must agree on the single core message on Day 1** — otherwise the
page and the pitch drift apart. Everything else can be async.

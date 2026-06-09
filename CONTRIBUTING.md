# How to push your work safely 🛟

> You **cannot** damage anyone else's work by following this. Git is built to prevent that.
> Not a coder? Jump to **[The no-Git way](#the-no-git-way-for-everyone-else)** — you'll use the website only.

## The mental model (3 ideas)

1. **`main` = the always-working version.** Nobody edits it directly. It's the shared good copy.
2. **A branch = your personal sandbox.** Your own copy. You can do anything in it and it **cannot touch
   anyone else's work or `main`** until you choose to merge.
3. **A Pull Request (PR) = the safe gate** to fold your branch into `main`. Merging only *combines*
   work — it never silently deletes someone's.

> The reassurance: pushing your branch can't hurt anyone. The worst case (a "merge conflict") is a
> safe, recoverable pause — Git refuses to lose work.

## Two things keep 8 people from colliding

1. **Stay in your own folder.** Git only conflicts when two people change *the same lines of the same
   file*. Different folders → basically never conflict.
2. **Work on your own branch, merge via PR.** Keeps `main` clean.

---

## The builder cheat sheet 💻

**First time only:**
```bash
git clone https://github.com/Marcel-Jumio/Hackathon-H1-26.git
cd Hackathon-H1-26
git checkout -b singapore/engine     # name it: yourname/yourtrack
```

**Every working session — repeat this loop:**
```bash
git checkout main && git pull         # 1. get everyone's latest
git checkout singapore/engine         # 2. back to your branch
git merge main                        # 3. bring latest into yours
#    ... do your work in YOUR folder ...
git add .                             # 4. stage changes
git commit -m "engine: add ramp generator"   # 5. save a checkpoint
git push                              # 6. send your branch to GitHub
```
Then on GitHub click **Compare & pull request → Merge**. Done. Do this **small and often** — many tiny
merges are far safer than one big one at the end of the day.

---

## The no-Git way (for everyone else) 🖱️

Sales, Product Marketing, anyone who doesn't want a terminal — you work **entirely on github.com**:

1. Open your folder (e.g. [`/brands`](./brands) or [`/messaging`](./messaging)).
2. Click **Add file → Create new file** (or **Upload files**), or the **✏️ pencil** to edit an existing one.
3. Write a short note of what you changed → **Propose changes**.
4. GitHub makes a branch + Pull Request for you automatically → click **Merge**.

That's the whole thing. No installs, no commands.

---

## Guardrails we turned on (so you *can't* break things)

- **`main` is protected** — no force-pushing or deleting it; changes come in through PRs.
- **A `.gitignore`** keeps junk (build files, `node_modules`, `.DS_Store`) out of the repo.
- **Branch naming:** `yourname/yourtrack`, e.g. `colombia/microsite`.

## When something looks scary

A **merge conflict** just means "two people changed the same lines; pick which to keep." **Nothing is
lost.** Don't force anything — ping **Austria** or the strongest builder and resolve it together once.
With folder-ownership it'll rarely happen.

## TL;DR
**Pull → work in your folder → commit → push → open PR → merge.** Stay in your folder. Push often.

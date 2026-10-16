---
name: check-content
description: Check new or changed website content (writing, dreams, books, endeavours, songs, movies, random links, images) against the site structure in CLAUDE.md and fix anything that doesn't match. Use after Luka adds or edits content.
---

1. Find what changed: `git status` and `git diff` (plus untracked files). If nothing changed, check the whole site.
2. Go through the "Content check" checklist in `CLAUDE.md` for every changed file, and for the listings that should reference it (`index.html`, `writing.html`).
3. Fix structure and formatting directly. Don't rewrite Luka's words; list typos instead.
4. If something is ambiguous (e.g. which writing subsection a piece belongs in), ask.
5. Report in a few lines: what was fixed, what was flagged, and what's ready to commit.

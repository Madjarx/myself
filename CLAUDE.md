# CLAUDE.md

Luka's personal website. Hand-written HTML and CSS, black and white, deliberately simple.
Inspired by motherfuckingwebsite.com and bettermotherfuckingwebsite.com.
Luka works on it once or twice a week over a long period, so keep it consistent and boring.

## Decisions (don't revisit without being asked)

- **Plain HTML and CSS, early-2000s style.** No frameworks, no build step, no Markdown, no npm, no generators. Every page is a hand-written `.html` file.
- **Black and white only.** Light theme by default (black on white); dark theme is white on black. No accent colors, no web fonts, no decorative styling. Links use the text color, underlined.
- **One stylesheet** (`style.css`), based on bettermotherfuckingwebsite.com. Don't add classes or inline styles for content; use plain HTML elements.
- **One script** (`site.js`), only for: the Dark/Light toggle (choice saved in `localStorage`), the email Copy button, and "Last updated X ago". Pages must work without it.
- **Hosting:** GitHub Pages, "Deploy from a branch", `master`, `/ (root)`. `.nojekyll` makes Pages serve files as-is. Every push to `master` republishes the site (about a minute).
- **Last updated:** taken from `document.lastModified`. GitHub Pages sets it to the deploy time, so *any* push updates it, including README/CLAUDE.md-only pushes.
- **All links are relative** (`style.css`, `../style.css`), so the site works at `madjarx.github.io/myself/`, on a custom domain, and when opened from disk.
- **External links open in a new tab** (`target="_blank" rel="noopener"`). Internal links don't.
- **Email is plain text with a Copy button**, not a `mailto:` link.
- **"Thoughts" is not its own section.** It lives on the writing page as a subsection.

## Structure

```
index.html              homepage: everything on one page
writing.html            all writing, grouped into Work / Experiments / Thoughts
writing/<slug>.html     one page per piece of writing
writing/_template.html  template for new pages (also viewable on the site, but unlinked)
dreams/<slug>.html      one page per dream
images/                 all images
style.css, site.js
```

### Homepage (`index.html`), in this order

1. `<button id="theme">Dark</button>`
2. Contact line: Twitter · GitHub · Telegram · Discord (new tab) · email text + Copy button
3. `<hr>`
4. `<h1>` name, then **one** intro paragraph
5. Section links (`#writing`, `#endeavours`, `#books`, `#dreams`, `#random`)
6. `<hr>`, then each section separated by `<hr>`:
   - **Writing, thoughts and work** (`#writing`): the 3 most recent entries from `writing.html`, then `<form action="writing.html"><button>See all</button></form>`
   - **Endeavours** (`#endeavours`): previous major work — projects, companies
   - **Books** (`#books`)
   - **Dreams** (`#dreams`): actual dreams from sleep; every dream, newest first
   - **Random** (`#random`): general links, then `<h3>Songs</h3>` and `<h3>Movies</h3>`
7. `<hr>` and `<p><small>Last updated <span id="updated">recently</span>.</small></p>`

### List item formats

```html
<!-- writing (homepage + writing.html) and dreams -->
<li>YYYY-MM-DD &mdash; <a href="writing/slug.html">Title</a></li>

<!-- endeavours -->
<li><a href="URL" target="_blank" rel="noopener">Name</a> (YYYY&ndash;YYYY) &mdash; one-line description.</li>
<!-- use "now" for ongoing: (2025&ndash;now) -->

<!-- books -->
<li><a href="URL" target="_blank" rel="noopener">Title</a> by Author &mdash; short note.</li>

<!-- songs -->
<li><a href="URL" target="_blank" rel="noopener">Title</a> by Artist &mdash; short note.</li>

<!-- movies -->
<li><a href="URL" target="_blank" rel="noopener">Title</a> (YYYY) &mdash; short note.</li>

<!-- random -->
<li><a href="URL" target="_blank" rel="noopener">Name</a> &mdash; short note.</li>
```

All dated lists are newest first.

An empty section shows `<p>empty</p>`, with any placeholder list kept in an HTML comment
below it. Sections may also hold a short free-text paragraph (e.g. Random).

### Formatting

HTML is indented with tabs (Luka's editor auto-formats). Match that in any file you edit.

### Entry pages (`writing/*.html`, `dreams/*.html`)

Copy `writing/_template.html`. Every entry page has, in order:

1. Standard `<head>`: `charset`, `viewport`, `<title>` equal to the `<h1>`, `../style.css`, `../site.js`
2. `<button id="theme">Dark</button>`
3. Back link:
   - writing: `<p><a href="../writing.html">&larr; Writing, thoughts and work</a></p>`
   - dreams: `<p><a href="../index.html#dreams">&larr; Home</a></p>`
4. `<h1>Title</h1>`
5. `<p><i>YYYY-MM-DD</i></p>`
6. Content using plain elements: `p`, `h2`, `h3`, `b`, `i`, `a`, `img`, `blockquote`, `ul`, `ol`, `code`, `pre`, `hr`
7. Optionally `<hr>` + `<h2>Resources</h2>` + a list of links

File names: lowercase, hyphen-separated slugs (`my-new-post.html`). Dreams may be numbered (`01-cat.html`).

### Images

In `images/`, lowercase hyphenated names, always with `alt` text. Paths are relative
(`../images/x.jpg` from entry pages, `images/x.jpg` from `index.html`). Photos should be
resized to about 1600px wide before committing, so the repo stays small.

## Content check (run every time content is added or changed)

Whenever Luka adds or edits content (a new article, dream, book, project, song, movie, anything) — or runs `/check-content` — check it against the structure above and **fix anything that doesn't match**, then briefly say what was fixed. Specifically:

- [ ] The file is in the right folder with a lowercase hyphenated name.
- [ ] Entry pages follow the entry page structure above (head, theme button, correct back link, `h1`, date).
- [ ] `<title>` matches the `<h1>`; the link text and date in the listings match the page.
- [ ] Every new entry page is listed: writing in `writing.html` under the right subsection (Work / Experiments / Thoughts — ask if unclear), dreams in `index.html#dreams`.
- [ ] The homepage Writing list shows exactly the 3 most recent writing entries.
- [ ] List items use the formats above; dated lists are newest first.
- [ ] External links have `target="_blank" rel="noopener"`; internal links are relative and point to files that exist.
- [ ] Images exist, are in `images/`, have `alt` text, and aren't huge (flag anything over ~500 KB).
- [ ] No new classes, inline styles, colors, fonts, scripts or frameworks crept in.
- [ ] Sections on the homepage are still separated by `<hr>`.
- [ ] Leftover placeholder text (lorem ipsum, example.com) is flagged, not silently kept.

Don't rewrite Luka's words. Fix structure and formatting only; point out typos instead of changing them.

## Running locally

```sh
python3 -m http.server 8000
```

## Commits

- Format: `[type] Short commit title`, e.g. `[feat]`, `[content]`, `[style]`, `[fix]`, `[docs]`, `[chore]`. Optionally one sentence of description.
- Use `[content]` for new or updated writing, dreams, books, etc.
- No Claude / Claude Code co-author lines.
- Prefer a few small commits over one big one.
- Commit straight to `master` for now (no branches or PRs).

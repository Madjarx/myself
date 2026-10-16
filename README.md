# myself

My personal website. Plain HTML and CSS, no build step.

## Writing something new

1. Copy `writing/_template.html` to `writing/my-new-post.html` (or `dreams/...`).
2. Edit the title, date and text. The template shows every element you might need.
3. Add a line linking to it in `writing.html` (and `index.html` if it should be on the homepage).
4. Commit and push to `master`. GitHub Pages republishes the site in about a minute.

Books, endeavours, songs, movies and random links are just list items in `index.html`.

## Images

Put them in `images/` and use `<img src="../images/photo.jpg" alt="...">` from a post
(or `images/photo.jpg` from `index.html`). Resize photos before committing.

## Running locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Files

- `index.html` - homepage
- `writing.html` - all writing, thoughts and work
- `style.css` - the entire stylesheet
- `site.js` - dark/light toggle, copy-email button, "last updated"
- `.nojekyll` - tells GitHub Pages to serve files as-is

## Publishing (one-time setup)

Settings → Pages → Build and deployment → Source: **Deploy from a branch**, branch `master`, folder `/ (root)`.

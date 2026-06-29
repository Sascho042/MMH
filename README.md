# Lab Website Template

A static clone of the section structure/layout used by faculty.bio-style academic lab pages
(e.g. sagarkanhere.faculty.bio), built with plain HTML/CSS/JS so it's easy to edit and host
on GitHub Pages — no build step required.

## Files

- `index.html` — all page content and section structure
- `style.css` — all styling (colors, fonts, spacing are defined as CSS variables at the top)
- `script.js` — footer year + active-section highlighting in the sticky nav
- `assets/` — put your banner image and profile photo here

## Sections included (same order as the reference site)

1. Hero (banner image + profile photo + name + tagline)
2. Sticky section-jump navigation
3. About PI
4. Education (timeline, expandable-style entries with description/links)
5. Research Interests (tag pills)
6. Publications (year + title + journal + authors + link)
7. Follow the lab updates (ORCID / Google Scholar / ResearchGate / LinkedIn / Email)
8. Work Experience (timeline)
9. Honors & Awards
10. Skills (tag pills)
11. Footer

## How to customize

1. **Text content** — open `index.html` and replace every placeholder
   (e.g. "Your Name", "Your University", bracketed text) with your own info.
2. **Images** — drop your banner image and headshot into `assets/` and update the
   `src` paths in the `.hero-banner-img` and `.hero-avatar img` tags. If you don't add
   images, the banner falls back to a green gradient and the avatar circle just stays empty
   (you can delete the avatar div entirely if you don't want a photo).
3. **Colors/fonts** — edit the `:root` variables at the top of `style.css`. Everything
   (accent color, tag background, fonts) is driven from there.
4. **Add/remove timeline, publication, or award entries** — copy/paste the existing
   `.timeline-item`, `.pub-card`, or `.award-item` blocks in `index.html` and edit them.
5. **Nav links** — if you rename a section's `id`, update the matching `href="#id"`
   in the `<nav class="section-nav">` block.

## Hosting on GitHub Pages

1. Create a new repo (e.g. `your-username.github.io` for a root site, or any repo name
   for a project site).
2. Push these three files (`index.html`, `style.css`, `script.js`) and the `assets/`
   folder to the repo root (or to `/docs` if you prefer — just set that in step 3).
3. In the repo: **Settings → Pages → Source** → select the branch (usually `main`) and
   the folder (`/` root), then save.
4. GitHub will give you a live URL within a minute or two, e.g.
   `https://your-username.github.io/repo-name/`.

No build tools, frameworks, or dependencies — just static files.

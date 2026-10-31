# Résumé Site Template

A small multi-page résumé site: a sticky top bar with your name and navigation, a
scrolling home page (Profile, Experience, Projects, Skills, Education, Contact),
plus a dedicated page for each project and each job.

## Files

- `index.html` — home page
- `project-1.html` … `project-4.html` — one page per project (opened by clicking a square)
- `experience-1.html` … `experience-3.html` — one page per job
- `images/project-N.svg` — placeholder tile images. Replace with your own (e.g. `images/project-1.jpg`) and update the `src` in `index.html` and the matching project page.
- `style.css`, `script.js` — shared by every page

## Running it in VS Code

1. Open this folder in VS Code (`File > Open Folder`).
2. Install the **Live Server** extension (search it in the Extensions panel).
3. Right-click `index.html` → **Open with Live Server**. It'll open in your
   browser and reload automatically whenever you save a file.

No build step, no npm install — it's plain HTML/CSS/JS.

## What to edit first

- **`index.html`** — replace the placeholder name, title, bio, jobs,
  projects, and contact email with your own. Everything is in plain
  English inside the `<section>` tags, in the order it appears on the page.
- **`style.css`** — the `:root { ... }` block at the very top holds every
  color and font used on the site. Change a value there and it updates
  everywhere. Swap `--amber` for any accent color you like.
- **`script.js`** — you shouldn't need to touch this unless you want to
  change the scroll behavior; it just handles the progress bar, active
  nav highlighting, and the mobile menu.

## Adding a real photo

Swap the `<span class="avatar">IS</span>` (in the top bar of each page) in `index.html` for:
```html
<img class="avatar" src="your-photo.jpg" alt="Your Name">
```
and add `object-fit: cover;` to the `.avatar` rule in `style.css`.

## Linking a real PDF résumé

Put your PDF in this folder and update the download button in `index.html`:
```html
<a class="btn-download" href="resume.pdf" download>Download résumé (PDF)</a>
```

## Deploying it for free

Any static host works — no server required:
- **GitHub Pages**: push this folder to a repo, enable Pages in repo settings.
- **Netlify / Vercel**: drag-and-drop the folder onto their dashboard.

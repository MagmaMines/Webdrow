# WebDrow — Visually Web Builder 🌐
---
#### Promotion :
<img width="720" height="266" alt="Try Beyoneer IDE" src="https://github.com/user-attachments/assets/e9ee58b5-22fd-4e6f-9400-6325a98644c4" />

**Became a __Ultimate developer__ with [Beyoneer.](https://beyoneer.netlify.app/)**

---
Webdrow a clean, fast, browser-based Web builder that lets anyone create simple multi-page websites directly in the browser — no server, no build tools, no installs. Design pages with editable blocks (headings, paragraphs, images, buttons), style them inline, manage multiple pages, and export static HTML you can host anywhere.
# Webdrow Pro (Free) 🧑‍💻
By MagmaMinesTeam · help.magmamine@gmail.com

Webdrow Pro is a lightweight, open-source WYSIWYG web page builder that runs entirely in the browser. Design pages visually with editable blocks (headings, paragraphs, images, video, tables, menus, forms), style them with the Design Studio, preview animations and image effects, and export a production-ready HTML file.

Version: Free (open-source) under **GPL licence**

Primary file: index.html

---

## Key Features 🔧
- Add common building blocks: Title, Text, Inputs, Buttons, Lists, Images, Video, Tables, Menus, Spacers
- Inline editing (contenteditable) for fast content changes
- Design Studio: font family, size, bold/italic/underline, color, alignment, background, dimensions
- Image effects: grayscale, sepia, blur, brightness, shadow, rounded/circle
- Entrance animations: fade, slide, bounce, zoom, rotate
- Table controls: add/remove rows & columns, editable cells
- Menu controls: add/remove items, inline-edit names and URLs
- Simple client-side JS binding (data-js → inline event handlers on export)
- Auto-save in browser localStorage
- Export the current page as a single self-contained HTML file (styles embedded)

---

## Real-World / Production Tips 🌍
- Rename the shipped web builder to `index.html` when publishing or include it as the main page of a static site — export uses the page title to name downloads.
- Images: host production images on a CDN or your web host. Use optimized/responsive images:
  - Resize large images before adding to the page.
  - Use modern formats (WebP) when possible.
  - Add meaningful alt text for accessibility and SEO.
- JavaScript: exported event handlers are inlined. Keep client-side code small and self-contained. For heavier logic, reference an external JS file after export.
- Performance: avoid very large images and many heavy animations on a single page for best load times on mobile.
- SEO: fill the SEO Title and Description in the Design Studio before exporting — these are injected into the exported HTML head.

---

## Quick Start 💨
1. Download or clone this repo.
2. Place the builder file as `index.html` (rename if needed).
3. Open `index.html` in a modern browser (Chrome, Firefox, Edge, Safari).
4. Use the bottom toolbar to add blocks. Click any block to edit inline or use the Design Studio panel (bottom properties panel).
5. Use the header Export button to download the current page as a standalone HTML file.

Note: The builder auto-saves to localStorage under the key `wd_pages_v3`. You can clear or inspect saved pages from DevTools.

---

## How to Use Images (practical)
- Add an image block, then set the `Image Src` in the Design Studio or paste a direct URL.
- For production, upload images to your host/CDN and update the image URL before export.
- Provide descriptive alt text in the Design Studio’s Alt Text field (important for accessibility).
- If you need rounded avatars or thumbnails, use the "Round" or "Circle" image effects in the panel.

---

## Export & Output
- Export produces a single HTML file with embedded styles and animations.
- Editable attributes (`contenteditable`, `.wd-selected`, `data-js`) are cleaned up for the exported version.
- `data-js` on inputs and buttons becomes inline `onchange`/`onclick` handlers in the exported file — verify and test exported JS.
- Exported file is ready to upload to any static hosting (GitHub Pages, Netlify, Vercel, S3, etc.).

---

## How to Contribute
Contributions are welcome and appreciated. Keep changes focused, simple, and dependency-free.

Suggested workflow:
1. Fork the repository.
2. Create a branch: `git checkout -b feat/your-feature`
3. Implement changes in `index.html` (or add additional assets).
4. Commit with clear messages and open a Pull Request describing:
   - What you changed
   - Why it helps
   - Any testing notes or screenshots

Guidelines:
- Prefer vanilla JS/CSS and avoid adding heavy libraries.
- Keep exported HTML self-contained and backwards-compatible with existing localStorage state where possible.
- Document any user-facing UI changes in the README.

Reporting bugs:
- Open an issue with steps to reproduce, browser + version, and screenshots or short recordings when helpful.

Contact: help.magmamine@gmail.com

---

## File Structure
- index.html — Single-file web builder (UI, styles, JS). (Rename the shipped file to index.html if necessary.)
- README.md — This document

---

## Development Notes 👀
- No build tools required — edit `index.html` directly and open it in the browser.
- Inspect `localStorage` key `wd_pages_v3` to view saved page data during development.
- When making UI changes, test creating, switching, saving, and exporting pages to ensure backward compatibility.

---

Made with practicality in mind by MagmaMinesTeam  
Contact: help.magmamine@gmail.com

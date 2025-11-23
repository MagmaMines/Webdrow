#  WebDrow — Visually Web Builder 

**Webdrow** a clean, fast, browser-based **Web builder** that lets anyone create simple multi-page websites directly in the browser — no server, no build tools, no installs.
Design pages with editable blocks (headings, paragraphs, images, buttons), style them inline, manage multiple pages, and export static HTML you can host anywhere.

---
## Important ⚠️
**Text are editable** . so you need to `false` editable content manually.

## 🚀 Key Features

* **Block-based editing**

  * Add and arrange blocks (Heading, Paragraph, Image, Button, Horizontal rule).
  * Each block is editable inline — click and type.

* **Multi-page management**

  * Create, rename, switch between, and delete pages.
  * Each page stores its own content and background color.

* **Live properties panel**

  * Select any block to reveal contextual controls:

    * Change alignment (left / center / right)
    * Edit text, image URL, and alt text
    * Edit button text and target URL
    * Set width, height, border radius, font family, and color
    * Set block background color

* **Move & organize**

  * Reorder blocks with simple move-up / move-down controls.
  * Select and delete blocks.

* **Automatic saving (local)**

  * All pages and styles are saved to `localStorage` so changes persist between browser sessions.

* **One-click export**

  * Export the current page as a static `.html` file with a simple navigation bar that links to your other pages (place all exported pages in the same folder to keep the links working).
  * Export includes page styles and content for immediate use.

* **Lightweight & frontend-only**

  * Built to run entirely in the browser — great for prototypes, portfolios, landing pages, or teaching basic web design.

---

## 🧭 How It Works (User-facing — no code)

1. **Open the editor** in your browser. The main editing area is the *canvas*.
2. **Add blocks** using the editor controls (Heading, Paragraph, Image, Button, HR).
3. **Click a block** to edit inline or to open the properties panel where you can adjust styling and media.
4. **Create pages** from the page menu — each page keeps its own content and background color.
5. **Changes are saved automatically** to your browser so you won’t lose work when closing the tab.
6. **Export** the current page as a standalone HTML file. To make navigation work, export every page and keep the files in one folder.

---

## ✨ UX Notes & Tips

* Use semantic blocks (headings for titles, paragraphs for content) for better readability and export structure.
* For images, paste a direct image URL (hosted image) into the image URL property — this keeps exported HTML small and portable.
* Buttons are simple anchor elements — set their target URL in the properties panel. During editing they are non-navigable to prevent accidental leaving.
* To change a page’s background, open the page options and set a background color — it’s saved per page.
* Minimum one page is required — the editor prevents deletion if only a single page remains.

---

## 📁 Export & Hosting

* Exported files are fully static HTML and can be hosted on:

  * GitHub Pages
  * Netlify
  * Vercel (static hosting)
  * Any static file server or S3/Cloud storage
* To preserve cross-page navigation, export *all* pages and place them together in the same folder (links use simple `PageName.html` filenames).

---

## 📝 Usage Checklist (quick start)

1. Open the webdrow in your browser.
2. Create or switch to the page you want to edit.
3. Use the toolbar to add blocks.
4. Click any block to edit text or open the properties panel.
5. Move or delete blocks as needed.
6. Export the page once you’re ready to publish.

---

## 👥 Contributing

Contributions, suggestions, bug reports, and improvements are welcome!
If you want to contribute:

* Fork the repository
* Add features or fixes on a branch
* Open a pull request with a clear description of changes


---

## 📬 Contact & Credits

Webdrow By **MagmaMinesTeam**

Help: [help.magmamine@gmail.com](mailto:help.magmamine@gmail.com)

Website: [https://magmamines.wordpress.com/](https://magmamines.wordpress.com/)


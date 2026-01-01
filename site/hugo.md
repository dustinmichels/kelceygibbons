# Hugo Site & Custom Theme: Quickstart & Best Practices

## 1. Core Directory Structure

Hugo operates on a **Union File System**. Files in the project root take precedence over files in the `themes/` directory.

- `content/`: Markdown files (Organize as `folder/index.md` for Page Bundles).
- `assets/`: Resources processed by Hugo Pipes (SCSS, JS, Images).
- `static/`: Raw files copied directly to the build (Favicons, Robots.txt).
- `layouts/`: HTML templates (Overrides the theme).
- `hugo.toml`: Global configuration and parameters.

---

## 2. The Templating Hierarchy

Custom themes rely on the `layouts/` folder. Use these three files as your foundation:

1.  **\_default/baseof.html**: The master shell (HTML, Head, Body tags).
2.  **\_default/list.html**: Templates for multiple items (Homepage, Category pages).
3.  **\_default/single.html**: Templates for individual pages or blog posts.

### Crucial Syntax

- **The Dot (`.`):** Represents the current context. Always pass it to partials: `{{ partial "name.html" . }}`.
- **Blocks:** Define a block in `baseof.html` using `{{ block "main" . }}{{ end }}` and fill it in `single.md` using `{{ define "main" }}...{{ end }}`.

---

## 3. Best Practices (The "Professional" Way)

### Content Management

- **Page Bundles:** Always prefer `content/post-name/index.md` over `post-name.md`. This keeps images and resources co-located with the text.
- **Archetypes:** Use `archetypes/default.md` to pre-fill front matter (tags, categories, dates) so you don't type them manually.

### Theme Development

- **Hugo Pipes:** Use the asset pipeline for performance. It handles minification and cache-busting (fingerprinting) automatically.
- **No Direct Theme Edits:** If using a third-party theme, never edit files inside `themes/`. Copy the specific file to your root `layouts/` folder to override it safely.
- **Data Folders:** Move site-wide data (e.g., team members, pricing) into `data/team.yml` and loop through it using `{{ range .Site.Data.team }}`.

### Performance & SEO

- **Image Processing:** Use `.Resources.ByType "image"` to resize and convert images to WebP on the fly.
- **Environment Logic:** Use `{{ if hugo.IsProduction }}` to wrap scripts like Google Analytics so they don't fire during local development.

---

## 4. Essential Commands

| Command                      | Purpose                                           |
| :--------------------------- | :------------------------------------------------ |
| `hugo server -D`             | Local dev server (includes drafts).               |
| `hugo new posts/my-title.md` | Creates a new post using archetypes.              |
| `hugo`                       | Builds the static site into the `public/` folder. |
| `hugo list drafts`           | Shows all currently unpublished content.          |

---

## 5. Deployment Workflow

- **BaseURL:** Ensure your `baseURL` in `hugo.toml` matches your production URL.
- **Submodules:** If using a theme, ensure it is added as a Git Submodule so your CI/CD (Netlify/GitHub Actions) can pull it during build.

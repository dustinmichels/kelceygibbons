# Style Guide: Afrofuturist History of Tech

**Client:** MIT Academic Portfolio
**Theme:** The Digital Griot / Ancient Future

---

## 🎨 Color Palette

A balance of deep grounding tones, vibrant "neon" florals, and a clean parchment base.

| Color           | Hex       | Role                                                    |
| :-------------- | :-------- | :------------------------------------------------------ |
| **Blue Slate**  | `#5E6075` | Primary Text, Deep Shadows, Structural Dividers         |
| **Sweet Peony** | `#D861A1` | Primary Accent, Interaction states, Neon Glows          |
| **Burnt Peach** | `#DF7454` | Secondary Accent, Energy, Historical "Terracotta" vibes |
| **Sky Surge**   | `#3ABFD9` | Highlights, Hyperlinks, Digital "Pulse" elements        |
| **White Smoke** | `#F7F5F4` | Background, Negative Space, Modern Archive feel         |

---

## 🔡 Typography

The font pairing bridges the gap between terminal-based engineering and avant-garde art.

### 1. Primary Heading: **Syne**

- **Style:** Extra Bold
- **Vibe:** Art-focused, wide, and unapologetically unique.
- **Usage:** H1 and H2 headers. Use `text-transform: uppercase` for a more monumental feel.

### 2. Secondary Heading / Utility: **Space Mono**

- **Style:** Regular / Bold
- **Vibe:** An MIT classic. It feels like code, telegrams, and technical blueprints.
- **Usage:** Navigation, Metadata (dates, tags), and H3 headers.

### 3. Body Text: **Libre Baskerville**

- **Style:** Regular
- **Vibe:** The Historian’s choice. High legibility for long-form essays and research papers.
- **Usage:** Main paragraphs and blockquotes.

---

## 🚀 Visual Ideas & Elements

### The "Afro-Tech" Aesthetic

- **Geometric Patterns:** Use CSS grids or SVG backgrounds featuring Kente-inspired patterns, but rendered in **Sky Surge** or **Sweet Peony** lines.
- **Layered Depth:** Don't be afraid of "Stickers" or "Overlays." Overlap images of old technology (vacuum tubes, early circuits) with vibrant color washes.
- **Texture:** Add a subtle "grain" or "noise" filter over the **White Smoke** background to make it feel like tactile paper or a glowing CRT monitor.

### Interactions

- **Hover States:** When hovering over a project, use a "duotone" filter effect that shifts the image from grayscale to **Burnt Peach** and **Blue Slate**.
- **Buttons:** Heavy, offset box-shadows using **Sweet Peony** (e.g., `box-shadow: 5px 5px 0px var(--sweet-peony);`).

---

## 💻 Sample CSS Variables

```css
:root {
  --blue-slate: #5e6075;
  --sweet-peony: #d861a1;
  --burnt-peach: #df7454;
  --sky-surge: #3abfd9;
  --white-smoke: #f7f5f4;

  --font-header: "Syne", sans-serif;
  --font-mono: "Space Mono", monospace;
  --font-body: "Libre Baskerville", serif;
}
```

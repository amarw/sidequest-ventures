# SideQuest Ventures website

Single-page site for [www.sidequestventures.in](https://www.sidequestventures.in/), built with [Vite](https://vite.dev).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/ (the only folder to deploy)
npm run preview
```

## Layout

- `index.html`: the page
- `src/styles/`: `tokens.css` (design-system tokens), `fonts.css` and `main.css`
- `src/assets/images/`: venture photos at 800, 1200 and 1586px wide; the browser picks one via `srcset`
- `src/assets/fonts/`: self-hosted Inter and Space Grotesk (latin, variable, SIL OFL), preloaded from `index.html`
- `src/assets/static/`: favicons, manifest and `og-image.png`, copied as-is to the site root

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes `dist/` to GitHub Pages
on every push to `main` (or run it manually from the Actions tab).

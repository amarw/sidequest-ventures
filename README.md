# SideQuest Ventures website

Single-page site built with [Vite](https://vite.dev) from the designs in `docs/designs/`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/ (the only folder to deploy)
npm run preview
```

## Layout

- `index.html`: the page
- `src/styles/`: `tokens.css` (design-system tokens) and `main.css`
- `src/assets/images/`: venture photos (hashed into `dist/assets/` at build)
- `src/assets/static/`: favicons, manifest and `og-image.png`, copied as-is to the site root

## docs/ is never deployed

`docs/` holds design source files only. Vite emits just `index.html`, what it imports, and
`src/assets/static/`, and `npm run build` fails if anything from `docs/` appears in `dist/`.
Deploy `dist/` (see `netlify.toml`); `.vercelignore` also excludes `docs/` from uploads.

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
- `src/assets/images/`: venture photos at 800, 1200 and 1586px wide; the browser picks one via `srcset`
- `src/assets/fonts/`: self-hosted Inter and Space Grotesk (latin, variable, SIL OFL), preloaded from `index.html`
- `src/assets/static/`: favicons, manifest and `og-image.png`, copied as-is to the site root

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds the site and publishes `dist/` to GitHub Pages
on every push to `main` (or run it manually from the Actions tab).

One-time setup in the repo's **Settings → Pages**:

1. **Source: GitHub Actions.** Do not use "Deploy from a branch", which could publish `docs/`.
2. **Custom domain:** `www.sidequestventures.in`, then tick **Enforce HTTPS** once the certificate is issued.

DNS at the domain registrar:

| Type | Name | Value |
|---|---|---|
| CNAME | `www` | `amarw.github.io` |
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| AAAA (optional) | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |

## docs/ stays local

`docs/` holds the design source files (brand book, tokens, logos, design boards). It is
git-ignored, so it is never committed, and the site never loads from it. Vite emits only
`index.html`, what it imports, and `src/assets/static/`; `npm run build` fails if design
source files appear in `dist/`, and the Pages workflow uploads only `dist/`.

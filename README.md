# Recueil — React recreation

A responsive React + Vite recreation inspired by https://recueil.framer.website/.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vercel settings: Framework Preset **Vite**, Build Command `npm run build`, Output Directory `dist`.

## Included
- Responsive fragrance-brand landing page
- React components, Framer Motion scroll reveals and ingredient-tab transitions
- Hover effects, mobile navigation, accordion FAQ, smooth scrolling
- Vercel SPA rewrite and `.gitignore`
- Framer-hosted image assets from the referenced page

Note: this is an independent React recreation, not an exported Framer project. It approximates the visible page and interaction style; it cannot guarantee pixel-perfect layout or reproduce proprietary Framer CMS, checkout, and every original animation. Images are hotlinked from Framer's CDN, so internet access is required for them to load. The subscription CTA is a demo mail link, not a working payment system.

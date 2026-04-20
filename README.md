# joshillichmann.com

Personal portfolio built with [Astro](https://astro.build), React islands, and Tailwind CSS v4. Hosted on Cloudflare Pages.

## Development

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # outputs to dist/
npm run preview # serve the built site locally
```

## Architecture

- **`src/pages/index.astro`** — static page shell; imports the two React islands below.
- **`src/components/ProjectsCarousel.tsx`** — Embla carousel + framer-motion, hydrated with `client:visible`.
- **`src/components/TestimonialsRotator.tsx`** — auto-rotating testimonials, hydrated with `client:visible`.
- **`src/components/ui/`** — shared React components (`button`, `carousel`).
- **`src/layouts/BaseLayout.astro`** — `<head>`, metadata, Inter font (`@fontsource/inter`), global styles.
- **`src/styles/global.css`** — Tailwind v4 entrypoint + theme tokens.

## Deployment

Cloudflare Pages with Git integration. Build command `npm run build`, output directory `dist`. Analytics via Cloudflare Web Analytics (enabled in the Pages dashboard).

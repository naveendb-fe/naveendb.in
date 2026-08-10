# Naveen DB — Personal site

Vite + React portfolio for [naveendb.in](https://naveendb.in).

## Stack

- React 19 + TypeScript
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- react-helmet-async

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Produces a static `dist/` with prerendered `/` and `/work/*` HTML shells for crawlers and static hosting.

## Deploy

### GitHub Pages (live pipeline)

```bash
npm run deploy
```

Publishes `dist/` to the `gh-pages` branch. Pages is configured with custom domain `naveendb.in` — ensure DNS points at GitHub Pages.

### Vercel (optional)

Connect [naveendb-fe/naveendb.in](https://github.com/naveendb-fe/naveendb.in) in the Vercel dashboard. `vercel.json` already includes SPA rewrites.

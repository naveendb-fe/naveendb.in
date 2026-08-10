#!/usr/bin/env node
/**
 * Post-build prerender: copy index.html into route folders with route-specific meta
 * so static hosts and crawlers get usable HTML for / and /work/:slug.
 */
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const indexPath = join(dist, 'index.html')

const site = {
  name: 'Naveen DB',
  title: 'Naveen DB | Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer at Granicus — building accessible, performant React product UIs at civic scale.',
  url: 'https://naveendb.in',
}

const routes = [
  {
    path: '/',
    title: site.title,
    description: site.description,
  },
  {
    path: '/work/civic-scale-ui',
    title: `Civic-scale product UI | ${site.name}`,
    description:
      'Case study: civic-scale React product UI craft at Granicus — accessibility, hierarchy, and durable component systems.',
  },
  {
    path: '/work/shared-ui-monorepo',
    title: `Shared UI & monorepo craft | ${site.name}`,
    description:
      'Case study: shared UI and monorepo frontend architecture for scalable React product development.',
  },
  {
    path: '/work/accessibility-quality',
    title: `Accessibility & quality | ${site.name}`,
    description:
      'Case study: accessibility-first React UI and testing culture with Jest and React Testing Library.',
  },
  {
    path: '/work/delivery-inaccuracy',
    title: `Delivery Inaccuracy | ${site.name}`,
    description:
      'Case study: Next.js reporting application for restaurant delivery inaccuracy insights at Accenture AI.',
  },
  {
    path: '/work/mcinsights',
    title: `MCInsights | ${site.name}`,
    description:
      'Case study: Vue.js unified insights platform (MCInsights) built at Accenture AI.',
  },
]

function injectMeta(html, { path, title, description }) {
  const url = `${site.url}${path === '/' ? '/' : path}`
  let out = html
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`,
  )
  out = out.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${title}" />`,
  )
  out = out.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${description}" />`,
  )
  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${url}" />`,
  )
  return out
}

const base = readFileSync(indexPath, 'utf8')

for (const route of routes) {
  const html = injectMeta(base, route)
  if (route.path === '/') {
    writeFileSync(indexPath, html)
    continue
  }
  const outFile = join(dist, route.path.slice(1), 'index.html')
  mkdirSync(dirname(outFile), { recursive: true })
  writeFileSync(outFile, html)
}

copyFileSync(indexPath, join(dist, '404.html'))
console.log(`Prerendered ${routes.length} routes → dist/`)

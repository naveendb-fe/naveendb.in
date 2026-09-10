#!/usr/bin/env node
/**
 * Post-build prerender: copy index.html into route folders with route-specific meta
 * so static hosts and crawlers get usable HTML for multi-route pages.
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

const workRoutes = [
  {
    path: '/work/delivery-inaccuracy',
    title: `Delivery Inaccuracy | ${site.name}`,
    description:
      'Delivery Inaccuracy — Next.js reporting app for restaurant performance and order inaccuracies at Accenture AI.',
  },
  {
    path: '/work/mcinsights',
    title: `MCInsights | ${site.name}`,
    description:
      'MCInsights — Vue.js unified insights platform for reports, apps, and knowledge base at Accenture AI.',
  },
  {
    path: '/work/zero-quartile',
    title: `Zero Quartile | ${site.name}`,
    description:
      'Zero Quartile — React expense-management app with D3 visualizations at Accenture AI.',
  },
  {
    path: '/work/compassionate-hr',
    title: `Compassionate HR | ${site.name}`,
    description:
      'Compassionate HR — jQuery site helping HR teams navigate compassion-needed situations at Accenture AI.',
  },
  {
    path: '/work/iot-asset-management',
    title: `IoT Asset Management | ${site.name}`,
    description:
      'IoT Asset Management — Angular application for tracking assets and behaviours at Kogentix.',
  },
  {
    path: '/work/amp',
    title: `AMP — Automated Machine Learning Platform | ${site.name}`,
    description:
      'AMP — Automated Machine Learning Platform UI built with Angular.js at Kogentix.',
  },
  {
    path: '/work/supply-chain-forensics',
    title: `Supply Chain Forensics | ${site.name}`,
    description:
      'Supply Chain Forensics — Django/jQuery tool for managing component and finished-goods part numbers at Flutura.',
  },
  {
    path: '/work/asset-health-monitor',
    title: `Asset Health Monitor | ${site.name}`,
    description:
      'Asset Health Monitor — solar ecosystem monitoring UI for urgent component issues at Flutura.',
  },
  {
    path: '/work/solar-operations-watch',
    title: `Solar Operations Watch | ${site.name}`,
    description:
      'Solar Operations Watch — analytical IoT product UI for solar energy operations at Flutura.',
  },
]

const routes = [
  {
    path: '/',
    title: site.title,
    description: site.description,
  },
  {
    path: '/work',
    title: `Work | ${site.name}`,
    description:
      'Selected product work — Delivery Inaccuracy, MCInsights, Zero Quartile, IoT asset management, and earlier analytics UIs.',
  },
  {
    path: '/about',
    title: `About | ${site.name}`,
    description:
      'Senior frontend engineer focused on React, TypeScript, accessibility, and durable product systems.',
  },
  {
    path: '/contact',
    title: `Contact | ${site.name}`,
    description: 'Get in touch with Naveen DB — email, LinkedIn, GitHub, and CV.',
  },
  ...workRoutes,
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

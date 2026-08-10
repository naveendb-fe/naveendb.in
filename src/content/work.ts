export type CaseStudy = {
  slug: string
  title: string
  company: string
  year: string
  summary: string
  featured: boolean
  stack: string[]
  problem: string
  approach: string
  outcome: string
  metaDescription: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'civic-scale-ui',
    title: 'Civic-scale product UI',
    company: 'Granicus',
    year: '2022 — Present',
    summary:
      'Complex React surfaces for government and citizen workflows — clarity, density, and trust at public-sector scale.',
    featured: true,
    stack: ['React', 'TypeScript', 'Design systems'],
    problem:
      'Public-sector products carry dense domain rules, varied agency needs, and high expectations for clarity. Interfaces must stay usable under information load without sacrificing accessibility or trust.',
    approach:
      'Component-driven React architecture, careful information hierarchy, and collaborative design/engineering loops. Patterns emphasize predictable navigation, resilient forms, and UI that scales across product surfaces.',
    outcome:
      'Faster feature delivery on shared UI foundations, clearer workflows for operators and citizens, and a frontend practice aligned with accessibility and performance budgets. (Details kept non-confidential.)',
    metaDescription:
      'Case study: civic-scale React product UI craft at Granicus — accessibility, hierarchy, and durable component systems.',
  },
  {
    slug: 'shared-ui-monorepo',
    title: 'Shared UI & monorepo craft',
    company: 'Granicus',
    year: '2022 — Present',
    summary:
      'Scalable frontend architecture — shared packages, consistent UI, and team velocity across a growing product surface.',
    featured: true,
    stack: ['Monorepo', 'React', 'TypeScript', 'Shared packages'],
    problem:
      'Multiple product surfaces risk drift — duplicated components, inconsistent interaction patterns, and slow cross-team reuse.',
    approach:
      'Monorepo-minded package boundaries, shared UI primitives, and clear ownership for design-system consumers. Emphasis on typed APIs, documentation, and CI that keeps packages trustworthy.',
    outcome:
      'More consistent UX across surfaces and lower cost to ship new features by composing shared building blocks instead of reinventing UI.',
    metaDescription:
      'Case study: shared UI and monorepo frontend architecture for scalable React product development.',
  },
  {
    slug: 'accessibility-quality',
    title: 'Accessibility & quality',
    company: 'Granicus',
    year: '2022 — Present',
    summary:
      'WCAG-minded UI and a testing culture that treats quality as a product feature — from keyboard paths to RTL.',
    featured: true,
    stack: ['a11y', 'Jest', 'React Testing Library'],
    problem:
      'Civic products must work for everyone. Accessibility and regression risk grow as UI complexity increases.',
    approach:
      'Bake accessibility into components early, prefer semantic HTML and tested interaction paths, and scale confidence with Jest + React Testing Library patterns that stay readable for the team.',
    outcome:
      'Fewer accessibility escapes, more predictable refactors, and a shared language for writing clean UI tests — including published guidance on RTL practices.',
    metaDescription:
      'Case study: accessibility-first React UI and testing culture with Jest and React Testing Library.',
  },
  {
    slug: 'delivery-inaccuracy',
    title: 'Delivery Inaccuracy',
    company: 'Accenture AI',
    year: '2019 — 2022',
    summary:
      'Next.js reporting and modelling for store operators and corporate users — restaurant performance and order inaccuracies.',
    featured: false,
    stack: ['Next.js', 'React', 'Chart.js'],
    problem:
      'Operators needed a clear view of delivery and order inaccuracies across stores to find systemic mistakes and improve performance.',
    approach:
      'Built a Next.js application with interactive reporting and charts so managers and corporate users could explore performance and common error areas.',
    outcome:
      'A unified reporting experience that helped stores identify patterns and act on delivery inaccuracy insights.',
    metaDescription:
      'Case study: Next.js reporting application for restaurant delivery inaccuracy insights at Accenture AI.',
  },
  {
    slug: 'mcinsights',
    title: 'MCInsights',
    company: 'Accenture AI',
    year: '2019 — 2022',
    summary:
      'Vue.js platform unifying reports, apps, and knowledge — a global view of data and insights products.',
    featured: false,
    stack: ['Vue', 'Vuex', 'Vuetify'],
    problem:
      'Insights products were fragmented across reports, apps, and knowledge bases, making it hard to find a single global view.',
    approach:
      'Delivered an integrated Vue.js experience with shared navigation and state so teams could move between insights products coherently.',
    outcome:
      'A unified insights shell that reduced context-switching and gave stakeholders one place to explore data products.',
    metaDescription:
      'Case study: Vue.js unified insights platform (MCInsights) built at Accenture AI.',
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}

export function getFeaturedWork() {
  return caseStudies.filter((c) => c.featured)
}

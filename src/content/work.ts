import { workImages } from './work-images'

export type CaseStudyImage = {
  src: string
  alt: string
  caption: string
}

export type CaseStudy = {
  slug: string
  title: string
  company: string
  year: string
  summary: string
  /** Primary featured work shown on home + elevated on /work */
  featured: boolean
  /** Secondary featured (home only if featured); archive otherwise */
  archive?: boolean
  stack: string[]
  role?: string
  problem: string
  approach: string
  outcome: string
  decisions?: string[]
  metaDescription: string
  images?: CaseStudyImage[]
}

/**
 * Work: GDS is the primary deep case study; Delivery Inaccuracy is secondary depth;
 * remaining entries are curated archive.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'granicus-design-system',
    title: 'Granicus Design System',
    company: 'Granicus Inc.',
    year: '2022 — Present',
    summary:
      'A shared design system for Granicus products — tokens, React components, patterns, and documentation so teams ship consistent, accessible UI.',
    featured: true,
    stack: ['React', 'TypeScript', 'Design tokens', 'Storybook', 'Figma'],
    role: 'Senior Frontend Engineer — design-system engineering with design partners',
    problem:
      'Across multiple Granicus products, UI was drifting: duplicated components, uneven interaction patterns, and accessibility that depended on whoever happened to build the screen. Design and engineering lacked one trusted source of working code and guidance, so every new surface risked reinventing the same primitives.',
    approach:
      'Help build and evolve GDS as a product in its own right: foundations (color, type, space, elevation), token-driven React components, documented patterns for common flows (forms, filters, progressive disclosure, notifications), and contribution paths through Figma libraries, Storybook, and written guidelines. Drafts move through MCP and shared skills, then get checked against the system. The bar is accessibility, consistency, and predictable interaction — not a one-off kit.',
    decisions: [
      'Treat the system as shared infrastructure: wrappers and tokens over one-off styles so product teams inherit behavior, not just visuals.',
      'Document patterns as recipes, not only isolated components — the hard part is composing flows teams ship weekly.',
      'Keep design–dev alignment explicit: Figma libraries and Storybook stay in lockstep so “what’s in Figma” matches “what’s in code.”',
    ],
    outcome:
      'Product teams can adopt one system — foundations, components, and patterns with clear docs — instead of forking UI per product. New surfaces reuse proven building blocks; accessibility and interaction stay more consistent as the portfolio grows.',
    metaDescription:
      'Granicus Design System — shared React foundations, components, and patterns for consistent, accessible product UI at Granicus Inc.',
    images: [
      {
        src: '/work/gds/docs-home.png',
        alt: 'Granicus Design System documentation home — one shared system for every product',
        caption: 'Docs home — shared system overview for design and engineering',
      },
      {
        src: '/work/gds/components-overview.png',
        alt: 'GDS components overview with token-driven wrappers',
        caption: 'Components overview — token-driven Gds* wrappers',
      },
      {
        src: '/work/gds/button.png',
        alt: 'GDS Button component documentation with usage guidance',
        caption: 'Button — usage, anatomy, and variants',
      },
      {
        src: '/work/gds/text-field.png',
        alt: 'GDS Text Field component documentation',
        caption: 'Text Field — input patterns and guidance',
      },
      {
        src: '/work/gds/patterns-overview.png',
        alt: 'Design system patterns overview — notifications, filters, progressive disclosure, and related recipes',
        caption: 'Patterns — recipes for composing components in common flows',
      },
    ],
  },
  {
    slug: 'delivery-inaccuracy',
    title: 'Delivery Inaccuracy',
    company: 'Accenture AI',
    year: '2018 — 2022',
    summary:
      'Next.js reporting for store operators and corporate users to understand restaurant performance and order inaccuracies.',
    featured: true,
    stack: ['Next.js', 'React', 'Chart.js'],
    role: 'Front-end engineer — reporting UI and interactive charts',
    problem:
      'Operators and managers needed a clear view of restaurant performance and delivery/order inaccuracies so stores could spot systemic mistakes — not another static export.',
    approach:
      'Built a Next.js application with reporting and modelling views, using React and Chart.js so stakeholders could explore performance and inaccuracy patterns interactively.',
    decisions: [
      'Prioritize scan-friendly reporting layouts over decorative dashboards — density with hierarchy.',
      'Use interactive charts where exploration mattered more than a fixed PDF snapshot.',
    ],
    outcome:
      'A unified reporting experience that helped stores understand performance drivers and pinpoint common areas of mistake across the operation.',
    metaDescription:
      'Delivery Inaccuracy — Next.js reporting app for restaurant performance and order inaccuracies at Accenture AI.',
    images: [
      {
        src: '/work/delivery-inaccuracy/accuracy-report.png',
        alt: 'Accuracy Report dashboard with hourly inaccuracy charts and type breakdowns',
        caption: 'Accuracy Report — hourly rates, chargebacks, and inaccuracy type mix',
      },
      {
        src: '/work/delivery-inaccuracy/area-of-opportunity.png',
        alt: 'Area of opportunity view highlighting where stores can improve accuracy',
        caption: 'Area of opportunity — where operators should focus next',
      },
      {
        src: '/work/delivery-inaccuracy/market-comparison.png',
        alt: 'Market comparison reporting view across locations',
        caption: 'Market comparison — performance across locations',
      },
    ],
  },
  {
    slug: 'mcinsights',
    title: 'MCInsights',
    company: 'Accenture AI',
    year: '2018 — 2022',
    summary:
      'Vue shell providing a unified global view of insights products — reports, apps, and knowledge base.',
    featured: false,
    archive: true,
    stack: ['Vue', 'Vuex', 'Vuetify'],
    problem:
      'Data and insights products were fragmented across reports, apps, and a knowledge base, making it hard to get one coherent global view.',
    approach:
      'Delivered an integrated Vue.js shell with Vuex state and Vuetify UI so teams could move between insights products in a single experience.',
    outcome:
      'A unified insights platform that reduced context-switching and gave stakeholders one place to explore reports, apps, and knowledge.',
    metaDescription:
      'MCInsights — Vue.js unified insights platform for reports, apps, and knowledge base at Accenture AI.',
    images: [
      {
        src: '/work/mcinsights/1.png',
        alt: 'MCInsights home with report shelves and featured insight cards',
        caption: 'Home — shelves, search, and featured insight reports',
      },
      {
        src: '/work/mcinsights/5.png',
        alt: 'MCInsights add-document flow in the insights shell',
        caption: 'Create flow — adding an artifact in the unified shell',
      },
    ],
  },
  {
    slug: 'zero-quartile',
    title: 'Zero Quartile',
    company: 'Accenture AI',
    year: '2018 — 2022',
    summary:
      'React expense-management app to profile spend and surface cost-saving opportunities.',
    featured: false,
    archive: true,
    stack: ['React', 'Redux', 'D3.js'],
    problem:
      'Organizations needed a way to understand expense drivers in detail and find meaningful cost-saving opportunities.',
    approach:
      'Built a React application with Redux and D3.js visualizations so users could explore expense profiles and identify drivers of spend.',
    outcome:
      'An expense-management product that helped teams profile spend and identify where cost savings were possible.',
    metaDescription:
      'Zero Quartile — React expense-management app with D3 visualizations at Accenture AI.',
    images: [
      {
        src: '/work/zero-quartile/1.png',
        alt: 'Zero Quartile expense overview with spend profiling charts',
        caption: 'Overview — expense profiling and spend drivers',
      },
      {
        src: '/work/zero-quartile/2.png',
        alt: 'Zero Quartile detailed spend analysis view',
        caption: 'Analysis — drilling into cost-saving opportunities',
      },
      {
        src: '/work/zero-quartile/3.png',
        alt: 'Zero Quartile visualization detail for expense categories',
        caption: 'Detail — category-level spend visualization',
      },
    ],
  },
  {
    slug: 'compassionate-hr',
    title: 'Compassionate HR',
    company: 'Accenture AI',
    year: '2018 — 2022',
    summary:
      'Focused site for HR to navigate situations where compassion is needed and related responsibilities.',
    featured: false,
    archive: true,
    stack: ['jQuery', 'SCSS'],
    problem:
      'HR teams needed guidance for sensitive situations — when compassion is required and what responsibilities apply.',
    approach:
      'Built a focused jQuery site with SCSS styling so HR could navigate compassion scenarios and related responsibilities clearly.',
    outcome:
      'A practical reference experience that helped HR teams act with clarity in compassionate workplace situations.',
    metaDescription:
      'Compassionate HR — site helping HR teams navigate compassion-needed situations at Accenture AI.',
    images: [
      {
        src: '/work/compassionate-hr/1.png',
        alt: 'Compassionate HR landing guidance for sensitive workplace situations',
        caption: 'Entry — navigating compassion-needed situations',
      },
      {
        src: '/work/compassionate-hr/2.png',
        alt: 'Compassionate HR scenario guidance content',
        caption: 'Scenario guidance — responsibilities and next steps',
      },
      {
        src: '/work/compassionate-hr/3.png',
        alt: 'Compassionate HR detailed reference content',
        caption: 'Reference — clear paths for HR action',
      },
    ],
  },
  {
    slug: 'iot-asset-management',
    title: 'IoT Asset Management',
    company: 'Kogentix Inc.',
    year: '2017 — 2018',
    summary:
      'Angular asset-management application for tracking assets and behavioural signals.',
    featured: false,
    archive: true,
    stack: ['Angular', 'TypeScript', 'Material'],
    problem:
      'Enterprise customers needed to track assets and understand behavioural signals across their IoT estate.',
    approach:
      'Built an Angular + TypeScript application with Material UI for tracking assets and monitoring asset behaviour.',
    outcome:
      'An asset-management product that gave operators visibility into assets and their behavioural patterns.',
    metaDescription:
      'IoT Asset Management — Angular application for tracking assets and behaviours at Kogentix.',
    images: [
      {
        src: '/work/iot-asset-management/1.png',
        alt: 'IoT Asset Management dashboard for tracked assets',
        caption: 'Dashboard — asset tracking overview',
      },
      {
        src: '/work/iot-asset-management/2.png',
        alt: 'IoT Asset Management behavioural signal detail',
        caption: 'Signals — behavioural patterns on assets',
      },
      {
        src: '/work/iot-asset-management/select-module.png',
        alt: 'IoT Asset Management module selection screen',
        caption: 'Modules — selecting the working surface',
      },
    ],
  },
  {
    slug: 'amp',
    title: 'AMP — Automated Machine Learning Platform',
    company: 'Kogentix Inc.',
    year: '2017 — 2018',
    summary:
      'Frontend for an automated ML platform that helps organizations build AI applications aimed at KPI recommendations.',
    featured: false,
    archive: true,
    stack: ['Angular.js', 'Bootstrap', 'SCSS'],
    problem:
      'Organizations wanted AI applications that learn business context and recommend actions to improve KPIs without heavy manual modelling overhead.',
    approach:
      'Contributed to the AMP frontend with Angular.js, Bootstrap, and SCSS so users could work with automated ML workflows and recommendations.',
    outcome:
      'A platform UI that supported building AI applications aimed at timely, KPI-oriented recommendations.',
    metaDescription:
      'AMP — Automated Machine Learning Platform UI built with Angular.js at Kogentix.',
    images: [
      {
        src: '/work/amp/summary.png',
        alt: 'AMP ruleset summary with metadata and navigation tabs',
        caption: 'Ruleset summary — context, ownership, and tabs',
      },
      {
        src: '/work/amp/preview-overview.png',
        alt: 'AMP preview overview for automated ML rules',
        caption: 'Preview — reviewing rule behaviour before publish',
      },
      {
        src: '/work/amp/ruleset-list.png',
        alt: 'AMP ruleset list for managing automated ML rules',
        caption: 'Rulesets — inventory of automated rule packs',
      },
    ],
  },
  {
    slug: 'supply-chain-forensics',
    title: 'Supply Chain Forensics',
    company: 'Flutura',
    year: '2015 — 2017',
    summary:
      'Tool to manage component and finished-goods part numbers across the supply chain.',
    featured: false,
    archive: true,
    stack: ['Django', 'jQuery', 'Bootstrap'],
    problem:
      'Teams needed reliable control over component and finished-goods part numbers across the supply chain.',
    approach:
      'Built frontend experiences on a Django stack with jQuery and Bootstrap for managing part numbers and related supply-chain data.',
    outcome:
      'A forensics-oriented tool that helped operators manage components and finished-goods identifiers end to end.',
    metaDescription:
      'Supply Chain Forensics — Django/jQuery tool for managing component and finished-goods part numbers at Flutura.',
    images: [
      {
        src: '/work/supply-chain-forensics/page1.png',
        alt: 'Supply Chain Forensics primary management view',
        caption: 'Primary view — part and component management',
      },
      {
        src: '/work/supply-chain-forensics/page2.png',
        alt: 'Supply Chain Forensics secondary detail view',
        caption: 'Detail — finished-goods and component context',
      },
    ],
  },
  {
    slug: 'asset-health-monitor',
    title: 'Asset Health Monitor',
    company: 'Flutura',
    year: '2015 — 2017',
    summary:
      'Monitoring UI for urgent component issues across the solar panel ecosystem.',
    featured: false,
    archive: true,
    stack: ['Django', 'jQuery', 'Bootstrap'],
    problem:
      'Solar ecosystem operators needed fast visibility into component issues that required immediate attention.',
    approach:
      'Delivered a Django/jQuery/Bootstrap monitoring UI focused on surfacing urgent health issues across the solar panel ecosystem.',
    outcome:
      'Operators could spot critical component issues quickly and prioritize immediate attention.',
    metaDescription:
      'Asset Health Monitor — solar ecosystem monitoring UI for urgent component issues at Flutura.',
    images: [
      {
        src: '/work/asset-health-monitor/overview.png',
        alt: 'Asset Health Monitor overview of solar component health',
        caption: 'Overview — health across the solar ecosystem',
      },
      {
        src: '/work/asset-health-monitor/home.png',
        alt: 'Asset Health Monitor home listing urgent issues',
        caption: 'Home — urgent issues needing attention',
      },
      {
        src: '/work/asset-health-monitor/homeDetails.png',
        alt: 'Asset Health Monitor detail for a component issue',
        caption: 'Detail — drilling into a component issue',
      },
    ],
  },
  {
    slug: 'solar-operations-watch',
    title: 'Solar Operations Watch',
    company: 'Flutura',
    year: '2015 — 2017',
    summary:
      'Analytical IoT product UI helping users keep solar systems energy-resilient.',
    featured: false,
    archive: true,
    stack: ['Django', 'jQuery', 'Bootstrap'],
    problem:
      'IoT solar operations needed analytical insight so users could keep systems from running out of energy.',
    approach:
      'Developed an analytical product UI on Django/jQuery/Bootstrap for IoT infrastructure monitoring and energy awareness.',
    outcome:
      'End users gained analytical visibility to help keep solar IoT systems energy-resilient.',
    metaDescription:
      'Solar Operations Watch — analytical IoT product UI for solar energy operations at Flutura.',
    images: [
      {
        src: '/work/solar-operations-watch/overview.png',
        alt: 'Solar Operations Watch overview analytics',
        caption: 'Overview — solar operations at a glance',
      },
      {
        src: '/work/solar-operations-watch/generation.png',
        alt: 'Solar Operations Watch generation analytics view',
        caption: 'Generation — energy produced over time',
      },
      {
        src: '/work/solar-operations-watch/consumption.png',
        alt: 'Solar Operations Watch consumption analytics view',
        caption: 'Consumption — energy use and resilience signals',
      },
    ],
  },
]

export function getCaseStudy(slug: string) {
  const study = caseStudies.find((c) => c.slug === slug)
  if (!study) return undefined
  const gallery = workImages[slug]
  return gallery?.length ? { ...study, images: gallery } : study
}

export function getFeaturedWork() {
  return caseStudies.filter((c) => c.featured)
}

export function getPrimaryWork() {
  return caseStudies.filter((c) => c.featured)
}

export function getArchiveWork() {
  return caseStudies.filter((c) => c.archive || !c.featured)
}

export function getAdjacentCaseStudies(slug: string) {
  const index = caseStudies.findIndex((c) => c.slug === slug)
  if (index < 0) return { prev: undefined, next: undefined }
  return {
    prev: index > 0 ? caseStudies[index - 1] : undefined,
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : undefined,
  }
}

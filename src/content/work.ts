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
  featured: boolean
  stack: string[]
  problem: string
  approach: string
  outcome: string
  metaDescription: string
  images?: CaseStudyImage[]
}

/**
 * Work details: Granicus GDS (current) + projects sourced from https://naveendb.in/ (Vue portfolio).
 * Years are approximate from role tenure on that site + current Granicus role.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'granicus-design-system',
    title: 'Granicus Design System',
    company: 'Granicus Inc.',
    year: '2022 — Present',
    summary:
      'One shared design system for every Granicus product — working React code, Figma libraries, foundations, components, patterns, and guidelines so teams ship consistent, accessible UI.',
    featured: true,
    stack: ['React', 'TypeScript', 'Design tokens', 'Storybook', 'Figma'],
    problem:
      'Multiple Granicus products risked UI drift — duplicated components, inconsistent interaction patterns, and uneven accessibility — making it harder for teams to ship coherent experiences at product speed.',
    approach:
      'Help build and evolve the Granicus Design System (GDS): a shared ecosystem of design tokens and foundations (color, typography, spacing, elevation), reusable React components, documented patterns (forms, filters, progressive disclosure, notifications, and more), and design–dev alignment through Figma libraries, Storybook, and contribution guidelines. Emphasis on accessibility, inclusion, consistency, and predictable interaction across surfaces.',
    outcome:
      'A single system product teams can adopt — foundations, components, and patterns with clear docs — so interfaces stay consistent and accessible while new products can reuse proven building blocks instead of reinventing UI.',
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
        alt: 'GDS components overview with token-driven Gds wrappers around Material UI',
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
        alt: 'Design system patterns overview — notifications, save and validate, filters, progressive disclosure, bulk tagging',
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
      'A Next.js reporting and modelling application for store operators, managers, and corporate users to understand restaurant performance, order inaccuracies, and common areas of mistake.',
    featured: true,
    stack: ['Next.js', 'React.js', 'Chart.js'],
    problem:
      'Store operators, managers, and corporate users needed a clear view of restaurant performance and delivery/order inaccuracies so stores could identify systemic mistakes.',
    approach:
      'Built a Next.js application with reporting and modelling views, using React and Chart.js so stakeholders could explore performance and inaccuracy patterns interactively.',
    outcome:
      'A unified reporting experience that helped stores understand performance drivers and pinpoint common areas of mistake across the operation.',
    metaDescription:
      'Delivery Inaccuracy — Next.js reporting app for restaurant performance and order inaccuracies at Accenture AI.',
  },
  {
    slug: 'mcinsights',
    title: 'MCInsights',
    company: 'Accenture AI',
    year: '2018 — 2022',
    summary:
      'A Vue.js application providing an integrated, unified global view of all data and insights products — reports, apps, and knowledge base.',
    featured: true,
    stack: ['Vue', 'Vuex', 'Vuetify'],
    problem:
      'Data and insights products were fragmented across reports, apps, and a knowledge base, making it hard to get one coherent global view.',
    approach:
      'Delivered an integrated Vue.js shell with Vuex state and Vuetify UI so teams could move between insights products in a single experience.',
    outcome:
      'A unified insights platform that reduced context-switching and gave stakeholders one place to explore reports, apps, and knowledge.',
    metaDescription:
      'MCInsights — Vue.js unified insights platform for reports, apps, and knowledge base at Accenture AI.',
  },
  {
    slug: 'zero-quartile',
    title: 'Zero Quartile',
    company: 'Accenture AI',
    year: '2018 — 2022',
    summary:
      'A React expense-management application to identify expense drivers through expense profiles and ultimately surface cost savings.',
    featured: false,
    stack: ['React', 'Redux', 'D3.js'],
    problem:
      'Organizations needed a way to understand expense drivers in detail and find meaningful cost-saving opportunities.',
    approach:
      'Built a React application with Redux and D3.js visualizations so users could explore expense profiles and identify drivers of spend.',
    outcome:
      'An expense-management product that helped teams profile spend and identify where cost savings were possible.',
    metaDescription:
      'Zero Quartile — React expense-management app with D3 visualizations at Accenture AI.',
  },
  {
    slug: 'compassionate-hr',
    title: 'Compassionate HR',
    company: 'Accenture AI',
    year: '2018 — 2022',
    summary:
      'A jQuery website for the HR team to understand situations where compassion is needed and the responsibilities in those situations.',
    featured: false,
    stack: ['jQuery', 'Relax', 'SCSS'],
    problem:
      'HR teams needed guidance for sensitive situations — when compassion is required and what responsibilities apply.',
    approach:
      'Built a focused jQuery site with SCSS styling so HR could navigate compassion scenarios and related responsibilities clearly.',
    outcome:
      'A practical reference experience that helped HR teams act with clarity in compassionate workplace situations.',
    metaDescription:
      'Compassionate HR — jQuery site helping HR teams navigate compassion-needed situations at Accenture AI.',
  },
  {
    slug: 'iot-asset-management',
    title: 'IoT Asset Management',
    company: 'Kogentix INC.',
    year: '2017 — 2018',
    summary:
      'An Angular asset-management application that tracks and manages assets and various behaviours of those assets.',
    featured: false,
    stack: ['Angular', 'TypeScript', 'Material'],
    problem:
      'Enterprise customers needed to track assets and understand behavioural signals across their IoT estate.',
    approach:
      'Built an Angular + TypeScript application with Material UI for tracking assets and monitoring asset behaviour.',
    outcome:
      'An asset-management product that gave operators visibility into assets and their behavioural patterns.',
    metaDescription:
      'IoT Asset Management — Angular application for tracking assets and behaviours at Kogentix.',
  },
  {
    slug: 'amp',
    title: 'AMP — Automated Machine Learning Platform',
    company: 'Kogentix INC.',
    year: '2017 — 2018',
    summary:
      'Automated Machine Learning Platform (AMP) — helps organizations build AI applications that learn the business and make timely recommendations to improve KPIs.',
    featured: false,
    stack: ['Angular.js', 'Bootstrap', 'SCSS'],
    problem:
      'Organizations wanted AI applications that learn business context and recommend actions to improve KPIs without heavy manual modelling overhead.',
    approach:
      'Contributed to the AMP frontend with Angular.js, Bootstrap, and SCSS so users could work with automated ML workflows and recommendations.',
    outcome:
      'A platform UI that supported building AI applications aimed at timely, KPI-oriented recommendations.',
    metaDescription:
      'AMP — Automated Machine Learning Platform UI built with Angular.js at Kogentix.',
  },
  {
    slug: 'supply-chain-forensics',
    title: 'Supply Chain Forensics',
    company: 'Flutura',
    year: '2015 — 2017',
    summary:
      'A tool to manage all components and finished-goods part numbers across the supply chain.',
    featured: false,
    stack: ['Django', 'jQuery', 'Bootstrap'],
    problem:
      'Teams needed reliable control over component and finished-goods part numbers across the supply chain.',
    approach:
      'Built frontend experiences on a Django stack with jQuery and Bootstrap for managing part numbers and related supply-chain data.',
    outcome:
      'A forensics-oriented tool that helped operators manage components and finished-goods identifiers end to end.',
    metaDescription:
      'Supply Chain Forensics — Django/jQuery tool for managing component and finished-goods part numbers at Flutura.',
  },
  {
    slug: 'asset-health-monitor',
    title: 'Asset Health Monitor',
    company: 'Flutura',
    year: '2015 — 2017',
    summary:
      'An application that provides instant insight into issues needing immediate attention across components in the solar panel ecosystem.',
    featured: false,
    stack: ['Django', 'jQuery', 'Bootstrap'],
    problem:
      'Solar ecosystem operators needed fast visibility into component issues that required immediate attention.',
    approach:
      'Delivered a Django/jQuery/Bootstrap monitoring UI focused on surfacing urgent health issues across the solar panel ecosystem.',
    outcome:
      'Operators could spot critical component issues quickly and prioritize immediate attention.',
    metaDescription:
      'Asset Health Monitor — solar ecosystem monitoring UI for urgent component issues at Flutura.',
  },
  {
    slug: 'solar-operations-watch',
    title: 'Solar Operations Watch',
    company: 'Flutura',
    year: '2015 — 2017',
    summary:
      'An analytical IoT product that helps end users ensure the system will not run out of energy.',
    featured: false,
    stack: ['Django', 'jQuery', 'Bootstrap'],
    problem:
      'IoT solar operations needed analytical insight so users could keep systems from running out of energy.',
    approach:
      'Developed an analytical product UI on Django/jQuery/Bootstrap for IoT infrastructure monitoring and energy awareness.',
    outcome:
      'End users gained analytical visibility to help keep solar IoT systems energy-resilient.',
    metaDescription:
      'Solar Operations Watch — analytical IoT product UI for solar energy operations at Flutura.',
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}

export function getFeaturedWork() {
  return caseStudies.filter((c) => c.featured)
}

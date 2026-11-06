export const site = {
  name: 'Naveen DB',
  title: 'Naveen DB | Senior Frontend Engineer',
  description:
    'Senior frontend engineer building design systems and accessible React product UI. Currently at Granicus Inc.',
  url: 'https://naveendb.in',
  email: 'naveendb92@gmail.com',
  location: 'Bangalore, India',
  github: 'https://github.com/naveendb-fe',
  linkedin: 'https://www.linkedin.com/in/naveendb92',
  medium: 'https://medium.com/@naveendb92',
  cvPath: '/Naveen-DB-CV.pdf',
  ogImage: '/og.jpg',
} as const

export const hero = {
  brand: 'Naveen DB',
  headline: 'Senior Frontend Engineer',
  supporting:
    'I build design systems and product interfaces that stay coherent under density — shared foundations, accessible components, and clear interaction.',
  stack: ['AI', 'React', 'TypeScript', 'Design systems'] as const,
} as const

/** Short focus line used instead of a slogan-heavy Craft grid */
export const focus = {
  eyebrow: 'Focus',
  title: 'Systems that product teams can adopt',
  body: 'Most of my recent work is the Granicus Design System — tokens, React components, patterns, and docs so multi-product UI stays consistent and accessible.',
} as const

/** Role timeline — Granicus current; earlier roles from career history */
export const experience = [
  {
    company: 'Granicus Inc.',
    role: 'Senior Frontend Engineer',
    period: 'Sep 2022 — Present',
    summary:
      'Own and evolve the Granicus Design System with design partners — foundations, React components, patterns, Storybook, and contribution paths used across product surfaces. AI sits in that practice: MCP, shared skills, and the model that fits the job.',
  },
  {
    company: 'Accenture AI',
    role: 'Front-end Engineer',
    period: 'Dec 2018 — Sep 2022',
    summary:
      'Shipped analytics and insights product UI after Kogentix was acquired — Next.js reporting, Vue insights shells, and React expense tooling for enterprise clients.',
  },
  {
    company: 'Kogentix Inc.',
    role: 'UI Engineer',
    period: 'Jun 2017 — Nov 2018',
    summary:
      'Built Angular interfaces for Asset Insights (IoT) and the Automated Machine Learning Platform (AMP), including Rule Engine module work.',
  },
  {
    company: 'Flutura Decision Sciences & Analytics',
    role: 'Programmer / Frontend Developer',
    period: 'Aug 2015 — May 2017',
    summary:
      'Built IoT and analytics UIs for supply-chain and solar operations products on Django/jQuery stacks; worked directly with clients on weekly product discussions.',
  },
] as const

export const education = {
  school: 'Cambridge Institute of Technology, Bangalore',
  degree: 'B.E. Computer Science Engineering',
  period: '2011 — 2015',
} as const

/**
 * About copy — senior narrative; school years demoted to education only.
 */
export const about = {
  lead: 'I care about interfaces that stay coherent when products multiply.',
  body: 'I’m Naveen DB, a senior frontend engineer in Bangalore. Since September 2022 I’ve been at Granicus Inc. working on the Granicus Design System — shared React code, Figma libraries, and guidelines so teams ship consistent, accessible UI without reinventing the basics. Before that I spent years on enterprise analytics and IoT product surfaces at Accenture AI, Kogentix, and Flutura. Sketching pulled me into UI early; the work that stuck is systems thinking with product judgment.',
  now: 'Right now I’m deepest in design-system foundations, component APIs, accessibility, and the glue between design and engineering. Day to day I also work with AI in the org — MCP, shared skills, and a mix of models (Claude, GPT, Gemini, Grok) — so that work moves faster without lowering the bar.',
} as const

export const interests = ['Travelling', 'Music', 'Riding'] as const

export const notes = [
  {
    title: 'Writing clean, predictable test cases in React using Jest and RTL',
    href: 'https://medium.com/@naveendb92/writing-clean-predictable-test-cases-in-react-using-jest-and-rtl-0fcabea4e47d',
    blurb:
      'Naming, Redux-friendly helpers, RTL patterns that scale, and practical tips for Material UI.',
    date: 'May 2025',
    topic: 'React testing',
  },
  {
    title: 'How to install a free SSL certificate on a GoDaddy-hosted website',
    href: 'https://medium.com/@naveendb92/how-to-install-a-free-ssl-certificate-on-your-godaddy-hosted-website-1b47e7454c71',
    blurb:
      'A practical walkthrough for securing a personal site — cert setup, hosting quirks, and trust signals.',
    date: 'May 2024',
    topic: 'Web ops',
  },
] as const

export const testimonials = [
  {
    name: 'Sai Dileep',
    context: 'Same group',
    quote:
      'Naveen quickly turns design into reality and stays creative when time or people are short. His technical depth and willingness to lead with modern tools made a real difference on enterprise platforms.',
  },
  {
    name: 'Zalak Upadhyay',
    context: 'Kogentix & Accenture',
    quote:
      'Naveen is a self-driven UI engineer — strong skills, can-do attitude, and someone the team can count on.',
  },
] as const

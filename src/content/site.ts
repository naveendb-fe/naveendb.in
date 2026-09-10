export const site = {
  name: 'Naveen DB',
  title: 'Naveen DB | Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer at Granicus Inc. — building the Granicus Design System and accessible React product UI.',
  url: 'https://naveendb.in',
  email: 'naveendb92@gmail.com',
  location: 'Bangalore, India',
  github: 'https://github.com/naveendb-fe',
  linkedin: 'https://www.linkedin.com/in/naveendb92',
  cvPath: '/Naveen-DB-CV.pdf',
} as const

export const hero = {
  brand: 'Naveen DB',
  headline: 'Senior Frontend Engineer',
  supporting:
    'At Granicus Inc. since Sep 2022 — building the Granicus Design System so product teams ship consistent, accessible React interfaces.',
  stack: ['React', 'TypeScript', 'Design systems'] as const,
} as const

export const craft = [
  {
    title: 'Design systems',
    body: 'Shared foundations, components, and patterns — tokens, docs, and React libraries that keep multi-product UI coherent.',
  },
  {
    title: 'Accessibility',
    body: 'WCAG-minded components, keyboard paths, and inclusive patterns treated as product requirements, not polish.',
  },
  {
    title: 'Product UI',
    body: 'Complex React surfaces for civic and enterprise workflows — clarity under density, predictable interaction.',
  },
  {
    title: 'Performance',
    body: 'Measuring what matters — load, interaction, and render cost — so large apps stay fast for real users.',
  },
] as const

/** Role timeline — Granicus current; earlier roles aligned with https://naveendb.in/ */
export const experience = [
  {
    company: 'Granicus Inc.',
    role: 'Senior Frontend Engineer',
    period: 'Sep 2022 — Present',
    summary:
      'Building the Granicus Design System (GDS) — a shared React system of foundations, components, patterns, and guidelines so product teams ship consistent, accessible UI across Granicus products.',
  },
  {
    company: 'Accenture AI',
    role: 'Front-end Engineer',
    period: 'Dec 2018 — Sep 2022',
    summary:
      'UI design and development for analytics and insights products after Kogentix was acquired by Accenture — including Next.js reporting, Vue insights platforms, and React expense tooling.',
  },
  {
    company: 'Kogentix INC.',
    role: 'UI Engineer',
    period: 'Jun 2017 — Nov 2018',
    summary:
      'Built Angular asset-management and Automated Machine Learning Platform (AMP) interfaces for enterprise AI customers.',
  },
  {
    company: 'Flutura Decision Sciences & Analytics',
    role: 'Programmer',
    period: 'Aug 2015 — May 2017',
    summary:
      'Early career building IoT and analytics UIs for supply-chain and solar operations products on Django/jQuery stacks.',
  },
] as const

export const education = {
  school: 'Cambridge Institute of Technology (Bangalore)',
  degree: 'B.E. Computer Science Engineering',
  period: '2011 — 2015',
} as const

export const educationEarlier = [
  {
    school: 'Sri Bhagawan Mahaveer Jain College',
    degree: 'Pre University Course',
    period: '2009 — 2011',
  },
  {
    school: 'Sacred Heart Boys High School',
    degree: 'Secondary School Leaving Certificate',
    period: '2006 — 2009',
  },
] as const

/**
 * About copy adapted from https://naveendb.in/ with current role updated to Granicus.
 */
export const about = {
  lead: 'Hi, I’m Naveen DB — senior frontend engineer focused on UI craft, React systems, and durable product interfaces.',
  body: 'Since September 2022 I’ve been a Senior Frontend Engineer at Granicus Inc. in Bangalore, where I work on the Granicus Design System — one shared system of working code, Figma libraries, and guidelines so teams ship interfaces that stay consistent, accessible, and ready for the next product. Born in Sagara, Shimoga and raised in Bangalore; graduated from Cambridge Institute of Technology with a major in Computer Science Engineering. Sketching brought me into UI/UX and front-end coding from the start — over the years I’ve focused on best practices, performance, speed, and responsiveness. After graduating in 2015 I joined Flutura Decision Sciences & Analytics, then moved to AI startup Kogentix INC.; that company was later acquired by Accenture, where I continued building enterprise product UIs before joining Granicus.',
} as const

export const interests = ['Travelling', 'Music', 'Riding'] as const

export const notes = [
  {
    title: 'Writing clean, predictable test cases with Jest + React Testing Library',
    href: 'https://www.linkedin.com/posts/naveendb92_writing-clean-predictable-test-cases-in-activity-7325065381197291520-W8fB',
    blurb: 'Naming, Redux-friendly helpers, RTL patterns that scale, and MUI testing tips.',
  },
] as const

/** Testimonial from https://naveendb.in/ (Sai Dileep); Zalak from LinkedIn recommendations. */
export const testimonials = [
  {
    name: 'Sai Dileep',
    context: 'Worked with Sai in the same group',
    quote:
      'I worked with Naveen for more than a couple of years and he was, quite frankly, a great partner. He was able to very quickly turn design into reality and was always thinking out of the box. There were several times when achieving success was a challenge due to shortages in personnel, equipment, or time. Being creative, Naveen excelled during these times and did so with great spirit and enthusiasm. His technical depth, ability to lead team and pick latest cutting edge technologies has been instrumental for the success. I truly enjoyed working with him and strongly recommend Naveen for building enterprise-level products/platforms.',
  },
  {
    name: 'Zalak Upadhyay',
    context: 'Kogentix & Accenture',
    quote:
      'Naveen is an amazing self-driven professional, with great skills in UI development. His expertise and can-do attitude make him an indispensable part of the team.',
  },
] as const

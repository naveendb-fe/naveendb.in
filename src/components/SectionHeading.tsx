import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  as?: 'h1' | 'h2'
  children?: ReactNode
  align?: 'left' | 'split'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  as = 'h2',
  children,
  align = 'left',
}: SectionHeadingProps) {
  const Title = as

  if (align === 'split') {
    return (
      <div className="grid gap-6 border-b border-rule pb-10 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <Title className="display mt-4 text-balance text-4xl text-ink sm:text-5xl">{title}</Title>
        </div>
        <div className="max-w-xl lg:justify-self-end">
          {description ? (
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>
          ) : null}
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <Title className="display mt-4 text-balance text-4xl text-ink sm:text-5xl">{title}</Title>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>
      ) : null}
      {children}
    </div>
  )
}

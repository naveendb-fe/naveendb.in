import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  as?: 'h1' | 'h2'
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  as = 'h2',
  children,
}: SectionHeadingProps) {
  const Title = as

  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <Title className="mt-3 text-balance text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
        {title}
      </Title>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>
      ) : null}
      {children}
    </div>
  )
}

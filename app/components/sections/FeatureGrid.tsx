'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import { Container } from '../layout/Container'
import { FadeIn } from '../ui'

export type FeatureGridColumns = 2 | 3 | 4

export interface Feature {
  icon: ReactNode
  title: string
  description: string
}

export interface FeatureGridProps extends HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  features: Feature[]
  columns?: FeatureGridColumns
  centered?: boolean
}

const columnStyles: Record<FeatureGridColumns, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

function FeatureItem({
  feature,
  centered,
  delay,
}: {
  feature: Feature
  centered: boolean
  delay: number
}) {
  return (
    <FadeIn delay={delay}>
      <div
        className={[
          'flex flex-col',
          centered && 'items-center text-center',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-green)]/10 text-[var(--brand-green)] text-2xl"
        >
          {feature.icon}
        </div>

        <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
          {feature.title}
        </h3>

        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          {feature.description}
        </p>
      </div>
    </FadeIn>
  )
}

export const FeatureGrid = forwardRef<HTMLElement, FeatureGridProps>(
  (
    {
      title,
      subtitle,
      features,
      columns = 3,
      centered = false,
      className = '',
      ...props
    },
    ref
  ) => (
    <section
      ref={ref}
      aria-labelledby={title ? 'feature-grid-heading' : undefined}
      className={[
        'py-16 md:py-24',
        'bg-[var(--background)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <Container size="xl">
        {(title || subtitle) && (
          <FadeIn>
            <div
              className={[
                'mb-12',
                centered && 'text-center',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {subtitle && (
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[var(--brand-green)]">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 id="feature-grid-heading" className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                  {title}
                </h2>
              )}
            </div>
          </FadeIn>
        )}

        <div
          className={['grid gap-8 md:gap-12', columnStyles[columns]]
            .filter(Boolean)
            .join(' ')}
        >
          {features.map((feature, index) => (
            <FeatureItem
              key={feature.title}
              feature={feature}
              centered={centered}
              delay={index * 80}
            />
          ))}
        </div>
      </Container>
    </section>
  )
)

FeatureGrid.displayName = 'FeatureGrid'

export default FeatureGrid

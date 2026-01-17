'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'

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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const columnStyles: Record<FeatureGridColumns, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

function FeatureItem({
  feature,
  centered,
}: {
  feature: Feature
  centered: boolean
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className={[
        'flex flex-col',
        centered && 'items-center text-center',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Icon */}
      <div
        className={[
          'flex h-12 w-12 items-center justify-center rounded-xl',
          'bg-[var(--color-primary)]/10 text-[var(--color-primary)]',
          'text-2xl',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
        {feature.description}
      </p>
    </motion.div>
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
      className={[
        'py-16 md:py-24',
        'bg-[var(--color-bg-primary)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <Container size="xl">
        {(title || subtitle) && (
          <motion.div
            className={[
              'mb-12',
              centered && 'text-center',
            ]
              .filter(Boolean)
              .join(' ')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            {subtitle && (
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[var(--color-primary)]">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}

        <motion.div
          className={['grid gap-8 md:gap-12', columnStyles[columns]]
            .filter(Boolean)
            .join(' ')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {features.map((feature) => (
            <FeatureItem
              key={feature.title}
              feature={feature}
              centered={centered}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
)

FeatureGrid.displayName = 'FeatureGrid'

export default FeatureGrid

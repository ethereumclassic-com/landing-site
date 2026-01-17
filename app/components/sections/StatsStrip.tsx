'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'

export type StatsStripVariant = 'default' | 'compact'
export type StatChangeType = 'positive' | 'negative' | 'neutral'

export interface Stat {
  label: string
  value: string
  change?: string
  changeType?: StatChangeType
  icon?: ReactNode
}

export interface StatsStripProps extends HTMLAttributes<HTMLElement> {
  stats: Stat[]
  variant?: StatsStripVariant
}

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const changeTypeStyles: Record<StatChangeType, string> = {
  positive: 'text-[var(--color-success)]',
  negative: 'text-[var(--color-error)]',
  neutral: 'text-[var(--color-text-secondary)]',
}

function StatItem({
  stat,
  variant,
}: {
  stat: Stat
  variant: StatsStripVariant
}) {
  const isCompact = variant === 'compact'

  return (
    <motion.div
      variants={fadeInUp}
      className={[
        'flex flex-col items-center text-center',
        isCompact ? 'px-4 py-2' : 'px-6 py-4',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {stat.icon && (
        <div
          className={[
            'mb-2 text-[var(--color-primary)]',
            isCompact ? 'text-lg' : 'text-2xl',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {stat.icon}
        </div>
      )}

      <div
        className={[
          'font-bold text-[var(--color-text-primary)]',
          isCompact ? 'text-lg sm:text-xl' : 'text-2xl sm:text-3xl',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {stat.value}
      </div>

      <div
        className={[
          'text-[var(--color-text-secondary)]',
          isCompact ? 'text-xs mt-0.5' : 'text-sm mt-1',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {stat.label}
      </div>

      {stat.change && (
        <div
          className={[
            'mt-1 text-xs font-medium',
            changeTypeStyles[stat.changeType || 'neutral'],
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {stat.changeType === 'positive' && '+'}
          {stat.change}
        </div>
      )}
    </motion.div>
  )
}

export const StatsStrip = forwardRef<HTMLElement, StatsStripProps>(
  ({ stats, variant = 'default', className = '', ...props }, ref) => {
    const isCompact = variant === 'compact'

    return (
      <section
        ref={ref}
        className={[
          'border-y border-[var(--border)]',
          'bg-[var(--panel)]',
          isCompact ? 'py-4' : 'py-6 md:py-8',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        <Container size="xl">
          <motion.div
            className={[
              'grid',
              stats.length === 2 && 'grid-cols-2',
              stats.length === 3 && 'grid-cols-3',
              stats.length === 4 && 'grid-cols-2 sm:grid-cols-4',
              stats.length === 5 && 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
              stats.length >= 6 && 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
              'divide-x divide-[var(--border)]',
            ]
              .filter(Boolean)
              .join(' ')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} variant={variant} />
            ))}
          </motion.div>
        </Container>
      </section>
    )
  }
)

StatsStrip.displayName = 'StatsStrip'

export default StatsStrip

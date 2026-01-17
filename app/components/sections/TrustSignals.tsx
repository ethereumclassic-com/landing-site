'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'

export interface TrustSignal {
  icon: ReactNode
  title: string
  description: string
}

export interface TrustSignalsProps extends HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  signals: TrustSignal[]
  variant?: 'horizontal' | 'grid'
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

function TrustSignalItem({
  signal,
  horizontal,
}: {
  signal: TrustSignal
  horizontal: boolean
}) {
  if (horizontal) {
    return (
      <motion.div
        variants={fadeInUp}
        className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
      >
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
          {signal.icon}
        </div>
        <div>
          <h3 className="font-semibold text-[var(--color-text-primary)]">
            {signal.title}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {signal.description}
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col items-center rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 text-center"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-2xl">
        {signal.icon}
      </div>
      <h3 className="mt-4 font-semibold text-[var(--color-text-primary)]">
        {signal.title}
      </h3>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
        {signal.description}
      </p>
    </motion.div>
  )
}

export const TrustSignals = forwardRef<HTMLElement, TrustSignalsProps>(
  (
    {
      title,
      subtitle,
      signals,
      variant = 'grid',
      className = '',
      ...props
    },
    ref
  ) => {
    const isHorizontal = variant === 'horizontal'
    const signalCount = signals.length

    const gridClassName = isHorizontal
      ? [
          'grid gap-4',
          signalCount <= 2 && 'grid-cols-1 sm:grid-cols-2',
          signalCount === 3 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
          signalCount >= 4 && 'grid-cols-1 sm:grid-cols-2',
        ]
          .filter(Boolean)
          .join(' ')
      : [
          'grid gap-6',
          signalCount <= 2 && 'grid-cols-1 sm:grid-cols-2',
          signalCount === 3 && 'grid-cols-1 sm:grid-cols-3',
          signalCount >= 4 && 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4',
        ]
          .filter(Boolean)
          .join(' ')

    return (
      <section
        ref={ref}
        className={[
          'py-12 md:py-16',
          'bg-[var(--color-bg-secondary)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        <Container size="xl">
          {(title || subtitle) && (
            <motion.div
              className="mb-8 text-center"
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
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
                  {title}
                </h2>
              )}
            </motion.div>
          )}

          <motion.div
            className={gridClassName}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {signals.map((signal) => (
              <TrustSignalItem
                key={signal.title}
                signal={signal}
                horizontal={isHorizontal}
              />
            ))}
          </motion.div>
        </Container>
      </section>
    )
  }
)

TrustSignals.displayName = 'TrustSignals'

export default TrustSignals

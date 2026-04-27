'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import { Container } from '../layout/Container'
import { FadeIn } from '../ui'

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

function TrustSignalItem({
  signal,
  horizontal,
  delay,
}: {
  signal: TrustSignal
  horizontal: boolean
  delay: number
}) {
  if (horizontal) {
    return (
      <FadeIn delay={delay}>
        <div className="flex items-center gap-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--brand-green)]/10 text-[var(--brand-green)]">
            {signal.icon}
          </div>
          <div>
            <h3 className="font-semibold text-[var(--text-primary)]">
              {signal.title}
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              {signal.description}
            </p>
          </div>
        </div>
      </FadeIn>
    )
  }

  return (
    <FadeIn delay={delay}>
      <div className="flex flex-col items-center rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-green)]/10 text-[var(--brand-green)] text-2xl">
          {signal.icon}
        </div>
        <h3 className="mt-4 font-semibold text-[var(--text-primary)]">
          {signal.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          {signal.description}
        </p>
      </div>
    </FadeIn>
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
        aria-labelledby={title ? 'trust-signals-heading' : undefined}
        className={[
          'py-12 md:py-16',
          'bg-[var(--bg-surface)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        <Container size="xl">
          {(title || subtitle) && (
            <FadeIn>
              <div className="mb-8 text-center">
                {subtitle && (
                  <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[var(--brand-green)]">
                    {subtitle}
                  </p>
                )}
                {title && (
                  <h2 id="trust-signals-heading" className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                    {title}
                  </h2>
                )}
              </div>
            </FadeIn>
          )}

          <div className={gridClassName}>
            {signals.map((signal, index) => (
              <TrustSignalItem
                key={signal.title}
                signal={signal}
                horizontal={isHorizontal}
                delay={index * 80}
              />
            ))}
          </div>
        </Container>
      </section>
    )
  }
)

TrustSignals.displayName = 'TrustSignals'

export default TrustSignals

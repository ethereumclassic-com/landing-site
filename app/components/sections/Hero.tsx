'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { FadeIn } from '../ui'

export type HeroVariant = 'home' | 'page' | 'minimal'
export type HeroBackground = 'gradient' | 'pattern' | 'image'

export interface HeroStat {
  label: string
  value: string
}

export interface HeroCTA {
  label: string
  href: string
}

export interface HeroProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  variant?: HeroVariant
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: HeroCTA
  secondaryCTA?: HeroCTA
  stats?: HeroStat[]
  backgroundVariant?: HeroBackground
  image?: string
  children?: ReactNode
}

function HeroStats({ stats }: { stats: HeroStat[] }) {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
      {stats.map((stat, i) => (
        <FadeIn key={stat.label} delay={i * 80} className="h-full">
          <div className="flex h-full flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 text-center">
            <div className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs text-[var(--text-secondary)] sm:text-sm">
              {stat.label}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}

function HomeHero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
  className = '',
  ...props
}: HeroProps) {
  return (
    <section
      className={[
        'hero-gradient-light noise-overlay relative overflow-hidden',
        'pt-24 pb-16 md:pt-32 md:pb-24',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <Container size="xl" className="relative">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            {subtitle && (
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--brand-green)]">
                {subtitle}
              </p>
            )}

            <h1 className="text-4xl font-bold leading-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>

            {description && (
              <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--text-secondary)] sm:text-xl">
                {description}
              </p>
            )}

            {(primaryCTA || secondaryCTA) && (
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {primaryCTA && (
                  <Button variant="primary" size="lg" href={primaryCTA.href}>
                    {primaryCTA.label}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button variant="outline" size="lg" href={secondaryCTA.href}>
                    {secondaryCTA.label}
                  </Button>
                )}
              </div>
            )}

            {stats && stats.length > 0 && <HeroStats stats={stats} />}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

function PageHero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  className = '',
  children,
  ...props
}: HeroProps) {
  return (
    <section
      className={[
        'hero-gradient-light noise-overlay relative overflow-hidden',
        'pt-20 pb-12 md:pt-24 md:pb-16',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
      {...props}
    >
      {image && (
        <div className="absolute inset-0 bg-[var(--background)]/80" />
      )}

      <Container size="xl" className="relative">
        <FadeIn>
          <div className="max-w-3xl">
            {subtitle && (
              <p className="mb-2 text-sm font-medium text-[var(--brand-green)]">
                {subtitle}
              </p>
            )}

            <h1 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl md:text-5xl">
              {title}
            </h1>

            {description && (
              <p className="mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
                {description}
              </p>
            )}

            {(primaryCTA || secondaryCTA) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {primaryCTA && (
                  <Button variant="primary" size="md" href={primaryCTA.href}>
                    {primaryCTA.label}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button variant="outline" size="md" href={secondaryCTA.href}>
                    {secondaryCTA.label}
                  </Button>
                )}
              </div>
            )}

            {children}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

function MinimalHero({
  title,
  subtitle,
  description,
  className = '',
  children,
  ...props
}: HeroProps) {
  return (
    <section
      className={[
        'bg-[var(--background)]',
        'pt-12 pb-8 md:pt-16 md:pb-12',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <Container size="xl">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="mb-2 text-sm font-medium text-[var(--brand-green)]">
              {subtitle}
            </p>
          )}

          <h1 className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            {title}
          </h1>

          {description && (
            <p className="mt-3 text-base text-[var(--text-secondary)] sm:text-lg">
              {description}
            </p>
          )}

          {children}
        </div>
      </Container>
    </section>
  )
}

export const Hero = forwardRef<HTMLElement, HeroProps>(
  ({ variant = 'home', ...props }) => {
    switch (variant) {
      case 'home':
        return <HomeHero {...props} />
      case 'page':
        return <PageHero {...props} />
      case 'minimal':
        return <MinimalHero {...props} />
      default:
        return <HomeHero {...props} />
    }
  }
)

Hero.displayName = 'Hero'

export default Hero

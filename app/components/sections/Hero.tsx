'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'

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

const backgroundStyles: Record<HeroBackground, string> = {
  gradient:
    'bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]',
  pattern: 'bg-[var(--color-bg-primary)]',
  image: 'bg-[var(--color-bg-primary)] bg-cover bg-center bg-no-repeat',
}

function HeroStats({ stats }: { stats: HeroStat[] }) {
  return (
    <motion.div
      className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={fadeInUp}
          className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-center"
        >
          <div className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
            {stat.value}
          </div>
          <div className="mt-1 text-xs text-[var(--color-text-secondary)] sm:text-sm">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

function HomeHero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
  backgroundVariant = 'gradient',
  className = '',
  ...props
}: HeroProps) {
  return (
    <section
      className={[
        'relative overflow-hidden',
        'pt-24 pb-16 md:pt-32 md:pb-24',
        backgroundStyles[backgroundVariant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />

      {/* Gradient orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[var(--color-primary)] opacity-10 blur-[128px]" />
      <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-[var(--color-accent-blue)] opacity-10 blur-[96px]" />

      <Container size="xl" className="relative">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {subtitle && (
            <motion.p
              variants={fadeInUp}
              className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--color-primary)]"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold leading-tight text-[var(--color-text-primary)] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)] sm:text-xl"
            >
              {description}
            </motion.p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
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
            </motion.div>
          )}

          {stats && stats.length > 0 && <HeroStats stats={stats} />}
        </motion.div>
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
  backgroundVariant = 'gradient',
  image,
  className = '',
  children,
  ...props
}: HeroProps) {
  return (
    <section
      className={[
        'relative overflow-hidden',
        'pt-20 pb-12 md:pt-24 md:pb-16',
        backgroundStyles[backgroundVariant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
      {...props}
    >
      {/* Overlay for image background */}
      {image && (
        <div className="absolute inset-0 bg-[var(--color-bg-primary)]/80" />
      )}

      <Container size="xl" className="relative">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {subtitle && (
            <motion.p
              variants={fadeInUp}
              className="mb-2 text-sm font-medium text-[var(--color-primary)]"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            variants={fadeInUp}
            className="text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl md:text-5xl"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={fadeInUp}
              className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
            >
              {description}
            </motion.p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              variants={fadeInUp}
              className="mt-6 flex flex-wrap gap-3"
            >
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
            </motion.div>
          )}

          {children}
        </motion.div>
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
        'bg-[var(--color-bg-primary)]',
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
            <p className="mb-2 text-sm font-medium text-[var(--color-primary)]">
              {subtitle}
            </p>
          )}

          <h1 className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl md:text-4xl">
            {title}
          </h1>

          {description && (
            <p className="mt-3 text-base text-[var(--color-text-secondary)] sm:text-lg">
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
    // Note: ref forwarding not implemented as each variant renders differently
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

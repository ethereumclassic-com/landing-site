'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import Image from 'next/image'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { FadeIn } from '../ui'

export type CTABannerVariant = 'primary' | 'secondary' | 'gradient'

export interface CTACTA {
  label: string
  href: string
}

export interface CTABannerProps extends HTMLAttributes<HTMLElement> {
  variant?: CTABannerVariant
  title: string
  description?: string
  primaryCTA: CTACTA
  secondaryCTA?: CTACTA
  image?: string
}

const variantStyles: Record<CTABannerVariant, string> = {
  primary: 'bg-[var(--brand-green)]',
  secondary: 'bg-[var(--bg-elevated)] border border-[var(--border-default)]',
  gradient: 'bg-gradient-to-r from-[var(--brand-green)] to-emerald-600',
}

const textStyles: Record<CTABannerVariant, { title: string; description: string }> = {
  primary: {
    title: 'text-[var(--background)]',
    description: 'text-[var(--background)]/80',
  },
  secondary: {
    title: 'text-[var(--text-primary)]',
    description: 'text-[var(--text-secondary)]',
  },
  gradient: {
    title: 'text-[var(--background)]',
    description: 'text-[var(--background)]/80',
  },
}

const buttonVariant: Record<CTABannerVariant, { primary: 'primary' | 'secondary' | 'outline'; secondary: 'primary' | 'secondary' | 'outline' | 'ghost' }> = {
  primary: {
    primary: 'secondary',
    secondary: 'outline',
  },
  secondary: {
    primary: 'primary',
    secondary: 'outline',
  },
  gradient: {
    primary: 'secondary',
    secondary: 'ghost',
  },
}

export const CTABanner = forwardRef<HTMLElement, CTABannerProps>(
  (
    {
      variant = 'primary',
      title,
      description,
      primaryCTA,
      secondaryCTA,
      image,
      className = '',
      ...props
    },
    ref
  ) => {
    const hasImage = !!image
    const styles = textStyles[variant]
    const buttons = buttonVariant[variant]

    return (
      <section
        ref={ref}
        aria-labelledby="cta-banner-heading"
        className={['py-16 md:py-24', className].filter(Boolean).join(' ')}
        {...props}
      >
        <Container size="xl">
          <FadeIn>
            <div
              className={[
                'relative overflow-hidden rounded-3xl',
                variantStyles[variant],
                hasImage ? 'lg:grid lg:grid-cols-2' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {/* Content */}
              <div className={[
                'relative z-10 p-8 md:p-12',
                hasImage ? 'lg:p-16' : 'text-center',
              ].filter(Boolean).join(' ')}>
                <h2
                  id="cta-banner-heading"
                  className={[
                    'text-2xl font-bold md:text-3xl lg:text-4xl',
                    styles.title,
                    !hasImage && 'mx-auto max-w-2xl',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {title}
                </h2>

                {description && (
                  <p
                    className={[
                      'mt-4 text-base md:text-lg',
                      styles.description,
                      !hasImage && 'mx-auto max-w-xl',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {description}
                  </p>
                )}

                <div
                  className={[
                    'mt-8 flex flex-wrap gap-4',
                    !hasImage && 'justify-center',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <Button
                    variant={buttons.primary}
                    size="lg"
                    href={primaryCTA.href}
                  >
                    {primaryCTA.label}
                  </Button>
                  {secondaryCTA && (
                    <Button
                      variant={buttons.secondary}
                      size="lg"
                      href={secondaryCTA.href}
                      className={variant !== 'secondary' ? 'text-[var(--background)] hover:text-[var(--background)]/80' : ''}
                    >
                      {secondaryCTA.label}
                    </Button>
                  )}
                </div>
              </div>

              {/* Image */}
              {hasImage && (
                <div className="relative hidden lg:block">
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-green)] to-transparent opacity-30" />
                </div>
              )}

              {/* Decorative orbs (intentional white overlays on colored bg) */}
              {!hasImage && (
                <>
                  <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white opacity-5 blur-3xl" />
                  <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white opacity-5 blur-3xl" />
                </>
              )}
            </div>
          </FadeIn>
        </Container>
      </section>
    )
  }
)

CTABanner.displayName = 'CTABanner'

export default CTABanner

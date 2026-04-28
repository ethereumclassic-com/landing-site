'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import Link from 'next/link'
import { Container } from '../layout/Container'
import { Badge } from '../ui/Badge'
import { FadeIn } from '../ui'

export type ProductCardsColumns = 2 | 3 | 4

export interface ProductCard {
  icon: string
  title: string
  description: string
  href: string
  cta: string
  badge?: string
}

export interface ProductCardsProps extends HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  cards: ProductCard[]
  columns?: ProductCardsColumns
}

const columnStyles: Record<ProductCardsColumns, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

function ProductCardItem({ card, delay }: { card: ProductCard; delay: number }) {
  const isExternal = /^https?:\/\//.test(card.href)
  const CardWrapper = isExternal ? 'a' : Link

  return (
    <FadeIn delay={delay} className="h-full">
      <CardWrapper
        href={card.href}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        className="group flex h-full flex-col rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface)]"
      >
        {/* Header with Icon and Badge */}
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-green)]/10 text-2xl">
            {card.icon}
          </div>
          {card.badge && (
            <Badge variant="outline" size="sm">
              {card.badge}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
          {card.title}
        </h3>

        {/* Description */}
        <p className="mt-2 flex-grow text-sm text-[var(--text-secondary)]">
          {card.description}
        </p>

        {/* CTA */}
        <div className="mt-6 flex items-center text-sm font-medium text-[var(--brand-green)] transition-transform group-hover:translate-x-1">
          {card.cta}
          <svg aria-hidden="true"
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </CardWrapper>
    </FadeIn>
  )
}

export const ProductCards = forwardRef<HTMLElement, ProductCardsProps>(
  (
    { title, subtitle, cards, columns = 4, className = '', ...props },
    ref
  ) => (
    <section
      ref={ref}
      aria-labelledby={title ? 'product-cards-heading' : undefined}
      className={['py-16 md:py-24', className].filter(Boolean).join(' ')}
      {...props}
    >
      <Container size="xl">
        {(title || subtitle) && (
          <FadeIn>
            <div className="mb-12 text-center">
              {subtitle && (
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[var(--brand-green)]">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 id="product-cards-heading" className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                  {title}
                </h2>
              )}
            </div>
          </FadeIn>
        )}

        <div
          className={['grid gap-6', columnStyles[columns]]
            .filter(Boolean)
            .join(' ')}
        >
          {cards.map((card, index) => (
            <ProductCardItem key={card.title} card={card} delay={index * 80} />
          ))}
        </div>
      </Container>
    </section>
  )
)

ProductCards.displayName = 'ProductCards'

export default ProductCards

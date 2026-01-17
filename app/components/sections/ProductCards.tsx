'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '../layout/Container'
import { Badge } from '../ui/Badge'

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

const columnStyles: Record<ProductCardsColumns, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

function ProductCardItem({ card }: { card: ProductCard }) {
  const isExternal = /^https?:\/\//.test(card.href)
  const CardWrapper = isExternal ? 'a' : Link

  return (
    <motion.div variants={fadeInUp}>
      <CardWrapper
        href={card.href}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all duration-[var(--transition-normal)] hover:border-[var(--border-strong)] hover:bg-[var(--panel-strong)]"
      >
        {/* Header with Icon and Badge */}
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-2xl">
            {card.icon}
          </div>
          {card.badge && (
            <Badge variant="outline" size="sm">
              {card.badge}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">
          {card.title}
        </h3>

        {/* Description */}
        <p className="mt-2 flex-grow text-sm text-[var(--color-text-secondary)]">
          {card.description}
        </p>

        {/* CTA */}
        <div className="mt-6 flex items-center text-sm font-medium text-[var(--color-primary)] transition-transform group-hover:translate-x-1">
          {card.cta}
          <svg
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
    </motion.div>
  )
}

export const ProductCards = forwardRef<HTMLElement, ProductCardsProps>(
  (
    { title, subtitle, cards, columns = 4, className = '', ...props },
    ref
  ) => (
    <section
      ref={ref}
      className={['py-16 md:py-24', className].filter(Boolean).join(' ')}
      {...props}
    >
      <Container size="xl">
        {(title || subtitle) && (
          <motion.div
            className="mb-12 text-center"
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
          className={['grid gap-6', columnStyles[columns]]
            .filter(Boolean)
            .join(' ')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {cards.map((card) => (
            <ProductCardItem key={card.title} card={card} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
)

ProductCards.displayName = 'ProductCards'

export default ProductCards

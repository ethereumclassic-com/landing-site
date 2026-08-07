'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '../data/articles'
import { CategoryIcon } from './CategoryIcon'

interface NewsCardProps {
  article: Article
  index: number
  variant?: 'default' | 'featured' | 'compact'
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  }),
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function NewsCard({ article, index, variant = 'default' }: NewsCardProps) {
  const isFeatured = variant === 'featured' || article.featured
  const isCompact = variant === 'compact'
  const padding = isCompact ? 'p-4' : 'p-6'

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      variants={fadeInUp}
    >
      <Link
        href={`/news/${article.slug}`}
        className={`group relative block h-full rounded-2xl border transition-all ${padding} ${
          isFeatured
            ? 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10'
            : 'border-[var(--border)] bg-[var(--panel)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--panel)]'
        }`}
      >
        {/* Left accent bar for featured */}
        {variant === 'featured' && (
          <div className="absolute inset-y-0 left-0 w-0.5 rounded-l-2xl bg-[var(--color-primary)]/60" aria-hidden />
        )}

        {/* Optional image (only renders when article.image is set) */}
        {article.image && (
          <div className={`relative -mx-6 -mt-6 mb-4 h-36 overflow-hidden rounded-t-2xl ${isCompact ? '-mx-4 -mt-4' : ''}`}>
            <Image
              src={article.image}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
        )}

        {/* Category, Featured Badge & Date */}
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
            <CategoryIcon category={article.category} size="sm" />
            <span>{article.category}</span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {article.featured && (
              <span className="rounded-full bg-[var(--color-primary)]/20 px-2 py-0.5 text-xs font-medium text-[var(--color-primary)]">
                Featured
              </span>
            )}
            <time className="text-xs text-[var(--color-text-muted)]">{formatDate(article.date)}</time>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[var(--text-primary)] transition group-hover:text-[var(--color-primary)]">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-3 line-clamp-2 text-sm text-[var(--color-text-secondary)]">{article.excerpt}</p>

        {/* Tags — suppressed in compact variant */}
        {!isCompact && article.tags && article.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
              >
                {tag}
              </span>
            ))}
            {article.tags.length > 3 && (
              <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                +{article.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Author — only shown when explicitly using the featured variant */}
        {!isCompact && article.author && variant === 'featured' && (
          <div className="mt-4 border-t border-[var(--border)] pt-4">
            <div className="text-xs text-[var(--color-text-muted)]">
              By <span className="text-[var(--color-text-secondary)]">{article.author}</span>
            </div>
          </div>
        )}
      </Link>
    </motion.div>
  )
}

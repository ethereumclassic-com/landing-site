'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Article, ArticleCategory } from '../data/articles'

interface NewsCardProps {
  article: Article
  index: number
  variant?: 'default' | 'featured'
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

function CategoryIcon({ category }: { category: ArticleCategory }) {
  switch (category) {
    case 'Updates':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      )
    case 'Security':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    case 'Ecosystem':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      )
    case 'Community':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
  }
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
        className={`group relative block h-full rounded-2xl border p-6 transition-all ${
          isFeatured
            ? 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10'
            : 'border-[var(--border)] bg-[var(--panel)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--panel)]'
        }`}
      >
        {/* Featured Badge */}
        {article.featured && (
          <div className="absolute right-4 top-4 rounded-full bg-[var(--color-primary)]/20 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
            Featured
          </div>
        )}

        {/* Category & Date */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
            <CategoryIcon category={article.category} />
            <span>{article.category}</span>
          </div>
          <time className="text-xs text-[var(--color-text-muted)]">{formatDate(article.date)}</time>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white transition group-hover:text-[var(--color-primary)]">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-3 line-clamp-2 text-sm text-[var(--color-text-secondary)]">{article.excerpt}</p>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
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

        {/* Author (for featured cards) */}
        {article.author && isFeatured && (
          <div className="mt-4 border-t border-[var(--border)] pt-4">
            <div className="text-xs text-[var(--color-text-muted)]">
              By <span className="text-[var(--color-text-secondary)]">{article.author}</span>
            </div>
          </div>
        )}

        {/* Hover arrow indicator */}
        <div className="absolute bottom-6 right-6 opacity-0 transition-opacity group-hover:opacity-100">
          <svg
            className="h-5 w-5 text-[var(--color-primary)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </Link>
    </motion.div>
  )
}

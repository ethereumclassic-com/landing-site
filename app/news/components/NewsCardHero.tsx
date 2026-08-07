'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '../data/articles'
import { CategoryIcon } from './CategoryIcon'

interface NewsCardHeroProps {
  article: Article
  index?: number
}

const categoryPlaceholders: Record<string, string> = {
  Updates:     '/news/images/placeholder-updates.svg',
  Security:    '/news/images/placeholder-security.svg',
  Ecosystem:   '/news/images/placeholder-ecosystem.svg',
  Community:   '/news/images/placeholder-community.svg',
  Development: '/news/images/placeholder-development.svg',
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
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function NewsCardHero({ article, index = 0 }: NewsCardHeroProps) {
  const imageSrc = article.image ?? categoryPlaceholders[article.category] ?? '/news/images/placeholder-updates.svg'
  const isPlaceholder = !article.image

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      variants={fadeInUp}
    >
      <Link
        href={`/news/${article.slug}`}
        className="group flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--panel)] transition-all hover:border-[var(--color-primary)]/40 hover:shadow-lg hover:shadow-[var(--color-primary)]/10"
      >
        {/* Image — real photo or category SVG placeholder */}
        <div className="relative h-52 w-full overflow-hidden border-b border-[var(--border)]">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
            unoptimized={isPlaceholder}
          />
        </div>

        {/* Text content */}
        <div className="flex flex-1 flex-col p-5">
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-text-muted)]">
            {article.featured && (
              <span className="rounded-full bg-[var(--color-primary)]/15 px-2 py-0.5 font-medium text-[var(--color-primary)]">
                Featured
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 font-medium uppercase tracking-wide">
              <CategoryIcon category={article.category} size="sm" />
              {article.category}
            </span>
            {article.readTime && (
              <>
                <span aria-hidden>·</span>
                <span>{article.readTime} min read</span>
              </>
            )}
          </div>

          {/* Title */}
          <h2 className="mt-3 line-clamp-3 text-2xl font-bold leading-snug tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--color-primary)]">
            {article.title}
          </h2>

          {/* Excerpt */}
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {article.excerpt}
          </p>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
            <span className="text-xs text-[var(--color-text-muted)]">
              {article.author && <span>By {article.author} · </span>}
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </span>
            <span className="flex items-center gap-1 text-xs font-medium text-[var(--color-primary)]">
              Read story
              <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

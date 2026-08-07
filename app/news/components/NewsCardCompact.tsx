'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '../data/articles'
import { CategoryIcon } from './CategoryIcon'

interface NewsCardCompactProps {
  article: Article
  index: number
  showNumber?: boolean
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

function formatDateShort(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  })
}

export default function NewsCardCompact({ article, index, showNumber = false }: NewsCardCompactProps) {
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
        className="group flex items-start gap-3 rounded-lg border border-transparent px-3 py-3 transition-all hover:border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/5"
      >
        {/* Left: number, thumbnail, or icon */}
        {article.image ? (
          <div className="relative mt-0.5 h-16 w-16 shrink-0 overflow-hidden rounded-md">
            <Image
              src={article.image}
              alt=""
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        ) : showNumber ? (
          <span className="mt-0.5 min-w-[1.75rem] shrink-0 text-right font-mono text-xs font-medium tabular-nums text-[var(--color-text-muted)]">
            {String(index + 1).padStart(2, '0')}
          </span>
        ) : (
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--color-primary)]/8 text-[var(--color-primary)]">
            <CategoryIcon category={article.category} size="sm" />
          </div>
        )}

        {/* Center: meta + title */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
            <span className="font-medium uppercase tracking-wide">{article.category}</span>
            <span aria-hidden>·</span>
            <time dateTime={article.date}>{formatDateShort(article.date)}</time>
            {article.readTime && (
              <>
                <span aria-hidden>·</span>
                <span>{article.readTime} min</span>
              </>
            )}
          </div>
          <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[var(--text-primary)] transition-colors group-hover:text-[var(--color-primary)]">
            {article.title}
          </h3>
        </div>

        {/* Right: hover arrow */}
        <svg
          aria-hidden="true"
          className="mt-1 h-4 w-4 shrink-0 text-[var(--color-text-muted)] opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-[var(--color-primary)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </Link>
    </motion.div>
  )
}

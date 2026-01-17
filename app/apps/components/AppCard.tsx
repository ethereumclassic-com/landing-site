'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { App } from '../data/apps'

interface AppCardProps {
  app: App
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

function CategoryIcon({ category }: { category: App['category'] }) {
  switch (category) {
    case 'DeFi':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'Infrastructure':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
        </svg>
      )
    case 'Governance':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      )
    case 'Tools':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      )
  }
}

export default function AppCard({ app, index, variant = 'default' }: AppCardProps) {
  const isFeatured = variant === 'featured' || app.featured

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      variants={fadeInUp}
    >
      <Link
        href={`/apps/${app.slug}`}
        className={`group relative block h-full rounded-2xl border p-6 transition-all ${
          isFeatured
            ? 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10'
            : 'border-[var(--border)] bg-[var(--panel)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--panel)]'
        }`}
      >
        {/* Featured Badge */}
        {app.featured && (
          <div className="absolute right-4 top-4 rounded-full bg-[var(--color-primary)]/20 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
            Featured
          </div>
        )}

        {/* App Icon */}
        <div className="mb-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold transition-transform group-hover:scale-110 ${
            isFeatured
              ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'
              : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
          }`}>
            {app.name[0]}
          </div>
        </div>

        {/* App Name */}
        <h3 className="text-lg font-semibold text-white transition group-hover:text-[var(--color-primary)]">
          {app.name}
        </h3>

        {/* Category & Type */}
        <div className="mt-2 flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
          <CategoryIcon category={app.category} />
          <span>{app.category}</span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm text-[var(--color-text-secondary)]">
          {app.description}
        </p>

        {/* Tags */}
        {app.tags && app.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {app.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
              >
                {tag}
              </span>
            ))}
            {app.tags.length > 3 && (
              <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                +{app.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Stats (for featured cards) */}
        {app.stats && isFeatured && (
          <div className="mt-4 flex gap-4 border-t border-[var(--border)] pt-4">
            {app.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-sm font-semibold text-[var(--color-primary)]">{stat.value}</div>
                <div className="text-xs text-[var(--color-text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Hover arrow indicator */}
        <div className="absolute bottom-6 right-6 opacity-0 transition-opacity group-hover:opacity-100">
          <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </Link>
    </motion.div>
  )
}

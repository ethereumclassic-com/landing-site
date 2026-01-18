'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  walletReviews,
  getVerdictLabel,
  getVerdictColor,
  formatRating,
  getRatingLabel,
  type WalletReview,
} from '../data/reviews'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

type SortOption = 'rating' | 'name' | 'verdict'
type VerdictFilter = 'all' | WalletReview['verdict']

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  }

  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          className={`${sizeClasses[size]} text-amber-400`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg
          className={`${sizeClasses[size]} text-amber-400`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGrad)"
            stroke="currentColor"
            strokeWidth="1"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          className={`${sizeClasses[size]} text-[var(--color-text-muted)]/30`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: WalletReview }) {
  const verdictColor = getVerdictColor(review.verdict)

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel)] transition-all hover:border-[var(--color-primary)]/30 hover:shadow-lg hover:shadow-[var(--color-primary)]/5"
    >
      <Link href={`/wallet/reviews/${review.slug}`} className="block p-6">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">
              {review.name}
            </h3>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">{review.tagline}</p>
          </div>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${verdictColor.bg} ${verdictColor.text}`}
          >
            {getVerdictLabel(review.verdict)}
          </span>
        </div>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-3">
          <StarRating rating={review.rating.overall} />
          <span className="text-lg font-bold text-white">{formatRating(review.rating.overall)}</span>
          <span className="text-sm text-[var(--color-text-muted)]">
            {getRatingLabel(review.rating.overall)}
          </span>
        </div>

        {/* Rating Breakdown */}
        <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center justify-between rounded-lg bg-[var(--color-bg-primary)] px-3 py-2">
            <span className="text-[var(--color-text-muted)]">Security</span>
            <span className="font-medium text-white">{formatRating(review.rating.security)}</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-[var(--color-bg-primary)] px-3 py-2">
            <span className="text-[var(--color-text-muted)]">Usability</span>
            <span className="font-medium text-white">{formatRating(review.rating.usability)}</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-[var(--color-bg-primary)] px-3 py-2">
            <span className="text-[var(--color-text-muted)]">Features</span>
            <span className="font-medium text-white">{formatRating(review.rating.features)}</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-[var(--color-bg-primary)] px-3 py-2">
            <span className="text-[var(--color-text-muted)]">Support</span>
            <span className="font-medium text-white">{formatRating(review.rating.support)}</span>
          </div>
        </div>

        {/* Summary */}
        <p className="mb-4 text-sm text-[var(--color-text-secondary)] line-clamp-2">
          {review.summary}
        </p>

        {/* ETC Support Badge */}
        <div className="mb-4 flex flex-wrap gap-2">
          {review.etcSupport.native ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Native ETC
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
              Manual Setup
            </span>
          )}
          <span className="rounded-full bg-[var(--panel)] border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
            {review.pricing.type === 'free' ? 'Free' : review.pricing.price}
          </span>
        </div>

        {/* Best For */}
        <div className="flex flex-wrap gap-1">
          {review.bestFor.slice(0, 3).map((use) => (
            <span
              key={use}
              className="rounded-full bg-[var(--color-primary)]/5 px-2 py-0.5 text-xs text-[var(--color-primary)]"
            >
              {use}
            </span>
          ))}
        </div>

        {/* Read More Arrow */}
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] opacity-0 transition-opacity group-hover:opacity-100">
          Read Full Review
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </Link>
    </motion.div>
  )
}

export default function WalletReviewsPage() {
  const [sortBy, setSortBy] = useState<SortOption>('rating')
  const [verdictFilter, setVerdictFilter] = useState<VerdictFilter>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredReviews = useMemo(() => {
    let result = [...walletReviews]

    // Filter by verdict
    if (verdictFilter !== 'all') {
      result = result.filter((r) => r.verdict === verdictFilter)
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(query) ||
          r.tagline.toLowerCase().includes(query) ||
          r.summary.toLowerCase().includes(query) ||
          r.bestFor.some((b) => b.toLowerCase().includes(query))
      )
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating.overall - a.rating.overall
        case 'name':
          return a.name.localeCompare(b.name)
        case 'verdict':
          const verdictOrder = { 'highly-recommended': 0, recommended: 1, acceptable: 2, 'not-recommended': 3 }
          return verdictOrder[a.verdict] - verdictOrder[b.verdict]
        default:
          return 0
      }
    })

    return result
  }, [sortBy, verdictFilter, searchQuery])

  const verdictCounts = useMemo(() => {
    return {
      all: walletReviews.length,
      'highly-recommended': walletReviews.filter((r) => r.verdict === 'highly-recommended').length,
      recommended: walletReviews.filter((r) => r.verdict === 'recommended').length,
      acceptable: walletReviews.filter((r) => r.verdict === 'acceptable').length,
      'not-recommended': walletReviews.filter((r) => r.verdict === 'not-recommended').length,
    }
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-16 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-6xl"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-2 text-sm">
            <Link
              href="/wallet"
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              Wallets
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <span className="text-white">Reviews</span>
          </motion.div>

          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {walletReviews.length} In-Depth Reviews
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            Wallet{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Reviews
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Honest, in-depth reviews of ETC-compatible wallets. We test security, usability,
            features, and customer support so you can make an informed decision.
          </motion.p>

          {/* Quick Stats */}
          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3">
              <div className="text-2xl font-bold text-green-400">{verdictCounts['highly-recommended']}</div>
              <div className="text-sm text-[var(--color-text-muted)]">Highly Recommended</div>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3">
              <div className="text-2xl font-bold text-blue-400">{verdictCounts.recommended}</div>
              <div className="text-sm text-[var(--color-text-muted)]">Recommended</div>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3">
              <div className="text-2xl font-bold text-amber-400">{verdictCounts.acceptable}</div>
              <div className="text-sm text-[var(--color-text-muted)]">Acceptable</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)]/50 px-6 py-4 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search wallets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--panel)] py-2 pl-10 pr-4 text-sm text-white placeholder-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Verdict Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--color-text-muted)]">Verdict:</span>
              <select
                value={verdictFilter}
                onChange={(e) => setVerdictFilter(e.target.value as VerdictFilter)}
                className="rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
              >
                <option value="all">All ({verdictCounts.all})</option>
                <option value="highly-recommended">Highly Recommended ({verdictCounts['highly-recommended']})</option>
                <option value="recommended">Recommended ({verdictCounts.recommended})</option>
                <option value="acceptable">Acceptable ({verdictCounts.acceptable})</option>
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--color-text-muted)]">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
              >
                <option value="rating">Highest Rated</option>
                <option value="name">Name (A-Z)</option>
                <option value="verdict">Verdict</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm text-[var(--color-text-muted)]">
            Showing {filteredReviews.length} review{filteredReviews.length !== 1 ? 's' : ''}
          </p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
          >
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </motion.div>

          {filteredReviews.length === 0 && (
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-12 text-center">
              <svg
                className="mx-auto h-12 w-12 text-[var(--color-text-muted)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-white">No reviews found</h3>
              <p className="mt-2 text-[var(--color-text-muted)]">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Rating Methodology */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-8"
          >
            <h2 className="mb-6 text-xl font-bold text-white">Our Rating Methodology</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <h3 className="font-semibold text-white">Security</h3>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Key storage, encryption, open-source code, security audits, and track record.
                </p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <h3 className="font-semibold text-white">Usability</h3>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Interface design, setup process, learning curve, and mobile experience.
                </p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="font-semibold text-white">Features</h3>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  ETC support, dApp connectivity, multi-chain, staking, and exchange features.
                </p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                  <h3 className="font-semibold text-white">Support</h3>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Documentation quality, response time, community resources, and update frequency.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-gradient-to-b from-[var(--color-primary)]/10 to-[var(--panel)] p-8 text-center"
          >
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Need Help Deciding?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[var(--color-text-secondary)]">
              Compare wallet features side-by-side or explore our guides for specific wallet types.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/wallet/compare"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
              >
                Compare Wallets
              </Link>
              <Link
                href="/wallet/hardware"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                Hardware Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

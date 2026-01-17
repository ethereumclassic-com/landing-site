'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  exchangeReviews,
  getVerdictLabel,
  getVerdictColor,
  formatRating,
  getRatingLabel,
  type ExchangeReview,
} from '../data/reviews'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

// Star rating component
function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  }

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${sizeClasses[size]} ${
            star <= Math.round(rating) ? 'text-yellow-400' : 'text-[var(--color-text-muted)]/30'
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

// Review card component
function ReviewCard({ review }: { review: ExchangeReview }) {
  return (
    <motion.div variants={fadeInUp}>
      <Link
        href={`/buy/reviews/${review.slug}`}
        className="group block h-full rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/30 hover:shadow-lg hover:shadow-[var(--color-primary)]/5"
      >
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                  review.type === 'DEX'
                    ? 'bg-purple-500/20 text-purple-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}
              >
                {review.type}
              </span>
              <span className={`text-xs font-medium ${getVerdictColor(review.verdict)}`}>
                {getVerdictLabel(review.verdict)}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[var(--color-primary)]">
              {review.name}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)]">{review.tagline}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">{formatRating(review.rating.overall)}</div>
            <StarRating rating={review.rating.overall} size="sm" />
          </div>
        </div>

        {/* Summary */}
        <p className="mb-4 line-clamp-2 text-sm text-[var(--color-text-secondary)]">{review.summary}</p>

        {/* Quick Stats */}
        <div className="mb-4 grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg bg-[var(--bg)]/50 px-3 py-2">
            <span className="text-[var(--color-text-muted)]">Trading Fee</span>
            <div className="font-medium text-white">{review.fees.trading}</div>
          </div>
          <div className="rounded-lg bg-[var(--bg)]/50 px-3 py-2">
            <span className="text-[var(--color-text-muted)]">KYC</span>
            <div className="font-medium text-white">{review.kycRequired ? 'Required' : 'Optional'}</div>
          </div>
        </div>

        {/* Best For */}
        <div className="flex flex-wrap gap-1">
          {review.bestFor.slice(0, 3).map((use) => (
            <span
              key={use}
              className="rounded-full bg-[var(--bg)] px-2 py-1 text-xs text-[var(--color-text-muted)]"
            >
              {use}
            </span>
          ))}
        </div>

        {/* Read Review Link */}
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--color-primary)]">
          Read Full Review
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ExchangeReviewsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [verdictFilter, setVerdictFilter] = useState<string>('all')
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'rating' | 'name' | 'fees'>('rating')

  const filteredReviews = useMemo(() => {
    let reviews = [...exchangeReviews]

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      reviews = reviews.filter(
        (r) =>
          r.name.toLowerCase().includes(query) ||
          r.tagline.toLowerCase().includes(query) ||
          r.bestFor.some((b) => b.toLowerCase().includes(query))
      )
    }

    // Filter by verdict
    if (verdictFilter !== 'all') {
      reviews = reviews.filter((r) => r.verdict === verdictFilter)
    }

    // Filter by type
    if (typeFilter !== 'all') {
      reviews = reviews.filter((r) => r.type === typeFilter)
    }

    // Sort
    switch (sortBy) {
      case 'rating':
        reviews.sort((a, b) => b.rating.overall - a.rating.overall)
        break
      case 'name':
        reviews.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'fees':
        reviews.sort((a, b) => {
          const aFee = parseFloat(a.fees.trading.replace('%', '')) || 0
          const bFee = parseFloat(b.fees.trading.replace('%', '')) || 0
          return aFee - bFee
        })
        break
    }

    return reviews
  }, [searchQuery, verdictFilter, typeFilter, sortBy])

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-[var(--color-primary)]/10 to-transparent px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm text-[var(--color-primary)]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              In-Depth Reviews
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="mb-4 text-4xl font-bold text-white sm:text-5xl"
            >
              Exchange Reviews
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-2xl text-lg text-[var(--color-text-secondary)]"
            >
              Comprehensive reviews of exchanges supporting Ethereum Classic. We evaluate security,
              fees, liquidity, and user experience to help you choose the right platform.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-[var(--border)] bg-[var(--panel)] px-4 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search exchanges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] py-2 pl-10 pr-4 text-sm text-white placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
              />
            </div>

            {/* Type Filter */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none"
            >
              <option value="all">All Types</option>
              <option value="CEX">CEX</option>
              <option value="DEX">DEX</option>
            </select>

            {/* Verdict Filter */}
            <select
              value={verdictFilter}
              onChange={(e) => setVerdictFilter(e.target.value)}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none"
            >
              <option value="all">All Verdicts</option>
              <option value="highly-recommended">Highly Recommended</option>
              <option value="recommended">Recommended</option>
              <option value="acceptable">Acceptable</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'rating' | 'name' | 'fees')}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none"
            >
              <option value="rating">Highest Rated</option>
              <option value="name">Name A-Z</option>
              <option value="fees">Lowest Fees</option>
            </select>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-[var(--color-text-muted)]">
              Showing {filteredReviews.length} of {exchangeReviews.length} reviews
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </motion.div>

          {filteredReviews.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-[var(--color-text-muted)]">No exchanges match your filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setVerdictFilter('all')
                  setTypeFilter('all')
                }}
                className="mt-2 text-sm text-[var(--color-primary)] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Rating Methodology */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-white">Our Rating Methodology</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Security',
                description: 'Track record, cold storage practices, 2FA, insurance, and proof of reserves.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                ),
              },
              {
                name: 'Fees',
                description: 'Trading fees, deposit costs, withdrawal fees, and hidden charges.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                ),
              },
              {
                name: 'Liquidity',
                description: 'ETC trading volume, order book depth, and execution quality.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                ),
              },
              {
                name: 'User Experience',
                description: 'Interface design, mobile apps, ease of use, and trading tools.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                ),
              },
              {
                name: 'Support',
                description: 'Customer service quality, response times, and available channels.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                ),
              },
              {
                name: 'Overall',
                description: 'Weighted average considering all factors and ETC-specific features.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                ),
              },
            ].map((criterion) => (
              <div key={criterion.name} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {criterion.icon}
                  </svg>
                  <h3 className="font-semibold text-white">{criterion.name}</h3>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">{criterion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--color-primary)]/30 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">Ready to Buy ETC?</h2>
          <p className="mb-6 text-[var(--color-text-secondary)]">
            Compare our top-rated exchanges and find the perfect platform for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/buy/exchanges"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              View All Exchanges
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/buy"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:border-[var(--color-primary)]/30"
            >
              Buy ETC Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

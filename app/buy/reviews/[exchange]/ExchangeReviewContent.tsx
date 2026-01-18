'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  type ExchangeReview,
  getVerdictLabel,
  getVerdictColor,
  formatRating,
  getRatingLabel,
} from '../../data/reviews'

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

// Rating bar component
function RatingBar({ label, rating }: { label: string; rating: number }) {
  const percentage = (rating / 5) * 100

  return (
    <div className="flex items-center gap-3">
      <span className="w-28 text-sm text-[var(--color-text-secondary)]">{label}</span>
      <div className="flex-1 h-2 rounded-full bg-[var(--bg)]">
        <div
          className="h-full rounded-full bg-[var(--color-primary)]"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-8 text-right text-sm font-medium text-white">{formatRating(rating)}</span>
    </div>
  )
}

// Related review card
function RelatedReviewCard({ review }: { review: ExchangeReview }) {
  return (
    <Link
      href={`/buy/reviews/${review.slug}`}
      className="group block rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30"
    >
      <div className="mb-2 flex items-center justify-between">
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            review.type === 'DEX'
              ? 'bg-purple-500/20 text-purple-400'
              : 'bg-blue-500/20 text-blue-400'
          }`}
        >
          {review.type}
        </span>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-white">{formatRating(review.rating.overall)}</span>
          <StarRating rating={review.rating.overall} size="sm" />
        </div>
      </div>
      <h4 className="font-semibold text-white transition-colors group-hover:text-[var(--color-primary)]">
        {review.name}
      </h4>
      <p className="mt-1 text-xs text-[var(--color-text-muted)] line-clamp-2">{review.tagline}</p>
    </Link>
  )
}

interface ExchangeReviewContentProps {
  review: ExchangeReview
  relatedReviews: ExchangeReview[]
}

export function ExchangeReviewContent({ review, relatedReviews }: ExchangeReviewContentProps) {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Breadcrumb */}
      <div className="border-b border-[var(--border)] bg-[var(--panel)] px-4 py-3">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/buy" className="text-[var(--color-text-muted)] hover:text-white">
              Buy
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <Link href="/buy/reviews" className="text-[var(--color-text-muted)] hover:text-white">
              Reviews
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <span className="text-white">{review.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--color-primary)]/10 to-transparent px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      review.type === 'DEX'
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}
                  >
                    {review.type}
                  </span>
                  <span className={`rounded-full border border-current px-3 py-1 text-sm font-medium ${getVerdictColor(review.verdict)}`}>
                    {getVerdictLabel(review.verdict)}
                  </span>
                </div>
                <h1 className="mb-2 text-4xl font-bold text-white sm:text-5xl">{review.name}</h1>
                <p className="text-xl text-[var(--color-text-secondary)]">{review.tagline}</p>
              </div>

              <div className="text-right">
                <div className="text-5xl font-bold text-white">{formatRating(review.rating.overall)}</div>
                <StarRating rating={review.rating.overall} size="lg" />
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{getRatingLabel(review.rating.overall)}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <a
                href={review.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Visit {review.name}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <Link
                href="/buy/reviews"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:border-[var(--color-primary)]/30"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                All Reviews
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Review Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h2 className="mb-4 text-xl font-bold text-white">Summary</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">{review.summary}</p>
              </motion.div>

              {/* Pros & Cons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid gap-6 sm:grid-cols-2"
              >
                <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-green-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Pros
                  </h3>
                  <ul className="space-y-2">
                    {review.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-red-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Cons
                  </h3>
                  <ul className="space-y-2">
                    {review.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Full Review */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h2 className="mb-4 text-xl font-bold text-white">Full Review</h2>
                <div className="prose prose-invert max-w-none">
                  {review.fullReview.split('\n\n').map((paragraph, i) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h3 key={i} className="mt-6 mb-3 text-lg font-semibold text-white">
                          {paragraph.replace(/\*\*/g, '')}
                        </h3>
                      )
                    }
                    return (
                      <p key={i} className="mb-4 text-[var(--color-text-secondary)] leading-relaxed">
                        {paragraph.split('**').map((part, j) =>
                          j % 2 === 1 ? (
                            <strong key={j} className="text-white font-medium">
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    )
                  })}
                </div>
              </motion.div>

              {/* ETC Support Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h2 className="mb-4 text-xl font-bold text-white">ETC Support Details</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Trading Pairs</h4>
                    <div className="flex flex-wrap gap-2">
                      {review.etcSupport.tradingPairs.map((pair) => (
                        <span key={pair} className="rounded-full bg-[var(--bg)] px-3 py-1 text-sm text-white">
                          {pair}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Deposit Methods</h4>
                    <div className="flex flex-wrap gap-2">
                      {review.etcSupport.depositMethods.map((method) => (
                        <span key={method} className="rounded-full bg-[var(--bg)] px-3 py-1 text-sm text-white">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">Withdrawal Fee</h4>
                    <p className="text-white">{review.etcSupport.withdrawalFee}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">ETC Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {review.etcSupport.etcSpecificFeatures.map((feature) => (
                        <span key={feature} className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm text-[var(--color-primary)]">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Rating Breakdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">Rating Breakdown</h3>
                <div className="space-y-3">
                  <RatingBar label="Security" rating={review.rating.security} />
                  <RatingBar label="Fees" rating={review.rating.fees} />
                  <RatingBar label="Liquidity" rating={review.rating.liquidity} />
                  <RatingBar label="UX" rating={review.rating.userExperience} />
                  <RatingBar label="Support" rating={review.rating.support} />
                </div>
              </motion.div>

              {/* Quick Facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">Quick Facts</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-sm text-[var(--color-text-muted)]">Type</dt>
                    <dd className="text-sm font-medium text-white">{review.type}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-[var(--color-text-muted)]">Trading Fee</dt>
                    <dd className="text-sm font-medium text-white">{review.fees.trading}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-[var(--color-text-muted)]">Withdrawal Fee</dt>
                    <dd className="text-sm font-medium text-white">{review.fees.withdrawal}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-[var(--color-text-muted)]">KYC Required</dt>
                    <dd className="text-sm font-medium text-white">{review.kycRequired ? 'Yes' : 'No'}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-[var(--color-text-muted)]">Regions</dt>
                    <dd className="text-sm font-medium text-white text-right">{review.regions.join(', ')}</dd>
                  </div>
                </dl>
              </motion.div>

              {/* Best For */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">Best For</h3>
                <div className="flex flex-wrap gap-2">
                  {review.bestFor.map((use) => (
                    <span
                      key={use}
                      className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1.5 text-sm text-[var(--color-primary)]"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Payment Methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">Payment Methods</h3>
                <div className="flex flex-wrap gap-2">
                  {review.paymentMethods.map((method) => (
                    <span
                      key={method}
                      className="rounded-full bg-[var(--bg)] px-3 py-1.5 text-sm text-white"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Last Updated */}
              <div className="text-center text-sm text-[var(--color-text-muted)]">
                Review updated: {new Date(review.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reviews */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-bold text-white">Related Reviews</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedReviews.map((related) => (
              <RelatedReviewCard key={related.id} review={related} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

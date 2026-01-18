'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  type WalletReview,
  getVerdictLabel,
  getVerdictColor,
  formatRating,
  getRatingLabel,
} from '../../data/reviews'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
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
            <linearGradient id="halfGradLarge">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGradLarge)"
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

function RatingBar({ label, rating, color }: { label: string; rating: number; color: string }) {
  const percentage = (rating / 5) * 100

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-[var(--color-text-secondary)]">{label}</span>
        <span className="font-medium text-white">{formatRating(rating)}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[var(--color-bg-primary)]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  )
}

function RelatedReviewCard({ review }: { review: WalletReview }) {
  const verdictColor = getVerdictColor(review.verdict)

  return (
    <Link
      href={`/wallet/reviews/${review.slug}`}
      className="group block rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30"
    >
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors">
            {review.name}
          </h4>
          <p className="mt-1 text-xs text-[var(--color-text-muted)]">{review.tagline}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${verdictColor.bg} ${verdictColor.text}`}
        >
          {formatRating(review.rating.overall)}
        </span>
      </div>
    </Link>
  )
}

interface WalletReviewContentProps {
  review: WalletReview
  relatedReviews: WalletReview[]
}

export function WalletReviewContent({ review, relatedReviews }: WalletReviewContentProps) {
  const verdictColor = getVerdictColor(review.verdict)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-16 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl"
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
            <Link
              href="/wallet/reviews"
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              Reviews
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <span className="text-white">{review.name}</span>
          </motion.div>

          {/* Verdict Badge */}
          <motion.div variants={fadeInUp}>
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${verdictColor.bg} ${verdictColor.text}`}
              style={{ borderColor: `${verdictColor.text.replace('text-', '')}30` }}
            >
              {review.verdict === 'highly-recommended' && (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              )}
              {getVerdictLabel(review.verdict)}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            {review.name}{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Review
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p variants={fadeInUp} className="mt-2 text-lg text-[var(--color-text-muted)]">
            {review.tagline}
          </motion.p>

          {/* Rating Overview */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-3">
              <StarRating rating={review.rating.overall} size="lg" />
              <span className="text-3xl font-bold text-white">{formatRating(review.rating.overall)}</span>
              <span className="text-lg text-[var(--color-text-secondary)]">
                {getRatingLabel(review.rating.overall)}
              </span>
            </div>
          </motion.div>

          {/* Quick Info */}
          <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-3">
            {review.etcSupport.native ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1.5 text-sm font-medium text-green-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Native ETC Support
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1.5 text-sm font-medium text-amber-400">
                Manual ETC Setup Required
              </span>
            )}
            <span className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)]">
              {review.pricing.type === 'free' ? 'Free' : review.pricing.price}
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)]">
              Updated: {review.lastUpdated}
            </span>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="mt-8">
            <a
              href={review.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              Visit {review.name}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h2 className="mb-4 text-xl font-bold text-white">Quick Summary</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">{review.summary}</p>
              </motion.div>

              {/* Pros & Cons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid gap-6 sm:grid-cols-2"
              >
                {/* Pros */}
                <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-green-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Pros
                  </h3>
                  <ul className="space-y-3">
                    {review.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="4" />
                        </svg>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-red-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Cons
                  </h3>
                  <ul className="space-y-3">
                    {review.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="4" />
                        </svg>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Full Review */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                    if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n').filter((line) => line.startsWith('- '))
                      return (
                        <ul key={i} className="my-4 space-y-2">
                          {items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-[var(--color-text-secondary)]">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                              {item.replace('- ', '')}
                            </li>
                          ))}
                        </ul>
                      )
                    }
                    return (
                      <p key={i} className="mb-4 text-[var(--color-text-secondary)] leading-relaxed">
                        {paragraph}
                      </p>
                    )
                  })}
                </div>
              </motion.div>

              {/* ETC Support Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h2 className="mb-4 text-xl font-bold text-white">ETC Support</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg bg-[var(--color-bg-primary)] p-4">
                    <span className="text-[var(--color-text-secondary)]">Native ETC Support</span>
                    {review.etcSupport.native ? (
                      <span className="flex items-center gap-1 text-green-400">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Yes
                      </span>
                    ) : (
                      <span className="text-amber-400">Manual Setup</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-[var(--color-bg-primary)] p-4">
                    <span className="text-[var(--color-text-secondary)]">Network Configuration</span>
                    <span className="capitalize text-white">{review.etcSupport.networkSetup.replace('-', ' ')}</span>
                  </div>
                  {review.etcSupport.etcSpecificFeatures.length > 0 && (
                    <div className="rounded-lg bg-[var(--color-bg-primary)] p-4">
                      <span className="mb-2 block text-[var(--color-text-secondary)]">ETC Features</span>
                      <div className="flex flex-wrap gap-2">
                        {review.etcSupport.etcSpecificFeatures.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full bg-[var(--color-primary)]/10 px-2.5 py-1 text-xs text-[var(--color-primary)]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Rating Breakdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-6 rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">Rating Breakdown</h3>
                <div className="space-y-4">
                  <RatingBar label="Security" rating={review.rating.security} color="bg-green-500" />
                  <RatingBar label="Usability" rating={review.rating.usability} color="bg-blue-500" />
                  <RatingBar label="Features" rating={review.rating.features} color="bg-purple-500" />
                  <RatingBar label="Support" rating={review.rating.support} color="bg-amber-500" />
                </div>

                <div className="mt-6 border-t border-[var(--border)] pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--color-text-secondary)]">Overall</span>
                    <div className="flex items-center gap-2">
                      <StarRating rating={review.rating.overall} size="sm" />
                      <span className="text-lg font-bold text-white">{formatRating(review.rating.overall)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Best For */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

              {/* Pricing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">Pricing</h3>
                <div className="text-2xl font-bold text-white">
                  {review.pricing.type === 'free' ? 'Free' : review.pricing.price}
                </div>
                {review.pricing.notes && (
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{review.pricing.notes}</p>
                )}
              </motion.div>

              {/* Related Reviews */}
              {relatedReviews.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
                >
                  <h3 className="mb-4 text-lg font-semibold text-white">Related Reviews</h3>
                  <div className="space-y-3">
                    {relatedReviews.map((related) => (
                      <RelatedReviewCard key={related.id} review={related} />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
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
              Ready to Get Started with {review.name}?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[var(--color-text-secondary)]">
              {review.verdict === 'highly-recommended' || review.verdict === 'recommended'
                ? `${review.name} is a solid choice for ETC users. Visit their website to get started.`
                : `Consider your needs carefully. ${review.name} may work for specific use cases.`}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={review.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
              >
                Visit {review.name}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <Link
                href="/wallet/reviews"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                Browse All Reviews
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

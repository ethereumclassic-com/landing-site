'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { PhilosophyArticle } from '../data/philosophy'
import { philosophyArticles } from '../data/philosophy'

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

interface Props {
  article: PhilosophyArticle
  content: React.ReactNode
}

export default function WhyClassicArticleClient({ article, content }: Props) {
  const relatedArticles = philosophyArticles.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-16 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 via-transparent to-transparent" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-2 text-sm">
            <Link
              href="/why-classic"
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              Why Classic
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
              {article.icon} Philosophy
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            {article.title}
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-4 text-lg text-[var(--color-text-secondary)]">
            {article.description}
          </motion.p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="article-content"
          >
            {content}
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-bold text-white md:text-2xl">Continue Reading</h2>
            <p className="mt-1 text-[var(--color-text-muted)]">More on the philosophy of Ethereum Classic</p>

            <div className="mt-8 grid gap-4">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/why-classic/${related.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/50"
                >
                  <span className="text-xl">{related.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                      {related.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{related.description}</p>
                  </div>
                  <svg
                    className="h-4 w-4 shrink-0 text-[var(--color-text-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-primary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/why-classic"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                All Philosophy Articles
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

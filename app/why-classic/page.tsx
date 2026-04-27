'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { philosophyArticles } from './data/philosophy'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

export default function WhyClassicPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 via-transparent to-transparent" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Philosophy
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl"
          >
            Why{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-400 bg-clip-text text-transparent">
              Classic
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            The principles and philosophy that define Ethereum Classic — from its origin story to the protocol design
            decisions that set it apart.
          </motion.p>
        </motion.div>
      </section>

      {/* Article Cards */}
      <section className="px-6 pb-20 md:px-10 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto grid max-w-4xl gap-6"
        >
          {philosophyArticles.map((article, i) => (
            <motion.div key={article.slug} variants={fadeInUp}>
              <Link
                href={`/why-classic/${article.slug}`}
                className="group flex items-start gap-6 rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/50 hover:shadow-lg hover:shadow-[var(--color-primary)]/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-2xl">
                  {article.icon}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-[var(--color-text-muted)]">Part {i + 1}</span>
                  </div>
                  <h2 className="mt-1 text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{article.description}</p>
                </div>
                <svg aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-[var(--color-text-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  )
}

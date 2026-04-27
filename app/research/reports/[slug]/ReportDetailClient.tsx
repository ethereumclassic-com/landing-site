'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Report } from '../../data/research'

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

const categoryColors: Record<string, string> = {
  network: 'bg-blue-500/10 text-blue-400',
  ecosystem: 'bg-green-500/10 text-green-400',
  market: 'bg-amber-500/10 text-amber-400',
  technical: 'bg-purple-500/10 text-purple-400',
}

export default function ReportDetailClient({ report }: { report: Report }) {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/research/reports"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Reports
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3">
              <span className={`rounded px-2.5 py-1 text-xs font-medium ${categoryColors[report.category] || 'bg-gray-500/10 text-gray-400'}`}>
                {report.category}
              </span>
              <span className="text-sm text-[var(--color-text-muted)]">{report.date}</span>
              <span className="text-sm text-[var(--color-text-muted)]">{report.readTime} read</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="mt-4 text-3xl font-bold text-white md:text-4xl">
              {report.title}
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-4 text-lg text-[var(--color-text-muted)]">
              {report.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-2 text-sm text-[var(--color-text-muted)]">
              By {report.author}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">Key Highlights</h2>
            <ul className="space-y-3">
              {report.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/20 text-xs font-bold text-[var(--color-primary)]">
                    {i + 1}
                  </span>
                  <span className="text-[var(--color-text-secondary)]">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Report Content Placeholder */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-8">
              <h2 className="text-xl font-semibold text-white">Report Summary</h2>
              <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
                {report.description}
              </p>
              <p className="mt-4 text-[var(--color-text-muted)]">
                The full report covers detailed analysis across network performance, ecosystem growth,
                and forward-looking projections for the Ethereum Classic network.
              </p>
              {report.externalUrl && (
                <a
                  href={report.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
                >
                  Read Full Report
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/research/reports"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              All Reports
            </Link>
            <Link
              href="/research/ecosystem"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
            >
              Ecosystem Overview
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

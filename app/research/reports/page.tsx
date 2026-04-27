'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { reports, type Report } from '../data/research'

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

const categoryLabels: Record<Report['category'], { label: string; bg: string; text: string }> = {
  network: { label: 'Network', bg: 'bg-blue-500/10', text: 'text-blue-400' },
  ecosystem: { label: 'Ecosystem', bg: 'bg-green-500/10', text: 'text-green-400' },
  market: { label: 'Market', bg: 'bg-purple-500/10', text: 'text-purple-400' },
  technical: { label: 'Technical', bg: 'bg-amber-500/10', text: 'text-amber-400' },
}

function ReportCard({ report }: { report: Report }) {
  const category = categoryLabels[report.category]

  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-colors hover:border-[var(--color-primary)]/30"
    >
      <div className="mb-4 flex items-start justify-between">
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${category.bg} ${category.text}`}>
          {category.label}
        </span>
        <span className="text-xs text-[var(--color-text-muted)]">{report.readTime} read</span>
      </div>

      <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)]">{report.title}</h3>
      <p className="mb-4 text-sm text-[var(--color-text-muted)]">{report.description}</p>

      <div className="mb-4 space-y-2">
        {report.highlights.slice(0, 3).map((highlight, idx) => (
          <div key={idx} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
            <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span>{highlight}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-muted)]">
          {report.author} &middot; {new Date(report.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
        <Link
          href={`/research/reports/${report.slug}`}
          className="inline-flex items-center gap-1 text-sm text-[var(--color-primary)] hover:underline"
        >
          Read Report
          <svg aria-hidden="true" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default function ReportsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Report['category'] | 'all'>('all')

  const filteredReports = selectedCategory === 'all'
    ? reports
    : reports.filter((r) => r.category === selectedCategory)

  const sortedReports = [...filteredReports].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/research"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Research
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
                Research Reports
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Comprehensive research and analysis reports covering the Ethereum Classic ecosystem,
                network performance, market trends, and technical developments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[var(--color-primary)] text-black'
                  : 'border border-[var(--border)] bg-[var(--panel)] text-[var(--text-primary)] hover:bg-[var(--bg)]'
              }`}
            >
              All Reports ({reports.length})
            </button>
            {(Object.keys(categoryLabels) as Report['category'][]).map((cat) => {
              const { label, bg, text } = categoryLabels[cat]
              const count = reports.filter((r) => r.category === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? `${bg} ${text}`
                      : 'border border-[var(--border)] bg-[var(--panel)] text-[var(--text-primary)] hover:bg-[var(--bg)]'
                  }`}
                >
                  {label} ({count})
                </button>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            {sortedReports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </motion.div>

          {sortedReports.length === 0 && (
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-8 text-center">
              <p className="text-[var(--color-text-muted)]">No reports found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Stay Updated</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              New research reports are published regularly. Follow the latest developments in the ETC ecosystem.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Latest News
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/research/network"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
              >
                Network Analysis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

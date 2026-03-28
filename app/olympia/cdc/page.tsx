'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

interface CDCEntry {
  date: string
  title: string
  topics: string[]
  recordingUrl?: string
  notesUrl?: string
}

const cdcEntries: CDCEntry[] = [
  {
    date: '2026-03-27',
    title: 'CDC-23 — Olympia Specification Review',
    topics: [
      'ECIP-1111 through 1121 final review',
      'Activation block discussion',
      'Cross-client test matrix update',
      'Mordor testnet deployment timeline',
    ],
  },
  // Additional CDC entries will be added as calls happen
]

export default function CDCArchivePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ffae]/8 blur-[100px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <Link
              href="/olympia"
              className="text-sm text-[#00ffae] transition hover:text-[#00ffae]/80"
            >
              ← Olympia Hub
            </Link>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            Community Developer Calls
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Olympia coordination happens in public CDC calls. Recordings, notes, and decisions
            are archived here for full transparency.
          </motion.p>
        </motion.div>
      </section>

      {/* Entries */}
      <section className="px-6 pb-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            {cdcEntries.map((entry) => (
              <motion.div
                key={entry.date}
                variants={fadeInUp}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {new Date(entry.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <ul className="mt-4 space-y-1.5">
                  {entry.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00ffae]" />
                      {topic}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-3">
                  {entry.recordingUrl && (
                    <a
                      href={entry.recordingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#00ffae] transition hover:text-[#00ffae]/80"
                    >
                      Watch Recording →
                    </a>
                  )}
                  {entry.notesUrl && (
                    <a
                      href={entry.notesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#00ffae] transition hover:text-[#00ffae]/80"
                    >
                      Read Notes →
                    </a>
                  )}
                  {!entry.recordingUrl && !entry.notesUrl && (
                    <span className="text-sm text-[var(--color-text-muted)]">
                      Recording and notes will be posted after the call.
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

            {cdcEntries.length === 0 && (
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-8 text-center">
                <p className="text-[var(--color-text-muted)]">
                  No CDC recordings archived yet. Check back after the next community call.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

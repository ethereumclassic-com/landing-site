'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { type CDCEntry } from '../data/index'
import { ECIPChip } from '../components/ECIPChip'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

function PlaceholderTemplate({ entry }: { entry: CDCEntry }) {
  const tbd = <span className="font-mono text-[var(--color-text-muted)]">TBD</span>

  const rows: [string, React.ReactNode][] = [
    ['Block', entry.forkBlock !== null ? <span className="font-mono">{entry.forkBlock.toLocaleString()}</span> : tbd],
    ['Date', formatDate(entry.date) !== 'TBD' ? formatDate(entry.date) : tbd],
    ['ECIP', entry.ecipRefs.length > 0
      ? <div className="flex flex-wrap gap-2">{entry.ecipRefs.map((id) => <ECIPChip key={id} id={id} />)}</div>
      : <span className="text-[var(--color-text-muted)]">Pre-ECIP process</span>],
    ['Status', entry.isRejected
      ? <span className="font-mono text-red-400">Withdrawn</span>
      : <span className="font-mono text-[var(--color-primary)]">Activated</span>],
  ]

  return (
    <div className="space-y-8">
      {/* Network Details */}
      <div className="rounded-lg border border-[var(--border)] bg-[var(--panel)] overflow-hidden">
        <div className="border-b border-[var(--border)] px-5 py-3">
          <h2 className="font-mono text-sm font-semibold text-white">Network Upgrade Details</h2>
        </div>
        <div className="divide-y divide-[var(--border)]">
          {rows.map(([label, value]) => (
            <div key={label} className="flex items-center gap-4 px-5 py-3">
              <span className="w-20 shrink-0 font-mono text-xs text-[var(--color-text-muted)]">{label}</span>
              <span className="text-sm text-white">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Empty sections */}
      {[
        { title: 'Discussion', desc: 'Community discussion thread and call notes.' },
        { title: 'Recording', desc: 'Call recording and transcript.' },
        { title: 'Key Decisions', desc: 'Protocol decisions made during this call.' },
        { title: 'Participants', desc: 'Client teams and community members.' },
      ].map((section) => (
        <div key={section.title} className="rounded-lg border border-[var(--border)] bg-[var(--panel)] px-5 py-4">
          <h2 className="font-mono text-sm font-semibold text-white">{section.title}</h2>
          <p className="mt-1 text-xs text-[var(--color-text-muted)]">{section.desc}</p>
          <div className="mt-3 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-text-muted)]/40" />
            <span className="font-mono">TBD</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function formatDate(date: string) {
  if (date === '2026-TBD') return 'TBD'
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

interface CDCPostContentProps {
  entry: CDCEntry
  prevEntry: CDCEntry | null
  nextEntry: CDCEntry | null
}

export default function CDCPostContent({ entry, prevEntry, nextEntry }: CDCPostContentProps) {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-16 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[200px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/6 blur-[80px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-3xl"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <Link
              href="/core-devs"
              className="text-sm text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80"
            >
              ← Core Devs Archive
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-sm text-[var(--color-text-muted)]">{formatDate(entry.date)}</span>
            {entry.forkBlock !== null && (
              <span className="font-mono text-xs text-[var(--color-text-muted)]">
                Block #{entry.forkBlock.toLocaleString()}
              </span>
            )}
            {entry.isRejected && (
              <span className="rounded-sm bg-red-500/15 px-1.5 py-0.5 font-mono text-[10px] font-medium text-red-400">
                WITHDRAWN
              </span>
            )}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl"
          >
            {entry.title}
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-3 text-[var(--color-text-secondary)]">
            {entry.summary}
          </motion.p>

          {/* ECIP chips */}
          {entry.ecipRefs.length > 0 && (
            <motion.div variants={fadeInUp} className="mt-4 flex flex-wrap items-center gap-3">
              {entry.ecipRefs.map((id) => (
                <ECIPChip key={id} id={id} />
              ))}
            </motion.div>
          )}

          {entry.recordingUrl && (
            <motion.div variants={fadeInUp} className="mt-4">
              <a
                href={entry.recordingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition hover:bg-[var(--color-primary)]/20"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Recording
              </a>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Content */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          {entry.isPlaceholder ? (
            <PlaceholderTemplate entry={entry} />
          ) : (
            <div className="cdc-content prose prose-invert max-w-none prose-headings:text-white prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2 prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed prose-a:text-[var(--color-primary)] prose-a:no-underline hover:prose-a:text-[var(--color-primary)]/80 prose-li:text-[var(--color-text-secondary)] prose-strong:text-white prose-code:text-[var(--color-primary)] prose-code:bg-[var(--color-primary)]/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-ul:my-3 prose-ol:my-3">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{entry.content}</ReactMarkdown>
            </div>
          )}
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-3xl justify-between gap-4">
          {prevEntry ? (
            <Link
              href={`/core-devs/${prevEntry.slug}`}
              className="group text-sm text-[var(--color-text-muted)] transition hover:text-white"
            >
              <span className="text-xs text-[var(--color-text-muted)]">← Previous</span>
              <br />
              <span className="group-hover:text-[var(--color-primary)]">{prevEntry.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {nextEntry ? (
            <Link
              href={`/core-devs/${nextEntry.slug}`}
              className="group text-right text-sm text-[var(--color-text-muted)] transition hover:text-white"
            >
              <span className="text-xs text-[var(--color-text-muted)]">Next →</span>
              <br />
              <span className="group-hover:text-[var(--color-primary)]">{nextEntry.title}</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </main>
  )
}

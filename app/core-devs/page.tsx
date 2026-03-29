'use client'

import { motion } from 'framer-motion'
import { cdcEntries } from './data/index'
import { CDCCard } from './components/CDCCard'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function CoreDevsPage() {
  const recordingCount = cdcEntries.filter((e) => e.recordingUrl).length
  // Reverse for display: newest first
  const archiveEntries = [...cdcEntries].reverse()
  // The last entry (Olympia) is the upcoming call
  const upcomingEntry = archiveEntries[0]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/8 blur-[100px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-5xl text-center"
        >
          <motion.div variants={fadeInUp} className="mb-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Ethereum Classic
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            Core Developer Calls
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Where Ethereum Classic protocol decisions are made. Client teams meet publicly to reach
            consensus on network upgrades, review ECIP proposals, and coordinate hard fork
            activations.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 flex justify-center gap-6 font-mono text-sm"
          >
            <span className="text-[var(--color-text-muted)]">
              <span className="font-semibold text-white">{cdcEntries.length}</span> CALLS
            </span>
            <span className="text-[var(--color-text-muted)]">·</span>
            <span className="text-[var(--color-text-muted)]">
              <span className="font-semibold text-white">{recordingCount}</span> RECORDINGS
            </span>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeInUp} className="mt-4 flex justify-center gap-4">
            <a
              href="https://ecips.ethereumclassic.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80"
            >
              ECIP Registry →
            </a>
            <a
              href="https://github.com/ethereumclassic/ECIPs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-text-muted)] transition hover:text-white"
            >
              GitHub →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Upcoming Call */}
      {upcomingEntry && (
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="rounded-xl border-2 border-[var(--color-primary)]/30 bg-[var(--color-primary)]/[0.03] p-6"
              >
                <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-primary)]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                  UPCOMING
                </div>
                <h2 className="mt-2 text-xl font-bold text-white">{upcomingEntry.title}</h2>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {upcomingEntry.summary}
                </p>
                <a
                  href={`/core-devs/${upcomingEntry.slug}`}
                  className="mt-3 inline-block text-sm font-medium text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80"
                >
                  View Agenda →
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* About Terminal Card */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-6 font-mono text-sm"
          >
            <p className="text-[var(--color-text-muted)]">
              <span className="text-[var(--color-primary)]">{'// '}</span>
              <span className="text-white font-semibold">What are Core Developer Calls?</span>
            </p>
            <p className="mt-2 text-[var(--color-text-muted)] leading-relaxed">
              CDCs are public meetings where ETC client developers coordinate protocol changes.
              Every network fork — from Frontier (2015) through Olympia — is discussed, debated,
              and finalized through this process. Rejected proposals (ECIP-1049, 1051, 1098)
              are also documented here.
            </p>
            <p className="mt-4 text-[var(--color-text-muted)]">
              <span className="text-[var(--color-primary)]">{'// '}</span>
              <span className="text-white font-semibold">How to Participate</span>
            </p>
            <p className="mt-2 text-[var(--color-text-muted)] leading-relaxed">
              Join the{' '}
              <a
                href="https://ethereumclassic.org/discord"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80"
              >
                community Discord
              </a>{' '}
              or follow{' '}
              <a
                href="https://x.com/ETC_Network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80"
              >
                @ETC_Network
              </a>{' '}
              on X for call announcements. Review active ECIPs at{' '}
              <a
                href="https://ecips.ethereumclassic.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80"
              >
                ecips.ethereumclassic.org
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="font-mono text-lg font-bold text-white">
                <span className="text-[var(--color-primary)]">/ </span>Archive
              </h2>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Every protocol decision since genesis — {cdcEntries.length} calls, reverse
                chronological.
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {archiveEntries.map((entry) => (
                <motion.div key={entry.slug} variants={fadeInUp}>
                  <CDCCard entry={entry} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

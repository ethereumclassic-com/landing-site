'use client'

import { cdcEntries } from './data/index'
import { CDCCard } from './components/CDCCard'

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

        <div
          className="relative mx-auto max-w-5xl text-center"
        >
          <div className="mb-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Ethereum Classic
            </span>
          </div>

          <h1
            className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl"
          >
            Core Developer Calls
          </h1>

          <p
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Where Ethereum Classic protocol decisions are made. Client teams meet publicly to reach
            consensus on network upgrades, review ECIP proposals, and coordinate hard fork
            activations.
          </p>

          {/* Stats */}
          <div
            className="mt-6 flex justify-center gap-6 font-mono text-sm"
          >
            <span className="text-[var(--color-text-muted)]">
              <span className="font-semibold text-[var(--text-primary)]">{cdcEntries.length}</span> CALLS
            </span>
            <span className="text-[var(--color-text-muted)]">·</span>
            <span className="text-[var(--color-text-muted)]">
              <span className="font-semibold text-[var(--text-primary)]">{recordingCount}</span> RECORDINGS
            </span>
          </div>

          {/* Links */}
          <div className="mt-4 flex justify-center gap-4">
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
              className="text-sm font-medium text-[var(--color-text-muted)] transition hover:text-[var(--text-primary)]"
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Call */}
      {upcomingEntry && (
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <div
            >
              <div
                className="rounded-xl border-2 border-[var(--color-primary)]/30 bg-[var(--color-primary)]/[0.03] p-6"
              >
                <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-primary)]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                  UPCOMING
                </div>
                <h2 className="mt-2 text-xl font-bold text-[var(--text-primary)]">{upcomingEntry.title}</h2>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {upcomingEntry.summary}
                </p>
                <a
                  href={`/core-devs/${upcomingEntry.slug}`}
                  className="mt-3 inline-block text-sm font-medium text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80"
                >
                  View Agenda →
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Terminal Card */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div
            className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-6 font-mono text-sm"
          >
            <p className="text-[var(--color-text-muted)]">
              <span className="text-[var(--color-primary)]">{'// '}</span>
              <span className="text-[var(--text-primary)] font-semibold">What are Core Developer Calls?</span>
            </p>
            <p className="mt-2 text-[var(--color-text-muted)] leading-relaxed">
              CDCs are public meetings where ETC client developers coordinate protocol changes.
              Every network fork, from Frontier (2015) through Olympia, is discussed, debated,
              and finalized through this process. Rejected proposals (ECIP-1049, 1051, 1098)
              are also documented here.
            </p>
            <p className="mt-4 text-[var(--color-text-muted)]">
              <span className="text-[var(--color-primary)]">{'// '}</span>
              <span className="text-[var(--text-primary)] font-semibold">How to Participate</span>
            </p>
            <p className="mt-2 text-[var(--color-text-muted)] leading-relaxed">
              Join the{' '}
              <a
                href="https://discord.com/invite/Tq57jxSwsa"
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
          </div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div
          >
            <div>
              <h2 className="font-mono text-lg font-bold text-[var(--text-primary)]">
                <span className="text-[var(--color-primary)]">/ </span>Archive
              </h2>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                All {cdcEntries.length} protocol decisions since genesis, in reverse chronological order.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {archiveEntries.map((entry) => (
                <div key={entry.slug}>
                  <CDCCard entry={entry} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

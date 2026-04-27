'use client'

import Link from 'next/link'
import { FadeIn } from '@/app/components/ui'
import FifthingCountdown from '@/app/components/FifthingCountdown'

const olympiaPoints = [
  'Fusaka EVM alignment: full Ethereum tooling, library, and framework parity',
  'EIP-1559 fee market: predictable gas pricing, basefee revenue directed to protocol treasury',
  'Protocol treasury: sustainable development funding without new token issuance or miner reward changes',
]

export default function ActiveEventsSection() {
  return (
    <section className="border-y border-[var(--border-default)] bg-[var(--bg-elevated)]/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Right Now
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Active Events in ETC
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Two significant changes happening simultaneously on Ethereum Classic.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Olympia card */}
          <FadeIn delay={50}>
            <div className="flex h-full flex-col rounded-2xl border border-[var(--brand-green)]/20 bg-gradient-to-br from-[var(--brand-green)]/5 to-transparent p-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--brand-green)]" />
                </span>
                <span className="rounded-full border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-2.5 py-0.5 font-mono text-xs font-medium text-[var(--brand-green)]">
                  Network Upgrade
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-[var(--text-primary)]">
                Olympia Protocol Upgrade
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                The next Ethereum Classic hard fork — EVM modernization, EIP-1559 fee market, and
                a protocol treasury funded by basefee revenue without touching miner rewards.
              </p>

              <ul className="mt-4 space-y-2.5">
                {olympiaPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                      aria-hidden="true"
                    />
                    <p className="text-xs leading-relaxed text-[var(--text-muted)]">{point}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <Link
                  href="/olympia"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-4 py-2 text-sm font-medium text-[var(--brand-green)] transition-colors hover:bg-[var(--brand-green)]/20"
                >
                  Explore the Olympia upgrade
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Fifthing countdown */}
          <FadeIn delay={100}>
            <FifthingCountdown variant="card" />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

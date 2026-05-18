'use client'

import UpgradeTimeline from '@/app/olympia/components/UpgradeTimeline'
import { forks } from './data/forks'

export default function UpgradesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
        <div
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Ethereum Classic History
            </span>
          </div>

          <h1
            className="text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl"
          >
            Network Upgrades
          </h1>

          <p
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Every ETC network upgrade follows the same process: ECIP specification, independent client
            implementation, testnet validation, and mainnet activation. Olympia brings EVM alignment
            to Fusaka with EIPs spanning London, Dencun, Pectra, and Fusaka.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 pb-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <UpgradeTimeline forks={[...forks].reverse()} />
        </div>
      </section>
    </main>
  )
}

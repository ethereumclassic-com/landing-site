'use client'

import Link from 'next/link'
import { miningPools, miningHardware, miningSoftware } from '@/app/mining/data/mining'

export default function DirectoryMiningPage() {
  const topGPUs = miningHardware.filter((h) => h.type === 'GPU').slice(0, 6)
  const topASICs = miningHardware.filter((h) => h.type === 'ASIC').slice(0, 4)

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <div>
              <Link
                href="/directory"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Directory
              </Link>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">Mining Directory</h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Complete directory of Ethereum Classic mining resources — pools, hardware, and software.
                ETC uses Etchash proof-of-work, mineable with GPUs and ASICs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Pools */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Mining Pools ({miningPools.length})</h2>
              <Link href="/mining/pools" className="text-sm text-[var(--color-primary)] hover:underline">
                View all pools →
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {miningPools.map((pool) => (
                <div
                  key={pool.id}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--color-primary)]/30"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[var(--text-primary)]">{pool.name}</h3>
                    {pool.recommended && (
                      <span className="rounded bg-[var(--color-primary)]/20 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                        Recommended
                      </span>
                    )}
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-lg font-bold text-[var(--text-primary)]">{pool.fee}%</div>
                      <div className="text-xs text-[var(--color-text-muted)]">Fee</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[var(--text-primary)]">{pool.minPayout}</div>
                      <div className="text-xs text-[var(--color-text-muted)]">Min ETC</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[var(--text-primary)]">{pool.hashShare}%</div>
                      <div className="text-xs text-[var(--color-text-muted)]">Share</div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {pool.payoutScheme.map((scheme) => (
                      <span key={scheme} className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                        {scheme}
                      </span>
                    ))}
                  </div>
                  <a
                    href={pool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-center text-sm text-[var(--color-primary)] hover:underline"
                  >
                    Visit Pool →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Overview */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Top Hardware ({miningHardware.length} total)</h2>
              <Link href="/mining/hardware" className="text-sm text-[var(--color-primary)] hover:underline">
                View all hardware →
              </Link>
            </div>

            {/* GPUs */}
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">GPUs</h3>
            <div className="mb-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {topGPUs.map((hw) => (
                <div key={hw.id} className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4">
                  <div className="font-medium text-[var(--text-primary)]">{hw.name}</div>
                  <div className="mt-2 flex gap-4 text-sm text-[var(--color-text-muted)]">
                    <span>{hw.hashrate} MH/s</span>
                    <span>{hw.power}W</span>
                    <span>{(hw.hashrate / hw.power).toFixed(2)} MH/W</span>
                  </div>
                </div>
              ))}
            </div>

            {/* ASICs */}
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">ASICs</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {topASICs.map((hw) => (
                <div key={hw.id} className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4">
                  <div className="font-medium text-[var(--text-primary)]">{hw.name}</div>
                  <div className="mt-2 flex gap-4 text-sm text-[var(--color-text-muted)]">
                    <span>{hw.hashrate} MH/s</span>
                    <span>{hw.power}W</span>
                    <span>{(hw.hashrate / hw.power).toFixed(2)} MH/W</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Mining Software ({miningSoftware.length})</h2>
              <Link href="/mining/software" className="text-sm text-[var(--color-primary)] hover:underline">
                View details →
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {miningSoftware.map((sw) => (
                <div key={sw.id} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                  <h3 className="font-semibold text-[var(--text-primary)]">{sw.name}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{sw.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {sw.platforms.map((p) => (
                      <span key={p} className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/mining"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Mining Hub
            </Link>
            <Link
              href="/mining/profitability"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
            >
              Profitability Calculator
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface FeeMarketStats {
  avgTxPerBlock: number
  networkUtilization: number
  blockReward: number
  blockHeight: number
  source: 'live' | 'fallback'
}

const FALLBACK_STATS: FeeMarketStats = {
  avgTxPerBlock: 5,
  networkUtilization: 0.004,
  blockReward: 2.048,
  blockHeight: 23820000,
  source: 'fallback',
}

function useFeeMarketStats() {
  const [stats, setStats] = useState<FeeMarketStats>(FALLBACK_STATS)
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    async function fetch_stats() {
      try {
        const res = await fetch('/api/network')
        if (!res.ok) return
        const data = await res.json()
        setStats({
          avgTxPerBlock: data.avgTxPerBlock ?? FALLBACK_STATS.avgTxPerBlock,
          networkUtilization: data.networkUtilization ?? FALLBACK_STATS.networkUtilization,
          blockReward: data.blockReward ?? FALLBACK_STATS.blockReward,
          blockHeight: data.blockHeight ?? FALLBACK_STATS.blockHeight,
          source: data.source === 'blockscout' ? 'live' : 'fallback',
        })
        setIsLive(data.source === 'blockscout')
      } catch {
        // keep fallback
      }
    }
    fetch_stats()
  }, [])

  return { stats, isLive }
}

const flywheelSteps = [
  { label: 'Funded Core Dev', desc: 'Protocol Treasury → active developer salaries, grants, and ecosystem programs' },
  { label: 'More dApps', desc: 'Funded development attracts builders. dApps bring users.' },
  { label: 'More Transactions', desc: 'Active dApps generate on-chain activity. Blocks start filling.' },
  { label: 'More Fee Revenue', desc: 'More transactions = more basefee + priority fees. Miner income diversifies.' },
  { label: 'More Miners', desc: 'Higher total revenue makes mining more profitable. Hashrate grows.' },
  { label: 'More Security', desc: 'Higher hashrate raises the cost of a 51% attack. Network trust increases.' },
  { label: 'More Trust', desc: 'A secure, active network attracts institutional usage and more builders.' },
]

export default function FeeMarketPage() {
  const { stats, isLive } = useFeeMarketStats()

  const utilizationPct = (stats.networkUtilization * 100).toFixed(1)
  const emptyPct = (100 - stats.networkUtilization * 100).toFixed(0)

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/8 blur-[120px]" />
          <div className="absolute right-0 top-1/2 h-[300px] w-[400px] -translate-y-1/2 rounded-full bg-[var(--color-primary)]/8 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="mb-4">
            <Link href="/mining" className="text-sm text-[var(--color-primary)] transition hover:opacity-80">
              ← Mining Hub
            </Link>
          </div>
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              Critical Issue
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
            The Fee Market{' '}
            <span className="bg-gradient-to-r from-red-400 to-[var(--color-primary)] bg-clip-text text-transparent">
              Imperative
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            The long-term security of any Proof-of-Work network depends on transaction fee revenue replacing diminishing block rewards. ETC is not there yet. Olympia is how it gets there.
          </p>
        </div>
      </section>

      {/* Current Reality */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-2 flex items-center gap-2">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">The Current Reality</h2>
            {isLive && (
              <span className="flex items-center gap-1.5 rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                Live
              </span>
            )}
          </div>
          <p className="text-[var(--color-text-secondary)]">
            ETC blocks are nearly empty. This is the defining challenge for long-term miner economics.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Avg TXs / Block</p>
              <p className="mt-2 text-3xl font-bold text-red-400">~{stats.avgTxPerBlock}</p>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">Approaching all-time low</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Block Utilization</p>
              <p className="mt-2 text-3xl font-bold text-amber-400">{utilizationPct}%</p>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">{emptyPct}% of block capacity is empty</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Block Reward</p>
              <p className="mt-2 text-3xl font-bold text-[var(--color-primary)]">{stats.blockReward} ETC</p>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">Era 4 — fifthened next in ~5M blocks</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Fee Share of Revenue</p>
              <p className="mt-2 text-3xl font-bold text-red-400">{'<'}1%</p>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">Effectively zero fee income today</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <p className="font-medium text-red-400">
              &ldquo;The average ETC block is {emptyPct}% empty. This is not a security-neutral fact.&rdquo;
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Empty blocks mean miner revenue is 100% dependent on block rewards — a supply that is permanently scheduled to decline every 5 million blocks under <a href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-green)] hover:underline">ECIP-1017</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Why This Matters for Miners</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            <p>
              Miner revenue has two components: block rewards and transaction fees. Block rewards are the dominant source today — but they fifthened every 5 million blocks under <a href="https://ecips.ethereumclassic.org/ECIPs/ecip-1017" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-green)] hover:underline">ECIP-1017</a>. Era 4 (current) pays 2.048 ETC per block. Era 5 will pay 1.6384 ETC. Era 10 pays under 0.5 ETC. The schedule continues until issuance approaches zero.
            </p>
            <p>
              In a healthy fee market, declining block rewards are offset — or more than offset — by rising fee income as the network becomes more used. This is how Bitcoin is designed to work. Fees take over as the block subsidy falls.
            </p>
            <p>
              ETC today has neither. Block rewards are declining on schedule and fee income is near zero. At current utilization, miners have no fee revenue to fall back on when the next fifthing arrives.
            </p>
            <p className="font-medium text-[var(--text-primary)]">
              Without a fee market, the long-term security equation for ETC is unsolvable. Miners will eventually exit a network that cannot pay them. A network without miners has no PoW security. A network without PoW security is not ETC.
            </p>
          </div>
        </div>
      </section>

      {/* The Alignment Problem */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">The Alignment Problem</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            <p>
              Growing fee revenue requires an active, growing dApp ecosystem. That requires funded core development — engineers who maintain clients, improve the EVM, build tooling, attract projects, and support builders who deploy on ETC.
            </p>
            <p>
              Historically, ETC has had no sustainable development funding mechanism. The Ethereum Classic Labs and ETC Cooperative organizations have operated on donations and grants with no guaranteed continuity. When funding dries up, development slows. When development slows, builders go elsewhere. When builders go elsewhere, transactions don&apos;t happen. When transactions don&apos;t happen, blocks stay empty.
            </p>
            <p>
              The chain has remained secure because miners have continued to secure it. But miners are not a charity. They are rational economic actors. The current model asks them to secure a network for free — only a block reward that declines on a fixed schedule, with no mechanism to grow fee revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Olympia's Answer */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Olympia&apos;s Answer</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            <p>
              Olympia redirects the EIP-1559 basefee — currently burned on Ethereum and simply discarded on ETC — to a Protocol Treasury. At today&apos;s near-zero utilization, this is near zero. But as utilization grows, treasury income grows proportionally.
            </p>
            <p>
              The treasury funds on-chain governance-directed development. Protocol teams, grant programs, ecosystem incentives — all funded from the protocol itself, without relying on donations or external organizations. This creates a compounding feedback loop.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-6">
            <p className="text-sm font-medium text-[var(--color-primary)]">Fee Flow After Olympia</p>
            <div className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <span>Block reward ({stats.blockReward} ETC) → Miner — unchanged</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <span>Priority fee (tip) → Miner — unchanged</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span>Basefee → Protocol Treasury (was burned on ETH, discarded on ETC)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Flywheel */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">The Flywheel</h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            A funded protocol creates a self-reinforcing loop. Each step enables the next.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {flywheelSteps.map((step, i) => (
              <div key={step.label} className="relative rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
                  {i + 1}
                </div>
                <p className="font-semibold text-[var(--text-primary)]">{step.label}</p>
                <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-5">
            <p className="text-sm text-[var(--color-text-muted)]">
              <span className="font-medium text-[var(--color-primary)]">This is not speculation.</span>{' '}
              It is the same mechanism that funds Ethereum&apos;s development today — except ETC&apos;s basefee went to no one until Olympia. The flywheel already exists. Olympia connects ETC to it.
            </p>
          </div>
        </div>
      </section>

      {/* Miner's Stake */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">The Miner&apos;s Stake</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            <p>
              Miners have more to gain from Olympia than any other participant class. Block rewards are untouched. Priority fees go directly to miners. The basefee — previously discarded — now funds the development that makes ETC worth mining.
            </p>
            <p>
              Every dApp that deploys on ETC because of Olympia-funded development generates transactions. Every transaction generates basefee and priority fees. Both grow miner revenue. Active ETC development is miner development.
            </p>
            <p>
              The alternative — a network that does not grow transaction volume, where block rewards continue to fifthened, and where fee income never materializes — is not a long-term security model. It is a slow exit. The only viable path for PoW miners who want ETC to still exist in 10 years is a network with an active fee market.
            </p>
            <p className="font-medium text-[var(--text-primary)]">
              Olympia is not a threat to miners. It is the mechanism that aligns the rest of the protocol ecosystem with miner interests for the first time.
            </p>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Understand the full picture</h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              The fee market is one piece. Olympia is the governance and funding mechanism that enables it. The fifthing schedule is the deadline.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/olympia"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--background)] transition-all hover:opacity-90"
              >
                Olympia Hub
              </Link>
              <Link
                href="/olympia/miners"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30"
              >
                Miners &amp; Olympia
              </Link>
              <Link
                href="/block-reward-countdown"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30"
              >
                Fifthing Countdown
              </Link>
              <Link
                href="/research/fees"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30"
              >
                Fee Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

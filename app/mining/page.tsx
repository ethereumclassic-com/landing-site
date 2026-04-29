import Link from 'next/link'
import PoolCard from './components/PoolCard'
import HashRateChart from './components/HashRateChart'
import HashrateChart from '@/app/components/homepage/HashrateChart'
import FifthingCountdown from '@/app/components/FifthingCountdown'
import { NetworkConfigSection } from './components/NetworkConfigSection'
import { ClientImplementationsSection } from './components/ClientImplementationsSection'
import { MiningOverviewSection } from './components/MiningOverviewSection'
import { MiningEquipmentSection } from './components/MiningEquipmentSection'
import { MiningPoolsSection } from './components/MiningPoolsSection'
import { FeeMarketCallout } from './components/FeeMarketCallout'
import { fetchMiningNetworkStats } from '@/lib/etc-rpc'
import { fetchHashrateTHs } from '@/lib/hashrate'
import {
  miningPools,
  getRecommendedPools,
  miningResources,
} from './data/mining'

function getBlockReward(blockHeight: number): string {
  const era = Math.floor(blockHeight / 5_000_000)
  const reward = 5 * Math.pow(0.8, era)
  return `${reward.toFixed(3)} ETC`
}

export default async function MiningPage() {
  const [stats, hashrateTHs, recommendedPools] = await Promise.all([
    fetchMiningNetworkStats(),
    fetchHashrateTHs(),
    Promise.resolve(getRecommendedPools()),
  ])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient noise-overlay grid-overlay relative overflow-hidden px-6 pb-16 pt-6 md:px-10 md:pb-24 md:pt-8 lg:px-12 lg:pb-32 lg:pt-10">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/10 px-4 py-1.5 text-sm font-medium text-[var(--brand-green)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-green)]" />
              </span>
              Proof of Work · ETChash
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
            <span className="text-[var(--brand-green)]">Mine</span>{' '}
            Ethereum Classic
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
            ETC is the largest Proof of Work smart contract platform. Start mining with GPUs or ASICs using the ETChash algorithm.
          </p>

          {/* Quick Actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/mining/getting-started"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-green)] px-6 py-3 font-medium text-[var(--background)] transition-all hover:bg-[var(--brand-green-hover)] hover:shadow-lg hover:shadow-[var(--brand-green)]/25"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
              Start Mining
            </Link>
            <Link
              href="/mining/pools"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--brand-green)]/30 hover:bg-[var(--brand-green)]/10"
            >
              Browse Pools
            </Link>
            <Link
              href="/mining/hardware"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--brand-green)]/30 hover:bg-[var(--brand-green)]/10"
            >
              Hardware Guide
            </Link>
          </div>

          {/* Live network stat cards */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { label: 'Hashrate', value: `${hashrateTHs.toFixed(2)} TH/s`, live: true },
              { label: 'Difficulty', value: stats.difficultyFormatted, live: true },
              { label: 'Block Time', value: stats.blockTimeFormatted, live: true },
              { label: 'Block Reward', value: getBlockReward(stats.blockHeight), live: true },
              { label: 'Daily Blocks', value: Math.round(86400 / stats.blockTime).toLocaleString(), live: true },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)]/60 px-4 py-3 backdrop-blur-sm"
              >
                <div className="flex items-center gap-1.5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-subtle)]">{stat.label}</p>
                  {stat.live && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                    </span>
                  )}
                </div>
                <p className="mt-1 text-base font-bold text-[var(--brand-green)]">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Hashrate chart */}
          <HashrateChart />
        </div>
      </section>

      {/* New sections */}
      <NetworkConfigSection />
      <ClientImplementationsSection />
      <MiningOverviewSection />
      <MiningEquipmentSection />
      <MiningPoolsSection />

      {/* Fifth Fifthing Countdown */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FifthingCountdown variant="card" />
        </div>
      </section>

      {/* Fee Market Callout */}
      <FeeMarketCallout />

      {/* Hashrate Distribution */}
      <section className="border-t border-[var(--border-default)] bg-[var(--bg-elevated)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Pool Distribution</h2>
              <p className="mt-2 text-[var(--text-secondary)]">
                Choose a pool to join based on hashrate share and features
              </p>
              <div className="mt-6">
                <HashRateChart pools={miningPools} />
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-bold text-[var(--text-primary)]">Recommended Pools</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Trusted pools with good hashrate and features
              </p>
              <div className="mt-4 space-y-3">
                {recommendedPools.map((pool, index) => (
                  <PoolCard key={pool.id} pool={pool} index={index} variant="compact" />
                ))}
              </div>
              <Link
                href="/mining/pools"
                className="mt-4 inline-flex items-center gap-2 text-[var(--brand-green)] transition hover:underline"
              >
                View all pools
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="border-t border-[var(--border-default)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Mining Resources</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/mining/getting-started"
              className="group block rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-all hover:border-[var(--brand-green)]/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-green)]/10">
                <svg aria-hidden="true" className="h-6 w-6 text-[var(--brand-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">
                Getting Started
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Step-by-step guide to start mining ETC today
              </p>
            </Link>

            <Link
              href="/mining/hardware"
              className="group block rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-all hover:border-purple-500/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                <svg aria-hidden="true" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-purple-400">
                Hardware Guide
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Compare GPUs and ASICs for ETC mining
              </p>
            </Link>

            <Link
              href="/mining/pools"
              className="group block rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-all hover:border-blue-500/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <svg aria-hidden="true" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-blue-400">
                Mining Pools
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Find and compare ETC mining pools
              </p>
            </Link>

            <Link
              href="/mining/software"
              className="group block rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-all hover:border-cyan-500/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                <svg aria-hidden="true" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-cyan-400">
                Mining Software
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Download mining software for your hardware
              </p>
            </Link>

            <Link
              href="/mining/os"
              className="group block rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-all hover:border-pink-500/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10">
                <svg aria-hidden="true" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-pink-400">
                Mining OS
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                HiveOS, minerstat, and other mining systems
              </p>
            </Link>

            <Link
              href="/mining/profitability"
              className="group block rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-all hover:border-[var(--color-warning)]/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-warning-bg)]">
                <svg aria-hidden="true" className="h-6 w-6 text-[var(--color-warning)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-warning)]">
                Profitability Calculator
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Calculate your potential mining earnings
              </p>
            </Link>

            <Link
              href="/mining/stats"
              className="group block rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-all hover:border-emerald-500/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                <svg aria-hidden="true" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-emerald-400">
                Network Stats
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Real-time ETC network statistics
              </p>
            </Link>

            <Link
              href="/mining/approaches"
              className="group block rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-all hover:border-purple-500/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                <svg aria-hidden="true" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-purple-400">
                GPU vs ASIC
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Compare mining approaches: flexibility vs efficiency
              </p>
            </Link>

            <Link
              href="/mining/regulation"
              className="group block rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-all hover:border-blue-500/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <svg aria-hidden="true" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-blue-400">
                Mining Policy
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Global regulatory landscape for PoW mining
              </p>
            </Link>

            <Link
              href="/mining/fee-market"
              className="group block rounded-2xl border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/5 p-6 transition-all hover:border-[var(--brand-green)]/40"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-green)]/15">
                <svg aria-hidden="true" className="h-6 w-6 text-[var(--brand-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">
                Olympia &amp; Fee Market
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                How Olympia aligns core dev with miner incentives
              </p>
            </Link>

            <Link
              href="/environmental-impact"
              className="group block rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-all hover:border-lime-500/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-500/10">
                <svg aria-hidden="true" className="h-6 w-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-lime-400">
                Energy Infrastructure
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Stranded energy, flexible load, and the grid story
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="border-t border-[var(--border-default)] bg-[var(--bg-elevated)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">External Resources</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {miningResources.map((resource) => (
              <a
                key={resource.id}
                href={resource.url}
                target={resource.url.startsWith('/') ? undefined : '_blank'}
                rel={resource.url.startsWith('/') ? undefined : 'noopener noreferrer'}
                className="group flex items-center justify-between rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 transition-all hover:border-[var(--brand-green)]/30"
              >
                <div>
                  <span className="font-medium text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">
                    {resource.name}
                  </span>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">{resource.description}</p>
                </div>
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 flex-shrink-0 text-[var(--text-muted)] transition group-hover:text-[var(--brand-green)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {resource.url.startsWith('/') ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  )}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border-default)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Ready to Start Mining?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Follow our getting started guide to set up your mining operation and start earning ETC today.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/mining/getting-started"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-green)] px-6 py-3 font-medium text-[var(--background)] transition-all hover:bg-[var(--brand-green-hover)] hover:shadow-lg hover:shadow-[var(--brand-green)]/25"
              >
                <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
                Get Started
              </Link>
              <Link
                href="/wallet"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--brand-green)]/30 hover:bg-[var(--brand-green)]/10"
              >
                Set Up Wallet
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

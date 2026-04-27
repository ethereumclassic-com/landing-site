'use client'

import Link from 'next/link'
import { useState } from 'react'

const poolStats = {
  hashrate: '12.5 TH/s',
  workers: 1247,
  blocks24h: 18,
  luck: '98.2%',
  fee: 0.9,
  minPayout: 0.1,
  networkShare: '7.2%',
}

// Sample data for pool statistics (would be live data in production)
const recentBlocks = [
  { height: 23856789, time: '2 min ago', reward: '2.05 ETC', finder: '0x1234...5678' },
  { height: 23856756, time: '18 min ago', reward: '2.05 ETC', finder: '0xabcd...efgh' },
  { height: 23856701, time: '45 min ago', reward: '2.05 ETC', finder: '0x9876...5432' },
  { height: 23856654, time: '1 hr ago', reward: '2.05 ETC', finder: '0xfedc...ba98' },
  { height: 23856598, time: '2 hr ago', reward: '2.05 ETC', finder: '0x1111...2222' },
]

const features = [
  {
    title: 'Low 0.9% Fee',
    description: 'Among the lowest pool fees in the ETC ecosystem. Keep more of what you mine.',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'PPLNS Payout',
    description: 'Fair PPLNS reward distribution. Rewards based on your contribution to found blocks.',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: '0.1 ETC Min Payout',
    description: 'Low minimum payout threshold. Get your earnings faster without waiting.',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Global Servers',
    description: 'Stratum servers in US, EU, and Asia. Connect to the lowest latency endpoint.',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Stats',
    description: 'Live hashrate monitoring, worker status, and payout tracking dashboard.',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Email Alerts',
    description: 'Get notified when workers go offline or payouts are sent.',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
]

const servers = [
  { region: 'US East', url: 'us.pool.ethereumclassic.com', port: 3333 },
  { region: 'EU Central', url: 'eu.pool.ethereumclassic.com', port: 3333 },
  { region: 'Asia Pacific', url: 'asia.pool.ethereumclassic.com', port: 3333 },
]

export default function PoolPage() {
  const [selectedServer, setSelectedServer] = useState(servers[0])

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-400">
              Coming Soon
            </span>

            <h1 className="mt-4 text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
              EthereumClassic.com Mining Pool
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
              A community-first mining pool for Ethereum Classic. Low fees, fair payouts, and
              infrastructure built by the ETC community for the ETC community.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                disabled
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)]/50 px-6 py-3 font-medium text-black/50 cursor-not-allowed"
              >
                Start Mining
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <Link
                href="/mining"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
              >
                Explore Mining Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Stats Preview */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">Pool Statistics</h2>
              <span className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2 py-0.5 text-xs text-amber-400">
                Sample Data
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-[var(--bg)] p-4">
                <p className="text-sm text-[var(--color-text-muted)]">Pool Hashrate</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">{poolStats.hashrate}</p>
              </div>
              <div className="rounded-lg bg-[var(--bg)] p-4">
                <p className="text-sm text-[var(--color-text-muted)]">Active Workers</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">{poolStats.workers.toLocaleString()}</p>
              </div>
              <div className="rounded-lg bg-[var(--bg)] p-4">
                <p className="text-sm text-[var(--color-text-muted)]">Blocks (24h)</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">{poolStats.blocks24h}</p>
              </div>
              <div className="rounded-lg bg-[var(--bg)] p-4">
                <p className="text-sm text-[var(--color-text-muted)]">Network Share</p>
                <p className="mt-1 text-2xl font-bold text-[var(--text-primary)]">{poolStats.networkShare}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-8 text-center text-2xl font-bold text-[var(--text-primary)]"
          >
            Pool Features
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">{feature.title}</h3>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection Info */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-6 text-xl font-bold text-[var(--text-primary)]">Connection Details</h2>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">Select Server</label>
              <div className="flex flex-wrap gap-2">
                {servers.map((server) => (
                  <button
                    key={server.region}
                    onClick={() => setSelectedServer(server)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      selectedServer.region === server.region
                        ? 'bg-[var(--color-primary)] text-black'
                        : 'bg-[var(--bg)] text-[var(--color-text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {server.region}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">Stratum URL</label>
                <div className="rounded-lg bg-[var(--bg)] px-4 py-3 font-mono text-sm text-[var(--text-primary)]">
                  stratum+tcp://{selectedServer.url}:{selectedServer.port}
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">Worker Format</label>
                <div className="rounded-lg bg-[var(--bg)] px-4 py-3 font-mono text-sm text-[var(--text-primary)]">
                  YOUR_WALLET.WORKER_NAME
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              Replace YOUR_WALLET with your ETC address and WORKER_NAME with a name for this miner.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Blocks */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">Recent Blocks</h2>
              <span className="text-xs text-[var(--color-text-muted)]">Sample data - pool not yet active</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)] text-left text-sm text-[var(--color-text-muted)]">
                    <th className="pb-3 pr-4 font-medium">Block</th>
                    <th className="pb-3 px-4 font-medium">Time</th>
                    <th className="pb-3 px-4 font-medium">Reward</th>
                    <th className="pb-3 pl-4 font-medium">Finder</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBlocks.map((block) => (
                    <tr key={block.height} className="border-b border-[var(--border)]/50 text-sm">
                      <td className="py-3 pr-4 font-mono text-[var(--color-primary)]">
                        {block.height.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-[var(--color-text-muted)]">{block.time}</td>
                      <td className="py-3 px-4 font-medium text-[var(--text-primary)]">{block.reward}</td>
                      <td className="py-3 pl-4 font-mono text-[var(--color-text-muted)]">{block.finder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Compare with Other Pools */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 text-center"
          >
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Looking for Active Pools?</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              While our pool is being built, check out other great ETC mining pools.
            </p>
            <Link
              href="/mining/pools"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2.5 text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/20"
            >
              Compare Mining Pools
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-400">
              Coming Soon
            </span>
            <h2 className="mt-4 text-2xl font-bold text-[var(--text-primary)]">Pool Launch Notification</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Be the first to know when the EthereumClassic.com Mining Pool goes live.
              Enter your email to join the waitlist.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                disabled
                className="w-full max-w-sm rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--color-text-muted)] opacity-50 sm:w-auto sm:flex-1"
              />
              <button
                disabled
                className="w-full rounded-lg bg-amber-500/50 px-6 py-3 font-medium text-black/50 cursor-not-allowed sm:w-auto"
              >
                Join Waitlist
              </button>
            </div>
            <p className="mt-4 text-xs text-[var(--color-text-muted)]">
              Waitlist signup coming soon. Pool infrastructure under development.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pt-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            This page shows a preview of the upcoming EthereumClassic.com Mining Pool.
            Statistics shown are sample data for demonstration purposes.
            Actual pool launch and parameters subject to change.
          </p>
        </div>
      </section>
    </main>
  )
}

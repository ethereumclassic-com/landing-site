'use client'

import Link from 'next/link'

const ecosystemStats = [
  { label: 'dApps', value: '14+', description: 'Active applications', href: '/apps' },
  { label: 'Wallets', value: '25+', description: 'Supporting ETC', href: '/wallet' },
  { label: 'Exchanges', value: '31+', description: 'Trading venues', href: '/buy' },
  { label: 'Mining Pools', value: '6', description: 'Active pools', href: '/mining/pools' },
]

const ecosystemSections = [
  {
    title: 'DeFi',
    description: 'Decentralized exchanges, lending, stablecoins, and yield opportunities on Ethereum Classic.',
    items: ['ETCswap, the leading DEX with liquidity pools', 'ClassicUSD, the native stablecoin', 'HeightFi for lending and borrowing'],
    href: '/apps/defi',
  },
  {
    title: 'Infrastructure',
    description: 'Node clients, RPC providers, block explorers, and developer tools powering the ETC network.',
    items: ['3 node clients: core-geth, Besu, Fukuii', 'Blockscout explorer', 'Rivet RPC service'],
    href: '/build',
  },
  {
    title: 'Governance',
    description: 'On-chain governance through Olympia DAO, with basefee-funded treasury, Olympia DAO membership, and futarchy.',
    items: ['EIP-1559 basefee treasury funding', 'Olympia DAO NFT voting membership', 'Futarchy prediction markets'],
    href: '/olympia/governance',
  },
  {
    title: 'Mining',
    description: 'Etchash proof-of-work mining ecosystem with GPU and ASIC support.',
    items: ['~185 TH/s network hashrate', '6 active mining pools', 'GPU + ASIC compatible'],
    href: '/mining',
  },
]

export default function ResearchEcosystemPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <div>
              <Link
                href="/research"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Research
              </Link>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">Ecosystem Overview</h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                A snapshot of the Ethereum Classic ecosystem spanning DeFi, infrastructure,
                governance, and mining across the network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {ecosystemStats.map((stat) => (
              <Link
                key={stat.label}
                href={stat.href}
                className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 text-center transition-colors hover:border-[var(--color-primary)]/30"
              >
                <div className="text-3xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                <div className="mt-1 font-medium text-[var(--text-primary)]">{stat.label}</div>
                <div className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Sections */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">Ecosystem Verticals</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {ecosystemSections.map((section) => (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-colors hover:border-[var(--color-primary)]/30"
                >
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                    {section.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{section.description}</p>
                  <ul className="mt-4 space-y-1">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-primary)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
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
              href="/research/reports"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Research Reports
            </Link>
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
            >
              Apps Directory
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

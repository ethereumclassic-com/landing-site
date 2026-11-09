import Link from 'next/link'
import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'
import { apps } from '@/app/apps/data/apps'
import { nodeClients } from '@/app/build/data/build'
import { exchanges } from '@/app/buy/data/exchanges'
import { POOL_DIRECTORY } from '@/app/mining/data/pools'
import { wallets } from '@/app/wallet/data/wallets'

export const metadata: Metadata = {
  title: 'Ecosystem Research',
  description:
    'An overview of the Ethereum Classic ecosystem: the applications, wallets and exchanges that support ETC, grouped by what each one does.',
  alternates: { canonical: 'https://ethereumclassic.com/research/ecosystem' },
  openGraph: { ...OG_BASE },
}

// Counted from the directory each card links to, so a figure cannot drift from the page that lists what it counts.
const ecosystemStats = [
  { label: 'dApps', value: apps.length, description: 'Listed applications', href: '/apps' },
  { label: 'Wallets', value: wallets.length, description: 'Supporting ETC', href: '/wallet' },
  { label: 'Exchanges', value: exchanges.length, description: 'Trading venues', href: '/buy' },
  { label: 'Mining Pools', value: POOL_DIRECTORY.length, description: 'Listed pools', href: '/mining/pools' },
]

const ecosystemSections = [
  {
    title: 'DeFi',
    description: 'Decentralized exchanges, a token launchpad and a USD stablecoin on Ethereum Classic.',
    items: ['ETCswap, a DEX with V2 and V3 liquidity pools', 'ETCswap Launchpad, for launching tokens on a bonding curve', 'Classic USD (USC), a USD-backed stablecoin issued on ETC'],
    href: '/apps/defi',
  },
  {
    title: 'Infrastructure',
    description: 'Node clients, RPC providers, block explorers, and developer tools powering the ETC network.',
    items: [
      `${nodeClients.length} node clients: ${nodeClients.map((client) => client.name).join(' and ')}`,
      'Blockscout explorer',
      'Public RPC endpoints listed on ChainList',
    ],
    href: '/build',
  },
  {
    title: 'Governance',
    description: 'The proposed Olympia DAO would govern a treasury funded by the EIP-1559 base fee, with one CoreNFT vote per member, and would fund Ecosystem Growth DAOs one season at a time.',
    items: ['A treasury funded by the base fee', 'CoreNFT membership voting', 'Ecosystem Growth DAOs, funded by season'],
    href: '/olympia/governance',
  },
  {
    title: 'Mining',
    description: 'Etchash proof-of-work mining ecosystem with GPU and ASIC support.',
    items: ['Live network hashrate and pool shares', `${POOL_DIRECTORY.length} mining pools listed`, 'GPU + ASIC compatible'],
    href: '/mining',
  },
]

export default function ResearchEcosystemPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
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
                A snapshot of the Ethereum Classic ecosystem: DeFi, infrastructure, governance and mining.
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
              href="/research"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--brand-green-foreground)] transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Research Hub
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
    </div>
  )
}

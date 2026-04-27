'use client'

import Link from 'next/link'

const tools = [
  {
    name: 'Price Converter',
    description: 'Convert ETC to USD, EUR, BTC, and 15+ other currencies instantly',
    href: '/markets/converter',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    color: 'bg-blue-500/10 text-blue-400',
    featured: true,
  },
  {
    name: 'Investment Calculator',
    description: 'Calculate potential returns with price targets, ROI projections, and DCA strategies',
    href: '/markets/calculator',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
    color: 'bg-[var(--color-success-bg)] text-[var(--color-success)]',
    featured: true,
  },
  {
    name: 'Gas Tracker',
    description: 'Monitor gas prices to optimize transaction costs and timing',
    href: '/tools/gas',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: 'bg-[var(--color-warning-bg)] text-[var(--color-warning)]',
  },
  {
    name: 'Block Explorers',
    description: 'View transactions, addresses, smart contracts, and blockchain data',
    href: '/tools/explorer',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    color: 'bg-purple-500/10 text-purple-400',
  },
  {
    name: 'Contract Verifier',
    description: 'Verify and publish smart contract source code on Blockscout',
    href: '/tools/verify',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: 'bg-cyan-500/10 text-cyan-400',
  },
]

const externalTools = [
  {
    name: 'Blockscout Explorer',
    description: 'Official ETC block explorer with full transaction history',
    url: 'https://etc.blockscout.com',
    icon: '🔍',
  },
  {
    name: 'WhatToMine',
    description: 'Mining profitability calculator for ETChash',
    url: 'https://whattomine.com/coins/162-etc-etchash',
    icon: '⛏️',
  },
  {
    name: 'Chainlist',
    description: 'Add ETC networks to your wallet with one click',
    url: 'https://chainlist.org/chain/61',
    icon: '🔗',
  },
  {
    name: 'CoinGecko',
    description: 'ETC price tracking and market data',
    url: 'https://www.coingecko.com/en/coins/ethereum-classic',
    icon: '📊',
  },
]

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
                Tools
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Essential tools for Ethereum Classic users. Price converters, investment calculators,
                gas trackers, and block explorers to enhance your ETC experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-6 text-xl font-semibold text-[var(--text-primary)]"
          >
            Featured Tools
          </h2>
          <div
            className="grid gap-6 md:grid-cols-2"
          >
            {tools.filter(t => t.featured).map((tool) => (
              <div key={tool.name}>
                <Link
                  href={tool.href}
                  className="group block rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-6 transition-colors hover:bg-[var(--color-primary)]/10"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${tool.color}`}>
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                        {tool.name}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                        {tool.description}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm text-[var(--color-primary)]">
                        Open Tool
                        <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Tools */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-6 text-xl font-semibold text-[var(--text-primary)]"
          >
            All Tools
          </h2>
          <div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {tools.map((tool) => (
              <div key={tool.name}>
                <Link
                  href={tool.href}
                  className="group block rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30"
                >
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${tool.color}`}>
                    {tool.icon}
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                    {tool.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {tool.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Tools */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">External Resources</h2>
            <p className="mb-4 text-sm text-[var(--color-text-muted)]">
              Trusted third-party tools and resources for the ETC ecosystem:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {externalTools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3 transition-colors hover:border-[var(--color-primary)]/30"
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">{tool.name}</h4>
                      <svg aria-hidden="true" className="h-4 w-4 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </div>
                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">{tool.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Developer Tools CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Building on ETC?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Check out our developer tools including IDEs, frameworks, and testing libraries.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/build/tools"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Developer Tools
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/build/getting-started"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
              >
                Getting Started Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

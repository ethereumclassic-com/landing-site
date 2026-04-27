'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { exchanges } from '../../buy/data/exchanges'

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

export default function DecentralizedExchangesPage() {
  // Filter DEX exchanges
  const dexExchanges = useMemo(() => {
    return exchanges.filter((ex) => ex.type === 'DEX')
  }, [])

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Breadcrumbs */}
      <div className="border-b border-[var(--border)] bg-[var(--panel)]">
        <div className="mx-auto max-w-6xl px-6 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[var(--color-text-muted)] hover:text-[var(--text-primary)]">
              Home
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <Link href="/exchanges" className="text-[var(--color-text-muted)] hover:text-[var(--text-primary)]">
              Exchanges
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <span className="text-[var(--text-primary)]">Decentralized</span>
          </nav>
        </div>
      </div>

      <div className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div
            className="mb-12"
          >
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
                Self-Custody
              </span>
            </div>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Decentralized Exchanges
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Trade Ethereum Classic directly from your wallet. DEXs operate without intermediaries, giving you full control of your funds throughout the trading process.
            </p>
          </div>

          {/* Benefits */}
          <div
            className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { title: 'Non-Custodial', desc: 'You control your keys' },
              { title: 'No KYC', desc: 'Trade anonymously' },
              { title: 'Permissionless', desc: 'Anyone can use' },
              { title: 'Transparent', desc: 'On-chain transactions' },
            ].map((benefit) => (
              <div key={benefit.title} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-center">
                <h3 className="font-semibold text-[var(--text-primary)]">{benefit.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* DEX List */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
              Available DEXs
              <span className="ml-2 text-sm font-normal text-[var(--color-text-muted)]">
                {dexExchanges.length} options
              </span>
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dexExchanges.map((exchange) => (
                <a
                  key={exchange.name}
                  href={exchange.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-all hover:border-[var(--color-primary)]/30"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                        {exchange.name}
                      </h3>
                      {exchange.featured && (
                        <span className="mt-1 inline-block rounded bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                          Featured
                        </span>
                      )}
                    </div>
                    <ExternalLinkIcon />
                  </div>
                  {exchange.description && (
                    <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                      {exchange.description}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {exchange.pairs.map((pair) => (
                      <span key={pair} className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-secondary)]">
                        {pair}
                      </span>
                    ))}
                  </div>
                  {exchange.tradingFee && (
                    <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                      Trading fee: <span className="text-[var(--text-primary)]">{exchange.tradingFee}</span>
                    </p>
                  )}
                </a>
              ))}
            </div>
          </section>

          {/* How it Works */}
          <div
            className="mb-12 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-xl font-bold text-[var(--text-primary)]">How DEXs Work</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  1
                </div>
                <h3 className="font-medium text-[var(--text-primary)]">Connect Wallet</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Connect MetaMask or another ETC-compatible wallet
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  2
                </div>
                <h3 className="font-medium text-[var(--text-primary)]">Select Tokens</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Choose the tokens you want to swap
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  3
                </div>
                <h3 className="font-medium text-[var(--text-primary)]">Confirm Swap</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Sign the transaction and tokens are exchanged directly
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            className="text-center"
          >
            <Link
              href="/exchanges"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--background)] transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              View All Exchanges
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

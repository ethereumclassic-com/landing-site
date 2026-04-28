'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { exchanges } from '../../buy/data/exchanges'

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

export default function NoKYCExchangesPage() {
  // Filter exchanges that don't require KYC
  const noKycExchanges = useMemo(() => {
    return exchanges.filter((ex) => ex.kycRequired === false)
  }, [])

  // Separate DEXs and CEXs
  const dexExchanges = noKycExchanges.filter((ex) => ex.type === 'DEX')
  const cexExchanges = noKycExchanges.filter((ex) => ex.type === 'CEX')

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
            <span className="text-[var(--text-primary)]">No KYC</span>
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
                Privacy-Focused
              </span>
            </div>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              No KYC Exchanges
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Trade Ethereum Classic without identity verification. These exchanges and DEXs allow you to buy, sell, and trade ETC while maintaining your privacy.
            </p>
          </div>

          {/* Privacy Notice */}
          <div
            className="mb-12 rounded-xl border border-blue-500/20 bg-blue-500/5 p-6"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg aria-hidden="true" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">About No-KYC Trading</h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  No-KYC exchanges don&apos;t require identity verification for basic trading. DEXs (decentralized exchanges) never require KYC as they operate without intermediaries. Some CEXs allow limited trading without KYC but may have withdrawal limits.
                </p>
              </div>
            </div>
          </div>

          {/* DEX Section */}
          {dexExchanges.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
                Decentralized Exchanges (DEX)
                <span className="ml-2 text-sm font-normal text-[var(--color-text-muted)]">
                  No KYC ever required
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
                        <span className="mt-1 inline-block rounded bg-[var(--color-success-bg)] px-2 py-0.5 text-xs text-[var(--color-success)]">
                          DEX
                        </span>
                      </div>
                      <ExternalLinkIcon />
                    </div>
                    {exchange.description && (
                      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                        {exchange.description}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-1">
                      {exchange.pairs.slice(0, 3).map((pair) => (
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
          )}

          {/* CEX Section */}
          {cexExchanges.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
                Centralized Exchanges (No KYC Option)
                <span className="ml-2 text-sm font-normal text-[var(--color-text-muted)]">
                  May have limits without KYC
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cexExchanges.map((exchange) => (
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
                        <span className="mt-1 inline-block rounded bg-blue-500/10 px-2 py-0.5 text-xs text-blue-400">
                          CEX
                        </span>
                      </div>
                      <ExternalLinkIcon />
                    </div>
                    {exchange.description && (
                      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                        {exchange.description}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-1">
                      {exchange.pairs.slice(0, 3).map((pair) => (
                        <span key={pair} className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-secondary)]">
                          {pair}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      {exchange.tradingFee && (
                        <span className="text-[var(--color-text-muted)]">
                          Fee: <span className="text-[var(--text-primary)]">{exchange.tradingFee}</span>
                        </span>
                      )}
                      {exchange.volume24h && exchange.volume24h !== 'DEX' && (
                        <span className="text-[var(--color-text-muted)]">
                          Vol: <span className="text-[var(--text-primary)]">{exchange.volume24h}</span>
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Stats */}
          <div
            className="mb-12 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-primary)]">{noKycExchanges.length}</div>
                <div className="mt-1 text-sm text-[var(--color-text-muted)]">No-KYC Options</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-primary)]">{dexExchanges.length}</div>
                <div className="mt-1 text-sm text-[var(--color-text-muted)]">DEXs (Always No KYC)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-primary)]">{cexExchanges.length}</div>
                <div className="mt-1 text-sm text-[var(--color-text-muted)]">CEXs with No-KYC Option</div>
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

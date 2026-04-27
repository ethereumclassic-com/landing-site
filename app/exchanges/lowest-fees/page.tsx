'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { exchanges } from '../../buy/data/exchanges'

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

function parseFeePercent(fee: string | undefined): number {
  if (!fee) return Infinity
  const match = fee.match(/(\d+\.?\d*)%/)
  return match ? parseFloat(match[1]) : Infinity
}

export default function LowestFeesExchangesPage() {
  // Sort exchanges by trading fee (lowest first)
  const sortedExchanges = useMemo(() => {
    return exchanges
      .filter((ex) => ex.tradingFee && ex.type === 'CEX')
      .sort((a, b) => parseFeePercent(a.tradingFee) - parseFeePercent(b.tradingFee))
  }, [])

  // Group by fee tier
  const lowFees = sortedExchanges.filter((ex) => parseFeePercent(ex.tradingFee) <= 0.1)
  const mediumFees = sortedExchanges.filter((ex) => {
    const fee = parseFeePercent(ex.tradingFee)
    return fee > 0.1 && fee <= 0.2
  })
  const standardFees = sortedExchanges.filter((ex) => parseFeePercent(ex.tradingFee) > 0.2)

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
            <span className="text-[var(--text-primary)]">Lowest Fees</span>
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
                Save on Trading
              </span>
            </div>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Lowest Fee Exchanges
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Maximize your ETC holdings by trading on exchanges with the lowest fees. Compare trading fees across major platforms.
            </p>
          </div>

          {/* Fee Comparison Overview */}
          <div
            className="mb-12 grid gap-4 sm:grid-cols-3"
          >
            <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center">
              <p className="text-2xl font-bold text-green-400">&le;0.1%</p>
              <p className="text-sm text-[var(--color-text-muted)]">{lowFees.length} Low Fee Exchanges</p>
            </div>
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-center">
              <p className="text-2xl font-bold text-yellow-400">0.1-0.2%</p>
              <p className="text-sm text-[var(--color-text-muted)]">{mediumFees.length} Medium Fee Exchanges</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 text-center">
              <p className="text-2xl font-bold text-[var(--color-text-secondary)]">&gt;0.2%</p>
              <p className="text-sm text-[var(--color-text-muted)]">{standardFees.length} Standard Fee Exchanges</p>
            </div>
          </div>

          {/* Fee Tip */}
          <div
            className="mb-12 rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 p-5"
          >
            <div className="flex items-start gap-3">
              <svg aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">Pro Tip: Consider Total Cost</h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  Trading fees are just one factor. Also consider withdrawal fees, spread, and deposit methods. Some exchanges with higher trading fees offer lower withdrawal fees or better liquidity.
                </p>
              </div>
            </div>
          </div>

          {/* Low Fee Exchanges */}
          {lowFees.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[var(--text-primary)]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-sm text-green-400">1</span>
                Lowest Fees (&le;0.1%)
                <span className="text-sm font-normal text-[var(--color-text-muted)]">
                  {lowFees.length} exchanges
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {lowFees.map((exchange) => (
                  <a
                    key={exchange.name}
                    href={exchange.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-green-500/20 bg-[var(--panel)] p-5 transition-all hover:border-green-500/40"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-green-400">
                          {exchange.name}
                        </h3>
                        {exchange.featured && (
                          <span className="mt-1 inline-block rounded bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-sm font-semibold text-green-400">
                          {exchange.tradingFee}
                        </span>
                        <ExternalLinkIcon />
                      </div>
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
                    {exchange.withdrawalFee && (
                      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                        Withdrawal: <span className="text-[var(--text-primary)]">{exchange.withdrawalFee}</span>
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Medium Fee Exchanges */}
          {mediumFees.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[var(--text-primary)]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/20 text-sm text-yellow-400">2</span>
                Competitive Fees (0.1-0.2%)
                <span className="text-sm font-normal text-[var(--color-text-muted)]">
                  {mediumFees.length} exchanges
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mediumFees.map((exchange) => (
                  <a
                    key={exchange.name}
                    href={exchange.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-all hover:border-yellow-500/30"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-yellow-400">
                          {exchange.name}
                        </h3>
                        {exchange.featured && (
                          <span className="mt-1 inline-block rounded bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-yellow-500/20 px-2 py-0.5 text-sm font-semibold text-yellow-400">
                          {exchange.tradingFee}
                        </span>
                        <ExternalLinkIcon />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {exchange.pairs.slice(0, 3).map((pair) => (
                        <span key={pair} className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-secondary)]">
                          {pair}
                        </span>
                      ))}
                    </div>
                    {exchange.withdrawalFee && (
                      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                        Withdrawal: <span className="text-[var(--text-primary)]">{exchange.withdrawalFee}</span>
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Standard Fee Exchanges */}
          {standardFees.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[var(--text-primary)]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--panel)] text-sm text-[var(--color-text-muted)]">3</span>
                Standard Fees (&gt;0.2%)
                <span className="text-sm font-normal text-[var(--color-text-muted)]">
                  {standardFees.length} exchanges
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {standardFees.map((exchange) => (
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
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-[var(--bg)] px-2 py-0.5 text-sm font-semibold text-[var(--color-text-secondary)]">
                          {exchange.tradingFee}
                        </span>
                        <ExternalLinkIcon />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {exchange.pairs.slice(0, 3).map((pair) => (
                        <span key={pair} className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-secondary)]">
                          {pair}
                        </span>
                      ))}
                    </div>
                    {exchange.withdrawalFee && (
                      <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                        Withdrawal: <span className="text-[var(--text-primary)]">{exchange.withdrawalFee}</span>
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* DEX Note */}
          <div
            className="mb-12 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">What About DEXs?</h2>
            <p className="text-[var(--color-text-secondary)]">
              Decentralized exchanges like ETCswap typically charge 0.3% per swap, but you avoid deposit/withdrawal fees entirely since you trade directly from your wallet. For frequent traders, DEXs can be more cost-effective.
            </p>
            <Link
              href="/exchanges/decentralized"
              className="mt-4 inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline"
            >
              Explore DEXs
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
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

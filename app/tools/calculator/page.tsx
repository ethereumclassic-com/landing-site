'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePrice } from '@/app/hooks/usePrice'

const presets = [
  { label: '$100', value: 100 },
  { label: '$500', value: 500 },
  { label: '$1,000', value: 1000 },
  { label: '$5,000', value: 5000 },
  { label: '$10,000', value: 10000 },
]

export default function ToolsCalculatorPage() {
  const { price: etcPrice, change24h, loading, source } = usePrice('usd')
  const [investment, setInvestment] = useState(1000)
  const [buyPrice, setBuyPrice] = useState('')

  // NaN carries "no live price" through the arithmetic, and fmt shows it as a dash.
  const livePrice = etcPrice ?? NaN
  const fmt = (n: number, format: (v: number) => string) => (Number.isFinite(n) ? format(n) : '—')
  const usd = (v: number) => `$${v.toFixed(2)}`
  const signedUsd = (v: number) => `${v >= 0 ? '+' : ''}$${v.toFixed(2)}`
  const entryPrice = buyPrice ? parseFloat(buyPrice) : livePrice
  const etcAmount = investment / entryPrice
  const currentValue = etcAmount * livePrice
  const pnl = currentValue - investment
  const roi = investment > 0 ? ((currentValue - investment) / investment) * 100 : 0

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <div>
              <Link
                href="/tools"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Tools
              </Link>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
                Investment Calculator
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Calculate potential returns on your Ethereum Classic investment.
                Enter an amount and optional entry price to see your position value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="grid gap-8 lg:grid-cols-2"
          >
            {/* Input Panel */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h2 className="mb-6 text-lg font-semibold text-[var(--text-primary)]">Your Investment</h2>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">
                    Investment Amount (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">$</span>
                    <input
                      type="number"
                      value={investment}
                      onChange={(e) => setInvestment(Math.max(0, Number(e.target.value)))}
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 pl-8 text-lg font-medium text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--color-primary)]"
                      min="0"
                      step="100"
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {presets.map((preset) => (
                      <button
                        key={preset.value}
                        onClick={() => setInvestment(preset.value)}
                        className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                          investment === preset.value
                            ? 'bg-[var(--color-primary)] text-[var(--brand-green-foreground)]'
                            : 'bg-[var(--bg)] text-[var(--color-text-muted)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">
                    Entry Price (USD, optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">$</span>
                    <input
                      type="number"
                      value={buyPrice}
                      onChange={(e) => setBuyPrice(e.target.value)}
                      placeholder={fmt(livePrice, (v) => v.toFixed(2))}
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 pl-8 text-lg font-medium text-[var(--text-primary)] placeholder:text-[var(--color-text-muted)]/50 outline-none transition-colors focus:border-[var(--color-primary)]"
                      min="0.01"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="space-y-4">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
                <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Position Summary</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <span className="text-[var(--color-text-muted)]">ETC Amount</span>
                    <span className="text-lg font-bold text-[var(--text-primary)]">{fmt(etcAmount, (v) => `${v.toFixed(4)} ETC`)}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <span className="text-[var(--color-text-muted)]">Entry Price</span>
                    <span className="font-medium text-[var(--text-primary)]">{fmt(entryPrice, usd)}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <span className="text-[var(--color-text-muted)]">Current Price</span>
                    <span className="font-medium text-[var(--text-primary)]">
                      {fmt(livePrice, usd)}
                      {change24h !== null && (
                        <span className={`ml-2 text-sm ${change24h >= 0 ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}`}>
                          {change24h >= 0 ? '+' : ''}{change24h.toFixed(2)}%
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <span className="text-[var(--color-text-muted)]">Current Value</span>
                    <span className="text-xl font-bold text-[var(--text-primary)]">{fmt(currentValue, usd)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--color-text-muted)]">P&L</span>
                    <div className="text-right">
                      <span className={`text-xl font-bold ${pnl >= 0 ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}`}>
                        {fmt(pnl, signedUsd)}
                      </span>
                      <span className={`ml-2 text-sm ${roi >= 0 ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}`}>
                        {fmt(roi, (v) => `(${v >= 0 ? '+' : ''}${v.toFixed(1)}%)`)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-4 text-center">
                {loading ? (
                  <span className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-warning)]" />
                    Loading live prices...
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-success)]" />
                    </span>
                    {source === 'blockscout'
                      ? 'Live price from Blockscout, standing in for CoinGecko'
                      : source === 'coingecko'
                        ? 'Live price from CoinGecko, updated about every 10 minutes'
                        : 'The live price is unavailable right now'}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenario Table */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
          >
            <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">Price Scenarios</h2>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[var(--bg)]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[var(--color-text-muted)]">ETC Price</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-[var(--color-text-muted)]">Value</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-[var(--color-text-muted)]">P&L</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-[var(--color-text-muted)]">ROI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)]">
                    {[0.5, 0.75, 1, 1.5, 2, 3, 5, 10].map((multiplier) => {
                      const scenarioPrice = livePrice * multiplier
                      const scenarioValue = etcAmount * scenarioPrice
                      const scenarioPnl = scenarioValue - investment
                      const scenarioRoi = investment > 0 ? ((scenarioValue - investment) / investment) * 100 : 0
                      const isCurrent = multiplier === 1
                      return (
                        <tr key={multiplier} className={isCurrent ? 'bg-[var(--color-primary)]/5' : 'hover:bg-[var(--bg)]/50'}>
                          <td className="px-4 py-3">
                            <span className="font-medium text-[var(--text-primary)]">{fmt(scenarioPrice, usd)}</span>
                            {isCurrent && (
                              <span className="ml-2 rounded bg-[var(--color-primary)]/20 px-1.5 py-0.5 text-xs text-[var(--color-primary)]">
                                current
                              </span>
                            )}
                            {!isCurrent && (
                              <span className="ml-2 text-xs text-[var(--color-text-muted)]">
                                {multiplier < 1 ? `${((1 - multiplier) * 100).toFixed(0)}% drop` : `${((multiplier - 1) * 100).toFixed(0)}% gain`}
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-right font-mono text-sm text-[var(--text-primary)]">
                            {fmt(scenarioValue, usd)}
                          </td>
                          <td className={`px-4 py-3 text-right font-mono text-sm ${scenarioPnl >= 0 ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}`}>
                            {fmt(scenarioPnl, signedUsd)}
                          </td>
                          <td className={`px-4 py-3 text-right font-mono text-sm ${scenarioRoi >= 0 ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}`}>
                            {fmt(scenarioRoi, (v) => `${v >= 0 ? '+' : ''}${v.toFixed(1)}%`)}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dollar-cost averaging */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Dollar-Cost Averaging</h2>
          <p className="mt-2 mb-6 text-sm text-[var(--color-text-muted)]">
            The ETC a fixed monthly amount buys over time, at a constant{' '}
            {Number.isFinite(entryPrice) ? `$${entryPrice.toFixed(2)} per ETC` : 'price'}. Actual results vary
            with the price.
          </p>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[var(--bg)]">
                  <tr className="border-b border-[var(--border)]">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]">Monthly</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[var(--text-primary)]">6 Months</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[var(--text-primary)]">1 Year</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[var(--text-primary)]">2 Years</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-[var(--text-primary)]">5 Years</th>
                  </tr>
                </thead>
                <tbody>
                  {[50, 100, 250, 500, 1000].map((monthly) => {
                    const monthlyEtc = monthly / entryPrice
                    const etc = (months: number) => fmt(monthlyEtc * months, (v) => `${v.toFixed(2)} ETC`)
                    return (
                      <tr key={monthly} className="border-b border-[var(--border)]/50 last:border-0">
                        <td className="px-4 py-3 font-medium text-[var(--text-primary)]">${monthly}/mo</td>
                        <td className="px-4 py-3 text-right text-[var(--color-text-secondary)]">{etc(6)}</td>
                        <td className="px-4 py-3 text-right text-[var(--color-text-secondary)]">{etc(12)}</td>
                        <td className="px-4 py-3 text-right text-[var(--color-text-secondary)]">{etc(24)}</td>
                        <td className="px-4 py-3 text-right text-[var(--color-primary)]">{etc(60)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/tools/converter"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--brand-green-foreground)] transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Price Converter
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/buy"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
            >
              Buy ETC
            </Link>
            <Link
              href="/markets"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
            >
              Markets
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

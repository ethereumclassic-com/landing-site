'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePrice, useAllPrices } from '@/app/hooks/usePrice'

const currencies = [
  { code: 'usd', symbol: '$', name: 'US Dollar' },
  { code: 'eur', symbol: '€', name: 'Euro' },
  { code: 'gbp', symbol: '£', name: 'British Pound' },
  { code: 'jpy', symbol: '¥', name: 'Japanese Yen' },
  { code: 'cad', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'aud', symbol: 'A$', name: 'Australian Dollar' },
  { code: 'chf', symbol: 'CHF', name: 'Swiss Franc' },
  { code: 'cny', symbol: '¥', name: 'Chinese Yuan' },
  { code: 'btc', symbol: '₿', name: 'Bitcoin' },
  { code: 'eth', symbol: 'Ξ', name: 'Ethereum' },
]

export default function ToolsConverterPage() {
  const { price: etcUsd, change24h, loading } = usePrice('usd')
  const { prices } = useAllPrices()

  const [amount, setAmount] = useState('1')
  const [direction, setDirection] = useState<'etc-to-fiat' | 'fiat-to-etc'>('etc-to-fiat')
  const [selectedCurrency, setSelectedCurrency] = useState('usd')

  const livePrice = etcUsd ?? 25
  const numAmount = parseFloat(amount) || 0

  const getRate = (code: string): number => {
    if (prices && prices[code]) return prices[code]
    if (code === 'usd') return livePrice
    return livePrice // fallback
  }

  const rate = getRate(selectedCurrency)
  const selectedInfo = currencies.find((c) => c.code === selectedCurrency)!

  const converted =
    direction === 'etc-to-fiat' ? numAmount * rate : rate > 0 ? numAmount / rate : 0

  const formatConverted = (val: number, code: string) => {
    const crypto = ['btc', 'eth']
    if (crypto.includes(code) && direction === 'etc-to-fiat') return val.toFixed(8)
    if (direction === 'fiat-to-etc') return val.toFixed(6)
    if (code === 'jpy' || code === 'cny') return val.toFixed(0)
    return val.toFixed(2)
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
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
                Price Converter
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Convert Ethereum Classic to any currency instantly. Real-time exchange
                rates updated every 60 seconds from CoinGecko.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Converter */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            {/* From */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-text-muted)]">
                {direction === 'etc-to-fiat' ? 'ETC Amount' : `${selectedInfo.name} Amount`}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-[var(--color-text-muted)]">
                  {direction === 'etc-to-fiat' ? 'ETC' : selectedInfo.symbol}
                </span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-4 pl-16 text-2xl font-bold text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--color-primary)]"
                  min="0"
                  step="any"
                />
              </div>
            </div>

            {/* Swap Button */}
            <div className="my-4 flex justify-center">
              <button
                onClick={() => setDirection(direction === 'etc-to-fiat' ? 'fiat-to-etc' : 'etc-to-fiat')}
                className="rounded-full border border-[var(--border)] bg-[var(--bg)] p-3 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--text-primary)]"
              >
                <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
              </button>
            </div>

            {/* To */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-text-muted)]">
                {direction === 'etc-to-fiat' ? `${selectedInfo.name} Value` : 'ETC Amount'}
              </label>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-4">
                <span className="text-lg font-bold text-[var(--color-text-muted)]">
                  {direction === 'etc-to-fiat' ? selectedInfo.symbol : 'ETC'}{' '}
                </span>
                <span className="text-2xl font-bold text-[var(--text-primary)]">
                  {formatConverted(converted, direction === 'etc-to-fiat' ? selectedCurrency : 'etc')}
                </span>
              </div>
            </div>

            {/* Currency Selector */}
            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">Currency</label>
              <div className="grid grid-cols-5 gap-2">
                {currencies.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setSelectedCurrency(c.code)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      selectedCurrency === c.code
                        ? 'bg-[var(--color-primary)] text-black'
                        : 'bg-[var(--bg)] text-[var(--color-text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {c.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Rate Info */}
            <div className="mt-6 flex items-center justify-between rounded-lg bg-[var(--bg)] px-4 py-3">
              <span className="text-sm text-[var(--color-text-muted)]">
                1 ETC = {selectedInfo.symbol}{formatConverted(rate, selectedCurrency)}
              </span>
              <span className="text-sm">
                {loading ? (
                  <span className="inline-flex items-center gap-2 text-[var(--color-text-muted)]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-warning)]" />
                    Loading...
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 text-[var(--color-text-muted)]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-success)]" />
                    </span>
                    Live
                    {change24h !== null && (
                      <span className={change24h >= 0 ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}>
                        {change24h >= 0 ? '+' : ''}{change24h.toFixed(2)}%
                      </span>
                    )}
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference Table */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div
          >
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Quick Reference</h2>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[var(--bg)]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[var(--color-text-muted)]">ETC</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-[var(--color-text-muted)]">{selectedInfo.code.toUpperCase()}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)]">
                    {[0.1, 0.5, 1, 5, 10, 25, 50, 100].map((qty) => (
                      <tr key={qty} className="hover:bg-[var(--bg)]/50">
                        <td className="px-4 py-2.5 font-mono text-sm text-[var(--text-primary)]">{qty} ETC</td>
                        <td className="px-4 py-2.5 text-right font-mono text-sm text-[var(--color-success)]">
                          {selectedInfo.symbol}{formatConverted(qty * rate, selectedCurrency)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
              href="/tools/calculator"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Investment Calculator
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
    </main>
  )
}

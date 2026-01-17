'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { currencies, sampleRates, getCurrencyByCode, formatCurrency } from '../data/markets'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

// Quick conversion amounts
const quickAmounts = [1, 10, 100, 1000]

export default function ConverterPage() {
  const [fromCurrency, setFromCurrency] = useState('ETC')
  const [toCurrency, setToCurrency] = useState('USD')
  const [amount, setAmount] = useState('1')

  const fromInfo = getCurrencyByCode(fromCurrency)
  const toInfo = getCurrencyByCode(toCurrency)

  const convertedAmount = useMemo(() => {
    const numAmount = parseFloat(amount) || 0
    if (numAmount === 0) return 0

    // Get the rate
    let rate: number | undefined

    // Direct ETC rate
    if (fromCurrency === 'ETC') {
      rate = sampleRates[`ETC-${toCurrency}`]
    } else if (toCurrency === 'ETC') {
      const inverseRate = sampleRates[`ETC-${fromCurrency}`]
      rate = inverseRate ? 1 / inverseRate : undefined
    } else {
      // Cross rate through ETC
      const fromEtcRate = sampleRates[`ETC-${fromCurrency}`]
      const toEtcRate = sampleRates[`ETC-${toCurrency}`]
      if (fromEtcRate && toEtcRate) {
        rate = toEtcRate / fromEtcRate
      }
    }

    return rate ? numAmount * rate : 0
  }, [amount, fromCurrency, toCurrency])

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const rate = useMemo(() => {
    if (fromCurrency === 'ETC') {
      return sampleRates[`ETC-${toCurrency}`]
    } else if (toCurrency === 'ETC') {
      const inverseRate = sampleRates[`ETC-${fromCurrency}`]
      return inverseRate ? 1 / inverseRate : undefined
    } else {
      const fromEtcRate = sampleRates[`ETC-${fromCurrency}`]
      const toEtcRate = sampleRates[`ETC-${toCurrency}`]
      if (fromEtcRate && toEtcRate) {
        return toEtcRate / fromEtcRate
      }
    }
    return undefined
  }, [fromCurrency, toCurrency])

  // Group currencies by type
  const cryptoCurrencies = currencies.filter((c) => c.type === 'crypto')
  const stablecoins = currencies.filter((c) => c.type === 'stablecoin')
  const fiatCurrencies = currencies.filter((c) => c.type === 'fiat')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl text-center"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeInUp} className="mb-6">
            <Link
              href="/markets"
              className="inline-flex items-center gap-1 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to Markets
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
              Price Tool
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            ETC Price{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Converter
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Convert between ETC and other currencies. Get real-time exchange rates for fiat, crypto, and stablecoins.
          </motion.p>
        </motion.div>
      </section>

      {/* Converter Tool */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 md:p-8"
          >
            {/* From Currency */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-text-muted)]">From</label>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-xl font-semibold text-white outline-none transition-colors focus:border-[var(--color-primary)]"
                  placeholder="0"
                  min="0"
                  step="any"
                />
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-32 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-3 text-white outline-none transition-colors focus:border-[var(--color-primary)]"
                >
                  <optgroup label="Crypto">
                    {cryptoCurrencies.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Stablecoins">
                    {stablecoins.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Fiat">
                    {fiatCurrencies.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
              {fromInfo && (
                <p className="text-sm text-[var(--color-text-muted)]">{fromInfo.name}</p>
              )}
            </div>

            {/* Swap Button */}
            <div className="my-4 flex justify-center">
              <button
                onClick={swapCurrencies}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--color-text-muted)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
              </button>
            </div>

            {/* To Currency */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-text-muted)]">To</label>
              <div className="flex gap-3">
                <div className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3">
                  <p className="text-xl font-semibold text-white">
                    {toInfo ? formatCurrency(convertedAmount, toInfo) : convertedAmount.toFixed(8)}
                  </p>
                </div>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-32 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-3 text-white outline-none transition-colors focus:border-[var(--color-primary)]"
                >
                  <optgroup label="Crypto">
                    {cryptoCurrencies.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Stablecoins">
                    {stablecoins.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Fiat">
                    {fiatCurrencies.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
              {toInfo && (
                <p className="text-sm text-[var(--color-text-muted)]">{toInfo.name}</p>
              )}
            </div>

            {/* Exchange Rate */}
            {rate && (
              <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--color-text-muted)]">Exchange Rate</span>
                  <span className="text-sm font-medium text-white">
                    1 {fromCurrency} = {rate < 0.01 ? rate.toFixed(8) : rate.toLocaleString('en-US', { maximumFractionDigits: 4 })} {toCurrency}
                  </span>
                </div>
              </div>
            )}

            {/* Quick Amounts */}
            <div className="mt-6">
              <p className="mb-3 text-sm text-[var(--color-text-muted)]">Quick amounts</p>
              <div className="flex flex-wrap gap-2">
                {quickAmounts.map((quickAmount) => (
                  <button
                    key={quickAmount}
                    onClick={() => setAmount(quickAmount.toString())}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                      amount === quickAmount.toString()
                        ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                        : 'border-[var(--border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)]/30 hover:text-white'
                    }`}
                  >
                    {quickAmount} {fromCurrency}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Data source note */}
          <p className="mt-4 text-center text-sm text-[var(--color-text-muted)]">
            Rates are indicative. Actual rates may vary by exchange.{' '}
            <Link href="https://www.coingecko.com/en/coins/ethereum-classic" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
              View live rates
            </Link>
          </p>
        </div>
      </section>

      {/* Conversion Table */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">ETC Conversion Table</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Quick reference for common ETC conversions
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-white">ETC Amount</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-white">USD</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-white">EUR</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-white">BTC</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-white">ETH</th>
                </tr>
              </thead>
              <tbody>
                {[0.1, 0.5, 1, 5, 10, 50, 100, 500, 1000].map((etcAmount) => (
                  <motion.tr
                    key={etcAmount}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-b border-[var(--border)]/50"
                  >
                    <td className="px-4 py-3 font-medium text-white">{etcAmount} ETC</td>
                    <td className="px-4 py-3 text-right text-[var(--color-text-secondary)]">
                      ${(etcAmount * (sampleRates['ETC-USD'] || 0)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--color-text-secondary)]">
                      &euro;{(etcAmount * (sampleRates['ETC-EUR'] || 0)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--color-text-secondary)]">
                      {(etcAmount * (sampleRates['ETC-BTC'] || 0)).toFixed(8)} BTC
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--color-text-secondary)]">
                      {(etcAmount * (sampleRates['ETC-ETH'] || 0)).toFixed(6)} ETH
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Popular Conversions */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Popular Conversions</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Frequently used ETC conversion pairs
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { from: 'ETC', to: 'USD', rate: sampleRates['ETC-USD'] },
              { from: 'ETC', to: 'EUR', rate: sampleRates['ETC-EUR'] },
              { from: 'ETC', to: 'BTC', rate: sampleRates['ETC-BTC'] },
              { from: 'ETC', to: 'ETH', rate: sampleRates['ETC-ETH'] },
            ].map(({ from, to, rate: pairRate }) => (
              <motion.div
                key={`${from}-${to}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30"
              >
                <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                  <span>{from}</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span>{to}</span>
                </div>
                <p className="mt-2 text-lg font-semibold text-white">
                  1 {from} = {pairRate && (pairRate < 0.01 ? pairRate.toFixed(8) : pairRate.toLocaleString('en-US', { maximumFractionDigits: 4 }))} {to}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Ready to Buy ETC?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Get ETC at the best rates on trusted exchanges
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/buy"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
                Buy ETC
              </Link>
              <Link
                href="/markets/calculator"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                Investment Calculator
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

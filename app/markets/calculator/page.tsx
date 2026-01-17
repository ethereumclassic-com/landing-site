'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { sampleRates } from '../data/markets'

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

// Historical ATH for comparison
const ATH_PRICE = 176.16
const CURRENT_PRICE = sampleRates['ETC-USD']

// Preset future prices for scenarios
const priceScenarios = [
  { label: 'Conservative', price: 30, change: '+63%' },
  { label: 'Moderate', price: 50, change: '+172%' },
  { label: 'Optimistic', price: 100, change: '+443%' },
  { label: 'ATH', price: ATH_PRICE, change: '+856%' },
]

export default function CalculatorPage() {
  const [investmentAmount, setInvestmentAmount] = useState('1000')
  const [etcPrice, setEtcPrice] = useState(CURRENT_PRICE.toString())
  const [futurePrice, setFuturePrice] = useState('50')

  const calculations = useMemo(() => {
    const investment = parseFloat(investmentAmount) || 0
    const buyPrice = parseFloat(etcPrice) || CURRENT_PRICE
    const sellPrice = parseFloat(futurePrice) || buyPrice

    const etcAmount = investment / buyPrice
    const futureValue = etcAmount * sellPrice
    const profit = futureValue - investment
    const profitPercent = investment > 0 ? ((futureValue - investment) / investment) * 100 : 0

    return {
      etcAmount,
      futureValue,
      profit,
      profitPercent,
      breakEvenMultiple: investment > 0 ? buyPrice / sellPrice : 0,
    }
  }, [investmentAmount, etcPrice, futurePrice])

  const formatUSD = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

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
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
              </svg>
              Investment Tool
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Investment{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Calculator
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Calculate potential returns on your ETC investment. Explore different price scenarios and plan your strategy.
          </motion.p>
        </motion.div>
      </section>

      {/* Calculator Tool */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <h2 className="mb-6 text-lg font-semibold text-white">Investment Details</h2>

              {/* Investment Amount */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">
                  Investment Amount (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">$</span>
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-3 pl-8 pr-4 text-lg font-semibold text-white outline-none transition-colors focus:border-[var(--color-primary)]"
                    placeholder="1000"
                    min="0"
                  />
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[100, 500, 1000, 5000, 10000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setInvestmentAmount(amount.toString())}
                      className={`rounded-lg border px-3 py-1 text-sm transition-all ${
                        investmentAmount === amount.toString()
                          ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                          : 'border-[var(--border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)]/30'
                      }`}
                    >
                      ${amount.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Buy Price */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">
                  Buy Price (USD per ETC)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">$</span>
                  <input
                    type="number"
                    value={etcPrice}
                    onChange={(e) => setEtcPrice(e.target.value)}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-3 pl-8 pr-4 text-lg font-semibold text-white outline-none transition-colors focus:border-[var(--color-primary)]"
                    placeholder={CURRENT_PRICE.toString()}
                    min="0"
                    step="0.01"
                  />
                </div>
                <button
                  onClick={() => setEtcPrice(CURRENT_PRICE.toString())}
                  className="mt-2 text-sm text-[var(--color-primary)] hover:underline"
                >
                  Use current price (${CURRENT_PRICE})
                </button>
              </div>

              {/* Future Price */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">
                  Target Sell Price (USD per ETC)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">$</span>
                  <input
                    type="number"
                    value={futurePrice}
                    onChange={(e) => setFuturePrice(e.target.value)}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-3 pl-8 pr-4 text-lg font-semibold text-white outline-none transition-colors focus:border-[var(--color-primary)]"
                    placeholder="50"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {priceScenarios.map((scenario) => (
                    <button
                      key={scenario.label}
                      onClick={() => setFuturePrice(scenario.price.toString())}
                      className={`rounded-lg border px-3 py-1 text-sm transition-all ${
                        futurePrice === scenario.price.toString()
                          ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                          : 'border-[var(--border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)]/30'
                      }`}
                    >
                      ${scenario.price} ({scenario.label})
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <h2 className="mb-6 text-lg font-semibold text-white">Projected Returns</h2>

              {/* ETC Amount */}
              <div className="mb-6 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                <p className="text-sm text-[var(--color-text-muted)]">ETC You Would Own</p>
                <p className="mt-1 text-2xl font-bold text-white">
                  {calculations.etcAmount.toLocaleString('en-US', { maximumFractionDigits: 4 })} ETC
                </p>
              </div>

              {/* Future Value */}
              <div className="mb-6 rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-4">
                <p className="text-sm text-[var(--color-text-muted)]">Future Value at ${futurePrice}</p>
                <p className="mt-1 text-3xl font-bold text-[var(--color-primary)]">
                  {formatUSD(calculations.futureValue)}
                </p>
              </div>

              {/* Profit/Loss */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <p className="text-sm text-[var(--color-text-muted)]">Profit/Loss</p>
                  <p className={`mt-1 text-xl font-bold ${calculations.profit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {calculations.profit >= 0 ? '+' : ''}{formatUSD(calculations.profit)}
                  </p>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <p className="text-sm text-[var(--color-text-muted)]">Return %</p>
                  <p className={`mt-1 text-xl font-bold ${calculations.profitPercent >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {calculations.profitPercent >= 0 ? '+' : ''}{calculations.profitPercent.toFixed(2)}%
                  </p>
                </div>
              </div>

              {/* Investment vs Value */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                <div className="mb-3 flex justify-between text-sm">
                  <span className="text-[var(--color-text-muted)]">Investment</span>
                  <span className="text-white">{formatUSD(parseFloat(investmentAmount) || 0)}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[var(--border)]">
                  <div
                    className="h-full bg-[var(--color-primary)] transition-all"
                    style={{
                      width: `${Math.min(100, ((parseFloat(investmentAmount) || 0) / Math.max(calculations.futureValue, parseFloat(investmentAmount) || 1)) * 100)}%`,
                    }}
                  />
                </div>
                <div className="mt-3 flex justify-between text-sm">
                  <span className="text-[var(--color-text-muted)]">Future Value</span>
                  <span className="text-[var(--color-primary)]">{formatUSD(calculations.futureValue)}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scenario Comparison */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Price Scenarios</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              See how your {formatUSD(parseFloat(investmentAmount) || 1000)} investment could grow at different price levels
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {priceScenarios.map((scenario, index) => {
              const investment = parseFloat(investmentAmount) || 1000
              const buyPrice = parseFloat(etcPrice) || CURRENT_PRICE
              const etcAmount = investment / buyPrice
              const futureValue = etcAmount * scenario.price
              const profit = futureValue - investment

              return (
                <motion.div
                  key={scenario.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setFuturePrice(scenario.price.toString())}
                  className={`cursor-pointer rounded-xl border p-4 transition-all ${
                    futurePrice === scenario.price.toString()
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10'
                      : 'border-[var(--border)] bg-[var(--panel)] hover:border-[var(--color-primary)]/30'
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--color-text-muted)]">{scenario.label}</span>
                    <span className="text-sm text-emerald-400">{scenario.change}</span>
                  </div>
                  <p className="text-lg font-bold text-white">${scenario.price}</p>
                  <div className="mt-3 border-t border-[var(--border)] pt-3">
                    <p className="text-sm text-[var(--color-text-muted)]">Value</p>
                    <p className="font-semibold text-[var(--color-primary)]">{formatUSD(futureValue)}</p>
                    <p className="text-sm text-emerald-400">+{formatUSD(profit)}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* DCA Calculator */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Dollar-Cost Averaging</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              See how regular investments can accumulate over time
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-white">Monthly Investment</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-white">6 Months</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-white">1 Year</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-white">2 Years</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-white">5 Years</th>
                </tr>
              </thead>
              <tbody>
                {[50, 100, 250, 500, 1000].map((monthly) => {
                  const price = parseFloat(etcPrice) || CURRENT_PRICE
                  const monthlyEtc = monthly / price
                  return (
                    <motion.tr
                      key={monthly}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="border-b border-[var(--border)]/50"
                    >
                      <td className="px-4 py-3 font-medium text-white">${monthly}/mo</td>
                      <td className="px-4 py-3 text-right text-[var(--color-text-secondary)]">
                        {(monthlyEtc * 6).toFixed(2)} ETC
                      </td>
                      <td className="px-4 py-3 text-right text-[var(--color-text-secondary)]">
                        {(monthlyEtc * 12).toFixed(2)} ETC
                      </td>
                      <td className="px-4 py-3 text-right text-[var(--color-text-secondary)]">
                        {(monthlyEtc * 24).toFixed(2)} ETC
                      </td>
                      <td className="px-4 py-3 text-right text-[var(--color-primary)]">
                        {(monthlyEtc * 60).toFixed(2)} ETC
                      </td>
                    </motion.tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-[var(--color-text-muted)]">
            * Assuming constant price of ${parseFloat(etcPrice) || CURRENT_PRICE} per ETC. Actual results will vary with price changes.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <div className="text-sm text-[var(--color-text-muted)]">
                <p className="font-medium text-amber-400">Investment Disclaimer</p>
                <p className="mt-1">
                  This calculator is for illustrative purposes only and does not constitute financial advice. Cryptocurrency investments are highly volatile and carry significant risk. Past performance does not guarantee future results. Only invest what you can afford to lose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Ready to Invest?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Start your ETC investment journey on trusted exchanges
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
                href="/markets/converter"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                Price Converter
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

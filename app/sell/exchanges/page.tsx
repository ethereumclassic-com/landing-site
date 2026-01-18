'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

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

interface Exchange {
  name: string
  description: string
  tradingFee: string
  withdrawalFee: string
  minWithdrawal: string
  payoutMethods: string[]
  payoutTime: string
  features: string[]
  url: string
  badge?: string
}

function ExchangeCard({ exchange }: { exchange: Exchange }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/30"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">{exchange.name}</h3>
        {exchange.badge && (
          <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
            {exchange.badge}
          </span>
        )}
      </div>
      <p className="text-sm text-[var(--color-text-secondary)]">{exchange.description}</p>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-[var(--bg)]/50 p-3">
          <p className="text-xs text-[var(--color-text-muted)]">Trading Fee</p>
          <p className="text-sm font-medium text-white">{exchange.tradingFee}</p>
        </div>
        <div className="rounded-lg bg-[var(--bg)]/50 p-3">
          <p className="text-xs text-[var(--color-text-muted)]">Withdrawal Fee</p>
          <p className="text-sm font-medium text-white">{exchange.withdrawalFee}</p>
        </div>
        <div className="rounded-lg bg-[var(--bg)]/50 p-3">
          <p className="text-xs text-[var(--color-text-muted)]">Min Withdrawal</p>
          <p className="text-sm font-medium text-white">{exchange.minWithdrawal}</p>
        </div>
        <div className="rounded-lg bg-[var(--bg)]/50 p-3">
          <p className="text-xs text-[var(--color-text-muted)]">Payout Time</p>
          <p className="text-sm font-medium text-white">{exchange.payoutTime}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="mb-2 text-xs font-medium text-[var(--color-text-muted)]">Payout Methods</p>
        <div className="flex flex-wrap gap-2">
          {exchange.payoutMethods.map((method) => (
            <span
              key={method}
              className="rounded-full bg-[var(--bg)] px-3 py-1 text-xs text-[var(--color-text-secondary)]"
            >
              {method}
            </span>
          ))}
        </div>
      </div>

      <ul className="mt-4 space-y-1">
        {exchange.features.map((feature) => (
          <li key={feature} className="flex items-start text-xs">
            <svg className="mr-2 mt-0.5 h-3 w-3 flex-shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[var(--color-text-muted)]">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={exchange.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--color-primary)]/20"
      >
        Sell on {exchange.name}
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </motion.div>
  )
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
    >
      <div className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
        {number}
      </div>
      <h3 className="mt-2 text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{description}</p>
    </motion.div>
  )
}

export default function SellExchangesPage() {
  const exchanges: Exchange[] = [
    {
      name: 'Coinbase',
      description: 'US-based exchange with easy fiat withdrawals and a beginner-friendly interface.',
      tradingFee: '0.5-0.6%',
      withdrawalFee: 'Varies',
      minWithdrawal: '$10 USD',
      payoutMethods: ['ACH', 'Wire', 'PayPal', 'Debit Card'],
      payoutTime: '1-5 days',
      features: [
        'Instant sell option available',
        'PayPal withdrawals in US',
        'FDIC-insured USD balances',
        'User-friendly mobile app',
      ],
      url: 'https://coinbase.com',
      badge: 'Beginner Friendly',
    },
    {
      name: 'Kraken',
      description: 'Established exchange with competitive fees and global fiat withdrawal options.',
      tradingFee: '0.16-0.26%',
      withdrawalFee: '$4-35',
      minWithdrawal: '$10 USD',
      payoutMethods: ['ACH', 'Wire', 'SEPA', 'SWIFT'],
      payoutTime: '1-5 days',
      features: [
        'Low trading fees',
        'Strong security track record',
        'Multiple fiat currencies',
        'Advanced trading options',
      ],
      url: 'https://kraken.com',
      badge: 'Low Fees',
    },
    {
      name: 'Binance',
      description: 'World\'s largest exchange by volume with extensive withdrawal options.',
      tradingFee: '0.1%',
      withdrawalFee: 'Varies',
      minWithdrawal: 'Varies',
      payoutMethods: ['Bank Transfer', 'SEPA', 'Card', 'P2P'],
      payoutTime: '1-3 days',
      features: [
        'High liquidity',
        'P2P trading option',
        'Multiple fiat currencies',
        'Low trading fees',
      ],
      url: 'https://binance.com',
      badge: 'High Liquidity',
    },
    {
      name: 'Gemini',
      description: 'US-regulated exchange with focus on security and compliance.',
      tradingFee: '0.2-0.4%',
      withdrawalFee: 'Free (10/mo)',
      minWithdrawal: 'No minimum',
      payoutMethods: ['ACH', 'Wire', 'Debit Card'],
      payoutTime: '4-5 days',
      features: [
        'SOC 2 certified',
        'Free withdrawals (limited)',
        'Insurance coverage',
        'New York BitLicense',
      ],
      url: 'https://gemini.com',
      badge: 'Regulated',
    },
    {
      name: 'Bitstamp',
      description: 'European exchange with long track record and global bank transfers.',
      tradingFee: '0.3-0.5%',
      withdrawalFee: '€3 SEPA',
      minWithdrawal: '$25 USD',
      payoutMethods: ['SEPA', 'Wire', 'Card'],
      payoutTime: '1-3 days',
      features: [
        'EU regulated',
        'Instant card withdrawals',
        'SEPA transfers',
        'Long operational history',
      ],
      url: 'https://bitstamp.net',
      badge: 'EU Friendly',
    },
    {
      name: 'OKX',
      description: 'Global exchange with comprehensive trading features and P2P options.',
      tradingFee: '0.08-0.1%',
      withdrawalFee: 'Varies',
      minWithdrawal: 'Varies',
      payoutMethods: ['Bank Transfer', 'P2P', 'Card'],
      payoutTime: '1-5 days',
      features: [
        'Very low trading fees',
        'P2P marketplace',
        'Global coverage',
        'Mobile app available',
      ],
      url: 'https://okx.com',
      badge: 'Global',
    },
  ]

  const sellSteps = [
    {
      number: 1,
      title: 'Deposit ETC',
      description: 'Send your ETC from your wallet to the exchange deposit address. Always verify the address before sending.',
    },
    {
      number: 2,
      title: 'Sell for Fiat',
      description: 'Place a sell order on the exchange. Use market orders for instant execution or limit orders for better prices.',
    },
    {
      number: 3,
      title: 'Withdraw Funds',
      description: 'Transfer your fiat balance to your bank account using your preferred withdrawal method.',
    },
  ]

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link
              href="/sell"
              className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Sell Hub
            </Link>
            <span className="inline-block rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400">
              Exchanges
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Sell ETC on Exchanges
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Compare the best exchanges for selling Ethereum Classic. Find the lowest fees and fastest payouts to your bank account.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">How to Sell ETC</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Three simple steps to convert your ETC to fiat
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {sellSteps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Exchanges Grid */}
      <section className="bg-[var(--panel)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Top Exchanges for Selling</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Compare fees, payout methods, and withdrawal times
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {exchanges.map((exchange) => (
              <ExchangeCard key={exchange.name} exchange={exchange} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Fee Comparison</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Quick comparison of trading fees across exchanges
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="px-4 py-3 text-left text-sm font-medium text-[var(--color-text-secondary)]">Exchange</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[var(--color-text-secondary)]">Trading Fee</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[var(--color-text-secondary)]">Withdrawal Fee</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[var(--color-text-secondary)]">Payout Time</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[var(--color-text-secondary)]">Best For</th>
                </tr>
              </thead>
              <tbody>
                {exchanges.map((exchange) => (
                  <tr key={exchange.name} className="border-b border-[var(--border)]/50">
                    <td className="px-4 py-4 text-sm font-medium text-white">{exchange.name}</td>
                    <td className="px-4 py-4 text-sm text-[var(--color-text-secondary)]">{exchange.tradingFee}</td>
                    <td className="px-4 py-4 text-sm text-[var(--color-text-secondary)]">{exchange.withdrawalFee}</td>
                    <td className="px-4 py-4 text-sm text-[var(--color-text-secondary)]">{exchange.payoutTime}</td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs text-[var(--color-primary)]">
                        {exchange.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-[var(--panel)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Selling Tips</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {[
              {
                title: 'Verify Your Account First',
                description: 'Complete KYC verification before depositing ETC. This ensures smooth withdrawals without delays or holds.',
              },
              {
                title: 'Check Withdrawal Limits',
                description: 'Know your daily/monthly withdrawal limits. Higher verification tiers usually offer higher limits.',
              },
              {
                title: 'Consider Tax Implications',
                description: 'Keep records of your transactions. Selling crypto may create taxable events depending on your jurisdiction.',
              },
              {
                title: 'Use Limit Orders for Large Amounts',
                description: 'For significant sales, use limit orders to avoid slippage and get better execution prices.',
              },
            ].map((tip) => (
              <motion.div
                key={tip.title}
                variants={fadeInUp}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6"
              >
                <h3 className="text-lg font-bold text-white">{tip.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{tip.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Alternative Method CTA */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--panel)] to-[var(--bg)] p-8 text-center md:p-12"
          >
            <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
              Alternative
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Try the Native Off-Ramp Path
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Convert ETC to ClassicUSD (USC) on ETCswap, then redeem for USD via Brale - no centralized exchange needed
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://etcswap.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary)]/90"
              >
                Swap on ETCswap
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <Link
                href="/sell"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30"
              >
                Learn About Off-Ramp
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

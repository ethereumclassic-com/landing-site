'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { exchanges } from '../data/exchanges'

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

interface InstantBuyProviderProps {
  name: string
  description: string
  paymentMethods: string[]
  processingTime: string
  fees: string
  kycRequired: boolean
  link: string
  index: number
}

function InstantBuyProvider({
  name,
  description,
  paymentMethods,
  processingTime,
  fees,
  kycRequired,
  link,
  index,
}: InstantBuyProviderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/30"
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{description}</p>
        </div>
        {!kycRequired && (
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
            No KYC
          </span>
        )}
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-[var(--color-text-muted)]">Processing</span>
          <p className="font-medium text-white">{processingTime}</p>
        </div>
        <div>
          <span className="text-[var(--color-text-muted)]">Fees</span>
          <p className="font-medium text-white">{fees}</p>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-sm text-[var(--color-text-muted)]">Payment Methods</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {paymentMethods.map((method) => (
            <span
              key={method}
              className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
            >
              {method}
            </span>
          ))}
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--color-primary-hover)]"
      >
        Buy ETC Instantly
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </motion.div>
  )
}

interface StepCardProps {
  number: number
  title: string
  description: string
  icon: React.ReactNode
  index: number
}

function StepCard({ number, title, description, icon, index }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center text-center"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
        {icon}
      </div>
      <span className="mb-2 text-xs font-medium text-[var(--color-primary)]">Step {number}</span>
      <h3 className="mb-2 font-semibold text-white">{title}</h3>
      <p className="text-sm text-[var(--color-text-muted)]">{description}</p>
    </motion.div>
  )
}

export default function InstantBuyPage() {
  // Filter exchanges that support instant card purchases
  const instantBuyProviders = exchanges
    .filter((ex) => ex.paymentMethods?.includes('Card') && ex.type === 'CEX')
    .slice(0, 6)

  const providers: InstantBuyProviderProps[] = [
    {
      name: 'Coinbase',
      description: 'US-regulated exchange with instant debit card purchases',
      paymentMethods: ['Debit Card', 'Credit Card', 'Apple Pay', 'Google Pay'],
      processingTime: 'Instant',
      fees: '~3.99%',
      kycRequired: true,
      link: 'https://www.coinbase.com',
      index: 0,
    },
    {
      name: 'Binance',
      description: 'World\'s largest exchange with multiple instant buy options',
      paymentMethods: ['Visa', 'Mastercard', 'Apple Pay', 'Google Pay'],
      processingTime: 'Instant',
      fees: '~2%',
      kycRequired: true,
      link: 'https://www.binance.com',
      index: 1,
    },
    {
      name: 'Kraken',
      description: 'Secure exchange with instant ACH and card purchases',
      paymentMethods: ['Debit Card', 'ACH', 'Wire'],
      processingTime: 'Instant (Card)',
      fees: '~1.5%',
      kycRequired: true,
      link: 'https://www.kraken.com',
      index: 2,
    },
    {
      name: 'KuCoin',
      description: 'Global exchange with third-party instant buy services',
      paymentMethods: ['Visa', 'Mastercard', 'Simplex', 'Banxa'],
      processingTime: 'Instant',
      fees: '~3-5%',
      kycRequired: false,
      link: 'https://www.kucoin.com',
      index: 3,
    },
    {
      name: 'Crypto.com',
      description: 'All-in-one platform with instant card purchases',
      paymentMethods: ['Visa', 'Mastercard', 'Apple Pay'],
      processingTime: 'Instant',
      fees: '~2.99%',
      kycRequired: true,
      link: 'https://crypto.com',
      index: 4,
    },
    {
      name: 'Bybit',
      description: 'Fast-growing exchange with instant buy via third parties',
      paymentMethods: ['Visa', 'Mastercard', 'Simplex', 'MoonPay'],
      processingTime: 'Instant',
      fees: '~3-5%',
      kycRequired: false,
      link: 'https://www.bybit.com',
      index: 5,
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Choose a Provider',
      description: 'Select an instant buy service that supports your payment method and region',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'Enter Amount',
      description: 'Specify how much ETC you want to buy or how much you want to spend',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Add Payment',
      description: 'Enter your card details or use a saved payment method',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      ),
    },
    {
      number: 4,
      title: 'Receive ETC',
      description: 'Your ETC is deposited instantly to your exchange or wallet address',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 text-center md:px-10 md:py-28 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp}>
            <Link
              href="/buy"
              className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Buy ETC
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              Fastest Way to Buy
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Buy ETC{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Instantly
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Purchase Ethereum Classic in minutes using your credit card, debit card, or mobile payment. No trading experience required.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#providers"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-base font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              Buy with Card
            </a>
            <Link
              href="/buy/p2p"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 text-base font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
              P2P Trading
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Simple Process
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              How Instant Buy Works
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Get ETC in your wallet in just a few minutes
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <StepCard key={step.number} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Instant Buy Providers */}
      <section id="providers" className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Trusted Providers
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Instant Buy Options
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
              Purchase ETC instantly using your credit or debit card from these trusted exchanges
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providers.map((provider, index) => (
              <InstantBuyProvider key={provider.name} {...provider} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Compare Options
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Instant Buy vs Other Methods
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 text-left text-sm font-medium text-[var(--color-text-muted)]">Feature</th>
                  <th className="pb-4 text-center text-sm font-medium text-[var(--color-primary)]">Instant Buy</th>
                  <th className="pb-4 text-center text-sm font-medium text-[var(--color-text-muted)]">Bank Transfer</th>
                  <th className="pb-4 text-center text-sm font-medium text-[var(--color-text-muted)]">P2P</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-[var(--border)]/50">
                  <td className="py-4 text-[var(--color-text-muted)]">Speed</td>
                  <td className="py-4 text-center text-emerald-400">Instant</td>
                  <td className="py-4 text-center text-[var(--color-text-muted)]">1-5 days</td>
                  <td className="py-4 text-center text-[var(--color-text-muted)]">Minutes-Hours</td>
                </tr>
                <tr className="border-b border-[var(--border)]/50">
                  <td className="py-4 text-[var(--color-text-muted)]">Fees</td>
                  <td className="py-4 text-center text-amber-400">2-5%</td>
                  <td className="py-4 text-center text-emerald-400">0-1%</td>
                  <td className="py-4 text-center text-[var(--color-text-muted)]">1-3%</td>
                </tr>
                <tr className="border-b border-[var(--border)]/50">
                  <td className="py-4 text-[var(--color-text-muted)]">Limits</td>
                  <td className="py-4 text-center text-[var(--color-text-muted)]">Low-Medium</td>
                  <td className="py-4 text-center text-emerald-400">High</td>
                  <td className="py-4 text-center text-[var(--color-text-muted)]">Varies</td>
                </tr>
                <tr className="border-b border-[var(--border)]/50">
                  <td className="py-4 text-[var(--color-text-muted)]">Convenience</td>
                  <td className="py-4 text-center text-emerald-400">Excellent</td>
                  <td className="py-4 text-center text-[var(--color-text-muted)]">Moderate</td>
                  <td className="py-4 text-center text-[var(--color-text-muted)]">Moderate</td>
                </tr>
                <tr>
                  <td className="py-4 text-[var(--color-text-muted)]">Best For</td>
                  <td className="py-4 text-center text-white">Quick purchases</td>
                  <td className="py-4 text-center text-white">Large amounts</td>
                  <td className="py-4 text-center text-white">Privacy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-8"
          >
            <h3 className="mb-6 text-xl font-bold text-white">Tips for Instant Buying</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Use 3D Secure Cards</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Cards with 3D Secure authentication typically have higher success rates and limits
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Compare Fees</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Instant buy fees vary significantly between providers - compare before buying
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Start with KYC</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Complete identity verification in advance to avoid delays during purchase
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Secure Your ETC</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    After buying, consider transferring ETC to your personal wallet for better security
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Prefer Lower Fees?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              For larger purchases, consider bank transfers or P2P trading for better rates
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/buy/bank"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                Bank Transfer
              </Link>
              <Link
                href="/buy/p2p"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
                P2P Trading
              </Link>
              <Link
                href="/buy/exchanges"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008z" />
                </svg>
                All Exchanges
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

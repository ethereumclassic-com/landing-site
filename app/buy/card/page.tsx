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

interface CardProviderProps {
  name: string
  description: string
  cardTypes: string[]
  processingTime: string
  fees: string
  limits: string
  link: string
  index: number
}

function CardProvider({
  name,
  description,
  cardTypes,
  processingTime,
  fees,
  limits,
  link,
  index,
}: CardProviderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-all hover:border-[var(--color-primary)]/30"
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">{description}</p>
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
        <div className="col-span-2">
          <span className="text-[var(--color-text-muted)]">Limits</span>
          <p className="font-medium text-white">{limits}</p>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-sm text-[var(--color-text-muted)]">Accepted Cards</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {cardTypes.map((type) => (
            <span
              key={type}
              className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
            >
              {type}
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
        Buy with Card
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </motion.div>
  )
}

export default function CardPage() {
  const providers: CardProviderProps[] = [
    {
      name: 'Coinbase',
      description: 'US-regulated exchange with instant card purchases and high limits',
      cardTypes: ['Visa', 'Mastercard', 'Apple Pay', 'Google Pay'],
      processingTime: 'Instant',
      fees: '3.99%',
      limits: 'Up to $25,000/day',
      link: 'https://www.coinbase.com',
      index: 0,
    },
    {
      name: 'Binance',
      description: 'Global exchange with competitive card fees and multiple currencies',
      cardTypes: ['Visa', 'Mastercard'],
      processingTime: 'Instant',
      fees: '1.8-2%',
      limits: 'Varies by region',
      link: 'https://www.binance.com',
      index: 1,
    },
    {
      name: 'Kraken',
      description: 'Secure exchange with instant card purchases in select regions',
      cardTypes: ['Visa', 'Mastercard'],
      processingTime: 'Instant',
      fees: '~1.5%',
      limits: 'Up to $10,000/day',
      link: 'https://www.kraken.com',
      index: 2,
    },
    {
      name: 'Crypto.com',
      description: 'All-in-one platform with card rewards and instant purchases',
      cardTypes: ['Visa', 'Mastercard', 'Apple Pay'],
      processingTime: 'Instant',
      fees: '2.99%',
      limits: 'Up to $20,000/day',
      link: 'https://crypto.com',
      index: 3,
    },
    {
      name: 'KuCoin',
      description: 'Third-party card purchases via Simplex, Banxa, and more',
      cardTypes: ['Visa', 'Mastercard'],
      processingTime: 'Instant',
      fees: '3-5%',
      limits: 'Up to $20,000/day',
      link: 'https://www.kucoin.com',
      index: 4,
    },
    {
      name: 'Bybit',
      description: 'Card purchases through integrated third-party providers',
      cardTypes: ['Visa', 'Mastercard'],
      processingTime: 'Instant',
      fees: '3-5%',
      limits: 'Up to $10,000/day',
      link: 'https://www.bybit.com',
      index: 5,
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Choose an Exchange',
      description: 'Select a trusted exchange that supports card purchases',
    },
    {
      number: 2,
      title: 'Create & Verify Account',
      description: 'Sign up and complete identity verification (KYC required for most providers)',
    },
    {
      number: 3,
      title: 'Enter Purchase Amount',
      description: 'Specify how much ETC you want or how much you want to spend',
    },
    {
      number: 4,
      title: 'Enter Card Details',
      description: 'Provide your credit or debit card information securely',
    },
    {
      number: 5,
      title: 'Complete 3D Secure',
      description: 'Verify the transaction with your bank (SMS code or app approval)',
    },
    {
      number: 6,
      title: 'Receive Your ETC',
      description: 'ETC is instantly credited to your exchange wallet',
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              Card Purchases
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Buy ETC with{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Card
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Purchase Ethereum Classic instantly using your credit or debit card. Simple, fast, and convenient way to get ETC.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#providers"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-base font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              View Card Options
            </a>
            <Link
              href="/buy/bank"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 text-base font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
              Bank Transfer
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Card Types */}
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
              Accepted Cards
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Which Cards Can I Use?
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Visa', description: 'Credit & Debit', icon: '💳' },
              { name: 'Mastercard', description: 'Credit & Debit', icon: '💳' },
              { name: 'Apple Pay', description: 'Mobile Wallet', icon: '📱' },
              { name: 'Google Pay', description: 'Mobile Wallet', icon: '📱' },
            ].map((card, index) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 text-center"
              >
                <span className="text-3xl">{card.icon}</span>
                <h3 className="mt-2 font-semibold text-white">{card.name}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{card.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-center text-sm text-[var(--color-text-muted)]"
          >
            Note: Some banks may block crypto purchases. Contact your bank if your transaction is declined.
          </motion.p>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Getting Started
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              How to Buy with Card
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Providers */}
      <section id="providers" className="bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
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
              Where to Buy with Card
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
              Trusted exchanges that accept credit and debit card payments for ETC purchases
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providers.map((provider, index) => (
              <CardProvider key={provider.name} {...provider} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Fees Comparison */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Fees
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Understanding Card Fees
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 text-left text-sm font-medium text-[var(--color-text-muted)]">Fee Type</th>
                  <th className="pb-4 text-center text-sm font-medium text-[var(--color-text-muted)]">Typical Range</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--color-text-muted)]">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-[var(--border)]/50">
                  <td className="py-4 font-medium text-white">Processing Fee</td>
                  <td className="py-4 text-center text-[var(--color-text-muted)]">1.5% - 4%</td>
                  <td className="py-4 text-[var(--color-text-muted)]">Charged by the exchange for card processing</td>
                </tr>
                <tr className="border-b border-[var(--border)]/50">
                  <td className="py-4 font-medium text-white">Network Fee</td>
                  <td className="py-4 text-center text-[var(--color-text-muted)]">$0.50 - $2</td>
                  <td className="py-4 text-[var(--color-text-muted)]">Card network fees (Visa/Mastercard)</td>
                </tr>
                <tr className="border-b border-[var(--border)]/50">
                  <td className="py-4 font-medium text-white">Foreign Transaction</td>
                  <td className="py-4 text-center text-[var(--color-text-muted)]">0% - 3%</td>
                  <td className="py-4 text-[var(--color-text-muted)]">May apply if exchange is in different country</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-white">Cash Advance Fee</td>
                  <td className="py-4 text-center text-amber-400">3% - 5%</td>
                  <td className="py-4 text-[var(--color-text-muted)]">Some banks treat crypto as cash advance (credit cards)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4"
          >
            <div className="flex gap-3">
              <svg className="h-5 w-5 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <div>
                <h4 className="font-medium text-white">Credit Card Warning</h4>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Many credit card issuers treat crypto purchases as cash advances, which may incur high fees and interest from day one. Debit cards are often a better choice.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-8"
          >
            <h3 className="mb-6 text-xl font-bold text-white">Tips for Card Purchases</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Use Debit Over Credit</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Debit cards avoid cash advance fees and high credit card interest rates
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Contact Your Bank</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Let your bank know you&apos;re making crypto purchases to avoid declined transactions
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
                    Fees vary significantly between providers - shop around for the best rates
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Enable 3D Secure</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Ensure your card has 3D Secure enabled for smoother transactions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
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
              Bank transfers typically have lower fees than card purchases for larger amounts
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/buy/bank"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)]"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                Bank Transfer Guide
              </Link>
              <Link
                href="/buy/p2p"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
                P2P Trading
              </Link>
              <Link
                href="/buy/exchanges"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
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

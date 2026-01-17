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

interface BankMethodProps {
  name: string
  description: string
  processingTime: string
  fees: string
  limits: string
  regions: string[]
  index: number
}

function BankMethod({
  name,
  description,
  processingTime,
  fees,
  limits,
  regions,
  index,
}: BankMethodProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6"
    >
      <h3 className="text-lg font-bold text-white">{name}</h3>
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">{description}</p>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-[var(--color-text-muted)]">Processing</span>
          <p className="font-medium text-white">{processingTime}</p>
        </div>
        <div>
          <span className="text-[var(--color-text-muted)]">Fees</span>
          <p className="font-medium text-emerald-400">{fees}</p>
        </div>
        <div className="col-span-2">
          <span className="text-[var(--color-text-muted)]">Limits</span>
          <p className="font-medium text-white">{limits}</p>
        </div>
      </div>

      <div className="mt-4">
        <span className="text-sm text-[var(--color-text-muted)]">Available In</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {regions.map((region) => (
            <span
              key={region}
              className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
            >
              {region}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

interface ExchangeProviderProps {
  name: string
  description: string
  bankMethods: string[]
  fees: string
  processingTime: string
  link: string
  index: number
}

function ExchangeProvider({
  name,
  description,
  bankMethods,
  fees,
  processingTime,
  link,
  index,
}: ExchangeProviderProps) {
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
          <span className="text-[var(--color-text-muted)]">Deposit Fees</span>
          <p className="font-medium text-emerald-400">{fees}</p>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-sm text-[var(--color-text-muted)]">Bank Methods</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {bankMethods.map((method) => (
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
        Start Deposit
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </motion.div>
  )
}

export default function BankPage() {
  const bankMethods: BankMethodProps[] = [
    {
      name: 'ACH Transfer',
      description: 'Automated Clearing House - standard US bank transfers between accounts',
      processingTime: '1-3 business days',
      fees: 'Free - $1',
      limits: 'Up to $50,000/day',
      regions: ['United States'],
      index: 0,
    },
    {
      name: 'SEPA Transfer',
      description: 'Single Euro Payments Area - fast euro transfers across Europe',
      processingTime: '1-2 business days',
      fees: 'Free - €1',
      limits: 'Up to €100,000/day',
      regions: ['Europe', 'UK'],
      index: 1,
    },
    {
      name: 'Wire Transfer',
      description: 'International bank wire - available globally for larger amounts',
      processingTime: '1-5 business days',
      fees: '$10 - $50',
      limits: 'Up to $1,000,000+',
      regions: ['Global'],
      index: 2,
    },
    {
      name: 'Faster Payments',
      description: 'UK instant bank transfer system for GBP transactions',
      processingTime: 'Minutes - 2 hours',
      fees: 'Free',
      limits: 'Up to £1,000,000/day',
      regions: ['United Kingdom'],
      index: 3,
    },
  ]

  const providers: ExchangeProviderProps[] = [
    {
      name: 'Coinbase',
      description: 'US-regulated exchange with free ACH deposits and instant trading',
      bankMethods: ['ACH', 'Wire', 'SEPA', 'Faster Payments'],
      fees: 'Free (ACH)',
      processingTime: '1-3 days',
      link: 'https://www.coinbase.com',
      index: 0,
    },
    {
      name: 'Kraken',
      description: 'Secure exchange with multiple wire options and low trading fees',
      bankMethods: ['ACH', 'Wire', 'SEPA', 'Faster Payments'],
      fees: 'Free - $5',
      processingTime: '1-5 days',
      link: 'https://www.kraken.com',
      index: 1,
    },
    {
      name: 'Binance',
      description: 'Global exchange with SEPA, ACH, and local bank support',
      bankMethods: ['SEPA', 'ACH', 'Bank Card'],
      fees: 'Free (SEPA)',
      processingTime: '1-2 days',
      link: 'https://www.binance.com',
      index: 2,
    },
    {
      name: 'Gemini',
      description: 'US-based regulated exchange with free ACH and wire options',
      bankMethods: ['ACH', 'Wire'],
      fees: 'Free (ACH)',
      processingTime: '1-4 days',
      link: 'https://www.gemini.com',
      index: 3,
    },
    {
      name: 'Bitstamp',
      description: 'One of the oldest exchanges with strong SEPA and wire support',
      bankMethods: ['SEPA', 'Wire', 'ACH'],
      fees: 'Free (SEPA)',
      processingTime: '1-3 days',
      link: 'https://www.bitstamp.net',
      index: 4,
    },
    {
      name: 'OKX',
      description: 'Major exchange with various fiat deposit options globally',
      bankMethods: ['SEPA', 'Wire', 'Local Banks'],
      fees: 'Free - Varies',
      processingTime: '1-5 days',
      link: 'https://www.okx.com',
      index: 5,
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Create Exchange Account',
      description: 'Sign up and complete KYC verification (required for bank deposits)',
    },
    {
      number: 2,
      title: 'Link Bank Account',
      description: 'Add and verify your bank account for deposits',
    },
    {
      number: 3,
      title: 'Initiate Transfer',
      description: 'Request a deposit and note the exchange\'s bank details',
    },
    {
      number: 4,
      title: 'Send from Bank',
      description: 'Transfer funds from your bank using the provided details',
    },
    {
      number: 5,
      title: 'Wait for Confirmation',
      description: 'Funds appear in your exchange account (1-5 business days)',
    },
    {
      number: 6,
      title: 'Buy ETC',
      description: 'Place a buy order once funds are credited',
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
              Lowest Fees
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Buy ETC with{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Bank Transfer
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Purchase Ethereum Classic with the lowest fees. Bank transfers are ideal for larger purchases with minimal costs.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#providers"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-base font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
              View Bank Options
            </a>
            <Link
              href="/buy/card"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 text-base font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              Buy with Card
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Bank Transfer */}
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
              Why Bank Transfer?
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Benefits of Bank Deposits
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Lowest Fees',
                description: 'Bank transfers typically have 0-1% fees compared to 2-5% for card purchases',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Higher Limits',
                description: 'Bank transfers support much larger amounts than card purchases',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
              },
              {
                title: 'No Card Issues',
                description: 'Avoid card blocks, cash advance fees, and declined transactions',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  {benefit.icon}
                </div>
                <h3 className="mb-2 font-semibold text-white">{benefit.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Methods */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Transfer Types
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Bank Transfer Methods
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
              Different bank transfer options available depending on your region
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {bankMethods.map((method, index) => (
              <BankMethod key={method.name} {...method} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              Getting Started
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              How to Buy with Bank Transfer
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
                className="flex gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4"
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

      {/* Exchange Providers */}
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
              Exchanges
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Where to Deposit
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
              Trusted exchanges that support bank deposits for buying ETC
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providers.map((provider, index) => (
              <ExchangeProvider key={provider.name} {...provider} index={index} />
            ))}
          </div>
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
            <h3 className="mb-6 text-xl font-bold text-white">Important Tips</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Match Account Names</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Your bank account name must match your exchange account name exactly
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Include Reference</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Always include the deposit reference code provided by the exchange
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Allow Processing Time</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Bank transfers can take 1-5 business days depending on method and region
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Complete KYC First</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Verify your identity before initiating deposits to avoid delays
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
              Need ETC Faster?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Card purchases offer instant delivery if you can&apos;t wait for bank transfers
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/buy/card"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)]"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
                Buy with Card
              </Link>
              <Link
                href="/buy/instant"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                Instant Buy
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

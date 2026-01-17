'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { exchanges } from './data/exchanges'
import ExchangeCard from './components/ExchangeCard'

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

interface StepProps {
  number: number
  title: string
  description: string
  icon: React.ReactNode
  index: number
}

function Step({ number, title, description, icon, index }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex gap-4"
    >
      {/* Connector line */}
      {number < 5 && (
        <div className="absolute left-5 top-12 h-full w-px bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent" />
      )}

      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all group-hover:bg-[var(--color-primary)]/20 group-hover:scale-110">
        {icon}
      </div>
      <div className="pb-8">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[var(--color-primary)]">Step {number}</span>
        </div>
        <h3 className="mt-1 font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">{description}</p>
      </div>
    </motion.div>
  )
}

// Payment Method Icons
function CreditCardIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  )
}

function BankIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  )
}

function CryptoIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  )
}

function P2PIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  )
}

// Step Icons
function SearchIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  )
}

function DepositIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  )
}

function WalletIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
    </svg>
  )
}

export default function BuyPage() {
  const dex = exchanges.find((ex) => ex.type === 'DEX' && ex.featured)
  const majorExchanges = exchanges
    .filter((ex) => ex.type === 'CEX' && ex.featured)
    .sort((a, b) => {
      const aVol = parseFloat(a.volume24h?.replace(/[$M,]/g, '') || '0')
      const bVol = parseFloat(b.volume24h?.replace(/[$M,]/g, '') || '0')
      return bVol - aVol
    })
  const additionalExchanges = exchanges.filter((ex) => ex.type === 'CEX' && !ex.featured)

  const steps = [
    {
      number: 1,
      title: 'Choose an Exchange',
      description: 'Select a centralized exchange (CEX) or use ETCswap DEX for direct trading from your wallet.',
      icon: <SearchIcon />,
    },
    {
      number: 2,
      title: 'Create Account (CEX only)',
      description: 'Sign up and complete KYC verification. DEX trading requires no account.',
      icon: <UserIcon />,
    },
    {
      number: 3,
      title: 'Deposit Funds',
      description: 'Deposit fiat currency (USD, EUR, etc.) or cryptocurrency (BTC, USDT, etc.).',
      icon: <DepositIcon />,
    },
    {
      number: 4,
      title: 'Buy ETC',
      description: 'Place a buy order for ETC using your preferred trading pair.',
      icon: <CartIcon />,
    },
    {
      number: 5,
      title: 'Withdraw to Wallet',
      description: 'Transfer ETC to your personal wallet or use Classic OS to manage capital flows.',
      icon: <WalletIcon />,
    },
  ]

  const paymentMethods = [
    { name: 'Credit/Debit Card', icon: <CreditCardIcon />, description: 'Visa, Mastercard, etc.' },
    { name: 'Bank Transfer', icon: <BankIcon />, description: 'SEPA, Wire, ACH' },
    { name: 'Cryptocurrency', icon: <CryptoIcon />, description: 'BTC, USDT, ETH' },
    { name: 'P2P Trading', icon: <P2PIcon />, description: 'Direct peer-to-peer' },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 text-center md:px-10 md:py-28 lg:px-12">
        {/* Background gradient effects */}
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
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              100+ Exchanges
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Buy{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Ethereum Classic
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Get ETC on major centralized exchanges or trade directly on ETCswap DEX. Multiple payment methods available worldwide.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#exchanges"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-base font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008z" />
              </svg>
              Browse Exchanges
            </a>
            <a
              href="https://etcswap.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 text-base font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
              Trade on DEX
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Payment Methods */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Payment Methods
            </span>
            <h2 className="mt-4 text-xl font-bold text-white md:text-2xl">
              Multiple Ways to Buy
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 text-center transition-all hover:border-[var(--color-primary)]/30"
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  {method.icon}
                </div>
                <span className="text-sm font-medium text-white">{method.name}</span>
                <span className="mt-1 text-xs text-[var(--color-text-muted)]">{method.description}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured DEX */}
      {dex && (
        <section className="border-b border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                </span>
                Recommended
              </span>
              <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                Trade on Decentralized Exchange
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
                ETCswap is Ethereum Classic&apos;s native DEX - trade directly from your wallet with no KYC required
              </p>
            </motion.div>
            <ExchangeCard exchange={dex} index={0} />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 flex flex-wrap justify-center gap-3"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs text-[var(--color-text-muted)]">
                <svg className="h-3.5 w-3.5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                No KYC Required
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs text-[var(--color-text-muted)]">
                <svg className="h-3.5 w-3.5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Non-Custodial
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs text-[var(--color-text-muted)]">
                <svg className="h-3.5 w-3.5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Instant Swaps
              </span>
            </motion.div>
          </div>
        </section>
      )}

      {/* Major Exchanges */}
      <section id="exchanges" className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              Top Exchanges
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Major Exchanges
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
              Top centralized exchanges by 24h trading volume. All support ETC deposits and withdrawals.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {majorExchanges.map((exchange, index) => (
              <ExchangeCard key={exchange.name} exchange={exchange} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <Link
              href="/buy/exchanges"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              View All {exchanges.length} Exchanges
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* All Exchanges */}
      <section className="bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              All Exchanges
            </span>
            <h2 className="mt-4 text-xl font-bold text-white md:text-2xl">
              More Exchanges
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
              {additionalExchanges.length + majorExchanges.length}+ centralized exchanges support ETC trading
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {additionalExchanges.map((exchange, index) => (
              <ExchangeCard key={exchange.name} exchange={exchange} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
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
              How to Buy ETC
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Follow these simple steps to purchase Ethereum Classic
            </p>
          </motion.div>

          <div className="space-y-2">
            {steps.map((step, index) => (
              <Step key={step.number} {...step} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/wallet"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
              </svg>
              Get a Wallet
            </Link>
            <a
              href="https://app.classicos.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Launch Classic OS
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6"
          >
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Security Reminder</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Always verify you&apos;re on the official exchange website. Enable 2FA and use strong, unique passwords. Never share your private keys or seed phrase with anyone.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 grid gap-4 md:grid-cols-3"
          >
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-white">Verified Exchanges</span>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">All listed exchanges verified</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-white">No Hidden Fees</span>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">Transparent pricing always</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <span className="text-sm font-medium text-white">Global Access</span>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">Available worldwide</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

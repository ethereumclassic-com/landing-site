'use client'

import { motion } from 'framer-motion'

interface ComparisonCardProps {
  title: string
  features: string[]
  highlighted?: boolean
  index: number
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
}

function ComparisonCard({ title, features, highlighted, index }: ComparisonCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      variants={fadeInUp}
      className={`rounded-2xl border p-6 ${
        highlighted
          ? 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5'
          : 'border-[var(--border)] bg-[var(--panel)]'
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        {highlighted ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
            <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
            <svg className="h-5 w-5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
            </svg>
          </div>
        )}
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {highlighted && (
          <span className="rounded-full bg-[var(--color-primary)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary)]">
            Recommended
          </span>
        )}
      </div>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm">
            <span className={`mr-2 mt-0.5 flex-shrink-0 ${highlighted ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'}`}>
              {highlighted ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </span>
            <span className={highlighted ? 'text-[var(--color-text-secondary)]' : 'text-[var(--color-text-muted)]'}>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function WhyClassicOS() {
  return (
    <section className="bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
            Compare
          </span>
          <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
            Basic Wallet vs Classic OS Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
            See the difference between using a basic wallet alone versus enhancing it with Classic OS
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <ComparisonCard
            title="Basic Wallet"
            index={0}
            features={[
              'Send and receive ETC',
              'View token balances',
              'Transaction history',
              'Manual DeFi interaction',
              'No mining integration',
              'Limited portfolio tracking',
            ]}
          />

          <ComparisonCard
            title="Wallet + Classic OS"
            highlighted
            index={1}
            features={[
              'Everything a basic wallet does',
              '+ Mining OS with payout detection',
              '+ Unified portfolio dashboard',
              '+ Automated DeFi position management',
              '+ DEX aggregation across protocols',
              '+ Real-time P&L tracking',
              '+ Liquidation protection',
              '+ Fiat on-ramp integration',
            ]}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="mx-auto mb-6 max-w-xl text-[var(--color-text-secondary)]">
            Classic OS enhances your wallet experience without replacing it.
            Use any wallet for key management, then connect to Classic OS for advanced features.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://app.classicos.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              Launch Classic OS
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <a
              href="https://docs.classicos.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Read Documentation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

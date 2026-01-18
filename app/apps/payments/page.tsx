'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getAppsByCategory } from '../data/apps'
import AppCard from '../components/AppCard'

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

const paymentFeatures = [
  {
    title: 'Fiat On-Ramp',
    description: 'Buy ETC and USC with bank transfers',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    title: 'Fiat Off-Ramp',
    description: 'Redeem USC for USD to your bank',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Card Spending',
    description: 'Spend ETC anywhere cards are accepted',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: 'Business Payments',
    description: 'Accept USC for your business',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
]

export default function PaymentsPage() {
  const paymentApps = getAppsByCategory('Payments')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl text-center"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeInUp} className="mb-6">
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to Apps
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              {paymentApps.length} Product{paymentApps.length !== 1 ? 's' : ''}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            ETC{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-[var(--color-primary)] bg-clip-text text-transparent">
              Payments
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Bridge between traditional finance and the ETC ecosystem. Buy, sell, spend, and accept payments with ClassicUSD and ETC.
          </motion.p>
        </motion.div>
      </section>

      {/* Payment Features */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)]/50 px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paymentFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ClassicUSD Flow */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">The ClassicUSD Flow</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              How the ETC payment ecosystem works together
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              { step: 1, title: 'Fund via Brale', description: 'ACH bank transfer to purchase USC' },
              { step: 2, title: 'Swap on ETCswap', description: 'Trade USC for ETC or other tokens' },
              { step: 3, title: 'Spend with Rain', description: 'Use your debit card anywhere' },
              { step: 4, title: 'Redeem via Brale', description: 'Convert USC back to USD' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.description}</p>
                {index < 3 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 text-[var(--color-text-muted)] md:block">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Apps Grid */}
      <section className="bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Payment Products</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Products for moving value in and out of the ETC ecosystem
            </p>
          </motion.div>

          {paymentApps.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paymentApps.map((app, index) => (
                <AppCard key={app.slug} app={app} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-12 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <p className="text-[var(--color-text-secondary)]">
                No payment products listed yet.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] bg-gradient-to-b from-emerald-500/5 to-transparent px-6 py-16 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
            Start buying ETC or ClassicUSD today. Use Brale to fund your wallet, then swap or spend as you wish.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/buy"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-medium text-white transition-all hover:bg-emerald-600"
            >
              Buy ETC
            </Link>
            <a
              href="https://brale.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-emerald-500/30 hover:bg-emerald-500/10"
            >
              Get ClassicUSD
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

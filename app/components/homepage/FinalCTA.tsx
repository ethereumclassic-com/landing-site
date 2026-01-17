'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32 lg:px-12">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--panel)] via-[var(--bg)] to-[var(--panel)]" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--color-primary)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              </span>
              Ready to Start?
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            Start Using Ethereum Classic Today
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-xl text-lg text-[var(--color-text-secondary)]"
          >
            Get a wallet, buy some ETC, and explore the decentralized ecosystem
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/wallet"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
              </svg>
              Get Wallet
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/buy"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3.5 text-base font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
              Buy ETC
            </Link>
            <Link
              href="/apps"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3.5 text-base font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
              Browse Apps
            </Link>
          </motion.div>

          {/* Trust Text */}
          <motion.p
            variants={fadeInUp}
            className="mt-8 text-sm text-[var(--color-text-muted)]"
          >
            Trusted by miners, developers, and users since 2015
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

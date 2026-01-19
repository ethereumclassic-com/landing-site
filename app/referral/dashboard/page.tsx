'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

// Sample data for demonstration
const sampleStats = {
  totalReferrals: 0,
  activeReferrals: 0,
  totalEarnings: 0,
  pendingEarnings: 0,
  currentTier: 'Bronze',
  nextTier: 'Silver',
  referralsToNextTier: 5,
}

const sampleReferralLinks = [
  {
    product: 'Mining Pool',
    link: 'https://ethereumclassic.com/pool?ref=YOUR_CODE',
    clicks: 0,
    conversions: 0,
  },
  {
    product: 'Hardware Wallets',
    link: 'https://ethereumclassic.com/wallet/hardware?ref=YOUR_CODE',
    clicks: 0,
    conversions: 0,
  },
  {
    product: 'Mining Hardware',
    link: 'https://ethereumclassic.com/mining/hardware/buy?ref=YOUR_CODE',
    clicks: 0,
    conversions: 0,
  },
  {
    product: 'Merchandise',
    link: 'https://ethereumclassic.com/store?ref=YOUR_CODE',
    clicks: 0,
    conversions: 0,
  },
]

export default function ReferralDashboardPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Header */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Link
              href="/referral"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Referral Program
            </Link>

            <h1 className="mt-4 text-3xl font-bold text-white">Referral Dashboard</h1>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Track your referrals, earnings, and manage your promotional links.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Not Connected Banner */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="font-medium text-amber-400">Program Not Yet Active</p>
                  <p className="text-sm text-amber-400/80">
                    This is a preview of the referral dashboard. Connect your wallet when the program launches.
                  </p>
                </div>
              </div>
              <button
                disabled
                className="rounded-lg bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-400/50 cursor-not-allowed"
              >
                Connect Wallet
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="text-sm text-[var(--color-text-muted)]">Total Referrals</div>
              <div className="mt-2 text-3xl font-bold text-white">{sampleStats.totalReferrals}</div>
              <div className="mt-1 text-sm text-[var(--color-text-muted)]">
                {sampleStats.activeReferrals} active
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="text-sm text-[var(--color-text-muted)]">Total Earnings</div>
              <div className="mt-2 text-3xl font-bold text-[var(--color-primary)]">
                {sampleStats.totalEarnings.toFixed(4)} ETC
              </div>
              <div className="mt-1 text-sm text-[var(--color-text-muted)]">
                ${(sampleStats.totalEarnings * 20).toFixed(2)} USD
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="text-sm text-[var(--color-text-muted)]">Pending Payout</div>
              <div className="mt-2 text-3xl font-bold text-white">
                {sampleStats.pendingEarnings.toFixed(4)} ETC
              </div>
              <div className="mt-1 text-sm text-[var(--color-text-muted)]">
                Next payout: Sunday
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="text-sm text-[var(--color-text-muted)]">Current Tier</div>
              <div className="mt-2 text-3xl font-bold text-amber-600">{sampleStats.currentTier}</div>
              <div className="mt-1 text-sm text-[var(--color-text-muted)]">
                {sampleStats.referralsToNextTier} more to {sampleStats.nextTier}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Referral Links */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden"
          >
            <div className="p-6 border-b border-[var(--border)]">
              <h2 className="text-xl font-bold text-white">Your Referral Links</h2>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Share these links to earn commission on conversions.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)] text-left text-sm text-[var(--color-text-muted)]">
                    <th className="px-6 py-3 font-medium">Product</th>
                    <th className="px-6 py-3 font-medium">Link</th>
                    <th className="px-6 py-3 font-medium text-right">Clicks</th>
                    <th className="px-6 py-3 font-medium text-right">Conversions</th>
                    <th className="px-6 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleReferralLinks.map((link) => (
                    <tr key={link.product} className="border-b border-[var(--border)] last:border-b-0">
                      <td className="px-6 py-4 font-medium text-white">{link.product}</td>
                      <td className="px-6 py-4">
                        <code className="text-xs text-[var(--color-text-muted)] bg-[var(--bg)] px-2 py-1 rounded">
                          {link.link}
                        </code>
                      </td>
                      <td className="px-6 py-4 text-right text-[var(--color-text-muted)]">{link.clicks}</td>
                      <td className="px-6 py-4 text-right text-[var(--color-text-muted)]">{link.conversions}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          disabled
                          className="text-sm text-[var(--color-primary)]/50 cursor-not-allowed"
                        >
                          Copy Link
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="text-xl font-bold text-white">Recent Activity</h2>
            <div className="mt-6 flex flex-col items-center justify-center py-12 text-center">
              <svg className="h-12 w-12 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-[var(--color-text-muted)]">No activity yet</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Your referral activity will appear here once the program launches.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payout History */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Payout History</h2>
              <button
                disabled
                className="rounded-lg bg-[var(--color-primary)]/20 px-4 py-2 text-sm font-medium text-[var(--color-primary)]/50 cursor-not-allowed"
              >
                Export CSV
              </button>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center py-12 text-center">
              <svg className="h-12 w-12 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
              <p className="mt-4 text-[var(--color-text-muted)]">No payouts yet</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Payouts are processed every Sunday and sent directly to your wallet.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

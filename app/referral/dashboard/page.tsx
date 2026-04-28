'use client'

import Link from 'next/link'

const sampleStats = {
  totalReferrals: 0,
  activeReferrals: 0,
  totalEarnings: 0,
  pendingEarnings: 0,
  currentTier: 'Bronze',
  nextTier: 'Silver',
  referralsToNextTier: 5,
}

// Sample data for demonstration
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
          <div>
            <Link
              href="/referral"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Referral Program
            </Link>

            <h1 className="mt-4 text-3xl font-bold text-[var(--text-primary)]">Referral Dashboard</h1>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Track your referrals, earnings, and manage your promotional links.
            </p>
          </div>
        </div>
      </section>

      {/* Not Connected Banner */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--color-warning-border)] bg-[var(--color-warning-bg)] p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <svg aria-hidden="true" className="h-5 w-5 text-[var(--color-warning)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="font-medium text-[var(--color-warning)]">Program Not Yet Active</p>
                  <p className="text-sm text-[var(--color-warning)]/80">
                    This is a preview of the referral dashboard. Connect your wallet when the program launches.
                  </p>
                </div>
              </div>
              <button
                disabled
                className="rounded-lg bg-[var(--color-warning)]/20 px-4 py-2 text-sm font-medium text-[var(--color-warning)]/50 cursor-not-allowed"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="text-sm text-[var(--color-text-muted)]">Total Referrals</div>
              <div className="mt-2 text-3xl font-bold text-[var(--text-primary)]">{sampleStats.totalReferrals}</div>
              <div className="mt-1 text-sm text-[var(--color-text-muted)]">
                {sampleStats.activeReferrals} active
              </div>
            </div>

            <div
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="text-sm text-[var(--color-text-muted)]">Total Earnings</div>
              <div className="mt-2 text-3xl font-bold text-[var(--color-primary)]">
                {sampleStats.totalEarnings.toFixed(4)} ETC
              </div>
              <div className="mt-1 text-sm text-[var(--color-text-muted)]">
                ${(sampleStats.totalEarnings * 20).toFixed(2)} USD
              </div>
            </div>

            <div
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="text-sm text-[var(--color-text-muted)]">Pending Payout</div>
              <div className="mt-2 text-3xl font-bold text-[var(--text-primary)]">
                {sampleStats.pendingEarnings.toFixed(4)} ETC
              </div>
              <div className="mt-1 text-sm text-[var(--color-text-muted)]">
                Next payout: Sunday
              </div>
            </div>

            <div
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
            >
              <div className="text-sm text-[var(--color-text-muted)]">Current Tier</div>
              <div className="mt-2 text-3xl font-bold text-[var(--color-warning)]">{sampleStats.currentTier}</div>
              <div className="mt-1 text-sm text-[var(--color-text-muted)]">
                {sampleStats.referralsToNextTier} more to {sampleStats.nextTier}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Links */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden"
          >
            <div className="p-6 border-b border-[var(--border)]">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">Your Referral Links</h2>
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
                      <td className="px-6 py-4 font-medium text-[var(--text-primary)]">{link.product}</td>
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
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Recent Activity</h2>
            <div className="mt-6 flex flex-col items-center justify-center py-12 text-center">
              <svg aria-hidden="true" className="h-12 w-12 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-[var(--color-text-muted)]">No activity yet</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Your referral activity will appear here once the program launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payout History */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">Payout History</h2>
              <button
                disabled
                className="rounded-lg bg-[var(--color-primary)]/20 px-4 py-2 text-sm font-medium text-[var(--color-primary)]/50 cursor-not-allowed"
              >
                Export CSV
              </button>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center py-12 text-center">
              <svg aria-hidden="true" className="h-12 w-12 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
              <p className="mt-4 text-[var(--color-text-muted)]">No payouts yet</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Payouts are processed every Sunday and sent directly to your wallet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

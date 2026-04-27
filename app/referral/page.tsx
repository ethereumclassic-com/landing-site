'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const referralTiers = [
  {
    name: 'Bronze',
    minReferrals: 0,
    maxReferrals: 4,
    commissionRate: 10,
    color: 'text-amber-600',
    bgColor: 'bg-amber-600/10',
    borderColor: 'border-amber-600/30',
  },
  {
    name: 'Silver',
    minReferrals: 5,
    maxReferrals: 19,
    commissionRate: 15,
    color: 'text-slate-400',
    bgColor: 'bg-slate-400/10',
    borderColor: 'border-slate-400/30',
  },
  {
    name: 'Gold',
    minReferrals: 20,
    maxReferrals: 49,
    commissionRate: 20,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
  },
  {
    name: 'Diamond',
    minReferrals: 50,
    maxReferrals: null,
    commissionRate: 25,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/30',
  },
]

const referralProducts = [
  {
    id: 'pool',
    name: 'Mining Pool',
    description: 'Earn commission on pool fees from referred miners',
    commission: 'Up to 25% of pool fees',
    status: 'coming_soon' as const,
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    id: 'hardware',
    name: 'Hardware Wallets',
    description: 'Commission on hardware wallet purchases via our affiliate links',
    commission: '10-15% per sale',
    status: 'active' as const,
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    id: 'mining-hardware',
    name: 'Mining Hardware',
    description: 'Commission on ASIC and GPU purchases from partner manufacturers',
    commission: 'Varies by manufacturer',
    status: 'active' as const,
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21" />
      </svg>
    ),
  },
  {
    id: 'store',
    name: 'Merchandise',
    description: 'Commission on ETC merchandise purchases',
    commission: 'Up to 20% per sale',
    status: 'coming_soon' as const,
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
]

const howItWorks = [
  {
    step: 1,
    title: 'Sign Up',
    description: 'Create your free referral account with just an ETC wallet address',
  },
  {
    step: 2,
    title: 'Get Your Links',
    description: 'Receive unique referral links for each product and service',
  },
  {
    step: 3,
    title: 'Share & Promote',
    description: 'Share your links with your community, on social media, or your website',
  },
  {
    step: 4,
    title: 'Earn ETC',
    description: 'Receive commission in ETC directly to your wallet, no minimums',
  },
]

export default function ReferralPage() {
  const [email, setEmail] = useState('')
  const [wallet, setWallet] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder - would submit to backend in production
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
              Earn ETC
            </span>

            <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Referral Program
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Earn Ethereum Classic by referring users to our products and services.
              Commission paid directly to your wallet with no minimums.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Banner */}
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
                <svg aria-hidden="true" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="font-medium text-amber-400">Program Launching Soon</p>
                  <p className="text-sm text-amber-400/80">
                    Join the waitlist to be notified when the referral program goes live.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white">How It Works</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/20 text-lg font-bold text-[var(--color-primary)]">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white">Commission Tiers</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Earn higher commission rates as you bring more users to the ETC ecosystem.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {referralTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-xl border ${tier.borderColor} ${tier.bgColor} p-6 text-center`}
                >
                  <div className={`text-2xl font-bold ${tier.color}`}>{tier.name}</div>
                  <div className="mt-4 text-4xl font-bold text-white">{tier.commissionRate}%</div>
                  <div className="mt-1 text-sm text-[var(--color-text-muted)]">Commission Rate</div>
                  <div className="mt-4 text-sm text-[var(--color-text-muted)]">
                    {tier.maxReferrals
                      ? `${tier.minReferrals}-${tier.maxReferrals} referrals`
                      : `${tier.minReferrals}+ referrals`}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white">Products & Services</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Earn commission by referring users to these ETC products and services.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {referralProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/20 text-[var(--color-primary)]">
                      {product.icon}
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      product.status === 'active'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {product.status === 'active' ? 'Active' : 'Coming Soon'}
                    </span>
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{product.name}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{product.description}</p>
                  <div className="mt-4 rounded-lg bg-[var(--bg)] p-3">
                    <span className="text-xs text-[var(--color-text-muted)]">Commission:</span>
                    <span className="ml-2 font-medium text-[var(--color-primary)]">{product.commission}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Signup */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8"
          >
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white">Join the Waitlist</h2>
              <p className="mt-2 text-[var(--color-text-muted)]">
                Be the first to know when the referral program launches.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4"
                >
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">You&apos;re on the list!</span>
                  </div>
                  <p className="mt-2 text-sm text-green-400/80">
                    We&apos;ll notify you when the referral program launches.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-white placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="ETC Wallet Address (optional)"
                      value={wallet}
                      onChange={(e) => setWallet(e.target.value)}
                      pattern="^0x[a-fA-F0-9]{40}$"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-white placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                    />
                    <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                      Provide your wallet to receive priority access
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[var(--color-primary)] py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
                  >
                    Join Waitlist
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
                <h3 className="font-semibold text-white">How are commissions paid?</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  All commissions are paid in ETC directly to your wallet address. Payments are processed
                  weekly with no minimum threshold.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
                <h3 className="font-semibold text-white">How long do referral links last?</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Referral cookies last for 30 days. If a user signs up within 30 days of clicking
                  your link, you&apos;ll receive credit for the referral.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
                <h3 className="font-semibold text-white">Can I refer myself?</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  No. Self-referrals are prohibited and will result in account termination.
                  Referrals must be genuine new users.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
                <h3 className="font-semibold text-white">Are there any restrictions?</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Spam, misleading promotions, and fake traffic are prohibited. We reserve the right
                  to review and void fraudulent referrals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="text-xl font-bold text-white">Promotional Resources</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              When the program launches, you&apos;ll have access to:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg bg-[var(--bg)] p-3">
                <svg aria-hidden="true" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span className="text-sm text-white">Banner Graphics</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-[var(--bg)] p-3">
                <svg aria-hidden="true" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <span className="text-sm text-white">Social Media Copy</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-[var(--bg)] p-3">
                <svg aria-hidden="true" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                <span className="text-sm text-white">Performance Dashboard</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

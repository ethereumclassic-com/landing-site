'use client'

import Link from 'next/link'
import { getArticlesByCategory, getCategoryById } from '../data/articles'
import ArticleCard from '../components/ArticleCard'

const securityFeatures = [
  {
    title: 'Wallet Security',
    description: 'Protect your wallet and private keys',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
    ),
  },
  {
    title: 'Scam Prevention',
    description: 'Identify and avoid common crypto scams',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Safe DeFi',
    description: 'Interact with smart contracts safely',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Hardware Wallets',
    description: 'Use cold storage for large holdings',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
]

const securityTips = [
  'Never share your seed phrase or private keys with anyone',
  'Use a hardware wallet for significant holdings',
  'Enable 2FA on all exchange accounts',
  'Verify contract addresses before interacting',
  'Start with small test transactions',
  'Keep software and firmware updated',
]

export default function SecurityPage() {
  const category = getCategoryById('security')
  const securityArticles = getArticlesByCategory('security')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent" />

        <div
          className="relative mx-auto max-w-4xl text-center"
        >
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to Learn
            </Link>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              {securityArticles.length} Article{securityArticles.length !== 1 ? 's' : ''}
            </span>
          </div>

          <h1
            className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl"
          >
            Security{' '}
            <span className="bg-gradient-to-r from-red-400 to-[var(--color-primary)] bg-clip-text text-transparent">
              Best Practices
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            {category?.description || 'Protect your crypto assets. Learn essential security practices for wallet safety, scam prevention, and safe DeFi interactions.'}
          </p>
        </div>
      </section>

      {/* Security Concepts */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)]/50 px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-[var(--text-primary)]">{feature.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Essential Security Rules</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Follow these rules to protect your crypto assets
            </p>

            <ul className="mt-6 space-y-3">
              {securityTips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-[var(--color-text-secondary)]">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">All Security Guides</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              In-depth guides to keep your crypto safe
            </p>
          </div>

          {securityArticles.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {securityArticles.map((article, index) => (
                <ArticleCard key={article.slug} article={article} index={index} />
              ))}
            </div>
          ) : (
            <div
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-12 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                <svg aria-hidden="true" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <p className="text-[var(--color-text-secondary)]">
                Security guides coming soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Hardware Wallet CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 md:flex md:items-center md:justify-between md:p-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">Maximum Security with Hardware Wallets</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Compare Ledger and Trezor for securing your ETC
                </p>
              </div>
            </div>
            <Link
              href="/wallet/compare"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-2.5 font-medium text-[var(--text-primary)] transition-all hover:bg-red-600 md:mt-0"
            >
              Compare Wallets
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] bg-gradient-to-b from-red-500/5 to-transparent px-6 py-16 md:px-10 lg:px-12">
        <div
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Stay Safe in Crypto
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
            Knowledge is your best defense. Learn the fundamentals and protect your assets.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/learn/wallets"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:bg-red-600"
            >
              Wallet Guides
            </Link>
            <Link
              href="/wallet"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-red-500/30 hover:bg-red-500/10"
            >
              Get a Secure Wallet
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

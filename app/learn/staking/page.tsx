'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getArticlesByCategory, getCategoryById } from '../data/articles'
import ArticleCard from '../components/ArticleCard'

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

const yieldFeatures = [
  {
    title: 'Liquidity Mining',
    description: 'Provide liquidity on ETCswap and earn fees',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: 'Trading Fees',
    description: 'Earn a share of swap fees from trades',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Concentrated Liquidity',
    description: 'Higher capital efficiency with V3 positions',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Risk Management',
    description: 'Understand IL and manage positions',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
]

export default function StakingPage() {
  const category = getCategoryById('staking')
  const stakingArticles = getArticlesByCategory('staking')

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
              href="/learn"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to Learn
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
              {stakingArticles.length} Article{stakingArticles.length !== 1 ? 's' : ''}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Yield &{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-[var(--color-primary)] bg-clip-text text-transparent">
              Liquidity
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            {category?.description || 'Earn yield on your ETC by providing liquidity to decentralized exchanges. Learn about LP tokens, trading fees, and impermanent loss.'}
          </motion.p>
        </motion.div>
      </section>

      {/* Important Notice */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)]/50 px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 rounded-xl border border-blue-500/30 bg-blue-500/5 p-4"
          >
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-blue-400">ETC is Proof-of-Work</h3>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                Ethereum Classic uses Proof-of-Work consensus, not Proof-of-Stake. You cannot &quot;stake&quot; ETC directly. However, you can earn yield by providing liquidity to decentralized exchanges like ETCswap.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Yield Features */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {yieldFeatures.map((feature, index) => (
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

      {/* How LP Works */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-white">How Liquidity Provision Works</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Earn yield by becoming a liquidity provider on ETCswap
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  step: 1,
                  title: 'Deposit Tokens',
                  description: 'Add equal value of two tokens (e.g., ETC + USC) to a liquidity pool',
                },
                {
                  step: 2,
                  title: 'Receive LP Tokens',
                  description: 'Get LP tokens representing your share of the pool',
                },
                {
                  step: 3,
                  title: 'Earn Trading Fees',
                  description: 'Collect a portion of fees from every swap through your pool',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4 text-center"
                >
                  <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="https://etcswap.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 font-medium text-white transition-all hover:bg-emerald-600"
              >
                Provide Liquidity on ETCswap
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Yield & Liquidity Guides</h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Learn how to earn yield on Ethereum Classic through DeFi
            </p>
          </motion.div>

          {stakingArticles.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stakingArticles.map((article, index) => (
                <ArticleCard key={article.slug} article={article} index={index} />
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
                Yield guides coming soon!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Risk Warning */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-amber-400">Understand the Risks</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  Providing liquidity involves risks including <strong>impermanent loss</strong> - when the value of your deposited tokens changes relative to holding them. The more volatile the trading pair, the higher the potential IL. Always research thoroughly and never invest more than you can afford to lose.
                </p>
              </div>
            </div>
          </motion.div>
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
            Start Earning Yield
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
            Put your ETC to work by providing liquidity on ETCswap. Earn trading fees from every swap.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://etcswap.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-medium text-white transition-all hover:bg-emerald-600"
            >
              Launch ETCswap
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <Link
              href="/learn/defi"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-emerald-500/30 hover:bg-emerald-500/10"
            >
              Learn DeFi Basics
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

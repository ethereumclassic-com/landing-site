'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface NewsCardProps {
  title: string
  date: string
  category: string
  link: string
  index: number
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
}

function NewsCard({ title, date, category, link, index }: NewsCardProps) {
  return (
    <motion.a
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      href={link}
      className="group block rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 transition-all hover:border-[var(--color-primary)]/30 hover:shadow-lg"
    >
      <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
        {category}
      </span>
      <h3 className="mt-3 font-semibold text-white transition-colors group-hover:text-[var(--color-primary)]">
        {title}
      </h3>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">{date}</p>
    </motion.a>
  )
}

export default function TrendingNews() {
  // Stub data - Phase 3 will add actual news system
  const articles = [
    {
      title: 'Classic OS v1.0 Launches with Full Mining Support',
      date: 'January 15, 2026',
      category: 'Product',
      link: '/news',
    },
    {
      title: 'ETCswap V3 Now Live with Concentrated Liquidity',
      date: 'January 10, 2026',
      category: 'DeFi',
      link: '/news',
    },
    {
      title: 'Network Hashrate Reaches All-Time High',
      date: 'January 5, 2026',
      category: 'Network',
      link: '/news',
    },
  ]

  return (
    <section className="bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">Latest News</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Stay updated with the ETC ecosystem
            </p>
          </div>
          <Link
            href="/news"
            className="hidden items-center gap-1 text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary)]/80 sm:flex"
          >
            View All
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {articles.map((article, index) => (
            <NewsCard key={article.title} {...article} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center sm:hidden"
        >
          <Link
            href="/news"
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)]"
          >
            View All News
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

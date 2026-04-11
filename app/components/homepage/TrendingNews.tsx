'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { articles as newsArticles } from '@/app/news/data/articles'

interface NewsCardProps {
  title: string
  date: string
  category: string
  slug: string
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

// Format date for display (e.g., "2024-01-31" -> "January 31, 2024")
function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function NewsCard({ title, date, category, slug, index }: NewsCardProps) {
  return (
    <Link
      href={`/news/${slug}`}
      className="group block"
    >
      <motion.div
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={fadeInUp}
        className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 transition-all hover:border-[var(--color-primary)]/30 hover:shadow-lg"
      >
        <span className="inline-block rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
          {category}
        </span>
        <h3 className="mt-3 font-semibold text-white transition-colors group-hover:text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{date}</p>
      </motion.div>
    </Link>
  )
}

export default function TrendingNews() {
  // Get the 3 most recent articles from the news data
  const latestArticles = newsArticles
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map((article) => ({
      title: article.title,
      date: formatDate(article.date),
      category: article.category,
      slug: article.slug,
    }))

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
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {latestArticles.map((article, index) => (
            <NewsCard key={article.slug} {...article} index={index} />
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
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

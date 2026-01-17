'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Article, ArticleCategory } from '../data/articles'
import { getArticlesByCategory } from '../data/articles'
import ArticleCard from './ArticleCard'

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

const categoryLabels: Record<ArticleCategory, string> = {
  basics: 'Basics',
  wallets: 'Wallets',
  trading: 'Trading',
  defi: 'DeFi',
  mining: 'Mining',
  staking: 'Staking',
  security: 'Security',
}

interface ArticlePageClientProps {
  article: Article
  content: React.ReactNode
}

export default function ArticlePageClient({ article, content }: ArticlePageClientProps) {
  const relatedArticles = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-16 md:px-10 lg:px-12">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 via-transparent to-transparent" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-2 text-sm">
            <Link
              href="/learn"
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              Learn
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <Link
              href={`/learn/${article.category}`}
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              {categoryLabels[article.category]}
            </Link>
          </motion.div>

          {/* Category & Read Time */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
              {categoryLabels[article.category]}
            </span>
            <span className="text-sm text-[var(--color-text-muted)]">
              {article.readTime} min read
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            {article.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-[var(--color-text-secondary)]"
          >
            {article.description}
          </motion.p>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <motion.div variants={fadeInUp} className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-sm text-[var(--color-text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed prose-a:text-[var(--color-primary)] prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-ul:text-[var(--color-text-secondary)] prose-ol:text-[var(--color-text-secondary)] prose-li:my-1 prose-code:text-[var(--color-primary)] prose-code:bg-[var(--color-primary)]/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[var(--panel)] prose-pre:border prose-pre:border-[var(--border)]"
          >
            {content}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-gradient-to-b from-[var(--color-primary)]/10 to-[var(--panel)] p-8 text-center"
          >
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[var(--color-text-secondary)]">
              Put your knowledge into practice. Get a wallet and start using Ethereum Classic today.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/wallet"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
              >
                Get a Wallet
              </Link>
              <Link
                href="/buy"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                Buy ETC
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-white md:text-2xl">Related Articles</h2>
                <p className="mt-1 text-[var(--color-text-muted)]">
                  Continue learning about {categoryLabels[article.category].toLowerCase()}
                </p>
              </div>
              <Link
                href={`/learn/${article.category}`}
                className="hidden items-center gap-1 text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)] sm:flex"
              >
                View All
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related, index) => (
                <ArticleCard key={related.slug} article={related} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

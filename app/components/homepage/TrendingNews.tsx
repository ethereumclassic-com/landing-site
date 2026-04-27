'use client'

import Link from 'next/link'
import { FadeIn } from '@/app/components/ui'
import { articles as newsArticles } from '@/app/news/data/articles'

interface NewsCardProps {
  title: string
  date: string
  category: string
  slug: string
  index: number
}

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
    <FadeIn delay={index * 100}>
      <Link href={`/news/${slug}`} className="group block">
        <div className="rounded-xl border border-[var(--border-default)] bg-[var(--background)] p-5 transition-all hover:border-[var(--brand-green)]/30 hover:shadow-lg">
          <span className="inline-block rounded-full bg-[var(--brand-green)]/10 px-3 py-1 text-xs font-medium text-[var(--brand-green)]">
            {category}
          </span>
          <h3 className="mt-3 font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--brand-green)]">
            {title}
          </h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{date}</p>
        </div>
      </Link>
    </FadeIn>
  )
}

export default function TrendingNews() {
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
        <FadeIn className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Latest News</h2>
            <p className="mt-2 text-[var(--text-muted)]">
              Stay updated with the ETC ecosystem
            </p>
          </div>
          <Link
            href="/news"
            className="hidden items-center gap-1 text-sm font-medium text-[var(--brand-green)] transition-colors hover:text-[var(--brand-green-hover)] sm:flex"
          >
            View All
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-3">
          {latestArticles.map((article, index) => (
            <NewsCard key={article.slug} {...article} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/news"
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--brand-green)]"
          >
            View All News
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

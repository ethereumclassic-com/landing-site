'use client'

import Link from 'next/link'
import {
  articles,
  getFeaturedArticles,
  getArticlesByCategory,
  getRecentArticles,
  getAllCategories,
  type ArticleCategory,
} from './data/articles'
import NewsCard from './components/NewsCard'
import NewsCardHero from './components/NewsCardHero'
import NewsCardCompact from './components/NewsCardCompact'
import NewsLead from './components/NewsLead'
import { CategoryIcon } from './components/CategoryIcon'
import EtcPriceTicker from './components/EtcPriceTicker'
import { DISCORD_INVITE_URL } from '@/lib/social'

function SectionHeader({ category, count }: { category: ArticleCategory; count: number }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="h-5 w-0.5 rounded-full bg-[var(--color-primary)]" aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          {category}
        </span>
        <span className="text-xs text-[var(--color-text-muted)]">({count})</span>
      </div>
      <div className="h-px flex-1 bg-[var(--border)]" aria-hidden />
      <Link
        href={`/news/category/${category.toLowerCase()}`}
        className="flex items-center gap-1 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
      >
        View all
        <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </Link>
    </div>
  )
}

export default function NewsPage() {
  const recentArticles = getRecentArticles(12)
  const categories = getAllCategories()

  // The lead is the newest featured story, falling back to the newest story if
  // nothing is flagged. Everything below it is filtered against what is already
  // shown, so the same headline never appears twice above the fold — the rail
  // previously drew straight from getRecentArticles and repeated the top items.
  const leadArticle = getFeaturedArticles()[0] ?? recentArticles[0]
  const secondaryArticles = recentArticles.filter((a) => a.slug !== leadArticle?.slug).slice(0, 6)

  const shownAbove = new Set([leadArticle?.slug, ...secondaryArticles.map((a) => a.slug)])
  const railLatest = recentArticles.filter((a) => !shownAbove.has(a.slug)).slice(0, 6)
  // Three, not four. The rail carries Latest + Most Read + Browse and ran ~1290px
  // tall against an ~855px lead column; trimming here plus a taller lead banner
  // brings the two columns to roughly the same depth.
  const railMostRead = getFeaturedArticles()
    .filter((a) => a.slug !== leadArticle?.slug)
    .slice(0, 3)

  const currentMonthYear = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })

  return (
    <main className="min-h-screen">

      {/* Masthead */}
      <header className="border-b border-[var(--border)] px-6 py-4 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <h1 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">ETC News</h1>
            <span className="hidden text-xs text-[var(--color-text-muted)] sm:block">Ethereum Classic</span>
          </div>
          <div className="hidden items-center gap-3 text-xs text-[var(--color-text-muted)] md:flex">
            <span>{articles.length} Articles</span>
            <span aria-hidden>·</span>
            <time>{currentMonthYear}</time>
          </div>
          <Link
            href="/news/feeds"
            className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)] hover:underline"
          >
            <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            RSS
          </Link>
        </div>
      </header>

      {/* Market strip. A slim band, not a card: a news page leads with news, and
          the full-height price card that used to sit here left ~950px of empty
          column beside the sidebar. */}
      <section className="px-6 pt-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <EtcPriceTicker />
        </div>
      </section>

      {/* Above the fold: lead story + secondary row, beside the rail */}
      <section className="px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">

          {/* Mobile category pills */}
          <div className="mb-6 flex gap-2 overflow-x-auto pb-1 scrollbar-none lg:hidden">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/news/category/${cat.toLowerCase()}`}
                className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)]"
              >
                {cat}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px] lg:items-start">

            {/* Lead + secondary stories. This column is what fills the height the
                sidebar sets, so the two now end at roughly the same place. */}
            <div className="flex flex-col gap-8">
              {leadArticle ? <NewsLead article={leadArticle} /> : null}

              {/* Secondary row: text-first, no art. Three headlines under the lead
                  is the standard newspaper move — the lead owns the image, and
                  repeating category art three times beneath it would compete with
                  it while saying nothing new. Written inline rather than as a
                  variant of NewsCardCompact, which is a horizontal rail item and
                  is used that way in the sidebar. */}
              {secondaryArticles.length > 0 && (
                <div className="grid gap-x-6 gap-y-6 border-t border-[var(--border)] pt-6 sm:grid-cols-3">
                  {secondaryArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/news/${article.slug}`}
                      className="group flex flex-col gap-1.5"
                    >
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                        <CategoryIcon category={article.category} size="sm" />
                        {article.category}
                      </span>
                      <h3 className="text-[15px] font-semibold leading-snug text-[var(--text-primary)] transition-colors group-hover:text-[var(--color-primary)]">
                        {article.title}
                      </h3>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                        {article.readTime ? ` · ${article.readTime} min read` : ''}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6 lg:self-start lg:border-l lg:border-[var(--border)] lg:pl-6">

              {/* Latest */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Latest</span>
                  <div className="h-px flex-1 bg-[var(--border)]" aria-hidden />
                </div>
                <div className="divide-y divide-[var(--border)]">
                  {railLatest.map((article, i) => (
                    <NewsCardCompact key={article.slug} article={article} index={i} showNumber />
                  ))}
                </div>
              </div>

              {/* Most Read */}
              <div className="border-t border-[var(--border)] pt-4">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Most Read</span>
                  <div className="h-px flex-1 bg-[var(--border)]" aria-hidden />
                </div>
                <div className="divide-y divide-[var(--border)]">
                  {railMostRead.map((article, i) => (
                    <NewsCardCompact key={article.slug} article={article} index={i} />
                  ))}
                </div>
              </div>

              {/* Browse */}
              <div className="border-t border-[var(--border)] pt-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Browse</p>
                <div className="flex flex-col gap-0.5">
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/news/category/${cat.toLowerCase()}`}
                      className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)]"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-[var(--color-text-muted)]">
                          <CategoryIcon category={cat} size="sm" />
                        </span>
                        {cat}
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {getArticlesByCategory(cat).length}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* Per-category sections */}
      {categories.map((category) => {
        const categoryArticles = getArticlesByCategory(category)
        if (categoryArticles.length === 0) return null

        return (
          <section
            key={category}
            id={category.toLowerCase()}
            className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12"
          >
            <div className="mx-auto max-w-6xl">
              <SectionHeader category={category} count={categoryArticles.length} />

              {categoryArticles.length >= 4 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr]">
                  <NewsCardHero article={categoryArticles[0]} index={0} />
                  <div>
                    <div className="divide-y divide-[var(--border)]">
                      {categoryArticles.slice(1, 5).map((article, i) => (
                        <NewsCardCompact key={article.slug} article={article} index={i} />
                      ))}
                    </div>
                    {categoryArticles.length > 5 && (
                      <Link
                        href={`/news/category/${category.toLowerCase()}`}
                        className="mt-4 flex items-center gap-1.5 rounded-md border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)]"
                      >
                        View {categoryArticles.length - 5} more {category.toLowerCase()} articles
                        <svg aria-hidden="true" className="ml-auto h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryArticles.map((article, i) => (
                    <NewsCard key={article.slug} article={article} index={i} />
                  ))}
                </div>
              )}
            </div>
          </section>
        )
      })}

      {/* Subscribe CTA */}
      <section className="border-t border-[var(--border)] bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent px-6 py-12 md:px-10 md:py-16 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10">
            <svg aria-hidden="true"
              className="h-8 w-8 text-[var(--color-primary)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Stay Connected</h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
            Join the Ethereum Classic community to get the latest updates and participate in discussions
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://x.com/ETC_Network"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 text-base font-medium text-[var(--background)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              Follow on X
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <Link
              href="/news/feeds"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-8 py-4 text-base font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              News Feeds
            </Link>
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-8 py-4 text-base font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              Join Discord
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}

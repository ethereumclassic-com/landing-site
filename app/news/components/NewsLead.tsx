'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import type { Article } from '../data/articles'
import { CategoryIcon } from './CategoryIcon'
import { categoryBannerSrc } from './categoryBanner'

/**
 * The lead story — the single largest item on the news index.
 *
 * Separate from NewsCardHero rather than a `size` prop on it, because the two
 * are different objects in a news layout and only look similar: the lead is one
 * per page, sets the page's entry point, and carries a dek and a byline; the
 * hero is one per category section and is a card in a grid. Folding both into
 * one component means every future change has to be qualified by which mode it
 * applies to.
 *
 * The banner is taller here (h-64) than on a section hero (h-32) because a lead
 * IS the visual anchor — that is the one place the art earns the height.
 */
export default function NewsLead({ article }: { article: Article }) {
  const { resolvedTheme } = useTheme()
  const isPlaceholder = !article.image
  const imageSrc = article.image ?? categoryBannerSrc(article.category, resolvedTheme)

  const date = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article>
      <Link href={`/news/${article.slug}`} className="group block">
        <div className="relative h-56 w-full overflow-hidden rounded-xl border border-[var(--border)] sm:h-64 lg:h-80">
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 62vw"
            unoptimized={isPlaceholder}
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            <CategoryIcon category={article.category} size="sm" />
            {article.category}
          </span>
          <span className="text-[var(--color-text-muted)]" aria-hidden>
            ·
          </span>
          <time className="text-[var(--color-text-muted)]" dateTime={article.date}>
            {date}
          </time>
          {article.readTime ? (
            <>
              <span className="text-[var(--color-text-muted)]" aria-hidden>
                ·
              </span>
              <span className="text-[var(--color-text-muted)]">{article.readTime} min read</span>
            </>
          ) : null}
        </div>

        <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--color-primary)] sm:text-3xl">
          {article.title}
        </h2>

        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
          {article.excerpt}
        </p>

        <p className="mt-4 text-xs text-[var(--color-text-muted)]">
          By {article.author ?? 'ETC Community'}
        </p>
      </Link>
    </article>
  )
}

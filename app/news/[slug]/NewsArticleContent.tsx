'use client'

import Link from 'next/link'
import { type Article, type ArticleCategory, getRelatedArticles, getAuthorInfo } from '../data/articles'
import { renderInline } from '../components/ArticleInline'
import { EMBED_COMPONENTS } from '../components/embeds'
import NewsBanner from '../components/NewsBanner'
import NewsCard from '../components/NewsCard'
import { parseArticle } from '../lib/content'

const categoryIcons: Record<ArticleCategory, React.ReactNode> = {
  Updates: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  ),
  Security: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  ),
  Ecosystem: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  ),
  Community: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    </svg>
  ),
  Development: (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// The body grammar lives in ../lib/content, which the feeds share, so the page
// and the feeds render the same blocks.
function renderContent(content: string): React.ReactNode {
  return parseArticle(content).map((block, key) => {
    switch (block.type) {
      case 'h2':
        return (
          <h2 key={key} className="mb-4 mt-8 text-xl font-bold text-[var(--text-primary)]">
            {block.text}
          </h2>
        )
      case 'h3':
        return (
          <h3 key={key} className="mb-3 mt-6 text-lg font-semibold text-[var(--text-primary)]">
            {block.text}
          </h3>
        )
      case 'p':
        return (
          <p key={key} className="my-4 text-[var(--color-text-secondary)] leading-relaxed">
            {renderInline(block.inline)}
          </p>
        )
      case 'ol':
        return (
          <ol key={key} className="my-4 ml-6 list-decimal space-y-2 text-[var(--color-text-secondary)]">
            {block.items.map((item, i) => (
              <li key={i}>{renderInline(item)}</li>
            ))}
          </ol>
        )
      case 'ul':
        return (
          <ul key={key} className="my-4 ml-6 list-disc space-y-2 text-[var(--color-text-secondary)]">
            {block.items.map((item, i) => (
              <li key={i}>{renderInline(item)}</li>
            ))}
          </ul>
        )
      case 'task':
        return (
          <div key={key} className="my-1 flex items-center gap-2 text-[var(--color-text-secondary)]">
            <span className={`flex h-5 w-5 items-center justify-center rounded border ${block.checked ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/20 text-[var(--color-primary)]' : 'border-[var(--border)]'}`}>
              {block.checked && (
                <svg aria-hidden="true" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </span>
            {block.text}
          </div>
        )
      case 'code':
        return (
          <pre key={key} className="my-4 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4">
            <code className="text-sm text-[var(--color-text-secondary)]">{block.text}</code>
          </pre>
        )
      case 'table':
        return (
          <div key={key} className="my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  {block.header.map((cell, i) => (
                    <th key={i} className="px-4 py-2 text-left font-semibold text-[var(--text-primary)]">
                      {renderInline(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className="border-b border-[var(--border)]/50">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-2 text-[var(--color-text-secondary)]">
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      case 'callout':
        return (
          <aside
            key={key}
            className="not-prose my-8 rounded-xl border border-[var(--border)] border-l-4 border-l-[var(--color-primary)] bg-[var(--bg-elevated)] px-6 py-5"
          >
            {block.title && (
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                {block.title}
              </p>
            )}
            <ul className="list-disc space-y-2 pl-5 text-[var(--color-text-secondary)] marker:text-[var(--color-primary)]">
              {block.items.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {renderInline(item)}
                </li>
              ))}
            </ul>
          </aside>
        )
      case 'embed': {
        // The typography styles stop at an embed, which styles everything it renders itself.
        const Embed = EMBED_COMPONENTS[block.name]
        return (
          <div key={key} className="not-prose">
            <Embed />
          </div>
        )
      }
    }
  })
}

interface NewsArticleContentProps {
  article: Article
}

export default function NewsArticleContent({ article }: NewsArticleContentProps) {
  const authorInfo = article.author ? getAuthorInfo(article.author) : undefined
  const relatedArticles = getRelatedArticles(article, 3)

  return (
    <main className="min-h-screen">
      {/* Article Header */}
      <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
        <div
          className="relative mx-auto max-w-4xl"
        >
          <div className="mb-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-1 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to News
            </Link>
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-4">
            <Link
              href={`/news/category/${article.category.toLowerCase()}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/20"
            >
              {categoryIcons[article.category]}
              {article.category}
            </Link>
            <time dateTime={article.date} className="text-sm text-[var(--color-text-muted)]">
              {formatDate(article.date)}
            </time>
            {article.updated && (
              <span className="text-sm text-[var(--color-text-muted)]">
                Updated <time dateTime={article.updated}>{formatDate(article.updated)}</time>
              </span>
            )}
            {article.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-warning)]/20 px-3 py-1 text-xs font-medium text-[var(--color-warning)]">
                <svg aria-hidden="true" className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl">{article.title}</h1>

          <p className="mt-6 text-lg text-[var(--color-text-secondary)]">{article.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            {article.author && (
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)]">
                  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[var(--text-primary)]">{article.author}</span>
                    {authorInfo?.twitter && (
                      <a
                        href={`https://twitter.com/${authorInfo.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)]">{authorInfo?.role || 'Author'}</div>
                </div>
              </div>
            )}
            {article.readTime && (
              <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.readTime} min read
              </div>
            )}
          </div>

          {article.tags && article.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/news/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-sm text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)]"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}

          <div className="relative mt-10 aspect-[5/2] w-full overflow-hidden rounded-xl border border-[var(--border)]">
            <NewsBanner
              slug={article.slug}
              image={article.image}
              lead
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="border-y border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div
          className="mx-auto max-w-3xl"
        >
          {article.content ? (
            <article className="prose prose-invert max-w-none">
              {renderContent(article.content)}
            </article>
          ) : (
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                <svg aria-hidden="true" className="h-8 w-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">Full Article Coming Soon</h3>
              <p className="mx-auto mt-3 max-w-md text-[var(--color-text-secondary)]">
                This article content is being prepared. Check back soon for the full story.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">Related Articles</h2>
              <p className="mt-2 text-[var(--color-text-secondary)]">
                More news and updates from the Ethereum Classic ecosystem
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((relatedArticle, index) => (
                <NewsCard key={relatedArticle.slug} article={relatedArticle} index={index} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/news" className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline">
                View all news
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Share CTA */}
      <section className="border-t border-[var(--border)] bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent px-6 py-16 md:px-10 lg:px-12">
        <div
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Share This Article</h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
            Help spread the word about Ethereum Classic and support the ecosystem
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`https://x.com/intent/post?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://ethereumclassic.com/news/${article.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-base font-medium text-[var(--background)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              Share on X
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <Link
              href="/news"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 text-base font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to News
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

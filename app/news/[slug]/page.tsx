'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { getArticleBySlug, getRelatedArticles, getAuthorInfo, type ArticleCategory } from '../data/articles'
import NewsCard from '../components/NewsCard'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const categoryIcons: Record<ArticleCategory, React.ReactNode> = {
  Updates: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  ),
  Security: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  ),
  Ecosystem: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  ),
  Community: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    </svg>
  ),
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Simple markdown-like content renderer
function renderContent(content: string): React.ReactNode {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let currentList: string[] = []
  let listType: 'ul' | 'ol' | null = null
  let inCodeBlock = false
  let codeBlockContent: string[] = []
  let codeBlockLang = ''
  let inTable = false
  let tableRows: string[][] = []

  const flushList = () => {
    if (currentList.length > 0) {
      if (listType === 'ol') {
        elements.push(
          <ol key={elements.length} className="my-4 ml-6 list-decimal space-y-2 text-[var(--color-text-secondary)]">
            {currentList.map((item, i) => (
              <li key={i}>{renderInlineContent(item)}</li>
            ))}
          </ol>
        )
      } else {
        elements.push(
          <ul key={elements.length} className="my-4 ml-6 list-disc space-y-2 text-[var(--color-text-secondary)]">
            {currentList.map((item, i) => (
              <li key={i}>{renderInlineContent(item)}</li>
            ))}
          </ul>
        )
      }
      currentList = []
      listType = null
    }
  }

  const flushTable = () => {
    if (tableRows.length > 1) {
      const [header, ...rows] = tableRows
      elements.push(
        <div key={elements.length} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[var(--border)]">
                {header.map((cell, i) => (
                  <th key={i} className="px-4 py-2 text-left font-semibold text-white">
                    {cell.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.filter((row) => !row.every((cell) => /^[-|:]+$/.test(cell.trim()))).map((row, i) => (
                <tr key={i} className="border-b border-[var(--border)]/50">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-2 text-[var(--color-text-secondary)]">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      tableRows = []
      inTable = false
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Code block handling
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre
            key={elements.length}
            className="my-4 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4"
          >
            <code className="text-sm text-[var(--color-text-secondary)]">{codeBlockContent.join('\n')}</code>
          </pre>
        )
        codeBlockContent = []
        inCodeBlock = false
      } else {
        flushList()
        flushTable()
        inCodeBlock = true
        codeBlockLang = line.slice(3)
      }
      continue
    }

    if (inCodeBlock) {
      codeBlockContent.push(line)
      continue
    }

    // Table handling
    if (line.includes('|') && line.trim().startsWith('|')) {
      flushList()
      inTable = true
      const cells = line.split('|').slice(1, -1)
      tableRows.push(cells)
      continue
    } else if (inTable) {
      flushTable()
    }

    // Empty line
    if (line.trim() === '') {
      flushList()
      continue
    }

    // Headers
    if (line.startsWith('## ')) {
      flushList()
      elements.push(
        <h2 key={elements.length} className="mb-4 mt-8 text-xl font-bold text-white">
          {line.slice(3)}
        </h2>
      )
      continue
    }

    if (line.startsWith('### ')) {
      flushList()
      elements.push(
        <h3 key={elements.length} className="mb-3 mt-6 text-lg font-semibold text-white">
          {line.slice(4)}
        </h3>
      )
      continue
    }

    // Ordered list
    const orderedMatch = line.match(/^(\d+)\.\s+(.+)$/)
    if (orderedMatch) {
      if (listType !== 'ol') {
        flushList()
        listType = 'ol'
      }
      currentList.push(orderedMatch[2])
      continue
    }

    // Unordered list
    if (line.startsWith('- ')) {
      if (listType !== 'ul') {
        flushList()
        listType = 'ul'
      }
      currentList.push(line.slice(2))
      continue
    }

    // Checkbox list
    if (line.startsWith('- [ ] ') || line.startsWith('- [x] ')) {
      flushList()
      const checked = line.startsWith('- [x] ')
      const text = line.slice(6)
      elements.push(
        <div key={elements.length} className="my-1 flex items-center gap-2 text-[var(--color-text-secondary)]">
          <span className={`flex h-5 w-5 items-center justify-center rounded border ${checked ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/20 text-[var(--color-primary)]' : 'border-[var(--border)]'}`}>
            {checked && (
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            )}
          </span>
          {text}
        </div>
      )
      continue
    }

    // Regular paragraph
    flushList()
    elements.push(
      <p key={elements.length} className="my-4 text-[var(--color-text-secondary)] leading-relaxed">
        {renderInlineContent(line)}
      </p>
    )
  }

  flushList()
  flushTable()

  return elements
}

// Render inline content (bold, links, code)
function renderInlineContent(text: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  let remaining = text
  let keyCounter = 0

  while (remaining.length > 0) {
    // Bold text
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
    // Links
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/)
    // Inline code
    const codeMatch = remaining.match(/`([^`]+)`/)

    const matches = [
      boldMatch ? { type: 'bold', match: boldMatch, index: boldMatch.index! } : null,
      linkMatch ? { type: 'link', match: linkMatch, index: linkMatch.index! } : null,
      codeMatch ? { type: 'code', match: codeMatch, index: codeMatch.index! } : null,
    ].filter(Boolean).sort((a, b) => a!.index - b!.index)

    if (matches.length === 0) {
      parts.push(remaining)
      break
    }

    const firstMatch = matches[0]!

    // Add text before match
    if (firstMatch.index > 0) {
      parts.push(remaining.slice(0, firstMatch.index))
    }

    if (firstMatch.type === 'bold') {
      parts.push(
        <strong key={keyCounter++} className="font-semibold text-white">
          {firstMatch.match![1]}
        </strong>
      )
      remaining = remaining.slice(firstMatch.index + firstMatch.match![0].length)
    } else if (firstMatch.type === 'link') {
      const href = firstMatch.match![2]
      const isExternal = href.startsWith('http')
      parts.push(
        isExternal ? (
          <a
            key={keyCounter++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:underline"
          >
            {firstMatch.match![1]}
          </a>
        ) : (
          <Link key={keyCounter++} href={href} className="text-[var(--color-primary)] hover:underline">
            {firstMatch.match![1]}
          </Link>
        )
      )
      remaining = remaining.slice(firstMatch.index + firstMatch.match![0].length)
    } else if (firstMatch.type === 'code') {
      parts.push(
        <code
          key={keyCounter++}
          className="rounded bg-[var(--panel)] px-1.5 py-0.5 text-sm text-[var(--color-primary)]"
        >
          {firstMatch.match![1]}
        </code>
      )
      remaining = remaining.slice(firstMatch.index + firstMatch.match![0].length)
    }
  }

  return parts.length === 1 ? parts[0] : parts
}

export default function NewsArticlePage() {
  const params = useParams()
  const slug = params.slug as string
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const authorInfo = article.author ? getAuthorInfo(article.author) : undefined
  const relatedArticles = getRelatedArticles(article, 3)

  return (
    <main className="min-h-screen">
      {/* Article Header */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 via-transparent to-transparent" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative mx-auto max-w-4xl"
        >
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-1 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to News
            </Link>
          </div>

          {/* Category & Date */}
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <Link
              href={`/news/category/${article.category.toLowerCase()}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/20"
            >
              {categoryIcons[article.category]}
              {article.category}
            </Link>
            <time className="text-sm text-[var(--color-text-muted)]">{formatDate(article.date)}</time>
            {article.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">{article.title}</h1>

          {/* Excerpt */}
          <p className="mt-6 text-lg text-[var(--color-text-secondary)]">{article.excerpt}</p>

          {/* Author & Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-6">
            {article.author && (
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">{article.author}</span>
                    {authorInfo?.twitter && (
                      <a
                        href={`https://twitter.com/${authorInfo.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
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
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.readTime} min read
              </div>
            )}
          </div>

          {/* Tags */}
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
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="border-y border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          {article.content ? (
            <article className="prose prose-invert max-w-none">
              {renderContent(article.content)}
            </article>
          ) : (
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                <svg
                  className="h-8 w-8 text-[var(--color-primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Full Article Coming Soon</h3>
              <p className="mx-auto mt-3 max-w-md text-[var(--color-text-secondary)]">
                This article content is being prepared. Check back soon for the full story.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href="https://twitter.com/eth_classic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline"
                >
                  Follow @eth_classic for updates
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white">Related Articles</h2>
              <p className="mt-2 text-[var(--color-text-secondary)]">
                More news and updates from the Ethereum Classic ecosystem
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((relatedArticle, index) => (
                <NewsCard key={relatedArticle.slug} article={relatedArticle} index={index} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline"
              >
                View all news
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Share CTA */}
      <section className="border-t border-[var(--border)] bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent px-6 py-16 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-bold text-white">Share This Article</h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
            Help spread the word about Ethereum Classic and support the ecosystem
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://ethereumclassic.com/news/${article.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-base font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              Share on X
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <Link
              href="/news"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 text-base font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to News
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

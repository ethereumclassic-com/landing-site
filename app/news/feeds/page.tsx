import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'News Feeds — Ethereum Classic',
  description:
    'Subscribe to Ethereum Classic news via RSS, Atom, or JSON Feed. Get network upgrades, security updates, and ecosystem news delivered to your feed reader.',
}

const feeds = [
  {
    name: 'RSS 2.0',
    url: 'https://ethereumclassic.com/news/feed.xml',
    description: 'The most widely supported feed format. Works with virtually every feed reader and news aggregator.',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    name: 'Atom 1.0',
    url: 'https://ethereumclassic.com/news/atom.xml',
    description: 'Standard feed format defined by RFC 4287. Preferred by many aggregators for its strict specification.',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    name: 'JSON Feed 1.1',
    url: 'https://ethereumclassic.com/news/feed.json',
    description: 'Modern feed format using JSON instead of XML. Ideal for developers building integrations.',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
]

const readers = [
  { name: 'NetNewsWire', url: 'https://netnewswire.com', platforms: 'macOS, iOS' },
  { name: 'Feedly', url: 'https://feedly.com', platforms: 'Web, iOS, Android' },
  { name: 'Inoreader', url: 'https://www.inoreader.com', platforms: 'Web, iOS, Android' },
  { name: 'Feedbin', url: 'https://feedbin.com', platforms: 'Web' },
  { name: 'Thunderbird', url: 'https://www.thunderbird.net', platforms: 'Windows, macOS, Linux' },
  { name: 'Miniflux', url: 'https://miniflux.app', platforms: 'Self-hosted' },
]

export default function FeedsPage() {
  return (
    <main className="min-h-screen px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-4">
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

        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">News Feeds</h1>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          Subscribe to Ethereum Classic news using a feed reader. Get network upgrades, security updates, and ecosystem news delivered automatically — no account needed.
        </p>

        {/* Available Feeds */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Available Feeds</h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            All three formats deliver the same content. Choose whichever your feed reader supports.
          </p>

          <div className="mt-6 space-y-4">
            {feeds.map((feed) => (
              <div
                key={feed.name}
                className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {feed.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-[var(--text-primary)]">{feed.name}</h3>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{feed.description}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <code className="block truncate rounded bg-black/30 px-3 py-1.5 text-xs text-[var(--color-text-secondary)]">
                        {feed.url}
                      </code>
                      <a
                        href={feed.url}
                        className="shrink-0 text-sm font-medium text-[var(--color-primary)] hover:underline"
                      >
                        Open
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feed Readers */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Feed Readers</h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            A feed reader checks for new articles automatically and displays them in a clean reading interface. Here are some popular options:
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {readers.map((reader) => (
              <a
                key={reader.name}
                href={reader.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-3 transition-colors hover:border-[var(--color-primary)]/30"
              >
                <div>
                  <span className="font-medium text-[var(--text-primary)]">{reader.name}</span>
                  <span className="ml-2 text-xs text-[var(--color-text-muted)]">{reader.platforms}</span>
                </div>
                <svg aria-hidden="true" className="h-4 w-4 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* For Developers */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">For Developers</h2>
          <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-5 text-sm text-[var(--color-text-secondary)] space-y-3">
            <p>
              All pages on this site include <code className="rounded bg-black/30 px-1.5 py-0.5 text-xs text-[var(--color-primary)]">&lt;link rel=&quot;alternate&quot;&gt;</code> tags for autodiscovery. Feed readers and aggregators can detect our feeds automatically from any page URL.
            </p>
            <p>
              Feeds include full article content (not just excerpts) and update hourly. Please respect the <code className="rounded bg-black/30 px-1.5 py-0.5 text-xs text-[var(--color-primary)]">Cache-Control</code> and <code className="rounded bg-black/30 px-1.5 py-0.5 text-xs text-[var(--color-primary)]">TTL</code> headers — polling more frequently than once per hour returns cached content.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '../components/layout/Container'
import sitemap from '../sitemap'
import { SITE_SECTIONS, STATIC_ROUTES } from '@/lib/site-routes'
import { walletReviews } from '../wallet/data/reviews'
import { exchangeReviews } from '../buy/data/reviews'
import { apps } from '../apps/data/apps'
import { articles as learnArticles } from '../learn/data/articles'
import { philosophyArticles } from '../why-classic/data/philosophy'
import { articles as newsArticles, tagPath } from '../news/data/articles'
import { cdcEntries } from '../core-devs/data/index'
import { nodeClients, executionPlugins } from '../build/data/build'
import { miningPools } from '../mining/data/mining'

export const metadata: Metadata = {
  title: 'Site Map | Ethereum Classic',
  description: 'Every page on ethereumclassic.com by section: guides, tools, research, news, reviews and the Olympia upgrade proposal.',
}

interface SiteLink {
  href: string
  label: string
}

interface SiteGroup {
  title: string
  links: SiteLink[]
}

const staticLabel = (path: string) => STATIC_ROUTES.find((route) => route.path === path)?.label

/** The pages generated from data, each under the section that holds their hub. */
function generatedGroups(): Record<string, SiteGroup[]> {
  const learnCategories = [...new Set(learnArticles.map((article) => article.category))]
  const tags = [...new Set(newsArticles.flatMap((article) => article.tags ?? []))].sort((a, b) => a.localeCompare(b))
  return {
    Wallets: [{ title: 'Wallet reviews', links: walletReviews.map((r) => ({ href: `/wallet/reviews/${r.slug}`, label: r.name })) }],
    'Buy and Sell': [{ title: 'Exchange reviews', links: exchangeReviews.map((r) => ({ href: `/buy/reviews/${r.slug}`, label: r.name })) }],
    Apps: [{ title: 'Listed apps', links: apps.map((app) => ({ href: `/apps/${app.slug}`, label: app.name })) }],
    Learn: learnCategories.map((category) => ({
      title: staticLabel(`/learn/${category}`) ?? category,
      links: learnArticles
        .filter((article) => article.category === category)
        .map((article) => ({ href: `/learn/${article.category}/${article.slug}`, label: article.title })),
    })),
    'Why Classic': [{ title: 'Articles', links: philosophyArticles.map((a) => ({ href: `/why-classic/${a.slug}`, label: a.title })) }],
    News: [
      {
        title: 'Articles',
        links: [...newsArticles]
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((article) => ({ href: `/news/${article.slug}`, label: article.title })),
      },
      { title: 'Topics', links: tags.map((tag) => ({ href: tagPath(tag), label: tag })) },
    ],
    Mining: [{ title: 'Pool guides', links: miningPools.map((pool) => ({ href: `/mining/pools/${pool.id}`, label: pool.name })) }],
    Build: [
      {
        title: 'Clients and plugins',
        links: [...nodeClients, ...executionPlugins].map((entry) => ({ href: `/build/clients/${entry.id}`, label: entry.name })),
      },
    ],
    'Network Upgrades': [
      { title: 'Core Developer Calls', links: cdcEntries.map((entry) => ({ href: `/core-devs/${entry.slug}`, label: entry.title })) },
    ],
  }
}

/**
 * Builds the map and checks it against the sitemap search engines read: a page listed there and missing
 * here fails the build, so this page cannot fall behind the site again.
 */
function buildSiteMap() {
  const generated = generatedGroups()
  const sections = SITE_SECTIONS.map((section) => ({
    title: section.title,
    links: section.routes.map((route) => ({ href: route.path || '/', label: route.label })),
    groups: generated[section.title] ?? [],
  }))
  const listed = new Set(sections.flatMap((s) => [...s.links, ...s.groups.flatMap((g) => g.links)]).map((l) => l.href))
  const missing = sitemap()
    .map((entry) => new URL(entry.url).pathname)
    .filter((path) => !listed.has(path))
  if (missing.length > 0) {
    throw new Error(`/site-map is missing pages that app/sitemap.ts lists: ${missing.join(', ')}`)
  }
  return { sections, total: listed.size }
}

const linkClass = 'text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]'

export default function SitemapPage() {
  const { sections, total } = buildSiteMap()
  return (
    <div className="min-h-screen py-20">
      <Container size="xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] md:text-5xl">Site Map</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            All {total} pages on ethereumclassic.com, by section.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h2 className="mb-4 text-lg font-semibold text-[var(--color-text-primary)]">{section.title}</h2>
              <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {section.groups.map((group) => (
                <div key={group.title} className="mt-6 border-t border-[var(--border)] pt-4">
                  <h3 className="mb-3 text-sm font-semibold text-[var(--color-text-primary)]">{group.title}</h3>
                  <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className={linkClass}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ))}
        </div>
      </Container>
    </div>
  )
}

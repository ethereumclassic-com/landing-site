import type { MetadataRoute } from 'next'
import { execSync } from 'child_process'
import { existsSync } from 'fs'
import { miningPools } from './mining/data/mining'
import { walletReviews } from './wallet/data/reviews'
import { articles as newsArticles, tagPath } from './news/data/articles'
import { apps } from './apps/data/apps'
import { articles as learnArticles } from './learn/data/articles'
import { exchangeReviews } from './buy/data/reviews'
import { cdcEntries } from './core-devs/data/index'
import { philosophyArticles } from './why-classic/data/philosophy'
import { nodeClients, executionPlugins } from './build/data/build'
import { STATIC_ROUTES, CORE_GETH_DATA, FUKUII_DATA } from '@/lib/site-routes'

const baseUrl = 'https://ethereumclassic.com'

// Build a map of file path → last commit date in one git log pass.
// Single subprocess call covers all ~150 static routes efficiently. lib/ is
// included because shared data there (lib/core-geth.ts) renders on several pages.
function buildDateMap(): Map<string, Date> {
  const map = new Map<string, Date>()
  try {
    const raw = execSync(
      `git log --name-only --diff-filter=AM --pretty=format:"%cI" HEAD -- app/ lib/`,
      { encoding: 'utf8', cwd: process.cwd() }
    )
    let currentDate = new Date()
    for (const line of raw.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed) continue
      const d = new Date(trimmed)
      if (!isNaN(d.getTime())) {
        currentDate = d
      } else if (!map.has(trimmed)) {
        // First occurrence = most recent commit for that file
        map.set(trimmed, currentDate)
      }
    }
  } catch {
    // fallback: map stays empty, pageDate/dataDate return new Date()
  }
  return map
}

const dateMap = buildDateMap()

function dataDate(dataFile: string): Date {
  return dateMap.get(dataFile) ?? new Date()
}

/**
 * The newest commit date among the files a page is built from, the first being
 * the page itself. A source path that does not exist fails the build: dropped
 * silently, it would leave the page dated by an older file.
 */
function newestDate(label: string, [page, ...sources]: string[]): Date {
  const dates = [dataDate(page)]
  for (const source of sources) {
    if (!existsSync(source)) {
      throw new Error(`sitemap: ${label} names a source that does not exist: ${source}`)
    }
    const date = dateMap.get(source)
    if (date) dates.push(date)
  }
  return new Date(Math.max(...dates.map((date) => date.getTime())))
}

/**
 * A page's date is the newest of its page.tsx and the files in `sources`: a page
 * whose words come from a data module or a layout changes when that file does,
 * and its own page.tsx can sit untouched for months.
 */
function pageDate(route: string, sources: string[] = []): Date {
  const file = route === '' ? 'app/page.tsx' : `app${route}/page.tsx`
  return newestDate(route || '/', [file, ...sources])
}


// The static routes and their sections live in lib/site-routes.ts, which /site-map reads too.
const staticRoutes = STATIC_ROUTES

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes — each gets the git commit date of its page.tsx
  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: pageDate(route.path, route.sources),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Dynamic routes - Node clients and execution plugins, one template fed by build.ts
  const clientDate = newestDate('/build/clients/[client]', [
    'app/build/clients/[client]/page.tsx',
    'app/build/data/build.ts',
    CORE_GETH_DATA,
    FUKUII_DATA,
  ])
  const clientEntries = [...nodeClients, ...executionPlugins].map((entry) => ({
    url: `${baseUrl}/build/clients/${entry.id}`,
    lastModified: clientDate,
    changeFrequency: 'weekly' as const,
    priority: nodeClients.some((client) => client.id === entry.id) ? 0.8 : 0.5,
  }))

  // Dynamic routes - Mining pools
  const miningDataDate = dataDate('app/mining/data/mining.ts')
  const poolEntries = miningPools.map((pool) => ({
    url: `${baseUrl}/mining/pools/${pool.id}`,
    lastModified: miningDataDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // No per-model hardware pages exist: /mining/hardware lists every model on one page, so each
  // model has no URL of its own to list.

  // Dynamic routes - Wallet reviews
  const walletDataDate = dataDate('app/wallet/data/reviews.ts')
  const walletReviewEntries = walletReviews.map((review) => ({
    url: `${baseUrl}/wallet/reviews/${review.slug}`,
    lastModified: walletDataDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Dynamic routes - Apps
  const appsDataDate = dataDate('app/apps/data/apps.ts')
  const appEntries = apps.map((app) => ({
    url: `${baseUrl}/apps/${app.slug}`,
    lastModified: appsDataDate,
    changeFrequency: 'weekly' as const,
    priority: app.featured ? 0.7 : 0.5,
  }))

  // Dynamic routes - News articles, dated by publication or by the correction that followed it
  const newsEntries = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.updated ?? article.date),
    changeFrequency: 'weekly' as const,
    priority: article.featured ? 0.7 : 0.5,
  }))

  // Dynamic routes - News tags
  const newsDataDate = dataDate('app/news/data/articles.ts')
  const allTags = [...new Set(newsArticles.flatMap((a) => a.tags || []))]
  const tagEntries = allTags.map((tag) => ({
    url: `${baseUrl}${tagPath(tag)}`,
    lastModified: newsDataDate,
    changeFrequency: 'weekly' as const,
    priority: 0.4,
  }))

  // Dynamic routes - Learn articles by category
  const learnDataDate = dataDate('app/learn/data/articles.ts')
  // An article already listed as a static route (with its own priority) is not listed twice.
  const staticPaths = new Set(staticRoutes.map((route) => route.path))
  const learnEntries = learnArticles
    .filter((article) => !staticPaths.has(`/learn/${article.category}/${article.slug}`))
    .map((article) => ({
      url: `${baseUrl}/learn/${article.category}/${article.slug}`,
      lastModified: learnDataDate,
      changeFrequency: 'weekly' as const,
      priority: article.featured ? 0.7 : 0.5,
    }))

  // Dynamic routes - Exchange reviews
  const exchangeDataDate = dataDate('app/buy/data/reviews.ts')
  // /exchanges/reviews/<slug> redirects to /buy/reviews/<slug>, which is listed
  // below, so listing both put a redirect and its destination in the same sitemap.

  const buyReviewEntries = exchangeReviews.map((review) => ({
    url: `${baseUrl}/buy/reviews/${review.slug}`,
    lastModified: exchangeDataDate,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  // Dynamic routes - Core Devs Call entries. A held call is dated by its call; the upcoming one, whose
  // date is TBD, is an agenda and is dated by its own file.
  const cdcSitemapEntries = cdcEntries.map((entry) => ({
    url: `${baseUrl}/core-devs/${entry.slug}`,
    lastModified: entry.date.includes('TBD')
      ? newestDate(`/core-devs/${entry.slug}`, [`app/core-devs/data/calls/${entry.slug}.ts`])
      : new Date(entry.date),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  // Dynamic routes - Why Classic philosophy articles
  const philosophyDataDate = dataDate('app/why-classic/data/philosophy.ts')
  const philosophyEntries = philosophyArticles.map((article) => ({
    url: `${baseUrl}/why-classic/${article.slug}`,
    lastModified: philosophyDataDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    ...staticEntries,
    ...clientEntries,
    ...poolEntries,
    ...walletReviewEntries,
    ...appEntries,
    ...newsEntries,
    ...tagEntries,
    ...learnEntries,
    ...buyReviewEntries,
    ...cdcSitemapEntries,
    ...philosophyEntries,
  ]
}

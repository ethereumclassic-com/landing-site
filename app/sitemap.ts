import type { MetadataRoute } from 'next'
import { execSync } from 'child_process'
import { miningPools, miningHardware } from './mining/data/mining'
import { walletReviews } from './wallet/data/reviews'
import { articles as newsArticles } from './news/data/articles'
import { apps } from './apps/data/apps'
import { articles as learnArticles } from './learn/data/articles'
import { exchangeReviews } from './buy/data/reviews'
import { reports } from './research/data/research'
import { cdcEntries } from './core-devs/data/index'
import { philosophyArticles } from './why-classic/data/philosophy'
import { getAllFAQSections } from './faq/data/faqs'

const baseUrl = 'https://ethereumclassic.com'

// Build a map of file path → last commit date in one git log pass.
// Single subprocess call covers all ~150 static routes efficiently.
function buildDateMap(): Map<string, Date> {
  const map = new Map<string, Date>()
  try {
    const raw = execSync(
      `git log --name-only --diff-filter=AM --pretty=format:"%cI" HEAD -- app/`,
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

function pageDate(route: string): Date {
  const file = route === '' ? 'app/page.tsx' : `app${route}/page.tsx`
  return dateMap.get(file) ?? new Date()
}

function dataDate(dataFile: string): Date {
  return dateMap.get(dataFile) ?? new Date()
}

// Static routes - all main pages
const staticRoutes = [
  // Core pages
  { path: '', priority: 1.0, changeFrequency: 'daily' as const },
  { path: '/about', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/contact', priority: 0.5, changeFrequency: 'weekly' as const },
  { path: '/advertise', priority: 0.5, changeFrequency: 'weekly' as const },
  { path: '/partners', priority: 0.5, changeFrequency: 'weekly' as const },
  { path: '/legal', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/site-map', priority: 0.3, changeFrequency: 'weekly' as const },

  // Wallet section
  { path: '/wallet', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/wallet/classic-os', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/wallet/metamask', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/wallet/hardware', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/wallet/compare', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/wallet/reviews', priority: 0.7, changeFrequency: 'weekly' as const },

  // Buy/Sell section
  { path: '/buy', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/buy/exchanges', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/buy/instant', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/buy/p2p', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/buy/atm', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/buy/card', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/buy/bank', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/buy/reviews', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/sell', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/sell/exchanges', priority: 0.7, changeFrequency: 'weekly' as const },

  // Exchanges section
  { path: '/exchanges', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/exchanges/reviews', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/exchanges/compare', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/exchanges/beginners', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/exchanges/lowest-fees', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/exchanges/most-secure', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/exchanges/decentralized', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/exchanges/no-kyc', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/exchanges/us-friendly', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/exchanges/staking', priority: 0.5, changeFrequency: 'weekly' as const },

  // Apps section
  { path: '/apps', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/apps/featured', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/apps/defi', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/apps/payments', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/apps/tools', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/apps/infrastructure', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/apps/governance', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/apps/submit', priority: 0.4, changeFrequency: 'weekly' as const },

  // Learn section
  { path: '/learn', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/learn/basics', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/learn/ethereum-classic', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/learn/wallets', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/learn/trading', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/learn/defi', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/learn/mining', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/learn/staking', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/learn/security', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/learn/glossary', priority: 0.6, changeFrequency: 'weekly' as const },

  // FAQ section
  { path: '/faq', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/faq/users', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/faq/investors', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/faq/miners', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/faq/developers', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/faq/community', priority: 0.7, changeFrequency: 'weekly' as const },

  // Why Classic section
  { path: '/why-classic', priority: 0.8, changeFrequency: 'weekly' as const },

  // News section
  { path: '/news', priority: 0.9, changeFrequency: 'daily' as const },
  { path: '/news/feeds', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/news/category/updates', priority: 0.7, changeFrequency: 'daily' as const },
  { path: '/news/category/security', priority: 0.7, changeFrequency: 'daily' as const },
  { path: '/news/category/ecosystem', priority: 0.7, changeFrequency: 'daily' as const },
  { path: '/news/category/community', priority: 0.7, changeFrequency: 'daily' as const },

  // Markets section
  { path: '/markets', priority: 0.8, changeFrequency: 'hourly' as const },
  { path: '/price', priority: 0.9, changeFrequency: 'hourly' as const },
  { path: '/price/etc-usd', priority: 0.8, changeFrequency: 'hourly' as const },
  { path: '/price/etc-btc', priority: 0.7, changeFrequency: 'hourly' as const },
  { path: '/converter', priority: 0.8, changeFrequency: 'daily' as const },
  { path: '/calculator', priority: 0.7, changeFrequency: 'daily' as const },

  // Mining section
  { path: '/mining', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/mining/getting-started', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/mining/pools', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/mining/hardware', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/mining/hardware/buy', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/mining/software', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/mining/profitability', priority: 0.8, changeFrequency: 'daily' as const },
  { path: '/mining/stats', priority: 0.7, changeFrequency: 'daily' as const },
  { path: '/mining/os', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/mining/approaches', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/mining/regulation', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/mining/fee-market', priority: 0.8, changeFrequency: 'weekly' as const },

  // Build section
  { path: '/build', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/build/getting-started', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/build/docs', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/build/tools', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/build/clients', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/build/networks', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/build/faucets', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/build/grants', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/build/api', priority: 0.6, changeFrequency: 'weekly' as const },

  // Countdown / emission
  { path: '/block-reward-countdown', priority: 0.9, changeFrequency: 'hourly' as const },

  // Research section
  { path: '/research', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/research/emission-schedule', priority: 0.8, changeFrequency: 'daily' as const },
  { path: '/research/fifthing', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/research/ethereum-ico', priority: 0.7, changeFrequency: 'yearly' as const },
  { path: '/research/dao-fork', priority: 0.7, changeFrequency: 'yearly' as const },
  { path: '/research/reports', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/research/network', priority: 0.6, changeFrequency: 'daily' as const },
  { path: '/research/supply', priority: 0.6, changeFrequency: 'daily' as const },
  { path: '/research/fees', priority: 0.6, changeFrequency: 'daily' as const },
  { path: '/research/history', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/research/ecosystem', priority: 0.6, changeFrequency: 'weekly' as const },

  // Tools section
  { path: '/tools', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/tools/converter', priority: 0.7, changeFrequency: 'daily' as const },
  { path: '/tools/calculator', priority: 0.7, changeFrequency: 'daily' as const },
  { path: '/tools/gas', priority: 0.7, changeFrequency: 'hourly' as const },
  { path: '/tools/explorer', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/tools/verify', priority: 0.5, changeFrequency: 'weekly' as const },

  // Directory section
  { path: '/directory', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/directory/wallets', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/directory/exchanges', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/directory/mining', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/directory/developers', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/directory/community', priority: 0.6, changeFrequency: 'weekly' as const },

  // Community section
  { path: '/community', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/community/social', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/community/events', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/community/contribute', priority: 0.5, changeFrequency: 'weekly' as const },

  // Olympia upgrade section
  { path: '/olympia', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/olympia/upgrade', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/olympia/clients', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/olympia/clients/core-geth', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/olympia/clients/besu', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/olympia/clients/fukuii', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/olympia/governance', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/olympia/miners', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/olympia/security', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/upgrades', priority: 0.8, changeFrequency: 'weekly' as const },

  // Core Devs Calls
  { path: '/core-devs', priority: 0.7, changeFrequency: 'weekly' as const },

  // Standalone pages
  { path: '/earn', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/pool', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/environmental-impact', priority: 0.5, changeFrequency: 'weekly' as const },
  { path: '/investment-products', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/learn/on-ramp', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/network', priority: 0.5, changeFrequency: 'daily' as const },
  { path: '/regulation', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/store', priority: 0.4, changeFrequency: 'weekly' as const },

  // Markets (direct routes)
  { path: '/markets/price', priority: 0.8, changeFrequency: 'hourly' as const },
  { path: '/markets/calculator', priority: 0.7, changeFrequency: 'daily' as const },
  { path: '/markets/converter', priority: 0.7, changeFrequency: 'daily' as const },

  // Account section (lower priority for crawling)
  { path: '/account', priority: 0.3, changeFrequency: 'weekly' as const },
  { path: '/account/login', priority: 0.2, changeFrequency: 'yearly' as const },
  { path: '/account/register', priority: 0.2, changeFrequency: 'yearly' as const },
  { path: '/account/settings', priority: 0.2, changeFrequency: 'weekly' as const },
  { path: '/account/watchlist', priority: 0.3, changeFrequency: 'weekly' as const },
  { path: '/account/portfolio', priority: 0.3, changeFrequency: 'weekly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes — each gets the git commit date of its page.tsx
  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: pageDate(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Dynamic routes - Mining pools
  const miningDataDate = dataDate('app/mining/data/mining.ts')
  const poolEntries = miningPools.map((pool) => ({
    url: `${baseUrl}/mining/pools/${pool.id}`,
    lastModified: miningDataDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  const hardwareEntries = miningHardware.map((hw) => ({
    url: `${baseUrl}/mining/hardware/${hw.id}`,
    lastModified: miningDataDate,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

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

  // Dynamic routes - News articles (already use article.date — correct)
  const newsEntries = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'weekly' as const,
    priority: article.featured ? 0.7 : 0.5,
  }))

  // Dynamic routes - News tags
  const newsDataDate = dataDate('app/news/data/articles.ts')
  const allTags = [...new Set(newsArticles.flatMap((a) => a.tags || []))]
  const tagEntries = allTags.map((tag) => ({
    url: `${baseUrl}/news/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}`,
    lastModified: newsDataDate,
    changeFrequency: 'weekly' as const,
    priority: 0.4,
  }))

  // Dynamic routes - Learn articles by category
  const learnDataDate = dataDate('app/learn/data/articles.ts')
  const learnEntries = learnArticles.map((article) => ({
    url: `${baseUrl}/learn/${article.category}/${article.slug}`,
    lastModified: learnDataDate,
    changeFrequency: 'weekly' as const,
    priority: article.featured ? 0.7 : 0.5,
  }))

  // Dynamic routes - Exchange reviews
  const exchangeDataDate = dataDate('app/buy/data/reviews.ts')
  const exchangeReviewEntries = exchangeReviews.map((review) => ({
    url: `${baseUrl}/exchanges/reviews/${review.slug}`,
    lastModified: exchangeDataDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  const buyReviewEntries = exchangeReviews.map((review) => ({
    url: `${baseUrl}/buy/reviews/${review.slug}`,
    lastModified: exchangeDataDate,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  // Dynamic routes - Core Devs Call entries (already use entry.date — correct)
  const cdcSitemapEntries = cdcEntries
    .filter((e) => !e.date.includes('TBD'))
    .map((entry) => ({
      url: `${baseUrl}/core-devs/${entry.slug}`,
      lastModified: new Date(entry.date),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    }))

  // Dynamic routes - Research reports (already use report.date — correct)
  const reportEntries = reports.map((report) => ({
    url: `${baseUrl}/research/reports/${report.slug}`,
    lastModified: new Date(report.date),
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
    ...poolEntries,
    ...hardwareEntries,
    ...walletReviewEntries,
    ...appEntries,
    ...newsEntries,
    ...tagEntries,
    ...learnEntries,
    ...exchangeReviewEntries,
    ...buyReviewEntries,
    ...reportEntries,
    ...cdcSitemapEntries,
    ...philosophyEntries,
  ]
}

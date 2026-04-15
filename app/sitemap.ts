import type { MetadataRoute } from 'next'
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
  { path: '/mining/software', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/mining/profitability', priority: 0.8, changeFrequency: 'daily' as const },
  { path: '/mining/stats', priority: 0.7, changeFrequency: 'daily' as const },
  { path: '/mining/os', priority: 0.6, changeFrequency: 'weekly' as const },

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

  // Research section
  { path: '/research', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/research/reports', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/research/network', priority: 0.6, changeFrequency: 'daily' as const },
  { path: '/research/supply', priority: 0.6, changeFrequency: 'daily' as const },
  { path: '/research/fees', priority: 0.6, changeFrequency: 'daily' as const },
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
  { path: '/upgrades', priority: 0.8, changeFrequency: 'weekly' as const },

  // Core Devs Calls
  { path: '/core-devs', priority: 0.7, changeFrequency: 'weekly' as const },

  // Account section (lower priority for crawling)
  { path: '/account', priority: 0.3, changeFrequency: 'weekly' as const },
  { path: '/account/login', priority: 0.2, changeFrequency: 'yearly' as const },
  { path: '/account/register', priority: 0.2, changeFrequency: 'yearly' as const },
  { path: '/account/settings', priority: 0.2, changeFrequency: 'weekly' as const },
  { path: '/account/watchlist', priority: 0.3, changeFrequency: 'weekly' as const },
  { path: '/account/portfolio', priority: 0.3, changeFrequency: 'weekly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static routes
  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Dynamic routes - Mining pools
  const poolEntries = miningPools.map((pool) => ({
    url: `${baseUrl}/mining/pools/${pool.id}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Dynamic routes - Mining hardware (if we have individual pages)
  const hardwareEntries = miningHardware.map((hw) => ({
    url: `${baseUrl}/mining/hardware/${hw.id}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  // Dynamic routes - Wallet reviews
  const walletReviewEntries = walletReviews.map((review) => ({
    url: `${baseUrl}/wallet/reviews/${review.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Dynamic routes - Apps
  const appEntries = apps.map((app) => ({
    url: `${baseUrl}/apps/${app.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: app.featured ? 0.7 : 0.5,
  }))

  // Dynamic routes - News articles
  const newsEntries = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'weekly' as const,
    priority: article.featured ? 0.7 : 0.5,
  }))

  // Dynamic routes - News tags (extract unique tags)
  const allTags = [...new Set(newsArticles.flatMap((a) => a.tags || []))]
  const tagEntries = allTags.map((tag) => ({
    url: `${baseUrl}/news/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.4,
  }))

  // Dynamic routes - Learn articles by category
  const learnEntries = learnArticles.map((article) => ({
    url: `${baseUrl}/learn/${article.category}/${article.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: article.featured ? 0.7 : 0.5,
  }))

  // Dynamic routes - Exchange reviews
  const exchangeReviewEntries = exchangeReviews.map((review) => ({
    url: `${baseUrl}/exchanges/reviews/${review.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Dynamic routes - Buy reviews (same data)
  const buyReviewEntries = exchangeReviews.map((review) => ({
    url: `${baseUrl}/buy/reviews/${review.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  // Dynamic routes - Core Devs Call entries
  const cdcSitemapEntries = cdcEntries
    .filter((e) => !e.date.includes('TBD'))
    .map((entry) => ({
      url: `${baseUrl}/core-devs/${entry.slug}`,
      lastModified: new Date(entry.date),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    }))

  // Dynamic routes - Research reports
  const reportEntries = reports.map((report) => ({
    url: `${baseUrl}/research/reports/${report.slug}`,
    lastModified: new Date(report.date),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  // Dynamic routes - Why Classic philosophy articles
  const philosophyEntries = philosophyArticles.map((article) => ({
    url: `${baseUrl}/why-classic/${article.slug}`,
    lastModified: now,
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

import type { MetadataRoute } from 'next'

const baseUrl = 'https://ethereumclassic.com'

// Static routes - all stub pages and main sections
const staticRoutes = [
  // Core pages
  '',
  '/about',
  '/contact',
  '/advertise',
  '/partners',
  '/legal',
  '/privacy',
  '/site-map',

  // Wallet section
  '/wallet',
  '/wallet/classic-os',
  '/wallet/metamask',
  '/wallet/hardware',
  '/wallet/compare',
  '/wallet/reviews',

  // Buy/Sell section
  '/buy',
  '/buy/exchanges',
  '/buy/instant',
  '/buy/p2p',
  '/buy/atm',
  '/buy/card',
  '/buy/bank',
  '/sell',
  '/sell/exchanges',

  // Exchanges section
  '/exchanges',
  '/exchanges/reviews',
  '/exchanges/compare',
  '/exchanges/beginners',
  '/exchanges/lowest-fees',
  '/exchanges/most-secure',
  '/exchanges/decentralized',
  '/exchanges/no-kyc',
  '/exchanges/us-friendly',
  '/exchanges/staking',

  // Apps section
  '/apps',
  '/apps/featured',
  '/apps/defi',
  '/apps/nft',
  '/apps/games',
  '/apps/tools',
  '/apps/infrastructure',
  '/apps/governance',
  '/apps/submit',

  // Learn section
  '/learn',
  '/learn/basics',
  '/learn/ethereum-classic',
  '/learn/wallets',
  '/learn/trading',
  '/learn/defi',
  '/learn/mining',
  '/learn/staking',
  '/learn/security',
  '/learn/glossary',

  // News section
  '/news',

  // Markets section
  '/markets',
  '/price',
  '/converter',
  '/calculator',

  // Mining section
  '/mining',
  '/mining/getting-started',
  '/mining/pools',
  '/mining/hardware',
  '/mining/software',
  '/mining/profitability',
  '/mining/stats',

  // Build section
  '/build',
  '/build/getting-started',
  '/build/docs',
  '/build/tools',
  '/build/clients',
  '/build/networks',
  '/build/faucets',
  '/build/grants',

  // Research section
  '/research',
  '/research/reports',
  '/research/network',
  '/research/ecosystem',

  // Tools section
  '/tools',
  '/tools/converter',
  '/tools/calculator',
  '/tools/gas',
  '/tools/explorer',
  '/tools/verify',

  // Directory section
  '/directory',
  '/directory/wallets',
  '/directory/exchanges',
  '/directory/mining',
  '/directory/developers',
  '/directory/community',

  // Community section
  '/community',
  '/community/social',
  '/community/events',
  '/community/contribute',

  // Account section (lower priority for crawling)
  '/account',
  '/account/login',
  '/account/register',
  '/account/settings',
  '/account/watchlist',
  '/account/portfolio',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return staticRoutes.map((route) => {
    // Determine priority and change frequency based on route
    let priority = 0.5
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly'

    // Homepage
    if (route === '') {
      priority = 1.0
      changeFrequency = 'daily'
    }
    // Main sections
    else if (['/wallet', '/buy', '/apps', '/learn', '/news', '/mining', '/build'].includes(route)) {
      priority = 0.9
      changeFrequency = 'daily'
    }
    // Price and market pages
    else if (route.startsWith('/price') || route.startsWith('/markets') || route === '/converter' || route === '/calculator') {
      priority = 0.8
      changeFrequency = 'hourly'
    }
    // Exchange and wallet directories
    else if (route.startsWith('/exchanges') || route.startsWith('/directory')) {
      priority = 0.7
      changeFrequency = 'weekly'
    }
    // Learn articles
    else if (route.startsWith('/learn')) {
      priority = 0.6
      changeFrequency = 'weekly'
    }
    // Account pages (lower priority for SEO)
    else if (route.startsWith('/account')) {
      priority = 0.2
      changeFrequency = 'monthly'
    }
    // Legal pages
    else if (route === '/legal' || route === '/privacy') {
      priority = 0.3
      changeFrequency = 'yearly'
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency,
      priority,
    }
  })
}

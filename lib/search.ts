/**
 * Site-wide search functionality using Fuse.js
 * Indexes all content sources for fast client-side fuzzy search
 */

import Fuse, { type IFuseOptions } from 'fuse.js'

// Import all data sources
import { articles as learnArticles, categories as learnCategories } from '@/app/learn/data/articles'
import { articles as newsArticles } from '@/app/news/data/articles'
import { apps } from '@/app/apps/data/apps'
import { wallets } from '@/app/wallet/data/wallets'
import { exchanges } from '@/app/buy/data/exchanges'
import { miningPools, miningHardware } from '@/app/mining/data/mining'

// Search result types
export type SearchResultType = 'learn' | 'news' | 'app' | 'wallet' | 'exchange' | 'pool' | 'hardware' | 'page'

export interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  type: SearchResultType
  category?: string
  tags?: string[]
}

// Static pages to include in search
const staticPages: SearchResult[] = [
  {
    id: 'page-home',
    title: 'Home',
    description: 'Ethereum Classic - The original smart contract blockchain',
    url: '/',
    type: 'page',
    category: 'Main',
  },
  {
    id: 'page-wallet',
    title: 'Wallets',
    description: 'Find the best wallet for your ETC. Compare hardware, mobile, and browser wallets.',
    url: '/wallet',
    type: 'page',
    category: 'Products',
  },
  {
    id: 'page-apps',
    title: 'Apps Directory',
    description: 'Explore DeFi, games, tools, and applications built on Ethereum Classic.',
    url: '/apps',
    type: 'page',
    category: 'Products',
  },
  {
    id: 'page-buy',
    title: 'Buy ETC',
    description: 'Purchase Ethereum Classic on centralized and decentralized exchanges.',
    url: '/buy',
    type: 'page',
    category: 'Products',
  },
  {
    id: 'page-learn',
    title: 'Learning Center',
    description: 'Learn about Ethereum Classic, blockchain technology, and cryptocurrency.',
    url: '/learn',
    type: 'page',
    category: 'Learn',
  },
  {
    id: 'page-news',
    title: 'News',
    description: 'Latest updates, announcements, and developments in the Ethereum Classic ecosystem.',
    url: '/news',
    type: 'page',
    category: 'Learn',
  },
  {
    id: 'page-mining',
    title: 'Mining',
    description: 'Start mining Ethereum Classic. Hardware guides, pool directory, and profitability calculators.',
    url: '/mining',
    type: 'page',
    category: 'Mining',
  },
  {
    id: 'page-mining-profitability',
    title: 'Mining Profitability Calculator',
    description: 'Calculate your potential ETC mining profits based on hashrate, power costs, and network difficulty.',
    url: '/mining/profitability',
    type: 'page',
    category: 'Mining',
  },
  {
    id: 'page-mining-pools',
    title: 'Mining Pools',
    description: 'Find the best ETC mining pools. Compare fees, payout methods, and server locations.',
    url: '/mining/pools',
    type: 'page',
    category: 'Mining',
  },
  {
    id: 'page-mining-hardware',
    title: 'Mining Hardware',
    description: 'Compare ASIC and GPU mining hardware for Ethereum Classic.',
    url: '/mining/hardware',
    type: 'page',
    category: 'Mining',
  },
  {
    id: 'page-build',
    title: 'Build on ETC',
    description: 'Developer resources for building on Ethereum Classic. Documentation, tools, and guides.',
    url: '/build',
    type: 'page',
    category: 'Build',
  },
  {
    id: 'page-build-clients',
    title: 'Node Clients',
    description: 'Run an Ethereum Classic node with Core-Geth, Fukuii, or Hyperledger Besu.',
    url: '/build/clients',
    type: 'page',
    category: 'Build',
  },
  {
    id: 'page-research',
    title: 'Research',
    description: 'Network statistics, market data, and research on Ethereum Classic.',
    url: '/research',
    type: 'page',
    category: 'Research',
  },
  {
    id: 'page-research-network',
    title: 'Network Stats',
    description: 'Live Ethereum Classic network statistics, hashrate, difficulty, and block data.',
    url: '/research/network',
    type: 'page',
    category: 'Research',
  },
  {
    id: 'page-research-supply',
    title: 'Supply & Emission',
    description: 'ETC supply schedule, emission curve, and Fifthening countdown.',
    url: '/research/supply',
    type: 'page',
    category: 'Research',
  },
  {
    id: 'page-research-fees',
    title: 'Fee Market',
    description: 'Gas prices, transaction costs, and fee market analytics for Ethereum Classic.',
    url: '/research/fees',
    type: 'page',
    category: 'Research',
  },
  {
    id: 'page-community',
    title: 'Community',
    description: 'Join the Ethereum Classic community. Discord, forums, social media, and events.',
    url: '/community',
    type: 'page',
    category: 'Community',
  },
]

/**
 * Build the complete search index from all content sources
 */
export function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [...staticPages]

  // Add learn articles
  learnArticles.forEach((article) => {
    const category = learnCategories.find((c) => c.id === article.category)
    results.push({
      id: `learn-${article.slug}`,
      title: article.title,
      description: article.description,
      url: `/learn/${article.category}/${article.slug}`,
      type: 'learn',
      category: category?.name || article.category,
      tags: article.tags,
    })
  })

  // Add news articles
  newsArticles.forEach((article) => {
    results.push({
      id: `news-${article.slug}`,
      title: article.title,
      description: article.excerpt,
      url: `/news/${article.slug}`,
      type: 'news',
      category: article.category,
      tags: article.tags,
    })
  })

  // Add apps
  apps.forEach((app) => {
    results.push({
      id: `app-${app.slug}`,
      title: app.name,
      description: app.description,
      url: `/apps/${app.slug}`,
      type: 'app',
      category: app.category,
      tags: app.tags,
    })
  })

  // Add wallets
  wallets.forEach((wallet, index) => {
    results.push({
      id: `wallet-${index}`,
      title: wallet.name,
      description: wallet.description,
      url: '/wallet',
      type: 'wallet',
      category: wallet.type,
    })
  })

  // Add exchanges
  exchanges.forEach((exchange, index) => {
    results.push({
      id: `exchange-${index}`,
      title: exchange.name,
      description: exchange.description || `${exchange.type} exchange supporting ETC trading`,
      url: '/buy/exchanges',
      type: 'exchange',
      category: exchange.type,
    })
  })

  // Add mining pools
  miningPools.forEach((pool) => {
    results.push({
      id: `pool-${pool.id}`,
      title: pool.name,
      description: `${pool.payoutScheme} mining pool with ${pool.fee}% fee`,
      url: '/mining/pools',
      type: 'pool',
      category: 'Mining Pool',
    })
  })

  // Add mining hardware
  miningHardware.forEach((hardware) => {
    results.push({
      id: `hardware-${hardware.id}`,
      title: hardware.name,
      description: `${hardware.type} - ${hardware.hashrate} MH/s at ${hardware.power}W`,
      url: '/mining/hardware',
      type: 'hardware',
      category: hardware.type,
    })
  })

  return results
}

// Fuse.js configuration for fuzzy search
const fuseOptions: IFuseOptions<SearchResult> = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'description', weight: 0.3 },
    { name: 'category', weight: 0.15 },
    { name: 'tags', weight: 0.15 },
  ],
  threshold: 0.4, // 0 = exact match, 1 = match everything
  includeScore: true,
  minMatchCharLength: 2,
  ignoreLocation: true,
}

// Singleton search index
let searchIndex: SearchResult[] | null = null
let fuseInstance: Fuse<SearchResult> | null = null

/**
 * Get or create the Fuse.js search instance
 */
export function getSearchInstance(): Fuse<SearchResult> {
  if (!fuseInstance) {
    searchIndex = buildSearchIndex()
    fuseInstance = new Fuse(searchIndex, fuseOptions)
  }
  return fuseInstance
}

/**
 * Perform a search query
 */
export function search(query: string, limit: number = 10): SearchResult[] {
  if (!query || query.length < 2) {
    return []
  }

  const fuse = getSearchInstance()
  const results = fuse.search(query, { limit })

  return results.map((result) => result.item)
}

/**
 * Get search results grouped by type
 */
export function searchGrouped(query: string, limit: number = 20): Record<SearchResultType, SearchResult[]> {
  const results = search(query, limit)

  const grouped: Record<SearchResultType, SearchResult[]> = {
    page: [],
    learn: [],
    news: [],
    app: [],
    wallet: [],
    exchange: [],
    pool: [],
    hardware: [],
  }

  results.forEach((result) => {
    grouped[result.type].push(result)
  })

  return grouped
}

/**
 * Get type label for display
 */
export function getTypeLabel(type: SearchResultType): string {
  const labels: Record<SearchResultType, string> = {
    page: 'Pages',
    learn: 'Learn',
    news: 'News',
    app: 'Apps',
    wallet: 'Wallets',
    exchange: 'Exchanges',
    pool: 'Mining Pools',
    hardware: 'Hardware',
  }
  return labels[type]
}

/**
 * Get type icon class
 */
export function getTypeIcon(type: SearchResultType): string {
  const icons: Record<SearchResultType, string> = {
    page: '📄',
    learn: '📚',
    news: '📰',
    app: '🔗',
    wallet: '👛',
    exchange: '💱',
    pool: '⛏️',
    hardware: '🖥️',
  }
  return icons[type]
}

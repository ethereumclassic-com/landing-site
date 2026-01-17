export type ArticleCategory = 'Updates' | 'Security' | 'Ecosystem' | 'Community'

export interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  category: ArticleCategory
  featured?: boolean
  tags?: string[]
  image?: string
  author?: string
  externalLink?: string
}

export const articles: Article[] = [
  // Featured Articles
  {
    slug: 'classic-os-launch',
    title: 'Classic OS: The New Gateway to Ethereum Classic',
    excerpt:
      'Classic OS brings a unified interface for interacting with the ETC ecosystem, including portfolio management, DEX access, and more.',
    date: '2025-01-15',
    category: 'Ecosystem',
    featured: true,
    tags: ['Classic OS', 'DeFi', 'Launch'],
    author: 'ETC Team',
  },
  {
    slug: 'etcswap-v3-milestone',
    title: 'ETCswap V3 Reaches $10M in Total Volume',
    excerpt:
      'The concentrated liquidity DEX on Ethereum Classic hits a major milestone, demonstrating growing DeFi activity on the network.',
    date: '2025-01-10',
    category: 'Ecosystem',
    featured: true,
    tags: ['ETCswap', 'DeFi', 'Milestone'],
    author: 'ETC Team',
  },
  {
    slug: 'spiral-upgrade-complete',
    title: 'Spiral Network Upgrade Successfully Activated',
    excerpt:
      'Ethereum Classic completes the Spiral hard fork, bringing improved EVM compatibility and network optimizations.',
    date: '2025-01-05',
    category: 'Updates',
    featured: true,
    tags: ['Hard Fork', 'Network', 'Upgrade'],
    author: 'ETC Core',
  },

  // Updates
  {
    slug: 'core-geth-update-1-12-20',
    title: 'Core-Geth v1.12.20 Released',
    excerpt:
      'Latest Core-Geth release includes performance improvements and bug fixes. Node operators are encouraged to update.',
    date: '2025-01-12',
    category: 'Updates',
    tags: ['Core-Geth', 'Node', 'Release'],
    author: 'ETC Core',
  },
  {
    slug: 'blockscout-explorer-update',
    title: 'BlockScout Explorer Gets Major UI Refresh',
    excerpt:
      'The ETC BlockScout explorer receives a comprehensive update with improved transaction tracking and contract verification.',
    date: '2025-01-08',
    category: 'Updates',
    tags: ['BlockScout', 'Explorer', 'Infrastructure'],
    author: 'ETC Team',
  },
  {
    slug: 'rpc-endpoint-expansion',
    title: 'New Public RPC Endpoints Available',
    excerpt:
      'Additional RPC endpoints are now available for developers, improving network access reliability and geographic coverage.',
    date: '2024-12-28',
    category: 'Updates',
    tags: ['RPC', 'Infrastructure', 'Developers'],
    author: 'ETC Cooperative',
  },

  // Security
  {
    slug: 'security-best-practices-2025',
    title: 'ETC Security Best Practices for 2025',
    excerpt:
      'A comprehensive guide to securing your ETC holdings, including wallet security, transaction verification, and scam awareness.',
    date: '2025-01-14',
    category: 'Security',
    tags: ['Security', 'Guide', 'Best Practices'],
    author: 'ETC Team',
  },
  {
    slug: 'network-hashrate-milestone',
    title: 'Network Hashrate Reaches New Highs',
    excerpt:
      'ETC network security strengthens as hashrate climbs, making the network more resistant to potential attacks.',
    date: '2025-01-03',
    category: 'Security',
    tags: ['Hashrate', 'Mining', 'Security'],
    author: 'ETC Team',
  },
  {
    slug: 'smart-contract-audit-guidelines',
    title: 'Smart Contract Security Guidelines Released',
    excerpt:
      'New guidelines help developers build more secure smart contracts on ETC with best practices and common vulnerability patterns.',
    date: '2024-12-20',
    category: 'Security',
    tags: ['Smart Contracts', 'Audit', 'Developers'],
    author: 'ETC Core',
  },

  // Ecosystem
  {
    slug: 'classic-usd-integration',
    title: 'Classic USD Now Available on Major Platforms',
    excerpt:
      'USC stablecoin expands its reach with new exchange listings and DeFi integrations across the ETC ecosystem.',
    date: '2025-01-11',
    category: 'Ecosystem',
    tags: ['USC', 'Stablecoin', 'Integration'],
    author: 'ETC Team',
  },
  {
    slug: 'wrapped-ether-liquidity-growth',
    title: 'WETC Liquidity Pools See Record Growth',
    excerpt:
      'Wrapped Ether on ETC continues to see strong adoption with expanding liquidity across DEX platforms.',
    date: '2025-01-06',
    category: 'Ecosystem',
    tags: ['WETC', 'Liquidity', 'DeFi'],
    author: 'ETC Team',
  },
  {
    slug: 'olympia-dao-governance-update',
    title: 'Olympia DAO Announces Governance Improvements',
    excerpt:
      'The ETC governance platform introduces new voting mechanisms and proposal systems for community decision-making.',
    date: '2024-12-25',
    category: 'Ecosystem',
    tags: ['Olympia DAO', 'Governance', 'Community'],
    author: 'Olympia Team',
  },

  // Community
  {
    slug: 'etc-community-call-january',
    title: 'January Community Call Recap',
    excerpt:
      'Highlights from the monthly ETC community call including development updates, ecosystem news, and Q&A session.',
    date: '2025-01-13',
    category: 'Community',
    tags: ['Community Call', 'Updates', 'Recap'],
    author: 'ETC Team',
  },
  {
    slug: 'developer-grants-program',
    title: 'ETC Developer Grants Program Launches',
    excerpt:
      'A new grants program aims to fund innovative projects building on Ethereum Classic with focus on DeFi and tooling.',
    date: '2025-01-02',
    category: 'Community',
    tags: ['Grants', 'Developers', 'Funding'],
    author: 'ETC Cooperative',
  },
  {
    slug: 'etc-summit-2025-announced',
    title: 'ETC Summit 2025 Dates Announced',
    excerpt:
      'Mark your calendars for the annual Ethereum Classic Summit, bringing together developers, miners, and community members.',
    date: '2024-12-18',
    category: 'Community',
    tags: ['Summit', 'Event', 'Conference'],
    author: 'ETC Team',
  },
]

// Helper functions
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((article) => article.category === category)
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured)
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter((article) => article.tags?.includes(tag))
}

export function getRecentArticles(limit: number = 10): Article[] {
  return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  articles.forEach((article) => {
    article.tags?.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function getAllCategories(): ArticleCategory[] {
  return ['Updates', 'Security', 'Ecosystem', 'Community']
}

export const categoryDescriptions: Record<ArticleCategory, string> = {
  Updates: 'Network upgrades, client releases, and protocol changes',
  Security: 'Security advisories, best practices, and network health',
  Ecosystem: 'DeFi, dApps, and project announcements',
  Community: 'Events, governance, and community initiatives',
}

export const categoryIcons: Record<ArticleCategory, string> = {
  Updates: '🔄',
  Security: '🛡️',
  Ecosystem: '🌐',
  Community: '👥',
}

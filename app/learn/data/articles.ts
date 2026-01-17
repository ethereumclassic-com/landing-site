export type ArticleCategory = 'basics' | 'wallets' | 'trading' | 'defi' | 'mining' | 'staking' | 'security'

export interface Article {
  title: string
  slug: string
  description: string
  category: ArticleCategory
  readTime: number
  featured?: boolean
  tags?: string[]
  order?: number
}

export const categories: {
  id: ArticleCategory
  name: string
  description: string
  icon: string
}[] = [
  {
    id: 'basics',
    name: 'Basics',
    description: 'Fundamental concepts and getting started with ETC',
    icon: 'book',
  },
  {
    id: 'wallets',
    name: 'Wallets',
    description: 'Wallet setup, security, and management guides',
    icon: 'wallet',
  },
  {
    id: 'trading',
    name: 'Trading',
    description: 'How to buy, sell, and trade ETC',
    icon: 'chart',
  },
  {
    id: 'defi',
    name: 'DeFi',
    description: 'Decentralized finance on Ethereum Classic',
    icon: 'defi',
  },
  {
    id: 'mining',
    name: 'Mining',
    description: 'Mining guides and hardware recommendations',
    icon: 'mining',
  },
  {
    id: 'staking',
    name: 'Staking & Yield',
    description: 'Earn yield through liquidity provision',
    icon: 'yield',
  },
  {
    id: 'security',
    name: 'Security',
    description: 'Best practices for protecting your assets',
    icon: 'shield',
  },
]

export const articles: Article[] = [
  // Featured Articles
  {
    title: 'What is Ethereum Classic?',
    slug: 'what-is-ethereum-classic',
    description: 'Discover Ethereum Classic - the original Ethereum blockchain with proof-of-work consensus, immutability, and smart contract capabilities.',
    category: 'basics',
    readTime: 8,
    featured: true,
    tags: ['Introduction', 'ETC', 'Blockchain'],
    order: 1,
  },
  {
    title: 'Why Proof-of-Work Matters',
    slug: 'why-proof-of-work',
    description: 'Understand the security and decentralization benefits of proof-of-work consensus that powers Ethereum Classic.',
    category: 'basics',
    readTime: 6,
    featured: true,
    tags: ['PoW', 'Security', 'Consensus'],
    order: 2,
  },
  {
    title: 'Getting Started with ETC',
    slug: 'getting-started',
    description: 'Your complete guide to getting started with Ethereum Classic. Learn how to set up a wallet, buy ETC, and explore the ecosystem.',
    category: 'basics',
    readTime: 10,
    featured: true,
    tags: ['Beginner', 'Guide', 'Start'],
    order: 3,
  },

  // Basics
  {
    title: 'What is Blockchain?',
    slug: 'what-is-blockchain',
    description: 'Learn the fundamentals of blockchain technology and how it enables trustless, decentralized systems.',
    category: 'basics',
    readTime: 5,
    tags: ['Blockchain', 'Technology', 'Fundamentals'],
    order: 4,
  },
  {
    title: 'What are Smart Contracts?',
    slug: 'what-are-smart-contracts',
    description: 'Understand smart contracts - self-executing code on the blockchain that powers DeFi and dApps.',
    category: 'basics',
    readTime: 6,
    tags: ['Smart Contracts', 'EVM', 'Development'],
    order: 5,
  },
  {
    title: 'ETC vs ETH: Key Differences',
    slug: 'etc-vs-eth',
    description: 'Compare Ethereum Classic and Ethereum. Understand the technical and philosophical differences between the two chains.',
    category: 'basics',
    readTime: 7,
    tags: ['Comparison', 'ETH', 'Fork'],
    order: 6,
  },
  {
    title: 'ETC Tokenomics',
    slug: 'etc-tokenomics',
    description: 'Explore the economic model of Ethereum Classic including supply schedule, emission rate, and monetary policy.',
    category: 'basics',
    readTime: 5,
    tags: ['Tokenomics', 'Supply', 'Economics'],
    order: 7,
  },

  // Wallets
  {
    title: 'Types of Crypto Wallets',
    slug: 'types-of-wallets',
    description: 'Learn about different wallet types: hot wallets, cold storage, hardware wallets, and which is right for you.',
    category: 'wallets',
    readTime: 6,
    tags: ['Wallets', 'Security', 'Storage'],
    order: 1,
  },
  {
    title: 'How to Secure Your Wallet',
    slug: 'how-to-secure-wallet',
    description: 'Best practices for securing your cryptocurrency wallet including seed phrase management and security tips.',
    category: 'wallets',
    readTime: 8,
    tags: ['Security', 'Seed Phrase', 'Protection'],
    order: 2,
  },
  {
    title: 'MetaMask Setup Guide',
    slug: 'metamask-setup',
    description: 'Step-by-step guide to setting up MetaMask for Ethereum Classic. Configure the network and start using dApps.',
    category: 'wallets',
    readTime: 5,
    tags: ['MetaMask', 'Setup', 'Guide'],
    order: 3,
  },
  {
    title: 'Backup and Recovery',
    slug: 'backup-recovery',
    description: 'Learn how to properly backup your wallet and recover access if you lose your device.',
    category: 'wallets',
    readTime: 6,
    tags: ['Backup', 'Recovery', 'Seed Phrase'],
    order: 4,
  },

  // Trading
  {
    title: 'How to Buy ETC',
    slug: 'how-to-buy-etc',
    description: 'Complete guide to purchasing Ethereum Classic through exchanges, instant buy services, and P2P trading.',
    category: 'trading',
    readTime: 7,
    tags: ['Buy', 'Exchange', 'Purchase'],
    order: 1,
  },
  {
    title: 'Understanding Exchanges',
    slug: 'understanding-exchanges',
    description: 'Learn about centralized exchanges, DEXes, and how to choose the right platform for trading ETC.',
    category: 'trading',
    readTime: 6,
    tags: ['Exchange', 'CEX', 'DEX'],
    order: 2,
  },

  // DeFi
  {
    title: 'What is DeFi?',
    slug: 'what-is-defi',
    description: 'Introduction to decentralized finance and how it works on Ethereum Classic.',
    category: 'defi',
    readTime: 6,
    tags: ['DeFi', 'Introduction', 'Finance'],
    order: 1,
  },
  {
    title: 'Liquidity Pools Explained',
    slug: 'liquidity-pools',
    description: 'Understand liquidity pools, automated market makers, and how to provide liquidity on ETC.',
    category: 'defi',
    readTime: 8,
    tags: ['Liquidity', 'AMM', 'LP'],
    order: 2,
  },
  {
    title: 'DeFi Risks to Know',
    slug: 'defi-risks',
    description: 'Important risks to understand before participating in DeFi: impermanent loss, smart contract risks, and more.',
    category: 'defi',
    readTime: 7,
    tags: ['Risk', 'Security', 'IL'],
    order: 3,
  },

  // Mining
  {
    title: 'Mining ETC: Getting Started',
    slug: 'mining-getting-started',
    description: 'Complete beginner guide to mining Ethereum Classic. Hardware, software, and pool selection.',
    category: 'mining',
    readTime: 10,
    tags: ['Mining', 'Beginner', 'Setup'],
    order: 1,
  },
  {
    title: 'Mining Hardware Guide',
    slug: 'mining-hardware',
    description: 'GPU and ASIC recommendations for mining ETC. Compare hashrate, power consumption, and profitability.',
    category: 'mining',
    readTime: 8,
    tags: ['Hardware', 'GPU', 'ASIC'],
    order: 2,
  },
  {
    title: 'Pool vs Solo Mining',
    slug: 'pool-vs-solo',
    description: 'Should you join a mining pool or mine solo? Understand the trade-offs and make an informed decision.',
    category: 'mining',
    readTime: 5,
    tags: ['Pool', 'Solo', 'Strategy'],
    order: 3,
  },
  {
    title: 'Mining Profitability',
    slug: 'mining-profitability',
    description: 'Calculate your potential mining profits. Understand difficulty, block rewards, and operating costs.',
    category: 'mining',
    readTime: 6,
    tags: ['Profitability', 'Calculator', 'ROI'],
    order: 4,
  },

  // Security
  {
    title: 'Crypto Security Best Practices',
    slug: 'security-best-practices',
    description: 'Essential security practices every crypto user should follow. Protect your assets from common threats.',
    category: 'security',
    readTime: 8,
    tags: ['Security', 'Best Practices', 'Protection'],
    order: 1,
  },
  {
    title: 'Avoiding Crypto Scams',
    slug: 'avoiding-scams',
    description: 'Learn to identify and avoid common cryptocurrency scams. Phishing, fake projects, and social engineering.',
    category: 'security',
    readTime: 7,
    tags: ['Scams', 'Phishing', 'Safety'],
    order: 2,
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles
    .filter((article) => article.category === category)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured)
}

export function getCategoryById(id: ArticleCategory) {
  return categories.find((cat) => cat.id === id)
}

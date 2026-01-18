// Research data for Ethereum Classic
// Reports, network metrics, and ecosystem analysis

export interface Report {
  id: string
  title: string
  slug: string
  description: string
  category: 'network' | 'ecosystem' | 'market' | 'technical'
  date: string
  author: string
  readTime: string
  highlights: string[]
  externalUrl?: string
}

export const reports: Report[] = [
  {
    id: 'network-q4-2024',
    title: 'ETC Network Report Q4 2024',
    slug: 'network-q4-2024',
    description: 'Comprehensive analysis of Ethereum Classic network performance in Q4 2024. Hashrate trends, transaction volumes, and node distribution.',
    category: 'network',
    date: '2024-12-15',
    author: 'ETC Research Team',
    readTime: '12 min',
    highlights: [
      'Network hashrate averaged 185 TH/s',
      'Daily transactions increased 15% YoY',
      'Active addresses grew to 125,000+',
      'Block time stability at 13.5 seconds',
    ],
  },
  {
    id: 'ecosystem-overview-2024',
    title: 'ETC Ecosystem Overview 2024',
    slug: 'ecosystem-overview-2024',
    description: 'Annual overview of the Ethereum Classic ecosystem. DeFi growth, infrastructure developments, and community expansion.',
    category: 'ecosystem',
    date: '2024-11-30',
    author: 'ETC Research Team',
    readTime: '15 min',
    highlights: [
      'ETCswap TVL growth of 200%',
      'ClassicUSD launched as native stablecoin',
      'Fukuii client reached alpha milestone',
      '15+ new dApps deployed',
    ],
  },
  {
    id: 'pow-security-analysis',
    title: 'Proof of Work Security Analysis',
    slug: 'pow-security-analysis',
    description: 'Technical analysis of Ethereum Classic Proof of Work security model. Mining economics, attack vectors, and network resilience.',
    category: 'technical',
    date: '2024-10-20',
    author: 'ETC Security Research',
    readTime: '18 min',
    highlights: [
      'ETChash algorithm security assessment',
      'Mining pool decentralization metrics',
      '51% attack cost analysis',
      'Network defense mechanisms',
    ],
  },
  {
    id: 'market-analysis-h2-2024',
    title: 'ETC Market Analysis H2 2024',
    slug: 'market-analysis-h2-2024',
    description: 'Market research and price analysis for Ethereum Classic in the second half of 2024. Trading volumes, exchange listings, and market trends.',
    category: 'market',
    date: '2024-09-15',
    author: 'ETC Market Research',
    readTime: '10 min',
    highlights: [
      'ETC trading volume analysis',
      'Exchange liquidity overview',
      'Market cap ranking trends',
      'Trading pair expansion',
    ],
  },
  {
    id: 'defi-growth-report',
    title: 'DeFi on ETC: Growth Report',
    slug: 'defi-growth-report',
    description: 'Analysis of decentralized finance growth on Ethereum Classic. Protocol TVL, user adoption, and yield opportunities.',
    category: 'ecosystem',
    date: '2024-08-30',
    author: 'ETC DeFi Research',
    readTime: '14 min',
    highlights: [
      'ETCswap V2/V3 comparison',
      'Liquidity provider analysis',
      'Stablecoin integration impact',
      'DeFi user growth metrics',
    ],
  },
]

export interface NetworkMetric {
  label: string
  value: string
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  description: string
}

export const networkMetrics: NetworkMetric[] = [
  {
    label: 'Network Hashrate',
    value: '185 TH/s',
    change: '+5.2%',
    changeType: 'positive',
    description: 'Total computational power securing the network',
  },
  {
    label: 'Difficulty',
    value: '2.5 PH',
    change: '+3.1%',
    changeType: 'positive',
    description: 'Mining difficulty adjusts to maintain 13.5s blocks',
  },
  {
    label: 'Daily Transactions',
    value: '45,000+',
    change: '+12%',
    changeType: 'positive',
    description: 'Average daily on-chain transactions',
  },
  {
    label: 'Active Addresses',
    value: '125,000+',
    change: '+8%',
    changeType: 'positive',
    description: 'Unique addresses active in the past 30 days',
  },
  {
    label: 'Block Time',
    value: '13.5s',
    changeType: 'neutral',
    description: 'Average time between blocks',
  },
  {
    label: 'Block Reward',
    value: '2.56 ETC',
    changeType: 'neutral',
    description: 'Current mining reward per block',
  },
]

export interface EcosystemStat {
  category: string
  stats: {
    label: string
    value: string
  }[]
}

export const ecosystemStats: EcosystemStat[] = [
  {
    category: 'DeFi',
    stats: [
      { label: 'Total Value Locked', value: '$15M+' },
      { label: 'DEX Volume (24h)', value: '$500K+' },
      { label: 'Active Pools', value: '50+' },
    ],
  },
  {
    category: 'Infrastructure',
    stats: [
      { label: 'Node Clients', value: '3' },
      { label: 'Public RPC Endpoints', value: '7+' },
      { label: 'Block Explorers', value: '2' },
    ],
  },
  {
    category: 'Mining',
    stats: [
      { label: 'Mining Pools', value: '6+' },
      { label: 'ASIC Models', value: '5+' },
      { label: 'Daily Block Rewards', value: '~16,400 ETC' },
    ],
  },
  {
    category: 'Community',
    stats: [
      { label: 'Twitter Followers', value: '500K+' },
      { label: 'Discord Members', value: '20K+' },
      { label: 'GitHub Contributors', value: '100+' },
    ],
  },
]

export interface DataSource {
  name: string
  url: string
  description: string
  type: 'explorer' | 'api' | 'analytics' | 'external'
}

export const dataSources: DataSource[] = [
  {
    name: 'Blockscout',
    url: 'https://etc.blockscout.com',
    description: 'Official ETC block explorer with comprehensive on-chain data',
    type: 'explorer',
  },
  {
    name: 'Blockscout API',
    url: 'https://etc.blockscout.com/api',
    description: 'REST API for programmatic access to blockchain data',
    type: 'api',
  },
  {
    name: 'MiningPoolStats',
    url: 'https://miningpoolstats.stream/ethereumclassic',
    description: 'Mining pool distribution and hashrate tracking',
    type: 'analytics',
  },
  {
    name: 'WhatToMine',
    url: 'https://whattomine.com/coins/162-etc-etchash',
    description: 'Mining profitability and network statistics',
    type: 'analytics',
  },
  {
    name: 'CoinGecko',
    url: 'https://www.coingecko.com/en/coins/ethereum-classic',
    description: 'Market data, price history, and trading volume',
    type: 'external',
  },
  {
    name: 'CoinMarketCap',
    url: 'https://coinmarketcap.com/currencies/ethereum-classic/',
    description: 'Market capitalization and exchange data',
    type: 'external',
  },
]

// Helper functions
export function getReportBySlug(slug: string): Report | undefined {
  return reports.find((r) => r.slug === slug)
}

export function getReportsByCategory(category: Report['category']): Report[] {
  return reports.filter((r) => r.category === category)
}

export function getLatestReports(count: number = 3): Report[] {
  return [...reports]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}

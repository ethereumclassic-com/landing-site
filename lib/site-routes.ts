import type { MetadataRoute } from 'next'
/**
 * Every page with a fixed URL, by section, with the label the HTML site map shows. app/sitemap.ts lists the
 * same routes for search engines, adding the pages generated from data (articles, reviews, apps, clients,
 * pools, calls), and /site-map fails its build if a page in that sitemap is missing from it. A new page
 * goes here once, with its label, and appears in both.
 */
export type StaticRoute = {
  path: string
  label: string
  priority: number
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  /** Files besides the route's page.tsx that its content comes from. */
  sources?: string[]
}

export const CORE_GETH_DATA = 'lib/core-geth.ts'
export const FUKUII_DATA = 'lib/fukuii.ts'
const OLYMPIA_DATA = 'app/olympia/data/olympia.ts'
// The Olympia ECIP titles and ECIP-1121's EIP rows, which several pages render.
const OLYMPIA_ECIPS_DATA = 'lib/olympia-ecips.ts'
const OLYMPIA_EIPS_DATA = 'lib/olympia-eips.ts'

export interface SiteSection {
  title: string
  routes: StaticRoute[]
}

export const SITE_SECTIONS: SiteSection[] = [
  {
    title: 'About This Site',
    routes: [
      { path: '', label: 'Home', priority: 1.0, changeFrequency: 'daily' as const },
      { path: '/about', label: 'About', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/contact', label: 'Contact', priority: 0.5, changeFrequency: 'weekly' as const, sources: ['lib/social.ts'] },
      { path: '/advertise', label: 'Advertise', priority: 0.5, changeFrequency: 'weekly' as const },
      { path: '/partners', label: 'Partnerships', priority: 0.5, changeFrequency: 'weekly' as const },
      { path: '/legal', label: 'Terms of Service', priority: 0.3, changeFrequency: 'yearly' as const },
      { path: '/privacy', label: 'Privacy Policy', priority: 0.3, changeFrequency: 'yearly' as const },
      { path: '/site-map', label: 'Site Map', priority: 0.3, changeFrequency: 'weekly' as const },
    ],
  },
  {
    title: 'Wallets',
    routes: [
      { path: '/wallet', label: 'Wallet Hub', priority: 0.9, changeFrequency: 'weekly' as const, sources: ['app/wallet/data/wallets.ts'] },
      { path: '/wallet/metamask', label: 'MetaMask Setup', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/wallet/hardware', label: 'Hardware Wallets', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/wallet/compare', label: 'Compare Wallets', priority: 0.7, changeFrequency: 'weekly' as const, sources: ['app/wallet/data/wallets.ts'] },
      { path: '/wallet/reviews', label: 'Wallet Reviews', priority: 0.7, changeFrequency: 'weekly' as const, sources: ['app/wallet/data/reviews.ts'] },
    ],
  },
  {
    title: 'Buy and Sell',
    routes: [
      { path: '/buy', label: 'Buy ETC', priority: 0.9, changeFrequency: 'weekly' as const },
      { path: '/buy/exchanges', label: 'Exchanges', priority: 0.8, changeFrequency: 'weekly' as const },
      { path: '/buy/instant', label: 'Instant Buy', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/buy/card', label: 'Buy with a Card', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/buy/bank', label: 'Buy with a Bank Transfer', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/buy/p2p', label: 'Peer-to-Peer Trading', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/buy/atm', label: 'Crypto ATMs', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/buy/reviews', label: 'Exchange Reviews', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/sell', label: 'Sell ETC', priority: 0.8, changeFrequency: 'weekly' as const },
      { path: '/sell/exchanges', label: 'Sell on Exchanges', priority: 0.7, changeFrequency: 'weekly' as const },
    ],
  },
  {
    title: 'Exchanges',
    routes: [
      { path: '/exchanges', label: 'Exchange Directory', priority: 0.8, changeFrequency: 'weekly' as const },
      { path: '/exchanges/compare', label: 'Compare Exchanges', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/exchanges/beginners', label: 'Best for Beginners', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/exchanges/lowest-fees', label: 'Lowest Fees', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/exchanges/most-secure', label: 'Most Secure', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/exchanges/decentralized', label: 'Decentralized Exchanges', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/exchanges/no-kyc', label: 'No-KYC Exchanges', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/exchanges/us-friendly', label: 'US-Friendly Exchanges', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/exchanges/staking', label: 'Staking on Exchanges', priority: 0.5, changeFrequency: 'weekly' as const },
      { path: '/investment-products', label: 'Investment Products', priority: 0.6, changeFrequency: 'weekly' as const },
    ],
  },
  {
    title: 'Apps',
    routes: [
      { path: '/apps', label: 'Apps Directory', priority: 0.9, changeFrequency: 'weekly' as const, sources: ['app/apps/data/apps.ts'] },
      { path: '/apps/featured', label: 'Featured Apps', priority: 0.8, changeFrequency: 'weekly' as const },
      { path: '/apps/defi', label: 'DeFi', priority: 0.8, changeFrequency: 'weekly' as const },
      { path: '/apps/payments', label: 'Payments', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/apps/tools', label: 'Tools', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/apps/infrastructure', label: 'Infrastructure', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/apps/governance', label: 'Governance', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/apps/submit', label: 'Submit an App', priority: 0.4, changeFrequency: 'weekly' as const },
    ],
  },
  {
    title: 'Learn',
    routes: [
      { path: '/learn', label: 'Learning Center', priority: 0.9, changeFrequency: 'weekly' as const },
      { path: '/learn/basics/what-is-ethereum-classic', label: 'What Is Ethereum Classic?', priority: 0.8, changeFrequency: 'monthly' as const },
      { path: '/learn/basics', label: 'ETC Basics', priority: 0.8, changeFrequency: 'weekly' as const },
      { path: '/learn/wallets', label: 'Wallet Guides', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/learn/trading', label: 'Trading Guides', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/learn/defi', label: 'DeFi on ETC', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/learn/mining', label: 'Mining Guides', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/learn/staking', label: 'Yield and Liquidity', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/learn/security', label: 'Security Guides', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/learn/glossary', label: 'Glossary', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/learn/on-ramp', label: 'Stablecoins to ETC', priority: 0.6, changeFrequency: 'weekly' as const },
    ],
  },
  {
    title: 'Why Classic',
    routes: [
      { path: '/why-classic', label: 'Why Classic', priority: 0.8, changeFrequency: 'weekly' as const },
    ],
  },
  {
    title: 'Frequently Asked Questions',
    routes: [
      { path: '/faq', label: 'All Questions', priority: 0.8, changeFrequency: 'weekly' as const, sources: ['app/faq/data/faqs.ts'] },
      { path: '/faq/users', label: 'For Users', priority: 0.7, changeFrequency: 'weekly' as const, sources: ['app/faq/data/faqs.ts'] },
      { path: '/faq/investors', label: 'For Investors', priority: 0.7, changeFrequency: 'weekly' as const, sources: ['app/faq/data/faqs.ts'] },
      { path: '/faq/miners', label: 'For Miners', priority: 0.7, changeFrequency: 'weekly' as const, sources: ['app/faq/data/faqs.ts'] },
      { path: '/faq/developers', label: 'For Developers', priority: 0.7, changeFrequency: 'weekly' as const, sources: ['app/faq/data/faqs.ts'] },
      { path: '/faq/community', label: 'Community', priority: 0.7, changeFrequency: 'weekly' as const, sources: ['app/faq/data/faqs.ts'] },
    ],
  },
  {
    title: 'News',
    routes: [
      { path: '/news', label: 'Latest News', priority: 0.9, changeFrequency: 'daily' as const, sources: ['app/news/data/articles.ts'] },
      { path: '/news/feeds', label: 'News Feeds', priority: 0.3, changeFrequency: 'yearly' as const },
      { path: '/news/category/updates', label: 'Updates', priority: 0.7, changeFrequency: 'daily' as const },
      { path: '/news/category/security', label: 'Security', priority: 0.7, changeFrequency: 'daily' as const },
      { path: '/news/category/ecosystem', label: 'Ecosystem', priority: 0.7, changeFrequency: 'daily' as const },
      { path: '/news/category/community', label: 'Community', priority: 0.7, changeFrequency: 'daily' as const },
      { path: '/news/category/development', label: 'Development', priority: 0.7, changeFrequency: 'daily' as const },
    ],
  },
  {
    title: 'Markets',
    routes: [
      { path: '/markets', label: 'Markets Overview', priority: 0.8, changeFrequency: 'hourly' as const },
      { path: '/price', label: 'ETC Price', priority: 0.9, changeFrequency: 'hourly' as const },
    ],
  },
  {
    title: 'Research and Network Data',
    routes: [
      { path: '/research', label: 'Research Hub', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/network', label: 'Network Status', priority: 0.5, changeFrequency: 'daily' as const },
      { path: '/research/network', label: 'Network Dashboard', priority: 0.6, changeFrequency: 'daily' as const },
      { path: '/research/supply', label: 'Supply Tracker', priority: 0.6, changeFrequency: 'daily' as const },
      { path: '/research/emission-schedule', label: 'Emission Schedule', priority: 0.8, changeFrequency: 'daily' as const },
      { path: '/block-reward-countdown', label: 'Block Reward Countdown', priority: 0.9, changeFrequency: 'hourly' as const },
      { path: '/research/history', label: 'Historical Data', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/research/ethereum-ico', label: 'The 2014 Ethereum ICO', priority: 0.7, changeFrequency: 'yearly' as const },
      { path: '/research/dao-fork', label: 'The 2016 DAO Fork', priority: 0.7, changeFrequency: 'yearly' as const },
      { path: '/research/ecosystem', label: 'Ecosystem Overview', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/regulation', label: 'Regulatory Framework', priority: 0.6, changeFrequency: 'weekly' as const, sources: ['app/regulation/components/NetworkSecuritySection.tsx'] },
      { path: '/environmental-impact', label: 'Energy Infrastructure', priority: 0.5, changeFrequency: 'weekly' as const },
    ],
  },
  {
    title: 'Mining',
    routes: [
      { path: '/mining', label: 'Mining Hub', priority: 0.9, changeFrequency: 'weekly' as const, sources: ['app/mining/components/ClientImplementationsSection.tsx'] },
      { path: '/mining/getting-started', label: 'Getting Started', priority: 0.8, changeFrequency: 'weekly' as const },
      { path: '/mining/pools', label: 'Mining Pools', priority: 0.8, changeFrequency: 'weekly' as const },
      { path: '/mining/hardware', label: 'Hardware Guide', priority: 0.8, changeFrequency: 'weekly' as const },
      { path: '/mining/hardware/buy', label: 'Buy Mining Hardware', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/mining/software', label: 'Mining Software', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/mining/os', label: 'Mining Operating Systems', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/mining/approaches', label: 'GPU or ASIC', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/mining/profitability', label: 'Profitability Calculator', priority: 0.8, changeFrequency: 'daily' as const },
      { path: '/mining/stats', label: 'Network Statistics', priority: 0.7, changeFrequency: 'daily' as const },
      { path: '/mining/hashrate', label: 'Network Hashrate', priority: 0.7, changeFrequency: 'daily' as const },
      { path: '/mining/difficulty', label: 'Network Difficulty', priority: 0.7, changeFrequency: 'daily' as const },
      { path: '/mining/fees', label: 'Network Fees', priority: 0.8, changeFrequency: 'daily' as const, sources: ['app/mining/fees/layout.tsx', 'lib/network-fees.ts'] },
      { path: '/mining/regulation', label: 'Mining Policy', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/earn', label: 'Earn ETC', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/store', label: 'Hardware Store', priority: 0.4, changeFrequency: 'weekly' as const },
    ],
  },
  {
    title: 'Build',
    routes: [
      { path: '/build', label: 'Developer Hub', priority: 0.8, changeFrequency: 'weekly' as const },
      { path: '/build/getting-started', label: 'Getting Started', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/build/docs', label: 'Documentation', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/build/tools', label: 'Developer Tools', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/build/clients', label: 'Node Clients', priority: 0.9, changeFrequency: 'weekly' as const, sources: ['app/build/data/build.ts', CORE_GETH_DATA, FUKUII_DATA] },
      { path: '/build/clients/core-geth-security-audit', label: 'Core-Geth v1.12 Security Audits', priority: 0.9, changeFrequency: 'monthly' as const, sources: ['app/build/clients/core-geth-security-audit/layout.tsx', 'app/build/clients/core-geth-security-audit/RecordText.tsx', 'lib/core-geth-record.ts', CORE_GETH_DATA] },
      { path: '/build/networks', label: 'Networks', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/build/faucets', label: 'Testnet Faucets', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/build/grants', label: 'Grants and Funding', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/build/api', label: 'Connecting to Ethereum Classic', priority: 0.6, changeFrequency: 'weekly' as const },
    ],
  },
  {
    title: 'Network Upgrades',
    routes: [
      { path: '/upgrades', label: 'Upgrade History', priority: 0.8, changeFrequency: 'weekly' as const, sources: ['app/upgrades/layout.tsx', 'app/upgrades/data/forks.ts', OLYMPIA_ECIPS_DATA] },
      { path: '/core-devs', label: 'Core Developer Calls', priority: 0.7, changeFrequency: 'weekly' as const },
    ],
  },
  {
    title: 'Olympia',
    routes: [
      { path: '/olympia', label: 'The Olympia Upgrade', priority: 0.9, changeFrequency: 'weekly' as const, sources: ['app/olympia/layout.tsx', OLYMPIA_DATA, OLYMPIA_ECIPS_DATA, OLYMPIA_EIPS_DATA] },
      { path: '/olympia/upgrade', label: 'For Node Operators', priority: 0.9, changeFrequency: 'weekly' as const, sources: ['app/olympia/upgrade/layout.tsx', OLYMPIA_DATA, OLYMPIA_ECIPS_DATA, OLYMPIA_EIPS_DATA, CORE_GETH_DATA] },
      { path: '/olympia/clients', label: 'Client Readiness', priority: 0.7, changeFrequency: 'weekly' as const, sources: [OLYMPIA_DATA, 'app/olympia/components/ClientUpgradeCard.tsx', CORE_GETH_DATA, FUKUII_DATA] },
      { path: '/olympia/clients/core-geth', label: 'Core-Geth and Olympia', priority: 0.6, changeFrequency: 'weekly' as const, sources: ['app/olympia/clients/core-geth/layout.tsx', OLYMPIA_DATA, 'app/olympia/components/ClientUpgradeCard.tsx', CORE_GETH_DATA] },
      { path: '/olympia/clients/fukuii', label: 'Fukuii and Olympia', priority: 0.6, changeFrequency: 'weekly' as const, sources: ['app/olympia/clients/fukuii/layout.tsx', OLYMPIA_DATA, 'app/olympia/components/ClientUpgradeCard.tsx', FUKUII_DATA] },
      { path: '/olympia/treasury', label: 'The Olympia Treasury', priority: 0.8, changeFrequency: 'monthly' as const, sources: ['app/olympia/treasury/layout.tsx'] },
      { path: '/olympia/governance', label: 'Olympia DAO Governance', priority: 0.8, changeFrequency: 'weekly' as const, sources: ['app/olympia/governance/layout.tsx', OLYMPIA_DATA] },
      { path: '/olympia/miners', label: 'Miners and Olympia', priority: 0.7, changeFrequency: 'weekly' as const, sources: ['app/olympia/miners/layout.tsx'] },
      { path: '/olympia/history', label: 'A Decade of Conviction', priority: 0.8, changeFrequency: 'weekly' as const, sources: ['app/olympia/history/layout.tsx'] },
      { path: '/olympia/etymology', label: 'Etymology and Lore', priority: 0.8, changeFrequency: 'weekly' as const, sources: ['app/olympia/etymology/layout.tsx'] },
    ],
  },
  {
    title: 'Tools',
    routes: [
      { path: '/tools', label: 'Tools Hub', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/tools/converter', label: 'Price Converter', priority: 0.7, changeFrequency: 'daily' as const },
      { path: '/tools/calculator', label: 'Investment Calculator', priority: 0.7, changeFrequency: 'daily' as const },
      { path: '/tools/gas', label: 'Gas Tracker', priority: 0.7, changeFrequency: 'hourly' as const },
      { path: '/tools/explorer', label: 'Block Explorers', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/tools/verify', label: 'Contract Verification', priority: 0.5, changeFrequency: 'weekly' as const },
    ],
  },
  {
    title: 'Resource Directory',
    routes: [
      { path: '/ecosystem', label: 'Ecosystem Directory', priority: 0.5, changeFrequency: 'weekly' as const },
      { path: '/directory', label: 'Directory Hub', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/directory/wallets', label: 'Wallets', priority: 0.7, changeFrequency: 'weekly' as const, sources: ['app/wallet/data/wallets.ts'] },
      { path: '/directory/exchanges', label: 'Exchanges', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/directory/mining', label: 'Mining', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/directory/developers', label: 'Developers', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/directory/community', label: 'Community', priority: 0.6, changeFrequency: 'weekly' as const },
    ],
  },
  {
    title: 'Community',
    routes: [
      { path: '/community', label: 'Community Hub', priority: 0.7, changeFrequency: 'weekly' as const },
      { path: '/community/social', label: 'Social Channels', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/community/events', label: 'Events', priority: 0.6, changeFrequency: 'weekly' as const },
      { path: '/community/contribute', label: 'How to Contribute', priority: 0.5, changeFrequency: 'weekly' as const },
    ],
  },
]

export const STATIC_ROUTES: StaticRoute[] = SITE_SECTIONS.flatMap((section) => section.routes)

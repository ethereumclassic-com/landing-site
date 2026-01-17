'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export interface BreadcrumbItem {
  label: string
  href: string
}

// Human-readable labels for route segments
const segmentLabels: Record<string, string> = {
  // Main sections
  wallet: 'Wallet',
  buy: 'Buy',
  sell: 'Sell',
  apps: 'Apps',
  learn: 'Learn',
  news: 'News',
  markets: 'Markets',
  price: 'Price',
  mining: 'Mining',
  build: 'Build',
  exchanges: 'Exchanges',
  research: 'Research',
  tools: 'Tools',
  directory: 'Directory',
  community: 'Community',
  account: 'Account',
  converter: 'Converter',
  calculator: 'Calculator',

  // Wallet sub-sections
  'classic-os': 'Classic OS',
  metamask: 'MetaMask',
  hardware: 'Hardware',
  compare: 'Compare',
  reviews: 'Reviews',

  // Buy/Sell sub-sections
  instant: 'Instant',
  p2p: 'P2P',
  atm: 'ATM',
  card: 'Card',
  bank: 'Bank',

  // Exchanges sub-sections
  beginners: 'Beginners',
  'lowest-fees': 'Lowest Fees',
  'most-secure': 'Most Secure',
  decentralized: 'Decentralized',
  'no-kyc': 'No KYC',
  'us-friendly': 'US Friendly',
  staking: 'Staking',

  // Apps sub-sections
  featured: 'Featured',
  defi: 'DeFi',
  nft: 'NFT',
  games: 'Games',
  infrastructure: 'Infrastructure',
  governance: 'Governance',
  submit: 'Submit',

  // Learn sub-sections
  basics: 'Basics',
  'ethereum-classic': 'Ethereum Classic',
  wallets: 'Wallets',
  trading: 'Trading',
  security: 'Security',
  glossary: 'Glossary',

  // News sub-sections
  category: 'Category',
  tag: 'Tag',

  // Mining sub-sections
  'getting-started': 'Getting Started',
  pools: 'Pools',
  software: 'Software',
  profitability: 'Profitability',
  stats: 'Stats',

  // Build sub-sections
  docs: 'Documentation',
  clients: 'Clients',
  networks: 'Networks',
  faucets: 'Faucets',
  grants: 'Grants',

  // Research sub-sections
  reports: 'Reports',
  network: 'Network',
  ecosystem: 'Ecosystem',

  // Tools sub-sections
  gas: 'Gas Tracker',
  explorer: 'Explorer',
  verify: 'Verify',

  // Directory sub-sections
  developers: 'Developers',

  // Community sub-sections
  social: 'Social',
  events: 'Events',
  contribute: 'Contribute',

  // Account sub-sections
  login: 'Login',
  register: 'Register',
  settings: 'Settings',
  watchlist: 'Watchlist',
  portfolio: 'Portfolio',

  // Core pages
  about: 'About',
  contact: 'Contact',
  advertise: 'Advertise',
  partners: 'Partners',
  legal: 'Legal',
  privacy: 'Privacy',
  'site-map': 'Sitemap',
}

/**
 * Converts a URL segment to a human-readable label
 */
function getSegmentLabel(segment: string): string {
  // Check for predefined label
  if (segmentLabels[segment]) {
    return segmentLabels[segment]
  }

  // Convert kebab-case to Title Case
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Hook to generate breadcrumb items from the current URL path
 */
export function useBreadcrumbs(options?: {
  /** Include Home as first breadcrumb (default: true) */
  includeHome?: boolean
  /** Custom label for the current page (overrides auto-generated) */
  currentLabel?: string
}): BreadcrumbItem[] {
  const pathname = usePathname()
  const { includeHome = true, currentLabel } = options || {}

  return useMemo(() => {
    const segments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = []

    // Add Home if requested
    if (includeHome) {
      breadcrumbs.push({ label: 'Home', href: '/' })
    }

    // Build breadcrumbs from path segments
    let currentPath = ''
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === segments.length - 1

      // Use custom label for current page if provided
      const label = isLast && currentLabel ? currentLabel : getSegmentLabel(segment)

      breadcrumbs.push({
        label,
        href: currentPath,
      })
    })

    return breadcrumbs
  }, [pathname, includeHome, currentLabel])
}

export default useBreadcrumbs

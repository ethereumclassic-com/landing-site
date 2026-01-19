/**
 * Centralized Affiliate Link Bank
 *
 * Single source of truth for all affiliate/referral links.
 * - Returns affiliate URL if program is active
 * - Falls back to base URL if not yet signed up
 * - Easy to update codes without searching codebase
 *
 * Usage:
 *   import { getAffiliateLink, getAffiliateUrl } from '@/lib/affiliates'
 *   <a href={getAffiliateLink('binance')}>Trade on Binance</a>
 */

export type AffiliateCategory =
  | 'exchange'
  | 'hardware-wallet'
  | 'software-wallet'
  | 'mining-hardware'
  | 'retailer'
  | 'service'

export type AffiliateTier = 1 | 2 | 3

export interface AffiliateConfig {
  /** Unique identifier (lowercase, kebab-case) */
  id: string
  /** Display name */
  name: string
  /** Base website URL (non-affiliate) */
  baseUrl: string
  /** Full affiliate URL with tracking code (null if not signed up) */
  affiliateUrl: string | null
  /** Just the affiliate/referral code portion */
  affiliateCode: string | null
  /** Category for filtering */
  category: AffiliateCategory
  /** Priority tier (1=highest volume/priority) */
  tier: AffiliateTier
  /** Whether affiliate link is active and should be used */
  isActive: boolean
  /** Date affiliate was activated (YYYY-MM format) */
  activatedDate: string | null
  /** Commission rate for reference */
  commission?: string
  /** Cookie/attribution duration */
  cookieDuration?: string
  /** Additional notes */
  notes?: string
}

/**
 * Master affiliate configuration
 * Organized by category, then by tier within category
 */
export const affiliates: Record<string, AffiliateConfig> = {
  // ============================================
  // TIER 1 EXCHANGES (High Volume)
  // ============================================
  binance: {
    id: 'binance',
    name: 'Binance',
    baseUrl: 'https://www.binance.com',
    affiliateUrl: null, // Format: https://www.binance.com/en/register?ref=XXXXX
    affiliateCode: null,
    category: 'exchange',
    tier: 1,
    isActive: false,
    activatedDate: null,
    commission: '41-50% trading fees (lifetime)',
    cookieDuration: 'Lifetime',
    notes: 'Not available in US/UK/Canada. Requires 5k+ followers.',
  },

  coinbase: {
    id: 'coinbase',
    name: 'Coinbase',
    baseUrl: 'https://www.coinbase.com',
    affiliateUrl: null, // Via Impact Radius
    affiliateCode: null,
    category: 'exchange',
    tier: 1,
    isActive: false,
    activatedDate: null,
    commission: '50% trading fees (3 months)',
    cookieDuration: '30 days',
    notes: 'US market leader. Requires 45k+ monthly visitors.',
  },

  kraken: {
    id: 'kraken',
    name: 'Kraken',
    baseUrl: 'https://www.kraken.com',
    affiliateUrl: null, // Via Impact Radius
    affiliateCode: null,
    category: 'exchange',
    tier: 1,
    isActive: false,
    activatedDate: null,
    commission: '20% trading fees ($1k cap/referral, lifetime)',
    cookieDuration: '30 days',
    notes: 'US-friendly. Requires 5k+ followers.',
  },

  okx: {
    id: 'okx',
    name: 'OKX',
    baseUrl: 'https://www.okx.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 1,
    isActive: false,
    activatedDate: null,
    commission: 'Up to 50% trading fees',
    notes: 'Not available in US.',
  },

  bybit: {
    id: 'bybit',
    name: 'Bybit',
    baseUrl: 'https://www.bybit.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 1,
    isActive: false,
    activatedDate: null,
    commission: 'Up to 50% trading fees',
    notes: 'Not available in US.',
  },

  kucoin: {
    id: 'kucoin',
    name: 'KuCoin',
    baseUrl: 'https://www.kucoin.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 1,
    isActive: false,
    activatedDate: null,
    commission: 'Up to 45% trading fees',
  },

  'gate-io': {
    id: 'gate-io',
    name: 'Gate.io',
    baseUrl: 'https://www.gate.io',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 1,
    isActive: false,
    activatedDate: null,
    commission: 'Up to 60% trading fees',
  },

  // ============================================
  // TIER 2 EXCHANGES (Mid Volume)
  // ============================================
  mexc: {
    id: 'mexc',
    name: 'MEXC',
    baseUrl: 'https://www.mexc.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  bitget: {
    id: 'bitget',
    name: 'Bitget',
    baseUrl: 'https://www.bitget.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  htx: {
    id: 'htx',
    name: 'HTX',
    baseUrl: 'https://www.htx.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  bitfinex: {
    id: 'bitfinex',
    name: 'Bitfinex',
    baseUrl: 'https://www.bitfinex.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  poloniex: {
    id: 'poloniex',
    name: 'Poloniex',
    baseUrl: 'https://poloniex.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  coinex: {
    id: 'coinex',
    name: 'CoinEx',
    baseUrl: 'https://www.coinex.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  phemex: {
    id: 'phemex',
    name: 'Phemex',
    baseUrl: 'https://phemex.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  whitebit: {
    id: 'whitebit',
    name: 'WhiteBIT',
    baseUrl: 'https://whitebit.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  lbank: {
    id: 'lbank',
    name: 'LBank',
    baseUrl: 'https://www.lbank.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  bitmart: {
    id: 'bitmart',
    name: 'BitMart',
    baseUrl: 'https://www.bitmart.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  'xt-com': {
    id: 'xt-com',
    name: 'XT.COM',
    baseUrl: 'https://www.xt.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  bingx: {
    id: 'bingx',
    name: 'BingX',
    baseUrl: 'https://bingx.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  pionex: {
    id: 'pionex',
    name: 'Pionex',
    baseUrl: 'https://www.pionex.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  // ============================================
  // TIER 3 EXCHANGES (Regional/Specialized)
  // ============================================
  'binance-us': {
    id: 'binance-us',
    name: 'Binance US',
    baseUrl: 'https://www.binance.us',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  bitstamp: {
    id: 'bitstamp',
    name: 'Bitstamp',
    baseUrl: 'https://www.bitstamp.net',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  upbit: {
    id: 'upbit',
    name: 'Upbit',
    baseUrl: 'https://upbit.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
    notes: 'Korean market leader.',
  },

  bithumb: {
    id: 'bithumb',
    name: 'Bithumb',
    baseUrl: 'https://www.bithumb.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  'crypto-com': {
    id: 'crypto-com',
    name: 'Crypto.com',
    baseUrl: 'https://crypto.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  gemini: {
    id: 'gemini',
    name: 'Gemini',
    baseUrl: 'https://www.gemini.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  coinw: {
    id: 'coinw',
    name: 'CoinW',
    baseUrl: 'https://www.coinw.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  toobit: {
    id: 'toobit',
    name: 'Toobit',
    baseUrl: 'https://www.toobit.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  azbit: {
    id: 'azbit',
    name: 'Azbit',
    baseUrl: 'https://azbit.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  bitrue: {
    id: 'bitrue',
    name: 'Bitrue',
    baseUrl: 'https://www.bitrue.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  exmo: {
    id: 'exmo',
    name: 'EXMO',
    baseUrl: 'https://exmo.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  latoken: {
    id: 'latoken',
    name: 'LATOKEN',
    baseUrl: 'https://latoken.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  bit2me: {
    id: 'bit2me',
    name: 'Bit2Me',
    baseUrl: 'https://bit2me.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  trubit: {
    id: 'trubit',
    name: 'Trubit',
    baseUrl: 'https://www.trubit.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  pointpay: {
    id: 'pointpay',
    name: 'PointPay',
    baseUrl: 'https://pointpay.io',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  bydfi: {
    id: 'bydfi',
    name: 'BYDFi',
    baseUrl: 'https://www.bydfi.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  'dex-trade': {
    id: 'dex-trade',
    name: 'Dex-Trade',
    baseUrl: 'https://dex-trade.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  'nami-exchange': {
    id: 'nami-exchange',
    name: 'Nami Exchange',
    baseUrl: 'https://nami.exchange',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  nonkyc: {
    id: 'nonkyc',
    name: 'Nonkyc.io',
    baseUrl: 'https://nonkyc.io',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  indodax: {
    id: 'indodax',
    name: 'Indodax',
    baseUrl: 'https://indodax.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
    notes: 'Indonesian market.',
  },

  coindcx: {
    id: 'coindcx',
    name: 'CoinDCX',
    baseUrl: 'https://coindcx.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
    notes: 'Indian market.',
  },

  bitbns: {
    id: 'bitbns',
    name: 'BitBNS',
    baseUrl: 'https://bitbns.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'exchange',
    tier: 3,
    isActive: false,
    activatedDate: null,
    notes: 'Indian market.',
  },

  // ============================================
  // HARDWARE WALLETS
  // ============================================
  trezor: {
    id: 'trezor',
    name: 'Trezor',
    baseUrl: 'https://trezor.io',
    affiliateUrl: 'https://affil.trezor.io/aff_c?offer_id=133&aff_id=34561',
    affiliateCode: '34561',
    category: 'hardware-wallet',
    tier: 1,
    isActive: true,
    activatedDate: '2026-01',
    commission: '12-15% of sale',
    cookieDuration: '90 days',
    notes: 'Open-source firmware. Program via HasOffers/TUNE.',
  },

  ledger: {
    id: 'ledger',
    name: 'Ledger',
    baseUrl: 'https://www.ledger.com',
    affiliateUrl: 'https://shop.ledger.com/?r=bbf4d7f32e72',
    affiliateCode: 'bbf4d7f32e72',
    category: 'hardware-wallet',
    tier: 1,
    isActive: true,
    activatedDate: '2026-01',
    commission: '10% of sale',
    cookieDuration: '30 days',
  },

  safepal: {
    id: 'safepal',
    name: 'SafePal',
    baseUrl: 'https://www.safepal.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'hardware-wallet',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  coolwallet: {
    id: 'coolwallet',
    name: 'CoolWallet',
    baseUrl: 'https://www.coolwallet.io',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'hardware-wallet',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  ellipal: {
    id: 'ellipal',
    name: 'Ellipal',
    baseUrl: 'https://www.ellipal.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'hardware-wallet',
    tier: 2,
    isActive: false,
    activatedDate: null,
  },

  keypal: {
    id: 'keypal',
    name: 'KeyPal',
    baseUrl: 'https://keypal.pro',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'hardware-wallet',
    tier: 3,
    isActive: false,
    activatedDate: null,
  },

  // ============================================
  // MINING HARDWARE RETAILERS
  // ============================================
  amazon: {
    id: 'amazon',
    name: 'Amazon',
    baseUrl: 'https://www.amazon.com',
    affiliateUrl: null, // Format: https://www.amazon.com/dp/XXXXX?tag=YOURTAG
    affiliateCode: null,
    category: 'retailer',
    tier: 1,
    isActive: false,
    activatedDate: null,
    commission: '1-4% electronics',
    cookieDuration: '24 hours',
    notes: 'Amazon Associates program.',
  },

  newegg: {
    id: 'newegg',
    name: 'Newegg',
    baseUrl: 'https://www.newegg.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'retailer',
    tier: 2,
    isActive: false,
    activatedDate: null,
    commission: '0.5-2.5%',
  },

  ebay: {
    id: 'ebay',
    name: 'eBay',
    baseUrl: 'https://www.ebay.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'retailer',
    tier: 2,
    isActive: false,
    activatedDate: null,
    commission: '1-4%',
    notes: 'eBay Partner Network.',
  },

  // ============================================
  // ASIC MANUFACTURERS (Research needed)
  // ============================================
  bitmain: {
    id: 'bitmain',
    name: 'Bitmain',
    baseUrl: 'https://www.bitmain.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'mining-hardware',
    tier: 1,
    isActive: false,
    activatedDate: null,
    notes: 'Research if affiliate/reseller program exists.',
  },

  innosilicon: {
    id: 'innosilicon',
    name: 'Innosilicon',
    baseUrl: 'https://www.innosilicon.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'mining-hardware',
    tier: 2,
    isActive: false,
    activatedDate: null,
    notes: 'Research if affiliate/reseller program exists.',
  },

  ipollo: {
    id: 'ipollo',
    name: 'iPollo',
    baseUrl: 'https://ipollo.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'mining-hardware',
    tier: 2,
    isActive: false,
    activatedDate: null,
    notes: 'Research if affiliate/reseller program exists.',
  },

  jasminer: {
    id: 'jasminer',
    name: 'Jasminer',
    baseUrl: 'https://www.jasminer.com',
    affiliateUrl: null,
    affiliateCode: null,
    category: 'mining-hardware',
    tier: 2,
    isActive: false,
    activatedDate: null,
    notes: 'Research if affiliate/reseller program exists.',
  },
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get the best available link for an affiliate
 * Returns affiliate URL if active, otherwise base URL
 */
export function getAffiliateLink(id: string): string {
  const affiliate = affiliates[id]
  if (!affiliate) {
    console.warn(`[affiliates] Unknown affiliate ID: ${id}`)
    return '#'
  }
  return affiliate.isActive && affiliate.affiliateUrl ? affiliate.affiliateUrl : affiliate.baseUrl
}

/**
 * Get affiliate config by ID
 */
export function getAffiliate(id: string): AffiliateConfig | undefined {
  return affiliates[id]
}

/**
 * Check if an affiliate link is active
 */
export function isAffiliateActive(id: string): boolean {
  return affiliates[id]?.isActive ?? false
}

/**
 * Get all affiliates by category
 */
export function getAffiliatesByCategory(category: AffiliateCategory): AffiliateConfig[] {
  return Object.values(affiliates).filter((a) => a.category === category)
}

/**
 * Get all active affiliates (optionally filtered by category)
 */
export function getActiveAffiliates(category?: AffiliateCategory): AffiliateConfig[] {
  return Object.values(affiliates)
    .filter((a) => a.isActive)
    .filter((a) => !category || a.category === category)
}

/**
 * Get all inactive affiliates (for tracking signup progress)
 */
export function getPendingAffiliates(category?: AffiliateCategory): AffiliateConfig[] {
  return Object.values(affiliates)
    .filter((a) => !a.isActive)
    .filter((a) => !category || a.category === category)
    .sort((a, b) => a.tier - b.tier) // Sort by tier (1 first)
}

/**
 * Get affiliates by tier
 */
export function getAffiliatesByTier(tier: AffiliateTier): AffiliateConfig[] {
  return Object.values(affiliates).filter((a) => a.tier === tier)
}

/**
 * Get exchange affiliate by name (case-insensitive)
 * Useful for matching exchange names from other data sources
 */
export function getExchangeAffiliateByName(name: string): AffiliateConfig | undefined {
  const normalizedName = name.toLowerCase().trim()

  // Direct ID match
  if (affiliates[normalizedName]) {
    return affiliates[normalizedName]
  }

  // Name match
  return Object.values(affiliates).find(
    (a) => a.category === 'exchange' && a.name.toLowerCase() === normalizedName
  )
}

/**
 * Build affiliate link for exchange by name
 * Convenience function for exchange data integration
 */
export function getExchangeLink(exchangeName: string, fallbackUrl: string): string {
  const affiliate = getExchangeAffiliateByName(exchangeName)
  if (affiliate) {
    return getAffiliateLink(affiliate.id)
  }
  return fallbackUrl
}

// ============================================
// STATISTICS
// ============================================

/**
 * Get affiliate program statistics
 */
export function getAffiliateStats(): {
  total: number
  active: number
  pending: number
  byCategory: Record<AffiliateCategory, { total: number; active: number }>
} {
  const all = Object.values(affiliates)
  const categories: AffiliateCategory[] = [
    'exchange',
    'hardware-wallet',
    'software-wallet',
    'mining-hardware',
    'retailer',
    'service',
  ]

  const byCategory = {} as Record<AffiliateCategory, { total: number; active: number }>

  for (const cat of categories) {
    const inCategory = all.filter((a) => a.category === cat)
    byCategory[cat] = {
      total: inCategory.length,
      active: inCategory.filter((a) => a.isActive).length,
    }
  }

  return {
    total: all.length,
    active: all.filter((a) => a.isActive).length,
    pending: all.filter((a) => !a.isActive).length,
    byCategory,
  }
}

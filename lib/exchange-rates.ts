/**
 * Exchange Rates Service for Ethereum Classic
 * Fetches ETC prices and fiat exchange rates from CoinGecko API
 *
 * CoinGecko API (Free tier):
 * - Rate limit: 10-30 calls/minute
 * - No API key required for basic endpoints
 * - Docs: https://www.coingecko.com/en/api/documentation
 *
 * Cache Strategy: 24-hour file-based cache to minimize API calls
 */

import * as fs from 'fs'
import * as path from 'path'

const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3'

// Cache duration: 10 minutes — matches Blockscout pull cadence
const CACHE_DURATION_MS = 10 * 60 * 1000

// Cache file paths
const CACHE_DIR = path.join(process.cwd(), '.next', 'cache', 'rates')
const RATES_CACHE_FILE = path.join(CACHE_DIR, 'exchange-rates.json')

// Supported currencies for conversion
export const SUPPORTED_FIAT = ['usd', 'eur', 'gbp', 'jpy', 'krw', 'cad', 'aud', 'try', 'brl', 'cny', 'inr', 'rub'] as const
export const SUPPORTED_CRYPTO = ['btc', 'eth', 'bnb'] as const

export type FiatCurrency = (typeof SUPPORTED_FIAT)[number]
export type CryptoCurrency = (typeof SUPPORTED_CRYPTO)[number]
export type SupportedCurrency = FiatCurrency | CryptoCurrency

// Rate data structure
export interface ExchangeRates {
  // ETC prices in various currencies
  etc: Record<string, number>
  // 24h price changes
  etc_24h_change: Record<string, number>
  // Fiat-to-USD rates for cross conversion
  fiat_to_usd: Record<string, number>
  // Derived cross-asset USD prices
  eth_usd: number  // ETH price in USD (derived: etc.usd / etc.eth)
  btc_usd: number  // BTC price in USD (derived: etc.usd / etc.btc)
  // Metadata
  lastUpdated: string
  source: 'coingecko' | 'fallback'
}

// Cache entry structure
interface CacheEntry<T> {
  data: T
  timestamp: number
}

// In-memory cache
let ratesMemoryCache: CacheEntry<ExchangeRates> | null = null

/**
 * Ensure cache directory exists
 */
function ensureCacheDir(): void {
  try {
    if (!fs.existsSync(CACHE_DIR)) {
      fs.mkdirSync(CACHE_DIR, { recursive: true })
    }
  } catch {
    // Ignore errors
  }
}

/**
 * Read rates cache from file
 */
function readRatesCache(): CacheEntry<ExchangeRates> | null {
  try {
    if (fs.existsSync(RATES_CACHE_FILE)) {
      const content = fs.readFileSync(RATES_CACHE_FILE, 'utf-8')
      const entry = JSON.parse(content) as CacheEntry<ExchangeRates>

      if (Date.now() - entry.timestamp <= CACHE_DURATION_MS) {
        return entry
      }
    }
  } catch {
    // Cache read error
  }
  return null
}

/**
 * Write rates cache to file
 */
function writeRatesCache(data: ExchangeRates): void {
  try {
    ensureCacheDir()
    const entry: CacheEntry<ExchangeRates> = {
      data,
      timestamp: Date.now(),
    }
    fs.writeFileSync(RATES_CACHE_FILE, JSON.stringify(entry, null, 2))
    ratesMemoryCache = entry
  } catch {
    ratesMemoryCache = { data, timestamp: Date.now() }
  }
}

/**
 * Get cached rates (memory first, then file)
 */
function getCachedRates(): ExchangeRates | null {
  // Memory cache
  if (ratesMemoryCache && Date.now() - ratesMemoryCache.timestamp <= CACHE_DURATION_MS) {
    return ratesMemoryCache.data
  }

  // File cache
  const fileCache = readRatesCache()
  if (fileCache) {
    ratesMemoryCache = fileCache
    return fileCache.data
  }

  return null
}

/**
 * Fetch ETC prices from CoinGecko
 */
async function fetchCoinGeckoRates(): Promise<ExchangeRates | null> {
  try {
    // Fetch ETC price in multiple currencies
    const currencies = [...SUPPORTED_FIAT, ...SUPPORTED_CRYPTO].join(',')
    const priceUrl = `${COINGECKO_API_BASE}/simple/price?ids=ethereum-classic&vs_currencies=${currencies}&include_24hr_change=true`

    const priceResponse = await fetch(priceUrl, {
      headers: {
        Accept: 'application/json',
      },
      next: { revalidate: 300 }, // 5 min revalidation for Next.js
    })

    if (!priceResponse.ok) {
      console.error('CoinGecko price API error:', priceResponse.status)
      return null
    }

    const priceData = await priceResponse.json()
    const etcData = priceData['ethereum-classic']

    if (!etcData) {
      console.error('No ETC data in CoinGecko response')
      return null
    }

    // Extract prices and 24h changes
    const etc: Record<string, number> = {}
    const etc_24h_change: Record<string, number> = {}

    for (const currency of [...SUPPORTED_FIAT, ...SUPPORTED_CRYPTO]) {
      if (etcData[currency] !== undefined) {
        etc[currency] = etcData[currency]
      }
      const changeKey = `${currency}_24h_change`
      if (etcData[changeKey] !== undefined) {
        etc_24h_change[currency] = etcData[changeKey]
      }
    }

    // Fetch fiat-to-USD rates for cross conversion
    // CoinGecko provides exchange rates endpoint
    const fxUrl = `${COINGECKO_API_BASE}/exchange_rates`
    const fxResponse = await fetch(fxUrl, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 300 },
    })

    const fiat_to_usd: Record<string, number> = {}

    if (fxResponse.ok) {
      const fxData = await fxResponse.json()
      const rates = fxData.rates || {}

      // CoinGecko rates are relative to BTC, so we need to convert
      // Get USD rate first (BTC in USD)
      const btcToUsd = rates.usd?.value || 100000

      for (const currency of SUPPORTED_FIAT) {
        const rate = rates[currency]?.value
        if (rate && btcToUsd) {
          // Convert to USD rate (1 USD = X currency)
          fiat_to_usd[currency] = rate / btcToUsd
        }
      }
    }

    // Ensure USD is 1
    fiat_to_usd['usd'] = 1

    // Derive ETH and BTC USD prices from ETC cross-rates
    const eth_usd = (etc.usd && etc.eth) ? etc.usd / etc.eth : 0
    const btc_usd = (etc.usd && etc.btc) ? etc.usd / etc.btc : 0

    return {
      etc,
      etc_24h_change,
      fiat_to_usd,
      eth_usd,
      btc_usd,
      lastUpdated: new Date().toISOString(),
      source: 'coingecko',
    }
  } catch (error) {
    console.error('Failed to fetch CoinGecko rates:', error)
    return null
  }
}

/**
 * Get fallback rates when API is unavailable
 * Based on Jan 2026 data
 */
export function getFallbackRates(): ExchangeRates {
  return {
    etc: {
      usd: 12.75,
      eur: 12.24,
      gbp: 10.20,
      jpy: 1976,
      krw: 18488,
      cad: 18.34,
      aud: 20.53,
      try: 447.00,
      brl: 78.54,
      cny: 92.55,
      inr: 1080,
      rub: 1275,
      btc: 0.00012,
      eth: 0.0038,
      bnb: 0.019,
    },
    etc_24h_change: {
      usd: -0.70,
      eur: -0.65,
      gbp: -0.72,
      btc: -0.15,
      eth: 0.25,
    },
    fiat_to_usd: {
      usd: 1,
      eur: 0.96,
      gbp: 0.80,
      jpy: 155,
      krw: 1450,
      cad: 1.44,
      aud: 1.61,
      try: 35,
      brl: 6.16,
      cny: 7.26,
      inr: 84.7,
      rub: 100,
    },
    // Approximate Jan 2026 fallback values
    eth_usd: 3350,
    btc_usd: 104000,
    lastUpdated: new Date().toISOString(),
    source: 'fallback',
  }
}

/**
 * Fetch exchange rates with caching
 */
export async function fetchExchangeRates(): Promise<ExchangeRates> {
  // Check cache first
  const cached = getCachedRates()
  if (cached) {
    return cached
  }

  // Fetch fresh data
  const fresh = await fetchCoinGeckoRates()

  if (fresh) {
    writeRatesCache(fresh)
    return fresh
  }

  // Return fallback
  return getFallbackRates()
}

/**
 * Convert amount from one currency to another
 */
export function convertCurrency(
  amount: number,
  from: string,
  to: string,
  rates: ExchangeRates
): number | null {
  const fromLower = from.toLowerCase()
  const toLower = to.toLowerCase()

  // Same currency
  if (fromLower === toLower) return amount

  // ETC to other currency
  if (fromLower === 'etc') {
    const rate = rates.etc[toLower]
    return rate ? amount * rate : null
  }

  // Other currency to ETC
  if (toLower === 'etc') {
    const rate = rates.etc[fromLower]
    return rate ? amount / rate : null
  }

  // Cross conversion through ETC
  const fromEtcRate = rates.etc[fromLower]
  const toEtcRate = rates.etc[toLower]

  if (fromEtcRate && toEtcRate) {
    // Convert from -> ETC -> to
    const etcAmount = amount / fromEtcRate
    return etcAmount * toEtcRate
  }

  return null
}

/**
 * Get cache age in minutes
 */
export function getCacheAge(): number {
  if (ratesMemoryCache) {
    return Math.round((Date.now() - ratesMemoryCache.timestamp) / 1000 / 60)
  }

  const fileCache = readRatesCache()
  if (fileCache) {
    return Math.round((Date.now() - fileCache.timestamp) / 1000 / 60)
  }

  return 0
}

/**
 * Format rates for API response
 */
export function formatRatesResponse(rates: ExchangeRates) {
  const cacheAge = getCacheAge()

  return {
    // ETC prices
    prices: {
      ETC_USD: rates.etc.usd,
      ETC_EUR: rates.etc.eur,
      ETC_GBP: rates.etc.gbp,
      ETC_JPY: rates.etc.jpy,
      ETC_KRW: rates.etc.krw,
      ETC_CAD: rates.etc.cad,
      ETC_AUD: rates.etc.aud,
      ETC_TRY: rates.etc.try,
      ETC_BRL: rates.etc.brl,
      ETC_CNY: rates.etc.cny,
      ETC_INR: rates.etc.inr,
      ETC_RUB: rates.etc.rub,
      ETC_BTC: rates.etc.btc,
      ETC_ETH: rates.etc.eth,
      ETC_BNB: rates.etc.bnb,
    },

    // 24h changes
    changes: {
      USD: rates.etc_24h_change.usd,
      EUR: rates.etc_24h_change.eur,
      BTC: rates.etc_24h_change.btc,
    },

    // Fiat rates (to USD)
    fiatRates: rates.fiat_to_usd,

    // Metadata
    source: rates.source,
    lastUpdated: rates.lastUpdated,
    cacheAgeMinutes: cacheAge,
    nextRefresh: new Date(
      new Date(rates.lastUpdated).getTime() + CACHE_DURATION_MS
    ).toISOString(),
  }
}

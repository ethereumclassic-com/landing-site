// Market data types and configuration

export interface PriceSource {
  id: string
  name: string
  logo?: string
  website: string
  apiEndpoint?: string
  description: string
  type: 'aggregator' | 'exchange' | 'dex'
  trusted: boolean
}

export interface MarketPair {
  id: string
  base: string
  quote: string
  displayName: string
  popular: boolean
}

export interface MarketStat {
  label: string
  value: string
  change?: string
  changeDirection?: 'up' | 'down' | 'neutral'
  tooltip?: string
}

// Price data sources
export const priceSources: PriceSource[] = [
  {
    id: 'coingecko',
    name: 'CoinGecko',
    website: 'https://www.coingecko.com/en/coins/ethereum-classic',
    apiEndpoint: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum-classic&vs_currencies=usd,btc,eth&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true',
    description: 'Leading cryptocurrency data aggregator with comprehensive market data',
    type: 'aggregator',
    trusted: true,
  },
  {
    id: 'coinmarketcap',
    name: 'CoinMarketCap',
    website: 'https://coinmarketcap.com/currencies/ethereum-classic/',
    description: 'Popular crypto market cap rankings and price tracking',
    type: 'aggregator',
    trusted: true,
  },
  {
    id: 'binance',
    name: 'Binance',
    website: 'https://www.binance.com/en/trade/ETC_USDT',
    description: 'World\'s largest cryptocurrency exchange by trading volume',
    type: 'exchange',
    trusted: true,
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    website: 'https://www.coinbase.com/price/ethereum-classic',
    description: 'US-based regulated cryptocurrency exchange',
    type: 'exchange',
    trusted: true,
  },
  {
    id: 'kraken',
    name: 'Kraken',
    website: 'https://www.kraken.com/prices/etc-ethereum-classic-price-chart',
    description: 'Established cryptocurrency exchange with advanced trading features',
    type: 'exchange',
    trusted: true,
  },
  {
    id: 'etcswap',
    name: 'ETCswap',
    website: 'https://etcswap.org',
    description: 'Native decentralized exchange on Ethereum Classic',
    type: 'dex',
    trusted: true,
  },
]

// Available trading pairs
export const marketPairs: MarketPair[] = [
  // Stablecoins
  { id: 'etc-usd', base: 'ETC', quote: 'USD', displayName: 'ETC/USD', popular: true },
  { id: 'etc-usdt', base: 'ETC', quote: 'USDT', displayName: 'ETC/USDT', popular: true },
  { id: 'etc-usdc', base: 'ETC', quote: 'USDC', displayName: 'ETC/USDC', popular: true },
  { id: 'etc-busd', base: 'ETC', quote: 'BUSD', displayName: 'ETC/BUSD', popular: false },
  { id: 'etc-dai', base: 'ETC', quote: 'DAI', displayName: 'ETC/DAI', popular: false },
  // Crypto pairs
  { id: 'etc-btc', base: 'ETC', quote: 'BTC', displayName: 'ETC/BTC', popular: true },
  { id: 'etc-eth', base: 'ETC', quote: 'ETH', displayName: 'ETC/ETH', popular: true },
  { id: 'etc-bnb', base: 'ETC', quote: 'BNB', displayName: 'ETC/BNB', popular: false },
  // Fiat pairs
  { id: 'etc-eur', base: 'ETC', quote: 'EUR', displayName: 'ETC/EUR', popular: false },
  { id: 'etc-gbp', base: 'ETC', quote: 'GBP', displayName: 'ETC/GBP', popular: false },
  { id: 'etc-krw', base: 'ETC', quote: 'KRW', displayName: 'ETC/KRW', popular: false },
  { id: 'etc-jpy', base: 'ETC', quote: 'JPY', displayName: 'ETC/JPY', popular: false },
  { id: 'etc-cad', base: 'ETC', quote: 'CAD', displayName: 'ETC/CAD', popular: false },
  { id: 'etc-aud', base: 'ETC', quote: 'AUD', displayName: 'ETC/AUD', popular: false },
  { id: 'etc-try', base: 'ETC', quote: 'TRY', displayName: 'ETC/TRY', popular: false },
  { id: 'etc-brl', base: 'ETC', quote: 'BRL', displayName: 'ETC/BRL', popular: false },
]

// Currency metadata for converter
export interface CurrencyInfo {
  code: string
  name: string
  symbol: string
  type: 'fiat' | 'crypto' | 'stablecoin'
  decimals: number
}

export const currencies: CurrencyInfo[] = [
  // Crypto
  { code: 'ETC', name: 'Ethereum Classic', symbol: 'ETC', type: 'crypto', decimals: 8 },
  { code: 'BTC', name: 'Bitcoin', symbol: 'BTC', type: 'crypto', decimals: 8 },
  { code: 'ETH', name: 'Ethereum', symbol: 'ETH', type: 'crypto', decimals: 8 },
  { code: 'BNB', name: 'BNB', symbol: 'BNB', type: 'crypto', decimals: 8 },
  // Stablecoins
  { code: 'USDT', name: 'Tether', symbol: 'USDT', type: 'stablecoin', decimals: 2 },
  { code: 'USDC', name: 'USD Coin', symbol: 'USDC', type: 'stablecoin', decimals: 2 },
  { code: 'BUSD', name: 'Binance USD', symbol: 'BUSD', type: 'stablecoin', decimals: 2 },
  { code: 'DAI', name: 'Dai', symbol: 'DAI', type: 'stablecoin', decimals: 2 },
  // Fiat
  { code: 'USD', name: 'US Dollar', symbol: '$', type: 'fiat', decimals: 2 },
  { code: 'EUR', name: 'Euro', symbol: '\u20AC', type: 'fiat', decimals: 2 },
  { code: 'GBP', name: 'British Pound', symbol: '\u00A3', type: 'fiat', decimals: 2 },
  { code: 'JPY', name: 'Japanese Yen', symbol: '\u00A5', type: 'fiat', decimals: 0 },
  { code: 'KRW', name: 'South Korean Won', symbol: '\u20A9', type: 'fiat', decimals: 0 },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', type: 'fiat', decimals: 2 },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', type: 'fiat', decimals: 2 },
  { code: 'TRY', name: 'Turkish Lira', symbol: '\u20BA', type: 'fiat', decimals: 2 },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', type: 'fiat', decimals: 2 },
]

// Sample exchange rates (in production, fetch from API)
export const sampleRates: Record<string, number> = {
  'ETC-USD': 18.42,
  'ETC-EUR': 16.95,
  'ETC-GBP': 14.52,
  'ETC-JPY': 2765,
  'ETC-KRW': 24150,
  'ETC-CAD': 25.18,
  'ETC-AUD': 28.35,
  'ETC-TRY': 597.50,
  'ETC-BRL': 92.10,
  'ETC-BTC': 0.00018,
  'ETC-ETH': 0.0056,
  'ETC-BNB': 0.030,
  'ETC-USDT': 18.42,
  'ETC-USDC': 18.42,
  'ETC-BUSD': 18.42,
  'ETC-DAI': 18.42,
}

// Sample market stats (these would be fetched from API in production)
export const sampleMarketStats: MarketStat[] = [
  {
    label: 'Price',
    value: '$18.42',
    change: '+2.34%',
    changeDirection: 'up',
  },
  {
    label: 'Market Cap',
    value: '$2.71B',
    change: '+2.15%',
    changeDirection: 'up',
    tooltip: 'Circulating supply × current price',
  },
  {
    label: '24h Volume',
    value: '$89.2M',
    change: '-5.12%',
    changeDirection: 'down',
  },
  {
    label: 'Circulating Supply',
    value: '147.1M ETC',
    tooltip: 'Total ETC in circulation',
  },
  {
    label: 'All-Time High',
    value: '$176.16',
    tooltip: 'May 6, 2021',
  },
  {
    label: 'All-Time Low',
    value: '$0.45',
    tooltip: 'July 25, 2016',
  },
]

// Historical price milestones
export interface PriceMilestone {
  date: string
  price: string
  event: string
}

export const priceMilestones: PriceMilestone[] = [
  { date: 'July 2016', price: '$0.75', event: 'ETC Genesis - DAO fork creates Ethereum Classic' },
  { date: 'March 2017', price: '$3.00', event: 'First major rally as crypto market heats up' },
  { date: 'January 2018', price: '$43.00', event: 'Peak during 2017-2018 bull market' },
  { date: 'December 2018', price: '$3.50', event: 'Bear market bottom' },
  { date: 'May 2021', price: '$176.16', event: 'All-time high during 2021 bull run' },
  { date: 'November 2022', price: '$15.00', event: 'Post-ETH merge, increased mining activity' },
]

// Market resources
export interface MarketResource {
  id: string
  title: string
  description: string
  url: string
  type: 'price' | 'data' | 'analysis' | 'tool'
}

export const marketResources: MarketResource[] = [
  {
    id: 'coingecko-etc',
    title: 'CoinGecko - ETC',
    description: 'Live price, charts, market cap, and historical data',
    url: 'https://www.coingecko.com/en/coins/ethereum-classic',
    type: 'price',
  },
  {
    id: 'cmc-etc',
    title: 'CoinMarketCap - ETC',
    description: 'Market rankings, price tracking, and supply data',
    url: 'https://coinmarketcap.com/currencies/ethereum-classic/',
    type: 'price',
  },
  {
    id: 'tradingview-etc',
    title: 'TradingView - ETCUSD',
    description: 'Advanced charting and technical analysis tools',
    url: 'https://www.tradingview.com/symbols/ETCUSD/',
    type: 'analysis',
  },
  {
    id: 'messari-etc',
    title: 'Messari - ETC',
    description: 'In-depth research and fundamental analysis',
    url: 'https://messari.io/asset/ethereum-classic',
    type: 'data',
  },
  {
    id: 'defillama-etc',
    title: 'DefiLlama - ETC',
    description: 'DeFi TVL and protocol analytics',
    url: 'https://defillama.com/chain/EthereumClassic',
    type: 'data',
  },
]

// Helper functions
export function getPopularPairs(): MarketPair[] {
  return marketPairs.filter((pair) => pair.popular)
}

export function getPairById(id: string): MarketPair | undefined {
  return marketPairs.find((pair) => pair.id === id)
}

export function getTrustedSources(): PriceSource[] {
  return priceSources.filter((source) => source.trusted)
}

export function getSourcesByType(type: PriceSource['type']): PriceSource[] {
  return priceSources.filter((source) => source.type === type)
}

export function getResourcesByType(type: MarketResource['type']): MarketResource[] {
  return marketResources.filter((resource) => resource.type === type)
}

export function getCurrencyByCode(code: string): CurrencyInfo | undefined {
  return currencies.find((c) => c.code === code)
}

export function getCurrenciesByType(type: CurrencyInfo['type']): CurrencyInfo[] {
  return currencies.filter((c) => c.type === type)
}

export function getRate(from: string, to: string): number | undefined {
  // Direct rate
  const directKey = `${from}-${to}`
  if (sampleRates[directKey]) return sampleRates[directKey]

  // Inverse rate
  const inverseKey = `${to}-${from}`
  if (sampleRates[inverseKey]) return 1 / sampleRates[inverseKey]

  // Cross rate through USD
  if (from !== 'USD' && to !== 'USD') {
    const fromUsd = sampleRates[`${from}-USD`] || (sampleRates[`USD-${from}`] ? 1 / sampleRates[`USD-${from}`] : undefined)
    const toUsd = sampleRates[`${to}-USD`] || (sampleRates[`USD-${to}`] ? 1 / sampleRates[`USD-${to}`] : undefined)
    if (fromUsd && toUsd) return fromUsd / toUsd
  }

  // ETC cross rate
  if (from !== 'ETC' && to !== 'ETC') {
    const fromEtc = getRate(from, 'ETC')
    const toEtc = getRate('ETC', to)
    if (fromEtc && toEtc) return fromEtc * toEtc
  }

  return undefined
}

export function formatCurrency(amount: number, currency: CurrencyInfo): string {
  const absAmount = Math.abs(amount)
  const formatted = absAmount.toLocaleString('en-US', {
    minimumFractionDigits: currency.decimals,
    maximumFractionDigits: currency.decimals,
  })

  if (currency.type === 'fiat') {
    return `${currency.symbol}${formatted}`
  }
  return `${formatted} ${currency.symbol}`
}

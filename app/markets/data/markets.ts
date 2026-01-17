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
  { id: 'etc-usd', base: 'ETC', quote: 'USD', displayName: 'ETC/USD', popular: true },
  { id: 'etc-usdt', base: 'ETC', quote: 'USDT', displayName: 'ETC/USDT', popular: true },
  { id: 'etc-btc', base: 'ETC', quote: 'BTC', displayName: 'ETC/BTC', popular: true },
  { id: 'etc-eth', base: 'ETC', quote: 'ETH', displayName: 'ETC/ETH', popular: true },
  { id: 'etc-eur', base: 'ETC', quote: 'EUR', displayName: 'ETC/EUR', popular: false },
  { id: 'etc-gbp', base: 'ETC', quote: 'GBP', displayName: 'ETC/GBP', popular: false },
  { id: 'etc-krw', base: 'ETC', quote: 'KRW', displayName: 'ETC/KRW', popular: false },
  { id: 'etc-jpy', base: 'ETC', quote: 'JPY', displayName: 'ETC/JPY', popular: false },
]

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

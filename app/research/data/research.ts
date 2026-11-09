// Research data for Ethereum Classic: the ecosystem overview and the data sources
// the research pages cite.

import { executionPlugins, explorerAPIs, nodeClients } from '@/app/build/data/build'
import { miningHardware } from '@/app/mining/data/mining'
import { POOL_DIRECTORY } from '@/app/mining/data/pools'
import { ETC_RPC_ENDPOINTS } from '@/lib/rpc-endpoints'

export interface EcosystemStat {
  category: string
  /** The directory the figures are counted from. */
  href: string
  stats: {
    label: string
    value: number
  }[]
}

/**
 * Counted from the directories each card links to, so a figure cannot drift
 * from the page that lists what it counts. A figure with no such source on this
 * site, such as value locked or a follower count, is not shown.
 */
export const ecosystemStats: EcosystemStat[] = [
  {
    category: 'Infrastructure',
    href: '/build',
    stats: [
      { label: 'Node clients', value: nodeClients.length },
      { label: 'Planned execution plugins', value: executionPlugins.filter((plugin) => plugin.status === 'planned').length },
      { label: 'Public RPC endpoints', value: ETC_RPC_ENDPOINTS.length },
      { label: 'Block explorers', value: explorerAPIs.filter((explorer) => explorer.network !== 'testnet').length },
    ],
  },
  {
    category: 'Mining',
    href: '/mining',
    stats: [
      { label: 'Mining pools', value: POOL_DIRECTORY.length },
      { label: 'ASIC models', value: miningHardware.filter((hardware) => hardware.type === 'ASIC').length },
      { label: 'GPU models', value: miningHardware.filter((hardware) => hardware.type === 'GPU').length },
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
    description: 'The main ETC block explorer, with full on-chain data',
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

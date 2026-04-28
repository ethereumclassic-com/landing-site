/**
 * Blockscout API Integration for Ethereum Classic
 * Provides live network data from https://etc.blockscout.com
 *
 * API Docs: https://etc.blockscout.com/api-docs
 *
 * Cache Strategy: 24-hour file-based cache to minimize API calls
 * and avoid rate limiting from Blockscout
 */

import * as fs from 'fs'
import * as path from 'path'

const BLOCKSCOUT_API_BASE = 'https://etc.blockscout.com/api/v2'

// Cache duration: 10 minutes — fresh enough for countdown accuracy, good RPC citizenship
const CACHE_DURATION_MS = 10 * 60 * 1000

// Cache file path - stored in .next/cache for persistence
const CACHE_DIR = path.join(process.cwd(), '.next', 'cache', 'blockscout')
const CACHE_FILE = path.join(CACHE_DIR, 'network-stats.json')

// In-memory cache for faster reads (backed by file)
interface CacheEntry<T> {
  data: T
  timestamp: number
}

let memoryCache: CacheEntry<unknown> | null = null

/**
 * Ensure cache directory exists
 */
function ensureCacheDir(): void {
  try {
    if (!fs.existsSync(CACHE_DIR)) {
      fs.mkdirSync(CACHE_DIR, { recursive: true })
    }
  } catch {
    // Ignore errors - fallback to memory-only cache
  }
}

/**
 * Read cache from file system
 */
function readFileCache<T>(): CacheEntry<T> | null {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const content = fs.readFileSync(CACHE_FILE, 'utf-8')
      const entry = JSON.parse(content) as CacheEntry<T>

      // Check if cache is still valid (24 hours)
      if (Date.now() - entry.timestamp <= CACHE_DURATION_MS) {
        return entry
      }
    }
  } catch {
    // File read error - cache is invalid
  }
  return null
}

/**
 * Write cache to file system
 */
function writeFileCache<T>(data: T): void {
  try {
    ensureCacheDir()
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
    }
    fs.writeFileSync(CACHE_FILE, JSON.stringify(entry, null, 2))
    memoryCache = entry
  } catch {
    // Write error - continue with memory-only cache
    memoryCache = { data, timestamp: Date.now() }
  }
}

/**
 * Get cached data (memory first, then file)
 */
function getCached<T>(): T | null {
  // Check memory cache first
  if (memoryCache && Date.now() - memoryCache.timestamp <= CACHE_DURATION_MS) {
    return memoryCache.data as T
  }

  // Try file cache
  const fileCache = readFileCache<T>()
  if (fileCache) {
    memoryCache = fileCache // Load into memory for faster subsequent reads
    return fileCache.data
  }

  return null
}

/**
 * Set cache (both memory and file)
 */
function setCache<T>(data: T): void {
  writeFileCache(data)
}

// API Response Types
export interface BlockScoutStats {
  average_block_time: number // in milliseconds
  coin_price: string
  coin_price_change_percentage: number
  gas_prices: {
    slow: number
    average: number
    fast: number
  }
  gas_used_today: string
  market_cap: string
  network_utilization_percentage: number
  static_gas_price: string | null
  total_addresses: string
  total_blocks: string
  total_gas_used: string
  total_transactions: string
  transactions_today: string
}

export interface BlockScoutBlock {
  base_fee_per_gas: string
  burnt_fees: string
  gas_limit: string
  gas_target_percentage: number
  gas_used: string
  gas_used_percentage: number
  hash: string
  height: number
  miner: {
    hash: string
    name?: string
  }
  nonce: string
  parent_hash: string
  priority_fee: string
  rewards: Array<{
    reward: string
    type: string
  }>
  size: number
  timestamp: string
  total_difficulty: string
  tx_count: number
  tx_fees: string
  type: string
  uncles_hashes: string[]
}

export interface NetworkStats {
  // Price data
  price: number
  priceChange24h: number
  marketCap: number

  // Network data
  totalBlocks: number
  totalTransactions: number
  totalAddresses: number
  avgBlockTime: number // in seconds
  networkUtilization: number

  // Gas prices (in Gwei)
  gasPrice: {
    slow: number
    average: number
    fast: number
  }

  // Mining data (calculated from recent blocks)
  avgBlockReward: number // in ETC

  // Metadata
  lastUpdated: string
}

export interface RecentBlock {
  height: number
  hash: string
  timestamp: string
  txCount: number
  miner: string
  reward: number // in ETC
  gasUsed: number
  gasLimit: number
}

/**
 * Fetch network statistics from Blockscout
 */
export async function fetchNetworkStats(): Promise<NetworkStats | null> {
  const cached = getCached<NetworkStats>()
  if (cached) return cached

  try {
    const [statsResponse, blocksResponse] = await Promise.all([
      fetch(`${BLOCKSCOUT_API_BASE}/stats`, { next: { revalidate: 300 } }),
      fetch(`${BLOCKSCOUT_API_BASE}/blocks?type=block`, { next: { revalidate: 300 } }),
    ])

    if (!statsResponse.ok || !blocksResponse.ok) {
      console.error('Blockscout API error:', statsResponse.status, blocksResponse.status)
      return null
    }

    const stats: BlockScoutStats = await statsResponse.json()
    const blocksData = await blocksResponse.json()
    const blocks: BlockScoutBlock[] = blocksData.items || []

    // Calculate average block reward from recent blocks
    let totalReward = 0
    let rewardCount = 0
    for (const block of blocks.slice(0, 20)) {
      if (block.rewards && block.rewards.length > 0) {
        const blockReward = block.rewards.reduce((sum, r) => {
          // Rewards are in wei, convert to ETC
          return sum + parseFloat(r.reward) / 1e18
        }, 0)
        totalReward += blockReward
        rewardCount++
      }
    }
    const avgBlockReward = rewardCount > 0 ? totalReward / rewardCount : 2.048

    const networkStats: NetworkStats = {
      price: parseFloat(stats.coin_price) || 0,
      priceChange24h: stats.coin_price_change_percentage || 0,
      marketCap: parseFloat(stats.market_cap) || 0,

      totalBlocks: parseInt(stats.total_blocks) || 0,
      totalTransactions: parseInt(stats.total_transactions) || 0,
      totalAddresses: parseInt(stats.total_addresses) || 0,
      avgBlockTime: (stats.average_block_time || 13500) / 1000, // Convert ms to seconds
      networkUtilization: stats.network_utilization_percentage || 0,

      gasPrice: {
        slow: stats.gas_prices?.slow || 1,
        average: stats.gas_prices?.average || 1.5,
        fast: stats.gas_prices?.fast || 2,
      },

      avgBlockReward,

      lastUpdated: new Date().toISOString(),
    }

    setCache(networkStats)
    return networkStats
  } catch (error) {
    console.error('Failed to fetch Blockscout stats:', error)
    return null
  }
}

/**
 * Fetch recent blocks from Blockscout
 */
export async function fetchRecentBlocks(limit: number = 10): Promise<RecentBlock[]> {
  try {
    const response = await fetch(`${BLOCKSCOUT_API_BASE}/blocks?type=block`, {
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      console.error('Blockscout blocks API error:', response.status)
      return []
    }

    const data = await response.json()
    const blocks: BlockScoutBlock[] = data.items || []

    const recentBlocks: RecentBlock[] = blocks.slice(0, limit).map((block) => {
      // Calculate total reward in ETC
      const reward = block.rewards?.reduce((sum, r) => {
        return sum + parseFloat(r.reward) / 1e18
      }, 0) || 0

      return {
        height: block.height,
        hash: block.hash,
        timestamp: block.timestamp,
        txCount: block.tx_count,
        miner: block.miner?.hash || 'Unknown',
        reward,
        gasUsed: parseInt(block.gas_used) || 0,
        gasLimit: parseInt(block.gas_limit) || 0,
      }
    })

    return recentBlocks
  } catch (error) {
    console.error('Failed to fetch Blockscout blocks:', error)
    return []
  }
}

/**
 * Format network stats for display
 */
export function formatNetworkStats(stats: NetworkStats) {
  return {
    price: `$${stats.price.toFixed(2)}`,
    priceChange: `${stats.priceChange24h >= 0 ? '+' : ''}${stats.priceChange24h.toFixed(2)}%`,
    marketCap: formatLargeNumber(stats.marketCap),
    blockHeight: stats.totalBlocks.toLocaleString(),
    totalTransactions: formatLargeNumber(stats.totalTransactions),
    avgBlockTime: `${stats.avgBlockTime.toFixed(1)}s`,
    blockReward: `${stats.avgBlockReward.toFixed(2)} ETC`,
    gasPrice: `${stats.gasPrice.average.toFixed(2)} Gwei`,
  }
}

function formatLargeNumber(num: number): string {
  if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
  if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`
  return num.toFixed(2)
}

/**
 * Get fallback stats when API is unavailable
 */
export function getFallbackStats(): NetworkStats {
  // Fallback values based on Jan 2026 network data
  // These are used when Blockscout API is unavailable
  return {
    price: 12.75,
    priceChange24h: -0.70,
    marketCap: 1980000000,
    totalBlocks: 23820000,
    totalTransactions: 142000000,
    totalAddresses: 553500000,
    avgBlockTime: 13.0, // Block time varies 11-14s, using reasonable middle
    networkUtilization: 0.42,
    gasPrice: {
      slow: 1.56,
      average: 1.89,
      fast: 5.21,
    },
    avgBlockReward: 2.048,
    lastUpdated: new Date().toISOString(),
  }
}

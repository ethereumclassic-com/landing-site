/**
 * Ethereum Classic RPC Integration
 * Provides network metrics from public RPC endpoints
 *
 * Used for mining-specific data like difficulty and hashrate
 * that aren't available in Blockscout API
 */

import * as fs from 'fs'
import * as path from 'path'

// Public ETC RPC endpoints (fallback chain)
const RPC_ENDPOINTS = [
  'https://etc.rivet.link',
  'https://etc.etcdesktop.com',
  'https://besu-at.etc-network.info',
]

// Cache duration: 24 hours to avoid rate limiting
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000

// Cache file path
const CACHE_DIR = path.join(process.cwd(), '.next', 'cache', 'etc-rpc')
const CACHE_FILE = path.join(CACHE_DIR, 'mining-stats.json')

interface CacheEntry<T> {
  data: T
  timestamp: number
}

let memoryCache: CacheEntry<MiningNetworkStats> | null = null

function ensureCacheDir(): void {
  try {
    if (!fs.existsSync(CACHE_DIR)) {
      fs.mkdirSync(CACHE_DIR, { recursive: true })
    }
  } catch {
    // Ignore errors
  }
}

function readFileCache(): CacheEntry<MiningNetworkStats> | null {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const content = fs.readFileSync(CACHE_FILE, 'utf-8')
      const entry = JSON.parse(content) as CacheEntry<MiningNetworkStats>
      if (Date.now() - entry.timestamp <= CACHE_DURATION_MS) {
        return entry
      }
    }
  } catch {
    // Cache invalid
  }
  return null
}

function writeFileCache(data: MiningNetworkStats): void {
  try {
    ensureCacheDir()
    const entry: CacheEntry<MiningNetworkStats> = {
      data,
      timestamp: Date.now(),
    }
    fs.writeFileSync(CACHE_FILE, JSON.stringify(entry, null, 2))
    memoryCache = entry
  } catch {
    memoryCache = { data, timestamp: Date.now() }
  }
}

// RPC Response types
interface RPCResponse<T> {
  jsonrpc: string
  id: number
  result?: T
  error?: {
    code: number
    message: string
  }
}

interface BlockData {
  number: string // hex
  difficulty: string // hex
  timestamp: string // hex
  hash: string
  miner: string
  gasUsed: string // hex
  gasLimit: string // hex
  size: string // hex
  transactions: string[] | unknown[]
}

export interface MiningNetworkStats {
  // Current values
  difficulty: number // in H (raw)
  difficultyFormatted: string // e.g., "2.45 PH"
  hashrate: number // in H/s (raw)
  hashrateFormatted: string // e.g., "169.12 TH/s"
  blockHeight: number
  blockTime: number // in seconds
  blockTimeFormatted: string

  // Recent block info
  latestBlock: {
    number: number
    hash: string
    miner: string
    timestamp: string
    txCount: number
    gasUsed: number
    gasLimit: number
  }

  // Metadata
  source: 'rpc' | 'fallback'
  lastUpdated: string
  cacheAgeMinutes: number
}

/**
 * Make RPC call with fallback to multiple endpoints
 */
async function rpcCall<T>(method: string, params: unknown[] = []): Promise<T | null> {
  for (const endpoint of RPC_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method,
          params,
          id: 1,
        }),
      })

      if (!response.ok) continue

      const data: RPCResponse<T> = await response.json()
      if (data.result !== undefined) {
        return data.result
      }
    } catch {
      // Try next endpoint
      continue
    }
  }
  return null
}

/**
 * Convert hex string to number
 */
function hexToNumber(hex: string): number {
  return parseInt(hex, 16)
}

/**
 * Format large numbers for display
 */
function formatHashrate(hashesPerSecond: number): string {
  if (hashesPerSecond >= 1e15) {
    return `${(hashesPerSecond / 1e15).toFixed(2)} PH/s`
  }
  if (hashesPerSecond >= 1e12) {
    return `${(hashesPerSecond / 1e12).toFixed(2)} TH/s`
  }
  if (hashesPerSecond >= 1e9) {
    return `${(hashesPerSecond / 1e9).toFixed(2)} GH/s`
  }
  if (hashesPerSecond >= 1e6) {
    return `${(hashesPerSecond / 1e6).toFixed(2)} MH/s`
  }
  return `${hashesPerSecond.toFixed(0)} H/s`
}

function formatDifficulty(difficulty: number): string {
  if (difficulty >= 1e15) {
    return `${(difficulty / 1e15).toFixed(2)} PH`
  }
  if (difficulty >= 1e12) {
    return `${(difficulty / 1e12).toFixed(2)} TH`
  }
  if (difficulty >= 1e9) {
    return `${(difficulty / 1e9).toFixed(2)} GH`
  }
  return `${difficulty.toFixed(0)} H`
}

/**
 * Fetch mining network stats from RPC
 * Calculates hashrate from difficulty and block time
 */
export async function fetchMiningNetworkStats(): Promise<MiningNetworkStats> {
  // Check cache first
  if (memoryCache && Date.now() - memoryCache.timestamp <= CACHE_DURATION_MS) {
    return {
      ...memoryCache.data,
      cacheAgeMinutes: Math.round((Date.now() - memoryCache.timestamp) / 1000 / 60),
    }
  }

  const fileCache = readFileCache()
  if (fileCache) {
    memoryCache = fileCache
    return {
      ...fileCache.data,
      cacheAgeMinutes: Math.round((Date.now() - fileCache.timestamp) / 1000 / 60),
    }
  }

  try {
    // Fetch latest block
    const latestBlock = await rpcCall<BlockData>('eth_getBlockByNumber', ['latest', false])

    if (!latestBlock) {
      return getFallbackMiningStats()
    }

    // Fetch a block from ~100 blocks ago to calculate average block time
    const currentBlockNum = hexToNumber(latestBlock.number)
    const oldBlockHex = `0x${(currentBlockNum - 100).toString(16)}`
    const oldBlock = await rpcCall<BlockData>('eth_getBlockByNumber', [oldBlockHex, false])

    // Calculate block time
    let blockTime = 14.5 // default
    if (oldBlock) {
      const currentTimestamp = hexToNumber(latestBlock.timestamp)
      const oldTimestamp = hexToNumber(oldBlock.timestamp)
      const timeDiff = currentTimestamp - oldTimestamp
      blockTime = timeDiff / 100 // average over 100 blocks
    }

    // Get difficulty and calculate hashrate
    const difficulty = hexToNumber(latestBlock.difficulty)
    // Hashrate = Difficulty / Block Time
    const hashrate = difficulty / blockTime

    const stats: MiningNetworkStats = {
      difficulty,
      difficultyFormatted: formatDifficulty(difficulty),
      hashrate,
      hashrateFormatted: formatHashrate(hashrate),
      blockHeight: currentBlockNum,
      blockTime,
      blockTimeFormatted: `${blockTime.toFixed(1)}s`,

      latestBlock: {
        number: currentBlockNum,
        hash: latestBlock.hash,
        miner: latestBlock.miner,
        timestamp: new Date(hexToNumber(latestBlock.timestamp) * 1000).toISOString(),
        txCount: Array.isArray(latestBlock.transactions) ? latestBlock.transactions.length : 0,
        gasUsed: hexToNumber(latestBlock.gasUsed),
        gasLimit: hexToNumber(latestBlock.gasLimit),
      },

      source: 'rpc',
      lastUpdated: new Date().toISOString(),
      cacheAgeMinutes: 0,
    }

    writeFileCache(stats)
    return stats
  } catch (error) {
    console.error('Failed to fetch mining stats from RPC:', error)
    return getFallbackMiningStats()
  }
}

/**
 * Get fallback stats when RPC is unavailable
 * Fallback values based on Jan 2026 network data
 */
export function getFallbackMiningStats(): MiningNetworkStats {
  return {
    difficulty: 2470000000000000,
    difficultyFormatted: '2.47 PH',
    hashrate: 174000000000000,
    hashrateFormatted: '174.00 TH/s',
    blockHeight: 23820000,
    blockTime: 13.5,
    blockTimeFormatted: '13.5s',

    latestBlock: {
      number: 23820000,
      hash: '0x...',
      miner: '0x...',
      timestamp: new Date().toISOString(),
      txCount: 0,
      gasUsed: 0,
      gasLimit: 8000000,
    },

    source: 'fallback',
    lastUpdated: new Date().toISOString(),
    cacheAgeMinutes: 0,
  }
}

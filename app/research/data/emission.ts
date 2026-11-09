import { NOMINAL_BLOCK_TIME_SECONDS } from '@/lib/chain'
// ETC Emission Schedule based on ECIP-1017
// https://ecips.ethereumclassic.org/ECIPs/ecip-1017
//
// Key Parameters:
// - Era length: 5,000,000 blocks
// - Starting reward: 5 ETC (Era 1)
// - Reduction: 20% per era (new reward = 80% of previous)
// - Theoretical max supply: ~210.7M ETC (worst case with max uncles)

export const EMISSION_CONSTANTS = {
  // Era configuration
  ERA_LENGTH: 5_000_000,
  STARTING_REWARD: 5,
  REDUCTION_RATE: 0.2, // 20% reduction per era
  RETENTION_RATE: 0.8, // 80% retained per era

  // Uncle reward parameters (approximate)
  AVG_UNCLE_RATE: 0.05, // ~5% of blocks include uncles
  UNCLE_REWARD_FRACTION: 0.03125, // 1/32 of block reward for including uncle

  // Supply bounds
  MAX_SUPPLY_ESTIMATE: 210_700_000, // Theoretical max with all uncles
  REALISTIC_MAX_SUPPLY: 199_000_000, // More realistic estimate

  // Genesis and pre-mine
  GENESIS_SUPPLY: 72_009_990, // ETC at genesis (from ETH fork)

  // Block time for time estimates
  AVG_BLOCK_TIME_SECONDS: NOMINAL_BLOCK_TIME_SECONDS,
}

export interface Era {
  number: number
  startBlock: number
  endBlock: number
  blockReward: number
  eraSupply: number // Total ETC emitted during this era
  cumulativeSupply: number // Total supply at end of era (excluding genesis)
  totalSupply: number // Including genesis supply
  reductionFromPrevious: string // e.g., "20%" or "N/A" for era 1
}

export interface SupplyStats {
  currentBlock: number
  currentEra: number
  currentBlockReward: number
  blocksInCurrentEra: number
  blocksUntilNextEra: number
  percentThroughEra: number
  totalEmitted: number
  totalSupply: number
  percentOfMaxSupply: number
  nextEraReward: number
  timeUntilNextEra: {
    days: number
    hours: number
    minutes: number
    totalSeconds: number
  }
}

/**
 * Calculate block reward for a given era
 */
export function getBlockRewardForEra(era: number): number {
  if (era < 1) return 0
  const raw = EMISSION_CONSTANTS.STARTING_REWARD * Math.pow(EMISSION_CONSTANTS.RETENTION_RATE, era - 1)
  // Round to 10 decimal places to strip binary float noise (e.g. 1.6384000000000003 → 1.6384)
  return parseFloat(raw.toFixed(10))
}

/**
 * Get era number for a given block
 */
export function getEraForBlock(block: number): number {
  if (block <= 0) return 0
  return Math.floor((block - 1) / EMISSION_CONSTANTS.ERA_LENGTH) + 1
}

/**
 * Block at which the given era ends and the next fifthing lands.
 * Era N ends at N * ERA_LENGTH — do not reimplement this as
 * nextEra * ERA_LENGTH, and do not mix it with a 0-indexed era.
 */
export function getEraEndBlock(era: number): number {
  return era * EMISSION_CONSTANTS.ERA_LENGTH
}

/**
 * Fallback reference height, used only where no live block height is available
 * (module-scope chart data evaluated at import time). Anything holding a live
 * height should call getEraForBlock with it instead of reading CURRENT_ERA.
 *
 * This is the single value to bump when a fifthing lands.
 */
export const CURRENT_ERA_REFERENCE_BLOCK = 25_097_921

/** Era containing CURRENT_ERA_REFERENCE_BLOCK. Era 6 as of block 25,000,000. */
export const CURRENT_ERA = getEraForBlock(CURRENT_ERA_REFERENCE_BLOCK)

/**
 * Calculate total supply emitted during an era (block rewards only)
 */
export function getEraEmission(era: number): number {
  const reward = getBlockRewardForEra(era)
  return reward * EMISSION_CONSTANTS.ERA_LENGTH
}

/**
 * Calculate cumulative supply emitted up to end of given era
 */
export function getCumulativeEmission(era: number): number {
  let total = 0
  for (let e = 1; e <= era; e++) {
    total += getEraEmission(e)
  }
  return total
}

/**
 * Generate era data for display
 */
export function generateEraSchedule(numberOfEras: number = 20): Era[] {
  const eras: Era[] = []
  let cumulativeSupply = 0

  for (let i = 1; i <= numberOfEras; i++) {
    const blockReward = getBlockRewardForEra(i)
    const eraSupply = getEraEmission(i)
    cumulativeSupply += eraSupply

    eras.push({
      number: i,
      startBlock: (i - 1) * EMISSION_CONSTANTS.ERA_LENGTH + 1,
      endBlock: i * EMISSION_CONSTANTS.ERA_LENGTH,
      blockReward: blockReward,
      eraSupply: eraSupply,
      cumulativeSupply: cumulativeSupply,
      totalSupply: cumulativeSupply + EMISSION_CONSTANTS.GENESIS_SUPPLY,
      reductionFromPrevious: i === 1 ? 'N/A' : '20%',
    })
  }

  return eras
}

/**
 * Calculate current supply stats based on block height
 */
export function calculateSupplyStats(
  currentBlock: number,
  /**
   * Seconds per block used for the time-to-next-era estimate. Pass the live
   * figure (Blockscout's average_block_time) wherever one is available — the
   * nominal 13 runs ~6% fast against the chain's actual rate, which is weeks
   * of error over a full era.
   */
  blockTimeSeconds: number = EMISSION_CONSTANTS.AVG_BLOCK_TIME_SECONDS,
): SupplyStats {
  const currentEra = getEraForBlock(currentBlock)
  const currentBlockReward = getBlockRewardForEra(currentEra)
  const nextEraReward = getBlockRewardForEra(currentEra + 1)

  // Blocks in current era
  const eraStartBlock = (currentEra - 1) * EMISSION_CONSTANTS.ERA_LENGTH + 1
  const eraEndBlock = currentEra * EMISSION_CONSTANTS.ERA_LENGTH
  const blocksInCurrentEra = currentBlock - eraStartBlock + 1
  const blocksUntilNextEra = eraEndBlock - currentBlock
  const percentThroughEra = (blocksInCurrentEra / EMISSION_CONSTANTS.ERA_LENGTH) * 100

  // Calculate total emitted
  const previousErasEmission = getCumulativeEmission(currentEra - 1)
  const currentEraEmission = blocksInCurrentEra * currentBlockReward
  const totalEmitted = previousErasEmission + currentEraEmission
  const totalSupply = totalEmitted + EMISSION_CONSTANTS.GENESIS_SUPPLY

  // Time until next era
  const secondsUntilNextEra = blocksUntilNextEra * blockTimeSeconds
  const days = Math.floor(secondsUntilNextEra / 86400)
  const hours = Math.floor((secondsUntilNextEra % 86400) / 3600)
  const minutes = Math.floor((secondsUntilNextEra % 3600) / 60)

  return {
    currentBlock,
    currentEra,
    currentBlockReward,
    blocksInCurrentEra,
    blocksUntilNextEra,
    percentThroughEra,
    totalEmitted,
    totalSupply,
    percentOfMaxSupply: (totalSupply / EMISSION_CONSTANTS.REALISTIC_MAX_SUPPLY) * 100,
    nextEraReward,
    timeUntilNextEra: {
      days,
      hours,
      minutes,
      totalSeconds: secondsUntilNextEra,
    },
  }
}

/**
 * Format large numbers for display
 */
export function formatSupply(amount: number, decimals: number = 2): string {
  if (amount >= 1_000_000_000) {
    return `${(amount / 1_000_000_000).toFixed(decimals)}B`
  }
  if (amount >= 1_000_000) {
    return `${(amount / 1_000_000).toFixed(decimals)}M`
  }
  if (amount >= 1_000) {
    return `${(amount / 1_000).toFixed(decimals)}K`
  }
  return amount.toFixed(decimals)
}

/**
 * Format block reward with appropriate precision
 */
export function formatBlockReward(reward: number): string {
  return parseFloat(reward.toFixed(10)).toString()
}

/**
 * Format block number with commas
 */
export function formatBlockNumber(block: number): string {
  return block.toLocaleString('en-US')
}

/**
 * Get ordinal suffix for era number
 */
export function getOrdinalSuffix(n: number): string {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

// Pre-generated era schedule for display
export const eraSchedule = generateEraSchedule(15)

const FIFTHING_ORDINALS = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth']

/** Month each fifthing landed: the timestamp of block era × 5,000,000 on Blockscout. */
const FIFTHING_LANDED: Record<number, string> = {
  1: 'Dec 2017',
  2: 'Mar 2020',
  3: 'Apr 2022',
  4: 'May 2024',
  5: 'Jul 2026',
}

/** Block 25,000,000, the fifth fifthing, was mined at 2026-07-22 17:12:59 UTC. */
const FIFTH_FIFTHING_MS = Date.UTC(2026, 6, 22, 17, 12, 59)

/** Projected date of the fifthing that ends `era`, counted from the fifth at the nominal block time. */
export function projectFifthingDate(era: number): Date {
  const blocks = getEraEndBlock(era) - getEraEndBlock(5)
  return new Date(FIFTH_FIFTHING_MS + blocks * EMISSION_CONSTANTS.AVG_BLOCK_TIME_SECONDS * 1000)
}

// Every fifthing so far, and the one that ends the current era.
export const emissionMilestones = Array.from({ length: CURRENT_ERA }, (_, i) => {
  const era = i + 1
  const projected = projectFifthingDate(era).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
  return {
    era,
    block: getEraEndBlock(era),
    event: `${FIFTHING_ORDINALS[i] ?? `Era ${era}`} Fifthing`,
    date: FIFTHING_LANDED[era] ?? `~${projected}`,
    rewardBefore: getBlockRewardForEra(era),
    rewardAfter: getBlockRewardForEra(era + 1),
  }
})

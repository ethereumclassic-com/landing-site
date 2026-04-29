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
  AVG_BLOCK_TIME_SECONDS: 13,
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
export function calculateSupplyStats(currentBlock: number): SupplyStats {
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
  const secondsUntilNextEra = blocksUntilNextEra * EMISSION_CONSTANTS.AVG_BLOCK_TIME_SECONDS
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

// Key milestones for the emission schedule
export const emissionMilestones = [
  {
    era: 1,
    block: 5_000_000,
    event: 'First Fifthing',
    date: 'Dec 2017',
    rewardBefore: 5,
    rewardAfter: 4,
  },
  {
    era: 2,
    block: 10_000_000,
    event: 'Second Fifthing',
    date: 'Mar 2020',
    rewardBefore: 4,
    rewardAfter: 3.2,
  },
  {
    era: 3,
    block: 15_000_000,
    event: 'Third Fifthing',
    date: 'Apr 2022',
    rewardBefore: 3.2,
    rewardAfter: 2.56,
  },
  {
    era: 4,
    block: 20_000_000,
    event: 'Fourth Fifthing',
    date: 'Oct 2024',
    rewardBefore: 2.56,
    rewardAfter: 2.048,
  },
  {
    era: 5,
    block: 25_000_000,
    event: 'Fifth Fifthing',
    date: '~May 2027',
    rewardBefore: 2.048,
    rewardAfter: 1.6384,
  },
]

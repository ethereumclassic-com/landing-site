import {
  generateEraSchedule,
  EMISSION_CONSTANTS,
  emissionMilestones,
  calculateSupplyStats,
  getEraForBlock,
  CURRENT_ERA,
} from './emission'

/** Blocks in a year at a given seconds-per-block rate. */
function blocksPerYear(blockTimeSeconds: number): number {
  return Math.round((365.25 * 86400) / blockTimeSeconds)
}

const BLOCKS_PER_YEAR = blocksPerYear(EMISSION_CONSTANTS.AVG_BLOCK_TIME_SECONDS)

const schedule = generateEraSchedule(10)

// ----- Emission Curve -----

export interface EmissionCurvePoint {
  label: string
  totalSupply: number
  eraEmission: number
  blockReward: number
  era: number
  isPast: boolean
  isCurrent: boolean
}

/** Approximate year each era ENDS (i.e. when the next fifthing lands). */
export const eraLabels: Record<number, string> = {
  1: '2017', 2: '2020', 3: '2022', 4: '2024',
  5: '2026', 6: '~2029', 7: '~2031', 8: '~2034',
}

function ordinal(n: number): string {
  const rem100 = n % 100
  if (rem100 >= 11 && rem100 <= 13) return `${n}th`
  return `${n}${['th', 'st', 'nd', 'rd'][n % 10] ?? 'th'}`
}

/**
 * Chart anchors for "where the chain is now". Derived so the reference lines
 * follow the chain into each new era instead of being re-pointed by hand — and
 * so they cannot drift out of sync with the data-point keys they must match.
 */
/** Exact x-axis key of the current era in emissionCurveData. */
export const currentEraCurveKey = `Era ${CURRENT_ERA}\n${eraLabels[CURRENT_ERA] ?? ''}`
/** Exact x-axis key of the current era in s2fData / emissionRateData. */
export const currentEraKey = `Era ${CURRENT_ERA}`
/** Era N is entered by the (N-1)th fifthing. */
export const lastFifthingLabel = `${ordinal(CURRENT_ERA - 1)} Fifthing`
/** Eras already completed, for the muted gridlines. */
export const completedEras = Array.from({ length: CURRENT_ERA - 1 }, (_, i) => i + 1)

export const emissionCurveData: EmissionCurvePoint[] = [
  {
    label: '2015\nGenesis',
    totalSupply: EMISSION_CONSTANTS.GENESIS_SUPPLY,
    eraEmission: 0,
    blockReward: EMISSION_CONSTANTS.STARTING_REWARD,
    era: 0,
    isPast: true,
    isCurrent: false,
  },
  ...schedule.slice(0, 8).map((era) => ({
    label: `Era ${era.number}\n${eraLabels[era.number] ?? ''}`,
    totalSupply: era.totalSupply,
    eraEmission: era.eraSupply,
    blockReward: era.blockReward,
    era: era.number,
    isPast: era.number < CURRENT_ERA,
    isCurrent: era.number === CURRENT_ERA,
  })),
]

// ----- Emission Rate / Inflation -----

export interface EmissionRatePoint {
  era: string
  eraNumber: number
  newETC: number
  annualInflation: number
  blockReward: number
  isCurrent: boolean
}

export const emissionRateData: EmissionRatePoint[] = schedule.slice(0, 8).map((era, i) => {
  const supplyAtEraStart = i === 0
    ? EMISSION_CONSTANTS.GENESIS_SUPPLY
    : schedule[i - 1].totalSupply
  const newETC = era.blockReward * BLOCKS_PER_YEAR
  const annualInflation = parseFloat(((newETC / supplyAtEraStart) * 100).toFixed(2))
  return {
    era: `Era ${era.number}`,
    eraNumber: era.number,
    newETC: Math.round(newETC),
    annualInflation,
    blockReward: era.blockReward,
    isCurrent: era.number === CURRENT_ERA,
  }
})

// ----- Supply Scarcity (S2F) -----

export interface S2FPoint {
  era: string
  eraNumber: number
  s2f: number
  annualFlow: number
  isPast: boolean
  isCurrent: boolean
  yearLabel: string
}

export const s2fData: S2FPoint[] = schedule.slice(0, 8).map((era) => {
  const annualFlow = era.blockReward * BLOCKS_PER_YEAR
  const s2f = parseFloat((era.totalSupply / annualFlow).toFixed(1))
  return {
    era: `Era ${era.number}`,
    eraNumber: era.number,
    s2f,
    annualFlow: Math.round(annualFlow),
    isPast: era.number < CURRENT_ERA,
    isCurrent: era.number === CURRENT_ERA,
    yearLabel: eraLabels[era.number] ?? '',
  }
})

// ----- Era history for the table -----

export interface EraRow {
  number: number
  startBlock: number
  endBlock: number
  blockReward: number
  eraSupply: number
  totalSupply: number
  date: string
  event: string | null
  isPast: boolean
  isCurrent: boolean
}

/**
 * Era rows for the history/current/future table. Every column is computed for
 * every era, past and projected alike, so no future row renders blank.
 *
 * Pass a live block height where one is available; falls back to CURRENT_ERA.
 */
export function getEraTableData(currentBlock?: number | null): EraRow[] {
  const activeEra =
    currentBlock && currentBlock > 0 ? getEraForBlock(currentBlock) : CURRENT_ERA
  return schedule.slice(0, 12).map((era) => {
    const milestone = emissionMilestones.find((m) => m.era === era.number)
    const projectedYear = 2017 + (era.number - 1) * 2.5
    return {
      number: era.number,
      startBlock: era.startBlock,
      endBlock: era.endBlock,
      blockReward: era.blockReward,
      eraSupply: era.eraSupply,
      totalSupply: era.totalSupply,
      date: milestone?.date ?? `~${Math.round(projectedYear)}`,
      event: milestone?.event ?? null,
      isPast: era.number < activeEra,
      isCurrent: era.number === activeEra,
    }
  })
}

export const eraTableData: EraRow[] = getEraTableData()

// ----- Live helpers -----

export function getDaysSinceLastFifthing(
  currentBlock: number,
  blockTimeSeconds: number = EMISSION_CONSTANTS.AVG_BLOCK_TIME_SECONDS,
): number {
  // Anchor on the boundary of whatever era the chain is actually in, so this
  // does not need editing at each fifthing.
  const lastFifthingBlock =
    (getEraForBlock(currentBlock) - 1) * EMISSION_CONSTANTS.ERA_LENGTH
  const blocksSince = currentBlock - lastFifthingBlock
  if (blocksSince <= 0) return 0
  return Math.floor((blocksSince * blockTimeSeconds) / 86400)
}

export function getAnnualInflationRate(
  currentBlock: number,
  blockTimeSeconds: number = EMISSION_CONSTANTS.AVG_BLOCK_TIME_SECONDS,
): number {
  const stats = calculateSupplyStats(currentBlock, blockTimeSeconds)
  const annualNew = stats.currentBlockReward * blocksPerYear(blockTimeSeconds)
  return parseFloat(((annualNew / stats.totalSupply) * 100).toFixed(2))
}

export function getNextEraInflationRate(
  currentBlock: number,
  blockTimeSeconds: number = EMISSION_CONSTANTS.AVG_BLOCK_TIME_SECONDS,
): number {
  const stats = calculateSupplyStats(currentBlock, blockTimeSeconds)
  const annualNew = stats.nextEraReward * blocksPerYear(blockTimeSeconds)
  return parseFloat(((annualNew / stats.totalSupply) * 100).toFixed(2))
}

export function getExpectedFifthingDate(
  blocksRemaining: number | null,
  blockTimeSeconds: number = EMISSION_CONSTANTS.AVG_BLOCK_TIME_SECONDS,
): string {
  if (blocksRemaining === null || blocksRemaining <= 0) return 'Complete'
  const secondsRemaining = blocksRemaining * blockTimeSeconds
  const targetDate = new Date(Date.now() + secondsRemaining * 1000)
  return targetDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export { BLOCKS_PER_YEAR }

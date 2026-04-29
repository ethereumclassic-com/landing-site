import {
  generateEraSchedule,
  EMISSION_CONSTANTS,
  emissionMilestones,
  calculateSupplyStats,
} from '../../data/emission'

const BLOCKS_PER_YEAR = Math.round((365.25 * 86400) / EMISSION_CONSTANTS.AVG_BLOCK_TIME_SECONDS)

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

const eraLabels: Record<number, string> = {
  1: '2017', 2: '2020', 3: '2022', 4: '2024',
  5: '~2026', 6: '~2029', 7: '~2031', 8: '~2034',
}

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
    isPast: era.number <= 4,
    isCurrent: era.number === 5,
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
    isCurrent: era.number === 5,
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
    isPast: era.number <= 4,
    isCurrent: era.number === 5,
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

export const eraTableData: EraRow[] = schedule.slice(0, 12).map((era) => {
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
    isPast: era.number <= 4,
    isCurrent: era.number === 5,
  }
})

// ----- Live helpers -----

const ERA_4_END_BLOCK = 4 * EMISSION_CONSTANTS.ERA_LENGTH

export function getDaysSinceLastFifthing(currentBlock: number): number {
  const blocksSince = currentBlock - ERA_4_END_BLOCK
  if (blocksSince <= 0) return 0
  return Math.floor((blocksSince * EMISSION_CONSTANTS.AVG_BLOCK_TIME_SECONDS) / 86400)
}

export function getAnnualInflationRate(currentBlock: number): number {
  const stats = calculateSupplyStats(currentBlock)
  const annualNew = stats.currentBlockReward * BLOCKS_PER_YEAR
  return parseFloat(((annualNew / stats.totalSupply) * 100).toFixed(2))
}

export function getNextEraInflationRate(currentBlock: number): number {
  const stats = calculateSupplyStats(currentBlock)
  const annualNew = stats.nextEraReward * BLOCKS_PER_YEAR
  return parseFloat(((annualNew / stats.totalSupply) * 100).toFixed(2))
}

export function getExpectedFifthingDate(blocksRemaining: number | null): string {
  if (blocksRemaining === null || blocksRemaining <= 0) return 'Complete'
  const secondsRemaining = blocksRemaining * EMISSION_CONSTANTS.AVG_BLOCK_TIME_SECONDS
  const targetDate = new Date(Date.now() + secondsRemaining * 1000)
  return targetDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export { BLOCKS_PER_YEAR }

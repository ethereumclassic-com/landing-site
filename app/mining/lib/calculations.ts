// Mining profitability calculations for Ethereum Classic
// Based on ETChash algorithm
// Network data sourced from Blockscout API: https://etc.blockscout.com/api/v2/stats

import { networkStats } from '../data/mining'

// Network constants - fallback values when live API unavailable
// These are updated from Blockscout API data (Jan 2026)
// For live calculations, use /api/network endpoint
export const NETWORK_CONSTANTS = {
  // Network hashrate in MH/s (174 TH/s = 174,000,000 MH/s)
  networkHashrateMH: 174000000,
  // Average block reward including uncle rewards (~2.048 ETC typical)
  // Base reward is 2.048 ETC, varies with uncle rewards
  blockReward: 2.048,
  // Average block time from Blockscout (~13 seconds)
  blockTimeSeconds: 13.0,
  // Calculated: 86400 / 13.0 ≈ 6646 blocks per day
  blocksPerDay: 6646,
  // Reference ETC price (fallback, should use live price from API)
  etcPriceUSD: 12.75,
}

export interface MiningInput {
  hashrateMH: number // MH/s
  powerWatts: number // Watts
  electricityRate: number // $/kWh
  poolFeePercent: number // e.g., 1 for 1%
  etcPrice?: number // USD, optional override
}

export interface ProfitabilityResult {
  // ETC earnings
  dailyETC: number
  weeklyETC: number
  monthlyETC: number
  yearlyETC: number
  // USD revenue
  dailyRevenueUSD: number
  weeklyRevenueUSD: number
  monthlyRevenueUSD: number
  yearlyRevenueUSD: number
  // Power costs
  dailyPowerCostUSD: number
  weeklyPowerCostUSD: number
  monthlyPowerCostUSD: number
  yearlyPowerCostUSD: number
  // Net profit
  dailyProfitUSD: number
  weeklyProfitUSD: number
  monthlyProfitUSD: number
  yearlyProfitUSD: number
  // Break-even
  breakEvenPriceUSD: number // ETC price needed to break even
  isProfitable: boolean
  // Efficiency
  costPerETC: number // Power cost per ETC mined
  revenuePerKWh: number // Revenue per kWh consumed
}

/**
 * Calculate mining profitability
 *
 * Formula:
 * Daily ETC = (hashrate / networkHashrate) * blocksPerDay * blockReward * (1 - poolFee)
 * Daily Revenue = dailyETC * etcPrice
 * Daily Power Cost = (watts / 1000) * 24 * electricityRate
 * Daily Profit = dailyRevenue - dailyPowerCost
 */
export function calculateProfitability(input: MiningInput): ProfitabilityResult {
  const {
    hashrateMH,
    powerWatts,
    electricityRate,
    poolFeePercent,
    etcPrice = NETWORK_CONSTANTS.etcPriceUSD,
  } = input

  const poolFeeDecimal = poolFeePercent / 100
  const networkHashrate = NETWORK_CONSTANTS.networkHashrateMH

  // Calculate daily ETC earnings
  // hashShare = hashrateMH / networkHashrateMH
  // dailyETC = hashShare * blocksPerDay * blockReward * (1 - poolFee)
  const hashShare = hashrateMH / networkHashrate
  const dailyETC = hashShare * NETWORK_CONSTANTS.blocksPerDay * NETWORK_CONSTANTS.blockReward * (1 - poolFeeDecimal)

  // Weekly, monthly, yearly ETC
  const weeklyETC = dailyETC * 7
  const monthlyETC = dailyETC * 30
  const yearlyETC = dailyETC * 365

  // USD revenue
  const dailyRevenueUSD = dailyETC * etcPrice
  const weeklyRevenueUSD = weeklyETC * etcPrice
  const monthlyRevenueUSD = monthlyETC * etcPrice
  const yearlyRevenueUSD = yearlyETC * etcPrice

  // Power costs (kWh = watts / 1000 * hours)
  const dailyKWh = (powerWatts / 1000) * 24
  const dailyPowerCostUSD = dailyKWh * electricityRate
  const weeklyPowerCostUSD = dailyPowerCostUSD * 7
  const monthlyPowerCostUSD = dailyPowerCostUSD * 30
  const yearlyPowerCostUSD = dailyPowerCostUSD * 365

  // Net profit
  const dailyProfitUSD = dailyRevenueUSD - dailyPowerCostUSD
  const weeklyProfitUSD = weeklyRevenueUSD - weeklyPowerCostUSD
  const monthlyProfitUSD = monthlyRevenueUSD - monthlyPowerCostUSD
  const yearlyProfitUSD = yearlyRevenueUSD - yearlyPowerCostUSD

  // Break-even price: price at which revenue equals power cost
  // dailyETC * breakEvenPrice = dailyPowerCost
  // breakEvenPrice = dailyPowerCost / dailyETC
  const breakEvenPriceUSD = dailyETC > 0 ? dailyPowerCostUSD / dailyETC : Infinity

  // Cost per ETC mined
  const costPerETC = dailyETC > 0 ? dailyPowerCostUSD / dailyETC : Infinity

  // Revenue per kWh
  const revenuePerKWh = dailyKWh > 0 ? dailyRevenueUSD / dailyKWh : 0

  return {
    dailyETC,
    weeklyETC,
    monthlyETC,
    yearlyETC,
    dailyRevenueUSD,
    weeklyRevenueUSD,
    monthlyRevenueUSD,
    yearlyRevenueUSD,
    dailyPowerCostUSD,
    weeklyPowerCostUSD,
    monthlyPowerCostUSD,
    yearlyPowerCostUSD,
    dailyProfitUSD,
    weeklyProfitUSD,
    monthlyProfitUSD,
    yearlyProfitUSD,
    breakEvenPriceUSD,
    isProfitable: dailyProfitUSD > 0,
    costPerETC,
    revenuePerKWh,
  }
}

/**
 * Calculate hardware profitability for comparison tables
 */
export interface HardwareProfitability {
  hardwareId: string
  dailyETC: number
  dailyRevenueUSD: number
  dailyPowerCostUSD: number
  dailyProfitUSD: number
  monthlyProfitUSD: number
  isProfitable: boolean
  breakEvenPriceUSD: number
}

export function calculateHardwareProfitability(
  hashrateMH: number,
  powerWatts: number,
  electricityRate: number = 0.10, // Default $0.10/kWh
  poolFeePercent: number = 1,
  etcPrice: number = NETWORK_CONSTANTS.etcPriceUSD
): HardwareProfitability {
  const result = calculateProfitability({
    hashrateMH,
    powerWatts,
    electricityRate,
    poolFeePercent,
    etcPrice,
  })

  return {
    hardwareId: '',
    dailyETC: result.dailyETC,
    dailyRevenueUSD: result.dailyRevenueUSD,
    dailyPowerCostUSD: result.dailyPowerCostUSD,
    dailyProfitUSD: result.dailyProfitUSD,
    monthlyProfitUSD: result.monthlyProfitUSD,
    isProfitable: result.isProfitable,
    breakEvenPriceUSD: result.breakEvenPriceUSD,
  }
}

/**
 * Format numbers for display
 */
export function formatETC(amount: number, decimals: number = 6): string {
  return amount.toFixed(decimals) + ' ETC'
}

export function formatUSD(amount: number): string {
  const isNegative = amount < 0
  const absAmount = Math.abs(amount)
  const formatted = absAmount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return isNegative ? '-' + formatted : formatted
}

export function formatHashrate(mhs: number): string {
  if (mhs >= 1000000) {
    return (mhs / 1000000).toFixed(2) + ' TH/s'
  }
  if (mhs >= 1000) {
    return (mhs / 1000).toFixed(2) + ' GH/s'
  }
  return mhs.toFixed(2) + ' MH/s'
}

export function formatPower(watts: number): string {
  if (watts >= 1000) {
    return (watts / 1000).toFixed(2) + ' kW'
  }
  return watts.toFixed(0) + ' W'
}

/**
 * Parse network stats for calculations
 */
export function parseNetworkHashrate(): number {
  // Parse from networkStats.hashrate (e.g., "185 TH/s")
  const match = networkStats.hashrate.match(/(\d+(?:\.\d+)?)\s*(TH|GH|MH)/i)
  if (!match) return NETWORK_CONSTANTS.networkHashrateMH

  const value = parseFloat(match[1])
  const unit = match[2].toUpperCase()

  switch (unit) {
    case 'TH':
      return value * 1000000 // TH to MH
    case 'GH':
      return value * 1000 // GH to MH
    case 'MH':
      return value
    default:
      return NETWORK_CONSTANTS.networkHashrateMH
  }
}

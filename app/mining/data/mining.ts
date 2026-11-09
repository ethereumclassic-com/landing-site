import { CURRENT_ERA, getBlockRewardForEra } from '@/app/research/data/emission'
// Mining data for Ethereum Classic
// Pool data sourced from miningpoolstats.stream
// Hardware data from WhatToMine and manufacturer specs

export type PayoutScheme = 'PPS' | 'PPLNS' | 'PROP' | 'SOLO' | 'PPS+' | 'RBPPS'

export interface MiningPool {
  id: string
  name: string
  website: string
  fee: number // percentage
  minPayout: number // ETC
  payoutScheme: PayoutScheme[]
  servers: { region: string; url: string; port: number }[]
  features: string[]
  recommended?: boolean
  notes?: string
}

export interface NetworkStats {
  blockTime: string
  blockReward: string
  dailyBlocks: number
  lastUpdated: string
}

export interface HardwareType {
  type: 'GPU' | 'ASIC'
  brand: string
}

export interface MiningHardware {
  id: string
  name: string
  type: 'GPU' | 'ASIC'
  brand: string
  hashrate: number // MH/s
  power: number // Watts
  efficiency: number // Watts per MH/s
  msrp?: number // USD
  releaseYear?: number
  availability: 'available' | 'limited' | 'discontinued'
  notes?: string
  buyLink?: string // Direct manufacturer or affiliate link
}

// Hardware Manufacturer Links
// For affiliate pages - links to manufacturer sites
export interface HardwareManufacturer {
  id: string
  name: string
  logo?: string
  website: string
  description: string
  type: 'ASIC' | 'GPU' | 'Both'
  featured?: boolean
  products: string[] // List of product names
}

export const hardwareManufacturers: HardwareManufacturer[] = [
  // ASIC Manufacturers
  {
    id: 'jasminer',
    name: 'Jasminer',
    website: 'https://jasminer.com/',
    description: 'Maker of efficient Etchash ASICs, including the X44-P, the highest-hashrate model in this guide.',
    type: 'ASIC',
    featured: true,
    products: ['Jasminer X44-P', 'Jasminer X16-Q Pro', 'Jasminer X16-QE', 'Jasminer X4'],
  },
  {
    id: 'bombax',
    name: 'Bombax',
    website: 'https://bombax-miner.com/',
    description: 'Maker of the EZ100 series of Etchash ASICs.',
    type: 'ASIC',
    featured: true,
    products: ['Bombax EZ100-PRO', 'Bombax EZ100', 'Bombax EZ100-C'],
  },
  {
    id: 'ipollo',
    name: 'iPollo',
    website: 'https://ipollo.com/',
    description: 'Maker of the V2 series of efficient Etchash ASICs.',
    type: 'ASIC',
    featured: true,
    products: ['iPollo V2', 'iPollo V2H', 'iPollo V2X', 'iPollo V1 Mini'],
  },
  {
    id: 'bitmain',
    name: 'Bitmain',
    website: 'https://shop.bitmain.com/',
    description: 'Maker of the Antminer series, sold worldwide.',
    type: 'ASIC',
    featured: true,
    products: ['Antminer E11', 'Antminer E9 Pro', 'Antminer E9'],
  },
  {
    id: 'innosilicon',
    name: 'Innosilicon',
    website: 'https://www.innosilicon.com/',
    description: 'Maker of the A10 and A11 series, which still run but are less efficient than newer models.',
    type: 'ASIC',
    featured: false,
    products: ['A10 Pro', 'A11 Pro'],
  },
  // GPU Manufacturers
  {
    id: 'nvidia',
    name: 'NVIDIA',
    website: 'https://www.nvidia.com/en-us/geforce/',
    description: 'Maker of the GeForce RTX series; the RTX 50 cards have the highest hashrates in this guide.',
    type: 'GPU',
    featured: true,
    products: ['RTX 5090', 'RTX 5080', 'RTX 5070 Ti', 'RTX 5070', 'RTX 5060 Ti', 'RTX 5060', 'RTX 4060 Ti', 'RTX 4060'],
  },
  {
    id: 'amd',
    name: 'AMD',
    website: 'https://www.amd.com/en/graphics/radeon-rx-graphics',
    description: 'Maker of the Radeon RX series; the RX 6600 cards draw the least power in this guide.',
    type: 'GPU',
    featured: true,
    products: ['RX 6600', 'RX 6650 XT', 'RX 6600 XT', 'RX 6700 XT', 'RX 6800', 'RX 7800 XT'],
  },
]

// The pools with a setup guide at /mining/pools/<id>: stratum servers, ports and features. Every pool the
// site lists, with its fee and payout scheme, is in data/pools.ts; shares are always live (lib/pool-hashrate).
export const miningPools: MiningPool[] = [
  {
    id: 'f2pool',
    name: 'F2Pool',
    website: 'https://www.f2pool.com/coin/ethereum-classic',
    fee: 1,
    minPayout: 0.1,
    payoutScheme: ['PPS'],
    servers: [
      { region: 'US', url: 'etc.f2pool.com', port: 8118 },
      { region: 'Asia', url: 'etc.f2pool.com', port: 8118 },
    ],
    features: ['Mobile app', 'Detailed statistics', 'Multiple payout options', 'Low minimum payout'],
    recommended: true,
    notes: 'Account-based mining with PPS payouts, a mobile app and detailed statistics',
  },
  {
    id: '2miners',
    name: '2Miners',
    website: 'https://etc.2miners.com/',
    fee: 1,
    minPayout: 0.1,
    payoutScheme: ['PPLNS', 'SOLO'],
    servers: [
      { region: 'US', url: 'us-etc.2miners.com', port: 1010 },
      { region: 'EU', url: 'etc.2miners.com', port: 1010 },
      { region: 'Asia', url: 'asia-etc.2miners.com', port: 1010 },
    ],
    features: ['Low fees', 'Detailed statistics', 'Email notifications', 'Solo mining option'],
    recommended: true,
    notes: 'PPLNS payouts at a 1% fee, and solo mining at 1.5%',
  },
  {
    id: 'k1pool',
    name: 'K1Pool',
    website: 'https://k1pool.com/pool/etc',
    fee: 1,
    minPayout: 0.1,
    payoutScheme: ['RBPPS', 'SOLO'],
    servers: [
      { region: 'Global', url: 'etc.k1pool.com', port: 6000 },
    ],
    features: ['Low fees', 'Simple interface', 'Fast payouts'],
  },
  {
    id: 'gtpool',
    name: 'GTPool',
    website: 'https://gtpool.io/',
    fee: 1,
    minPayout: 0.5,
    payoutScheme: ['PPLNS'],
    servers: [
      { region: 'Global', url: 'etc.gtpool.io', port: 5000 },
    ],
    features: ['Low fees', 'Transparent stats'],
  },
]

// Network stats - fallback values for when live data is unavailable. Pages display the live
// figures (lib/hashrate, useNetworkStats); the block reward is the current era's, derived.
// No hashrate or difficulty is kept here: a page with no live figure shows none.
export const networkStats: NetworkStats = {
  blockTime: '~13 seconds',
  blockReward: `${getBlockRewardForEra(CURRENT_ERA)} ETC`,
  dailyBlocks: 6646,
  lastUpdated: 'Live from Blockscout',
}

// Mining Hardware - GPUs and ASICs
// Data from WhatToMine Jan 2026: https://whattomine.com/coins/162-etc-etchash
// Sorted by profitability (most profitable first)
export const miningHardware: MiningHardware[] = [
  // ASICs - Top performers (profitable at $0.10/kWh)
  {
    id: 'jasminer-x44p',
    name: 'Jasminer X44-P',
    type: 'ASIC',
    brand: 'Jasminer',
    hashrate: 23400, // 23.40 Gh/s
    power: 2550,
    efficiency: 0.109, // 2550W / 23400 MH/s
    releaseYear: 2025,
    availability: 'available',
    notes: 'Highest hashrate and best efficiency in this list',
    buyLink: 'https://jasminer.com/',
  },
  {
    id: 'bombax-ez100-pro',
    name: 'Bombax EZ100-PRO',
    type: 'ASIC',
    brand: 'Bombax',
    hashrate: 15500, // 15.50 Gh/s
    power: 3100,
    efficiency: 0.20,
    releaseYear: 2024,
    availability: 'available',
    notes: 'High hashrate',
    buyLink: 'https://bombax-miner.com/',
  },
  {
    id: 'ipollo-v2',
    name: 'iPollo V2',
    type: 'ASIC',
    brand: 'iPollo',
    hashrate: 10000, // 10.00 Gh/s
    power: 1500,
    efficiency: 0.15,
    releaseYear: 2024,
    availability: 'available',
    notes: 'Efficient for its hashrate',
    buyLink: 'https://ipollo.com/',
  },
  {
    id: 'bombax-ez100',
    name: 'Bombax EZ100',
    type: 'ASIC',
    brand: 'Bombax',
    hashrate: 12500, // 12.50 Gh/s
    power: 2300,
    efficiency: 0.184,
    releaseYear: 2024,
    availability: 'available',
    notes: 'Bombax\'s mid-range model',
    buyLink: 'https://bombax-miner.com/',
  },
  {
    id: 'ipollo-v2h',
    name: 'iPollo V2H',
    type: 'ASIC',
    brand: 'iPollo',
    hashrate: 3400, // 3.40 Gh/s
    power: 475,
    efficiency: 0.14,
    releaseYear: 2024,
    availability: 'available',
    notes: 'Compact and efficient',
    buyLink: 'https://ipollo.com/',
  },
  {
    id: 'bitmain-e11',
    name: 'Antminer E11',
    type: 'ASIC',
    brand: 'Bitmain',
    hashrate: 9000, // 9.00 Gh/s
    power: 2340,
    efficiency: 0.26,
    releaseYear: 2025,
    availability: 'available',
    notes: 'Bitmain\'s successor to the E9 series',
    buyLink: 'https://shop.bitmain.com/',
  },
  {
    id: 'bombax-ez100c',
    name: 'Bombax EZ100-C',
    type: 'ASIC',
    brand: 'Bombax',
    hashrate: 3800, // 3.80 Gh/s
    power: 760,
    efficiency: 0.20,
    releaseYear: 2024,
    availability: 'available',
    notes: 'Compact version of the EZ100',
    buyLink: 'https://bombax-miner.com/',
  },
  {
    id: 'ipollo-v2x',
    name: 'iPollo V2X',
    type: 'ASIC',
    brand: 'iPollo',
    hashrate: 1200, // 1.20 Gh/s
    power: 165,
    efficiency: 0.1375,
    releaseYear: 2024,
    availability: 'available',
    notes: 'Entry-level, with low power draw',
    buyLink: 'https://ipollo.com/',
  },
  {
    id: 'jasminer-x16q-pro',
    name: 'Jasminer X16-Q Pro',
    type: 'ASIC',
    brand: 'Jasminer',
    hashrate: 2050, // 2.05 Gh/s
    power: 520,
    efficiency: 0.254,
    releaseYear: 2024,
    availability: 'available',
    notes: 'Entry-level Jasminer',
    buyLink: 'https://jasminer.com/',
  },
  // ASICs - Break-even or older models
  {
    id: 'jasminer-x16qe',
    name: 'Jasminer X16-QE',
    type: 'ASIC',
    brand: 'Jasminer',
    hashrate: 1750, // 1.75 Gh/s
    power: 550,
    efficiency: 0.314,
    releaseYear: 2024,
    availability: 'available',
    notes: 'Entry-level, with a lower hashrate',
    buyLink: 'https://jasminer.com/',
  },
  {
    id: 'bitmain-e9-pro',
    name: 'Antminer E9 Pro',
    type: 'ASIC',
    brand: 'Bitmain',
    hashrate: 3680, // 3.68 Gh/s
    power: 2200,
    efficiency: 0.598,
    releaseYear: 2023,
    availability: 'limited',
    notes: 'Older model, unprofitable at high electricity rates',
    buyLink: 'https://shop.bitmain.com/',
  },
  {
    id: 'bitmain-e9',
    name: 'Antminer E9',
    type: 'ASIC',
    brand: 'Bitmain',
    hashrate: 2400, // 2.40 Gh/s
    power: 1920,
    efficiency: 0.80,
    releaseYear: 2022,
    availability: 'limited',
    notes: 'Legacy model',
    buyLink: 'https://shop.bitmain.com/',
  },
  {
    id: 'innosilicon-a11-pro',
    name: 'Innosilicon A11 Pro',
    type: 'ASIC',
    brand: 'Innosilicon',
    hashrate: 1500, // 1.50 Gh/s
    power: 2350,
    efficiency: 1.57,
    releaseYear: 2021,
    availability: 'discontinued',
    notes: 'Discontinued, with high power draw per hash',
    buyLink: 'https://www.innosilicon.com/',
  },
  // GPUs - NVIDIA RTX 50 Series (Latest)
  {
    id: 'rtx-5090',
    name: 'NVIDIA RTX 5090',
    type: 'GPU',
    brand: 'NVIDIA',
    hashrate: 160,
    power: 290,
    efficiency: 1.81,
    msrp: 3720,
    releaseYear: 2025,
    availability: 'limited',
    notes: 'Flagship GPU, highest hashrate',
    buyLink: 'https://www.nvidia.com/en-us/geforce/',
  },
  {
    id: 'rtx-5080',
    name: 'NVIDIA RTX 5080',
    type: 'GPU',
    brand: 'NVIDIA',
    hashrate: 120,
    power: 200,
    efficiency: 1.67,
    msrp: 1301,
    releaseYear: 2025,
    availability: 'available',
    notes: 'High performance, good value',
    buyLink: 'https://www.nvidia.com/en-us/geforce/',
  },
  {
    id: 'rtx-5070-ti',
    name: 'NVIDIA RTX 5070 Ti',
    type: 'GPU',
    brand: 'NVIDIA',
    hashrate: 88,
    power: 150,
    efficiency: 1.70,
    msrp: 880,
    releaseYear: 2025,
    availability: 'available',
    notes: 'Efficient for a gaming GPU',
    buyLink: 'https://www.nvidia.com/en-us/geforce/',
  },
  {
    id: 'rtx-5070',
    name: 'NVIDIA RTX 5070',
    type: 'GPU',
    brand: 'NVIDIA',
    hashrate: 80,
    power: 150,
    efficiency: 1.875,
    msrp: 550,
    releaseYear: 2025,
    availability: 'available',
    notes: 'Good balance of price/performance',
    buyLink: 'https://www.nvidia.com/en-us/geforce/',
  },
  {
    id: 'rtx-5060-ti',
    name: 'NVIDIA RTX 5060 Ti',
    type: 'GPU',
    brand: 'NVIDIA',
    hashrate: 59,
    power: 120,
    efficiency: 2.03,
    msrp: 420,
    releaseYear: 2025,
    availability: 'available',
    notes: 'Entry RTX 50 series',
    buyLink: 'https://www.nvidia.com/en-us/geforce/',
  },
  {
    id: 'rtx-5060',
    name: 'NVIDIA RTX 5060',
    type: 'GPU',
    brand: 'NVIDIA',
    hashrate: 51,
    power: 120,
    efficiency: 2.35,
    msrp: 300,
    releaseYear: 2025,
    availability: 'available',
    notes: 'Budget RTX 50 option',
    buyLink: 'https://www.nvidia.com/en-us/geforce/',
  },
  // GPUs - NVIDIA RTX 40 Series
  {
    id: 'rtx-4060-ti',
    name: 'NVIDIA RTX 4060 Ti',
    type: 'GPU',
    brand: 'NVIDIA',
    hashrate: 39,
    power: 80,
    efficiency: 2.05,
    msrp: 450,
    releaseYear: 2023,
    availability: 'available',
    notes: 'Efficient mid-range option',
    buyLink: 'https://www.nvidia.com/en-us/geforce/',
  },
  {
    id: 'rtx-4060',
    name: 'NVIDIA RTX 4060',
    type: 'GPU',
    brand: 'NVIDIA',
    hashrate: 34,
    power: 80,
    efficiency: 2.35,
    msrp: 300,
    releaseYear: 2023,
    availability: 'available',
    notes: 'Budget friendly option',
    buyLink: 'https://www.nvidia.com/en-us/geforce/',
  },
  // GPUs - AMD Radeon RX 6000 Series (Best efficiency)
  {
    id: 'rx-6600',
    name: 'AMD RX 6600',
    type: 'GPU',
    brand: 'AMD',
    hashrate: 28.5,
    power: 60,
    efficiency: 2.11,
    msrp: 262,
    releaseYear: 2021,
    availability: 'available',
    notes: 'Low power draw',
    buyLink: 'https://www.amd.com/en/graphics/radeon-rx-graphics',
  },
  {
    id: 'rx-6650-xt',
    name: 'AMD RX 6650 XT',
    type: 'GPU',
    brand: 'AMD',
    hashrate: 27,
    power: 60,
    efficiency: 2.22,
    msrp: 330,
    releaseYear: 2022,
    availability: 'available',
    notes: 'Low power draw',
    buyLink: 'https://www.amd.com/en/graphics/radeon-rx-graphics',
  },
  {
    id: 'rx-6600-xt',
    name: 'AMD RX 6600 XT',
    type: 'GPU',
    brand: 'AMD',
    hashrate: 32,
    power: 70,
    efficiency: 2.19,
    msrp: 450,
    releaseYear: 2021,
    availability: 'available',
    notes: 'Good balance of hashrate and efficiency',
    buyLink: 'https://www.amd.com/en/graphics/radeon-rx-graphics',
  },
  {
    id: 'rx-6700-xt',
    name: 'AMD RX 6700 XT',
    type: 'GPU',
    brand: 'AMD',
    hashrate: 46,
    power: 100,
    efficiency: 2.17,
    msrp: 960,
    releaseYear: 2021,
    availability: 'available',
    notes: 'Higher hashrate option',
    buyLink: 'https://www.amd.com/en/graphics/radeon-rx-graphics',
  },
  {
    id: 'rx-6800',
    name: 'AMD RX 6800',
    type: 'GPU',
    brand: 'AMD',
    hashrate: 61,
    power: 110,
    efficiency: 1.80,
    msrp: 440,
    releaseYear: 2020,
    availability: 'available',
    notes: 'High hashrate AMD option',
    buyLink: 'https://www.amd.com/en/graphics/radeon-rx-graphics',
  },
  {
    id: 'rx-6800-xt',
    name: 'AMD RX 6800 XT',
    type: 'GPU',
    brand: 'AMD',
    hashrate: 62,
    power: 110,
    efficiency: 1.77,
    msrp: 640,
    releaseYear: 2020,
    availability: 'available',
    notes: 'Top AMD efficiency',
    buyLink: 'https://www.amd.com/en/graphics/radeon-rx-graphics',
  },
  {
    id: 'rx-7800-xt',
    name: 'AMD RX 7800 XT',
    type: 'GPU',
    brand: 'AMD',
    hashrate: 65,
    power: 160,
    efficiency: 2.46,
    msrp: 600,
    releaseYear: 2023,
    availability: 'available',
    notes: 'RDNA 3 card',
    buyLink: 'https://www.amd.com/en/graphics/radeon-rx-graphics',
  },
]

// Mining software options
export interface MiningSoftware {
  id: string
  name: string
  website: string
  platforms: ('Windows' | 'Linux' | 'macOS')[]
  supports: ('AMD' | 'NVIDIA' | 'ASIC')[]
  fee: number
  opensource: boolean
  description: string
}

export const miningSoftware: MiningSoftware[] = [
  {
    id: 'lolminer',
    name: 'lolMiner',
    website: 'https://github.com/Lolliedieb/lolMiner-releases',
    platforms: ['Windows', 'Linux'],
    supports: ['AMD', 'NVIDIA'],
    fee: 0.7,
    opensource: false,
    description: 'Cross-platform miner for AMD and NVIDIA GPUs, with regular releases',
  },
  {
    id: 'trex',
    name: 'T-Rex Miner',
    website: 'https://trex-miner.com/',
    platforms: ['Windows', 'Linux'],
    supports: ['NVIDIA'],
    fee: 1,
    opensource: false,
    description: 'NVIDIA miner with a web interface; no release since 2022',
  },
  {
    id: 'teamredminer',
    name: 'TeamRedMiner',
    website: 'https://github.com/todxx/teamredminer',
    platforms: ['Windows', 'Linux'],
    supports: ['AMD'],
    fee: 1,
    opensource: false,
    description: 'Miner built for AMD GPUs',
  },
  {
    id: 'gminer',
    name: 'GMiner',
    website: 'https://gminer.info/',
    platforms: ['Windows', 'Linux'],
    supports: ['AMD', 'NVIDIA'],
    fee: 1,
    opensource: false,
    description: 'High-performance miner for both AMD and NVIDIA',
  },
]

// Mining resources
export interface MiningResource {
  id: string
  name: string
  url: string
  description: string
  type: 'calculator' | 'stats' | 'guide' | 'tool'
}

export const miningResources: MiningResource[] = [
  {
    id: 'whattomine',
    name: 'WhatToMine',
    url: 'https://whattomine.com/coins/162-etc-etchash',
    description: 'Profitability calculator and network statistics',
    type: 'calculator',
  },
  {
    id: 'miningpoolstats',
    name: 'MiningPoolStats',
    url: 'https://miningpoolstats.stream/ethereumclassic',
    description: 'Pool hashrate distribution and statistics',
    type: 'stats',
  },
  {
    id: 'blockscout',
    name: 'Blockscout',
    url: 'https://etc.blockscout.com/',
    description: 'ETC block explorer for transaction verification',
    type: 'tool',
  },
  {
    id: 'learn-mining',
    name: 'Mining Guides',
    url: '/learn/mining',
    description: 'Educational articles about ETC mining',
    type: 'guide',
  },
]

// Quick start steps for getting started page
export const gettingStartedSteps = [
  {
    step: 1,
    title: 'Choose Your Hardware',
    description: 'Select between GPU or ASIC hardware based on your budget and goals. ASICs are more efficient but GPUs offer flexibility.',
    link: '/mining/hardware',
    linkText: 'View Hardware Guide',
  },
  {
    step: 2,
    title: 'Select a Mining Pool',
    description: 'Join a mining pool to receive consistent payouts. Compare fees, payout minimums, and server locations.',
    link: '/mining/pools',
    linkText: 'Browse Pools',
  },
  {
    step: 3,
    title: 'Get a Wallet',
    description: 'You need an ETC wallet address to receive mining rewards. Hardware wallets offer the best security.',
    link: '/wallet',
    linkText: 'Set Up Wallet',
  },
  {
    step: 4,
    title: 'Install Mining Software',
    description: 'Download and configure mining software compatible with your hardware. Most pools provide configuration guides.',
    link: '/mining/software',
    linkText: 'Software Options',
  },
  {
    step: 5,
    title: 'Start Mining',
    description: 'Launch your miner with the pool settings and your wallet address. Monitor hashrate and temperature.',
    link: null,
    linkText: null,
  },
]

// Helper functions
export function getPoolById(id: string): MiningPool | undefined {
  return miningPools.find((pool) => pool.id === id)
}

export function getRecommendedPools(): MiningPool[] {
  return miningPools.filter((pool) => pool.recommended)
}

export function getHardwareByType(type: 'GPU' | 'ASIC'): MiningHardware[] {
  return miningHardware.filter((hw) => hw.type === type)
}

export function getAvailableHardware(): MiningHardware[] {
  return miningHardware.filter((hw) => hw.availability !== 'discontinued')
}

export function sortHardwareByEfficiency(hardware: MiningHardware[]): MiningHardware[] {
  return [...hardware].sort((a, b) => a.efficiency - b.efficiency)
}

export function sortHardwareByHashrate(hardware: MiningHardware[]): MiningHardware[] {
  return [...hardware].sort((a, b) => b.hashrate - a.hashrate)
}

export function getResourcesByType(type: MiningResource['type']): MiningResource[] {
  return miningResources.filter((r) => r.type === type)
}

// Mining data for Ethereum Classic
// Pool data sourced from miningpoolstats.stream
// Hardware data from WhatToMine and manufacturer specs

export type PayoutScheme = 'PPS' | 'PPLNS' | 'PROP' | 'SOLO' | 'PPS+'

export interface MiningPool {
  id: string
  name: string
  website: string
  fee: number // percentage
  minPayout: number // ETC
  hashShare: number // approximate percentage of network hashrate
  payoutScheme: PayoutScheme[]
  servers: { region: string; url: string; port: number }[]
  features: string[]
  recommended?: boolean
  notes?: string
}

export interface NetworkStats {
  hashrate: string // TH/s
  difficulty: string
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
    id: 'bitmain',
    name: 'Bitmain',
    website: 'https://shop.bitmain.com/',
    description: 'Leading ASIC manufacturer producing the Antminer series. Known for high-quality mining hardware with global distribution.',
    type: 'ASIC',
    featured: true,
    products: ['Antminer E9', 'Antminer E9 Pro'],
  },
  {
    id: 'innosilicon',
    name: 'Innosilicon',
    website: 'https://www.innosilicon.com/',
    description: 'Premium ASIC manufacturer specializing in high-efficiency mining hardware. Produces A11 series for ETChash.',
    type: 'ASIC',
    featured: true,
    products: ['A11 Pro', 'A11 Pro ETH'],
  },
  {
    id: 'ipollo',
    name: 'iPollo',
    website: 'https://ipollo.com/',
    description: 'Innovative mining hardware company focused on energy-efficient ASIC miners for Ethereum Classic and other PoW chains.',
    type: 'ASIC',
    featured: true,
    products: ['iPollo V1', 'iPollo V1 Mini', 'iPollo G1'],
  },
  {
    id: 'jasminer',
    name: 'Jasminer',
    website: 'https://jasminer.com/',
    description: 'Manufacturer of ultra-efficient ASIC miners. The X4 series offers industry-leading power efficiency for ETChash mining.',
    type: 'ASIC',
    featured: true,
    products: ['Jasminer X4', 'Jasminer X16-Q'],
  },
  // GPU Manufacturers
  {
    id: 'nvidia',
    name: 'NVIDIA',
    website: 'https://www.nvidia.com/en-us/geforce/',
    description: 'Leading GPU manufacturer with GeForce RTX series. Popular for mining due to excellent driver support and efficiency.',
    type: 'GPU',
    featured: true,
    products: ['RTX 3080', 'RTX 3070', 'RTX 3060 Ti', 'RTX 4070'],
  },
  {
    id: 'amd',
    name: 'AMD',
    website: 'https://www.amd.com/en/graphics/radeon-rx-graphics',
    description: 'Major GPU manufacturer with Radeon RX series. Known for competitive mining performance and value.',
    type: 'GPU',
    featured: true,
    products: ['RX 6800', 'RX 6700 XT', 'RX 6600 XT'],
  },
]

// Mining Pools - ordered by approximate hashrate share
// Data from miningpoolstats.stream for ETC
export const miningPools: MiningPool[] = [
  {
    id: 'f2pool',
    name: 'F2Pool',
    website: 'https://www.f2pool.com/coin/etc',
    fee: 3,
    minPayout: 0.1,
    hashShare: 41,
    payoutScheme: ['PPS+'],
    servers: [
      { region: 'US', url: 'etc.f2pool.com', port: 8118 },
      { region: 'Asia', url: 'etc.f2pool.com', port: 8118 },
    ],
    features: ['Mobile app', 'Detailed statistics', 'Multiple payout options', 'Low minimum payout'],
    recommended: true,
    notes: 'Largest ETC mining pool by hashrate',
  },
  {
    id: '2miners',
    name: '2Miners',
    website: 'https://etc.2miners.com/',
    fee: 1,
    minPayout: 0.1,
    hashShare: 33,
    payoutScheme: ['PPLNS', 'SOLO'],
    servers: [
      { region: 'US', url: 'us-etc.2miners.com', port: 1010 },
      { region: 'EU', url: 'etc.2miners.com', port: 1010 },
      { region: 'Asia', url: 'asia-etc.2miners.com', port: 1010 },
    ],
    features: ['Low fees', 'Detailed statistics', 'Email notifications', 'Solo mining option'],
    recommended: true,
    notes: 'Popular choice with low fees and solo mining option',
  },
  {
    id: 'k1pool',
    name: 'K1Pool',
    website: 'https://k1pool.com/pool/etc',
    fee: 0.9,
    minPayout: 0.1,
    hashShare: 13,
    payoutScheme: ['PPLNS'],
    servers: [
      { region: 'Global', url: 'etc.k1pool.com', port: 6000 },
    ],
    features: ['Very low fees', 'Simple interface', 'Fast payouts'],
  },
  {
    id: 'poolin',
    name: 'Poolin',
    website: 'https://www.poolin.me/',
    fee: 2.5,
    minPayout: 0.1,
    hashShare: 5,
    payoutScheme: ['PPS+', 'PPLNS'],
    servers: [
      { region: 'Global', url: 'etc.ss.poolin.me', port: 1883 },
    ],
    features: ['Multi-coin support', 'Mobile app', 'Smart pool switching'],
  },
  {
    id: 'emcd',
    name: 'EMCD',
    website: 'https://emcd.io/pool/etc/',
    fee: 1.5,
    minPayout: 0.01,
    hashShare: 4,
    payoutScheme: ['PPLNS'],
    servers: [
      { region: 'EU', url: 'etc.emcd.io', port: 3030 },
    ],
    features: ['Low minimum payout', 'Built-in wallet', 'Earning statistics'],
  },
  {
    id: 'gtpool',
    name: 'GTPool',
    website: 'https://gtpool.io/',
    fee: 1,
    minPayout: 0.5,
    hashShare: 3,
    payoutScheme: ['PPLNS'],
    servers: [
      { region: 'Global', url: 'etc.gtpool.io', port: 5000 },
    ],
    features: ['Low fees', 'Transparent stats'],
  },
]

// Network stats - fallback values when live API unavailable
// Live data fetched from Blockscout API: https://etc.blockscout.com/api/v2/stats
// For live data, use /api/network endpoint or lib/blockscout.ts
// Updated: Jan 2026
export const networkStats: NetworkStats = {
  hashrate: '174 TH/s',
  difficulty: '2.47 PH',
  blockTime: '~13 seconds',
  blockReward: '~2.05 ETC',
  dailyBlocks: 6646,
  lastUpdated: 'Live from Blockscout',
}

// Mining Hardware - GPUs and ASICs
export const miningHardware: MiningHardware[] = [
  // ASICs
  {
    id: 'jasminer-x4',
    name: 'Jasminer X4',
    type: 'ASIC',
    brand: 'Jasminer',
    hashrate: 2500,
    power: 1200,
    efficiency: 0.48,
    releaseYear: 2022,
    availability: 'limited',
    notes: 'Most efficient ASIC for ETChash',
    buyLink: 'https://jasminer.com/',
  },
  {
    id: 'bitmain-e9',
    name: 'Antminer E9',
    type: 'ASIC',
    brand: 'Bitmain',
    hashrate: 2400,
    power: 1920,
    efficiency: 0.80,
    releaseYear: 2022,
    availability: 'available',
    notes: 'High hashrate, widely available',
    buyLink: 'https://shop.bitmain.com/',
  },
  {
    id: 'ipollo-v1',
    name: 'iPollo V1',
    type: 'ASIC',
    brand: 'iPollo',
    hashrate: 1550,
    power: 1240,
    efficiency: 0.80,
    releaseYear: 2022,
    availability: 'available',
    buyLink: 'https://ipollo.com/',
  },
  {
    id: 'innosilicon-a11-pro',
    name: 'Innosilicon A11 Pro',
    type: 'ASIC',
    brand: 'Innosilicon',
    hashrate: 1500,
    power: 2350,
    efficiency: 1.57,
    releaseYear: 2021,
    availability: 'discontinued',
    notes: 'Older model, less efficient',
    buyLink: 'https://www.innosilicon.com/',
  },
  // GPUs - NVIDIA
  {
    id: 'rtx-3080',
    name: 'NVIDIA RTX 3080',
    type: 'GPU',
    brand: 'NVIDIA',
    hashrate: 100,
    power: 225,
    efficiency: 2.25,
    releaseYear: 2020,
    availability: 'available',
    notes: 'Top consumer GPU for mining',
    buyLink: 'https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3080-3080ti/',
  },
  {
    id: 'rtx-3070',
    name: 'NVIDIA RTX 3070',
    type: 'GPU',
    brand: 'NVIDIA',
    hashrate: 60,
    power: 130,
    efficiency: 2.17,
    releaseYear: 2020,
    availability: 'available',
    notes: 'Excellent efficiency for consumer GPU',
    buyLink: 'https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3070-3070ti/',
  },
  {
    id: 'rtx-3060-ti',
    name: 'NVIDIA RTX 3060 Ti',
    type: 'GPU',
    brand: 'NVIDIA',
    hashrate: 60,
    power: 130,
    efficiency: 2.17,
    releaseYear: 2020,
    availability: 'available',
    buyLink: 'https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3060-3060ti/',
  },
  {
    id: 'rtx-4070',
    name: 'NVIDIA RTX 4070',
    type: 'GPU',
    brand: 'NVIDIA',
    hashrate: 55,
    power: 185,
    efficiency: 3.36,
    releaseYear: 2023,
    availability: 'available',
    notes: 'Newer generation, less efficient for mining',
    buyLink: 'https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4070-family/',
  },
  // GPUs - AMD
  {
    id: 'rx-6800',
    name: 'AMD RX 6800',
    type: 'GPU',
    brand: 'AMD',
    hashrate: 62,
    power: 150,
    efficiency: 2.42,
    releaseYear: 2020,
    availability: 'available',
    buyLink: 'https://www.amd.com/en/products/graphics/amd-radeon-rx-6800',
  },
  {
    id: 'rx-6700-xt',
    name: 'AMD RX 6700 XT',
    type: 'GPU',
    brand: 'AMD',
    hashrate: 46,
    power: 120,
    efficiency: 2.61,
    releaseYear: 2021,
    availability: 'available',
    buyLink: 'https://www.amd.com/en/products/graphics/amd-radeon-rx-6700-xt',
  },
  {
    id: 'rx-6600-xt',
    name: 'AMD RX 6600 XT',
    type: 'GPU',
    brand: 'AMD',
    hashrate: 32,
    power: 55,
    efficiency: 1.72,
    releaseYear: 2021,
    availability: 'available',
    notes: 'Best efficiency among consumer GPUs',
    buyLink: 'https://www.amd.com/en/products/graphics/amd-radeon-rx-6600-xt',
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
    description: 'Popular cross-platform miner with excellent AMD support',
  },
  {
    id: 'trex',
    name: 'T-Rex Miner',
    website: 'https://trex-miner.com/',
    platforms: ['Windows', 'Linux'],
    supports: ['NVIDIA'],
    fee: 1,
    opensource: false,
    description: 'Optimized for NVIDIA GPUs with web interface',
  },
  {
    id: 'teamredminer',
    name: 'TeamRedMiner',
    website: 'https://github.com/todxx/teamredminer',
    platforms: ['Windows', 'Linux'],
    supports: ['AMD'],
    fee: 1,
    opensource: false,
    description: 'Best performance for AMD GPUs',
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

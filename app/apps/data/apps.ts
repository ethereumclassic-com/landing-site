export interface App {
  name: string
  description: string
  category: 'DeFi' | 'Infrastructure' | 'Governance' | 'Tools'
  link: string
  featured?: boolean
}

export const apps: App[] = [
  // Featured Apps
  {
    name: 'ETCswap',
    description: 'Decentralized exchange with V2/V3/Launchpad. Swap, provide liquidity, and farm yields on Ethereum Classic.',
    category: 'DeFi',
    link: 'https://etcswap.org',
    featured: true,
  },
  {
    name: 'ClassicUSD',
    description: 'ETC-native stablecoin via Brale. Fiat on-ramp with ACH deposits and DeFi integration.',
    category: 'DeFi',
    link: 'https://classicusd.com',
    featured: true,
  },
  {
    name: 'Olympia DAO',
    description: 'Governance for the ETC ecosystem. Proposals, voting, and treasury management.',
    category: 'Governance',
    link: '#',
    featured: true,
  },

  // Infrastructure
  {
    name: 'Fukuii',
    description: 'First-class enterprise Ethereum Classic client with no upstream dependencies.',
    category: 'Infrastructure',
    link: 'https://github.com/etclabscore/core-geth',
  },
  {
    name: 'Core-Geth',
    description: 'Ethereum Classic client based on go-ethereum.',
    category: 'Infrastructure',
    link: 'https://github.com/etclabscore/core-geth',
  },
  {
    name: 'Besu',
    description: 'Enterprise-grade Ethereum client supporting ETC.',
    category: 'Infrastructure',
    link: 'https://github.com/hyperledger/besu',
  },

  // Tools
  {
    name: 'BlockScout',
    description: 'Ethereum Classic block explorer for viewing transactions, addresses, and contracts.',
    category: 'Tools',
    link: 'https://blockscout.com/etc/mainnet',
  },
  {
    name: 'Classic OS',
    description: 'Economic operating system with Mining OS, Portfolio tracking, DeFi automation, and Markets access.',
    category: 'Tools',
    link: 'https://app.classicos.org',
  },
  {
    name: 'ETC Nodes',
    description: 'Public RPC endpoints for Ethereum Classic network access.',
    category: 'Tools',
    link: 'https://ethereumclassic.org/network/endpoints',
  },

  // Additional DeFi
  {
    name: 'HebeSwap',
    description: 'Community-driven decentralized exchange on Ethereum Classic.',
    category: 'DeFi',
    link: 'https://hebeswap.com',
  },
]

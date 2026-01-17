export interface App {
  name: string
  slug: string
  description: string
  longDescription?: string
  category: 'DeFi' | 'Infrastructure' | 'Governance' | 'Tools'
  link: string
  featured?: boolean
  tags?: string[]
  features?: string[]
  stats?: {
    label: string
    value: string
  }[]
}

export const apps: App[] = [
  // Featured Apps - ETCswap Protocols
  {
    name: 'ETCswap V2',
    slug: 'etcswap-v2',
    description: 'Classic AMM protocol for token swaps and liquidity provision on Ethereum Classic.',
    longDescription: 'ETCswap V2 is the original automated market maker (AMM) protocol on Ethereum Classic. It enables permissionless token swaps using the proven constant product formula (x*y=k). Provide liquidity to earn trading fees, or swap tokens instantly without intermediaries.',
    category: 'DeFi',
    link: 'https://v2.etcswap.org',
    featured: true,
    tags: ['DEX', 'AMM', 'Liquidity', 'V2'],
    features: [
      'Constant product AMM',
      'Liquidity provision',
      'Trading fee rewards',
      'No KYC required',
      'Non-custodial',
      'Permissionless',
    ],
    stats: [
      { label: 'Type', value: 'DEX' },
      { label: 'Model', value: 'x*y=k' },
      { label: 'Network', value: 'ETC' },
    ],
  },
  {
    name: 'ETCswap V3',
    slug: 'etcswap-v3',
    description: 'Concentrated liquidity AMM with capital-efficient positions and lower slippage.',
    longDescription: 'ETCswap V3 introduces concentrated liquidity, allowing liquidity providers to allocate capital within custom price ranges. This results in significantly higher capital efficiency, lower slippage for traders, and potentially higher returns for LPs.',
    category: 'DeFi',
    link: 'https://etcswap.org',
    featured: true,
    tags: ['DEX', 'AMM', 'Concentrated Liquidity', 'V3'],
    features: [
      'Concentrated liquidity',
      'Custom price ranges',
      'Higher capital efficiency',
      'Lower slippage',
      'Multiple fee tiers',
      'Non-custodial',
    ],
    stats: [
      { label: 'Type', value: 'DEX' },
      { label: 'Model', value: 'CLMM' },
      { label: 'Network', value: 'ETC' },
    ],
  },
  {
    name: 'ETCswap Launchpad',
    slug: 'etcswap-launchpad',
    description: 'ILO platform with bonding curve launches. Tokens graduate to ETCswap V3 with burned liquidity.',
    longDescription: 'ETCswap Launchpad is an Initial Liquidity Offering (ILO) platform where anyone can create a token that launches on a bonding curve. As users buy in, the price rises along the curve. When a token meets its liquidity goal, it graduates to a full ETCswap V3 DEX pool. The raised liquidity is migrated and permanently burned into the pool, ensuring the project has a guaranteed tradable market with locked liquidity.',
    category: 'DeFi',
    link: 'https://etcswap.org/launchpad',
    tags: ['ILO', 'Bonding Curve', 'Token Launch', 'DeFi'],
    features: [
      'One-click token creation',
      'Bonding curve price discovery',
      'Liquidity goal graduation',
      'V3 pool migration',
      'Burned liquidity guarantee',
      'Permissionless launches',
    ],
    stats: [
      { label: 'Type', value: 'ILO' },
      { label: 'Curve', value: 'Bonding' },
      { label: 'Graduation', value: 'V3' },
    ],
  },
  {
    name: 'Classic USD',
    slug: 'classic-usd',
    description: 'Native ETC stablecoin. Redeem 1:1 with USD, USDC, or USDP. Interoperable across 22+ chains via Brale.',
    longDescription: 'Classic USD (USC) is the native stablecoin for Ethereum Classic, powered by Brale. USC is redeemable 1:1 with fiat USD as well as major stablecoins including Circle\'s USDC and Paxos USDP, giving it access to deep liquidity across the EVM ecosystem. As a Brale-issued asset, USC is interoperable across 22+ supported chains, making it a bridge between ETC and the broader crypto economy.',
    category: 'DeFi',
    link: 'https://classicusd.com',
    featured: true,
    tags: ['Stablecoin', 'USD', 'Multi-chain', 'DeFi'],
    features: [
      '1:1 USD redemption',
      'USDC & USDP interop',
      '22+ chain support',
      'Brale-powered',
      'Deep EVM liquidity',
      'Instant settlement',
    ],
    stats: [
      { label: 'Peg', value: '1:1 USD' },
      { label: 'Chains', value: '22+' },
      { label: 'Symbol', value: 'USC' },
    ],
  },
  {
    name: 'Olympia DAO',
    slug: 'olympia-dao',
    description: 'Governance for the ETC ecosystem. Proposals, voting, and treasury management.',
    longDescription: 'Olympia DAO is the decentralized governance framework for the Ethereum Classic ecosystem. Token holders can create proposals, vote on key decisions, and participate in treasury management. Olympia DAO ensures the community has a voice in the future direction of ETC.',
    category: 'Governance',
    link: 'https://olympiadao.org/',
    featured: true,
    tags: ['DAO', 'Voting', 'Treasury'],
    features: [
      'On-chain voting',
      'Proposal creation',
      'Treasury management',
      'Transparent governance',
      'Community-driven',
      'Weighted voting',
    ],
    stats: [
      { label: 'Type', value: 'DAO' },
      { label: 'Voting', value: 'On-chain' },
      { label: 'Status', value: 'Alpha' },
    ],
  },

  // Infrastructure
  {
    name: 'Fukuii',
    slug: 'fukuii',
    description: 'Enterprise-grade ETC client with no upstream dependencies. The only client native to the ETC stack.',
    longDescription: 'Fukuii is the only Ethereum Classic client built from scratch with ETC as the primary chain and no upstream dependencies. A continuation of the Mantis client, Fukuii is maintained by Chippr Robotics with modern Scala 3 and JDK 21. Features include bootstrap checkpoints for fast sync, MCP integration for AI-assisted operations, and production-ready Docker images with signed attestations.',
    category: 'Infrastructure',
    link: 'https://github.com/chippr-robotics/fukuii',
    featured: true,
    tags: ['Node', 'Client', 'Enterprise', 'Native', 'Scala'],
    features: [
      'No upstream dependencies',
      'ETC-native implementation',
      'Fast sync with bootstrap checkpoints',
      'MCP integration for AI control',
      'Full JSON-RPC API',
      'Signed Docker images',
    ],
    stats: [
      { label: 'Type', value: 'Native' },
      { label: 'Target', value: 'Enterprise' },
      { label: 'Status', value: 'Alpha' },
    ],
  },
  {
    name: 'Core-Geth',
    slug: 'core-geth',
    description: 'Current primary ETC client based on go-ethereum. In sunsetting phase as upstream deprecates PoW.',
    longDescription: 'Core-Geth is currently the most widely used Ethereum Classic client, based on the go-ethereum codebase. However, it is entering a sunsetting phase as the upstream Geth project has deprecated Proof of Work support in favor of the Proof of Stake ecosystem. Node operators are encouraged to evaluate migration to Fukuii for long-term stability.',
    category: 'Infrastructure',
    link: 'https://github.com/etclabscore/core-geth',
    tags: ['Node', 'Client', 'Go', 'Legacy'],
    features: [
      'Go-ethereum based',
      'Current primary client',
      'Full node support',
      'JSON-RPC API',
      'Well-documented',
      'Sunsetting phase',
    ],
    stats: [
      { label: 'Type', value: 'Fork' },
      { label: 'Base', value: 'Geth' },
      { label: 'Status', value: 'Sunsetting' },
    ],
  },
  {
    name: 'Besu',
    slug: 'besu',
    description: 'Deprecated ETC client. Used for testing and implementation reference. Does not support mining.',
    longDescription: 'Hyperledger Besu is a deprecated Ethereum Classic client that was used primarily for testing and implementation reference. Besu does not support mining operations and is not recommended for production use on ETC. It served as a valuable test client for protocol implementations.',
    category: 'Infrastructure',
    link: 'https://github.com/hyperledger/besu',
    tags: ['Node', 'Client', 'Testing', 'Deprecated'],
    features: [
      'Implementation reference',
      'Testing purposes',
      'Java-based',
      'No mining support',
      'Protocol validation',
      'Deprecated status',
    ],
    stats: [
      { label: 'Type', value: 'Reference' },
      { label: 'Mining', value: 'No' },
      { label: 'Status', value: 'Deprecated' },
    ],
  },

  // Tools
  {
    name: 'BlockScout',
    slug: 'blockscout',
    description: 'Ethereum Classic block explorer for viewing transactions, addresses, and contracts.',
    longDescription: 'BlockScout is a full-featured block explorer for Ethereum Classic. View transactions, addresses, smart contracts, and network statistics. BlockScout provides transparency and verification for all on-chain activity.',
    category: 'Tools',
    link: 'https://blockscout.com/etc/mainnet',
    tags: ['Explorer', 'Analytics', 'Verification'],
    features: [
      'Transaction viewer',
      'Address lookup',
      'Contract verification',
      'Token tracking',
      'API access',
      'Open source',
    ],
  },
  {
    name: 'Classic OS',
    slug: 'classic-os',
    description: 'Economic Control Center with Mining OS, Portfolio tracking, DeFi automation, and Markets access.',
    longDescription: 'Classic OS is not a wallet - it\'s an Economic Control Center that works with your existing wallet. Manage capital flows, track positions, and orchestrate automated strategies to earn. Modules include Produce (Mining OS), Portfolio, Deploy (DeFi automation), and Markets.',
    category: 'Tools',
    link: 'https://app.classicos.org',
    tags: ['Dashboard', 'Mining', 'DeFi', 'Portfolio'],
    features: [
      'Mining OS integration',
      'Portfolio tracking',
      'DeFi automation',
      'Market access',
      'Multi-wallet support',
      'Strategy orchestration',
    ],
    stats: [
      { label: 'Modules', value: '4' },
      { label: 'Wallets', value: 'Any' },
      { label: 'Type', value: 'Dashboard' },
    ],
  },
  {
    name: 'ETC Nodes',
    slug: 'etc-nodes',
    description: 'Public RPC endpoints for Ethereum Classic network access.',
    longDescription: 'ETC Nodes provides public RPC endpoints for developers and applications to connect to the Ethereum Classic network. These endpoints are maintained by the community and provide reliable access to the ETC blockchain.',
    category: 'Tools',
    link: 'https://ethereumclassic.org/network/endpoints',
    tags: ['RPC', 'API', 'Endpoints'],
    features: [
      'Public RPC access',
      'Mainnet support',
      'Testnet support',
      'Free tier available',
      'High availability',
      'Community maintained',
    ],
  },
]

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug)
}

export function getAppsByCategory(category: App['category']): App[] {
  return apps.filter((app) => app.category === category)
}

export function getFeaturedApps(): App[] {
  return apps.filter((app) => app.featured)
}

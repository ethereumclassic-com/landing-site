export interface App {
  name: string
  slug: string
  description: string
  longDescription?: string
  category: 'DeFi' | 'Infrastructure' | 'Governance' | 'Tools' | 'Payments' | 'NFT' | 'Games'
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
    description: 'Governance infrastructure for the ETC ecosystem. Proposals, voting, and treasury management.',
    longDescription: 'Olympia DAO is the decentralized governance framework for the Ethereum Classic ecosystem. Token holders can create proposals, vote on key decisions, and participate in treasury management. Olympia DAO ensures the community has a voice in the future direction of ETC.',
    category: 'Infrastructure',
    link: 'https://olympiadao.org/',
    tags: ['DAO', 'Voting', 'Treasury', 'Governance'],
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
      { label: 'Status', value: 'In Development' },
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
  {
    name: 'Blockscout',
    slug: 'blockscout',
    description: 'Official ETC block explorer. View transactions, verify contracts, and access blockchain data via API.',
    longDescription: 'Blockscout is the official block explorer for Ethereum Classic, providing comprehensive blockchain transparency. Browse transactions, verify smart contracts, track tokens, and access on-chain data through both the web interface and REST/RPC APIs. Blockscout is open source and community-maintained.',
    category: 'Infrastructure',
    link: 'https://etc.blockscout.com',
    featured: true,
    tags: ['Explorer', 'API', 'Verification', 'Analytics'],
    features: [
      'Transaction explorer',
      'Contract verification',
      'Token tracking',
      'REST API access',
      'JSON-RPC endpoint',
      'Open source',
    ],
    stats: [
      { label: 'Type', value: 'Explorer' },
      { label: 'API', value: 'REST + RPC' },
      { label: 'Status', value: 'Active' },
    ],
  },
  {
    name: 'Rivet',
    slug: 'rivet',
    description: 'Primary public RPC provider for Ethereum Classic. Fast, reliable blockchain access for apps and users.',
    longDescription: 'Rivet provides the primary public RPC endpoint for Ethereum Classic at etc.rivet.link. It offers fast, reliable access to the ETC blockchain for developers, dApps, and wallet users. Rivet is the recommended RPC endpoint for adding ETC to wallets like MetaMask.',
    category: 'Infrastructure',
    link: 'https://rivet.cloud',
    featured: true,
    tags: ['RPC', 'API', 'Endpoint', 'Provider'],
    features: [
      'Public RPC endpoint',
      'High availability',
      'Low latency',
      'Wallet compatible',
      'dApp ready',
      'Free access',
    ],
    stats: [
      { label: 'Endpoint', value: 'etc.rivet.link' },
      { label: 'Type', value: 'RPC' },
      { label: 'Status', value: 'Active' },
    ],
  },

  // Tools
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

  // Payments & Financial Infrastructure
  {
    name: 'Brale',
    slug: 'brale',
    description: 'Fiat on/off ramp for ClassicUSD (USC). ACH bank transfers to purchase or redeem stablecoins.',
    longDescription: 'Brale is the issuer and redemption platform for ClassicUSD (USC). Connect your bank account to purchase USC via ACH transfer, or redeem USC for USD directly to your bank. Brale provides the critical fiat bridge for the ETC ecosystem, enabling users to move between traditional finance and on-chain assets without centralized exchanges.',
    category: 'Payments',
    link: 'https://brale.xyz',
    featured: true,
    tags: ['Fiat', 'On-Ramp', 'Off-Ramp', 'ACH', 'Stablecoin'],
    features: [
      'ACH bank transfers',
      'USD to USC conversion',
      'USC to USD redemption',
      'No CEX required',
      'Direct bank connection',
      'USC issuer',
    ],
    stats: [
      { label: 'Type', value: 'Fiat Bridge' },
      { label: 'Method', value: 'ACH' },
      { label: 'Asset', value: 'USC' },
    ],
  },
  {
    name: 'Rain Cards',
    slug: 'rain-cards',
    description: 'Spend ETC and USC at any point-of-sale terminal with an on-chain wallet-funded debit card.',
    longDescription: 'Rain Cards lets you spend your ETC or ClassicUSD holdings directly at any merchant that accepts debit cards. Your card is funded from your on-chain wallet, and Rain handles the conversion at checkout. No need to sell to an exchange first - spend your crypto wherever cards are accepted.',
    category: 'Payments',
    link: 'https://rain.xyz',
    featured: true,
    tags: ['Debit Card', 'Spending', 'Payments', 'POS'],
    features: [
      'Wallet-funded card',
      'Instant conversion',
      'Global acceptance',
      'ETC & USC support',
      'No pre-selling required',
      'Mobile app',
    ],
    stats: [
      { label: 'Type', value: 'Debit Card' },
      { label: 'Assets', value: 'ETC, USC' },
      { label: 'Acceptance', value: 'Global' },
    ],
  },
  {
    name: '1Konto',
    slug: '1konto',
    description: 'OTC desk for ClassicUSD. Institutional-grade liquidity for large ETC transactions.',
    longDescription: '1Konto provides over-the-counter (OTC) trading services for ClassicUSD, enabling institutional investors and high-volume traders to move large amounts of liquidity on and off Ethereum Classic. Get personalized service, competitive rates, and direct USD settlement for significant transactions.',
    category: 'Payments',
    link: 'https://1konto.com',
    tags: ['OTC', 'Institutional', 'Liquidity', 'Trading'],
    features: [
      'Large volume trades',
      'Personalized service',
      'Competitive rates',
      'USD settlement',
      'Institutional grade',
      'ClassicUSD focus',
    ],
    stats: [
      { label: 'Type', value: 'OTC Desk' },
      { label: 'Target', value: 'Institutional' },
      { label: 'Asset', value: 'USC' },
    ],
  },
  {
    name: 'Coinflow',
    slug: 'coinflow',
    description: 'Global payment infrastructure for businesses to accept USC payments and settle instantly.',
    longDescription: 'Coinflow provides payment infrastructure that empowers businesses to accept ClassicUSD (USC) payments, settle funds, and expand globally. Instant, secure, and frictionless payment processing for merchants who want to tap into the ETC ecosystem.',
    category: 'Payments',
    link: 'https://coinflow.cash',
    tags: ['Payments', 'Merchant', 'Business', 'Settlement'],
    features: [
      'Accept USC payments',
      'Instant settlement',
      'Global reach',
      'Merchant tools',
      'Business integration',
      'Secure processing',
    ],
    stats: [
      { label: 'Type', value: 'Payment Processor' },
      { label: 'Target', value: 'Business' },
      { label: 'Asset', value: 'USC' },
    ],
  },

  // NFT & Collectibles
  {
    name: 'ClassicPunks',
    slug: 'classic-punks',
    description: 'The first CryptoPunks-style NFT collection native to Ethereum Classic. 10,000 unique pixel art characters.',
    longDescription: 'ClassicPunks is the original generative NFT collection on Ethereum Classic, featuring 10,000 unique pixel art characters. Each punk has randomly generated attributes and traits, making them collectible digital art pieces on the immutable ETC blockchain.',
    category: 'NFT',
    link: 'https://classicpunks.io',
    featured: true,
    tags: ['NFT', 'PFP', 'Collectibles', 'Art'],
    features: [
      '10,000 unique punks',
      'On-chain metadata',
      'Generative art',
      'Community owned',
      'Tradeable on DEX',
      'Immutable on ETC',
    ],
    stats: [
      { label: 'Collection', value: '10,000' },
      { label: 'Type', value: 'PFP' },
      { label: 'Chain', value: 'ETC' },
    ],
  },
  {
    name: 'ETC Art Gallery',
    slug: 'etc-art-gallery',
    description: 'Curated NFT marketplace for digital art on Ethereum Classic. Discover artists and unique creations.',
    longDescription: 'ETC Art Gallery is a curated marketplace for digital artists to mint, showcase, and sell their NFT creations on Ethereum Classic. The platform emphasizes quality over quantity, featuring hand-picked artists and unique digital artwork.',
    category: 'NFT',
    link: 'https://etcartgallery.com',
    tags: ['NFT', 'Marketplace', 'Art', 'Artists'],
    features: [
      'Curated artists',
      'Low minting fees',
      'Artist royalties',
      'Collection support',
      'Secondary sales',
      'Community curation',
    ],
    stats: [
      { label: 'Type', value: 'Marketplace' },
      { label: 'Focus', value: 'Art' },
      { label: 'Chain', value: 'ETC' },
    ],
  },
  {
    name: 'TokenMint',
    slug: 'token-mint',
    description: 'No-code NFT minting platform. Create ERC-721 and ERC-1155 collections without writing code.',
    longDescription: 'TokenMint enables anyone to create NFT collections on Ethereum Classic without writing a single line of code. Launch ERC-721 single-edition NFTs or ERC-1155 multi-edition collections with customizable metadata, royalties, and mint settings.',
    category: 'NFT',
    link: 'https://tokenmint.etc',
    tags: ['NFT', 'Minting', 'No-Code', 'Creator Tools'],
    features: [
      'No-code minting',
      'ERC-721 support',
      'ERC-1155 support',
      'Custom metadata',
      'Royalty settings',
      'IPFS integration',
    ],
    stats: [
      { label: 'Type', value: 'Minting Tool' },
      { label: 'Standards', value: '721/1155' },
      { label: 'Code', value: 'None' },
    ],
  },

  // Games
  {
    name: 'FairWins Casino',
    slug: 'fairwins',
    description: 'Provably fair on-chain casino with classic games. Verifiable randomness powered by Chainlink VRF.',
    longDescription: 'FairWins Casino offers provably fair gambling games on Ethereum Classic. Every game outcome uses Chainlink VRF for verifiable randomness, ensuring neither the house nor players can manipulate results. Play classic casino games with complete transparency.',
    category: 'Games',
    link: 'https://fairwins.etc',
    featured: true,
    tags: ['Casino', 'Gaming', 'Provably Fair', 'VRF'],
    features: [
      'Provably fair',
      'Chainlink VRF',
      'Classic games',
      'Instant payouts',
      'On-chain verification',
      'Low house edge',
    ],
    stats: [
      { label: 'Type', value: 'Casino' },
      { label: 'RNG', value: 'VRF' },
      { label: 'Fairness', value: 'Verifiable' },
    ],
  },
  {
    name: 'CryptoQuest ETC',
    slug: 'cryptoquest-etc',
    description: 'Play-to-earn RPG adventure game. Collect NFT heroes, battle monsters, and earn ETC rewards.',
    longDescription: 'CryptoQuest ETC is a blockchain-based RPG where players collect NFT heroes, explore dungeons, battle monsters, and earn ETC rewards. All game assets are on-chain NFTs that players truly own and can trade freely.',
    category: 'Games',
    link: 'https://cryptoquest.etc',
    tags: ['RPG', 'Play-to-Earn', 'NFT', 'Adventure'],
    features: [
      'Play-to-earn',
      'NFT heroes',
      'PvE battles',
      'Item crafting',
      'Guild system',
      'ETC rewards',
    ],
    stats: [
      { label: 'Type', value: 'RPG' },
      { label: 'Model', value: 'P2E' },
      { label: 'Assets', value: 'NFT' },
    ],
  },
  {
    name: 'ETC Lottery',
    slug: 'etc-lottery',
    description: 'Decentralized lottery with transparent drawings. Weekly jackpots and instant-win games.',
    longDescription: 'ETC Lottery is a decentralized lottery platform with transparent, on-chain drawings. Participate in weekly jackpot draws or play instant-win games. All results are verifiable on-chain, ensuring complete fairness.',
    category: 'Games',
    link: 'https://etclottery.io',
    tags: ['Lottery', 'Gaming', 'Jackpot', 'On-chain'],
    features: [
      'Weekly draws',
      'Instant-win games',
      'Transparent drawings',
      'On-chain results',
      'Auto payouts',
      'Community pool',
    ],
    stats: [
      { label: 'Type', value: 'Lottery' },
      { label: 'Draws', value: 'Weekly' },
      { label: 'Verification', value: 'On-chain' },
    ],
  },
  {
    name: 'ChainBet',
    slug: 'chainbet',
    description: 'Prediction markets and sports betting on ETC. Create markets or bet on outcomes.',
    longDescription: 'ChainBet enables users to create and participate in prediction markets on Ethereum Classic. Bet on sports, crypto prices, or any verifiable outcome. Markets are settled by oracle data, ensuring trustless resolution.',
    category: 'Games',
    link: 'https://chainbet.etc',
    tags: ['Betting', 'Predictions', 'Sports', 'Markets'],
    features: [
      'Prediction markets',
      'Sports betting',
      'Oracle settlement',
      'Market creation',
      'Liquidity pools',
      'Multiple outcomes',
    ],
    stats: [
      { label: 'Type', value: 'Betting' },
      { label: 'Settlement', value: 'Oracle' },
      { label: 'Markets', value: 'User-created' },
    ],
  },

  // Additional Tools
  {
    name: 'ClearPath',
    slug: 'clearpath',
    description: 'Transaction tracer and analytics. Visualize fund flows and track wallet activity on ETC.',
    longDescription: 'ClearPath provides advanced transaction tracing and analytics for Ethereum Classic. Visualize fund flows between addresses, track wallet activity over time, and generate reports for compliance or research purposes.',
    category: 'Tools',
    link: 'https://clearpath.etc',
    tags: ['Analytics', 'Tracing', 'Compliance', 'Research'],
    features: [
      'Transaction tracing',
      'Fund flow visualization',
      'Wallet analytics',
      'Report generation',
      'Address labels',
      'Export data',
    ],
    stats: [
      { label: 'Type', value: 'Analytics' },
      { label: 'Focus', value: 'Tracing' },
      { label: 'Chain', value: 'ETC' },
    ],
  },
  {
    name: 'GasWatch',
    slug: 'gaswatch',
    description: 'Real-time gas price monitoring and alerts. Get notified when gas prices drop.',
    longDescription: 'GasWatch monitors Ethereum Classic gas prices in real-time and sends alerts when prices reach your target. Set custom thresholds and receive notifications via email, Telegram, or Discord when it\'s optimal to transact.',
    category: 'Tools',
    link: 'https://gaswatch.etc',
    tags: ['Gas', 'Monitoring', 'Alerts', 'Notifications'],
    features: [
      'Real-time monitoring',
      'Price alerts',
      'Email notifications',
      'Telegram bot',
      'Discord integration',
      'Historical data',
    ],
    stats: [
      { label: 'Type', value: 'Monitor' },
      { label: 'Alerts', value: 'Multi-channel' },
      { label: 'Chain', value: 'ETC' },
    ],
  },
  {
    name: 'Contract Wizard',
    slug: 'contract-wizard',
    description: 'No-code smart contract builder. Deploy tokens, NFTs, and DAOs without coding.',
    longDescription: 'Contract Wizard is a no-code platform for deploying smart contracts on Ethereum Classic. Create ERC-20 tokens, NFT collections, multi-sig wallets, and simple DAOs using an intuitive visual interface.',
    category: 'Tools',
    link: 'https://contractwizard.etc',
    tags: ['No-Code', 'Contracts', 'Tokens', 'Deploy'],
    features: [
      'No-code deployment',
      'ERC-20 tokens',
      'NFT contracts',
      'Multi-sig wallets',
      'DAO templates',
      'Verified source',
    ],
    stats: [
      { label: 'Type', value: 'Builder' },
      { label: 'Templates', value: '10+' },
      { label: 'Code', value: 'None' },
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

export function getNFTApps(): App[] {
  return apps.filter((app) => app.category === 'NFT')
}

export function getGamesApps(): App[] {
  return apps.filter((app) => app.category === 'Games')
}

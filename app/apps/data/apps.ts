import { FUKUII_DESCRIPTION, FUKUII_FEATURES, FUKUII_HOMEPAGE_URL, FUKUII_STATUS, FUKUII_SUMMARY } from '@/lib/fukuii'

export interface App {
  name: string
  slug: string
  description: string
  longDescription?: string
  category: 'DeFi' | 'Infrastructure' | 'Governance' | 'Tools' | 'Payments'
  link: string
  internalUrl?: string
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
    link: 'https://launchpad.etcswap.org',
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
    description: 'The proposed governance of the Olympia Treasury: CoreNFT members voting on funding proposals, a public timelock, and Ecosystem Growth DAOs.',
    longDescription: 'Olympia DAO is part of the Olympia proposal for Ethereum Classic, whose ECIPs are drafts and whose activation block is TBD. As ECIP-1113 specifies it, Olympia DAO would be the only route by which the Treasury\'s balance could be spent: a Governor built from stock OpenZeppelin modules, the Timelock behind the Treasury proxy, and CoreNFT, a soulbound token carrying one vote per member that cannot be transferred or delegated. The Treasury would be funded by the EIP-1559 base fee, not by block rewards or inflation. Olympia DAO could seed Ecosystem Growth DAOs one season at a time (ECIP-1117), and the interface members vote through would screen each proposal\'s recipients against a sanctions list (ECIP-1119). Protocol change remains with the ECIP process.',
    category: 'Governance',
    link: 'https://olympiadao.org/',
    internalUrl: '/olympia',
    tags: ['DAO', 'Treasury', 'Governance', 'Base Fee', 'Proposal'],
    features: [
      'A treasury funded by the EIP-1559 base fee',
      'CoreNFT membership, one vote per member',
      'Funding proposals behind a public timelock',
      'Ecosystem Growth DAOs, seeded season by season',
      'Sanctions screening in the voting interface',
      'No admin key, multisig or committee',
    ],
    stats: [
      { label: 'Status', value: 'Proposed' },
      { label: 'Governance', value: 'Membership-Based' },
      { label: 'Treasury', value: 'Base-Fee Funded' },
    ],
  },

  // Infrastructure. Core-Geth is the recommended client, so it leads and is featured; Fukuii is
  // the alternative to try. Each links its page under /build/clients, which outlives any one fork.
  {
    name: 'Core-Geth',
    slug: 'core-geth',
    description: 'An Ethereum Classic execution client and public-good Go reference client, released and maintained in the ethereumclassic GitHub organization, and recommended.',
    longDescription: 'Core-Geth is an Ethereum Classic execution client and public-good Go reference client: a go-ethereum derivative released and maintained in the ethereumclassic GitHub organization, not a native ETC client, and not a plugin. It is the recommended client to run. The v1.12 line went 21 months without security maintenance; the v1.13 line closes every client CVE the audits found, including the flaw used to crash Core-Geth v1.12 bootnodes in March 2026, and is built with a supported Go toolchain.',
    category: 'Infrastructure',
    link: 'https://coregeth.com',
    internalUrl: '/build/clients/core-geth',
    featured: true,
    tags: ['Node', 'Client', 'Go', 'Derivative'],
    features: [
      'A go-ethereum derivative maintained for ETC',
      'Ethereum Classic, Mordor and private chains from one binary',
      'Snap, full and archive sync',
      'JSON-RPC over HTTP, WebSocket and IPC',
      'Linux, macOS and Windows, on x86-64 and Arm, plus a container image',
      'Built-in Etchash mining',
    ],
    stats: [
      { label: 'Type', value: 'Derivative' },
      { label: 'Base', value: 'Geth' },
      { label: 'Role', value: 'Recommended' },
    ],
  },
  {
    name: 'Fukuii',
    slug: 'fukuii',
    description: FUKUII_SUMMARY,
    longDescription: FUKUII_DESCRIPTION,
    category: 'Infrastructure',
    link: FUKUII_HOMEPAGE_URL,
    internalUrl: '/build/clients/fukuii',
    tags: ['Node', 'Client', 'Scala', 'Multi-EVM'],
    features: FUKUII_FEATURES,
    stats: [
      { label: 'Language', value: 'Scala 3' },
      { label: 'Runtime', value: 'JVM' },
      { label: 'Status', value: FUKUII_STATUS },
    ],
  },
  // Besu has no card here: ETC support reaches it only through the plugin framework, listed
  // with the node clients. /apps/besu redirects to that plugin's page.
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

  // Tools
  {
    name: 'ETC Nodes',
    slug: 'etc-nodes',
    description: 'Public RPC endpoints for Ethereum Classic network access.',
    longDescription: 'ETC Nodes lists public RPC endpoints for developers and applications to connect to the Ethereum Classic network and the Mordor testnet. An endpoint is listed only after it answers eth_chainId with the right chain ID.',
    category: 'Tools',
    link: 'https://ethereumclassic.com/build/networks',
    tags: ['RPC', 'API', 'Endpoints'],
    features: [
      'Public RPC access',
      'Mainnet support',
      'Mordor testnet support',
      'Each endpoint listed only after it answers with the right chain ID',
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


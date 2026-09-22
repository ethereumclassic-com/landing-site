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
    description: 'On-chain governance for Ethereum Classic — basefee-funded treasury, Olympia DAO membership voting, and futarchy prediction markets.',
    longDescription: 'Olympia is active protocol development for Ethereum Classic — EVM modernization, maintained clients, and funded development through sustainable basefee revenue. The Treasury is funded by EIP-1559 basefee revenue, not block rewards or inflation. Governance operates on two layers, and only one is binding: the Olympia DAO uses non-transferable membership NFTs for binding protocol decisions (security maintenance, EVM parity, client funding, treasury allocation), while futarchy prediction markets are an open signal layer that informs those decisions without determining or executing them. Multiple independent client implementations ensure network resilience. All governance actions are on-chain and auditable.',
    category: 'Governance',
    link: 'https://olympiadao.org/',
    internalUrl: '/olympia',
    tags: ['DAO', 'Treasury', 'Governance', 'Basefee', 'Futarchy'],
    features: [
      'Basefee-funded protocol treasury',
      'Olympia DAO membership NFT voting',
      'Futarchy prediction markets',
      'On-chain proposal lifecycle',
      'Configurable timelock security',
      'Three-layer sanctions compliance',
    ],
    stats: [
      { label: 'Clients', value: '2' },
      { label: 'Governance', value: 'Membership-Based' },
      { label: 'Treasury', value: 'Protocol-Funded' },
    ],
  },

  // Infrastructure
  {
    name: 'Fukuii',
    slug: 'fukuii',
    description: "Ethereum Classic's first native client — an EVM execution client in Scala 3 LTS on the JVM. Several networks at once in one JVM process, each fully isolated.",
    longDescription: "Fukuii is Ethereum Classic's first native client, built ground-up for ETC rather than derived from an Ethereum client. It is an EVM execution client in Scala 3 LTS on Pekko Typed Actors, running on the JVM. One binary runs several networks at once in one JVM process, each isolated with its own state, its own metrics registry, and its own configuration — a further network is configuration, not a new client. Consensus is selected per deployment behind one interface: native Proof-of-Work for ETC mainnet and Mordor, or Proof-of-Stake with a built-in consensus layer, so one process is a complete Proof-of-Stake node; an external consensus client over the Engine API V1–V4 is the alternative. Fukuii ships an MCP server exposing node state to AI agents. It is enterprise-grade by way of the JVM rather than by a separate edition: JVM-native infrastructure end to end for institutions already running on the JVM, with no foreign-language bridge, so JFR, async-profiler, JMX and heap dumps work exactly as they do on any other JVM process. Prometheus metrics, Grafana dashboards, and liveness and readiness endpoints ship in the binary, alongside concurrent multi-instance execution and external-signer/HSM custody integration. Apache 2.0, with Cosign-signed build provenance and a CycloneDX SBOM on release artifacts. Maintained by The Fukuii Authors (Chippr Robotics LLC and White B0x Inc.).",
    category: 'Infrastructure',
    link: 'https://fukuii.com',
    featured: true,
    tags: ['Node', 'Client', 'Enterprise', 'Scala', 'Multi-Network'],
    features: [
      'Several networks at once in one JVM process, each fully isolated',
      'Consensus selected per deployment: native Proof-of-Work, or Proof-of-Stake with a built-in consensus layer',
      'Engine API V1–V4 for driving execution from an external consensus client',
      'SNAP, fast, and regular sync; JSON-RPC and GraphQL',
      'MCP server exposing node state to AI agents',
      'JVM-native end to end — JFR, async-profiler, JMX and heap dumps, no FFI bridge',
      'External-signer/HSM custody integration and concurrent multi-instance execution',
      'Cosign-signed build provenance and a CycloneDX SBOM on release artifacts',
    ],
    stats: [
      { label: 'Language', value: 'Scala 3' },
      { label: 'Runtime', value: 'JVM' },
      { label: 'Status', value: 'Alpha' },
    ],
  },
  {
    name: 'Core-Geth',
    slug: 'core-geth',
    description: 'A go-ethereum derivative released and maintained for Ethereum Classic in the ethereumclassic organization.',
    longDescription: 'Core-Geth is a go-ethereum derivative released and maintained for Ethereum Classic in the ethereumclassic organization — not a native ETC client, and not a plugin. It is the widely deployed Go client for the network. The v1.12.x line went 21 months without security maintenance; v1.13.0, prepared by White B0x, fixes six CVEs, one of them exploited against ETC mainnet bootnodes in March 2026, and moves the client to Go 1.26.',
    category: 'Infrastructure',
    link: 'https://coregeth.com',
    tags: ['Node', 'Client', 'Go', 'Derivative'],
    features: [
      'A go-ethereum derivative maintained for ETC',
      'Full node support',
      'JSON-RPC API',
      'Built-in mining support',
      'Well-documented',
    ],
    stats: [
      { label: 'Type', value: 'Derivative' },
      { label: 'Base', value: 'Geth' },
      { label: 'Role', value: 'Maintained' },
    ],
  },
  {
    name: 'Besu',
    slug: 'besu',
    description: 'An enterprise-grade Ethereum client in Java. Ethereum Classic support is delivered as a plugin that adds it into the upstream codebase.',
    longDescription: 'Besu is an enterprise-grade Ethereum client written in Java. Ethereum Classic support reaches it as a plugin that adds it into the upstream codebase rather than as a separate ETC client, so it adds ETC chain support to the execution layer only — no mining, no Proof-of-Work consensus. That makes it a fit for non-mining infrastructure such as exchanges, RPC providers, block explorers, and indexers, and for cross-client protocol validation.',
    category: 'Infrastructure',
    link: 'https://github.com/besu-eth/besu',
    tags: ['Node', 'Plugin', 'Testing', 'Java'],
    features: [
      'ETC support via an execution plugin',
      'Implementation reference',
      'Java-based',
      'No mining support',
      'Protocol validation',
      'Enterprise APIs',
    ],
    stats: [
      { label: 'Type', value: 'Plugin' },
      { label: 'Mining', value: 'No' },
      { label: 'Language', value: 'Java' },
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

  // Tools
  {
    name: 'ETC Nodes',
    slug: 'etc-nodes',
    description: 'Public RPC endpoints for Ethereum Classic network access.',
    longDescription: 'ETC Nodes provides public RPC endpoints for developers and applications to connect to the Ethereum Classic network. These endpoints are maintained by the community and provide reliable access to the ETC blockchain.',
    category: 'Tools',
    link: 'https://ethereumclassic.com/network/endpoints',
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


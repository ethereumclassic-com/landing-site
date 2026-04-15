// Olympia Network Upgrade — Core Data
//
// COPY SAFETY: Treasury is funded by EIP-1559 basefee, NOT block rewards.
// Block rewards (2.048 ETC/block, Era 4) remain untouched.

// ============================================================================
// Activation Block — Change this ONE value when the block number is set.
// All countdown components across the site read from here.
// ============================================================================
export const OLYMPIA_ACTIVATION_BLOCK: number | null = null

export const OLYMPIA_AVG_BLOCK_TIME_SECONDS = 13

// ============================================================================
// Client Upgrade Data
// ============================================================================

export interface ClientUpgrade {
  id: string
  name: string
  language: string
  languageColor: string
  description: string
  role: 'primary' | 'enterprise' | 'maintenance'
  roleLabel: string
  currentVersion: string
  olympiaVersion: string
  githubUrl: string
  docsUrl: string
  dockerImage: string
  platforms: string[]
  installCommands: { platform: string; command: string }[]
  verifyCommand: string
  prerequisites: string[]
}

export const clients: ClientUpgrade[] = [
  {
    id: 'fukuii',
    name: 'Fukuii',
    language: 'Scala',
    languageColor: '#DC322F',
    description:
      'Next-generation ETC client purpose-built for Ethereum Classic. The recommended client for node operators upgrading to Olympia.',
    role: 'primary',
    roleLabel: 'Recommended',
    currentVersion: 'v0.1.240',
    olympiaVersion: 'TBD',
    githubUrl: 'https://github.com/ethereumclassic/fukuii',
    docsUrl: 'https://github.com/ethereumclassic/fukuii#readme',
    dockerImage: 'ghcr.io/ethereumclassic/fukuii:latest',
    platforms: ['Linux', 'macOS', 'Docker'],
    installCommands: [
      { platform: 'Docker', command: 'docker pull ghcr.io/ethereumclassic/fukuii:latest' },
      { platform: 'Source', command: 'sbt stage' },
    ],
    verifyCommand: 'fukuii --version',
    prerequisites: ['JDK 21+', '8 GB RAM minimum', '500 GB SSD (full sync)'],
  },
  {
    id: 'core-geth',
    name: 'Core-Geth',
    language: 'Go',
    languageColor: '#00ADD8',
    description:
      'The legacy ETC client, actively maintained and carried forward through the Olympia upgrade for network continuity. Scheduled to phase out as Fukuii assumes the primary client role. The upstream go-ethereum plugin architecture is the long-term path.',
    role: 'maintenance',
    roleLabel: 'Maintained',
    currentVersion: 'v1.13.0',
    olympiaVersion: 'TBD',
    githubUrl: 'https://github.com/ethereumclassic/core-geth',
    docsUrl: 'https://github.com/ethereumclassic/core-geth#readme',
    dockerImage: 'ghcr.io/ethereumclassic/core-geth:latest',
    platforms: ['Linux', 'macOS', 'Windows', 'Docker'],
    installCommands: [
      { platform: 'Docker', command: 'docker pull ghcr.io/ethereumclassic/core-geth:latest' },
      { platform: 'Linux/macOS', command: 'make geth' },
    ],
    verifyCommand: 'geth version',
    prerequisites: ['Go 1.24+', '8 GB RAM minimum', '500 GB SSD (full sync)'],
  },
  {
    id: 'besu',
    name: 'Hyperledger Besu',
    language: 'Java',
    languageColor: '#B07219',
    description:
      'Enterprise-grade client from the Hyperledger Foundation. Serves as a reference implementation for cross-client testing and validation.',
    role: 'enterprise',
    roleLabel: 'Reference',
    currentVersion: 'v26.3',
    olympiaVersion: 'TBD',
    githubUrl: 'https://github.com/ethereumclassic/besu',
    docsUrl: 'https://github.com/ethereumclassic/besu#readme',
    dockerImage: 'ghcr.io/ethereumclassic/besu:latest',
    platforms: ['Linux', 'macOS', 'Windows', 'Docker'],
    installCommands: [
      { platform: 'Docker', command: 'docker pull ghcr.io/ethereumclassic/besu:latest' },
      { platform: 'Binary', command: 'Download from GitHub releases' },
    ],
    verifyCommand: 'besu --version',
    prerequisites: ['JDK 21+', '8 GB RAM minimum', '500 GB SSD (full sync)'],
  },
]

// ============================================================================
// Olympia Roadmap — from ethereumclassicdao.org/about
// ============================================================================

export interface RoadmapStage {
  title: string
  status: 'complete' | 'active' | 'research' | 'future'
  description: string
  deliverables: string[]
}

export const roadmapStages: RoadmapStage[] = [
  {
    title: 'Consensus Upgrades',
    status: 'complete',
    description:
      'EIP-1559 fee market, protocol treasury funded by basefee revenue, and full Fusaka EVM parity in a single upgrade. Every Ethereum tool and framework works on ETC without modification.',
    deliverables: [
      'EIP-1559 fee market (ECIP-1111)',
      'Protocol treasury funded by basefee (ECIP-1112)',
      'Fusaka EVM parity: Dencun, Pectra, Fusaka EIPs (ECIP-1121)',
    ],
  },
  {
    title: 'Core Governance',
    status: 'active',
    description:
      'On-chain governance with membership-based voting and a full proposal lifecycle: submit, vote, queue, execute. Core development funding moves to an open, transparent, on-chain process.',
    deliverables: [
      'Governance and treasury contracts with timelock execution',
      'Membership-based voting with sanctions compliance',
      'Open proposal process with competitive bidding',
    ],
  },
  {
    title: 'Prediction Markets',
    status: 'research',
    description:
      'Futarchy-assisted governance uses prediction markets to inform treasury allocation, providing financially-backed public signals alongside on-chain member votes.',
    deliverables: [
      'Conditional outcome tokens',
      'Market-informed proposal ranking',
      'Open participation for any stakeholder',
    ],
  },
  {
    title: 'Treasury Distribution',
    status: 'future',
    description:
      'Governance-controlled smoothing curve (ECIP-1115) optionally supplements miner security budgets as fixed-emission block subsidies decline, without touching consensus-layer rewards.',
    deliverables: [
      'Treasury smoothing algorithm (ECIP-1115)',
      'Modeling through ECIP-1017 emission events',
      'Parameters adjustable without a hard fork',
    ],
  },
  {
    title: 'Protocol Integration',
    status: 'future',
    description:
      'Proven governance mechanisms elevated from the contract layer to consensus, making treasury rules immutable at the protocol level.',
    deliverables: [
      'Consensus-level governance encoding',
      'Immutable treasury rules',
    ],
  },
]

// ============================================================================
// FAQ Data — aligned with ethereumclassicdao.org
// ============================================================================

export interface OlympiaFAQ {
  question: string
  answer: string
}

export const faqs: OlympiaFAQ[] = [
  {
    question: 'Who is coordinating the Olympia upgrade?',
    answer:
      'Olympia is coordinated by the same developers, organizations, and community stewards who have delivered every Ethereum Classic network upgrade since 2016: Gotham, Die Hard, Defuse Difficulty Bomb, Thanos, and the full EVM compatibility series spanning Gas Reprice, Atlantis, Agharta, Phoenix, Magneto, Mystique, and Spiral. The ETC Cooperative, a US 501(c)(3) non-profit, funds Ethereum Classic\'s client development teams and has managed the hard fork coordination process throughout that history. Stakeholder outreach, client release sequencing, and cross-client testing are all established practice. Olympia is a significant upgrade carried forward by a team with a clean delivery record across a decade of ETC network upgrades.',
  },
  {
    question: 'What role has the ETC Cooperative played, and what changes with Olympia?',
    answer:
      'The ETC Cooperative is a US 501(c)(3) non-profit that has funded Ethereum Classic\'s core client development for years, contributing millions of dollars to the network\'s client teams and infrastructure through every upgrade cycle. Every hard fork, every client release, and every cross-client coordination effort has been backed by their balance sheet. Olympia is what they were building toward: a protocol-native funding model that does not depend on any single organization\'s continued generosity. The Olympia Treasury, governed on-chain by the Olympia DAO and executed by the Wyoming DAO LLC, extends beyond institutional dependency with a durable financial foundation that scales with network usage. The model changes, not the commitment. The ETC Cooperative continues as an active steward, and any developer, mining operation, hardware manufacturer, or individual worldwide can now contribute directly on-chain without fielding a team or managing a non-profit to do it.',
  },
  {
    question: "What is Grayscale's role in Ethereum Classic's development?",
    answer:
      "Grayscale launched the Grayscale Ethereum Classic Trust (ETCG) in 2018, years before Bitcoin ETFs existed as a product category, and became a major institutional donor to the ETC Cooperative, indirectly funding the network's core client development at a time when no other investment product issuer was doing anything comparable. What Grayscale was practicing on Ethereum Classic in 2018 is now a recognized trend: ETF issuers funding protocol development, corporate treasury strategies reinvesting in network ecosystems. Taking that model on-chain is only possible on Ethereum Classic because ETC is the only Proof-of-Work blockchain with native smart contracts. Olympia DAO makes it permissionless, opening a direct on-chain contribution path to every holder, whether through ETCG, a direct wallet, or any future investment product.",
  },
  {
    question: 'What does EVM alignment to Fusaka actually mean for builders?',
    answer:
      'ECIP-1121 closes years of EVM divergence in a single upgrade, delivering every execution-layer improvement from Dencun, Pectra, and Fusaka that is independent of Proof-of-Stake and blob data availability. Before Olympia, ETC lagged behind on these EIPs, creating real friction for developers deploying across EVM chains. After Olympia, Solidity 0.8.x, Foundry, Hardhat, wagmi, viem, and ethers.js all work on ETC without modification, patching, or ETC-specific overrides. One codebase deploys to every EVM chain. ETC could not credibly claim full tooling compatibility before Olympia. After Olympia, it can.',
  },
  {
    question: 'How is the Treasury funded?',
    answer:
      'The Olympia Treasury is funded by EIP-1559 basefee revenue, voluntary on-chain donations, and mining rewards directed to the treasury address. Block rewards and tips remain completely untouched and go entirely to miners. The basefee is a value that would otherwise be destroyed and has never been part of miner compensation. This creates sustainable, transparent funding without inflation or any impact on miner income.',
  },
  {
    question: 'Will my miner rewards change?',
    answer:
      'No. Block rewards and tips remain completely untouched. Olympia redirects the EIP-1559 basefee to the protocol treasury. The basefee is a value that would otherwise be destroyed and has never been part of miner compensation. Miner revenue is unchanged.',
  },
  {
    question: 'How was Olympia tested before mainnet?',
    answer:
      'Olympia activates on the Mordor testnet first. Mordor is Ethereum Classic\'s Proof-of-Work testnet and mirrors mainnet conditions closely. Multiple independent client implementations run the Mordor fork before any mainnet activation is scheduled. Cross-client validation using the Hive integration testing framework confirms consensus compatibility across implementations. The mainnet activation block is not set until Mordor has run cleanly and major network stakeholders, including exchanges, custodians, and mining pools, have confirmed readiness.',
  },
  {
    question: 'When is the mainnet activation block?',
    answer:
      'Olympia is targeted for mainnet activation before 2027. Olympia activates on Mordor testnet first. The mainnet activation block is announced after a successful Mordor run and a coordinated stakeholder readiness check with exchanges, mining pools, node operators, and infrastructure providers. All client implementations publish Olympia-compatible releases well before activation.',
  },
  {
    question: 'How does voting work?',
    answer:
      'Governance operates on two layers. The Olympia DAO uses non-transferable membership NFTs for critical protocol decisions — security maintenance, EVM parity, and client funding. Members cast on-chain votes during a defined voting period via the OpenZeppelin Governor 5.x contract suite. Public participation is enabled through futarchy prediction markets, where anyone can stake on proposal outcomes to signal community sentiment and inform treasury allocation.',
  },
  {
    question: 'What happens if I don\'t upgrade my node?',
    answer:
      'Nodes that are not upgraded before the activation block will stop following the canonical chain. You will need to upgrade your client and resync from the fork point. Exchanges, wallets, RPC providers, and services running outdated clients will be unable to process transactions on the post-Olympia chain. Client release announcements are published well in advance to give operators time to upgrade.',
  },
  {
    question: 'Can I roll back if something goes wrong?',
    answer:
      'In the unlikely event of a critical issue after activation, the same client teams that have managed every ETC emergency response since 2016 would coordinate a patch release promptly. The established stakeholder communication channels, including the ETC Cooperative, client maintainers, and major exchange contacts, are the same ones used for every previous upgrade. Olympia has broader test coverage across more independent client implementations than any previous ETC hard fork, and the Mordor testnet run provides a real network validation environment before mainnet activation.',
  },
]

// ============================================================================
// Governance Flow Steps — from olympiadao.org
// ============================================================================

export interface GovernanceStep {
  icon: string
  title: string
  description: string
}

export const governanceFlow: GovernanceStep[] = [
  { icon: 'FileText', title: 'Propose', description: 'Anyone can submit a governance proposal on-chain. Proposals define the action to execute and the supporting rationale.' },
  { icon: 'Vote', title: 'Vote', description: 'Members cast on-chain votes during a defined voting period via the OpenZeppelin Governor 5.x contract suite. Voting is transparent and immutable.' },
  { icon: 'Timer', title: 'Queue', description: 'Approved proposals enter a security timelock. This delay provides the community time to review before execution.' },
  { icon: 'Zap', title: 'Execute', description: 'After the timelock expires, the proposal executes automatically. Treasury transfers happen on-chain with full auditability.' },
  { icon: 'Eye', title: 'Disclose', description: 'All outcomes are publicly reported and independently verifiable. Proposal records form a permanent on-chain record.' },
]

// ============================================================================
// External Links
// ============================================================================

export const olympiaLinks = {
  governanceApp: 'https://app.olympiadao.org',
  treasuryDashboard: 'https://olympiatreasury.org',
  ethereumClassicDAO: 'https://ethereumclassicdao.org',
  olympiaDAO: 'https://olympiadao.org',
} as const

// ============================================================================
// Stats for display
// ============================================================================

export const olympiaStats = [
  { label: 'Client Implementations', value: 'Multiple' },
  { label: 'Network', value: 'Proof-of-Work' },
  { label: 'Governance', value: 'Membership-Based' },
  { label: 'Treasury', value: 'Protocol-Funded' },
]

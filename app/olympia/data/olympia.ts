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
    question: 'How is the Treasury funded?',
    answer:
      'The Olympia Treasury is funded by basefee revenue, voluntary on-chain donations, and mining rewards directed to the treasury address. Block rewards and tips remain completely untouched and go entirely to miners. This creates sustainable, transparent funding without inflation or miner impact.',
  },
  {
    question: 'Will my miner rewards change?',
    answer:
      'No. All miner block rewards and priority tips are maintained. Olympia introduces an EIP-1559 basefee and redirects it from burn to the protocol treasury — miners keep everything they earn today.',
  },
  {
    question: 'How does voting work?',
    answer:
      'Governance operates on two layers. The CoreDAO uses non-transferable membership NFTs for critical protocol decisions — security maintenance, EVM parity, and client funding. Members cast on-chain votes during a defined voting period, and proposals require both quorum and majority to pass. Public participation is enabled through futarchy prediction markets, where anyone can stake on proposal outcomes to signal community sentiment and inform treasury allocation.',
  },
  {
    question: 'Who can submit proposals?',
    answer:
      'Anyone can submit governance proposals on-chain. Proposals define the action to execute and the supporting rationale.',
  },
  {
    question: 'What is the Olympia upgrade?',
    answer:
      'Olympia is active protocol development for Ethereum Classic — EVM modernization, maintained clients, and funded development through sustainable basefee revenue. Three independent client implementations ensure security maintenance, modern tooling, and continued EVM parity with the broader Ethereum ecosystem.',
  },
  {
    question: 'When does Olympia activate?',
    answer:
      'Olympia activates on the Mordor testnet first, followed by Ethereum Classic mainnet pending successful testnet validation. Exact activation dates are coordinated across the independent client teams.',
  },
  {
    question: 'How are funds protected from misuse?',
    answer:
      'Multiple safeguards protect treasury funds: a configurable timelock delay on all approved proposals, three-layer on-chain sanctions screening, non-transferable CoreDAO membership NFTs that prevent vote buying, futarchy markets that surface public sentiment, and full on-chain transparency for every transaction.',
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
  { icon: 'Vote', title: 'Vote', description: 'Members cast on-chain votes during a defined voting period. A quorum threshold must be met for the proposal to pass.' },
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
  { label: 'Client Implementations', value: '3' },
  { label: 'Network', value: 'Proof-of-Work' },
  { label: 'Governance', value: 'Membership-Based' },
  { label: 'Treasury', value: 'Protocol-Funded' },
]

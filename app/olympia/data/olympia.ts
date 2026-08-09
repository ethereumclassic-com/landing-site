import { NOMINAL_BLOCK_TIME_SECONDS } from '@/lib/chain'
// Olympia Network Upgrade — Core Data
//
// COPY SAFETY: Treasury is funded by EIP-1559 basefee, NOT block rewards.
// Block rewards (1.6384 ETC/block, Era 6) remain untouched.

// ============================================================================
// Activation Block — Change this ONE value when the block number is set.
// All countdown components across the site read from here.
// ============================================================================
export const OLYMPIA_ACTIVATION_BLOCK: number | null = null

export const OLYMPIA_AVG_BLOCK_TIME_SECONDS = NOMINAL_BLOCK_TIME_SECONDS

/**
 * Placeholder countdown target, used until OLYMPIA_ACTIVATION_BLOCK is set.
 * Every countdown on the site reads this one value — do not redeclare it in a
 * component. Two copies drifted once already, leaving the homepage counting to
 * a different date than its own footnote stated.
 */
export const OLYMPIA_PLACEHOLDER_DATE = new Date('2027-03-31T00:00:00Z')

/** Human-readable form of OLYMPIA_PLACEHOLDER_DATE, for the countdown footnotes. */
export const OLYMPIA_PLACEHOLDER_DATE_LABEL = 'March 31, 2027'

// ============================================================================
// Client Upgrade Data
// ============================================================================

export interface ClientUpgrade {
  id: string
  name: string
  language: string
  languageColor: string
  description: string
  /** Drives the badge color only. */
  role: 'primary' | 'enterprise' | 'maintenance'
  /**
   * What renders on the card, in order. An array rather than one label because
   * a client is several things at once, and because these must describe what a
   * client IS — not which upgrade happens to be next. A badge naming a specific
   * hard fork goes stale the moment the network forks past it.
   */
  badges: string[]
  currentVersion: string
  olympiaVersion: string
  githubUrl: string
  /** Published security review, surfaced as a CTA on every card for this client. */
  securityAuditUrl?: string
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
      "Ethereum Classic's first native client — an EVM execution client in Scala 3 LTS on Pekko Typed Actors, running on the JVM. One binary runs several networks at once in one JVM process, each isolated with its own state, metrics registry, and configuration. Consensus is selected per deployment: native Proof-of-Work for ETC mainnet and Mordor.",
    role: 'primary',
    badges: ['Primary', 'Enterprise', 'ETC-native'],
    currentVersion: 'v0.1.240',
    olympiaVersion: 'TBD',
    githubUrl: 'https://github.com/fukuii-project/fukuii-cli',
    docsUrl: 'https://docs.fukuii.org',
    dockerImage: 'ghcr.io/fukuii-project/fukuii-cli:latest',
    platforms: ['Linux', 'macOS', 'Docker'],
    installCommands: [
      { platform: 'Docker', command: 'docker pull ghcr.io/fukuii-project/fukuii-cli:latest' },
      { platform: 'Source', command: 'sbt stage' },
    ],
    verifyCommand: 'fukuii --version',
    prerequisites: ['Current JDK LTS (25) — bundled in the Docker image', '8 GB RAM minimum', '500 GB SSD (full sync)'],
  },
  {
    id: 'core-geth',
    name: 'Core-Geth',
    language: 'Go',
    languageColor: '#00ADD8',
    description:
      'A go-ethereum derivative maintained for Ethereum Classic, providing client diversity alongside Fukuii. Six CVEs patched at ethereumclassic/core-geth by White B0x, pending release as v1.13.0.',
    role: 'maintenance',
    badges: ['Maintained', 'Go-Ethereum derivative'],
    securityAuditUrl: '/build/clients/core-geth-security-audit',
    currentVersion: 'v1.12.22',
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
    prerequisites: ['Go 1.26+', '8 GB RAM minimum', '500 GB SSD (full sync)'],
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
    // Active, not complete: ECIP-1121 targets Glamsterdam-era parity and
    // Glamsterdam has not shipped on Ethereum yet, so the target it aligns to
    // is still moving. Matches the Core Governance stage, which is also in
    // flight rather than delivered.
    status: 'active',
    description:
      'EIP-1559 fee market, protocol treasury funded by basefee revenue, and Glamsterdam-era EVM parity in a single upgrade. Every Ethereum tool and framework works on ETC without modification.',
    deliverables: [
      'EIP-1559 fee market (ECIP-1111)',
      'Protocol treasury funded by basefee (ECIP-1112)',
      'Glamsterdam-era EVM parity: Dencun, Pectra, Fusaka, and Glamsterdam EIPs (ECIP-1121)',
      'Network security client configuration required of every client (ECIP-1122)',
    ],
  },
  {
    title: 'Core Governance',
    status: 'active',
    description:
      'On-chain governance with membership-based voting and a full proposal lifecycle: submit, vote, queue, execute. Core development funding moves to an open, transparent, on-chain process.',
    deliverables: [
      'Governance and treasury contracts with timelock execution (ECIP-1113)',
      'Open proposal process with competitive bidding (ECIP-1114)',
      'Membership-based voting with sanctions compliance (ECIP-1119)',
      'Contract deployment on settled consensus rules — not a hard fork',
    ],
  },
  {
    title: 'Prediction Markets',
    status: 'research',
    description:
      'An open signal layer. Futarchy prediction markets (ECIP-1117/1118) let anyone stake on proposal outcomes without DAO membership, producing financially-backed public signals alongside member votes. They are a Child-DAO under ECIP-1113 §6, funded by executed funding proposals rather than a direct basefee share, and they inform decisions rather than making them: binding allocation stays with the Olympia DAO.',
    deliverables: [
      'Conditional outcome tokens (ECIP-1117)',
      'Funding and streaming disbursements (ECIP-1118)',
      'Sanctions compliance applies here too, because funds move (ECIP-1119)',
      'Seeded by a funding proposal from the governance layer — not a hard fork',
    ],
  },
  {
    title: 'Treasury Distribution',
    status: 'future',
    description:
      'A smoothing curve supplements miner security budgets as fixed-emission block subsidies decline. ECIP-1115 runs it at the contract layer, where the allocation fraction, window, and curve shape are adjustable through governance without a hard fork — so the network can find the right curve empirically while ECIP-1017 block rewards are still securing it. This is a governance activation on Treasury-held revenue, not a deployment and not a fork. Hardening a proven curve into consensus is the separate stage that follows.',
    deliverables: [
      'Treasury smoothing algorithm at the contract layer (ECIP-1115)',
      'Parameters adjustable through governance without a hard fork',
      'Runs as a configured experiment on Treasury-held revenue',
      'Complements ECIP-1017\'s 5M20 emission schedule — the treasury responds as subsidies decline',
    ],
  },
  {
    title: 'Protocol Integration',
    status: 'future',
    description:
      'The curve proven in the previous stage is embedded into block finalization and leaves governance control. ECIP-1116 is the second and final hard fork of the Olympia roadmap: the distribution is paid by the protocol rather than disbursed from the treasury, making it immutable at the consensus layer.',
    deliverables: [
      'Consensus-layer L-curve hardening for base fee miner distribution (ECIP-1116)',
      'Paid by the protocol, not disbursed from the treasury',
      'Second hard fork — sequenced after ECIP-1115 has demonstrated the curve',
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
    question: 'What does EVM alignment to Glamsterdam actually mean for builders?',
    answer:
      'ECIP-1121 closes years of EVM divergence in a single upgrade, delivering the execution-layer improvements from Dencun, Pectra, and Fusaka that are independent of Proof-of-Stake and blob data availability, and carrying that work into Glamsterdam with eth/70 and the deterministic CREATE2 factory. Before Olympia, ETC lagged behind on these EIPs, creating real friction for developers deploying across EVM chains. After Olympia, Solidity 0.8.x, Foundry, Hardhat, wagmi, viem, and ethers.js all work on ETC without modification, patching, or ETC-specific overrides. One codebase deploys to every EVM chain. ETC could not credibly claim full tooling compatibility before Olympia. After Olympia, it can.',
  },
  {
    question: 'How is the Treasury funded?',
    answer:
      'The Olympia Treasury is funded by EIP-1559 basefee revenue, credited to it at block finalization. Contributions beyond that are voluntary and take two forms: sending ETC to the address, or mining to it — a miner naming the Treasury as their coinbase recipient is donating hashpower rather than currency. The protocol directs the basefee and nothing else; miner block rewards are never touched. The vault sits at the treasury address. Block rewards and tips remain completely untouched and go entirely to miners. The basefee is a value that would otherwise be destroyed and has never been part of miner compensation. This creates sustainable, transparent funding without inflation or any impact on miner income.',
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
      'Olympia is targeted for mainnet activation in 2027. Olympia activates on Mordor testnet first. The mainnet activation block is announced after a successful Mordor run and a coordinated stakeholder readiness check with exchanges, mining pools, node operators, and infrastructure providers. All client implementations publish Olympia-compatible releases well before activation.',
  },
  {
    question: 'How does voting work?',
    answer:
      'Governance operates on two layers, and only one of them is binding. The Olympia DAO makes the binding decisions — security maintenance, EVM parity, client funding, and treasury allocation — using non-transferable membership NFTs, with members casting on-chain votes during a defined voting period via the OpenZeppelin Governor 5.x contract suite. Futarchy prediction markets (ECIP-1117/1118) are an open signal layer on top: anyone can stake on proposal outcomes without membership, producing a financially-backed public signal that informs the vote rather than determining it or executing anything. They run as a Child-DAO under ECIP-1113 §6, funded by executed funding proposals rather than a direct basefee share.',
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
  etcCooperative: 'https://etccooperative.org',
  grayscaleETCG: 'https://grayscale.com/funds/ethereum-classic-trust/',
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

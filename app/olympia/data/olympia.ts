// Olympia Network Upgrade — Core Data
//
// COPY SAFETY: Treasury is funded by EIP-1559 basefee, NOT block rewards.
// Block rewards (2.048 ETC/block, Era 4) remain untouched.
// Never say "100%" in marketing copy. Never use specific block numbers until CDC-23 decides.

// ============================================================================
// Activation Block — Change this ONE value when CDC-23 sets the block number.
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
  notes: string
  testStats?: string
}

export const clients: ClientUpgrade[] = [
  {
    id: 'fukuii',
    name: 'Fukuii',
    language: 'Scala',
    languageColor: '#DC322F',
    description:
      'Next-generation ETC client built from the ground up. 143 RPC methods, 2,706 tests, full SNAP sync support. Becomes the primary production client after Olympia.',
    role: 'primary',
    roleLabel: 'Primary Client',
    currentVersion: 'v0.1.240',
    olympiaVersion: 'TBD',
    githubUrl: 'https://github.com/AlanVerbner/fukuii',
    docsUrl: 'https://github.com/AlanVerbner/fukuii#readme',
    dockerImage: 'ghcr.io/alanverbner/fukuii:latest',
    platforms: ['Linux', 'macOS', 'Docker'],
    installCommands: [
      { platform: 'Docker', command: 'docker pull ghcr.io/alanverbner/fukuii:latest' },
      { platform: 'Source', command: 'sbt stage' },
    ],
    verifyCommand: 'fukuii --version',
    prerequisites: ['JDK 21+', '8 GB RAM minimum', '500 GB SSD (full sync)'],
    notes: 'Successfully completed SNAP sync on Mordor testnet in ~35 minutes.',
    testStats: '2,706 tests, 143 RPC methods',
  },
  {
    id: 'core-geth',
    name: 'Core-Geth',
    language: 'Go',
    languageColor: '#00ADD8',
    description:
      'Battle-tested ETC client based on go-ethereum. The current primary client, transitioning to maintenance role after Olympia as Fukuii takes over.',
    role: 'maintenance',
    roleLabel: 'Maintenance',
    currentVersion: 'v1.12.21',
    olympiaVersion: 'TBD',
    githubUrl: 'https://github.com/etclabscore/core-geth',
    docsUrl: 'https://etclabscore.github.io/core-geth/',
    dockerImage: 'etclabscore/core-geth:latest',
    platforms: ['Linux', 'macOS', 'Windows', 'Docker'],
    installCommands: [
      { platform: 'Docker', command: 'docker pull etclabscore/core-geth:latest' },
      { platform: 'Linux/macOS', command: 'make geth' },
    ],
    verifyCommand: 'geth version',
    prerequisites: ['Go 1.24+', '8 GB RAM minimum', '500 GB SSD (full sync)'],
    notes: 'Synced to Mordor chain head. SNAP serving fix targeted for v1.13.0.',
  },
  {
    id: 'besu',
    name: 'Hyperledger Besu',
    language: 'Java',
    languageColor: '#B07219',
    description:
      'Enterprise-grade client maintained by the Hyperledger Foundation. Java 21 LTS, suited for institutional and enterprise deployments.',
    role: 'enterprise',
    roleLabel: 'Enterprise',
    currentVersion: 'v26.3',
    olympiaVersion: 'TBD',
    githubUrl: 'https://github.com/hyperledger/besu',
    docsUrl: 'https://besu.hyperledger.org/',
    dockerImage: 'hyperledger/besu:latest',
    platforms: ['Linux', 'macOS', 'Windows', 'Docker'],
    installCommands: [
      { platform: 'Docker', command: 'docker pull hyperledger/besu:latest' },
      { platform: 'Binary', command: 'Download from GitHub releases' },
    ],
    verifyCommand: 'besu --version',
    prerequisites: ['JDK 21+', '8 GB RAM minimum', '500 GB SSD (full sync)'],
    notes: 'Supports SNAP state serving. Enterprise features include permissioning and privacy.',
  },
]

// ============================================================================
// FAQ Data
// ============================================================================

export interface OlympiaFAQ {
  question: string
  answer: string
  category: 'general' | 'mining' | 'governance' | 'technical'
}

export const faqs: OlympiaFAQ[] = [
  {
    question: 'Will my miner rewards change?',
    answer:
      'No. Block rewards remain completely untouched at 2.048 ETC per block (Era 4). The Olympia upgrade redirects only the EIP-1559 basefee — the portion of transaction fees that Ethereum burns — to the protocol treasury. At current network usage (~1 gwei), this represents less than 0.01% of miner income.',
    category: 'mining',
  },
  {
    question: 'Who controls the treasury?',
    answer:
      'The treasury is a protocol-managed vault with no admin keys, no proxy patterns, and no multisig. It can only receive funds in Stage 1 (accumulation phase). Future disbursements require on-chain governance proposals that pass community voting, a security timelock, and three-layer sanctions screening.',
    category: 'governance',
  },
  {
    question: 'Is there a governance token?',
    answer:
      'No. Olympia uses non-transferable soulbound membership NFTs for voting — one address, one vote. There is no governance token to buy, sell, or trade. This prevents vote buying and ensures only committed community members participate in governance decisions.',
    category: 'governance',
  },
  {
    question: 'What if I don\'t upgrade my node?',
    answer:
      'Nodes that don\'t upgrade will follow the old chain rules and will fork off the network at the Olympia activation block. You must upgrade your client software before the activation block to stay on the canonical ETC chain.',
    category: 'technical',
  },
  {
    question: 'What about chain splits?',
    answer:
      'Olympia follows the same upgrade process as every prior ETC hard fork (Atlantis, Phoenix, Thanos, Spiral, etc.). All three independent client implementations support the upgrade. The community has coordinated through Community Developer Calls, and miners who upgrade will follow the new consensus rules.',
    category: 'technical',
  },
  {
    question: 'What EIPs are included in Olympia?',
    answer:
      'Olympia aligns ETC with 13 EIPs from Ethereum\'s Shanghai and Cancun upgrades, including EIP-1559 (fee market), EIP-1153 (transient storage), EIP-5656 (MCOPY), EIP-7702 (account abstraction), and EIP-2537 (BLS precompile). See the ECIP summaries below for full details.',
    category: 'technical',
  },
  {
    question: 'How is the DAO LLC structured?',
    answer:
      'Ethereum Classic DAO LLC is registered in Wyoming (Filing ID 2025-001671865) as a legal wrapper subordinate to on-chain governance. It provides limited liability protection to members while preserving decentralized decision-making. The LLC cannot override on-chain governance decisions.',
    category: 'governance',
  },
  {
    question: 'What is the ECFP process?',
    answer:
      'The Ethereum Classic Funding Proposal (ECFP) process allows anyone to submit proposals for treasury funding on-chain. Proposals go through: submit → community vote → timelock queue → execute. Hash-bound integrity ensures the approved proposal is exactly what executes.',
    category: 'governance',
  },
]

// ============================================================================
// Deployed Contracts (Demo v0.3)
// ============================================================================

export interface DeployedContract {
  name: string
  address: string
  role: string
}

export const deployedContracts: DeployedContract[] = [
  { name: 'OlympiaTreasury', address: '0x60d0A7394f9Cd5C469f9F5Ec4F9C803F5294d79b', role: 'Protocol-funded vault' },
  { name: 'OlympiaGovernor', address: '0xe763f13cC89292C4F279BEF2aD54F1E89A3a87d3', role: 'Proposal & voting engine' },
  { name: 'OlympiaExecutor', address: '0x292eBe07d11850Dfc94Cbf9c72C3A054d23cAB54', role: 'Treasury withdrawal executor' },
  { name: 'TimelockController', address: '0x3d19fEfB093Abad60421B89CF48f4569aaae39b6', role: 'Security delay enforcement' },
  { name: 'ECFPRegistry', address: '0xe2b437284B0fc7A1064Afd1f60686c7cEAa7343a', role: 'Proposal metadata registry' },
  { name: 'SanctionsOracle', address: '0xAA93C0d1cCf9a0Ec43A2EE8CD1AfFC473b82f36A', role: 'OFAC compliance layer' },
  { name: 'OlympiaMemberNFT', address: '0xb4D45A498994C89553A9c923c6b85F7623C0843e', role: 'Soulbound governance NFT' },
  { name: 'OlympiaMemberRenderer', address: '0xE29d0f47043F40059AB5DE7C8F7E7B665a7caCCf', role: 'On-chain SVG art generator' },
  { name: 'MembershipVerifier', address: '0xb6274251Fb8F1D865A0B62bba9fFF31c1bfEdccE6', role: 'Sybil resistance' },
]

// ============================================================================
// Governance Stages
// ============================================================================

export interface GovernanceStage {
  number: number
  name: string
  status: 'active' | 'next' | 'planned'
  description: string
}

export const governanceStages: GovernanceStage[] = [
  { number: 1, name: 'Accumulate', status: 'active', description: 'BaseFee + mining + donations' },
  { number: 2, name: 'Govern', status: 'next', description: 'On-chain proposals and voting' },
  { number: 3, name: 'Fund', status: 'planned', description: 'Treasury disbursements' },
  { number: 4, name: 'Predict', status: 'planned', description: 'Futarchy governance' },
  { number: 5, name: 'Optimize', status: 'planned', description: 'Protocol improvements' },
]

// ============================================================================
// Governance Flow Steps
// ============================================================================

export interface GovernanceStep {
  icon: string // Lucide icon name
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
  ecipBase: 'https://ecips.ethereumclassic.org/ECIPs/',
  mordorExplorer: 'https://etc-mordor.blockscout.com',
  mainnetExplorer: 'https://etc.blockscout.com',
} as const

// ============================================================================
// Stats for display
// ============================================================================

export const olympiaStats = [
  { label: 'Core ECIPs', value: '5' },
  { label: 'EIPs Aligned', value: '13' },
  { label: 'Client Implementations', value: '3' },
  { label: 'Cross-Client Tests', value: '2,706+' },
]

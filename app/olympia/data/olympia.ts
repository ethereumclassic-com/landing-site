import { NOMINAL_BLOCK_TIME_SECONDS } from '@/lib/chain'
import {
  CORE_GETH_DOCS_URL,
  CORE_GETH_LATEST_RELEASE_URL,
  CORE_GETH_RECOMMENDED_LINE,
  CORE_GETH_TASKS,
  type CoreGethTask,
} from '@/lib/core-geth'
import {
  FUKUII_DESCRIPTION,
  FUKUII_DOCS_URL,
  FUKUII_IMAGE,
  FUKUII_LATEST_RELEASE_URL,
  FUKUII_REPO_URL,
  FUKUII_STATUS,
  FUKUII_TASKS,
} from '@/lib/fukuii'

// Olympia: the status, the date the countdowns run to, client readiness and the FAQs.
//
// Olympia is a proposal: its ECIPs are drafts and its activation block is TBD. Write every
// sentence about it in proposal voice, and read the ECIP a sentence comes from when writing it.
// The ECIP titles live in lib/olympia-ecips.ts and ECIP-1121's EIP rows in lib/olympia-eips.ts.

// ============================================================================
// Status and the countdown target. Change these in one place: every countdown reads them.
// ============================================================================

/** Set only once ECIP-1111 §Implementation records the mainnet block. Until then the countdowns run to the placeholder. */
export const OLYMPIA_ACTIVATION_BLOCK: number | null = null

export const OLYMPIA_AVG_BLOCK_TIME_SECONDS = NOMINAL_BLOCK_TIME_SECONDS

/** Shown wherever Olympia's state is given, as a badge or a status line. */
export const OLYMPIA_STATUS = 'Proposed · Draft ECIPs · Activation block TBD'

/** The target in words. The date below is a placeholder for it, never an activation date. */
export const OLYMPIA_TARGET = 'targeted for mainnet activation in 2027'

/**
 * The placeholder the countdowns run to until OLYMPIA_ACTIVATION_BLOCK is set. Every countdown reads
 * this one value; do not redeclare it in a component. Two copies drifted once already, leaving the
 * home page counting to a different date than its own footnote stated.
 */
export const OLYMPIA_PLACEHOLDER_ISO = '2027-12-31T00:00:00Z'
export const OLYMPIA_PLACEHOLDER_DATE = new Date(OLYMPIA_PLACEHOLDER_ISO)

/**
 * The placeholder as Month D, YYYY, derived from the ISO value rather than typed beside it, and
 * formatted in UTC: in a time zone west of UTC, 2027-12-31T00:00:00Z is still December 30.
 */
export const OLYMPIA_PLACEHOLDER_DATE_LABEL = new Intl.DateTimeFormat('en-US', {
  timeZone: 'UTC',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(OLYMPIA_PLACEHOLDER_DATE)

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
  role: 'primary' | 'alternative' | 'maintenance'
  /**
   * What renders on the card, in order. An array rather than one label because
   * a client is several things at once, and because these must describe what a
   * client IS — not which upgrade happens to be next. A badge naming a specific
   * hard fork goes stale the moment the network forks past it.
   */
  badges: string[]
  /**
   * What to run before Olympia: a line ("v1.13 line") or "Latest release", never a version
   * number, which goes stale at the client's next release.
   */
  currentVersion: string
  /** The client's newest full release, which the current-release box links. */
  latestReleaseUrl: string
  olympiaVersion: string
  githubUrl: string
  /** Published security review, surfaced as a CTA on every card for this client. */
  securityAuditUrl?: string
  docsUrl: string
  dockerImage: string
  platforms: string[]
  installCommands: { platform: string; command: string }[]
  /** What an operator comes to do, each linking the page that carries the steps. Shown in place of installCommands. */
  tasks?: CoreGethTask[]
  verifyCommand: string
  prerequisites: string[]
}

export const clients: ClientUpgrade[] = [
  {
    id: 'core-geth',
    name: 'Core-Geth',
    language: 'Go',
    languageColor: '#00ADD8',
    description:
      'An Ethereum Classic execution client and public-good Go reference client: a go-ethereum derivative released and maintained in the ethereumclassic GitHub organization, and the recommended client to run. The v1.12 line went 21 months without security maintenance. The v1.13 line closes every client CVE the audits found, including the flaw used to crash Core-Geth v1.12 bootnodes in March 2026, bounds GraphQL queries, and is built with a supported Go toolchain.',
    role: 'primary',
    badges: ['Recommended', 'Go-Ethereum derivative'],
    securityAuditUrl: '/build/clients/core-geth-security-audit',
    // The line, never a patch: a release inside it ships with no edit here.
    currentVersion: `${CORE_GETH_RECOMMENDED_LINE} line`,
    latestReleaseUrl: CORE_GETH_LATEST_RELEASE_URL,
    olympiaVersion: 'TBD',
    githubUrl: 'https://github.com/ethereumclassic/core-geth',
    docsUrl: CORE_GETH_DOCS_URL,
    dockerImage: 'ghcr.io/ethereumclassic/core-geth:latest',
    platforms: ['Linux', 'macOS', 'Windows', 'Docker'],
    installCommands: [],
    tasks: CORE_GETH_TASKS,
    verifyCommand: 'geth version',
    prerequisites: [
      'A release archive for Linux (x86_64 or ARM), macOS 12 or newer, or Windows x86_64',
      'A Go toolchain and a C compiler, only to build from source: Build from source in the Core-Geth documentation lists the versions',
      'Disk and memory for the network you sync: see Hardware requirements in the Core-Geth documentation',
    ],
  },
  {
    id: 'fukuii',
    name: 'Fukuii',
    language: 'Scala',
    languageColor: '#DC322F',
    description: FUKUII_DESCRIPTION,
    role: 'alternative',
    badges: ['Alternative', FUKUII_STATUS],
    // Its newest full release, linked rather than named: the builds between full releases are
    // marked pre-release, and releases/latest skips them.
    currentVersion: 'Latest release',
    latestReleaseUrl: FUKUII_LATEST_RELEASE_URL,
    olympiaVersion: 'TBD',
    githubUrl: FUKUII_REPO_URL,
    docsUrl: FUKUII_DOCS_URL,
    dockerImage: `${FUKUII_IMAGE}:latest`,
    platforms: ['Linux', 'macOS', 'Windows', 'Docker'],
    installCommands: [],
    tasks: FUKUII_TASKS,
    // The check Fukuii's First Start runbook gives, on the RPC port its documentation uses.
    verifyCommand:
      'curl -X POST --data \'{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}\' http://localhost:8546',
    prerequisites: [
      'JDK 25, which the container image carries',
      '8 GB of RAM and 500 GB of storage for an Ethereum Classic node, per its hardware sizing',
    ],
  },
]

// ============================================================================
// Governance, as ECIP-1113 specifies it: the stock OpenZeppelin proposal lifecycle
// ============================================================================

export interface GovernanceStep {
  title: string
  description: string
}

export const governanceSteps: GovernanceStep[] = [
  {
    title: 'Propose',
    description:
      'A proposal names the calls it would make and carries a description no contract reads. It is submitted to the Governor through its standard propose function.',
  },
  {
    title: 'Vote',
    description:
      'Core Contributors holding CoreNFT vote during the voting period, one vote each. The vote cannot be delegated, bought or transferred.',
  },
  {
    title: 'Queue',
    description:
      'A proposal that passes is queued in the Timelock, the contract at the Treasury address, and waits out its delay in public.',
  },
  {
    title: 'Execute',
    description:
      'After the delay, the Governor, the Timelock\'s only executor, carries it out. Value moves only from the Treasury\'s own balance.',
  },
  {
    title: 'Record',
    description:
      'Each step emits the contracts\' standard events, so every governance action can be reconstructed from event logs alone.',
  },
]

// ============================================================================
// FAQs. Plain strings: each page's FAQPage structured data is built from them.
// The hub carries the proposal's questions and /olympia/upgrade the node operator's, with no
// question on both, so no two pages publish the same FAQ.
// ============================================================================

export interface OlympiaFAQ {
  question: string
  answer: string
}

export const faqs: OlympiaFAQ[] = [
  {
    question: 'Is Olympia active?',
    answer:
      'No. Olympia is a proposal: its ECIPs are drafts and its activation block is TBD. It is targeted for mainnet activation in 2027, and no released client implements it.',
  },
  {
    question: 'When would Olympia activate?',
    answer:
      'It is targeted for mainnet activation in 2027. The activation blocks for Mordor and mainnet are decided at the Olympia Core Devs Call and recorded in ECIP-1111, and both read TBD. Before an activation block is scheduled, the governance contracts are deployed, reviewed and rehearsed on Mordor, and the Treasury\'s address is published.',
  },
  {
    question: 'What would Olympia change?',
    answer:
      'At the activation block, ECIP-1111 would activate EIP-1559 and EIP-3198, crediting each transaction\'s base fee to a permanent address where Ethereum destroys it, and ECIP-1121 would align the EVM with Ethereum\'s upgrades through Dencun, Pectra and Fusaka, carrying that work into Glamsterdam. Before the fork, the Treasury at that address and Olympia DAO, the only route by which its balance could be spent, would be deployed and published (ECIP-1112 and ECIP-1113).',
  },
  {
    question: 'How would the base fee reach the Treasury?',
    answer:
      'ECIP-1111 activates EIP-1559 and credits each transaction\'s base fee to the Sovereignty Vault address, inside that transaction\'s own state transition, where Ethereum destroys it. The credit runs no contract code. Ethereum Classic has no base fee today, so nothing is taken from what miners earn now.',
  },
  {
    question: 'Would miner rewards change?',
    answer:
      'No. ECIP-1111 leaves block rewards and priority-fee tips unaffected, and the base fee it introduces goes to the Treasury rather than to miners. Paying miners from base-fee revenue is the subject of ECIP-1115, through ordinary funding proposals, and of ECIP-1116, a separate hard fork after Olympia.',
  },
  {
    question: 'Who could spend from the Treasury?',
    answer:
      'Only Olympia DAO, by a funding proposal that passes a vote of CoreNFT members, is queued in the Timelock and executes after its delay. The Governor is the Timelock\'s sole executor, and there is no admin key, multisig or committee. The Treasury\'s address is permanent, and the logic behind it can be repaired by a proposal.',
  },
  {
    question: 'Who would vote?',
    answer:
      'Core Contributors holding CoreNFT, a soulbound token that carries one vote per member and cannot be transferred or delegated (ECIP-1113). The first members are the people who verifiably contributed to the Olympia ECIPs or their reference client implementations by a published cutoff date. After that, a contributor applies, and the DAO votes on each admission.',
  },
  {
    question: 'Would Olympia DAO decide protocol upgrades?',
    answer:
      'No. Protocol change remains with the ECIP process, ECIP-1000. A funding proposal can pay for work on Ethereum Classic without conferring any authority over its specification, and an upgrade takes effect only when client teams release it and the network runs it.',
  },
  {
    question: 'What are Ecosystem Growth DAOs?',
    answer:
      'Bodies ECIP-1117 specifies for growing what is built on Ethereum Classic, open to anyone. Olympia DAO would decide, one season at a time, whether to seed one and with how much; once seeded, the body\'s own published model chooses among the destinations the seeding proposal named, and a conditional market is one model it may use. Client development, network security and critical infrastructure stay with Olympia DAO.',
  },
  {
    question: 'What would Ethereum Classic DAO LLC do?',
    answer:
      'ECIP-1114 names Ethereum Classic DAO LLC as the legal wrapper it contemplates for Olympia DAO, for the off-chain acts an on-chain organization cannot perform, without acquiring authority over it. Once Olympia DAO is operating, the LLC would carry out the off-chain obligations a passed proposal has fixed, such as signing the engagement for a security audit the DAO voted to fund. It is downstream of Olympia DAO in authority, holds no on-chain role and no position in the ECIP process, and holds no role in anything ECIP-1114 specifies until Olympia DAO is operating.',
  },
  {
    question: 'Who funds Ethereum Classic\'s development today?',
    answer:
      'Ethereum Classic\'s core developers and community contributors do the work. Ethereum Classic DAO LLC maintains and funds the public goods kept in the ethereumclassic GitHub organization as their funder of last resort, and it does not control or lead Ethereum Classic. The ETC Cooperative funded much of it from 2017 and is winding down. Olympia proposes a source the network would raise from its own use.',
  },
  {
    question: 'Does Olympia adopt all of Glamsterdam?',
    answer:
      'No. ECIP-1121 includes Glamsterdam and adopts part of its set. Some of its EIPs are blocked on a dependency that is out of scope, and those tied to Proof-of-Stake or blob data availability are excluded or deferred. The upgrade guide lists every EIP by its disposition.',
  },
]

/** The node operator's questions, on /olympia/upgrade. */
export const operatorFaqs: OlympiaFAQ[] = [
  {
    question: 'Do I need to do anything now?',
    answer:
      'Run a current release. Core-Geth, the recommended client, runs on its v1.13 line, and a node still on a v1.12 release should move to v1.13 now, following coregeth.com/downloads. Fukuii, which its maintainers mark alpha, is an alternative to try. Olympia asks nothing more of a node until a client publishes a release that implements it.',
  },
  {
    question: 'Which client releases implement Olympia?',
    answer:
      'None yet: Olympia is a proposal, and no released client implements it. A client\'s Olympia readiness is what its maintainers publish, and the client readiness page lists each one.',
  },
  {
    question: 'What happens to a node that does not upgrade?',
    answer:
      'Once the activation blocks are set and client releases implement them, a node that has not moved to such a release by the activation block stops following the chain at that block. Operators move by the steps their client\'s maintainers publish.',
  },
  {
    question: 'Would Olympia change the transactions my node accepts?',
    answer:
      'It would add to them. ECIP-1111 adds the EIP-1559 transaction type and the BASEFEE opcode, and legacy and access-list transactions stay valid. Every transaction would pay a base fee, with at least 1 gwei per unit of gas as its floor, and the miner keeps the priority fee.',
  },
]

// ============================================================================
// Olympia's own sites, each named for what it is
// ============================================================================

export const olympiaLinks = {
  olympiaDAO: 'https://olympiadao.org',
  governanceApp: 'https://app.olympiadao.org',
  treasurySite: 'https://olympiatreasury.org',
  olympiaGitHub: 'https://github.com/olympiadao',
  ethereumClassicDAO: 'https://ethereumclassicdao.org',
} as const

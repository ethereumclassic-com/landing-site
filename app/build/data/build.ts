// Developer resources for Ethereum Classic
// Data for build section pages

import {
  CORE_GETH_DOCS_URL,
  CORE_GETH_HOMEPAGE_URL,
  CORE_GETH_TASKS,
  type CoreGethTask,
} from '@/lib/core-geth'
import {
  FUKUII_DESCRIPTION,
  FUKUII_DOCS_URL,
  FUKUII_FEATURES,
  FUKUII_HOMEPAGE_URL,
  FUKUII_MAINNET_COMMAND,
  FUKUII_MORDOR_COMMAND,
  FUKUII_REPO_URL,
  FUKUII_STATUS,
  FUKUII_TASKS,
} from '@/lib/fukuii'

// Network configuration
export interface Network {
  name: string
  chainId: number
  symbol: string
  explorer: string
  type: 'mainnet' | 'testnet'
}

export const networks: Network[] = [
  {
    name: 'Ethereum Classic',
    chainId: 61,
    symbol: 'ETC',
    explorer: 'https://etc.blockscout.com',
    type: 'mainnet',
  },
  {
    name: 'Mordor Testnet',
    chainId: 63,
    symbol: 'METC',
    explorer: 'https://etc-mordor.blockscout.com',
    type: 'testnet',
  },
]

// RPC Endpoints
export interface RPCEndpoint {
  provider: string
  url: string
  notes?: string
  websocket?: string
  network: 'mainnet' | 'testnet'
}

/**
 * ONLY FUNDED, TRUSTED PUBLIC ENDPOINTS ARE LISTED. Operator rule, 2026-08-09.
 *
 * A community endpoint that works today can disappear tomorrow, and this list
 * is what a developer wires into a product — so uptime accountability, not
 * mere reachability, is the bar. Endpoints verified live but deliberately NOT
 * listed under this rule: 0xrpc.io/etc, 0xrpc.io/mordor,
 * geth-mordor.etc-network.info.
 *
 * Removed as dead, verified by DNS rather than a page timeout:
 * ethercluster.com (offline since 2020), geth-de.etc-network.info,
 * besu-at.etc-network.info (resolves, answers "invalid host specified").
 *
 * Blockscout earns both rows: it answered eth_blockNumber and eth_chainId on
 * mainnet (61) and Mordor (63), at heights matching the primary RPCs, and it
 * accepts eth_sendRawTransaction rather than rejecting the method.
 *
 * etc.rivet.link was dropped on 2026-09-17: it has no DNS record and went offline
 * in late August 2026. rpc.ethereumclassic.net and rpc-mordor.ethereumclassic.net
 * are being stood up to replace it and are not listed until they answer, which is
 * what core-geth's transition page recommends:
 * https://docs.coregeth.com/etc-cooperative-transition/#public-json-rpc
 * ChainList carries the wider list, chain 61 and chain 63.
 */
export const rpcEndpoints: RPCEndpoint[] = [
  // Mainnet
  {
    provider: 'Blockscout',
    url: 'https://etc.blockscout.com/api/eth-rpc',
    notes: 'Official explorer RPC',
    network: 'mainnet',
  },
  // Testnet
  {
    provider: 'Blockscout',
    url: 'https://etc-mordor.blockscout.com/api/eth-rpc',
    notes: 'Mordor explorer RPC',
    network: 'testnet',
  },
]

// Node Clients
export interface SecurityAdvisory {
  cve: string
  severity: 'Critical' | 'High' | 'Moderate' | 'Low'
  description: string
  commit?: string
}

export interface NodeClient {
  id: string
  name: string
  website: string
  /** The client's documentation site, where it has one apart from its website. */
  docs?: string
  github: string
  description: string
  /** The page's meta description, where `description` runs past what a search result shows. */
  metaDescription?: string
  language: string
  platforms: ('Windows' | 'macOS' | 'Linux' | 'Docker')[]
  features: string[]
  status: 'active' | 'maintained' | 'deprecated'
  /** Drives the badge color only. */
  role?: 'recommended' | 'alternative' | 'maintained' | 'reference'
  /**
   * Badges to render, in order. Describe what the client IS — never which hard
   * fork is next, which stops being true once the network forks past it. Falls
   * back to a single role-derived badge when unset.
   */
  badges?: string[]
  recommended?: boolean
  installCommand?: string
  /** What an operator comes to do, each linking the page that carries the steps. Shown in place of installCommand. */
  installTasks?: CoreGethTask[]
  configNotes?: string
  /** Replaces the default "actively maintained" status on the client page, where the maintainers' own maturity label says otherwise. */
  statusNote?: { title: string; body: string }
  securityAdvisories?: SecurityAdvisory[]
  securityAuditUrl?: string
}

// Execution client plugins: a planned framework, so each one's status is 'planned'
export interface ExecutionPlugin {
  id: string
  name: string
  baseClient: string
  language: string
  github: string
  description: string
  status: 'planned'
}

export const nodeClients: NodeClient[] = [
  {
    id: 'core-geth',
    name: 'Core-Geth',
    website: CORE_GETH_HOMEPAGE_URL,
    docs: CORE_GETH_DOCS_URL,
    github: 'https://github.com/ethereumclassic/core-geth',
    description:
      'An Ethereum Classic execution client and public-good Go reference client: a go-ethereum derivative released and maintained in the ethereumclassic GitHub organization, and the recommended client to run. The v1.12 line went 21 months without security maintenance. The v1.13 line closes every client CVE the audits found, including the flaw used to crash Core-Geth v1.12 bootnodes in March 2026, bounds GraphQL queries, and is built with a supported Go toolchain.',
    metaDescription:
      'Core-Geth, an Ethereum Classic execution client: run the v1.13 line, move a v1.12 node with its required key rotation, and read the v1.12 security audit.',
    language: 'Go',
    platforms: ['Windows', 'macOS', 'Linux', 'Docker'],
    features: [
      'Snap and full sync, with archive mode',
      'JSON-RPC, WebSocket and GraphQL APIs',
      'EVM tracing and debugging',
      'Built-in Etchash mining support',
      'MESS (ECBP-1100) deep-reorg defense, set with --mess or --mess=false',
      'Build attestation on every release file',
    ],
    status: 'active',
    role: 'recommended',
    recommended: true,
    installTasks: CORE_GETH_TASKS,
    configNotes:
      'Run with --classic, or no network flag, for Ethereum Classic mainnet, and --mordor for the Mordor testnet.',
    securityAdvisories: [
      {
        cve: 'CVE-2026-26313',
        severity: 'High',
        description: 'P2P RLP item count memory exhaustion — crafted message header crashes node via OOM. Remote, no auth required.',
        commit: '7a4988919',
      },
      {
        cve: 'CVE-2026-22862',
        severity: 'High',
        description: 'ECIES decrypt length undercheck (off-by-15) — undersized RLPx auth payload causes out-of-bounds read and remote crash.',
        commit: 'c46834dd8',
      },
      {
        cve: 'CVE-2026-26315',
        severity: 'Moderate',
        description: 'ECIES GenerateShared missing public key validation — MAC-oracle attack can leak P2P node key bits via repeated unauthenticated handshakes.',
        commit: 'c19892395',
      },
      {
        cve: 'CVE-2026-26314',
        severity: 'High',
        description: 'secp256k1 IsOnCurve field boundary bypass — out-of-field coordinates satisfy the naive curve equation and pass the validity gate.',
        commit: 'c19892395',
      },
      {
        cve: 'CVE-2025-24883',
        severity: 'High',
        description: 'UnmarshalPubkey missing IsOnCurve check — off-curve secp256k1 points pass deserialization and corrupt downstream crypto operations.',
        commit: '681c915f0',
      },
      {
        cve: 'CVE-2026-22868',
        severity: 'Moderate',
        description: 'KZG blob proof DoS — invalid proofs trigger full expensive verification without peer disconnect, enabling sustained CPU exhaustion.',
        commit: '9985c33fb',
      },
      {
        cve: 'GraphQL Depth DoS',
        severity: 'Moderate',
        description: 'No query depth limit on the --graphql endpoint, so one deeply nested query exhausts CPU and memory. v1.13.0 caps query depth at 20.',
        commit: '6a046ee910',
      },
    ],
    securityAuditUrl: '/build/clients/core-geth-security-audit',
  },
  {
    id: 'fukuii',
    name: 'Fukuii',
    website: FUKUII_HOMEPAGE_URL,
    docs: FUKUII_DOCS_URL,
    github: FUKUII_REPO_URL,
    metaDescription:
      'Fukuii, an Ethereum Classic execution client in Scala 3, in alpha: run it on mainnet or the Mordor testnet, and find its latest release.',
    description: FUKUII_DESCRIPTION,
    language: 'Scala',
    platforms: ['Windows', 'macOS', 'Linux', 'Docker'],
    features: FUKUII_FEATURES,
    status: 'active',
    role: 'alternative',
    badges: ['Alternative', FUKUII_STATUS],
    recommended: false,
    installTasks: FUKUII_TASKS,
    configNotes: `Name the network when the node starts: ${FUKUII_MAINNET_COMMAND} for Ethereum Classic mainnet, or ${FUKUII_MORDOR_COMMAND} for the Mordor testnet. It runs on JDK 25, and the container image carries its own.`,
    statusNote: {
      title: FUKUII_STATUS,
      body: "Fukuii's maintainers mark it alpha and not yet recommended for production-critical workloads. Core-Geth is the client to run; Fukuii is an alternative to try, and operator reports shape its road to a stable release.",
    },
  },
]

/**
 * What an ETC plugin is, in the words every surface uses: the clients pages, the mining and Olympia
 * pages, the core-devs agenda and both llms files. The distinction is ownership. A plugin adds
 * Ethereum Classic support to a client another project maintains, so that codebase and the decisions
 * about it stay with that project. Core-Geth is downstream of go-ethereum but a full implementation
 * whose codebase is maintained for Ethereum Classic, and Fukuii is an independent client. Say no more
 * about what a plugin validates until the framework's own documentation states it.
 */
export const PLUGIN_POSITION =
  "A plugin is not a client implementation. It adds Ethereum Classic support to a client another project maintains, so that codebase and the decisions about it stay with that project, outside Ethereum Classic's control. A plugin is no substitute for Fukuii, an independent client, or for Core-Geth, a full implementation downstream of go-ethereum."

/** The same, in one sentence, where a page has room for no more. */
export const PLUGIN_POSITION_SHORT =
  'A plugin is not a client implementation: the codebase it extends, and the decisions about it, stay with the project that maintains it.'

// ETC Execution Client Plugins: a planned framework. `github` links the upstream project each plugin
// targets, which that project maintains.
export const executionPlugins: ExecutionPlugin[] = [
  {
    id: 'besu-etc',
    name: 'Besu',
    baseClient: 'Besu',
    language: 'Java',
    github: 'https://github.com/besu-eth/besu',
    description:
      'A plugin that adds Ethereum Classic chain support to the Besu codebase, a Java client.',
    status: 'planned',
  },
  {
    id: 'erigon-etc',
    name: 'Erigon',
    baseClient: 'Erigon',
    language: 'Go',
    github: 'https://github.com/erigontech/erigon',
    description:
      'A plugin that adds Ethereum Classic chain support to the Erigon codebase, a storage-optimized archival client.',
    status: 'planned',
  },
  {
    id: 'ethrex-etc',
    name: 'Ethrex',
    baseClient: 'Ethrex',
    language: 'Rust',
    github: 'https://github.com/lambdaclass/ethrex',
    description:
      'A plugin that adds Ethereum Classic chain support to the Ethrex codebase, a minimalist Rust client.',
    status: 'planned',
  },
  {
    id: 'geth-etc',
    name: 'Go-Ethereum',
    baseClient: 'Go-Ethereum',
    language: 'Go',
    github: 'https://github.com/ethereum/go-ethereum',
    description:
      'A plugin that adds Ethereum Classic chain support to the Go-Ethereum codebase, Ethereum\'s Go client.',
    status: 'planned',
  },
  {
    id: 'nethermind-etc',
    name: 'Nethermind',
    baseClient: 'Nethermind',
    language: 'C#',
    github: 'https://github.com/NethermindEth/nethermind',
    description:
      'A plugin that adds Ethereum Classic chain support to the Nethermind codebase, a .NET client.',
    status: 'planned',
  },
  {
    id: 'reth-etc',
    name: 'Reth',
    baseClient: 'Reth',
    language: 'Rust',
    github: 'https://github.com/paradigmxyz/reth',
    description:
      'A plugin that adds Ethereum Classic chain support to the Reth codebase, a modular, performance-focused Rust client.',
    status: 'planned',
  },
]

// Development Tools
export interface DevTool {
  id: string
  name: string
  website: string
  description: string
  category: 'framework' | 'testing' | 'deployment' | 'debugging' | 'library' | 'ide'
  languages?: string[]
  recommended?: boolean
}

export const devTools: DevTool[] = [
  {
    id: 'hardhat',
    name: 'Hardhat',
    website: 'https://hardhat.org/',
    description: 'Ethereum development environment for compiling, deploying, testing, and debugging smart contracts.',
    category: 'framework',
    languages: ['JavaScript', 'TypeScript'],
    recommended: true,
  },
  {
    id: 'foundry',
    name: 'Foundry',
    website: 'https://book.getfoundry.sh/',
    description: 'Blazing fast, portable, and modular toolkit for Ethereum application development written in Rust.',
    category: 'framework',
    languages: ['Solidity'],
    recommended: true,
  },
  {
    id: 'remix',
    name: 'Remix IDE',
    website: 'https://remix.ethereum.org/',
    description: 'Browser-based IDE for Solidity development with built-in compiler, debugger, and deployment tools.',
    category: 'ide',
    languages: ['Solidity', 'Vyper'],
    recommended: true,
  },
  {
    id: 'truffle',
    name: 'Truffle Suite',
    website: 'https://trufflesuite.com/',
    description: 'Development framework with built-in testing, debugging, and deployment pipeline.',
    category: 'framework',
    languages: ['JavaScript', 'TypeScript'],
  },
  {
    id: 'ethersjs',
    name: 'ethers.js',
    website: 'https://docs.ethers.org/',
    description: 'Complete Ethereum library and wallet implementation in JavaScript/TypeScript.',
    category: 'library',
    languages: ['JavaScript', 'TypeScript'],
    recommended: true,
  },
  {
    id: 'web3js',
    name: 'web3.js',
    website: 'https://web3js.readthedocs.io/',
    description: 'Collection of libraries for interacting with Ethereum nodes using HTTP, IPC, or WebSocket.',
    category: 'library',
    languages: ['JavaScript', 'TypeScript'],
  },
  {
    id: 'viem',
    name: 'Viem',
    website: 'https://viem.sh/',
    description: 'TypeScript interface for Ethereum with a focus on type safety and developer experience.',
    category: 'library',
    languages: ['TypeScript'],
    recommended: true,
  },
  {
    id: 'wagmi',
    name: 'Wagmi',
    website: 'https://wagmi.sh/',
    description: 'React Hooks for Ethereum. Production-ready with auto caching and type safety.',
    category: 'library',
    languages: ['TypeScript', 'React'],
  },
  {
    id: 'openzeppelin',
    name: 'OpenZeppelin',
    website: 'https://www.openzeppelin.com/contracts',
    description: 'Library of secure, audited smart contract templates including ERC-20, ERC-721, access control, and more.',
    category: 'library',
    languages: ['Solidity'],
    recommended: true,
  },
  {
    id: 'slither',
    name: 'Slither',
    website: 'https://github.com/crytic/slither',
    description: 'Static analysis framework for Solidity, detecting vulnerabilities and code optimization opportunities.',
    category: 'testing',
    languages: ['Python'],
  },
  {
    id: 'mythril',
    name: 'Mythril',
    website: 'https://github.com/ConsenSys/mythril',
    description: 'Security analysis tool for EVM bytecode. Detects security vulnerabilities in smart contracts.',
    category: 'testing',
    languages: ['Python'],
  },
]

// Documentation Resources
export interface DocResource {
  id: string
  name: string
  url: string
  description: string
  category: 'official' | 'tutorial' | 'reference' | 'standards' | 'community'
  icon?: string
}

export const docResources: DocResource[] = [
  {
    id: 'etc-docs',
    name: 'EthereumClassic.com',
    url: 'https://ethereumclassic.com/learn',
    description: 'Ethereum Classic learning resources with protocol documentation and guides.',
    category: 'official',
  },
  {
    id: 'solidity-docs',
    name: 'Solidity Documentation',
    url: 'https://docs.soliditylang.org/',
    description: 'Official Solidity language documentation with tutorials and reference.',
    category: 'official',
  },
  {
    id: 'eips',
    name: 'EIPs (Ethereum Improvement Proposals)',
    url: 'https://eips.ethereum.org/',
    description: 'Standards and specifications for Ethereum, including token standards used on ETC.',
    category: 'standards',
  },
  {
    id: 'ecips',
    name: 'ECIPs (Ethereum Classic Improvement Proposals)',
    url: 'https://ecips.ethereumclassic.org/',
    description: 'Ethereum Classic specific protocol improvements and standards.',
    category: 'standards',
  },
  {
    id: 'core-geth-docs',
    name: 'Core-Geth Documentation',
    url: CORE_GETH_DOCS_URL,
    description: 'Installing Core-Geth, running and operating a node, and the JSON-RPC API reference.',
    category: 'official',
  },
  {
    id: 'chainlist',
    name: 'Chainlist',
    url: 'https://chainlist.org/chain/61',
    description: 'Full list of ETC mainnet RPC endpoints with one-click wallet configuration.',
    category: 'reference',
  },
  {
    id: 'chainlist-mordor',
    name: 'Chainlist Mordor',
    url: 'https://chainlist.org/chain/63',
    description: 'Full list of Mordor testnet RPC endpoints.',
    category: 'reference',
  },
  {
    id: 'openzeppelin-docs',
    name: 'OpenZeppelin Docs',
    url: 'https://docs.openzeppelin.com/contracts/',
    description: 'Documentation for OpenZeppelin smart contract library.',
    category: 'tutorial',
  },
  {
    id: 'cryptozombies',
    name: 'CryptoZombies',
    url: 'https://cryptozombies.io/',
    description: 'Interactive Solidity tutorial through building a game.',
    category: 'tutorial',
  },
  {
    id: 'ethereum-book',
    name: 'Mastering Ethereum',
    url: 'https://github.com/ethereumbook/ethereumbook',
    description: 'Comprehensive book on Ethereum development (open source).',
    category: 'tutorial',
  },
]

// Block Explorers and APIs
export interface ExplorerAPI {
  name: string
  url: string
  apiUrl?: string
  description: string
  network: 'mainnet' | 'testnet' | 'both'
}

export const explorerAPIs: ExplorerAPI[] = [
  {
    name: 'Blockscout',
    url: 'https://etc.blockscout.com',
    apiUrl: 'https://etc.blockscout.com/api',
    description: 'Official ETC block explorer with comprehensive API.',
    network: 'mainnet',
  },
  {
    name: 'Blockscout Mordor',
    url: 'https://etc-mordor.blockscout.com',
    apiUrl: 'https://etc-mordor.blockscout.com/api',
    description: 'Mordor testnet block explorer.',
    network: 'testnet',
  },
  {
    name: '3xpl',
    url: 'https://3xpl.com/ethereum-classic',
    description: 'Universal blockchain explorer supporting ETC with clean interface and API access.',
    network: 'mainnet',
  },
  {
    name: 'Blockchair',
    url: 'https://blockchair.com/ethereum-classic',
    apiUrl: 'https://api.blockchair.com/ethereum-classic',
    description: 'Multi-chain explorer with advanced filtering, data exports, and privacy features.',
    network: 'mainnet',
  },
  {
    name: 'OKLink',
    url: 'https://www.oklink.com/etc',
    apiUrl: 'https://www.oklink.com/api/v5/explorer',
    description: 'Enterprise blockchain data platform with ETC explorer and developer APIs.',
    network: 'mainnet',
  },
  {
    name: 'Tokenview',
    url: 'https://etc.tokenview.io',
    apiUrl: 'https://services.tokenview.io/vipapi',
    description: 'Multi-chain explorer with token analytics, address monitoring, and notification APIs.',
    network: 'mainnet',
  },
]

// Faucets
export interface Faucet {
  name: string
  url: string
  network: 'testnet'
  amount: string
  notes?: string
}

/**
 * EMPTY, and that is the accurate state rather than an oversight.
 *
 * Both entries that used to sit here are gone at the DNS level, verified with
 * `getent hosts` rather than inferred from a page timeout:
 *
 *   faucet.etccooperative.org  NXDOMAIN
 *   mordor.canhaz.net          NXDOMAIN
 *
 * A faucet link that resolves to nothing is worse than no link — a developer
 * follows it mid-setup and cannot tell whether the faucet is down, the testnet
 * is dead, or they mistyped it. Consumers must handle an empty list.
 *
 * WHERE THE REPLACEMENT COMES FROM, so this is not re-derived from scratch.
 * Operator decision, 2026-08-08: DEFERRED. Do not wire a URL here ahead of it.
 *
 * Mordor testnet assets and network monitoring are being stood up as part of
 * the Fukuii build and will live at **ethereumclassic.net**, the devnet site —
 * a public RPC at rpc.ethereumclassic.net, a mining pool, and monitoring among
 * them. Work in progress, so nothing there is linkable yet.
 *
 * That split matters beyond the faucet: devnet tooling belongs on that site,
 * not this one. ethereumclassic.com is the consumer and institutional portal.
 * When something there goes live, link out to it rather than reproducing it.
 *
 * The faucet itself comes from the `mordortestnet` GitHub org —
 * `mordortestnet/mordor-public-faucet`, deployment config over
 * `mordortestnet/faucet`, a modular EVM faucet with captcha / mining / IP /
 * mainnet-balance protection. That org also carries client forks (erigon_etc,
 * nethermind_etc, besu), open-ethereum-pool with etchash, and the `expedition`
 * explorer, which is what the dead expedition.dev links in docs/timeline.yaml
 * point at.
 *
 * Two constraints on whoever does add one: load it first, and note that
 * AGENTS.md requires maintainer approval before listing anything touching funds.
 * Keep the rendered empty state on /build/faucets timeless — describe what is,
 * never "coming soon", per the same file's content rules.
 */
export const faucets: Faucet[] = []

// Getting Started Steps
export interface GettingStartedStep {
  step: number
  title: string
  description: string
  code?: string
  link?: string
  linkText?: string
}

export const gettingStartedSteps: GettingStartedStep[] = [
  {
    step: 1,
    title: 'Set Up Development Environment',
    description:
      'Install Node.js, npm, and your preferred development framework (Hardhat or Foundry recommended).',
    code: 'npm install --save-dev hardhat',
    link: 'https://hardhat.org/getting-started',
    linkText: 'Hardhat Setup Guide',
  },
  {
    step: 2,
    title: 'Configure for ETC',
    description:
      'Add Ethereum Classic mainnet and Mordor testnet to your hardhat.config.js or foundry.toml configuration.',
    code: `// hardhat.config.js
networks: {
  etc: {
    url: "https://etc.blockscout.com/api/eth-rpc",
    chainId: 61
  },
  mordor: {
    url: "https://etc-mordor.blockscout.com/api/eth-rpc",
    chainId: 63
  }
}`,
  },
  {
    step: 3,
    title: 'Get Testnet ETC',
    description:
      'Request Mordor testnet ETC from a faucet to deploy and test your contracts without spending real funds.',
    link: '/build/faucets',
    linkText: 'Testnet Faucets',
  },
  {
    step: 4,
    title: 'Write Your Contract',
    description:
      'Create a Solidity smart contract. ETC is fully EVM-compatible, so any Ethereum contract works on ETC.',
    code: `// contracts/MyToken.sol
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}`,
  },
  {
    step: 5,
    title: 'Deploy to Testnet',
    description:
      'Deploy your contract to Mordor testnet first. Test thoroughly before deploying to mainnet.',
    code: 'npx hardhat run scripts/deploy.js --network mordor',
    link: '/build/docs',
    linkText: 'Deployment Guide',
  },
  {
    step: 6,
    title: 'Verify on Blockscout',
    description:
      'Verify your contract source code on Blockscout for transparency and to enable contract interaction.',
    link: 'https://etc.blockscout.com/contract-verification',
    linkText: 'Contract Verification',
  },
]

// Quick stats for display
export const buildStats = {
  chainId: 61,
  testnetChainId: 63,
  blockTime: '~13 seconds',
  evmVersion: 'Shanghai',
  consensusAlgorithm: 'Proof of Work (ETChash)',
}

// Helper functions
export function getMainnetEndpoints(): RPCEndpoint[] {
  return rpcEndpoints.filter((e) => e.network === 'mainnet')
}

export function getTestnetEndpoints(): RPCEndpoint[] {
  return rpcEndpoints.filter((e) => e.network === 'testnet')
}

export function getToolsByCategory(category: DevTool['category']): DevTool[] {
  return devTools.filter((t) => t.category === category)
}

export function getRecommendedTools(): DevTool[] {
  return devTools.filter((t) => t.recommended)
}

export function getDocsByCategory(category: DocResource['category']): DocResource[] {
  return docResources.filter((d) => d.category === category)
}

export function getActiveClients(): NodeClient[] {
  return nodeClients.filter((c) => c.status === 'active')
}

/**
 * Client implementations to list on the client pages: everything actually
 * runnable today, recommended first.
 *
 * The sort puts the recommended client first, so Core-Geth leads and takes the
 * preferred card treatment (green border for `recommended`). Core-Geth is the
 * client to run; Fukuii, in alpha, is the alternative to try and is not marked
 * recommended.
 */
export function getClientImplementations(): NodeClient[] {
  return nodeClients
    .filter((c) => c.status === 'active' || c.status === 'maintained')
    .sort((a, b) => Number(b.recommended ?? false) - Number(a.recommended ?? false))
}

export function getClientById(id: string): NodeClient | undefined {
  return nodeClients.find((c) => c.id === id)
}

export function getRecommendedClient(): NodeClient | undefined {
  return nodeClients.find((c) => c.role === 'recommended')
}

export function getExecutionPlugins(): ExecutionPlugin[] {
  return executionPlugins
}

export function getPluginById(id: string): ExecutionPlugin | undefined {
  return executionPlugins.find((p) => p.id === id)
}

// Developer resources for Ethereum Classic
// Data for build section pages

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
 * mainnet (61) and Mordor (63), at heights matching the primary RPCs.
 */
export const rpcEndpoints: RPCEndpoint[] = [
  // Mainnet
  {
    provider: 'Rivet',
    url: 'https://etc.rivet.link',
    notes: 'Primary recommended',
    network: 'mainnet',
  },
  {
    provider: 'Blockscout',
    url: 'https://etc.blockscout.com/api/eth-rpc',
    notes: 'Official explorer RPC',
    network: 'mainnet',
  },
  // Testnet
  {
    provider: 'ETC Cooperative',
    url: 'https://rpc.mordor.etccooperative.org',
    notes: 'Primary testnet RPC',
    network: 'testnet',
  },
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
  github: string
  description: string
  language: string
  platforms: ('Windows' | 'macOS' | 'Linux' | 'Docker')[]
  features: string[]
  status: 'active' | 'maintained' | 'deprecated'
  /** Drives the badge color only. */
  role?: 'recommended' | 'maintained' | 'reference'
  /**
   * Badges to render, in order. Describe what the client IS — never which hard
   * fork is next, which stops being true once the network forks past it. Falls
   * back to a single role-derived badge when unset.
   */
  badges?: string[]
  recommended?: boolean
  installCommand?: string
  configNotes?: string
  securityAdvisories?: SecurityAdvisory[]
  securityAuditUrl?: string
}

// Execution Client Plugins (Post-Olympia Roadmap)
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
    id: 'fukuii',
    name: 'Fukuii',
    website: 'https://fukuii.org',
    github: 'https://github.com/fukuii-project/fukuii-cli',
    description:
      "Ethereum Classic's first native client — an EVM execution client in Scala 3 LTS on Pekko Typed Actors, running on the JVM. One binary runs several networks at once in one JVM process, each isolated with its own state, its own metrics registry, and its own configuration; a further network is configuration, not a new client.",
    language: 'Scala',
    platforms: ['Windows', 'macOS', 'Linux', 'Docker'],
    features: [
      'Several networks at once in one JVM process, each fully isolated',
      'Consensus selected per deployment: native Proof-of-Work for ETC mainnet and Mordor',
      'Proof-of-Stake with a built-in consensus layer, or an external client over the Engine API V1–V4',
      'SNAP, fast, and regular sync; JSON-RPC, GraphQL, and an MCP server exposing node state to AI agents',
      'JVM-native end to end for institutions already on the JVM: JFR, async-profiler, JMX and heap dumps work as on any JVM process, with no foreign-language bridge',
      'Prometheus metrics, Grafana dashboards, and liveness and readiness endpoints in the binary',
      'Apache 2.0, with Cosign-signed build provenance and a CycloneDX SBOM on release artifacts',
    ],
    status: 'active',
    role: 'recommended',
    badges: ['Primary', 'Enterprise', 'ETC-native'],
    recommended: true,
    installCommand: 'docker pull ghcr.io/fukuii-project/fukuii-cli:latest',
    configNotes:
      'Select the network with --network=etc for ETC mainnet or --network=mordor for the ETC testnet. Requires a current JDK LTS (25); the Docker image bundles one.',
  },
  {
    id: 'core-geth',
    name: 'Core-Geth',
    website: 'https://github.com/ethereumclassic/core-geth',
    github: 'https://github.com/ethereumclassic/core-geth',
    description:
      'A go-ethereum derivative maintained for Ethereum Classic, carried through the Olympia upgrade for network continuity. etclabscore/core-geth v1.12.x was unmaintained June 2024–March 2026 (21 months), accumulating six unpatched CVEs that were actively exploited against ETC mainnet bootnodes. All CVEs patched by White B0x at ethereumclassic/core-geth, pending release as v1.13.0.',
    language: 'Go',
    platforms: ['Windows', 'macOS', 'Linux', 'Docker'],
    features: [
      'Full and light sync modes',
      'JSON-RPC and WebSocket APIs',
      'EVM tracing and debugging',
      'Built-in mining support',
      'MEV-free transaction ordering',
    ],
    status: 'maintained',
    role: 'maintained',
    recommended: false,
    installCommand: 'docker pull ghcr.io/ethereumclassic/core-geth:latest',
    configNotes:
      'Use --classic flag for ETC mainnet, --mordor for testnet',
    securityAdvisories: [
      {
        cve: 'CVE-2026-26313',
        severity: 'High',
        description: 'P2P RLP item count memory exhaustion — crafted message header crashes node via OOM. Remote, no auth required.',
        commit: '5d0cb8b34',
      },
      {
        cve: 'CVE-2026-22862',
        severity: 'High',
        description: 'ECIES decrypt length undercheck (off-by-15) — undersized RLPx auth payload causes out-of-bounds read and remote crash.',
        commit: 'dc73f2e4f',
      },
      {
        cve: 'CVE-2026-26315',
        severity: 'High',
        description: 'ECIES GenerateShared missing public key validation — MAC-oracle attack can leak P2P node key bits via repeated unauthenticated handshakes.',
        commit: '2d3528803',
      },
      {
        cve: 'CVE-2026-26314',
        severity: 'High',
        description: 'secp256k1 IsOnCurve field boundary bypass — out-of-field coordinates satisfy the naive curve equation and pass the validity gate.',
        commit: '2d3528803',
      },
      {
        cve: 'CVE-2025-24883',
        severity: 'High',
        description: 'UnmarshalPubkey missing IsOnCurve check — off-curve secp256k1 points pass deserialization and corrupt downstream crypto operations.',
        commit: '8e40b7e41',
      },
      {
        cve: 'CVE-2026-22868',
        severity: 'Moderate',
        description: 'KZG blob proof DoS — invalid proofs trigger full expensive verification without peer disconnect, enabling sustained CPU exhaustion.',
        commit: '1419c5310',
      },
      {
        cve: 'GraphQL Depth DoS',
        severity: 'Moderate',
        description: 'No query depth limit on the --graphql endpoint; graphql-go v1.3.0 MaxDepth bug made the limit non-functional even when set.',
        commit: '6c2d383fa',
      },
    ],
    securityAuditUrl: '/build/clients/core-geth-security-audit',
  },
]

// ETC Execution Client Plugins
// Upstream Ethereum clients separate the consensus engine from the execution
// engine. An ETC plugin uses that seam to add Ethereum Classic chain
// support onto an existing Ethereum client's execution layer — it is not a
// separate client, and it carries no mining or PoW consensus. Plugins serve
// non-mining infrastructure: exchanges, RPC providers, explorers, indexers.
// `github` links the upstream project each plugin targets.
export const executionPlugins: ExecutionPlugin[] = [
  {
    id: 'besu-etc',
    name: 'Besu',
    baseClient: 'Besu',
    language: 'Java',
    github: 'https://github.com/besu-eth/besu',
    description:
      'A plugin that adds Ethereum Classic chain support to the Besu codebase, an enterprise-grade Java client.',
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
      'A plugin that adds Ethereum Classic chain support to the Go-Ethereum codebase, the most widely deployed EVM client.',
    status: 'planned',
  },
  {
    id: 'nethermind-etc',
    name: 'Nethermind',
    baseClient: 'Nethermind',
    language: 'C#',
    github: 'https://github.com/NethermindEth/nethermind',
    description:
      'A plugin that adds Ethereum Classic chain support to the Nethermind codebase, a high-performance .NET client.',
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
    url: 'https://github.com/ethereumclassic/core-geth',
    description: 'Documentation for the official ETC node client.',
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
    url: "https://etc.rivet.link",
    chainId: 61
  },
  mordor: {
    url: "https://rpc.mordor.etccooperative.org",
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
 * getActiveClients() filters to status 'active', and Core-Geth is 'maintained'
 * — so the only maintained ETC client was filtered out of both pages whose job
 * is listing clients, appearing on /build/clients only as a --classic flag in a
 * config table. Ordering puts the recommended client first, and the card
 * treatment (green border for `recommended`) plus the gray Maintained badge
 * keep Fukuii unambiguously primary.
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

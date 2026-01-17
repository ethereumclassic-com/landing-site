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
  {
    provider: 'ETC Cooperative',
    url: 'https://www.ethercluster.com/etc',
    notes: 'Community maintained',
    network: 'mainnet',
  },
  {
    provider: 'GETH Classic',
    url: 'https://geth-de.etc-network.info',
    notes: 'Core-Geth node',
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
    provider: 'GETH Mordor',
    url: 'https://geth-mordor.etc-network.info',
    notes: 'Core-Geth node',
    network: 'testnet',
  },
  {
    provider: '0xRPC',
    url: 'https://0xrpc.io/mordor',
    websocket: 'wss://0xrpc.io/mordor',
    notes: 'No tracking',
    network: 'testnet',
  },
]

// Node Clients
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
  recommended?: boolean
  installCommand?: string
  configNotes?: string
}

export const nodeClients: NodeClient[] = [
  {
    id: 'core-geth',
    name: 'Core-Geth',
    website: 'https://etclabscore.github.io/core-geth/',
    github: 'https://github.com/etclabscore/core-geth',
    description:
      'Official Ethereum Classic node client. Fork of go-ethereum with full ETC support and enhanced features.',
    language: 'Go',
    platforms: ['Windows', 'macOS', 'Linux', 'Docker'],
    features: [
      'Full and light sync modes',
      'JSON-RPC and WebSocket APIs',
      'EVM tracing and debugging',
      'Built-in mining support',
      'MEV-free transaction ordering',
    ],
    status: 'active',
    recommended: true,
    installCommand: 'brew install core-geth',
    configNotes:
      'Use --classic flag for ETC mainnet, --mordor for testnet',
  },
  {
    id: 'hyperledger-besu',
    name: 'Hyperledger Besu',
    website: 'https://www.hyperledger.org/projects/besu',
    github: 'https://github.com/hyperledger/besu',
    description:
      'Enterprise-grade Ethereum client with ETC support. Designed for both public and private permissioned network use cases.',
    language: 'Java',
    platforms: ['Windows', 'macOS', 'Linux', 'Docker'],
    features: [
      'Enterprise features',
      'Comprehensive APIs',
      'Permissioning',
      'Privacy groups',
      'Monitoring with Prometheus/Grafana',
    ],
    status: 'active',
    installCommand: 'docker pull hyperledger/besu:latest',
    configNotes:
      'Use --network=classic for ETC mainnet, --network=mordor for testnet',
  },
  {
    id: 'fukuii',
    name: 'Fukuii',
    website: 'https://github.com/chippr-robotics/fukuii',
    github: 'https://github.com/chippr-robotics/fukuii',
    description:
      'High-performance Scala 3 implementation of the Ethereum Classic protocol. Continuation of the Mantis client with modern architecture.',
    language: 'Scala',
    platforms: ['Linux', 'macOS', 'Docker'],
    features: [
      'Fast initial sync with checkpoints',
      'Built on Scala 3.3.4 LTS and JDK 21',
      'Interactive TUI and CLI utilities',
      'AI integration via MCP support',
      'Comprehensive test suites',
    ],
    status: 'active',
    installCommand: 'docker pull ghcr.io/chippr-robotics/fukuii:latest',
    configNotes: 'Use network=etc for mainnet, network=mordor for testnet',
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
    name: 'EthereumClassic.org',
    url: 'https://ethereumclassic.org/knowledge',
    description: 'Official Ethereum Classic knowledge base with protocol documentation and guides.',
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
    url: 'https://etclabscore.github.io/core-geth/',
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
]

// Faucets
export interface Faucet {
  name: string
  url: string
  network: 'testnet'
  amount: string
  notes?: string
}

export const faucets: Faucet[] = [
  {
    name: 'ETC Cooperative Mordor Faucet',
    url: 'https://faucet.etccooperative.org/',
    network: 'testnet',
    amount: '1 METC',
    notes: 'Official testnet faucet',
  },
  {
    name: 'ETC Mordor Faucet',
    url: 'https://mordor.canhaz.net/',
    network: 'testnet',
    amount: '0.1 METC',
    notes: 'Community faucet',
  },
]

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
    link: 'https://faucet.etccooperative.org/',
    linkText: 'Mordor Faucet',
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

export function getClientById(id: string): NodeClient | undefined {
  return nodeClients.find((c) => c.id === id)
}

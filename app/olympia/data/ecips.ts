// Olympia ECIP Summaries
// Source: /media/dev/2tb/dev/ECIPs/_specs/

export interface ECIPSummary {
  id: string
  number: number
  title: string
  status: 'draft' | 'review' | 'accepted' | 'final'
  phase: 'core' | 'future'
  summary: string
  keyChanges: string[]
  specUrl: string
}

export const ecips: ECIPSummary[] = [
  // Core ECIPs (Phase 1-2) — included in Olympia activation
  {
    id: 'ecip-1111',
    number: 1111,
    title: 'Olympia EVM/Protocol Upgrades',
    status: 'draft',
    phase: 'core',
    summary:
      'Introduces EIP-1559 dynamic fee market to ETC and redirects the basefee to the Olympia Treasury instead of burning it. Also aligns ETC with 13 EIPs from Ethereum\'s Shanghai and Cancun upgrades.',
    keyChanges: [
      'EIP-1559 dynamic base fee pricing',
      'EIP-3198 BASEFEE opcode',
      'Basefee directed to treasury (not burned)',
      'EIP-5656 MCOPY instruction',
      'EIP-1153 Transient storage (TSTORE/TLOAD)',
      'EIP-6780 SELFDESTRUCT restriction',
      'EIP-2537 BLS12-381 precompile',
      'EIP-7702 Account abstraction',
      'Gas limit increase to 60M',
    ],
    specUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1111',
  },
  {
    id: 'ecip-1112',
    number: 1112,
    title: 'Olympia Treasury Contract',
    status: 'draft',
    phase: 'core',
    summary:
      'Defines an immutable, governance-isolated vault that accumulates basefee revenue. No proxy patterns, no admin methods — a receive-only contract in Stage 1.',
    keyChanges: [
      'Immutable contract — no upgradeable proxy',
      'Receive-only in Stage 1 (accumulation)',
      'Protocol-controlled, not multisig',
      'Deterministic CREATE2 deployment',
      'Identical address on Mordor and ETC mainnet',
    ],
    specUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1112',
  },
  {
    id: 'ecip-1113',
    number: 1113,
    title: 'Olympia DAO Governance Framework',
    status: 'draft',
    phase: 'core',
    summary:
      'Establishes a modular governor with soulbound NFT voting. One address = one vote. No governance token. Three-layer sanctions defense at propose/cancel/execute.',
    keyChanges: [
      'Soulbound (non-transferable) membership NFTs',
      'One address = one vote (no governance token)',
      'OpenZeppelin Governor-based architecture',
      'Configurable quorum and voting periods',
      'Three-layer OFAC sanctions screening',
      'Emergency pause capability',
    ],
    specUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1113',
  },
  {
    id: 'ecip-1114',
    number: 1114,
    title: 'Ethereum Classic Funding Proposal Process',
    status: 'draft',
    phase: 'core',
    summary:
      'Defines the ECFP lifecycle — permissionless on-chain funding proposals with hash-bound integrity ensuring the approved proposal is exactly what executes.',
    keyChanges: [
      'Permissionless proposal submission',
      'Hash-bound integrity (keccak256 of proposal data)',
      'On-chain registry via ECFPRegistry contract',
      'Timelock-enforced execution delay',
      'Full auditability of disbursements',
    ],
    specUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1114',
  },
  {
    id: 'ecip-1121',
    number: 1121,
    title: 'Execution Client Specification Alignment',
    status: 'draft',
    phase: 'core',
    summary:
      'Aligns ETC execution clients with 13 EIPs from Ethereum\'s Shanghai and Cancun upgrades, ensuring EVM compatibility and modern tooling support.',
    keyChanges: [
      'Shanghai: EIP-3651, EIP-3855, EIP-3860, EIP-6049',
      'Cancun: EIP-5656 (MCOPY), EIP-1153 (transient storage)',
      'EIP-7702 (account abstraction)',
      'EIP-2537 (BLS12-381 precompile)',
      'EIP-2935 (historical block hashes)',
      'Cross-client test matrix verified',
    ],
    specUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1121',
  },

  // Future ECIPs (Phase 3+) — not included in initial Olympia activation
  {
    id: 'ecip-1115',
    number: 1115,
    title: 'L-Curve Smoothing for Long-Term Network Security',
    status: 'draft',
    phase: 'future',
    summary:
      'Optional governance-layer mechanism for smoothing miner distribution curves to ensure long-term network security.',
    keyChanges: [
      'Governance-layer miner distribution',
      'Long-term security modeling',
      'Optional — requires governance vote',
    ],
    specUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1115',
  },
  {
    id: 'ecip-1116',
    number: 1116,
    title: 'Base Fee Miner Distribution',
    status: 'draft',
    phase: 'future',
    summary:
      'Proposes a 95% miner / 5% treasury split of basefee at the consensus layer. Deferred — needs Phase 4 data before consideration.',
    keyChanges: [
      '95/5 basefee split (miner/treasury)',
      'Consensus-layer enforcement',
      'Requires Phase 4 governance data',
    ],
    specUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1116',
  },
  {
    id: 'ecip-1117',
    number: 1117,
    title: 'Futarchy DAO Governance',
    status: 'draft',
    phase: 'future',
    summary:
      'Prediction market-based governance following Robin Hanson\'s futarchy framework. Uses market prices to evaluate funding proposals.',
    keyChanges: [
      'Prediction markets for funding decisions',
      'Robin Hanson futarchy framework',
      'Market-based proposal evaluation',
    ],
    specUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1117',
  },
  {
    id: 'ecip-1118',
    number: 1118,
    title: 'Futarchy Funding & Streaming Disbursements',
    status: 'draft',
    phase: 'future',
    summary:
      'Zero-fee market ecosystem powered by the basefee flywheel. Streaming disbursements for approved funding proposals.',
    keyChanges: [
      'Zero-fee prediction markets',
      'Basefee flywheel mechanism',
      'Streaming disbursements',
    ],
    specUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1118',
  },
  {
    id: 'ecip-1119',
    number: 1119,
    title: 'Treasury Sanctions Compliance Oracle',
    status: 'draft',
    phase: 'future',
    summary:
      'Multi-oracle sanctions screening with Chainalysis and Chainlink integration for treasury compliance.',
    keyChanges: [
      'Multi-oracle OFAC screening',
      'Chainalysis + Chainlink integration',
      'Three-layer defense (propose/cancel/execute)',
    ],
    specUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1119',
  },
]

export const coreEcips = ecips.filter((e) => e.phase === 'core')
export const futureEcips = ecips.filter((e) => e.phase === 'future')

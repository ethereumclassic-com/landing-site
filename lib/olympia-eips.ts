/**
 * Every EIP row of ECIP-1121 §Specification, with the disposition ECIP-1121 gives it and the
 * upgrade or reason it is listed under, generated from that section's tables. ECIP-1121 is a
 * draft: regenerate this list whenever it changes rather than editing a row by hand. Every EIP
 * list, table and count on the site is drawn from this array.
 *
 * Dispositions, in ECIP-1121's own terms: adopted at the Olympia block (core); adopted without
 * a block (networking and interface); adopted with a modification another ECIP in the suite
 * states; already in force before Olympia; blocked by a dependency; deferred; excluded.
 */

export type EipDisposition =
  | 'core'
  | 'networking'
  | 'interface'
  | 'modified'
  | 'in-force'
  | 'blocked'
  | 'deferred'
  | 'excluded'

export interface OlympiaEip {
  eip: number
  /** The link label ECIP-1121 gives the EIP. */
  label: string
  disposition: EipDisposition
  /** The upgrade an adopted or blocked EIP comes from, or why an EIP is deferred, excluded or in force. */
  group: string
  /** For a blocked EIP, the EIP whose absence blocks it. */
  blockedOn?: number
}

export const OLYMPIA_EIPS: readonly OlympiaEip[] = [
  { eip: 1153, label: 'Transient storage opcodes', disposition: 'core', group: 'Dencun' },
  { eip: 5656, label: 'MCOPY', disposition: 'core', group: 'Dencun' },
  { eip: 6780, label: 'SELFDESTRUCT only in same tx', disposition: 'core', group: 'Dencun' },
  { eip: 2537, label: 'BLS12-381 precompile', disposition: 'core', group: 'Pectra' },
  { eip: 2935, label: 'Historical block hashes in state', disposition: 'core', group: 'Pectra' },
  { eip: 7623, label: 'Increase calldata cost', disposition: 'core', group: 'Pectra' },
  { eip: 7702, label: 'Set EOA account code', disposition: 'core', group: 'Pectra' },
  { eip: 7823, label: 'MODEXP input bounds', disposition: 'core', group: 'Fusaka' },
  { eip: 7825, label: 'Transaction gas limit cap', disposition: 'core', group: 'Fusaka' },
  { eip: 7883, label: 'MODEXP gas cost increase', disposition: 'core', group: 'Fusaka' },
  { eip: 7934, label: 'RLP block size limit', disposition: 'core', group: 'Fusaka' },
  { eip: 7939, label: 'CLZ opcode', disposition: 'core', group: 'Fusaka' },
  { eip: 7951, label: 'secp256r1 precompile', disposition: 'core', group: 'Fusaka' },
  { eip: 7778, label: 'Block gas accounting without refunds', disposition: 'core', group: 'Glamsterdam' },
  { eip: 7954, label: 'Increase maximum contract size', disposition: 'core', group: 'Glamsterdam' },
  { eip: 7976, label: 'Increase calldata floor cost', disposition: 'core', group: 'Glamsterdam' },
  { eip: 7981, label: 'Increase access list cost', disposition: 'core', group: 'Glamsterdam' },
  { eip: 7997, label: 'Deterministic Factory Contract', disposition: 'core', group: 'Glamsterdam' },
  { eip: 8024, label: 'SWAPN, DUPN, EXCHANGE', disposition: 'core', group: 'Glamsterdam' },
  { eip: 8246, label: 'Remove SELFDESTRUCT burn', disposition: 'core', group: 'Glamsterdam' },
  { eip: 7642, label: 'eth/69', disposition: 'networking', group: 'Fusaka' },
  { eip: 7975, label: 'eth/70', disposition: 'networking', group: 'Glamsterdam' },
  { eip: 7910, label: 'eth_config JSON-RPC method', disposition: 'interface', group: 'Fusaka' },
  { eip: 1559, label: 'Fee market change', disposition: 'modified', group: 'London' },
  { eip: 3198, label: 'BASEFEE opcode', disposition: 'modified', group: 'London' },
  { eip: 7928, label: 'Block-Level Access Lists', disposition: 'modified', group: 'Glamsterdam' },
  { eip: 8159, label: 'eth/71: Block Access List Exchange', disposition: 'modified', group: 'Glamsterdam' },
  { eip: 8189, label: 'snap/2: BAL-based state healing', disposition: 'modified', group: 'Glamsterdam' },
  { eip: 2780, label: 'Resource-based intrinsic transaction gas', disposition: 'blocked', group: 'Glamsterdam', blockedOn: 7708 },
  { eip: 8037, label: 'State creation gas cost increase', disposition: 'blocked', group: 'Glamsterdam', blockedOn: 7708 },
  { eip: 8038, label: 'State-access gas cost update', disposition: 'blocked', group: 'Glamsterdam', blockedOn: 7708 },
  { eip: 7708, label: 'ETH transfers emit a log', disposition: 'blocked', group: 'Glamsterdam', blockedOn: 4788 },
  { eip: 4844, label: 'Shard Blob Transactions', disposition: 'deferred', group: 'Blob data availability' },
  { eip: 7516, label: 'BLOBBASEFEE instruction', disposition: 'deferred', group: 'Blob data availability' },
  { eip: 7691, label: 'Blob throughput increase', disposition: 'deferred', group: 'Blob data availability' },
  { eip: 7840, label: 'Add blob schedule to EL config files', disposition: 'deferred', group: 'Blob data availability' },
  { eip: 7594, label: 'PeerDAS: Peer Data Availability Sampling', disposition: 'deferred', group: 'Blob data availability' },
  { eip: 7892, label: 'Blob Parameter Only Hardforks', disposition: 'deferred', group: 'Blob data availability' },
  { eip: 7918, label: 'Blob base fee bounded by execution cost', disposition: 'deferred', group: 'Blob data availability' },
  { eip: 8070, label: 'eth/72: Sparse Blobpool', disposition: 'deferred', group: 'Blob data availability' },
  { eip: 8136, label: 'Cell-Level Deltas for Data Column Broadcast', disposition: 'deferred', group: 'Blob data availability' },
  { eip: 4895, label: 'Beacon chain push withdrawals as operations', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 4788, label: 'Beacon block root in the EVM', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 7044, label: 'Perpetually Valid Signed Voluntary Exits', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 7045, label: 'Increase max attestation inclusion slot', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 7514, label: 'Add Max Epoch Churn Limit', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 6110, label: 'Supply validator deposits on chain', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 7002, label: 'Execution layer triggerable withdrawals', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 7251, label: 'Increase the MAX_EFFECTIVE_BALANCE', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 7549, label: 'Move committee index outside Attestation', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 7685, label: 'General purpose execution layer requests', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 7917, label: 'Deterministic proposer lookahead', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 7688, label: 'Forward compatible consensus data structures', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 7732, label: 'Enshrined Proposer-Builder Separation', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 7843, label: 'SLOTNUM opcode', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 8045, label: 'Exclude slashed validators from proposing', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 8061, label: 'Increase exit and consolidation churn', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 8282, label: 'Builder Execution Requests', disposition: 'excluded', group: 'Proof-of-Stake' },
  { eip: 7935, label: 'Set default gas limit to 60M', disposition: 'excluded', group: 'No client behavior to adopt' },
  { eip: 7904, label: 'Compute Gas Cost Analysis', disposition: 'excluded', group: 'No client behavior to adopt' },
  { eip: 8261, label: 'Gas Limit Schedule', disposition: 'excluded', group: 'No client behavior to adopt' },
  { eip: 161, label: 'State trie clearing', disposition: 'in-force', group: 'Activated at a prior network upgrade' },
  { eip: 170, label: 'Contract code size limit', disposition: 'in-force', group: 'Activated at a prior network upgrade' },
  { eip: 198, label: 'Big integer modular exponentiation', disposition: 'in-force', group: 'Activated at a prior network upgrade' },
  { eip: 1014, label: 'Skinny CREATE2', disposition: 'in-force', group: 'Activated at a prior network upgrade' },
  { eip: 1052, label: 'EXTCODEHASH opcode', disposition: 'in-force', group: 'Activated at a prior network upgrade' },
  { eip: 2200, label: 'Structured definitions for net gas metering', disposition: 'in-force', group: 'Activated at a prior network upgrade' },
  { eip: 2565, label: 'ModExp gas cost', disposition: 'in-force', group: 'Activated at a prior network upgrade' },
  { eip: 2718, label: 'Typed transaction envelope', disposition: 'in-force', group: 'Activated at a prior network upgrade' },
  { eip: 2929, label: 'Gas cost increases for state access opcodes', disposition: 'in-force', group: 'Activated at a prior network upgrade' },
  { eip: 2930, label: 'Optional access lists', disposition: 'in-force', group: 'Activated at a prior network upgrade' },
  { eip: 3529, label: 'Reduction in refunds', disposition: 'in-force', group: 'Activated at a prior network upgrade' },
  { eip: 3541, label: 'Reject new contract code starting with the 0xEF byte', disposition: 'in-force', group: 'Activated at a prior network upgrade' },
  { eip: 3860, label: 'Limit and meter initcode', disposition: 'in-force', group: 'Activated at a prior network upgrade' },
  { eip: 2681, label: 'Limit account nonce to 2^64-1', disposition: 'in-force', group: 'In force with no activating upgrade' },
  { eip: 3607, label: 'Reject transactions from senders with deployed code', disposition: 'in-force', group: 'In force with no activating upgrade' },
  { eip: 2124, label: 'Fork identifier for chain compatibility checks', disposition: 'in-force', group: 'The devp2p version lineage' },
  { eip: 2364, label: 'eth/64: forkid-extended protocol handshake', disposition: 'in-force', group: 'The devp2p version lineage' },
  { eip: 2464, label: 'eth/65: transaction announcements and retrievals', disposition: 'in-force', group: 'The devp2p version lineage' },
  { eip: 2481, label: 'eth/66: request identifier', disposition: 'in-force', group: 'The devp2p version lineage' },
  { eip: 4938, label: 'eth/67: removal of GetNodeData', disposition: 'in-force', group: 'The devp2p version lineage' },
  { eip: 5793, label: 'eth/68: add tx type to tx announcement', disposition: 'in-force', group: 'The devp2p version lineage' },
]

export const eipUrl = (n: number) => `https://eips.ethereum.org/EIPS/eip-${n}`

/** The rows under one disposition, in ECIP-1121's order. */
export const eipsBy = (disposition: EipDisposition) => OLYMPIA_EIPS.filter((e) => e.disposition === disposition)

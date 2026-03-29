import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'atlantis',
  title: 'Atlantis',
  date: '2019-09-12',
  summary:
    'ECIP-1054 — Aligned ETC with Ethereum\'s Spurious Dragon and Byzantium upgrades. REVERT, STATICCALL, alt_bn128 precompiles, receipt status codes, and state trie clearing.',
  content: `## Atlantis (ECIP-1054) Network Upgrade

**Activation Block:** 8,772,000\\
**Activation Date:** September 12, 2019\\
**ECIP Status:** Final

---

### Overview

Atlantis was a major compatibility upgrade that brought ETC's EVM up to parity with Ethereum's Spurious Dragon and Byzantium hard forks. It added critical opcodes (\`REVERT\`, \`STATICCALL\`, \`RETURNDATASIZE\`, \`RETURNDATACOPY\`), precompiled contracts for elliptic curve operations, and replaced intermediate state roots in receipts with transaction status codes. These changes enabled modern Solidity compilation targets and expanded the tooling available to ETC developers.

### Included Changes

| EIP | Title | Summary |
|-----|-------|---------|
| [EIP-100](https://eips.ethereum.org/EIPS/eip-100) | Difficulty Adjustment for Uncles | Target mean block time including uncles |
| [EIP-140](https://eips.ethereum.org/EIPS/eip-140) | REVERT Instruction | Allows contracts to signal failure without consuming all gas |
| [EIP-161](https://eips.ethereum.org/EIPS/eip-161) | State Trie Clearing | Removes empty accounts created during DoS attacks |
| [EIP-170](https://eips.ethereum.org/EIPS/eip-170) | Contract Code Size Limit | Maximum 24,576 bytes for deployed contract bytecode |
| [EIP-196](https://eips.ethereum.org/EIPS/eip-196) | alt_bn128 Addition and Scalar Multiplication | Precompiled contracts for elliptic curve operations |
| [EIP-197](https://eips.ethereum.org/EIPS/eip-197) | alt_bn128 Pairing Check | Optimal ate pairing check precompile |
| [EIP-198](https://eips.ethereum.org/EIPS/eip-198) | BIGINT Modular Exponentiation | Precompiled contract for modular exponentiation |
| [EIP-211](https://eips.ethereum.org/EIPS/eip-211) | RETURNDATASIZE and RETURNDATACOPY | New opcodes for accessing return data from calls |
| [EIP-214](https://eips.ethereum.org/EIPS/eip-214) | STATICCALL | New opcode for calls that cannot modify state |
| [EIP-658](https://eips.ethereum.org/EIPS/eip-658) | Transaction Status Code in Receipts | Replace state root in receipts with success/failure status |

### Technical Details

- **EIP-140: REVERT** — Before \`REVERT\`, a failing contract consumed all remaining gas. \`REVERT\` allows contracts to abort execution, return an error message, and refund unused gas. This is essential for modern Solidity error handling (\`require()\`, \`revert()\`)
- **EIP-196/197: alt_bn128 precompiles** — Precompiled contracts for elliptic curve addition, scalar multiplication, and pairing checks on the alt_bn128 curve. These enable efficient zk-SNARK verification on-chain — the cryptographic foundation for privacy protocols and Layer 2 scaling solutions
- **EIP-214: STATICCALL** — A call variant that guarantees no state modifications. Enables contracts to safely call untrusted code for read-only operations. Critical for the \`view\` and \`pure\` function modifiers in Solidity
- **EIP-658: Receipt status codes** — Replaced the intermediate state root in transaction receipts with a simple boolean status (1 = success, 0 = failure). This simplified transaction verification and enabled dApps to reliably detect failed transactions
- **EIP-170: Contract code size limit** — Capped deployed contract bytecode at 24,576 bytes (24 KB). Prevents DoS through deployment of arbitrarily large contracts, which would bloat the state trie

### Context

By 2019, the gap between ETC's EVM and Ethereum's had grown significantly — Byzantium activated on ETH in October 2017, nearly two years prior. This gap meant that modern Solidity versions, development tools, and smart contracts could not be used on ETC. Atlantis closed this gap in a single upgrade, bringing ETC's EVM to Byzantium-level compatibility. The upgrade was coordinated across four Core Devs Calls (May–June 2019) with competing timeline proposals that were resolved through community consensus.

### Outcome

Activated at block 8,772,000 on September 12, 2019. ETC gained access to the modern Solidity compiler, zk-SNARK precompiles, and the full range of Ethereum development tooling for the first time.

---

### Related

- [ECIP-1054: Atlantis EVM and Protocol Upgrades](https://ecips.ethereumclassic.org/ECIPs/ecip-1054)`,
  ecipRefs: ['ecip-1054'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 8_772_000,
}

export default entry

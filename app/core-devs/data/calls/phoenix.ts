import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'phoenix',
  title: 'Phoenix',
  date: '2020-06-01',
  summary:
    'ECIP-1088 — Aligned ETC with Ethereum\'s Istanbul upgrade. Blake2, alt_bn128 repricing, ChainID opcode, trie-dependent opcode repricing, calldata reduction, and SSTORE rebalancing.',
  content: `## Phoenix (ECIP-1088) Network Upgrade

**Activation Block:** 10,500,839\\
**Activation Date:** June 1, 2020\\
**ECIP Status:** Final

---

### Overview

Phoenix completed ETC's alignment with the Ethereum Foundation's Istanbul upgrade, adding the Blake2 compression precompile, repricing alt_bn128 operations, introducing the \`CHAINID\` opcode, and rebalancing gas costs for trie-dependent and storage operations. The upgrade was rebuilt from scratch after the failed Aztlan (ECIP-1061) and initial Phoenix (ECIP-1078) proposals both introduced bugs — the final ECIP-1088 represented a clean reimplementation that was thoroughly tested before mainnet activation.

### Included Changes

| EIP | Title | Summary |
|-----|-------|---------|
| [EIP-152](https://eips.ethereum.org/EIPS/eip-152) | Blake2 Compression Function F | Precompiled contract for Blake2b compression |
| [EIP-1108](https://eips.ethereum.org/EIPS/eip-1108) | Reduce alt_bn128 Gas Costs | Dramatically reduced precompile costs for elliptic curve operations |
| [EIP-1344](https://eips.ethereum.org/EIPS/eip-1344) | ChainID Opcode | New opcode returning the chain ID (61 for ETC) |
| [EIP-1884](https://eips.ethereum.org/EIPS/eip-1884) | Trie-Size-Dependent Opcode Repricing | Increased gas for SLOAD, BALANCE, EXTCODEHASH to reflect state growth |
| [EIP-2028](https://eips.ethereum.org/EIPS/eip-2028) | Calldata Gas Cost Reduction | Reduced calldata cost from 68 to 16 gas per non-zero byte |
| [EIP-2200](https://eips.ethereum.org/EIPS/eip-2200) | SSTORE Net Gas Metering | Rebalanced SSTORE costs considering SLOAD price change from EIP-1884 |

### Technical Details

- **EIP-152: Blake2b precompile** — Added a precompiled contract at address \`0x09\` for the Blake2b compression function. Enables efficient verification of Zcash block headers and Equihash proofs on-chain, supporting cross-chain bridges and interoperability protocols
- **EIP-1108: alt_bn128 repricing** — Dramatically reduced the gas cost of the alt_bn128 elliptic curve precompiles introduced in Atlantis. \`ECADD\` dropped from 500 to 150 gas, \`ECMUL\` from 40,000 to 6,000, and pairing checks from 100,000+ to a base of 45,000. This made zk-SNARK verification economically practical for real applications
- **EIP-1344: CHAINID opcode** — Returns the chain's EIP-155 chain ID (61 for ETC) as an EVM opcode. Enables smart contracts to verify which chain they are executing on at runtime, critical for cross-chain replay protection and multi-chain dApp deployments
- **EIP-1884: Trie-dependent repricing** — Increased gas costs for \`SLOAD\` (200 → 800), \`BALANCE\` (400 → 700), and \`EXTCODEHASH\` (400 → 700) to reflect the growing state trie size. As the state grows, these operations require more disk I/O, and the gas costs must track the actual computation
- **EIP-2028: Calldata reduction** — Reduced the cost of non-zero calldata bytes from 68 to 16 gas. This significantly reduced transaction costs for data-heavy operations like multi-signature wallet transactions, Layer 2 data availability, and batch operations
- **EIP-2200: SSTORE rebalancing** — Introduced net gas metering for \`SSTORE\` that accounts for the increased \`SLOAD\` cost from EIP-1884. Ensures that contracts performing multiple writes to the same storage slot in a transaction are not unfairly penalized

### Context

Phoenix has a notable backstory. The initial attempt to bring Istanbul changes to ETC — Aztlan (ECIP-1061) — omitted EIP-1884 but included EIP-2200, which depends on EIP-1884's SLOAD repricing. This caused a consensus bug on the Mordor testnet. ECIP-1078 attempted to patch the issue but was also deemed insufficient. The community rejected both proposals and rebuilt the upgrade from scratch as ECIP-1088, which included the full Istanbul EIP set. Two Core Devs Calls (February 2020) resolved the crisis.

### Outcome

Activated at block 10,500,839 on June 1, 2020. zk-SNARK verification became economically practical, cross-chain contract verification was enabled via \`CHAINID\`, and calldata costs were reduced for data-heavy transactions.

---

### Related

- [ECIP-1088: Phoenix EVM and Protocol Upgrades](https://ecips.ethereumclassic.org/ECIPs/ecip-1088)`,
  ecipRefs: ['ecip-1088'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 10_500_839,
}

export default entry

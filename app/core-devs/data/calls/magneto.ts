import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'magneto',
  title: 'Magneto',
  date: '2021-07-23',
  summary:
    'ECIP-1103 — Aligned ETC with Ethereum\'s Berlin upgrade. Typed transactions, access lists, and gas cost adjustments.',
  content: `## Magneto (ECIP-1103) Network Upgrade

**Activation Block:** 13,189,133\\
**Activation Date:** July 23, 2021\\
**ECIP Status:** Final

---

### Overview

Magneto aligned Ethereum Classic with the Ethereum Foundation's Berlin upgrade, introducing typed transaction envelopes, optional access lists, and repriced state access opcodes. These changes modernized ETC's transaction format, mitigated potential DoS vectors through more accurate gas pricing, and laid the foundation for future transaction type extensions.

### Included Changes

| EIP | Title | Summary |
|-----|-------|---------|
| [EIP-2565](https://eips.ethereum.org/EIPS/eip-2565) | ModExp Gas Cost | Repriced MODEXP precompile to reflect actual computation cost |
| [EIP-2718](https://eips.ethereum.org/EIPS/eip-2718) | Typed Transaction Envelope | Framework for new transaction types (Type 0 = legacy) |
| [EIP-2929](https://eips.ethereum.org/EIPS/eip-2929) | Gas Cost Increases for State Access Opcodes | Cold/warm access pricing for SLOAD, CALL, BALANCE, EXT* |
| [EIP-2930](https://eips.ethereum.org/EIPS/eip-2930) | Optional Access Lists | Type-1 transactions can declare accessed addresses and storage keys |

### Technical Details

- **EIP-2565: ModExp gas cost** — The MODEXP precompile (used for modular exponentiation in cryptographic operations) was significantly overpriced for small inputs and underpriced for large inputs. EIP-2565 introduced a more accurate pricing formula that better reflects actual computation cost, making RSA signature verification and other cryptographic operations more affordable
- **EIP-2718: Typed transaction envelope** — Introduced a transaction format where the first byte indicates the transaction type. Legacy transactions (Type 0) are unchanged. New transaction types can be added without breaking existing infrastructure. This is the foundation for EIP-2930 access lists (Type 1) and later EIP-1559 transactions (Type 2, added in Olympia)
- **EIP-2929: State access gas costs** — Introduced "cold" and "warm" access pricing. The first access to an address or storage slot in a transaction (cold) costs more; subsequent accesses (warm) cost less:
  - \`SLOAD\`: 800 → 2,100 (cold) / 100 (warm)
  - \`CALL\`, \`BALANCE\`, \`EXT*\`: 700 → 2,600 (cold) / 100 (warm)
  - This more accurately prices the actual I/O cost and mitigates potential DoS vectors
- **EIP-2930: Optional access lists (Type-1 transactions)** — Transactions can declare upfront which addresses and storage keys they will access. Pre-declared slots receive the warm access price, providing a gas discount. This also enables transactions to pre-pay for cross-contract state access, improving gas estimation predictability

### Context

Magneto was part of ETC's ongoing strategy of selectively adopting EVM improvements from the Ethereum Foundation. The typed transaction envelope (EIP-2718) was particularly significant — it created the extensible framework that would later support EIP-1559 fee market transactions in the Olympia upgrade.

### Outcome

Activated at block 13,189,133 on July 23, 2021. The upgrade introduced the modern transaction format used by wallets and tooling today, and established the cold/warm access pricing model that more accurately reflects I/O costs.

---

### Related

- [ECIP-1103: Magneto EVM and Protocol Upgrades](https://ecips.ethereumclassic.org/ECIPs/ecip-1103)
- [EIP-2565: ModExp Gas Cost](https://eips.ethereum.org/EIPS/eip-2565)
- [EIP-2718: Typed Transaction Envelope](https://eips.ethereum.org/EIPS/eip-2718)
- [EIP-2929: Gas Cost Increases for State Access Opcodes](https://eips.ethereum.org/EIPS/eip-2929)
- [EIP-2930: Optional Access Lists](https://eips.ethereum.org/EIPS/eip-2930)`,
  ecipRefs: ['ecip-1103'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 13_189_133,
}

export default entry

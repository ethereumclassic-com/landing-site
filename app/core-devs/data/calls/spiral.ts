import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'spiral',
  title: 'Spiral',
  date: '2024-02-05',
  summary:
    'ECIP-1109 — Aligned ETC with Ethereum\'s Shanghai upgrade (execution layer changes only). PUSH0 instruction, warm COINBASE, and initcode limits.',
  content: `## Spiral (ECIP-1109) Network Upgrade

**Activation Block:** 19,250,000\\
**Activation Date:** February 5, 2024\\
**ECIP Status:** Final

---

### Overview

Spiral aligned Ethereum Classic with the execution layer changes from the Ethereum Foundation's Shanghai upgrade. It introduced the PUSH0 instruction (reducing bytecode size and gas costs), warmed the COINBASE address (cheaper miner interactions), limited initcode size (preventing DoS via oversized contract creation), and formally deprecated SELFDESTRUCT. PoS-specific changes were omitted as they are not applicable to ETC's Proof-of-Work consensus.

### Included Changes

| EIP | Title | Summary |
|-----|-------|---------|
| [EIP-3651](https://eips.ethereum.org/EIPS/eip-3651) | Warm COINBASE | COINBASE address starts warm (100 gas) instead of cold (2,600 gas) |
| [EIP-3855](https://eips.ethereum.org/EIPS/eip-3855) | PUSH0 Instruction | New opcode pushes constant 0 onto the stack (2 gas, saves bytecode) |
| [EIP-3860](https://eips.ethereum.org/EIPS/eip-3860) | Limit and Meter Initcode | Caps initcode at 49,152 bytes, charges 2 gas per 32-byte word |
| [EIP-6049](https://eips.ethereum.org/EIPS/eip-6049) | Deprecate SELFDESTRUCT | Formal deprecation signal — contracts should not depend on SELFDESTRUCT |

### What Was Omitted

| EIP | Title | Reason |
|-----|-------|--------|
| [EIP-4399](https://eips.ethereum.org/EIPS/eip-4399) | Supplant DIFFICULTY with PREVRANDAO | PoS-only — replaces DIFFICULTY opcode with randomness beacon |
| [EIP-4895](https://eips.ethereum.org/EIPS/eip-4895) | Beacon Chain Push Withdrawals | PoS-only — enables validator withdrawals from the beacon chain |

### Technical Details

- **EIP-3651: Warm COINBASE** — The \`COINBASE\` address (block producer/miner) now starts in the "warm" access set at the beginning of every transaction. This reduces the gas cost of interacting with the miner's address from 2,600 (cold) to 100 (warm). This benefits contracts that pay miners directly (e.g., MEV searchers, block builder payment contracts)
- **EIP-3855: PUSH0 instruction** — A new opcode (\`0x5f\`) that pushes the value 0 onto the stack. Before PUSH0, contracts used \`PUSH1 0x00\` (2 bytes, 3 gas) to push zero. PUSH0 uses 1 byte and 2 gas — a small but universal improvement since zero is the most commonly pushed constant in EVM bytecode. Reduces deployed contract size across the board
- **EIP-3860: Limit and meter initcode** — Caps the maximum size of contract creation initcode at 49,152 bytes (twice the maximum deployed contract size of 24,576 bytes). Initcode is also metered at 2 gas per 32-byte word. Before this change, arbitrarily large initcode could be submitted without proportional gas cost, creating a potential DoS vector
- **EIP-6049: Deprecate SELFDESTRUCT** — A formal signal that \`SELFDESTRUCT\` will be modified or removed in a future upgrade. The opcode still functions but contract developers are warned not to depend on its state-clearing behavior. This follows EIP-3529 (Mystique) which already removed SELFDESTRUCT gas refunds

### Context

Spiral was the most recent activated upgrade on ETC and represents the current production EVM level. The selective adoption of Shanghai changes — taking execution layer improvements while omitting PoS-specific features — demonstrates ETC's established approach to protocol upgrades: adopt EVM improvements that enhance developer experience and security, while maintaining Proof-of-Work consensus.

### Outcome

Activated at block 19,250,000 on February 5, 2024. PUSH0 immediately reduced bytecode size for all newly deployed contracts. This is the current EVM level on Ethereum Classic, pending the Olympia upgrade.

---

### Related

- [ECIP-1109: Spiral EVM and Protocol Upgrades](https://ecips.ethereumclassic.org/ECIPs/ecip-1109)
- [EIP-3651: Warm COINBASE](https://eips.ethereum.org/EIPS/eip-3651)
- [EIP-3855: PUSH0 Instruction](https://eips.ethereum.org/EIPS/eip-3855)
- [EIP-3860: Limit and Meter Initcode](https://eips.ethereum.org/EIPS/eip-3860)
- [EIP-6049: Deprecate SELFDESTRUCT](https://eips.ethereum.org/EIPS/eip-6049)`,
  ecipRefs: ['ecip-1109'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 19_250_000,
}

export default entry

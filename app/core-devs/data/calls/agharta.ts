import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'agharta',
  title: 'Agharta',
  date: '2020-01-12',
  summary:
    'ECIP-1056 — Aligned ETC with Ethereum\'s Constantinople and Petersburg upgrades. Bitwise shifting, CREATE2, and EXTCODEHASH opcodes.',
  content: `## Agharta (ECIP-1056) Network Upgrade

**Activation Block:** 9,573,000\\
**Activation Date:** January 12, 2020\\
**ECIP Status:** Final

---

### Overview

Agharta aligned ETC with Ethereum's Constantinople and Petersburg upgrades, adding three new EVM opcodes: bitwise shifting instructions, the \`CREATE2\` opcode for deterministic contract deployment, and \`EXTCODEHASH\` for efficient contract code verification. The upgrade's finalization was complicated by the Aztlan (ECIP-1061) crisis, where an alternative proposal introduced bugs on the Mordor testnet. The community ultimately reverted to the original Agharta scope with a clean implementation.

### Included Changes

| EIP | Title | Summary |
|-----|-------|---------|
| [EIP-145](https://eips.ethereum.org/EIPS/eip-145) | Bitwise Shifting Instructions | SHL, SHR, SAR opcodes for efficient bit manipulation |
| [EIP-1014](https://eips.ethereum.org/EIPS/eip-1014) | Skinny CREATE2 | Deterministic contract deployment based on bytecode and salt |
| [EIP-1052](https://eips.ethereum.org/EIPS/eip-1052) | EXTCODEHASH | Returns the keccak256 hash of a contract's bytecode |

### Technical Details

- **EIP-145: Bitwise shifting** — Added \`SHL\` (shift left), \`SHR\` (logical shift right), and \`SAR\` (arithmetic shift right) opcodes. Before these, bit shifting required expensive arithmetic operations (\`MUL\`/\`DIV\` with powers of 2). Native shift instructions are 3 gas vs. 5+ gas for the arithmetic equivalent, and enable efficient binary data manipulation
- **EIP-1014: CREATE2** — Enables deployment of contracts to deterministic addresses computed from the deployer address, a salt value, and the creation bytecode hash. The address is known before deployment, enabling counterfactual instantiation — contracts can be referenced and receive funds before they exist on-chain. This is foundational for state channels, CREATE2 factory patterns, and the Olympia governance contracts
- **EIP-1052: EXTCODEHASH** — Returns the keccak256 hash of an account's code. Before this opcode, checking contract code required \`EXTCODECOPY\` to copy the entire bytecode into memory and then hashing it — expensive for large contracts. \`EXTCODEHASH\` costs 700 gas regardless of code size, enabling efficient proxy pattern verification and contract identity checks

### Context

The Agharta finalization process exposed governance challenges. The competing Aztlan proposal (ECIP-1061) attempted to bundle Agharta with additional Istanbul EIPs but introduced a bug in the SSTORE gas metering that broke the Mordor testnet. After several days of crisis, the community reverted to the clean Agharta scope (Constantinople/Petersburg only) and pushed Istanbul changes to the subsequent Phoenix upgrade. Four Core Devs Calls (October–December 2019) navigated this process.

### Outcome

Activated at block 9,573,000 on January 12, 2020. The CREATE2 opcode enabled deterministic contract deployment patterns now used extensively in ETC's DeFi and governance infrastructure.

---

### Related

- [ECIP-1056: Agharta EVM and Protocol Upgrades](https://ecips.ethereumclassic.org/ECIPs/ecip-1056)
- [EIP-145: Bitwise Shifting Instructions](https://eips.ethereum.org/EIPS/eip-145)
- [EIP-1014: Skinny CREATE2](https://eips.ethereum.org/EIPS/eip-1014)
- [EIP-1052: EXTCODEHASH](https://eips.ethereum.org/EIPS/eip-1052)`,
  ecipRefs: ['ecip-1056'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 9_573_000,
}

export default entry

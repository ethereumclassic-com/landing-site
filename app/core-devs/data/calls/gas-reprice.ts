import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'gas-reprice',
  title: 'Gas Reprice',
  date: '2016-10-24',
  summary:
    'EIP-150 — repriced I/O-heavy opcodes for DoS protection after the Shanghai attacks.',
  content: `## Gas Reprice (ECIP-1015) Network Upgrade

**Activation Block:** 2,500,000\\
**Activation Date:** October 24, 2016\\
**ECIP Status:** Final

---

### Overview

The Gas Reprice upgrade was an emergency response to the Shanghai denial-of-service attacks that plagued the network in September and October 2016. Attackers exploited underpriced I/O-heavy opcodes to create transactions that took minutes to process, grinding the network to a halt. EIP-150 repriced these operations to reflect their true computational cost. This was the first shared ETH/ETC security response after the chain split.

### Included Changes

| EIP | Title | Summary |
|-----|-------|---------|
| [EIP-150](https://eips.ethereum.org/EIPS/eip-150) | Gas cost changes for IO-heavy operations | Increased gas costs for EXTCODESIZE, EXTCODECOPY, BALANCE, SLOAD, CALL, DELEGATECALL, CALLCODE, SELFDESTRUCT |

### Technical Details

- **I/O opcode repricing** — Operations that read from the state trie (disk I/O) were dramatically underpriced relative to their actual cost. EIP-150 increased costs for:
  - \`EXTCODESIZE\`: 20 → 700 gas
  - \`EXTCODECOPY\`: 20 → 700 gas
  - \`BALANCE\`: 20 → 400 gas
  - \`SLOAD\`: 50 → 200 gas
  - \`CALL\`, \`DELEGATECALL\`, \`CALLCODE\`: 40 → 700 gas
  - \`SELFDESTRUCT\`: 0 → 5,000 gas (when creating new account)
- **The 63/64 gas rule** — A child call can receive at most 63/64 of the available gas from its parent. This limits the depth of nested calls and prevents stack-depth attacks that could exploit the call stack limit of 1,024

### Context

The Shanghai DoS attacks (September–October 2016) demonstrated that the original gas schedule was fundamentally miscalibrated. Attackers could create transactions with millions of cheap \`EXTCODESIZE\` calls, forcing nodes to perform massive amounts of disk I/O for minimal gas cost. The attacks caused block processing times to spike from milliseconds to over 30 seconds, effectively halting the network.

Also known as "Tangerine Whistle" on the Ethereum Foundation chain. Despite the recent DAO Fork split, both ETH and ETC coordinated on this security-critical upgrade.

### Outcome

Activated at block 2,500,000 on October 24, 2016. The repriced gas schedule immediately eliminated the DoS attack vector, and the network returned to normal operation.

---

### Related

- [EIP-150: Gas cost changes for IO-heavy operations](https://eips.ethereum.org/EIPS/eip-150)
- [ECIP-1015](https://ecips.ethereumclassic.org/ECIPs/ecip-1015)`,
  ecipRefs: ['ecip-1015'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 2_500_000,
}

export default entry

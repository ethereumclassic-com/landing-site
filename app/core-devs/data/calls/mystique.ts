import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'mystique',
  title: 'Mystique',
  date: '2022-02-12',
  summary:
    'ECIP-1104 — Aligned ETC with a subset of Ethereum\'s London upgrade, excluding EIP-1559. Fee market change deferred to Olympia where basefee is redirected to the Treasury.',
  content: `## Mystique (ECIP-1104) Network Upgrade

**Activation Block:** 14,525,000\\
**Activation Date:** February 12, 2022\\
**ECIP Status:** Final

---

### Overview

Mystique aligned Ethereum Classic with a subset of the Ethereum Foundation's London upgrade. It included the gas refund reduction (EIP-3529) and the 0xEF byte reservation (EIP-3541), while deliberately excluding EIP-1559 (fee market change), EIP-3198 (BASEFEE opcode), and EIP-3228 (difficulty bomb delay). The EIP-1559 fee market was deferred to the Olympia upgrade, where the basefee is redirected to the Treasury instead of being burned.

### Included Changes

| EIP | Title | Summary |
|-----|-------|---------|
| [EIP-3529](https://eips.ethereum.org/EIPS/eip-3529) | Alternative Refund Reduction | Reduced gas refunds for SELFDESTRUCT and SSTORE, eliminating gas token exploits |
| [EIP-3541](https://eips.ethereum.org/EIPS/eip-3541) | Reject New Contracts Starting with 0xEF | Reserves the 0xEF prefix for future EVM Object Format (EOF) |

### What Was Omitted

| EIP | Title | Reason |
|-----|-------|--------|
| [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) | Fee Market Change | Burning basefee conflicts with ECIP-1017 fixed monetary policy. Deferred to Olympia where basefee funds the Treasury |
| [EIP-3198](https://eips.ethereum.org/EIPS/eip-3198) | BASEFEE Opcode | Depends on EIP-1559 activation; behavior undefined without it |
| [EIP-3228](https://eips.ethereum.org/EIPS/eip-3228) | Difficulty Bomb Delay | Not applicable — ETC permanently removed the bomb in ECIP-1041 |

### Technical Details

- **EIP-3529: Alternative refund reduction** — Reduced gas refunds for \`SELFDESTRUCT\` (from 24,000 to 0) and \`SSTORE\` (capped at 20% of transaction gas). This eliminated the "gas token" exploit pattern where contracts could be deployed and then self-destructed to claim gas refunds, effectively using the refund mechanism as an on-chain gas futures market. The change made gas token contracts (like CHI and GST2) economically unviable
- **EIP-3541: Reject 0xEF contracts** — New contracts deployed with bytecode starting with the \`0xEF\` byte are rejected. Existing contracts are unaffected. This reserves the \`0xEF\` prefix for the future EVM Object Format (EOF), preventing conflicts with contracts that might coincidentally start with that byte

### Context

The decision to exclude EIP-1559 was deliberate and principled. On Ethereum, EIP-1559 burns the basefee — permanently destroying ETH. For ETC, this would conflict with the fixed monetary policy established by ECIP-1017: burning supply would reduce the total below the ~210.7M cap, undermining the predictable emission schedule. The Olympia upgrade solves this by redirecting the basefee to the Treasury (ECIP-1112) instead of burning it, preserving the monetary policy while adopting the fee market mechanism.

### Outcome

Activated at block 14,525,000 on February 12, 2022. Gas token contracts became unviable, the 0xEF prefix was reserved for future use, and the selective adoption approach preserved ETC's monetary policy while maintaining EVM compatibility.

---

### Related

- [ECIP-1104: Mystique EVM and Protocol Upgrades](https://ecips.ethereumclassic.org/ECIPs/ecip-1104)
- [EIP-3529: Alternative Refund Reduction](https://eips.ethereum.org/EIPS/eip-3529)
- [EIP-3541: Reject New Contracts Starting with 0xEF](https://eips.ethereum.org/EIPS/eip-3541)`,
  ecipRefs: ['ecip-1104'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 14_525_000,
}

export default entry

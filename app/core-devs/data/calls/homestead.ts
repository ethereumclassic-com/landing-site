import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'homestead',
  title: 'Homestead',
  date: '2016-03-14',
  summary:
    'First major planned upgrade — EIP-2, EIP-7, EIP-8. Transaction validity rules, DELEGATECALL opcode, and devp2p forward compatibility.',
  content: `## Homestead Network Upgrade

**Activation Block:** 1,150,000\\
**Activation Date:** March 14, 2016\\
**ECIP Status:** Final

---

### Overview

Homestead was the first major planned hard fork of the Ethereum network, signaling the transition from "beta" to production readiness. It introduced critical changes to transaction validity, a new opcode for proxy patterns, and forward-compatible networking. ETC inherits this upgrade as part of the shared pre-DAO Fork history.

### Included Changes

| EIP | Title | Summary |
|-----|-------|---------|
| [EIP-2](https://eips.ethereum.org/EIPS/eip-2) | Homestead Hard-fork Changes | Increased contract creation gas cost, tightened transaction signature rules |
| [EIP-7](https://eips.ethereum.org/EIPS/eip-7) | DELEGATECALL | New opcode enabling proxy patterns and library contracts |
| [EIP-8](https://eips.ethereum.org/EIPS/eip-8) | devp2p Forward Compatibility | Future-proofed the peer-to-peer networking protocol |

### Technical Details

- **EIP-2: Transaction validity changes** — Contract creation via transactions increased gas cost from 21,000 to 53,000, making it more expensive to deploy contracts but correctly accounting for the computation involved. Transaction signatures were tightened to accept only low-s values (s must be less than secp256k1n/2), eliminating a source of transaction malleability
- **EIP-7: DELEGATECALL opcode** — A new opcode at \`0xf4\` that calls another contract's code while preserving the original caller's context (msg.sender and msg.value). This enabled proxy contract patterns and shared library contracts — foundational patterns for upgradeable smart contracts
- **EIP-8: devp2p forward compatibility** — Modified the RLPx handshake and peer discovery protocols to tolerate future protocol extensions. Nodes would accept packets with additional fields rather than rejecting them, preventing network fragmentation during future upgrades

### Context

Homestead represented a vote of confidence in the network's stability. The Frontier launch had been intentionally minimal — Homestead signaled that the Ethereum protocol was ready for broader adoption. The DELEGATECALL opcode in particular proved foundational, as it enabled the proxy upgrade patterns used by virtually all modern smart contract systems.

### Outcome

Activated at block 1,150,000 on March 14, 2016. The upgrade completed without incident, and the network transitioned smoothly to production status.

---

### Related

- [EIP-2: Homestead Hard-fork Changes](https://eips.ethereum.org/EIPS/eip-2)
- [EIP-7: DELEGATECALL](https://eips.ethereum.org/EIPS/eip-7)
- [EIP-8: devp2p Forward Compatibility](https://eips.ethereum.org/EIPS/eip-8)`,
  ecipRefs: [],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 1_150_000,
}

export default entry

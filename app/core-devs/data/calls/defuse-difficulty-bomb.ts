import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'defuse-difficulty-bomb',
  title: 'Defuse Difficulty Bomb',
  date: '2018-05-29',
  summary:
    'ECIP-1041 — permanently removed the difficulty bomb from ETC, ensuring stable block times without forced upgrade pressure.',
  content: `## Defuse Difficulty Bomb (ECIP-1041) Network Upgrade

**Activation Block:** 5,900,000\\
**Activation Date:** May 29, 2018\\
**ECIP Status:** Final

---

### Overview

The Defuse Difficulty Bomb upgrade permanently removed the exponential difficulty increase from Ethereum Classic. The difficulty bomb — inherited from the original Ethereum protocol — was designed to force the network toward Proof-of-Stake by making Proof-of-Work mining increasingly impractical. Since ETC committed to remaining on Proof-of-Work, the bomb served no purpose and posed a threat to network stability. Rather than repeatedly delaying it (as ETH did), ETC removed it entirely.

### Included Changes

| ECIP | Title | Summary |
|------|-------|---------|
| [ECIP-1041](https://ecips.ethereumclassic.org/ECIPs/ecip-1041) | Remove Difficulty Bomb | Complete removal of the exponential difficulty increase mechanism |

### Technical Details

- **Complete removal vs. delay** — Ethereum delayed the difficulty bomb five times before finally transitioning to Proof-of-Stake in September 2022. ETC took the decisive approach: complete removal. The exponential term in the difficulty calculation formula was set to zero permanently
- **Difficulty calculation change** — The bomb added \`2^(floor(block_number / 100000) - 2)\` to the difficulty of each block. As the block number increased, this term grew exponentially, eventually overwhelming the normal difficulty adjustment and making blocks increasingly slow to produce. ECIP-1041 removed this term entirely
- **Stable block times** — Without the bomb, ETC's block difficulty adjusts purely based on hashrate, producing consistent ~13 second block times without artificial pressure

### Context

The difficulty bomb was Ethereum's "ice age" — a mechanism to make the chain increasingly unusable unless validators upgraded to a new consensus mechanism. This made sense for a network planning to migrate to Proof-of-Stake, but was actively harmful for a Proof-of-Work chain. ECIP-1010 (Die Hard) had temporarily paused the bomb; ECIP-1041 removed it permanently. This was a critical sovereignty decision, affirming that ETC's consensus mechanism would be determined by the community, not by a ticking clock in the protocol code.

### Outcome

Activated at block 5,900,000 on May 29, 2018. The difficulty bomb was permanently removed, and ETC block times have remained stable and predictable since. The network's commitment to Proof-of-Work was codified at the protocol level.

---

### Related

- [ECIP-1041: Remove Difficulty Bomb](https://ecips.ethereumclassic.org/ECIPs/ecip-1041)
- [ECIP-1010: Delay Difficulty Bomb Explosion](https://ecips.ethereumclassic.org/ECIPs/ecip-1010)`,
  ecipRefs: ['ecip-1041'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 5_900_000,
}

export default entry

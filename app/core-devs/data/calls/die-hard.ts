import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'die-hard',
  title: 'Die Hard',
  date: '2017-01-13',
  summary:
    'ECIP-1010 — The first ETC-specific hard fork. Difficulty bomb delay, replay protection (chain ID 61), and EXP gas cost increase.',
  content: `## Die Hard (ECIP-1010) Network Upgrade

**Activation Block:** 3,000,000\\
**Activation Date:** January 13, 2017\\
**ECIP Status:** Final

---

### Overview

Die Hard was the first hard fork unique to Ethereum Classic — the point where ETC's protocol diverged from the Ethereum Foundation's upgrade schedule. It delayed the difficulty bomb (giving ETC time to determine its own consensus future), introduced replay protection between the two chains, and addressed remaining gas pricing issues from the Shanghai attacks. Known as "Spurious Dragon" on the ETH chain, ETC's version included the ETC-specific difficulty bomb delay via ECIP-1010.

### Included Changes

| EIP/ECIP | Title | Summary |
|----------|-------|---------|
| [ECIP-1010](https://ecips.ethereumclassic.org/ECIPs/ecip-1010) | Delay Difficulty Bomb Explosion | Paused exponential difficulty growth between blocks 3M–5M |
| [EIP-155](https://eips.ethereum.org/EIPS/eip-155) | Simple Replay Attack Protection | Chain ID 61 for ETC, preventing cross-chain transaction replay |
| [EIP-160](https://eips.ethereum.org/EIPS/eip-160) | EXP Cost Increase | Raised EXP opcode gas cost from 10 to 50 per byte |
| [EIP-161](https://eips.ethereum.org/EIPS/eip-161) | State Trie Clearing | Removed empty accounts created during the Shanghai DoS attacks |

### Technical Details

- **ECIP-1010: Difficulty bomb delay** — The difficulty bomb (inherited from Ethereum) was an exponential increase in mining difficulty designed to force the network toward Proof-of-Stake. ETC had no intention of transitioning to PoS, but the bomb threatened to make mining impractical. ECIP-1010 paused the bomb's exponential term between blocks 3,000,000 and 5,000,000, buying time for the community to decide on a permanent solution (which came later with ECIP-1041's permanent removal)
- **EIP-155: Replay protection** — After the DAO Fork split, transactions signed on one chain could be replayed on the other. EIP-155 introduced a chain ID in the transaction signature (chain ID 61 for ETC, 1 for ETH), making transactions chain-specific and preventing replay attacks
- **EIP-160: EXP gas cost increase** — Raised the cost of the \`EXP\` opcode from 10 to 50 gas per byte of exponent, correcting an underpriced operation that could be exploited for DoS
- **EIP-161: State trie clearing** — Enabled removal of empty accounts (zero balance, zero nonce, no code) from the state trie. Millions of empty accounts had been created during the Shanghai DoS attacks, bloating the state

### Context

Die Hard marked ETC's emergence as an independent protocol. While ETH activated "Spurious Dragon" with its own set of changes, ETC's version included ECIP-1010 — the first proposal created through the ECIP process. Replay protection was particularly critical: without it, every ETC transaction was vulnerable to being replayed on the ETH chain (and vice versa), creating a persistent security risk for users of both networks.

### Outcome

Activated at block 3,000,000 on January 13, 2017. Replay protection eliminated cross-chain transaction risks, the difficulty bomb was paused, and millions of empty accounts were cleared from the state trie. ETC's protocol independence was established.

---

### Related

- [ECIP-1010: Delay Difficulty Bomb Explosion](https://ecips.ethereumclassic.org/ECIPs/ecip-1010)
- [EIP-155: Simple Replay Attack Protection](https://eips.ethereum.org/EIPS/eip-155)
- [EIP-160: EXP Cost Increase](https://eips.ethereum.org/EIPS/eip-160)
- [EIP-161: State Trie Clearing](https://eips.ethereum.org/EIPS/eip-161)`,
  ecipRefs: ['ecip-1010'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 3_000_000,
}

export default entry

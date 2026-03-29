import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'frontier-thawing',
  title: 'Frontier Thawing',
  date: '2015-09-07',
  summary:
    'Increased gas limit from 5,000 to enable meaningful transactions and contract deployment.',
  content: `## Frontier Thawing Network Upgrade

**Activation Block:** 200,000\\
**Activation Date:** September 7, 2015\\
**ECIP Status:** Final

---

### Overview

Frontier Thawing was the first protocol upgrade to the network. It lifted the initial 5,000 gas limit, enabling meaningful transactions and smart contract deployment for the first time. It also introduced the difficulty bomb — an exponential increase in mining difficulty designed to force future protocol upgrades.

### Technical Details

- **Gas limit increase** — The 5,000 gas limit was a temporary safety measure for the Frontier launch. After block 200,000, miners could vote to increase the gas limit through the standard gas limit voting mechanism, enabling contract deployment and complex transactions
- **Difficulty bomb introduced** — An exponential difficulty increase that would gradually make mining impractical, intended to pressure the network toward future upgrades (later removed on ETC by ECIP-1041)
- **Default gas limit target:** 3,141,592 gas per block — sufficient for basic smart contract interactions

### Context

With the gas limit unlocked, the Ethereum network transitioned from a minimal mining-only system to a functional smart contract platform. The difficulty bomb would later become a key point of divergence between ETH (which used it to force the PoS transition) and ETC (which permanently removed it at block 5,900,000).

### Outcome

Activated at block 200,000 on September 7, 2015. Smart contract deployment became practical for the first time, enabling the ecosystem of decentralized applications that followed.

---

### Related

- [Ethereum Foundation: The Thawing Frontier](https://blog.ethereum.org/2015/08/04/the-thawing-frontier/)`,
  ecipRefs: [],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 200_000,
}

export default entry

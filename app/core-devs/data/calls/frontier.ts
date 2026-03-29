import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'frontier',
  title: 'Frontier',
  date: '2015-07-30',
  summary:
    'Genesis block — the Ethereum network launches. ETC inherits all Ethereum Foundation protocol decisions made before the DAO Fork.',
  content: `## Frontier Network Upgrade

**Activation Block:** 1\\
**Activation Date:** July 30, 2015\\
**ECIP Status:** Final

---

### Overview

Frontier was the genesis launch of the Ethereum network — the first block of what would become Ethereum Classic. It was intentionally minimal, designed as a "beta" release for developers and miners to begin operating the network before more complex features were enabled.

ETC inherits this and all subsequent Ethereum Foundation protocol decisions made before the DAO Fork at block 1,920,000.

### Technical Details

- **Genesis block** — Block 1, the first block mined on the network
- **Gas limit:** 5,000 per block — set extremely low via a "canary contract" to prevent complex transactions during the initial launch period
- **Consensus:** Proof-of-Work using the Ethash algorithm
- **Block reward:** 5 ETC per block (pre-monetary policy)
- **Smart contracts:** Technically supported but impractical at 5,000 gas limit — contract deployment required the gas limit to increase through miner voting
- **Mining:** CPU and GPU mining supported from day one

### Context

Frontier launched with minimal functionality by design. The low gas limit meant the network could only process simple value transfers. This conservative approach allowed the network to stabilize before enabling full smart contract functionality in the Frontier Thawing upgrade at block 200,000.

### Outcome

Activated at block 1 on July 30, 2015. The Ethereum network launched successfully with miners and early developers establishing the initial network infrastructure.

---

### Related

- [Ethereum Foundation Frontier Announcement](https://blog.ethereum.org/2015/07/22/frontier-is-coming-what-to-expect-and-how-to-prepare/)`,
  ecipRefs: [],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 1,
}

export default entry

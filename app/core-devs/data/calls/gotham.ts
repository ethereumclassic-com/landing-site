import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'gotham',
  title: 'Gotham',
  date: '2017-12-11',
  summary:
    'ECIP-1017 monetary policy — established the 210.7 million ETC supply cap with era-based emission reduction.',
  content: `## Gotham (ECIP-1017) Network Upgrade

**Activation Block:** 5,000,000\\
**Activation Date:** December 11, 2017\\
**ECIP Status:** Final

---

### Overview

Gotham was the most consequential economic upgrade in Ethereum Classic's history. It established a fixed monetary policy with a hard supply cap — something the original Ethereum protocol never defined. ECIP-1017 introduced era-based emission reduction (20% every 5 million blocks), capping the total supply at approximately 210.7 million ETC. ECIP-1039 specified the precise rounding behavior for sub-wei calculations across eras.

### Included Changes

| ECIP | Title | Summary |
|------|-------|---------|
| [ECIP-1017](https://ecips.ethereumclassic.org/ECIPs/ecip-1017) | Monetary Policy and Final Modification to the Ethereum Classic Emission Schedule | Era-based 20% reduction every 5M blocks, ~210.7M supply cap |
| [ECIP-1039](https://ecips.ethereumclassic.org/ECIPs/ecip-1039) | Monetary Policy Rounding Specification | Defines precise rounding behavior for sub-wei reward calculations |

### Technical Details

- **Era-based emission schedule** — Block rewards reduce by 20% every 5,000,000 blocks (an "era"):
  - Era 1 (blocks 1–5,000,000): 5 ETC per block
  - Era 2 (blocks 5,000,001–10,000,000): 4 ETC per block
  - Era 3 (blocks 10,000,001–15,000,000): 3.2 ETC per block
  - Each subsequent era: previous reward × 0.8
- **Supply cap** — The geometric series converges to approximately 210,700,000 ETC total supply. Unlike Bitcoin's halving (50% reduction), ETC uses a smoother 20% reduction curve
- **Uncle and nephew rewards** — Uncle block rewards and nephew inclusion rewards also reduce proportionally with each era, maintaining consistent incentive structures
- **ECIP-1039: Rounding specification** — As era rewards decrease, the per-block reward eventually involves fractional wei values. ECIP-1039 specifies that rewards are rounded down (truncated) to the nearest wei, ensuring deterministic calculation across all client implementations

### Context

Before Gotham, ETC had no defined monetary policy — block rewards would have continued at 5 ETC per block indefinitely, resulting in unlimited supply. The fixed emission schedule gave ETC a clear economic identity: a sound money asset with predictable, declining issuance and a known supply cap. The 20% reduction per era (versus Bitcoin's 50% halving) produces a gentler emission curve that avoids the abrupt supply shocks associated with halvings.

### Outcome

Activated at block 5,000,000 on December 11, 2017. Era 2 began immediately, reducing the block reward from 5 ETC to 4 ETC. The monetary policy has operated continuously since activation, with the network currently in Era 4 (2.56 ETC per block).

---

### Related

- [ECIP-1017: Monetary Policy and Final Modification to the Ethereum Classic Emission Schedule](https://ecips.ethereumclassic.org/ECIPs/ecip-1017)
- [ECIP-1039: Monetary Policy Rounding Specification](https://ecips.ethereumclassic.org/ECIPs/ecip-1039)`,
  ecipRefs: ['ecip-1017', 'ecip-1039'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 5_000_000,
}

export default entry

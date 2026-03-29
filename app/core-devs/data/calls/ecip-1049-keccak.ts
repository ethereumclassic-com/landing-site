import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'ecip-1049-keccak',
  title: 'ECIP-1049 Keccak256',
  date: '2020-09-11',
  summary:
    'ECIP-1049 proposed changing ETC\'s mining algorithm from Ethash/Etchash to Keccak256 (SHA-3). After three years of discussion and four Core Devs Calls, the proposal was withdrawn due to lack of consensus and risk of a contentious chain split.',
  content: `## ECIP-1049 Keccak256 Mining Algorithm Change

**ECIP Status:** Withdrawn\\
**Discussion Period:** 2019–2022\\
**Outcome:** Proposal withdrawn — no consensus reached

---

### Overview

ECIP-1049 proposed replacing ETC's Ethash/Etchash proof-of-work algorithm with Keccak256 (SHA-3). Proponents argued it would improve ASIC resistance and align ETC with a NIST-standardized hash function. Opponents raised concerns about a contentious chain split between GPU miners on Etchash and FPGA/ASIC miners on SHA-3, disruption to the existing mining ecosystem, and violation of the ECIP process requirements for rough consensus.

### Timeline

- **2019:** ECIP-1049 submitted, entered Last Call status
- **September 11, 2020:** Core Devs Call 13 — mining algorithm review alongside ECIP-1043 (Fixed DAG) and ECIP-1099 (Calibrate Epoch Duration)
- **September 25, 2020:** Core Devs Call 14 — 51% attack solutions discussed in the wake of multiple attacks. ECIP-1099 moved toward acceptance
- **October 2, 2020:** Core Devs Call 15 — dedicated ECIP-1049 breakout session. Consensus was not present due to many unanswered questions
- **November 28, 2020:** Thanos upgrade activated with ECIP-1099 (Etchash) instead
- **February 21, 2022:** Core Devs Call 22 — proposed rejection. Original champion stepped down; Bob Summerwill became new champion. Agreed the proposal needed a material rewrite
- **2022:** ECIP-1049 withdrawn. The Etchash mining ecosystem was preserved

### Key Issues

- **Contentious chain split risk** — GPU miners on Etchash would not automatically migrate to Keccak256 hardware. A forced algorithm change risked splitting the network
- **Existing ecosystem disruption** — Miners had invested in Etchash-compatible hardware. ECIP-1099 (Thanos) had already addressed the DAG size concern
- **ECIP process compliance** — Opposition argued the proposal lacked the rough consensus required by ECIP-1000 for protocol changes
- **Alternative adopted** — ECIP-1099 (Etchash) was accepted and activated at block 11,700,000, resolving the GPU mining accessibility concern that motivated ECIP-1049

---

### Related

- [ECIP-1049: Change the ETC Proof of Work Algorithm to Keccak256](https://ecips.ethereumclassic.org/ECIPs/ecip-1049)`,
  ecipRefs: ['ecip-1049'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: null,
  isRejected: true,
}

export default entry

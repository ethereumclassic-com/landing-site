import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'ecip-1098-proto-treasury',
  title: 'ECIP-1098 Proto Treasury',
  date: '2021-09-20',
  summary:
    'ECIP-1098 was IOHK\'s formal Proto Treasury System proposal. After a year of community debate, both ETC Coop and IOHK withdrew support. The IOHK Grothendieck team wound down following the withdrawal.',
  content: `## ECIP-1098 Proto Treasury System

**ECIP Status:** Withdrawn\\
**Discussion Period:** 2020–2021\\
**Outcome:** Withdrawn — IOHK and ETC Coop withdrew support

---

### Overview

ECIP-1098 was IOHK's formal proposal for a protocol-level treasury system on Ethereum Classic, succeeding the earlier ECIP-1051 discussions. The proposal would have funded development through block reward diversion with on-chain governance for fund allocation. After a year of community debate about whether a network-level treasury aligned with ETC's principles, both ETC Coop and IOHK withdrew their support in September 2021. The IOHK Grothendieck team subsequently wound down.

### Timeline

- **2020:** IOHK submitted ECIP-1098 following the ECIP-1051 discussions and 51% attack crisis
- **2020–2021:** Year-long community debate on treasury design, governance, and compatibility with ETC values
- **September 2021:** ETC Coop withdrew support, followed by IOHK
- **Post-withdrawal:** The IOHK Grothendieck team (Mantis client developers) announced wind-down

### Key Issues

- **Block reward diversion** — Like ECIP-1051, the proto treasury relied on diverting block rewards, conflicting with ECIP-1017's fixed monetary policy
- **Governance complexity** — On-chain governance for fund allocation introduced centralization vectors that the community considered incompatible with ETC's principles
- **Loss of development resources** — The withdrawal and subsequent Grothendieck wind-down reduced ETC's active development capacity
- **Legacy** — The rejection of both ECIP-1051 and ECIP-1098 established that ETC would not implement block reward-funded treasuries. The Olympia treasury (ECIP-1112) took a fundamentally different approach: redirecting EIP-1559 basefee to the treasury instead of diverting block rewards, preserving the monetary policy

---

### Related

- [ECIP-1098: Proto Treasury System](https://ecips.ethereumclassic.org/ECIPs/ecip-1098)`,
  ecipRefs: ['ecip-1098'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: null,
  isRejected: true,
}

export default entry

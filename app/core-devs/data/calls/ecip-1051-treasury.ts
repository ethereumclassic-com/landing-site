import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'ecip-1051-treasury',
  title: 'ECIP-1051 Treasury Proposal',
  date: '2020-08-13',
  summary:
    'ECIP-1051 proposed an Ethereum Classic treasury funded by diverting part of the block reward, and was rejected in February 2020. Treasury funding returned to two Core Devs Calls in August 2020, after the 51% attacks, and IOHK then proposed ECIP-1098.',
  metaDescription:
    'ECIP-1051 proposed an Ethereum Classic treasury funded by block reward diversion and was rejected in February 2020. IOHK proposed ECIP-1098 that August.',
  content: `## ECIP-1051 Treasury System Proposal

**ECIP Status:** Rejected\\
**Discussion Period:** 2017–2020\\
**Outcome:** Rejected on February 5, 2020. ECIP-1098, a separate proposal from IOHK, followed in August 2020

---

### Overview

ECIP-1051 was Dexaran's proposal for a protocol-level treasury system on Ethereum Classic, funded by diverting a portion of block rewards. The concept was independently explored by IOHK in a 2017 research paper. The proposal conflicted with ETC's monetary policy (ECIP-1017) and with the community's resistance to block reward diversion, and ECIP-1051 was rejected in February 2020. Treasury funding came back to the Core Devs Calls in August 2020, after the 51% attacks had shown the need for sustainable protocol funding, and IOHK then submitted ECIP-1098 as a new proposal.

### Timeline

- **2017:** IOHK published "A Proposal for An Ethereum Classic Treasury System" research paper
- **2018:** ECIP-1051 submitted by Dexaran alongside ECIP-1052 (Smart-contract Security Auditing core)
- **2019:** ETC Coop proposed formal rejection of both ECIP-1051 and ECIP-1052
- **February 5, 2020:** ECIP-1051 marked Rejected in the ECIPs repository (pull request #229)
- **August 13, 2020:** Core Devs Call, Treasury Roadmap Initial Discussions. IOHK presented a new treasury proposal following the 51% attacks
- **August 20–28, 2020:** Core Devs Call, Security Evaluation. Mining algorithm proposals and treasury discussed alongside 51% attack solutions
- **August 26, 2020:** IOHK submitted ECIP-1098 (Proto Treasury System)

### Key Issues

- **Block reward diversion**: Funding the treasury by diverting block rewards conflicted with ECIP-1017's fixed monetary policy
- **Centralization concerns**: A protocol-level treasury requires governance over fund allocation, raising centralization risks
- **Community opposition**: Significant opposition from community members who viewed any treasury as incompatible with ETC's "ungovernance" philosophy
- **What followed**: The treasury concept returned as ECIP-1098 (Proto Treasury System), which was withdrawn in October 2021

---

### Related

- [ECIP-1051: Ethereum Classic Treasury System](https://ecips.ethereumclassic.org/ECIPs/ecip-1051)`,
  ecipRefs: ['ecip-1051'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: null,
  isRejected: true,
}

export default entry

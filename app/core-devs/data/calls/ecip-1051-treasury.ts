import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'ecip-1051-treasury',
  title: 'ECIP-1051 Treasury Proposal',
  date: '2020-08-13',
  summary:
    'ECIP-1051 proposed an Ethereum Classic treasury system funded by block reward diversion. Discussed across two Core Devs Calls alongside 51% attack solutions. The proposal did not achieve consensus and was superseded by ECIP-1098.',
  content: `## ECIP-1051 Treasury System Proposal

**ECIP Status:** Rejected\\
**Discussion Period:** 2017–2020\\
**Outcome:** Did not achieve consensus — superseded by ECIP-1098

---

### Overview

ECIP-1051 was Dexaran's proposal for a protocol-level treasury system on Ethereum Classic, funded by diverting a portion of block rewards. The concept was independently explored by IOHK in a 2017 research paper. Discussion intensified in August 2020 following multiple 51% attacks that highlighted the need for sustainable protocol funding. However, the proposal conflicted with ETC's monetary policy (ECIP-1017) and the community's resistance to block reward diversion. ECIP-1051 was ultimately rejected and superseded by ECIP-1098.

### Timeline

- **2017:** IOHK published "A Proposal for An Ethereum Classic Treasury System" research paper
- **2018:** ECIP-1051 submitted by Dexaran alongside ECIP-1052 (Smart-contract Security Auditing core)
- **2019:** ETC Coop proposed formal rejection of both ECIP-1051 and ECIP-1052
- **August 13, 2020:** Core Devs Call — Treasury Roadmap Initial Discussions. IOHK presented renewed proposal following 51% attacks
- **August 20–28, 2020:** Core Devs Call — Security Evaluation. Mining algorithm proposals and treasury discussed alongside 51% attack solutions
- **2020:** ECIP-1051 did not achieve consensus. IOHK submitted ECIP-1098 as a more formal treasury proposal

### Key Issues

- **Block reward diversion** — Funding the treasury by diverting block rewards conflicted with ECIP-1017's fixed monetary policy
- **Centralization concerns** — A protocol-level treasury requires governance over fund allocation, raising centralization risks
- **Community opposition** — Significant opposition from community members who viewed any treasury as incompatible with ETC's "ungovernance" philosophy
- **Superseded** — The treasury concept evolved into ECIP-1098 (Proto Treasury), which was also eventually withdrawn

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

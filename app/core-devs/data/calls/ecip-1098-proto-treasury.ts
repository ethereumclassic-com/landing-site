import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'ecip-1098-proto-treasury',
  title: 'ECIP-1098 Proto Treasury',
  date: '2021-09-20',
  summary:
    'ECIP-1098 Proto Treasury System — IOHK\'s formal treasury proposal. After a year of discussion, ETC Coop and IOHK withdrew support. The IOHK Grothendieck team wound down after the rejection.',
  content: `## ECIP-1098 Proto Treasury System

*This page is a placeholder. Content for this core developer call will be added when documentation is available.*

### Proposal Details

- **ECIP:** [ECIP-1098](https://ecips.ethereumclassic.org/ECIPs/ecip-1098) — Proto Treasury System
- **Status:** Withdrawn
- **Date of Withdrawal:** September 20, 2021

### Timeline

- **2020:** IOHK submitted ECIP-1098 as a formal treasury proposal following the initial ECIP-1051 discussions
- **2020–2021:** Year-long community debate about whether a network-level treasury aligns with ETC values
- **September 2021:** ETC Coop, followed by IOHK, withdrew support for the proposal
- **Post-withdrawal:** The IOHK Grothendieck team announced it would wind down after the rejection

### Key Context

The rejection of ECIP-1098 established that ETC would not implement a centralized treasury at the protocol level. This decision informed later approaches to sustainable protocol funding, eventually leading to the Olympia treasury design which uses EIP-1559 basefee rather than block reward diversion.`,
  ecipRefs: ['ecip-1098'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: null,
  isPlaceholder: true,
  isRejected: true,
}

export default entry

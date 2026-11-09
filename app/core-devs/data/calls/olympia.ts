import type { CDCEntry } from '../index'
import { CORE_GETH_MIGRATE_GUIDE_URL, CORE_GETH_MOVE_GUIDE_PATH, CORE_GETH_RECOMMENDED_LINE } from '@/lib/core-geth'
import { OLYMPIA_ECIPS, ecipLabel, ecipUrl, type OlympiaEcipStage } from '@/lib/olympia-ecips'
import { PLUGIN_POSITION_SHORT } from '@/app/build/data/build'

/**
 * The agenda for the Olympia Core Devs Call, which has not happened. It is living copy, not a record:
 * it is rewritten as the ECIPs change, and once the call is held its outcome goes under Call Results
 * with the date, and the rest keeps its text. Every ECIP title comes from lib/olympia-ecips.ts.
 */

const ecipList = (stage: OlympiaEcipStage) =>
  OLYMPIA_ECIPS.filter((e) => e.stage === stage)
    .map((e) => `- [${ecipLabel(e.number)}](${ecipUrl(e.number)}): ${e.summary}`)
    .join('\n')

const entry: CDCEntry = {
  slug: 'olympia',
  title: 'Olympia',
  date: '2026-TBD',
  summary:
    'The agenda for the call that would set Olympia\'s activation blocks: the draft ECIPs, client readiness, and the order the ECIPs set before a block is scheduled.',
  content: `## Olympia Core Devs Call: Agenda

**When:** TBD · **Duration:** 120 min max
**Where:** [Twitter/X Space, @ETC_Network](https://x.com/ETC_Network) (recorded)

Olympia is a proposal: its ECIPs are drafts, and its activation blocks are TBD. ECIP-1121 says those blocks would be decided at the Olympia Core Devs Call, and ECIP-1111 is the only document that would record them.

---

## The Olympia ECIPs

At the activation block:

${ecipList('At the activation block')}

To be deployed and published before the activation block:

${ecipList('Before the fork')}

Processes that would run on the governance contracts, changing no consensus rule:

${ecipList('Process')}

A separate hard fork after Olympia, to be scheduled on its own:

${ecipList('A later hard fork')}

ECIP-1121 classifies every execution-layer EIP of Dencun, Pectra, Fusaka and Glamsterdam, and adopts part of Glamsterdam's set. [Every EIP by its disposition](/olympia/upgrade#eips).

---

## The Order the ECIPs Set

1. The governance contracts would be deployed on Ethereum Classic before the fork, in dependency order, with no address predicted or reserved (ECIP-1113 §"Deployment and Activation").
2. Their security review and multi-client validation on Mordor would be complete before the activation block is scheduled, rehearsed while the Treasury holds nothing (ECIP-1113 §"Audit and Testnet Rollout").
3. The Treasury's address would be published, already in its final configuration, before the activation block is scheduled (ECIP-1112 §"Deployment and Publication").
4. Cross-client equivalence would be demonstrated on Mordor before a mainnet block is scheduled (ECIP-1111 §"Test Cases"), and both blocks would be recorded in ECIP-1111 §Implementation.

---

## Network Security Context

- Core-Geth went 21 months without a maintenance release, from June 2024 to the emergency releases of March 2026.
- Every v1.12.x release still carries at least one disclosed CVE unpatched; Core-Geth v1.13.0 fixed every client CVE the audits found.
- The previous repository had no active maintainer: security disclosures went unanswered, and core development had no redundancy.
- Core-Geth is released and maintained in the [ethereumclassic](https://github.com/ethereumclassic) GitHub organization.

The full [Core-Geth security audit](/build/clients/core-geth-security-audit) is published. A node on any v1.12.x release should move to the Core-Geth ${CORE_GETH_RECOMMENDED_LINE} line now, by [the steps on coregeth.com](${CORE_GETH_MIGRATE_GUIDE_URL}#steps), with [the migration guide](${CORE_GETH_MOVE_GUIDE_PATH}) for the detail.

---

## Client Readiness

No released client implements Olympia. A client's Olympia readiness is what its maintainers publish, listed at [client readiness](/olympia/clients) as they publish it.

| Client | Language | Role |
|--------|----------|------|
| [Core-Geth](https://github.com/ethereumclassic/core-geth) | Go | **Recommended**: an Ethereum Classic execution client and public-good Go reference client, a go-ethereum downstream released and maintained in the ethereumclassic GitHub organization. Run its ${CORE_GETH_RECOMMENDED_LINE} line |
| [Fukuii](https://github.com/chippr-robotics/fukuii) | Scala | **Alternative**: an execution client in Scala 3 that continues IOHK's Mantis client, maintained by Chippr Robotics LLC. Its maintainers mark it alpha |

ETC plugins, a planned framework, would add Ethereum Classic support to clients other projects maintain. ${PLUGIN_POSITION_SHORT} Plugins are therefore not part of client readiness.

---

## Development Sustainability

- **Who funds the work today.** Ethereum Classic's core developers and community contributors do the work. Ethereum Classic DAO maintains and funds the public goods kept in the ethereumclassic GitHub organization as their funder of last resort, and it does not control or lead Ethereum Classic.
- **The ETC Cooperative.** A US 501(c)(3) non-profit that funded Ethereum Classic's public goods from 2017. It entered maintenance mode at the end of 2024, and its board has communicated that it will dissolve.
- **The legal wrapper.** ECIP-1114 names Ethereum Classic DAO LLC as the legal wrapper Olympia DAO would use for the off-chain acts an on-chain organization cannot perform, such as signing an audit engagement Olympia DAO has voted to fund. Ethereum Classic DAO would be downstream of Olympia DAO in authority, and it holds no role in Olympia until Olympia DAO is operating.
- **On-chain contributions.** The Treasury would accept any asset at one address, so there would be one contribution address for every asset class (ECIP-1113).

---

## Regulatory Context

- **CLARITY Act.** ETC is positioned for classification as a digital commodity under the CLARITY Act. The Senate Banking Committee cleared the bill, 15 to 9, in May 2026, and it is pending in the Senate.
- **GENIUS Act.** The GENIUS Act sets a federal framework for payment stablecoins, and ETC is a Proof-of-Work EVM platform for them.
- **Institutional access.** The Grayscale Ethereum Classic Trust (ETCG), a trust product, provides regulated securities exposure to ETC.

---

## Activation

| Network | Block | Target |
|---------|-------|--------|
| Mordor Testnet | TBD | TBD |
| ETC Mainnet | TBD | Targeted for 2027 |

---

## Agenda

1. Network security context and the Core-Geth ${CORE_GETH_RECOMMENDED_LINE} line
2. The Olympia ECIPs: ECIP-1111, ECIP-1112, ECIP-1113 and ECIP-1121
3. Client readiness, as each client's maintainers publish it
4. The order the ECIPs set: deployment, review and the Mordor rehearsal
5. Mordor testnet activation block
6. ETC mainnet activation block
7. Development sustainability and the legal wrapper
8. Regulatory context
9. Open discussion

---

## Related

- [Olympia](/olympia), the proposal across every ECIP
- [Olympia for node operators](/olympia/upgrade)
- [Core-Geth security audit: the June 2024 to March 2026 gap, fixed in v1.13.0](/build/clients/core-geth-security-audit)

---

## Call Results

*To be updated after the call.*`,
  ecipRefs: ['ecip-1111', 'ecip-1112', 'ecip-1113', 'ecip-1121'],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: null,
}

export default entry

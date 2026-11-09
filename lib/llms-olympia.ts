import {
  OLYMPIA_PLACEHOLDER_DATE_LABEL,
  OLYMPIA_STATUS,
  OLYMPIA_TARGET,
  faqs,
  olympiaLinks,
} from '@/app/olympia/data/olympia'
import { OLYMPIA_ECIPS, ecipUrl } from '@/lib/olympia-ecips'
import { OLYMPIA_EIPS, eipsBy } from '@/lib/olympia-eips'

/**
 * The Olympia sections of /llms.txt and /llms-full.txt, written once so the two files cannot describe
 * the proposal differently. Titles come from lib/olympia-ecips.ts and every EIP and count from
 * lib/olympia-eips.ts, which is generated from ECIP-1121. Olympia is a proposal: keep this in proposal
 * voice, and read the ECIP a sentence comes from before changing it.
 */

const SITE = 'https://ethereumclassic.com'
const ADOPTED = new Set(['core', 'networking', 'interface', 'modified'])
const UPGRADES = ['London', 'Dencun', 'Pectra', 'Fusaka', 'Glamsterdam']

const LEGAL_WRAPPER =
  'ECIP-1114 names Ethereum Classic DAO LLC as the legal wrapper Olympia DAO would use for the off-chain acts an on-chain organization cannot perform, such as signing an audit engagement Olympia DAO has voted to fund. It would be downstream of Olympia DAO in authority, and it holds no role in Olympia until Olympia DAO is operating.'

function counts() {
  const adopted = OLYMPIA_EIPS.filter((e) => ADOPTED.has(e.disposition)).length
  return `ECIP-1121 adopts ${adopted} EIPs, ${eipsBy('modified').length} of them with a modification another Olympia ECIP states; ${eipsBy('blocked').length} are blocked by a dependency that is out of scope, ${eipsBy('deferred').length} tied to blob data availability are deferred, ${eipsBy('excluded').length} are excluded, and ${eipsBy('in-force').length} were already in force before Olympia.`
}

const sites = () =>
  [
    `- ${olympiaLinks.olympiaDAO}: Olympia DAO's own site`,
    `- ${olympiaLinks.governanceApp}: the governance app, where proposals would be submitted and voted on once Olympia DAO is operating`,
    `- ${olympiaLinks.treasurySite}: the treasury site`,
    `- ${olympiaLinks.olympiaGitHub}: the source of the governance contracts`,
    `- ${olympiaLinks.ethereumClassicDAO}: Ethereum Classic DAO, which maintains and funds Ethereum Classic's public goods today as their funder of last resort`,
  ].join('\n')

/** For /llms.txt. */
export function olympiaLlmsSummary(): string {
  return `Olympia is a proposed upgrade to Ethereum Classic, ${OLYMPIA_TARGET}. Status: ${OLYMPIA_STATUS}. Its ECIPs are drafts, and the ECIPs repository (https://github.com/ethereumclassic/ECIPs) is the authority on what it specifies. The countdowns on this site run to ${OLYMPIA_PLACEHOLDER_DATE_LABEL}, a placeholder target, never an activation date.

What it would change:
- EVM alignment (ECIP-1121): advances the execution layer through Dencun, Pectra and Fusaka, and carries that work into Glamsterdam. ECIP-1121 classifies every execution-layer EIP of those upgrades and adopts part of Glamsterdam's set; ${counts()}
- A base fee market (ECIP-1111): EIP-1559 and EIP-3198, with each transaction's base fee credited to the Sovereignty Vault address inside that transaction's own state transition, rather than destroyed, as it is on Ethereum. Block rewards and priority-fee tips would be unchanged.
- A treasury and its governance (ECIP-1112, ECIP-1113): the Sovereignty Vault, a permanent address holding an unmodified OpenZeppelin transparent proxy as the Olympia Treasury, and Olympia DAO, the only route by which its balance could be spent.

The Olympia ECIPs, under their own titles:
${OLYMPIA_ECIPS.map((e) => `- ECIP-${e.number}: ${e.title} (${e.stage.toLowerCase()}). ${ecipUrl(e.number)}`).join('\n')}

Activation: the governance contracts would deploy before the fork, be reviewed and rehearsed on Mordor, and the Treasury's address would be published, all before an activation block is scheduled. The activation blocks for Mordor and mainnet would be decided at the Olympia Core Devs Call and recorded only in ECIP-1111, where both read TBD. ECIP-1116 would be a separate hard fork after Olympia.

${LEGAL_WRAPPER}

No released client implements Olympia. Client readiness: ${SITE}/olympia/clients. The clients themselves are under Node Clients below.

Pages: ${SITE}/olympia (the proposal), ${SITE}/olympia/upgrade (for node operators, with every EIP by disposition), ${SITE}/olympia/treasury, ${SITE}/olympia/governance, ${SITE}/olympia/miners.

Olympia's sites:
${sites()}`
}

/** For /llms-full.txt: the summary's content, with every EIP and the FAQ. */
export function olympiaLlmsDetail(): string {
  const adoptedBy = UPGRADES.map((u) => {
    const rows = OLYMPIA_EIPS.filter((e) => e.group === u && ADOPTED.has(e.disposition))
    return `- ${u}: ${rows.map((e) => `EIP-${e.eip} (${e.label}${e.disposition === 'modified' ? ', with a modification' : ''})`).join('; ')}`
  }).join('\n')
  const listed = (d: Parameters<typeof eipsBy>[0]) => eipsBy(d).map((e) => `EIP-${e.eip} (${e.label})`).join('; ')

  return `Olympia is a proposed upgrade to Ethereum Classic, ${OLYMPIA_TARGET}. Status: ${OLYMPIA_STATUS}. Its ECIPs are drafts; the ECIPs repository (https://github.com/ethereumclassic/ECIPs) is the authority, and ecips.ethereumclassic.org can show an earlier version of a draft until the next publication round. The countdowns on this site run to ${OLYMPIA_PLACEHOLDER_DATE_LABEL}, a placeholder target, never an activation date.

### The ECIPs

${OLYMPIA_ECIPS.map((e) => `ECIP-${e.number}: ${e.title} (${e.status}, ${e.type}; ${e.stage.toLowerCase()})
${e.summary}
${ecipUrl(e.number)}`).join('\n\n')}

### The Treasury and Olympia DAO

ECIP-1111 credits each transaction's base fee to the Sovereignty Vault address inside that transaction's own state transition, as a direct balance addition that runs no contract code. ECIP-1112 makes that address permanent, carried in every client's chain configuration, with an unmodified OpenZeppelin transparent proxy deployed there, so its logic can be repaired by a proposal while the address stands. ECIP-1113 specifies Olympia DAO: a Governor built from unmodified OpenZeppelin modules, the Timelock behind the Treasury proxy, and CoreNFT, a soulbound token carrying one non-delegable vote per member. The Governor would be the Timelock's sole executor; there would be no admin key, multisig or committee, and no off-chain entity could approve or veto a governance action. Every contract would deploy before the fork, with no address predicted or reserved.

A funding proposal (ECIP-1114) is an ordinary Governor proposal in one of five categories: Core Development, Critical Infrastructure, Network Security, Ecosystem Growth, and Other. Milestone programs (ECIP-1118) pay in tranches, each its own proposal. Ecosystem Growth DAOs (ECIP-1117) are bodies Olympia DAO would seed one season at a time and not govern, open to anyone; client development, network security and critical infrastructure stay with Olympia DAO. The voting interface screens recipients against a sanctions list (ECIP-1119), with no contract, oracle or role. Protocol change remains with the ECIP process, ECIP-1000.

${LEGAL_WRAPPER}

### Activation

The governance contracts would be deployed on Ethereum Classic before the fork, in dependency order and with no address predicted or reserved. Their security review and multi-client validation on Mordor would be complete, and the Treasury's address published, before the activation block is scheduled. Cross-client equivalence must be shown on Mordor before a mainnet block is scheduled. The activation blocks for Mordor and mainnet would be decided at the Olympia Core Devs Call and recorded only in ECIP-1111, where both read TBD. ECIP-1116, which would pay block producers from base-fee revenue at the consensus layer, would be a separate hard fork after Olympia.

### EVM alignment (ECIP-1121)

Spiral, in 2024, brought Ethereum Classic's execution layer up to Ethereum's Shanghai upgrade, except for the Proof-of-Stake changes and the London fee market, which Mystique left out. ECIP-1121 classifies every execution-layer EIP of Dencun, Pectra, Fusaka and Glamsterdam, giving each a disposition, and adopts part of Glamsterdam's set. ${counts()}

Adopted, by upstream upgrade:
${adoptedBy}

Blocked by a dependency: ${eipsBy('blocked').map((e) => `EIP-${e.eip} (${e.label}, blocked on EIP-${e.blockedOn})`).join('; ')}.
Deferred, blob data availability: ${listed('deferred')}.
Excluded: ${listed('excluded')}.

Every EIP, by disposition: ${SITE}/olympia/upgrade#eips

### Developer tooling

Tooling that assumes EIP-1559 needs a path of its own for Ethereum Classic today. ECIP-1111 records that Foundry sends a type-2 transaction to any chain its legacy registry does not name, Ethereum Classic among them, so a deployment here passes --legacy; libraries that probe the chain fall back correctly. Activating EIP-1559 would make that workaround unnecessary.

### Questions

${faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n')}

### Olympia's sites

${sites()}`
}

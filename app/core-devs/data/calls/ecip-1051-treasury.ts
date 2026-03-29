import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'ecip-1051-treasury',
  title: 'ECIP-1051 Treasury Proposal',
  date: '2020-08-13',
  summary:
    'Initial discussion of the IOHK Treasury proposal (ECIP-1051) and network security solutions following the 51% attacks. Two calls covered treasury Q&A, rough consensus measurement, mining algorithm proposals (SHA3, RandomX, DAG reduction), and security evaluation.',
  content: `[A Proposal for An Ethereum Classic Treasury System.pdf](./A-proposal-for-an-Ethereum-Classic-treasury-system.pdf)

Topic discussion references:

* 2017: [A Proposal for An Ethereum Classic Treasury System](https://iohk.io/en/research/library/papers/a-proposal-for-an-ethereum-classic-treasury-system/) - IOHK Research
* 2017: [Let's Talk ETC! (Ethereum Classic) #10 - Charles Hoskinson & Roman Oliynykov - Treasury Proposal](https://www.youtube.com/watch?v=zxZoSjnHN84) - IOHK Proposal
* 2017: [ETC Community Fund](https://medium.com/@pyskell/some-changes-to-ethereum-classic-7a97c993a06c)
* 2018: [ECIP 1051: Ethereum Classic Treasury system](https://ecips.ethereumclassic.org/ECIPs/ecip-1051) - Dexaran Proposal
* 2018: [ECIP 1051 Dicussion: Ethereum Classic Treasury system](https://github.com/ethereumclassic/ECIPs/issues/4) - Dexaran Proposal
* 2018: [ECIP 1052: Smart-contract Security Auditing core](https://ecips.ethereumclassic.org/ECIPs/ecip-1052) - Dexaran Proposal
* 2018: [ECIP 1052 Dicussion: Smart-contract Security Auditing core](https://github.com/ethereumclassic/ECIPs/issues/5) - Dexaran Proposal
* 2019: [ECIP-1051: Reject Ethereum Classic Treasury system](https://github.com/ethereumclassic/ECIPs/pull/229) - ETC Coop
* 2019: [ECIP-1052: Reject Smart-contract Security Auditing core](https://github.com/ethereumclassic/ECIPs/pull/231) - ETC Coop
* 2020: [Securing Proof-of-Work Ledgers via Checkpointing](https://iohk.io/en/research/library/papers/securing-proof-of-work-ledgers-via-checkpointing/) - IOHK Research
* 2020: [ETC at Crossroads](https://youtu.be/oHUQuXOwYeU) - IOHK Renewed Proposal
* Example: [A brief history of GnuPG: vital to online security but free and underfunded](https://theconversation.com/a-brief-history-of-gnupg-vital-to-online-security-but-free-and-underfunded-80800) - Tragedy of the Commons example
* 2020: [ETC at Crossroads Follow Up - Bailout?](https://youtu.be/Cspqt-nZqsc) - IOHK Follow up
* 2020: [EDCON 2020 | Ethereum Classic Resilience by Terry Culver, CEO of ETC Labs](https://www.youtube.com/watch?v=c3pndGPYYLs) - ETC Labs Current Climate Input
* 2020: [Ethereum Classic Ungovernance Explained](https://etherplan.com/2020/03/19/ethereum-classic-ungovernance-explained/10522/) - Donald's Opposition to a Treasury System
* 2020: [Ethereum Classic Treasury Roadmap Call: Initial Discussions](https://github.com/ethereumclassic/ECIPs/issues/332)

## ETC Core Devs Call — Treasury Roadmap Initial Discussions (August 13, 2020)

* When: Thursday, August 13, 2020, 3pm UTC, 60 minutes max.
* Where: Ethereum Classic [Discord](https://discord.gg/hQs894U) \`#ecips\` channel. Will use/create a voice channel *ad hoc*.

### Agenda

#### Quick client teams check-in

* Core-Geth - ETC Labs
* Hyperledger Besu - ETC Coop/ChainSafe
* Mantis - IOHK

#### IOHK Proposal for an Ethereum Classic Treasury:

* [A Proposal for An Ethereum Classic Treasury System](https://iohk.io/en/research/library/papers/a-proposal-for-an-ethereum-classic-treasury-system/)
* [ETC at Crossroads](https://youtu.be/oHUQuXOwYeU)
* [A brief history of GnuPG: vital to online security but free and underfunded](https://theconversation.com/a-brief-history-of-gnupg-vital-to-online-security-but-free-and-underfunded-80800)
* [Bailout?](https://youtu.be/Cspqt-nZqsc)

#### Gather Community feedback on Proposal via Q&A

#### Measure Rough Consensus to Determine if IOHK will move forward with making an ECIP for the ETC Treasury.

#### Anything else related to an Ethereum Classic Treasury System

#### Please comment to add items to the agenda.

[https://github.com/ethereumclassic/ECIPs/issues/332](https://github.com/ethereumclassic/ECIPs/issues/332)

### Recording of Core Devs Call

* [https://www.youtube.com/watch?v=8EOz79tU_xo](https://www.youtube.com/watch?v=8EOz79tU_xo)

---

## Part 2: Security Evaluation & Mining Algorithm Consensus (August 20–28, 2020)

Preface: Ethereum Classic suffered a second round of 51% attacks. As a result of the attacks, the development ecosystem around Ethereum Classic has seen a surge in activity via proposed solutions to safeguard the network.

* [July 31, 2020](https://blog.bitquery.io/attacker-stole-807k-etc-in-ethereum-classic-51-attack)
* [August 6, 2020](https://blog.bitquery.io/ethereum-classic-attack-8-august-catch-me-if-you-can).

### Participant Feedback
The 8/20 Core Dev Call set out with the intent of "proposal gathering and discussion only" for the next hard fork on the Ethereum Classic network. Many of the participants felt the call lacked adequate time for proposal explanation, discussion, and constructive dialogue.

### Algorithm-Agnostic Proposals to PoW Security

* [ECIP 1092 "Pirlguard"](https://ecips.ethereumclassic.org/ECIPs/ecip-51attack-solution) - Technical [Discussion](https://github.com/ethereumclassic/ECIPs/issues/327)
* [ECIP 1094 "VeriBlock"](https://github.com/ethereumclassic/ECIPs/pull/340)
* [ECIP xxxx "Checkpointing and Timestamping"](https://www.youtube.com/watch?v=aasUIB1W81E) - [Whitepaper](https://eprint.iacr.org/2020/173.pdf)

### Change the Algorithm Proposals

* Do Nothing. Stay with Ethash, unaltered.
* [ECIP 1043 "Fixed DAG"](https://ecips.ethereumclassic.org/ECIPs/ecip-1043) - Technical [Discussion](https://github.com/ethereumclassic/ECIPs/issues/11)
* [ECIP 1049 "Keccak256"](https://ecips.ethereumclassic.org/ECIPs/ecip-1049) - Technical [Discussion](https://github.com/ethereumclassic/ECIPs/issues/13)
* [ECIP 1093 "RandomX"](https://ecips.ethereumclassic.org/ECIPs/ecip-randomX) - Technical [Discussion](https://github.com/ethereumclassic/ECIPs/issues/329)

### Recording of Evaluation Call (August 28)

* [https://www.youtube.com/watch?v=4W1l5krLPqI](https://www.youtube.com/watch?v=4W1l5krLPqI)

### Documentation

* [Action Items: ETC Q3 Hard Fork Draft 1](https://docs.google.com/document/d/1f0a0sqb0OW3n4ki6nM3q9hvJ91HeZoj9Rpjp2fDCZIQ)
* IOHK CDC Feedback: [Process for Decision Making and Innovation for ETC](https://www.youtube.com/watch?v=F0lR_u7BVho)`,
  ecipRefs: ['ecip-1051', 'ecip-1052'],
  recordingUrl: 'https://www.youtube.com/watch?v=8EOz79tU_xo',
  notesUrl: 'https://github.com/ethereumclassic/ECIPs/issues/332',
  forkBlock: null,
  isRejected: true,
}

export default entry

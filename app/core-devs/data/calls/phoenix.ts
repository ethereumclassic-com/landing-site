import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'phoenix',
  title: 'Phoenix',
  date: '2020-06-01',
  summary:
    'ECIP-1088 — Aligned ETC with Ethereum\'s Istanbul upgrade. Two Core Devs Calls addressed the broken Aztlan fork, rejected both ECIP-1061 and ECIP-1078, and rebuilt the upgrade from scratch as Phoenix.',
  content: `## Core Devs Call — ECIP-1078 Phoenix Finalization (February 5, 2020)

[https://ecips.ethereumclassic.org/ECIPs/ecip-1078](https://ecips.ethereumclassic.org/ECIPs/ecip-1078)

ref [#217](https://github.com/ethereumclassic/ECIPs/issues/217) [#226](https://github.com/ethereumclassic/ECIPs/issues/226) [#227](https://github.com/ethereumclassic/ECIPs/issues/227) [#262](https://github.com/ethereumclassic/ECIPs/issues/262)

ref [ECIP-1078](https://ecips.ethereumclassic.org/ECIPs/ecip-1078) [ECIP-1079](https://ecips.ethereumclassic.org/ECIPs/ecip-1079) [ECIP-1080](https://ecips.ethereumclassic.org/ECIPs/ecip-1080)

* When: Wednesday, February 05, 2020, 4pm UTC, 60 minutes max.
* Where: Ethereum Classic [Discord](https://discord.gg/hQs894U) \`#ecips\` channel. Will use/create a voice channel *ad hoc*.

### Agenda

#### Quick client teams check-in

* Parity Tech
* ETC Core
* ChainSafe
* Multi-Geth

#### Aztlan needs to be fixed, options are:

* patch ECIP-1061 with EIP-1884 [#280](https://github.com/ethereumclassic/ECIPs/pull/280) - very unlikely
    * because ecip-1061 already released in parity and multi-geth
    * because ecip-1061 already activated on mordor testnet
* replace ECIP-1061 with ECIP-1079 - unlikely
    * because ECIP-1061 already released in parity and multi-geth
    * because ECIP-1061 already activated on mordor testnet
* update ECIP-1061 with ECIP-{1078,1080} - more likely
    * because ECIP-{1078,1080} can be distinct fork "Phoenix"
    * because ECIP-{1078,1080} can be activated on different testnet blocks but same mainnet block

#### Phoenix (ECIP-1078) needs to be either accepted or updated (or rejected)

* discuss included ECIP-1080 without gas repricing
* discuss swap of EIP-2200 for EIP-1706 (1283 fix)
* discuss a timeline for the protocol upgrade
    * Mordor Classic and Kotti Classic testnet (March?)
    * Ethereum Classic mainnet (June?)

#### Anything else related to Aztlan and Phoenix

#### Going through the pending ECIP PRs together

#### Please comment to add items to the agenda.

[https://github.com/ethereumclassic/ECIPs/issues/284](https://github.com/ethereumclassic/ECIPs/issues/284)

### Recording of Core Devs Call

[Core Devs Call: ECIP-1078 Phoenix Finalization](https://youtu.be/kqhr378Kmz8)

---

## Core Devs Call — Phoenix Upgrade from Scratch (February 26, 2020)

[https://ecips.ethereumclassic.org/ECIPs/ecip-1088](https://ecips.ethereumclassic.org/ECIPs/ecip-1088)

ref [#297](https://github.com/ethereumclassic/ECIPs/pull/297)

ref [ECIP-1061](https://github.com/ethereumclassic/ECIPs/blob/master/_specs/ecip-1061.md) [ECIP-1078](https://github.com/ethereumclassic/ECIPs/blob/master/_specs/ecip-1078.md) [ECIP-1086](https://github.com/ethereumclassic/ECIPs/blob/master/_specs/ecip-1086.md)

* When: Wednesday, February 26, 2019, 1pm UTC, 60 minutes max.
* Where: Ethereum Classic [Discord](https://discord.gg/hQs894U) \`#ecips\` channel. Will use/create a voice channel *ad hoc*.

### Agenda

#### Quick client teams check-in

* Parity Tech
* ETC Core
* ChainSafe
* Multi-Geth

#### Aztlan needs to be rejected as it's having multiple issues:

* [#217](https://github.com/ethereumclassic/ECIPs/issues/217)
* [#226](https://github.com/ethereumclassic/ECIPs/issues/226)
* [#227](https://github.com/ethereumclassic/ECIPs/issues/227)

#### Phoenix needs to be rejected as it's not of a sufficient patch especially with the context of the broken testnet activations:

* [#262](https://github.com/ethereumclassic/ECIPs/issues/262)

#### Testnet patch should be rejected to favor a clean new hardfork meta:

* [#293](https://github.com/ethereumclassic/ECIPs/pull/293)
* [#297](https://github.com/ethereumclassic/ECIPs/pull/297)

#### It's still possible to do Phoenix on the same block number if we agree to activate one of the following options (ECIPs pending):

* Phoenix hardfork same as ETH Istanbul (including EIP-1884)
* Phoenix hardfork "classic flavor" (ECIP-1080 instead of 1884, EIP-1706 instead of EIP-2200)

#### Anything else related to Aztlan and Phoenix

#### Please comment to add items to the agenda.

[https://github.com/ethereumclassic/ECIPs/issues/298](https://github.com/ethereumclassic/ECIPs/issues/298)

### Recording of Core Devs Call

[Core Devs Call: Phoenix Upgrade from Scratch](https://youtu.be/HzcJL3rVbpU)`,
  ecipRefs: ['ecip-1088', 'ecip-1078', 'ecip-1079', 'ecip-1061'],
  recordingUrl: 'https://youtu.be/HzcJL3rVbpU',
  notesUrl: 'https://github.com/ethereumclassic/ECIPs/issues/284',
  forkBlock: 10_500_839,
}

export default entry

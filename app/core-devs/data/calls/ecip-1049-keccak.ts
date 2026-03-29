import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'ecip-1049-keccak',
  title: 'ECIP-1049 Keccak256',
  date: '2020-09-11',
  summary:
    'Three-year saga of the ECIP-1049 Keccak256 mining algorithm change proposal. Core Devs Calls covered mining algorithm last-call review, 51% attack solutions, a dedicated breakout session, and the eventual proposed rejection in 2022. The proposal was withdrawn due to lack of consensus and risk of contentious chain split.',
  content: `## Core Devs Call — ECIP-1043 and ECIP-1049 (September 11, 2020)

* When: Friday, September 11, 2020, 4pm UTC, 90 minutes max.
* Where: Jitsi [Web/App ETCCoreDevsCall13](https://meet.jit.si/ETCCoreDevsCall13#config.startWithVideoMuted=true&config.startVideoMuted=true), Dial in PIN 1401 7587 98 for ETCCoreDevsCall13 numbers
* Focus: Mining Algorithm, Last-Call Proposals

### Agenda

* ECIP 1043 Fixed Dag Size Restriction (Last Call)
* ECIP 1099 Calibrate Epoch Duration (Draft, alternative to 1043)
* ECIP 1049 KECCAK256 (Last Call)
* ECIP 1095 SHA3-256 (Last Call, alternative to 1049)

#### Please comment to add items to the agenda.

[https://github.com/ethereumclassic/ECIPs/issues/362](https://github.com/ethereumclassic/ECIPs/issues/362)

### Recording of Core Devs Call 13

* [https://www.youtube.com/watch?v=9r_q_z81eh4](https://www.youtube.com/watch?v=9r_q_z81eh4)

---

## Core Devs Call — 51% Attack Solutions (September 25, 2020)

* When: Friday, September 25, 2020, 4pm UTC, 90 minutes max.
* Where: [Discord](https://discord.gg/hQs894U)
* Focus: 51%-Attack Solutions.

### Agenda

51% Attack Proposals
* [ECIP 1092](https://ecips.ethereumclassic.org/ECIPs/ecip-1092) 51-percent attack solution PirlGuard by Callisto (Draft) - was skipped, nobody spoke in favor of it.
* [ECIP 1094](https://ecips.ethereumclassic.org/ECIPs/ecip-1094) VeriBlock Proof-of-Proof 51%-Attack Prevention (Draft) - was skipped, there will be a presentation by max next week.
* [ECIP 1096](https://ecips.ethereumclassic.org/ECIPs/ecip-1096) 51% Attack protection system based on Bitcoin Merged Mining (Draft) - was discussed.
* [ECIP 1097](https://ecips.ethereumclassic.org/ECIPs/ecip-1097) Checkpointing based 51% attack resistance (Draft) - was discussed, requires either a hardfork or optionally a soft fork, we would have to chose trusted parties for committee.
* [ECIP 1099](https://ecips.ethereumclassic.org/ECIPs/ecip-1099) Calibrate Epoch Duration (Last Call) - ECIP 1099 remains in "last call" but new block numbers (pushed back to allow besu to implement it), this will move to "accepted" next friday unless you raise your concerns, core developers start working on implementations and preparing releases.
* [ECBP 1100](https://ecips.ethereumclassic.org/ECIPs/ecip-1100) Modified Exponential Subjective Scoring (Draft) - ECBP 1100 was demonstrated on the "messnet" testnet, it moves to "active" with a mordor block number for testing, mainnet decision depends on testnet progress, no mainnet block number yet.

### Recording of Core Devs Call 14

* https://youtu.be/_VChbJd87WM

---

## Core Devs Call — ECIP-1049 Keccak Breakout Session (October 2, 2020)

* When: Friday, October 2nd, 2020, 4pm UTC, 120 minutes max.
* Where: [Discord](https://discord.gg/3ZbKvb)
* Focus: SHA3-256/Keccak256 Mining Algorithm Change Opposition Formal Conversation

### Agenda

* Review opposition comments.
* Give the authors a chance to discuss the opposition concerns on voice recording.
* Goal: Work at finding consensus as suggested by the [ECIP process](https://github.com/ethereumclassic/ECIPs#avoiding-network-splits).

#### Please review the issue thread to find the most up to date information.

* [https://github.com/ethereumclassic/ECIPs/issues/382](https://github.com/ethereumclassic/ECIPs/issues/382)

### Recording of Core Devs Call 15

* https://vimeo.com/464336957

### Conclusion

* At this moment, Consensus did not appear to be present for ECIP-1049 due to many unanswered questions.
* Recommendation from the collective call was to keep ECIP-1049 in \`Last Call\`, while the network analyzes the impacts of other \`Accepted\` proposals like [ECIP-1099](https://github.com/ethereumclassic/ECIPs/issues/368) and [MESS](https://github.com/ethereumclassic/ECIPs/issues/374).
* It was recommended the ECIP-1049 authors work to clarify the proposal's specs/motives to draft a more solidified version of the proposal before being considered for \`Accepted\` or \`Rejected\` status.

Please direct future commentary to the ECIP 1049 discussion thread:

* https://github.com/ethereumclassic/ECIPs/issues/13

---

## Core Devs Call — ECIP-1049 Proposed Rejection (February 21, 2022)

* [https://github.com/ethereumclassic/ECIPs/issues/460](https://github.com/ethereumclassic/ECIPs/issues/460)

* When: Monday, February 21st, 2022, 17:00 UTC, 120 minutes max.
* Where: [Ethereum Classic Discord](https://ethereumclassic.org/discord), the mods will set up a voice channel for the call. Please mute your microphone unless you are talking for clear recording. Participation is encouraged.
* Focus: REJECT SHA3-256/Keccak256 Mining Algorithm Change due to a high-probability risk of Contentious Chain Split between GPU Miners on ETCHash and FPGA & ASIC Miners on SHA3. ECIP-1049 is in violation of Ethereum Classic founding documents and the ECIP process.

### Conclusion

* A new ECIP-1049 Champion was selected in Bob Summerwill. The old champion, Alexander Tsankov has stepped down from the proposal stating he is too busy to champion this proposal.
* It was agreed by the ECIP Editor r0n1n and the new Champion of ECIP-1049, Bob Summerwill, that the ECIP-1049 proposal needs a material rewrite to meet [ECIP-1000](https://ecips.ethereumclassic.org/ECIPs/ecip-1000) compliance and remain in Draft status.
* The ETChash mining ecosystem was assured continued support from community members should any centralized actor attempt a contentious hard fork on the Ethereum Classic network.
* The opposition to ECIP-1049 has provided the new champion material criticism of ECIP-1049 to address during the champion's material redraft of the proposal.

### Recording

* ETC Core Devs Call 22: https://www.youtube.com/watch?v=lpdZgsAbPXo

### Related Discussions:

* 1. [ECIP-1049: Change the ETC Proof of Work Algorithm to Keccak256 #8](https://github.com/ethereumclassic/ECIPs/issues/8)
* 2. [ECIP-1049: Change the ETC Proof of Work Algorithm to Keccak-256 #13](https://github.com/ethereumclassic/ECIPs/issues/13)
* 3. [ETC Core Devs Call(s) 2020 Q3: Hardfork #333](https://github.com/ethereumclassic/ECIPs/issues/333)
* 4. [ETC Core Devs Call 15 - ECIP-1049 Breakout Session Keccak-256 #382](https://github.com/ethereumclassic/ECIPs/issues/382)
* 5. [ETC Core Devs Call 22: Proposed Rejection of ECIP-1049 #460](https://github.com/ethereumclassic/ECIPs/issues/460)
* 6. [Rejected Status ecip-1049 #465](https://github.com/ethereumclassic/ECIPs/issues/465)`,
  ecipRefs: ['ecip-1049', 'ecip-1043', 'ecip-1099', 'ecip-1095', 'ecip-1100'],
  recordingUrl: 'https://www.youtube.com/watch?v=lpdZgsAbPXo',
  notesUrl: 'https://github.com/ethereumclassic/ECIPs/issues/460',
  forkBlock: null,
  isRejected: true,
}

export default entry

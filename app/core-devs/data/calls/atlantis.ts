import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'atlantis',
  title: 'Atlantis',
  date: '2019-09-12',
  summary:
    'ECIP-1054 — Aligned ETC with Ethereum\'s Spurious Dragon and Byzantium upgrades. Four Core Devs Calls coordinated EIP-161 inclusion, client readiness, competing timeline proposals, testnet verification, and mainnet block number agreement.',
  content: `## Core Devs Call — Atlantis Finalization (May 30, 2019)

[https://ecips.ethereumclassic.org/ECIPs/ecip-1054](https://ecips.ethereumclassic.org/ECIPs/ecip-1054)

* When: Thursday, May 30, 2019, 3pm UTC, 60 minutes max.
* Where: Ethereum Classic [Discord](https://discord.gg/hQs894U) #ecips channel. Will use/create a voice channel ad hoc.

### Agenda

#### Quick client teams check-in

* Geth / Multi-Geth
* Parity Ethereum
* IOHK Mantis

#### Atlantis (ECIP-1054) is in "last call" state

#### ECIP-1054 needs to be either accepted or updated (or rejected)

* discuss whether EIP-161 should be included or not @meowsbits @sorpaas
* discuss any other EIP that might cause uncertainty
* discuss timeline for the protocol upgrade
    * Morden Classic and Kotti Classic testnet (August?)
    * Ethereum Classic mainnet (September?)

#### Anything else related to Atlantis

#### Outlook: Agharta (ECIP-1056) if time permits

#### Outlook: Astor SHA3 testnet if time permits

#### Please comment to add items to the agenda

[https://github.com/ethereumclassic/ECIPs/issues/78](https://github.com/ethereumclassic/ECIPs/issues/78)

---

## Intermediate Atlantis Scheduling Call (June 7, 2019)

[https://ecips.ethereumclassic.org/ECIPs/ecip-1054](https://ecips.ethereumclassic.org/ECIPs/ecip-1054)

It became apparent that certain parts of the Ethereum Classic community are appreciating an [accelerated hardfork schedule](https://medium.com/ethereum-classic-labs/etc-labs-upgrades-ethereum-classic-to-expand-functionality-and-improve-compatability-with-ethereum-e2ac7d9aad93). To avoid confusion, rushing protocol upgrades, and putting the network at risk of a potential split, I propose scheduling an intermediate atlantis-upgrade scheduling call to discuss and agree on a realistic timeline for ECIP-1054

ref [#79](https://github.com/ethereumclassic/ECIPs/issues/79)

* When: Friday, June 07, 2019, 1pm UTC, 30 minutes max.
* Where: Youtube Livestream [https://www.youtube.com/watch?v=hDVrKDSOCWA&feature=youtu.be](https://www.youtube.com/watch?v=hDVrKDSOCWA&feature=youtu.be)

### Agenda

#### Quick client teams check-in

* Geth / Multi-Geth
* Parity Ethereum
* IOHK Mantis

#### Discuss timeline for the protocol upgrade

* Morden Classic and Kotti Classic testnet
* Ethereum Classic mainnet

#### There are two competing proposals right now, I will give them letters, and propose a 3rd as a compromise:

* [A] Original ECIP-1054 schedule
    * \`1_039_000\` on Kotti Classic PoA-testnet (early August 2019)
    * \`4_723_000\` on Morden Classic PoW-testnet (early August 2019)
    * \`8_750_000\` on Ethereum Classic PoW-mainnet (mid-September 2019)
* [B] ETCLabs "July 1st" schedule
    * \`N/A\` on Kotti Classic PoA-testnet
    * immediately on Morden Classic PoW-testnet (early June 2019)
    * \`8_343_000\` on Ethereum Classic PoW-mainnet (July 1st 2019)
* [C] Moderately accelerated schedule
    * \`716_617\` on Kotti Classic PoA-testnet (two weeks from now)
    * \`4_729_274\` on Morden Classic PoW-testnet (two weeks from now)
    * \`8_500_000\` on Ethereum Classic PoW-mainnet (six weeks after successfull testnet forks)

#### Please comment to add items to the agenda

[https://github.com/ethereumclassic/ECIPs/issues/80](https://github.com/ethereumclassic/ECIPs/issues/80)

---

## Core Devs Call — Atlantis Finalization (June 13, 2019)

[https://ecips.ethereumclassic.org/ECIPs/ecip-1054](https://ecips.ethereumclassic.org/ECIPs/ecip-1054)

ref [etclabscore/ECIPs#25](https://github.com/etclabscore/ECIPs/issues/25)

* When: Thursday, June 13, 2019, 3pm UTC, 60 minutes max.
* Where: Ethereum Classic [Discord](https://discord.gg/hQs894U) \`#ecips\` channel. Will use/create a voice channel *ad hoc*. Ask for invite here if you are not on that discord.

### Agenda

#### Quick client teams check-in

* Geth / Multi-Geth
* Parity Ethereum
* IOHK Mantis

#### Testing updates

* Kensington Testnet
* Kotti Testnet
* Morden Testnet

#### Atlantis (ECIP-1054) is in "last call" state

#### ECIP-1054 needs to be either accepted or updated (or rejected)

#### Ideally, we agree on how (and when) we accept Atlantis in this call

#### Please comment to add items to the agenda

[https://github.com/ethereumclassic/ECIPs/issues/79](https://github.com/ethereumclassic/ECIPs/issues/79)

---

## Core Devs Call — Finalization of the Atlantis Finalization (June 20, 2019)

[https://ecips.ethereumclassic.org/ECIPs/ecip-1054](https://ecips.ethereumclassic.org/ECIPs/ecip-1054)

* When: Thursday, June 20, 2019, 3pm UTC.
* Where: Ethereum Classic [Discord](https://discord.gg/hQs894U) \`#ecips\` channel.

### Agenda

#### Quick client teams check-in

* Multi-Geth
* Parity Ethereum
* IOHK Mantis
* Classic Geth

#### Testnet status

* Kensington
* Kotti Hardfork
* Morden Outlook

#### Discussion about the hard fork block

#### Please comment to add items to the agenda

[https://github.com/ethereumclassic/ECIPs/issues/83](https://github.com/ethereumclassic/ECIPs/issues/83)`,
  ecipRefs: ['ecip-1054', 'ecip-1056'],
  recordingUrl: 'https://www.youtube.com/watch?v=hDVrKDSOCWA',
  notesUrl: 'https://github.com/ethereumclassic/ECIPs/issues/78',
  forkBlock: 8_772_000,
}

export default entry

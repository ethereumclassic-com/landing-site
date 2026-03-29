import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'dao-fork',
  title: 'DAO Fork Rejection',
  date: '2016-07-20',
  summary:
    'Ethereum forked to reverse the DAO hack. ETC rejected the irregular state change and continued the original chain — establishing the Ethereum Classic identity.',
  content: `## DAO Fork Rejection

**Block:** 1,920,000\\
**Date:** July 20, 2016\\
**Status:** Fork Rejected

---

### Overview

The DAO Fork is the defining moment for Ethereum Classic. When the Ethereum Foundation proposed an irregular state change to reverse the DAO hack — a $60 million exploit of a smart contract — a minority of the community rejected the intervention. They continued running the original, unaltered chain. This chain became Ethereum Classic.

This was not a technical upgrade. It was a governance decision: a refusal to fork.

### Background

The DAO (Decentralized Autonomous Organization) was a crowdfunded investment vehicle launched in April 2016. It raised approximately 12.7 million ETH (~$150 million at the time) from over 11,000 participants. On June 17, 2016, an attacker exploited a reentrancy vulnerability in the DAO contract and drained approximately 3.6 million ETH (~$60 million).

The Ethereum Foundation proposed a hard fork at block 1,920,000 that would execute an irregular state change — moving the drained funds from the attacker's address to a recovery contract, allowing DAO token holders to withdraw their original investments.

### The Split

The community divided:

- **Pro-fork (ETH):** The irregular state change was justified to protect investors and the network's reputation. The fork was activated on the Ethereum Foundation chain
- **Anti-fork (ETC):** An irregular state change violated the fundamental principle that the blockchain's execution should be deterministic and immutable. "Code is Law" — the contract executed as written, and the protocol should not be altered to reverse the outcome of a valid transaction

The anti-fork community continued the original chain. Ethereum Classic was born.

### Declaration of Independence

On August 13, 2016, the Ethereum Classic community published a [Declaration of Independence](https://ethereumclassic.org/blog/2016-08-13-declaration-of-independence), establishing the foundational principles:

- **Immutability** — The blockchain ledger is inviolate. Valid transactions can never be erased, altered, or overwritten
- **Fungibility** — All ETC is equal. No address can be selectively frozen, seized, or redirected by protocol changes
- **Decentralization** — No single party can override the consensus rules. Changes require broad community agreement through the ECIP process
- **Code is Law** — Smart contracts execute as written. The protocol does not distinguish between "good" and "bad" outcomes of valid code

### Outcome

At block 1,920,000 on July 20, 2016, the chain split into two networks: ETH (which executed the irregular state change) and ETC (which continued the original chain). Ethereum Classic inherited the complete transaction history and state prior to the fork, and has maintained an unbroken, unaltered ledger since genesis.

---

### Related

- [Ethereum Classic Declaration of Independence](https://ethereumclassic.org/blog/2016-08-13-declaration-of-independence)
- [The DAO (Wikipedia)](https://en.wikipedia.org/wiki/The_DAO)`,
  ecipRefs: [],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: 1_920_000,
}

export default entry

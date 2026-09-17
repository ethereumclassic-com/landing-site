import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'olympia',
  title: 'Olympia',
  date: '2026-TBD',
  summary:
    'Olympia hard fork activation — ECIP-1111, ECIP-1112, ECIP-1121, ECIP-1122. EVM alignment through Glamsterdam, foundations for long-term development sustainability, and network security through a robust fee market. Exiting maintenance mode into active development — a modernized, maintained, and secure EVM and the long-standing home of Proof-of-Work smart contracts.',
  content: `## Olympia Hard Fork — Core Devs Call

**When:** TBD · **Duration:** 120 min max
**Where:** [Twitter/X Space — @ETC_Network](https://x.com/ETC_Network) (recorded)

---

## Phase 1: The Olympia Upgrade

Olympia is composed of four ECIPs that require a coordinated hard fork across all clients: ECIP-1111, ECIP-1112, ECIP-1121 and [ECIP-1122](https://ecips.ethereumclassic.org/ECIPs/ecip-1122) (Olympia ETC Network Security Client Configuration), which ECIP-1111 requires every Olympia-compatible client to implement.

### ECIP-1111 — Execution Client Basefee Specification Alignment

Activates **EIP-1559** and **EIP-3198** on Ethereum Classic.

- Adds Type-2 transactions (EIP-1559) — dynamic basefee pricing replaces the legacy first-price gas auction
- Adds \`BASEFEE\` opcode (EIP-3198) — fee-aware contract logic and canonical gas price visibility
- **Key difference from Ethereum:** basefee is redirected to the immutable Treasury vault (ECIP-1112) instead of burned
- Block rewards and miner tips (priorityFee) remain unchanged — non-inflationary, [ECIP-1017](https://ecips.ethereumclassic.org/ECIPs/ecip-1017) monetary policy is preserved, PoW miners are unaffected
- Legacy (Type-0) and Access List (Type-1) transactions continue working — existing ETC integrations are unaffected
- Prevents ETC from deprecation or delisting by exchanges, wallets, and development tooling that require Type-2 as the default transaction type
- Predictable fee estimation — wallets and dApps can accurately forecast gas costs, reducing end-user overpayment during congestion
- Elastic block capacity — blocks target 50% utilization and can temporarily expand to 2x during demand spikes, smoothing fee volatility
- Faster transaction inclusion — explicit tip mechanism lets users signal urgency without overpaying the basefee
- Improved infrastructure UX — RPC providers, block explorers, and indexers benefit from a canonical fee field rather than reverse-engineering effective gas prices from legacy transactions

### ECIP-1112 — Long-term Sustainability Basefee Treasury Contract Specification

Deterministic, immutable smart contract that receives all basefee revenue.

- Deployed at a fixed CREATE address, hardcoded in all clients
- No admin keys, no upgrade mechanisms, no proxy patterns
- Withdrawal restricted to a single authorized executor at deployment — a deterministic CREATE2 address reserved for governance (ECIP-1113)
- Until governance is deployed: **passive vault — accumulates, cannot disburse**
- Treasury starts at $0 and grows from basefee revenue and donations via on-chain transactions or miners pointing hashrate to the vault address
- **Treasury is immutable** — the vault contract cannot be changed after deployment. Updating the treasury address in the future would require a coordinated hard fork across all clients
- **Governance is mutable** — ECIP-1113 deploys upgradable OpenZeppelin 5.6 Governor contracts to the reserved executor address, allowing the governance layer to evolve with the network's needs without touching the Treasury itself

### ECIP-1121 — Execution Client Specification Alignment

Brings ETC's EVM to parity with Ethereum through Fusaka and carries that work into Glamsterdam, excluding PoS and blob mechanics.

| Category | EIPs |
|----------|------|
| Gas & State Access | EIP-7623, EIP-7702, EIP-7823, EIP-7825, EIP-7883, EIP-7935 |
| EVM Safety | EIP-6780, EIP-7642 (eth/69), EIP-7910, EIP-7934 |
| Cryptographic | EIP-2537 (BLS12-381), EIP-7951 (secp256r1) |
| Execution | EIP-1153 (transient storage), EIP-2935, EIP-5656 (MCOPY), EIP-7939 (CLZ) |

Explicitly deferred: all blob-dependent EIPs, all PoS/beacon chain EIPs.

---

## Olympia Framework — Later Stages

The broader Olympia framework includes governance and funding ECIPs that operate at the contract layer and do **not** require a hard fork. These follow the [Olympia Roadmap](https://ethereumclassicdao.org/about) stages.

| ECIP | Title | Stage |
|------|-------|-------|
| [ECIP-1113](https://ecips.ethereumclassic.org/ECIPs/ecip-1113) | Olympia DAO Governance Framework | Core Governance |
| [ECIP-1114](https://ecips.ethereumclassic.org/ECIPs/ecip-1114) | Olympia Funding Proposal Process | Core Governance |
| [ECIP-1119](https://ecips.ethereumclassic.org/ECIPs/ecip-1119) | Treasury Sanctions Compliance Oracle | Core Governance |
| [ECIP-1117](https://ecips.ethereumclassic.org/ECIPs/ecip-1117) | Futarchy Child-DAO Governance | Prediction Markets |
| [ECIP-1115](https://ecips.ethereumclassic.org/ECIPs/ecip-1115) | Olympia L-Curve Smoothing for Long-Term Network Security | Treasury Distribution — supersedes ECIP-1120 |
| [ECIP-1116](https://ecips.ethereumclassic.org/ECIPs/ecip-1116) | Consensus-Layer L-Curve Hardening for Base Fee Miner Distribution | Protocol Integration — second hard fork, sequenced after ECIP-1115 |
| [ECIP-1118](https://ecips.ethereumclassic.org/ECIPs/ecip-1118) | Futarchy Funding and Streaming Disbursements | Prediction Markets |


None of these need to be solved now with a $0 treasury. The governance layer can evolve from the base Olympia DAO once there are funds to govern.

---

## Network Security Context

- ETC's primary execution client went 21 months without a maintenance release, from June 2024 to the emergency releases of March 2026: the longest maintenance gap in the network's history
- Every v1.12.x release still carries at least one disclosed CVE unpatched; Core-Geth v1.13.0 fixes all of them
- The previous repository had no active maintainer: security disclosures went unanswered, and core development had no redundancy
- For the Olympia transition, Core-Geth was brought forward under the [ethereumclassic](https://github.com/ethereumclassic) organization, and its [v1.13.0 release](https://github.com/ethereumclassic/core-geth/releases/tag/v1.13.0) carries every known security fix
- Olympia directly addresses these structural issues through multi-client architecture, protocol-funded maintenance, and multi-maintainer review

The full [Core-Geth security audit](/build/clients/core-geth-security-audit) is published, and node operators on any v1.12.x release should upgrade to Core-Geth v1.13.0 now, following the [migration guide](https://docs.coregeth.com/tutorials/v1.13.0-migration/). We recommend all node operators update to the active development of Ethereum Classic with the Olympia Upgrade.

---

## Development Sustainability

On July 20th, 2016, at block 1,920,000, the Ethereum Classic community stood united by a common vision — to continue the original Ethereum blockchain that is truly free from censorship, fraud, or third-party interference. The [Declaration of Independence](https://ethereumclassic.org/blog/2016-08-13-declaration-of-independence) established that code is law, that the blockchain is inviolable, and that forks shall only be permitted for updating or upgrading the technology. Olympia is that upgrade — delivering a production-grade, state-of-the-art EVM while upholding every founding principle: immutability, fungibility, decentralization, and censorship resistance.

- **ETC Cooperative mandate** — ETC Cooperative was established to directly support the development of the Ethereum Classic protocol and infrastructure, to accelerate the deployment of ETC-based technologies, and to foster collaboration between developers, miners, investors, and business operators. Olympia delivers on all three pillars — multi-client protocol development, EVM modernization that restores tooling compatibility, and on-chain governance that unites Ethereum Classic stakeholders around transparent resource allocation for core software, critical infrastructure, and network security.
- **Funding alignment** — ETC Cooperative's funding and infrastructure is aligned with the Olympia Upgrade — execution clients, the block explorer, public RPC endpoints, boot nodes, and all core software and critical infrastructure. A robust fee market signals network usage and value, creating a path toward self-sustaining protocol funding.
- **Olympia DAO transition** — ETC Cooperative plays a key role in the evolution of Ethereum Classic's Olympia DAO. The DAO takes on transparent, public development efforts while ETC Cooperative continues as the NYC-based 501(c)(3) non-profit accepting tax-exempt donations. ETC Cooperative seeds the Olympia DAO with funds as a stopgap until the fee market is mature enough to self-sustain.
- **On-chain donations** — The Olympia Treasury enables direct on-chain contributions to the network's sustainability. Anyone can send funds to the vault — through mining rewards, on-chain transactions, or voluntary donations — consistent with the Declaration's principle that project development can be funded by anyone using a transparent, open, and decentralized protocol.
- **Legal wrapper** — The Wyoming-registered [Ethereum Classic DAO LLC](https://ethereumclassicdao.org) (Filing ID 2025-001671865) is downstream of the Olympia DAO as specified in ECIP-1113. The LLC handles all off-chain fiat operations, regulatory reporting, tax compliance, and the operational overhead of running a DAO in the modern regulated landscape.

### Sustainable Funding — A Decade-Long Community Priority

Sustainable development funding was identified as a top priority by the Ethereum Classic community at its first meetups in 2016, immediately following the Declaration of Independence. For nearly a decade, the network relied on a stopgap donation model — primarily funded by ETC Cooperative through Grayscale donations from the ETCG decentralized userbase, a $100M AUM trust product that has underwritten the majority of ETC's core development and critical infrastructure since 2017. That model worked. It kept the network maintained through a critical period. Olympia delivers on what the community has sought since the beginning: a self-sustaining protocol treasury funded by basefee revenue, complementing the established voluntary donation model rather than replacing it. The donation model endures — Olympia makes it matter less.

### Fukuii — The 2018 Orbita Client Vision Realized

The 2018 Orbita Client initiative established a long-term vision for an ETC-native execution client independent of Ethereum's development upstream. Fukuii delivers on that vision. Fukuii is Ethereum Classic's first native client — an EVM execution client built ground-up for ETC rather than derived from an Ethereum client, written in Scala 3 LTS on Pekko Typed Actors and running on the JVM. One binary runs several networks at once in one JVM process, each isolated with its own state, its own metrics registry, and its own configuration; a further network is configuration, not a new client.

Its three-layer architecture separates a chain-agnostic EVM core (\`fukuii-core\`) from networking and runtime (\`fukuii-env\`). Consensus is selected per deployment behind one interface: native Proof-of-Work for ETC mainnet and Mordor, or Proof-of-Stake with a built-in consensus layer, so one process is a complete Proof-of-Stake node. An external consensus client driving Fukuii over the Engine API V1–V4 is the alternative. This positions Fukuii not only as ETC's primary PoW consensus client, but as the execution layer foundation for ETC-based sidechains, L2 constructions, and multi-EVM deployments. Fukuii ships an MCP server exposing node state to AI agents, and is Apache 2.0 with Cosign-signed build provenance and a CycloneDX SBOM on release artifacts. Maintained by The Fukuii Authors (Chippr Robotics LLC and White B0x Inc.).

---

## Regulatory & Institutional Positioning

- **Digital commodity classification** — ETC is positioned for classification as a digital commodity under the CLARITY Act. As a Proof-of-Work blockchain with no pre-mine, no ICO, and decentralized governance, ETC aligns with commodity characteristics. Senate Banking Committee cleared the bill 15-9 in May 2026; Senate floor vote expected before the July 4, 2026 target.
- **GENIUS Act** — The GENIUS Act creates a pathway for regulated stablecoins on EVM-compatible platforms. ETC's Proof-of-Work foundation positions it as a compliant smart contract platform where regulated stablecoins can operate.
- **Institutional infrastructure** — Grayscale Ethereum Classic Trust (ETCG), established 2017, provides regulated securities exposure to ETC — the only Proof-of-Work smart contract platform with a Grayscale trust product. 300+ active markets across 20+ major global exchanges. Institutional-grade custody from leading digital asset custodians.
- **Active development alignment** — Olympia's multi-client architecture, protocol-funded treasury, and on-chain governance align ETC with the institutional requirements for enterprise adoption, sovereign regulation, and participation in the world's largest financial markets.

---

## Multi-Client Implementation

Two independent client implementations are ready for the Olympia hard fork and progressing to Mordor activation.

| Client | Language | Release | Role |
|--------|----------|---------|------|
| [Fukuii](https://github.com/fukuii-project/fukuii-cli) | Scala | TBD | **Recommended** — Ethereum Classic's first native client, built ground-up for ETC; native PoW for ETC and Mordor |
| [Core-Geth](https://github.com/ethereumclassic/core-geth) | Go | TBD | **Maintained** — A go-ethereum derivative maintained for ETC, carried through the Olympia transition |

Both clients produce identical genesis hashes and have been verified through Mordor testnet with matching chain state. See [client details](/olympia/clients) for upgrade instructions.

**Client plugin architecture** — Upstream Ethereum clients separate the consensus engine from the execution engine to support Proof-of-Stake. An ETC plugin uses that seam to add Ethereum Classic chain support into an existing Ethereum client's execution layer: [Besu](https://github.com/besu-eth/besu), [Erigon](https://github.com/erigontech/erigon), [Ethrex](https://github.com/lambdaclass/ethrex), [Go-Ethereum](https://github.com/ethereum/go-ethereum), [Nethermind](https://github.com/NethermindEth/nethermind), and [Reth](https://github.com/paradigmxyz/reth). A plugin is not a client implementation and carries no mining or PoW consensus — it widens execution-layer reach for exchanges, RPC providers, explorers, and indexers, while Fukuii anchors the PoW consensus layer.

---

## Etymology & Lore

See [Etymology & Lore](/olympia/etymology) for the full naming context — the pre-genesis testnet, Marvel upgrade lineage, Greek mythology, and the competitive return to active development.

See [A Decade of Conviction](/olympia/history) for the full institutional history — the teams that came and went, two rejected treasury proposals that defined what the community would and wouldn't accept, the stewards who held the line, and how Olympia delivers what the community has sought since 2016.

---

## Activation

| Network | Block | Target |
|---------|-------|--------|
| Mordor Testnet | TBD | TBD |
| ETC Mainnet | TBD | TBD |

---

## Agenda

1. Network security context and maintenance gap
2. Olympia Phase 1 review — ECIP-1111, ECIP-1112, ECIP-1121, ECIP-1122
3. Multi-client implementation status (Fukuii, Core-Geth, Besu)
4. Sustainable funding milestone — a decade of community priority, from ETCG-backed donations to protocol treasury
5. Fukuii client launch — realizing the 2018 Orbita Client vision, native ETC execution client, no upstream dependencies
6. Development sustainability — ETC Cooperative, Olympia DAO, legal wrapper
7. Regulatory and institutional positioning
8. Mordor testnet activation block
9. ETC mainnet activation block
10. Client release and node operator upgrade timeline
11. Open discussion

---

## Related

- [ECIP-1111: Execution Client Basefee Specification Alignment (Olympia Hardfork)](https://ecips.ethereumclassic.org/ECIPs/ecip-1111)
- [ECIP-1112: Long-term Sustainability Basefee Treasury Contract Specification (Olympia Hardfork)](https://ecips.ethereumclassic.org/ECIPs/ecip-1112)
- [ECIP-1121: Execution Client Specification Alignment (Olympia Hardfork)](https://ecips.ethereumclassic.org/ECIPs/ecip-1121)
- [ECIP-1122: Olympia ETC Network Security Client Configuration](https://ecips.ethereumclassic.org/ECIPs/ecip-1122)
- [Core-Geth Security Audit: the June 2024 – March 2026 gap, fixed in v1.13.0](/build/clients/core-geth-security-audit)

---

## Call Results

*To be updated after meeting.*`,
  ecipRefs: [
    'ecip-1111',
    'ecip-1112',
    'ecip-1121',
  ],
  recordingUrl: null,
  notesUrl: null,
  forkBlock: null,
}

export default entry

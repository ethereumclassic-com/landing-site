# Ethereum Classic Knowledge Bank

**Purpose**: Authoritative reference for ETC-specific technical details, historical context, and insider knowledge from core contributors. This document serves as the single source of truth for public-facing copy on EthereumClassic.com and related properties.

**Maintainer**: ETC Core Contributors
**Last Updated**: January 2026

---

## Table of Contents

1. [Node Clients](#node-clients)
2. [Network Upgrades](#network-upgrades)
3. [Organizations & Entities](#organizations--entities)
4. [Economic Policy](#economic-policy)
5. [Mining & Consensus](#mining--consensus)
6. [Historical Events](#historical-events)
7. [Ecosystem Projects](#ecosystem-projects)
8. [Common Misconceptions](#common-misconceptions)

---

## Node Clients

### Client taxonomy — get this right, most copy gets it wrong

Three distinct categories. They are not interchangeable:

- **Fukuii** — Ethereum Classic's **first native client**, built ground-up for ETC rather than
  derived from an Ethereum client.
- **Core-Geth** — a **go-ethereum derivative** maintained for ETC. Not native, and **not a plugin**.
  Do not describe it as "the legacy client" or "the established client".
- **Plugins** — ETC support **added into existing Ethereum clients**. Six, alphabetical: Besu,
  Erigon, Ethrex, Go-Ethereum, Nethermind, Reth. A plugin is **not a client implementation** and
  carries no mining or PoW consensus. Never count plugins as built or shipped client
  implementations in a milestone, timeline, or test-coverage claim.

### Client landscape

| Client | Category | Language | Notes |
|--------|----------|----------|-------|
| **Fukuii** | Native client | Scala 3 LTS | ETC's first native client; primary for the Olympia era |
| **Core-Geth** | go-ethereum derivative | Go | Maintained for ETC, carried through Olympia |
| **Besu** | Plugin target | Java | ETC support via plugin; no PoW mining |
| **Erigon** | Plugin target | Go | ETC support via plugin; archive-optimized |
| **Ethrex** | Plugin target | Rust | ETC support via plugin |
| **Go-Ethereum** | Plugin target | Go | ETC support via plugin |
| **Nethermind** | Plugin target | C# | ETC support via plugin |
| **Reth** | Plugin target | Rust | ETC support via plugin |

Plugin upstream repositories (link these; every `github.com/ethereumclassic/<plugin-name>` URL 404s):

| Plugin | Upstream |
|---|---|
| Besu | https://github.com/besu-eth/besu (**not** hyperledger/besu — the org moved) |
| Erigon | https://github.com/erigontech/erigon |
| Ethrex | https://github.com/lambdaclass/ethrex |
| Go-Ethereum | https://github.com/ethereum/go-ethereum |
| Nethermind | https://github.com/NethermindEth/nethermind |
| Reth | https://github.com/paradigmxyz/reth |

### Core-Geth

**Repository**: https://github.com/etclabscore/core-geth
**Maintainer**: ETC Cooperative

**Category**: A go-ethereum derivative maintained for Ethereum Classic. Not native, and not a plugin.

**Technical Details**:
- Derived from go-ethereum (Geth); originally forked from the deprecated Multi-Geth client
- Full PoW mining support
- Supports ETC mainnet, Mordor testnet, and private networks
- Carried through the Olympia upgrade for network continuity

**Why the primary role moves to Fukuii**:
- Upstream Geth deprecated PoW support in favor of PoS
- Core-Geth has not separated execution layer (EVM) from consensus (PoW)
- Major refactoring would be required to maintain compatibility
- More efficient to invest in native ETC client (Fukuii)

### Fukuii

**Website**: https://fukuii.org
**Repository**: https://github.com/fukuii-project/fukuii-cli
**Docs**: https://docs.fukuii.org
**Container**: ghcr.io/fukuii-project/fukuii-cli
**Maintainer**: The Fukuii Authors (Chippr Robotics LLC and White B0x Inc.)
**License**: Apache 2.0

**Category**: Ethereum Classic's **first native client** — built ground-up for ETC rather than
derived from an Ethereum client.

**Technical Details**:
- An EVM execution client in **Scala 3 LTS on Pekko Typed Actors**, running on the JVM
- **One binary runs several networks at once in one JVM process**, each isolated with its own
  state, its own metrics registry, and its own configuration
- **A further network is configuration, not a new client**
- Requires a current JDK LTS (25); the Docker image bundles one

**Consensus** — selected per deployment behind one interface:
- **Native Proof-of-Work** for ETC mainnet and Mordor
- **Proof-of-Stake with a built-in consensus layer** — one process is a complete PoS node
- An **external consensus client over the Engine API V1–V4** is the *alternative*, not the default

> **Correction to watch for.** Older copy says Fukuii "pairs with" or requires Lighthouse / Prysm /
> Teku / Lodestar / Nimbus to run Proof-of-Stake networks. That inverts it — Fukuii runs its own
> consensus layer. Also avoid "with pluggable consensus"; say "consensus selected per deployment".

**Key Features**:
- Fast initial sync with checkpoints; SNAP, fast, and regular sync
- Interactive TUI and CLI utilities
- **MCP server** exposing node state, sync progress, peer counts, and block data to AI agents
- **Cosign-signed build provenance** and a **CycloneDX SBOM** on release artifacts
- Comprehensive test suites

**Enterprise / institutional positioning — this is Fukuii's, not Besu's.** Fukuii is enterprise-grade
by way of the JVM rather than through a separate edition, and the site should say so:
- **JVM-native end to end** for institutions already running on the JVM, with **no foreign-language
  bridge** — JFR, async-profiler, JMX and heap dumps work exactly as on any other JVM process
- Prometheus metrics, Grafana dashboards, and liveness and readiness endpoints ship in the binary
- Concurrent multi-instance execution, and **external-signer/HSM custody integration**
- Separate Pekko dispatchers for sync, RPC and general work, so sync pressure cannot starve the RPC
- Signed container images with build provenance attestation and a CycloneDX SBOM

> Older copy assigned "enterprise-grade" to Besu and left Fukuii described only as the primary
> client. Besu is enterprise-grade as an *upstream Ethereum client*; for Ethereum Classic the
> enterprise/institutional client is Fukuii, and ETC support only reaches Besu via a plugin.

**Testing Networks**:
- **Gorgoroth Trials**: Private test network for Alpha testing
- **Mordor**: Public testnet support

> **Fukuii is NOT a Mantis fork.** This document previously said it was, and that claim propagated
> into site copy. Per the project's own `NOTICE`: *"Fukuii is an independent, ground-up client. It
> contains no Mantis source code and is not a derivative work of Mantis."* Fukuii acknowledges two
> projects for vision and tech stack while taking no code from either — ETCDEV's **Orbita** (2018),
> an early multi-network client vision for ETC, and IOHK's **Mantis**, which chose Scala and the JVM
> for the task. "Mantis" is a trademark of IOHK, referenced only for lineage and the name story.

### Besu

**Repository**: https://github.com/besu-eth/besu (the org moved from `hyperledger`)
**Docs**: https://docs.besu-eth.org

**Category**: Plugin target — an enterprise-grade Ethereum client in Java. ETC support is delivered
as a plugin that adds it into the upstream codebase, not as a separate ETC client.

**Technical Details**:
- Enterprise-grade Java client
- ETC chain support comes from the ETC execution plugin
- Does NOT support PoW mining — plugins add execution-layer support only

**Recommended Use Cases**:
- Non-mining infrastructure: exchanges, RPC providers, block explorers, indexers
- Cross-client protocol validation
- NOT for production mining nodes

### Erigon

**Repository**: https://github.com/erigontech/erigon

**Category**: Plugin target — an archive-optimized Ethereum client in Go, built for minimal disk
usage and fast historical queries. ETC support is delivered as a plugin that adds it into the upstream
codebase.

> Older copy in this document said "Erigon does NOT support Ethereum Classic" and called any other
> claim a misconception. That predates the plugin architecture and is superseded: Erigon is one of
> the six plugin targets. It remains true that Erigon is not an ETC *client implementation* — no
> plugin target is.

---

## Network Upgrades

### Olympia Upgrade (2026)

**ECIP**: ECIP-1121
**Status**: In Development
**Target**: 2026 (specific date TBD)

**Purpose**: Modernize ETC EVM stack to current ETH EVM version, excluding PoS and blob structures.

**Scope**:
- [PLACEHOLDER: List of EIPs/ECIPs included in Olympia]
- [PLACEHOLDER: EVM opcode additions]
- [PLACEHOLDER: Gas schedule changes]
- [PLACEHOLDER: Any other protocol changes]

**What Olympia Does NOT Include**:
- Proof of Stake (PoS) consensus
- Blob transactions (EIP-4844)
- Any ETH-specific PoS infrastructure

**Client Readiness**:
- Fukuii: Primary client for Olympia, Alpha testing in progress
- Core-Geth: Will support Olympia, but expected to sunset afterward
- Besu: [PLACEHOLDER: Will Besu support Olympia?]

**Historical Context**:
- [PLACEHOLDER: Why is Olympia named Olympia?]
- [PLACEHOLDER: Who proposed ECIP-1121?]
- [PLACEHOLDER: Key discussions/decisions leading to Olympia]

### Previous Network Upgrades

#### Thanos (November 2020)
- ECIP-1099: Calibrate Epoch Duration
- Introduced ETChash algorithm
- Reduced DAG size growth rate
- Enabled continued GPU mining

#### Mystique (February 2022)
- [PLACEHOLDER: What was included in Mystique?]

#### Spiral (January 2024)
- [PLACEHOLDER: What was included in Spiral?]

---

## Organizations & Entities

### ETC Cooperative

**Website**: https://etccooperative.org
**Role**: Primary funding and development organization for ETC

**Responsibilities**:
- Core-Geth maintenance (transitioning to Fukuii)
- Network infrastructure
- Developer grants
- Community coordination

**Key Personnel**:
- [PLACEHOLDER: Executive Director?]
- [PLACEHOLDER: Key developers?]

### ETC Labs

**Website**: https://etclabs.org
**Role**: [PLACEHOLDER: Current role of ETC Labs?]

**Historical Context**:
- [PLACEHOLDER: History of ETC Labs]
- [PLACEHOLDER: Relationship with ETC Cooperative]

### IOHK (Historical)

**Role**: Former ETC development organization

**Contributions**:
- Original Mantis client development
- Treasury proposal (not implemented)
- [PLACEHOLDER: Other IOHK contributions]

**Departure**:
- [PLACEHOLDER: When did IOHK reduce ETC involvement?]
- [PLACEHOLDER: Why?]

### The Fukuii Authors

Fukuii is attributed to **The Fukuii Authors**, comprising **Chippr Robotics LLC** and
**White B0x Inc.** Use that attribution in public copy rather than crediting either company alone.

**Chippr Robotics LLC** — a Fukuii Author.

**White B0x Inc.** — a Fukuii Author. https://whiteb0x.com. Also authored the six CVE patches and
the Go toolchain modernization published to `ethereumclassic/core-geth`.

Fukuii itself lives under the **fukuii-project** org: https://github.com/fukuii-project

**Contributions**:
- Fukuii client development (https://github.com/fukuii-project)

---

## Economic Policy

### ECIP-1017 Emission Schedule

**Adopted**: March 2017
**Block**: 5,000,001

**Schedule**:
- Initial block reward: 5 ETC
- Reduction: 20% every 5,000,000 blocks
- No tail emission (supply is capped)

**Era Schedule**:

| Era | Block Range | Block Reward | Cumulative Supply |
|-----|-------------|--------------|-------------------|
| 1 | 1 - 5,000,000 | 5 ETC | ~25M ETC |
| 2 | 5,000,001 - 10,000,000 | 4 ETC | ~45M ETC |
| 3 | 10,000,001 - 15,000,000 | 3.2 ETC | ~61M ETC |
| 4 | 15,000,001 - 20,000,000 | 2.56 ETC | ~73.8M ETC |
| 5 | 20,000,001 - 25,000,000 | 2.048 ETC | ~84.0M ETC |
| 6 | 25,000,001 - 30,000,000 | 1.6384 ETC | ~92.2M ETC |
| ... | ... | ... | ... |

**Maximum Supply**: ~210.7 million ETC

**"Fifthening"**: The community term for the 20% block reward reduction every 5M blocks (analogous to Bitcoin's "halving").

### Treasury Proposal (Not Implemented)

- [PLACEHOLDER: When was the treasury proposal made?]
- [PLACEHOLDER: What was proposed?]
- [PLACEHOLDER: Why was it not implemented?]
- [PLACEHOLDER: Community response]

---

## Mining & Consensus

### ETChash Algorithm

**Introduced**: Thanos upgrade (November 2020)
**ECIP**: ECIP-1099

**Technical Details**:
- Memory-hard algorithm (ASIC-resistant intent, though ASICs exist)
- DAG (Directed Acyclic Graph) based
- Epoch length: 30,000 blocks (reduced from original 30,000)
- Current DAG size: ~5.2 GB

**Why ETChash?**:
- Original Ethash DAG was growing too large for consumer GPUs
- Thanos calibrated epoch duration to slow DAG growth
- Maintained ASIC resistance while extending GPU mining viability

### Current Mining Landscape (January 2026)

**Network Hashrate**: ~174 TH/s
**Difficulty**: ~2.47 PH
**Block Time**: ~13 seconds

**Major Mining Pools**:
| Pool | Approximate Share |
|------|-------------------|
| F2Pool | ~41% |
| 2Miners | ~33% |
| K1Pool | ~13% |
| Poolin | ~5% |
| EMCD | ~4% |
| Others | ~4% |

**Hardware**:
- ASICs dominate hashrate (Jasminer X4, Bitmain E9, iPollo V1)
- GPU mining still viable but less profitable
- Best GPU efficiency: AMD RX 6600 XT (~1.72 J/MH)

---

## Historical Events

### The DAO Fork (July 2016)

**Date**: July 20, 2016
**Block**: 1,920,000

**What Happened**:
- The DAO was a decentralized venture fund on Ethereum
- ~$60M worth of ETH was drained through a reentrancy vulnerability
- Ethereum community voted to hard fork and return funds
- Ethereum Classic continued the original chain WITHOUT the fork

**ETC Philosophy**:
- "Code is Law" - immutability over intervention
- Transactions should not be reversed for any reason
- The chain's history is sacrosanct

**Key Quote**: [PLACEHOLDER: Notable quote about Code is Law from early ETC proponent]

### 51% Attacks (2019-2020)

**Events**:
- [PLACEHOLDER: Dates and details of 51% attacks]
- [PLACEHOLDER: Response and recovery]
- [PLACEHOLDER: Security improvements implemented]

### ETH Merge Impact (September 2022)

**Date**: September 15, 2022

**Impact on ETC**:
- Massive hashrate migration from ETH to ETC
- ETC became largest PoW smart contract platform
- Network hashrate increased significantly
- Increased visibility and miner interest

**[PLACEHOLDER: Specific hashrate numbers before/after merge]**

### Mordor Testnet

**Launch**: [PLACEHOLDER: When was Mordor launched?]
**Purpose**: Public testnet for ETC

**Naming**: Named after the dark land in Lord of the Rings, following ETC's tradition of LOTR-themed names (Thanos, Mystique naming is different - [PLACEHOLDER: explain naming conventions])

---

## Ecosystem Projects

### ETCswap

**Website**: https://etcswap.org
**Type**: Decentralized Exchange (DEX)

**Versions**:
- V2: Uniswap V2 fork
- V3: Uniswap V3 fork (concentrated liquidity)

**[PLACEHOLDER: Launch dates, TVL, key milestones]**

### Classic USD (USC)

**Type**: USD-backed stablecoin on ETC

**[PLACEHOLDER: Issuer, backing mechanism, adoption status]**

### Fukuii GUI

**Type**: DeFi dashboard and economic control center

**[PLACEHOLDER: Features, launch date, relationship to other projects]**

### HebeSwap (Historical?)

**[PLACEHOLDER: Status of HebeSwap - still active?]**

### POW Summit / POW Alliance

**[PLACEHOLDER: What is POW Summit? POW Alliance? ETC's involvement?]**

---

## Common Misconceptions

### "ETC is just old Ethereum"

**Reality**: ETC is the original, unforked Ethereum chain. ETH forked away from ETC in 2016.

### "ETC has no development"

**Reality**: Active development on Core-Geth, Fukuii, and ecosystem projects. Regular network upgrades.

### "ETC is insecure"

**Reality**: While ETC experienced 51% attacks in 2019-2020, security measures have been implemented. Current hashrate provides significant security.

### "Erigon is an ETC client"

**Reality**: Erigon is one of the six **plugin targets** — ETC support reaches it as a plugin
added into the upstream Erigon codebase, adding chain support to the execution layer only. That is
not the same as being an ETC client implementation, and it carries no mining or PoW consensus. The
same distinction applies to Besu, Ethrex, Go-Ethereum, Nethermind, and Reth.

### "Fukuii is a fork of Mantis"

**Reality**: Fukuii is an independent, ground-up client containing no Mantis source code, and is not
a derivative work of Mantis. It is Ethereum Classic's first **native** client. Mantis is
acknowledged for choosing Scala and the JVM for the task, and ETCDEV's Orbita (2018) for the
multi-network vision — neither contributed code.

### "ETC will switch to PoS"

**Reality**: ETC is committed to Proof of Work. There are no plans to switch to PoS.

---

## Data Sources & Attribution

When displaying ETC data on public-facing pages, use these authoritative sources:

### Live Data
- **Blockscout**: https://etc.blockscout.com - Block explorer, network stats
- **CoinGecko**: Price data, market cap
- **MiningPoolStats**: https://miningpoolstats.stream/ethereumclassic - Pool distribution

### Documentation
- **ECIPs**: https://ecips.ethereumclassic.org - Ethereum Classic Improvement Proposals
- **ETC Docs**: [PLACEHOLDER: Official documentation URL]

### Community
- **Discord**: [PLACEHOLDER: Official Discord invite]
- **Twitter/X**: [PLACEHOLDER: Official Twitter handle]

---

## Placeholder Summary

The following sections need input from ETC Core Contributors:

1. **Fukuii maintainer and timeline details**
2. **Mantis historical context (active period, deprecation reason)**
3. **Olympia upgrade specific scope (EIPs included)**
4. **Organization personnel and current roles**
5. **ETC Labs current status**
6. **IOHK departure details**
7. **Fukuii Authors — individual company roles beyond Fukuii**
8. **Treasury proposal history**
9. **51% attack specific details**
10. **ETH Merge hashrate impact numbers**
11. **Mordor testnet launch date**
12. **Network upgrade naming conventions**
13. **Ecosystem project details (ETCswap, USC, Fukuii GUI)**
14. **HebeSwap status**
15. **POW Summit/Alliance involvement**
16. **Official community links**

---

## Changelog

| Date | Change | Author |
|------|--------|--------|
| 2026-01-18 | Initial document creation | Claude (AI Assistant) |
| | [PLACEHOLDER: Core contributor review] | |

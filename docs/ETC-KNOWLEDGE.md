# Ethereum Classic Knowledge Bank

**Purpose**: Authoritative reference for ETC-specific technical details, historical context, and insider knowledge from core contributors. This document serves as the single source of truth for public-facing copy on EthereumClassic.com and related properties.

**Maintainer**: ETC Core Contributors
**Last Updated**: November 2026

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

- **Fukuii** — an **EVM-compliant execution client in Scala 3** with pluggable consensus, maintained
  by Chippr Robotics LLC as a continuation of IOHK's **Mantis**, the Scala client built for Ethereum
  Classic. It runs ETC natively with Proof-of-Work. Its maintainers mark it alpha, so the site offers
  it as an alternative to try.
- **Core-Geth** — a **go-ethereum derivative** maintained for ETC. Not native, and **not a plugin**.
  Do not describe it as "the legacy client" or "the established client".
- **Plugins** — ETC support **added into existing Ethereum clients**. Six, alphabetical: Besu,
  Erigon, Ethrex, Go-Ethereum, Nethermind, Reth. A plugin is **not a client implementation** and
  carries no mining or PoW consensus. Never count plugins as built or shipped client
  implementations in a milestone, timeline, or test-coverage claim.

### Client landscape

| Client | Category | Language | Notes |
|--------|----------|----------|-------|
| **Fukuii** | Execution client | Scala 3 | A continuation of Mantis by Chippr Robotics LLC; alpha, released from `chippr-robotics/fukuii` |
| **Core-Geth** | go-ethereum derivative | Go | The recommended client, released and maintained in the `ethereumclassic` organization |
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

**Repository**: https://github.com/ethereumclassic/core-geth
**Docs**: https://docs.coregeth.com
**Releases**: https://github.com/ethereumclassic/core-geth/releases
**Maintainer**: Ethereum Classic core developers and community contributors (The core-geth Authors), who do
the work, with the Ethereum Classic DAO as the standing legal entity that maintains and funds the client today
as its funder of last resort. Core-Geth copy names no contractor. The ETC Cooperative stopped developing
Core-Geth in 2025, and the previous repository, `etclabscore/core-geth`, carries only the v1.12.x releases.
**Security contact**: security@ethereumclassic.net, or private vulnerability reporting on the repository

**Category**: A go-ethereum derivative maintained for Ethereum Classic. Not native, and not a plugin.

**Technical Details**:
- Derived from go-ethereum (Geth); originally forked from the deprecated Multi-Geth client
- Full PoW mining support
- Supports ETC mainnet, Mordor testnet, and private networks
- Released and maintained in the `ethereumclassic` organization. v1.13.0 does not include Olympia,
  and its Olympia release is TBD

**Why a second client matters**: Fukuii is a separate implementation, in Scala on the JVM, with a
different dependency tree and failure profile, so a bug in one client is not a bug in the whole
network. Fukuii's README makes this case under client diversity.

Do not write that either client replaces the other, or that Core-Geth is sunsetting. It is
released and maintained in the `ethereumclassic` GitHub organization, and that is what the site
recommends.

### Fukuii

**Website**: https://fukuii.com
**Docs**: https://docs.fukuii.com (the same site as https://chippr-robotics.github.io/fukuii/)
**Repository**: https://github.com/chippr-robotics/fukuii
**Container**: ghcr.io/chippr-robotics/fukuii (mirror: docker.io/chipprbots/fukuii)
**Releases**: https://github.com/chippr-robotics/fukuii/releases/latest — the newest full release.
The builds published between full releases are marked pre-release. The site states the latest full
release once, in `lib/fukuii.ts`.
**Maintainer**: Chippr Robotics LLC (2025-present), per the repository's `NOTICE`
**License**: Apache 2.0
**Status**: alpha. fukuii.com: *"Fukuii is in alpha and not yet recommended for production-critical
workloads."* The site offers it as an alternative to try beside Core-Geth.

**Category**: An EVM-compliant Ethereum execution layer client written in Scala 3, with pluggable
consensus (docs.fukuii.com). A continuation of IOHK's Mantis: its `NOTICE` describes a derivative
work of Mantis, rebranded and maintained by Chippr Robotics LLC.

**Technical Details** (fukuii.com, docs.fukuii.com and the repository README):
- Scala 3 LTS on JDK 25 LTS, with an Apache Pekko actor system
- Native Proof-of-Work (Ethash) for ETC mainnet and Mordor
- Engine API V1–V4, through Prague/Electra, for post-Merge Ethereum networks, paired with a
  consensus client such as Lighthouse, Prysm, Teku, Lodestar or Nimbus
- Pluggable consensus in three layers: `fukuii-core`, `fukuii-env`, and a swappable consensus module
- The network is a positional argument when the node starts: `./bin/fukuii etc`, `./bin/fukuii mordor`
- SNAP, fast and regular sync; JSON-RPC over HTTP and WebSocket, GraphQL, and an MCP server
- MESS (ECBP-1100) against deep reorganizations
- Prometheus metrics, Grafana dashboards, and health and readiness endpoints
- Cosign-signed container images with SLSA build provenance, and a CycloneDX SBOM per release

**Verification**: Fukuii publishes which CI checks can block a merge, generated from its own gate
configuration, at https://docs.fukuii.com/STATUS/. Hive suites run there as informational checks, so
do not describe Fukuii as Hive-verified.

> **Two codebases share the name.** `fukuii-project/fukuii-cli` is an independent rewrite with no
> common ancestor, and not the client this site lists; Fukuii's Verification Status page says so.
> Its descriptions (no Mantis code, several networks in one JVM process, a built-in consensus
> layer, external-signer/HSM custody, "The Fukuii Authors") were once used here for the client the
> site links, and still appear on ethereumclassicdao.org. Describe Fukuii from fukuii.com,
> docs.fukuii.com and the chippr-robotics/fukuii repository only.

### Besu

**Repository**: https://github.com/besu-eth/besu (the org moved from `hyperledger`)
**Docs**: https://docs.besu-eth.org

**Category**: Plugin target — an enterprise-grade Ethereum client in Java. ETC support is delivered
as a plugin that adds it into the upstream codebase, not as a separate ETC client.
**Status**: planned, with the rest of the plugin framework (each plugin's `status` in
`app/build/data/build.ts`). The site lists Besu only among the plugins: no app card and no client
listing of its own.

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

### Olympia Upgrade (2027 target)

**ECIP**: ECIP-1121
**Status**: In Development
**Target**: 2027 (activation block TBD)

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
- Core-Geth: the recommended client, released and maintained in the `ethereumclassic` organization.
  Its Olympia release is TBD; v1.13.0 does not include Olympia
- Fukuii: alpha, by its maintainers' label, and offered as an alternative to try. Its Olympia
  release is TBD
- Plugins, Besu among them: not client implementations, so not part of client readiness

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
**Role**: A US 501(c)(3) non-profit that funded Ethereum Classic public goods from 2017. Its staff
maintained Core-Geth from January 2022, at `etclabscore/core-geth`, through the Mystique and Spiral
upgrades, alongside the peer discovery lists, the bootnodes and the public JSON-RPC endpoints. It entered
maintenance mode at the end of 2024, stopped developing Core-Geth in 2025, and its board has communicated
that it will dissolve, with the public goods continuing in the `ethereumclassic` GitHub organization.

**Grants**: It took part in the ETC Grants DAO program with Bitmain from 2023 and left it on
December 5, 2024. Its 2024 retrospective says it stays in maintenance mode, with spending minimized,
until its funding runs out.

Write about it in the past tense, credited for what it funded. Never present it as a current steward,
a grant source or a donation route, and give no dissolution date. Sources: Core-Geth's
[ETC Cooperative transition](https://docs.coregeth.com/etc-cooperative-transition/) page and the
Cooperative's [2024 retrospective](https://etccooperative.org/etc-cooperative-retrospective-2024.pdf).

### ETC Labs

**Website**: https://etclabs.org
**Role**: Led Core-Geth's development from the Atlantis upgrade in 2019 to Magneto in 2021, through the
fork and rebrand of Multi-Geth to Core-Geth, publishing as ETC Labs and ETC Core. It left the Ethereum
Classic ecosystem in 2021, and `etclabscore/core-geth` passed to the ETC Cooperative. Source:
coregeth.com/about, from Core-Geth's project history.

### IOHK (Historical)

**Role**: Former ETC development organization

**Contributions**:
- Original Mantis client development
- Treasury proposal (not implemented)
- [PLACEHOLDER: Other IOHK contributions]

**Departure**:
- [PLACEHOLDER: When did IOHK reduce ETC involvement?]
- [PLACEHOLDER: Why?]

### Chippr Robotics LLC

Maintains Fukuii. The repository's `NOTICE`: *"This software has been modified and is maintained as
a derivative work by Chippr Robotics, LLC (2025-present) under the project name 'Fukuii'."* Credit
Fukuii to Chippr Robotics LLC.

**Contributions**:
- Fukuii client development (https://github.com/chippr-robotics/fukuii)

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

### "Fukuii contains no Mantis code" or "Fukuii was written from scratch"

**Reality**: The Fukuii this site lists, chippr-robotics/fukuii, is a derivative work of IOHK's
Mantis maintained by Chippr Robotics LLC, as its `NOTICE` and Verification Status page say. The
ground-up description belongs to `fukuii-project/fukuii-cli`, a separate codebase the site does not
list.

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
- **Discord**: https://ethereumclassic.com/discord, the site's address for the Ethereum Classic Community server. Link it rather than the invite, which can be rotated: the invite is kept in `lib/social.ts` and read only by the `/discord` redirect.
- **Twitter/X**: [PLACEHOLDER: Official Twitter handle]

---

## Placeholder Summary

The following sections need input from ETC Core Contributors:

1. **Fukuii release timeline**
2. **Mantis historical context (active period, deprecation reason)**
3. **Olympia upgrade specific scope (EIPs included)**
4. **Organization personnel and current roles**
5. **IOHK departure details**
6. **Treasury proposal history**
7. **51% attack specific details**
8. **ETH Merge hashrate impact numbers**
9. **Mordor testnet launch date**
10. **Network upgrade naming conventions**
11. **Ecosystem project details (ETCswap, USC)**
12. **HebeSwap status**
13. **POW Summit/Alliance involvement**
14. **Official community links**

---

## Changelog

| Date | Change | Author |
|------|--------|--------|
| 2026-01-18 | Initial document creation | Claude (AI Assistant) |
| | [PLACEHOLDER: Core contributor review] | |

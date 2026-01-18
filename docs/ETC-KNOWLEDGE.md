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

### Current Client Landscape (January 2026)

| Client | Status | Language | Production Ready | Notes |
|--------|--------|----------|------------------|-------|
| **Core-Geth** | Active (Transitioning) | Go | Yes | Current primary client, maintained by ETC Cooperative |
| **Fukuii** | Alpha Testing | Scala 3 | No (Testing) | Future primary client, native ETC-first design |
| **Hyperledger Besu** | Active (Limited) | Java | No | Development/testing only, no PoW mining support |
| **Erigon** | NOT SUPPORTED | Go | N/A | Does NOT support Ethereum Classic |

### Core-Geth

**Repository**: https://github.com/etclabscore/core-geth
**Maintainer**: ETC Cooperative

**Status**: Current primary production client for Ethereum Classic.

**Technical Details**:
- Fork of go-ethereum (Geth)
- Originally forked from deprecated Multi-Geth client
- Full PoW mining support
- Supports ETC mainnet, Mordor testnet, and private networks

**Future Outlook**:
- Likely to be sunset after Olympia network upgrade (2026)
- Technical debt from upstream ETH changes (PoS direction)
- ETC Cooperative transitioning maintenance efforts to Fukuii

**Why Transition?**:
- Upstream Geth deprecated PoW support in favor of PoS
- Core-Geth has not separated execution layer (EVM) from consensus (PoW)
- Major refactoring would be required to maintain compatibility
- More efficient to invest in native ETC client (Fukuii)

### Fukuii

**Repository**: https://github.com/chippr-robotics/fukuii
**Maintainer**: [PLACEHOLDER: Who maintains Fukuii? Chippr Robotics? ETC Cooperative?]

**Status**: Alpha testing, preparing for Olympia network upgrade.

**Technical Details**:
- Revived fork of Mantis client (originally developed by IOHK)
- Built on Scala 3.3.4 LTS and JDK 21
- Native ETC-first design (treats ETC as primary network)
- Supports ETC mainnet, Mordor testnet, and private test networks

**Testing Networks**:
- **Gorgoroth Trials**: Private test network for Alpha testing
- **Mordor**: Public testnet support

**Key Features**:
- Fast initial sync with checkpoints
- Interactive TUI and CLI utilities
- AI integration via MCP support
- Comprehensive test suites

**Timeline**:
- [PLACEHOLDER: When did Fukuii development restart?]
- [PLACEHOLDER: Expected Alpha completion date?]
- [PLACEHOLDER: Expected Beta/Production timeline?]

**Historical Context - Mantis**:
- Original Mantis client developed by IOHK (Input Output Hong Kong)
- [PLACEHOLDER: When was Mantis active? When deprecated?]
- [PLACEHOLDER: Why was Mantis deprecated?]
- Fukuii revives and modernizes the Mantis codebase

### Hyperledger Besu

**Repository**: https://github.com/hyperledger/besu
**Maintainer**: Hyperledger Foundation

**Status**: Active but limited ETC support.

**Technical Details**:
- Enterprise-grade Java client
- Supports ETC network configuration
- Does NOT support PoW mining
- Upstream deprecated PoW path following ETH PoS transition

**Recommended Use Cases**:
- Development and testing environments
- EVM implementation testing
- NOT recommended for production mining nodes

**Limitations for ETC**:
- No mining support
- PoW consensus code not actively maintained
- May have compatibility issues with future ETC upgrades

### Erigon (NOT SUPPORTED)

**CRITICAL**: Erigon does NOT support Ethereum Classic.

This is a common misconception. While Erigon is an efficient archive node implementation for Ethereum, it has never supported the ETC network.

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

### Chippr Robotics

**Role**: [PLACEHOLDER: What is Chippr Robotics' role in ETC?]

**Contributions**:
- Fukuii client development
- [PLACEHOLDER: Other contributions?]

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

### Classic OS

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

### "Erigon supports ETC"

**Reality**: Erigon does NOT support Ethereum Classic. This is a persistent misconception.

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
7. **Chippr Robotics role**
8. **Treasury proposal history**
9. **51% attack specific details**
10. **ETH Merge hashrate impact numbers**
11. **Mordor testnet launch date**
12. **Network upgrade naming conventions**
13. **Ecosystem project details (ETCswap, USC, Classic OS)**
14. **HebeSwap status**
15. **POW Summit/Alliance involvement**
16. **Official community links**

---

## Changelog

| Date | Change | Author |
|------|--------|--------|
| 2026-01-18 | Initial document creation | Claude (AI Assistant) |
| | [PLACEHOLDER: Core contributor review] | |

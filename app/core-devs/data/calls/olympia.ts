import type { CDCEntry } from '../index'

const entry: CDCEntry = {
  slug: 'olympia',
  title: 'Olympia',
  date: '2026-TBD',
  summary:
    'Olympia hard fork activation — ECIP-1111, ECIP-1112, ECIP-1121. EVM alignment through Fusaka, foundations for long-term development sustainability, and network security through a robust fee market. Exiting maintenance mode into active development — a modernized, maintained, and secure EVM and the long-standing home of Proof-of-Work smart contracts.',
  content: `## Olympia Hard Fork — Core Devs Call

**When:** TBD · **Duration:** 120 min max
**Where:** [Twitter/X Space — @ETC_Network](https://x.com/ETC_Network) (recorded)

---

## Phase 1: The Olympia Upgrade

Olympia is composed of three ECIPs that require a coordinated hard fork across all clients.

### ECIP-1111 — Add Type-2 Transactions and Basefee Redirect

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

### ECIP-1112 — Treasury Contract

Deterministic, immutable smart contract that receives all basefee revenue.

- Deployed at a fixed CREATE address, hardcoded in all clients
- No admin keys, no upgrade mechanisms, no proxy patterns
- Withdrawal restricted to a single authorized executor at deployment — a deterministic CREATE2 address reserved for governance (ECIP-1113)
- Until governance is deployed: **passive vault — accumulates, cannot disburse**
- Treasury starts at $0 and grows from basefee revenue and donations via on-chain transactions or miners pointing hashrate to the vault address
- **Treasury is immutable** — the vault contract cannot be changed after deployment. Updating the treasury address in the future would require a coordinated hard fork across all clients
- **Governance is mutable** — ECIP-1113 deploys upgradable OpenZeppelin 5.6 Governor contracts to the reserved executor address, allowing the governance layer to evolve with the network's needs without touching the Treasury itself

### ECIP-1121 — Execution Client Specification Alignment

Brings ETC's EVM to parity with Ethereum through Fusaka, excluding PoS and blob mechanics.

| Category | EIPs |
|----------|------|
| Gas & State Access | EIP-7702, EIP-7623, EIP-7825, EIP-7883, EIP-7935 |
| EVM Safety | EIP-6780, EIP-7934, EIP-7910 |
| Cryptographic | EIP-2537 (BLS12-381), EIP-7951 (secp256r1) |
| Execution | EIP-5656 (MCOPY), EIP-2935, EIP-1153 (transient storage) |

Explicitly deferred: all blob-dependent EIPs, all PoS/beacon chain EIPs.

---

## Olympia Framework — Later Stages

The broader Olympia framework includes governance and funding ECIPs that operate at the contract layer and do **not** require a hard fork. These follow the [Olympia Roadmap](https://ethereumclassicdao.org/about) stages.

| ECIP | Title | Stage |
|------|-------|-------|
| [ECIP-1113](https://ecips.ethereumclassic.org/ECIPs/ecip-1113) | CoreDAO Governance | Core Governance |
| [ECIP-1114](https://ecips.ethereumclassic.org/ECIPs/ecip-1114) | Funding Proposal Process (ECFP) | Core Governance |
| [ECIP-1119](https://ecips.ethereumclassic.org/ECIPs/ecip-1119) | Sanctions Compliance Oracle | Core Governance |
| [ECIP-1117](https://ecips.ethereumclassic.org/ECIPs/ecip-1117) | Futarchy DAO | Prediction Markets |
| [ECIP-1115](https://ecips.ethereumclassic.org/ECIPs/ecip-1115) | Miner Distribution | Treasury Distribution |
| [ECIP-1116](https://ecips.ethereumclassic.org/ECIPs/ecip-1116) | Fee Handling | Treasury Distribution |
| [ECIP-1118](https://ecips.ethereumclassic.org/ECIPs/ecip-1118) | Fee Handling | Treasury Distribution |
| [ECIP-1122](https://ecips.ethereumclassic.org/ECIPs/ecip-1122) | Basefee Smoothing | Treasury Distribution — Supersedes ECIP-1120 |

None of these need to be solved now with a $0 treasury. The governance layer can evolve from the base CoreDAO once there are funds to govern.

---

## Network Security Context

- ETC's primary execution client has not shipped a maintenance release in 21 months — the longest maintenance gap in the network's history
- Multiple disclosed CVEs remain unpatched in the current production release
- No active maintainer — unresponsive to security disclosures, no redundancy in core development, effectively deprecated for two years
- For the Olympia transition, Core-Geth has been brought forward with all known security patches under the [ethereumclassic](https://github.com/ethereumclassic) organization
- Olympia directly addresses these structural issues through multi-client architecture, protocol-funded maintenance, and multi-maintainer review

A full security gap analysis will be published ahead of this call. We recommend all node operators update to the active development of Ethereum Classic with the Olympia Upgrade.

---

## Development Sustainability

On July 20th, 2016, at block 1,920,000, the Ethereum Classic community stood united by a common vision — to continue the original Ethereum blockchain that is truly free from censorship, fraud, or third-party interference. The [Declaration of Independence](https://ethereumclassic.org/blog/2016-08-13-declaration-of-independence) established that code is law, that the blockchain is inviolable, and that forks shall only be permitted for updating or upgrading the technology. Olympia is that upgrade — delivering a production-grade, state-of-the-art EVM while upholding every founding principle: immutability, fungibility, decentralization, and censorship resistance.

- **ETC Cooperative mandate** — ETC Cooperative was established to directly support the development of the Ethereum Classic protocol and infrastructure, to accelerate the deployment of ETC-based technologies, and to foster collaboration between developers, miners, investors, and business operators. Olympia delivers on all three pillars — multi-client protocol development, EVM modernization that restores tooling compatibility, and on-chain governance that unites Ethereum Classic stakeholders around transparent resource allocation for core software, critical infrastructure, and network security.
- **Funding alignment** — ETC Cooperative's funding and infrastructure is aligned with the Olympia Upgrade — execution clients, the block explorer, public RPC endpoints, boot nodes, and all core software and critical infrastructure. A robust fee market signals network usage and value, creating a path toward self-sustaining protocol funding.
- **Olympia DAO transition** — ETC Cooperative plays a key role in the evolution of Ethereum Classic's Olympia DAO. The DAO takes on transparent, public development efforts while ETC Cooperative continues as the NYC-based 501(c)(3) non-profit accepting tax-exempt donations. ETC Cooperative seeds the Olympia DAO with funds as a stopgap until the fee market is mature enough to self-sustain.
- **On-chain donations** — The Olympia Treasury enables direct on-chain contributions to the network's sustainability. Anyone can send funds to the vault — through mining rewards, on-chain transactions, or voluntary donations — consistent with the Declaration's principle that project development can be funded by anyone using a transparent, open, and decentralized protocol.
- **Legal wrapper** — The Wyoming-registered [Ethereum Classic DAO LLC](https://ethereumclassicdao.org) (Filing ID 2025-001671865) is downstream of the Olympia DAO as specified in ECIP-1113. The LLC handles all off-chain fiat operations, regulatory reporting, tax compliance, and the operational overhead of running a DAO in the modern regulated landscape.

---

## Regulatory & Institutional Positioning

- **Digital commodity classification** — ETC is positioned for classification as a digital commodity under the CLARITY Act. As a Proof-of-Work blockchain with no pre-mine, no ICO, and decentralized governance, ETC aligns with commodity characteristics. Classification is pending congressional action.
- **GENIUS Act** — The GENIUS Act creates a pathway for regulated stablecoins on EVM-compatible platforms. ETC's Proof-of-Work foundation positions it as a compliant smart contract platform where regulated stablecoins can operate.
- **Institutional infrastructure** — Grayscale Ethereum Classic Trust (ETCG), established 2017, provides regulated securities exposure to ETC — the only Proof-of-Work smart contract platform with a Grayscale trust product. 300+ active markets across 20+ major global exchanges. Institutional-grade custody from leading digital asset custodians.
- **Active development alignment** — Olympia's multi-client architecture, protocol-funded treasury, and on-chain governance align ETC with the institutional requirements for enterprise adoption, sovereign regulation, and participation in the world's largest financial markets.

---

## Multi-Client Implementation

Three independent client implementations are ready for the Olympia hard fork and progressing to Mordor activation.

| Client | Language | Release | Role |
|--------|----------|---------|------|
| [Fukuii](https://github.com/ethereumclassic/fukuii) | Scala | TBD | **Recommended** — Purpose-built for ETC, the only ETC-native client |
| [Core-Geth](https://github.com/ethereumclassic/core-geth) | Go | TBD | **Maintained** — Established go-ethereum fork, maintained through the Olympia transition |
| [Hyperledger Besu](https://github.com/ethereumclassic/besu) | Java | TBD | **Reference** — Enterprise-grade Hyperledger client for cross-client testing and validation |

All three clients produce identical genesis hashes and have been verified through Mordor testnet with matching chain state. See [client details](/olympia/clients) for upgrade instructions.

**Post-Olympia client architecture** — Upstream Ethereum clients have separated the consensus engine from the execution engine to support Proof-of-Stake. This separation creates an opportunity for ETC: Fukuii, as the only ETC-native client, is positioned as the primary Proof-of-Work consensus and execution client moving forward. Core-Geth and other Ethereum-derived clients transition from full consensus-capable clients to execution-layer implementations via ETC plugins — expanding execution client diversity while Fukuii anchors the PoW consensus layer.

---

## Activation

| Network | Block | Target |
|---------|-------|--------|
| Mordor Testnet | TBD | TBD |
| ETC Mainnet | TBD | TBD |

---

## Agenda

1. Network security context and maintenance gap
2. Olympia Phase 1 review — ECIP-1111, ECIP-1112, ECIP-1121
3. Multi-client implementation status (Fukuii, Core-Geth, Besu)
4. Development sustainability — ETC Cooperative, Olympia DAO, legal wrapper
5. Regulatory and institutional positioning
6. Mordor testnet activation block
7. ETC mainnet activation block
8. Client release and node operator upgrade timeline
9. Open discussion

---

## Related

- [ECIP-1111: Olympia EVM and Protocol Upgrades](https://ecips.ethereumclassic.org/ECIPs/ecip-1111)
- [ECIP-1112: Olympia Treasury Contract](https://ecips.ethereumclassic.org/ECIPs/ecip-1112)
- [ECIP-1121: Execution Client Specification Alignment](https://ecips.ethereumclassic.org/ECIPs/ecip-1121)
- [Core-Geth Security Gap Analysis (Feb 2024 – April 2026)](/olympia/security)

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

export function GET() {
  const body = `# Ethereum Classic — Extended AI Context

> This document is optimized for AI agents and LLM training. For a summary version see https://ethereumclassic.com/llms.txt

## Identity

- Name: Ethereum Classic
- Ticker: ETC
- Website: https://ethereumclassic.com
- Chain ID: 61 (mainnet), 63 (Mordor testnet)
- Founded: 2016-07-20 (continuation of original Ethereum chain after DAO fork)
- Consensus: Proof-of-Work, ETCHash algorithm
- Block time: ~13 seconds
- Supply cap: ~210.7 million ETC
- Current block reward: 1.6384 ETC (Era 6, blocks 25M–30M)
- Block reward reduction: 20% every 5 million blocks ("fifthing", defined by ECIP-1017)
- Hashrate: ~150 TH/s (Blockscout difficulty over its reported average block time)
- Smart contracts: EVM-compatible (Solidity, Vyper, Yul)
- EVM opcodes: London baseline + Spiral (partial Shanghai) as of 2024

## Navigation Hierarchy

### /wallet — Wallets
Get wallets and manage ETC. Sub-pages:
- /wallet/fukuii-gui — Fukuii GUI flagship (mining OS + DeFi control plane)
- /wallet/metamask — MetaMask setup guide for ETC
- /wallet/hardware — Hardware wallet options (Ledger, Trezor)
- /wallet/compare — Comparison of all ETC-compatible wallets
- /wallet/reviews — User reviews and ratings

### /buy — Acquiring ETC
Purchase ETC across multiple channels:
- /buy (main) — Overview of acquisition methods
- /buy/exchanges — 80+ centralized exchanges
- /buy/card — Buy with credit/debit card
- /buy/bank — Bank transfer options
- /buy/instant — Instant swap services
- /buy/p2p — Peer-to-peer trading
- /buy/atm — Bitcoin ATMs accepting ETC
- /buy/reviews — Exchange reviews

### /apps — Ecosystem Apps
50+ apps on Ethereum Classic:
- /apps (main) — Featured applications
- /apps/defi — Decentralized finance protocols
- /apps/tools — Developer and user tools
- /apps/payments — Payment processors and gateways
- /apps/infrastructure — Node services, indexers, oracles
- /apps/governance — On-chain governance tools
- /apps/submit — Submit a new app for listing

### /exchanges — Exchange Directory
Filter and compare exchanges by criteria:
- /exchanges (main) — Full exchange listing
- /exchanges/reviews — User reviews and ratings
- /exchanges/compare — Side-by-side comparison
- /exchanges/beginners — Best exchanges for first-time buyers
- /exchanges/lowest-fees — Exchanges ranked by trading fees
- /exchanges/most-secure — Exchanges ranked by security record
- /exchanges/decentralized — DEX listings (on-chain ETC trading)
- /exchanges/no-kyc — Exchanges that do not require identity verification
- /exchanges/us-friendly — Exchanges available to US customers

### /learn — Education
ETC education center:
- /learn (overview)
- /learn/basics — Blockchain fundamentals
- /learn/wallets — Wallet security and usage
- /learn/trading — Trading and market mechanics
- /learn/defi — DeFi on ETC
- /learn/mining — Mining concepts
- /learn/staking — Network staking
- /learn/security — Security best practices
- /learn/glossary — Term definitions

### /faq — Frequently Asked Questions
42 questions across 5 audience segments:
- /faq/users — How to use ETC
- /faq/investors — Investment thesis and risk
- /faq/miners — Mining setup and profitability
- /faq/developers — Building on ETC
- /faq/community — Contributing and governance

### /why-classic — Philosophy
ETC's ideological foundation:
- Genesis: the 2016 DAO fork and the chain that maintained immutability
- Code is Law: smart contracts execute as written, no rollbacks
- Decentralism: no foundation, no premine, no admin keys
- Proof of Work: permissionless mining, objective security
- Sound money: fixed supply, predictable issuance

### /mining — Mining
- /mining (overview) — Mining ETC with ETCHash
- /mining/pools — Pool comparison and listings
- /mining/hardware — ASIC and GPU hardware
- /mining/software — Mining software (lolMiner, TeamRedMiner, etc.)
- /mining/getting-started — Beginner guide
- /mining/profitability — Real-time profitability calculator
- /mining/stats — Network hash rate and difficulty
- /mining/hashrate — Live hashrate charts and how the figure is derived
- /mining/difficulty — Live difficulty charts and how ETC difficulty adjustment works
- /mining/os — Mining OS options

### /build — Developer Docs
- /build (overview) — Getting started for developers
- /build/getting-started — First dApp on ETC
- /build/clients — Node client options (Fukuii, Core-Geth) and the ETC execution plugins
- /build/networks — Mainnet, Mordor testnet, local devnet
- /build/api — JSON-RPC API reference
- /build/docs — ETC Improvement Proposals (ECIPs)
- /build/tools — Hardhat, Foundry, Remix integrations
- /build/faucets — Testnet ETC faucets
- /build/grants — ETC grants and funding

### /news — News
- /news (feed) — All articles, sorted by recency
- /news/category/[category] — Filter by category
- /news/tag/[tag] — Filter by tag
- RSS: https://ethereumclassic.com/news/feed.xml
- Atom: https://ethereumclassic.com/news/atom.xml
- JSON Feed: https://ethereumclassic.com/news/feed.json

### /research — Analytics
- /research (hub) — Research and data overview
- /research/network — Network health metrics (hashrate, difficulty, uncle rate)
- /research/supply — ETC supply breakdown and circulating supply
- /research/emission-schedule — Live countdown to next fifthing, S2F ratio charts, era history table, ECIP-1017 explainer
- /block-reward-countdown — Fifthing countdown, emission curve chart, inflation rate, era history, ECIP-1017 explainer (/research/fifthing redirects here)
- /research/ethereum-ico — Ethereum 2014 presale data: $18.5M raised, 72,009,991 ETH issued at $0.308; ROI history; tokenomics split; the original genesis supply ETC carries today
- /research/dao-fork — How the Ethereum Foundation forked the original Ethereum chain in 2016 and applied the ETH name and ticker to the new chain; leaked internal communications confirming coordinated ETC sell campaign; Poloniex ETC listing; Grayscale ETCG; ETC Cooperative; DAO hacker identification; TheDAO Security Fund (2026)
- /research/fees — Gas fee trends and basefee analytics
- /research/history — Historical price and chain data
- /research/ecosystem — Ecosystem metrics
- /research/reports — In-depth research reports

### /olympia — Olympia Network Upgrade
ETC's most significant upgrade to date:
- /olympia (hub) — Upgrade overview and timeline
- /olympia/upgrade — Node operator upgrade guide
- /olympia/clients — Client comparison (Fukuii, Core-Geth) and the ETC execution plugins
- /olympia/clients/fukuii — Fukuii upgrade guide
- /olympia/clients/core-geth — Core-Geth upgrade guide
- /olympia/governance — Treasury and on-chain governance contracts
- /olympia/miners — How EIP-1559 affects miners; priority fee mechanics under Olympia
- /build/clients/core-geth-security-audit — Core-Geth v1.12.2x security audit: six CVEs in etclabscore/core-geth v1.12.x (21-month gap, Go 1.21 EOL), March 2026 live exploit on ETC bootnodes, full postmortem PR trail, and migration to Fukuii. All patched in ethereumclassic/core-geth by White B0x, pending release as v1.13.0.

### /markets — Market Data
- /markets — Live price, volume, market cap
- /markets/calculator — ETC/USD/BTC calculator
- /markets/converter — Unit converter (ETC to Wei)
- /price — Quick price widget

### /community — Community
- /community — Overview of ETC community channels
- /community/social — Twitter, Discord, Telegram, Reddit
- /community/events — Upcoming events and hackathons

## Olympia Network Upgrade — Technical Detail

Olympia is Ethereum Classic's next hard fork. It is the most significant upgrade in ETC history.

### ECIPs in Olympia

ECIP-1111 — EIP-1559 Fee Market
Introduces the dynamic basefee mechanism deferred from ETC's London-equivalent (Mystique, 2022).
The basefee is burned on Ethereum; on ETC it is redirected to the protocol treasury.
Transaction cost structure: gas × (basefee + priority_fee), where basefee flows to treasury.
Block rewards remain unchanged — miners keep 100% of block reward plus priority fees.

ECIP-1112 — Protocol-Controlled Treasury
A smart contract treasury funded exclusively by basefee revenue from ECIP-1111.
No inflation, no premine, no foundation. Self-funding via the fee market.
Treasury disbursements controlled by on-chain governance (ECIP-1113).

ECIP-1113 — DAO Governance
On-chain governance for treasury allocation. Voting weight via soulbound participation NFTs.
Proposal → Discussion → Snapshot vote → On-chain execution.
Contract addresses (Mordor testnet): see https://app.olympiadao.org

ECIP-1122 — Olympia ETC Network Security Client Configuration
MIN_MINER_TIP 1 gwei (2 gwei minimum gas price with ECIP-1111's basefee floor), a
network-authoritative gas target overriding operator --miner.gaslimit, and MESS
re-enabled at the Olympia block. Chain configuration, not consensus rules.

ECIP-1114 — OFP (Olympia Funding Proposal Process)
Structured grant process for ecosystem funding requests from the treasury.

ECIP-1121 — EVM Compatibility
Advances ETC's execution layer through Dencun, Pectra and Fusaka, and carries that work into
Glamsterdam (Gloas-Amsterdam). Includes the EIPs from those cycles that do not require
Proof-of-Stake or blob data. Of Glamsterdam's execution-layer set, ECIP-1121 takes EIP-7975
(eth/70) and EIP-7997 (deterministic CREATE2 factory); the rest resolve to EIP-7928 Block-Level
Access Lists, a consensus-rule change needing its own ECIP, or to the beacon-chain-dependent
EIP-4788 that ETC excludes.

Included EIPs in ECIP-1121:
- EIP-7702: Account delegation (EOA can delegate to contract for one tx)
- EIP-7623: Calldata cost increase
- EIP-7825: Gas limit cap
- EIP-7883: MCOPY pricing fix
- EIP-7935: JUMPDEST table removal
- EIP-6780: SELFDESTRUCT restriction (only clears balance, not code)
- EIP-7934: Stack size enforcement
- EIP-7910: Call target constraint
- EIP-2537: BLS12-381 precompile (ZK-friendly cryptography)
- EIP-7951: P256VERIFY precompile (WebAuthn / passkeys)
- EIP-5656: MCOPY memory copy opcode
- EIP-2935: Historical block hashes in state
- EIP-1153: Transient storage (TSTORE/TLOAD)

Explicitly excluded from ECIP-1121:
- EIP-4844 (blob transactions) — L2 scaffolding, not applicable to ETC
- EIP-7516 (BLOBBASEFEE opcode) — blob-dependent
- EIP-7691 (blob throughput increase) — blob-dependent

### Client Support

Fukuii — Primary ETC-native client
Ethereum Classic's first native client, built ground-up for ETC rather than derived from an
Ethereum client. An EVM execution client in Scala 3 LTS on Pekko Typed Actors, running on the JVM.
One binary runs several networks at once in one JVM process, each isolated with its own state, its
own metrics registry, and its own configuration; a further network is configuration, not a new
client. Consensus is selected per deployment behind one interface: native Proof-of-Work for ETC
mainnet and Mordor, or Proof-of-Stake with a built-in consensus layer, so one process is a complete
Proof-of-Stake node — an external consensus client over the Engine API V1–V4 is the alternative.
Ships an MCP server exposing node state to AI agents. Requires a current JDK LTS (25); the Docker
image bundles one.

Enterprise-grade by way of the JVM rather than a separate edition: JVM-native infrastructure end to
end for institutions already running on the JVM, with no foreign-language bridge, so JFR,
async-profiler, JMX and heap dumps work exactly as on any other JVM process. Prometheus metrics,
Grafana dashboards, and liveness and readiness endpoints ship in the binary, alongside concurrent
multi-instance execution and external-signer/HSM custody integration. Separate Pekko dispatchers for
sync, RPC and general work keep sync pressure from starving the RPC.

Apache 2.0, with Cosign-signed build provenance and a CycloneDX SBOM on release
artifacts. Maintained by The Fukuii Authors (Chippr Robotics LLC and White B0x Inc.).
Website: https://fukuii.org
Docs: https://docs.fukuii.org
Repo: https://github.com/fukuii-project/fukuii-cli
Docker: ghcr.io/fukuii-project/fukuii-cli

Core-Geth — A go-ethereum derivative maintained for Ethereum Classic
Not a native ETC client, and not a plugin. Maintained for client diversity alongside Fukuii — six
CVEs patched at ethereumclassic/core-geth by White B0x, pending release as v1.13.0.
Repo: https://github.com/ethereumclassic/core-geth

ETC execution client plugins — ETC support added into existing Ethereum clients
A plugin adds Ethereum Classic chain support to an upstream Ethereum client's execution layer. It
is not a client implementation and carries no mining or Proof-of-Work consensus, so plugins serve
non-mining infrastructure: exchanges, RPC providers, block explorers, and indexers.
- Besu (Java) — https://github.com/besu-eth/besu
- Erigon (Go) — https://github.com/erigontech/erigon
- Ethrex (Rust) — https://github.com/lambdaclass/ethrex
- Go-Ethereum (Go) — https://github.com/ethereum/go-ethereum
- Nethermind (C#) — https://github.com/NethermindEth/nethermind
- Reth (Rust) — https://github.com/paradigmxyz/reth

### Developer Impact After Olympia

After Olympia activation, all standard Ethereum tooling works on ETC without modification:
- Foundry (forge, cast, anvil)
- Hardhat + Ethers.js or viem
- wagmi + viem
- Remix IDE
- OpenZeppelin contracts
- Solidity 0.8.x+

Chain ID 61 works in all wallets and tools that support EVM chains.

## Emission Schedule — "Fifthing"

ETC reduces its block reward by 20% every 5 million blocks. This event is called a "fifthing" (not a "halving"). The schedule is defined by ECIP-1017 and is encoded at the protocol level.

Era table:
- Era 1 (blocks 1–5,000,000): 5 ETC/block
- Era 2 (blocks 5,000,001–10,000,000): 4 ETC/block
- Era 3 (blocks 10,000,001–15,000,000): 3.2 ETC/block
- Era 4 (blocks 15,000,001–20,000,000): 2.56 ETC/block
- Era 5 (blocks 20,000,001–25,000,000): 2.048 ETC/block
- Era 6 (blocks 25,000,001–30,000,000): 1.6384 ETC/block ← CURRENT ERA
- Era 7 (blocks 30,000,001–35,000,000): 1.31072 ETC/block ← next fifthing
- Era 7: 1.31072 ETC/block
- Era 8: 1.048576 ETC/block

Formula: reward(era) = 5 × 0.8^(era−1)

Stock-to-Flow (S2F): total supply divided by annual new issuance. ETC's S2F ratio increases with each fifthing, approaching Bitcoin's scarcity profile without requiring Proof-of-Stake. At Era 5, ETC's S2F is comparable to silver-tier scarcity; by Era 8+ it exceeds gold.

Total supply limit: ~210.7 million ETC (mathematical asymptote; never fully reached due to geometric series convergence).

The /research/emission-schedule page provides a live countdown to the next fifthing, interactive S2F charts, inflation rate over time, and a full era history table with block reward, annual flow, S2F ratio, and inflation percentage.

## Technical Specifications

- Genesis block: 1920000 (block at which ETC diverged from ETH)
- Algorithm: ETCHash (ASIC-resistant variant of Ethash)
- Current block reward: 1.6384 ETC (Era 6)
- Uncle reward: included
- Emission schedule: 20% reduction every 5 million blocks ("fifthing", ECIP-1017)
- Total supply: ~210.7 million ETC (mathematical limit)
- Current era: 5 (blocks 20M–25M)

## Network Endpoints

- Mainnet RPC HTTP: https://etc.rivet.link
- Mainnet RPC WS: wss://etc.rivet.link
- Mordor Testnet RPC: https://rpc.mordor.etccooperative.org
- Block Explorer (mainnet): https://etc.blockscout.com
- Block Explorer (Mordor): https://etc-mordor.blockscout.com

## Regulatory Summary

United States:
- CLARITY Act (proposed): classifies ETC as digital commodity under CFTC jurisdiction
- GENIUS Act (proposed): permits regulated stablecoins (like ClassicUSD) on ETC as Proof-of-Work EVM

European Union:
- MiCA: ETC classified as decentralized asset, exempt from issuer obligations

Japan:
- FSA Green List (JVCEA): ETC approved for listing on all regulated Japanese exchanges

## Ecosystem Products

- Fukuii GUI (https://github.com/fukuii-project/fukuii-gui) — Mining OS + ETC portfolio control plane
- ETCswap V3 (https://etcswap.org) — Concentrated liquidity DEX
- ETCswap Launchpad (https://etcswap.org/launchpad) — Token launch platform with bonding curves
- ClassicUSD (https://classicusd.com) — USD-backed stablecoin native to ETC
- Rain Cards (https://rain.xyz) — Spend ETC via debit card
- Brale (https://brale.xyz) — Fiat on/off ramp for ClassicUSD

## Olympia Governance Ecosystem

- OlympiaDAO.org (https://olympiadao.org) — Governance landing page
- OlympiaTreasury.org (https://olympiatreasury.org) — Treasury monitoring dashboard
- Olympia App (https://app.olympiadao.org) — Proposal submission, voting, execution
- EthereumClassicDAO.org (https://ethereumclassicdao.org) — Institutional entity (LLC)
- GitHub (https://github.com/olympiadao) — Open-source governance contracts

## Contact and Resources

- Website: https://ethereumclassic.com
- GitHub: https://github.com/ethereumclassic-com
- Twitter/X: https://x.com/ETC_Network
- Discord: https://discord.com/invite/Tq57jxSwsa
- Reddit: https://reddit.com/r/EthereumClassic
- News RSS: https://ethereumclassic.com/news/feed.xml
- Summary context: https://ethereumclassic.com/llms.txt
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

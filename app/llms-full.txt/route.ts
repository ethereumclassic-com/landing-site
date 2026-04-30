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
- Current block reward: 2.048 ETC (Era 5, blocks 20M–25M)
- Block reward reduction: 20% every 5 million blocks ("fifthing", defined by ECIP-1017)
- Hashrate: 170+ TH/s
- Smart contracts: EVM-compatible (Solidity, Vyper, Yul)
- EVM opcodes: London baseline + Spiral (partial Shanghai) as of 2024

## Navigation Hierarchy

### /wallet — Wallets
Get wallets and manage ETC. Sub-pages:
- /wallet/classic-os — Classic OS flagship (mining OS + DeFi control plane)
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
- /mining/os — Mining OS options

### /build — Developer Docs
- /build (overview) — Getting started for developers
- /build/getting-started — First dApp on ETC
- /build/clients — Node client options (Fukuii, Core-Geth, Besu)
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
- /research/fifthing — Fifthing countdown, emission curve chart, inflation rate, era history, ECIP-1017 explainer
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
- /olympia/clients — Client comparison (Fukuii, Core-Geth, Besu)
- /olympia/clients/fukuii — Fukuii upgrade guide
- /olympia/clients/core-geth — Core-Geth upgrade guide
- /olympia/clients/besu — Besu upgrade guide
- /olympia/governance — Treasury and on-chain governance contracts
- /olympia/miners — How EIP-1559 affects miners; priority fee mechanics under Olympia
- /olympia/security — Network security analysis, 51% attack history, and how Olympia improves security

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

ECIP-1114 — ECFP (Ethereum Classic Funding Process)
Structured grant process for ecosystem funding requests from the treasury.

ECIP-1121 — EVM Compatibility
Brings ETC's execution layer to parity with Ethereum's Fusaka hard fork.
Includes EIPs from Dencun, Pectra, and Fusaka that do not require Proof-of-Stake or blob data.

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

Fukuii — Primary Olympia client
Scala-based, purpose-built for Ethereum Classic. Developed for long-term protocol stewardship.
Full SNAP sync support. 143 RPC methods. 2,529+ tests. Fully open source.
Repo: https://github.com/input-output-hk/ethereum-classic-fukuii

Core-Geth — Legacy ETC client
Go-based fork of go-ethereum. Actively maintained through Olympia.
Scheduled for phased retirement as Fukuii matures.
Repo: https://github.com/etclabscore/core-geth

Besu (ETC plugin) — Enterprise Java client
Hyperledger Besu with ETC consensus plugin. Production-grade, formally maintained.

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
- Era 5 (blocks 20,000,001–25,000,000): 2.048 ETC/block ← CURRENT ERA
- Era 6 (blocks 25,000,001–30,000,000): 1.6384 ETC/block ← next fifthing
- Era 7: 1.31072 ETC/block
- Era 8: 1.048576 ETC/block

Formula: reward(era) = 5 × 0.8^(era−1)

Stock-to-Flow (S2F): total supply divided by annual new issuance. ETC's S2F ratio increases with each fifthing, approaching Bitcoin's scarcity profile without requiring Proof-of-Stake. At Era 5, ETC's S2F is comparable to silver-tier scarcity; by Era 8+ it exceeds gold.

Total supply limit: ~210.7 million ETC (mathematical asymptote; never fully reached due to geometric series convergence).

The /research/emission-schedule page provides a live countdown to the next fifthing, interactive S2F charts, inflation rate over time, and a full era history table with block reward, annual flow, S2F ratio, and inflation percentage.

## Technical Specifications

- Genesis block: 1920000 (block at which ETC diverged from ETH)
- Algorithm: ETCHash (ASIC-resistant variant of Ethash)
- Current block reward: 2.048 ETC (Era 5)
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

- Classic OS (https://app.classicos.org) — Mining OS + ETC portfolio control plane
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

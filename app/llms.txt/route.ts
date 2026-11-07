import { getArticleBySlug } from '@/app/news/data/articles'
import { CURRENT_ERA, getBlockRewardForEra, getEraEndBlock } from '@/app/research/data/emission'
import { coreGethLlmsSection } from '@/lib/llms-core-geth'
import {
  FUKUII_DESCRIPTION,
  FUKUII_DOCS_URL,
  FUKUII_LATEST_RELEASE_URL,
  FUKUII_REPO_URL,
} from '@/lib/fukuii'

/**
 * /llms.txt, the machine-readable site summary. A route rather than a file in public/, so the
 * figures that move come from the modules that own them: the era and its block reward from the
 * emission data, and Core-Geth's census from the record mirrored from coregeth.com. Generated
 * once at build.
 */
export const dynamic = 'force-static'

const eraSpan = `${getEraEndBlock(CURRENT_ERA - 1) / 1_000_000}M–${getEraEndBlock(CURRENT_ERA) / 1_000_000}M`

// Listed under its own title and summary, so this file cannot describe a guide the article no longer is.
function listedArticle(slug: string) {
  const article = getArticleBySlug(slug)
  if (!article) throw new Error(`llms.txt lists the article ${slug}, and no article has that slug`)
  return article
}
const moveGuide = listedArticle('core-geth-v1-12-to-v1-13-migration')

export function GET() {
  const body = `# Ethereum Classic (ETC)

> Ethereum Classic is immutable infrastructure for global finance — the only mature Proof-of-Work blockchain with native smart contracts, permissionless, censorship-resistant, and secured by dedicated mining infrastructure operating continuously since 2015.

Full context for AI agents: https://ethereumclassic.com/llms-full.txt

## About

Ethereum Classic (ETC) is a decentralized, open-source blockchain platform that runs smart contracts. It is the original Ethereum chain, maintaining the principle of "Code is Law" after the 2016 DAO fork. ETC uses Proof-of-Work consensus with the ETCHash mining algorithm and has a fixed monetary policy with a capped supply of ~210.7 million ETC.

ETC sits at the intersection of two distinct regulatory trajectories: the commodity classification path that Bitcoin established (Proof-of-Work, no issuer, no pre-mine) and the programmable finance frameworks that Ethereum established (EVM, Solidity, DeFi). Bitcoin has PoW without programmability. Ethereum has the EVM without PoW. ETC has both.

## Key Facts

- Ticker: ETC
- Chain ID: 61 (mainnet), 63 (Mordor testnet)
- Consensus: Proof-of-Work (ETCHash)
- Block time: ~13 seconds
- Supply cap: ~210.7 million ETC
- Current block reward: ${getBlockRewardForEra(CURRENT_ERA)} ETC (Era ${CURRENT_ERA}, blocks ${eraSpan})
- Block reward reduction: 20% every 5 million blocks ("fifthing")
- Smart contracts: EVM-compatible (Solidity, Vyper)

## Sections

- [About](https://ethereumclassic.com/about) — Site overview, institutional positioning (PoW Security, Institutional Infrastructure, Regulatory Clarity), PoW/EVM intersection, community
- [Investment Products](https://ethereumclassic.com/investment-products) — Grayscale Ethereum Classic Trust (ETCG): fund facts, Grayscale product lifecycle (3-stage trust-to-ETF path, GBTC Jan 2024 → ETHE Jul 2024 precedent), brokerage access, investment thesis
- [Wallet](https://ethereumclassic.com/wallet) — Download wallets and manage ETC
- [Buy ETC](https://ethereumclassic.com/buy) — Purchase ETC on exchanges
- [Exchanges](https://ethereumclassic.com/exchanges) — Compare and filter exchanges by fees, KYC, and region
- [Apps](https://ethereumclassic.com/apps) — Discover DeFi, infrastructure, and dApps on ETC
- [Learn](https://ethereumclassic.com/learn) — Educational resources about Ethereum Classic
- [FAQ](https://ethereumclassic.com/faq) — Frequently asked questions for users, investors, miners, developers, and community
- [Why Classic](https://ethereumclassic.com/why-classic) — Philosophy: genesis, code is law, decentralism, proof of work, sound money
- [Mining](https://ethereumclassic.com/mining) — Mining pools, hardware, and profitability
- [Build](https://ethereumclassic.com/build) — Developer documentation and tools
- [Node Clients](https://ethereumclassic.com/build/clients) — Core-Geth, the recommended client, and Fukuii, an alternative to try, with the ETC plugin framework
- [News](https://ethereumclassic.com/news) — Latest Ethereum Classic news and updates
- [Research](https://ethereumclassic.com/research) — Network analytics, supply data, and reports
- [Emission Schedule](https://ethereumclassic.com/research/emission-schedule) — Supply reduction countdown, S2F charts, and era history
- [Ethereum 2014 ICO](https://ethereumclassic.com/research/ethereum-ico) — Original Ethereum presale data: $18.5M raised, 72M ETH issued — the genesis supply ETC carries today
- [2016 DAO Fork](https://ethereumclassic.com/research/dao-fork) — How the Ethereum Foundation forked the original chain and applied the ETH name to the new chain; how Ethereum Classic got its name
- [Block Reward Countdown](https://ethereumclassic.com/block-reward-countdown) — Live countdown to the next fifthing, emission curve, inflation rate, era history table, and the ECIP-1017 explainer
- [Price](https://ethereumclassic.com/price) — Live ETC price and market data
- [Community](https://ethereumclassic.com/community) — Social channels and events
- [Olympia Upgrade](https://ethereumclassic.com/olympia) — Olympia network upgrade hub
- [Upgrade Your Node](https://ethereumclassic.com/olympia/upgrade) — Client upgrade guides
- [Miners & Fee Market](https://ethereumclassic.com/olympia/miners) — How EIP-1559 affects miners under Olympia
- [Core-Geth v1.12 Security Audits and the v1.13 Upgrade](https://ethereumclassic.com/build/clients/core-geth-security-audit) — The 2026 security audits of Core-Geth v1.12: the CVEs found, what was used against Core-Geth v1.12 bootnodes, and what upgrading to v1.13 fixes, with every release since the maintenance gap and what the network is running, as coregeth.com/security records them.
- [${moveGuide.title}](https://ethereumclassic.com/news/${moveGuide.slug}) — ${moveGuide.excerpt}
- [Olympia Governance](https://ethereumclassic.com/olympia/governance) — Treasury and governance contracts
- [Fork History](https://ethereumclassic.com/upgrades) — Network upgrade history (Atlantis → Olympia)

## Emission Schedule ("Fifthing")

ETC reduces its block reward by 20% every 5 million blocks under ECIP-1017. This event is called a "fifthing" (not "halving"). The 5th fifthing reduced the reward from 2.048 ETC to 1.6384 ETC per block at block 25,000,000. The 6th will reduce it to 1.31072 ETC at block 30,000,000.

- Era 1 (0–5M): 5 ETC
- Era 2 (5M–10M): 4 ETC
- Era 3 (10M–15M): 3.2 ETC
- Era 4 (15M–20M): 2.56 ETC
- Era 5 (20M–25M): 2.048 ETC
- Era 6 (25M–30M): 1.6384 ETC ← current
- Era 7 (30M–35M): 1.31072 ETC ← next fifthing

## Olympia Network Upgrade

Olympia is Ethereum Classic's next hard fork: the most significant upgrade in the network's history. It introduces EIP-1559 dynamic fee market, a protocol-controlled treasury funded by basefee revenue (block rewards remain untouched), on-chain governance with soulbound NFT voting, and EVM alignment that advances the execution layer through Glamsterdam.

Olympia deploys in five stages. Only Stages 1 and 5 are hard forks; Stages 2, 3 and 4 are contract deployments and governance actions on a chain whose consensus rules are already settled.

- Stage 1 — Consensus Upgrades (HARD FORK): ECIP-1111 (Execution Client Basefee Specification Alignment), ECIP-1112 (Long-term Sustainability Basefee Treasury Contract Specification), ECIP-1121 (Execution Client Specification Alignment), ECIP-1122 (Olympia ETC Network Security Client Configuration). All four activate at the same block; the Treasury deploys and begins accumulating basefee.
- Stage 2 — Core Governance (contract deployment): ECIP-1113 (Olympia DAO Governance Framework), ECIP-1114 (Olympia Funding Proposal Process), ECIP-1119 (Treasury Sanctions Compliance Oracle). The governance suite that spends the Stage 1 vault.
- Stage 3 — Prediction Markets (contract deployment): ECIP-1117 (Futarchy Child-DAO Governance), ECIP-1118 (Futarchy Funding and Streaming Disbursements), plus ECIP-1119, which applies here too because funds move. Seeded by a funding proposal from the Stage 2 DAO. Futarchy is an open signal layer and a Child-DAO under ECIP-1113 section 6 — it informs decisions and is never binding; binding allocation stays with the Olympia DAO.
- Stage 4 — Treasury Distribution (governance activation): ECIP-1115 (Olympia L-Curve Smoothing for Long-Term Network Security). Runs as a configured experiment on Treasury-held revenue, adjustable through governance without a hard fork. Supersedes ECIP-1120, which is excluded.
- Stage 5 — Protocol Integration (HARD FORK): ECIP-1116 (Consensus-Layer L-Curve Hardening for Base Fee Miner Distribution). Embeds the curve ECIP-1115 demonstrated into block finalization, paid by the protocol rather than disbursed from the treasury.

**ECIP-1121 — EVM Compatibility:** Advances the ETC execution layer through Dencun (Cancun-Deneb), Pectra (Prague-Electra), Fusaka (Fulu-Osaka), and Glamsterdam (Gloas-Amsterdam). ETC implemented partial London EIPs in Mystique (2022) and partial Shanghai EIPs in Spiral (2024), deferring the EIP-1559 fee market for independent governance design. ECIP-1111 delivers those deferred London fee market EIPs (EIP-1559 + EIP-3198). ECIP-1121 delivers the remaining execution-layer EIPs from Dencun, Pectra, and Fusaka that are independent of Proof-of-Stake and blob data availability, and carries that work into Glamsterdam.

From Glamsterdam, ECIP-1121 specifies two EIPs: EIP-7975 (eth/70) and EIP-7997 (deterministic CREATE2 factory). Glamsterdam's other execution-layer EIPs depend on EIP-7928 (Block-Level Access Lists) or EIP-4788 (beacon block root), neither of which is in scope for ECIP-1121. The accurate description is therefore "Dencun, Pectra and Fusaka complete, Glamsterdam opened" rather than parity with all of Glamsterdam.

Included EIPs (18, per ECIP-1121's Specification section):
- Gas Accounting and State Access: EIP-7702 (set EOA account code, chainId 61/63 replay protection), EIP-7623 (increase calldata cost), EIP-7825 (transaction gas limit cap, 2^24), EIP-7823 (MODEXP input bounds, 8192 bits), EIP-7883 (MODEXP gas cost increase), EIP-7935 (default gas limit 60M, network-authoritative on ETC per ECIP-1122)
- EVM Safety and Forward Compatibility: EIP-7934 (RLP block size limit, 8 MiB on ETC — no beacon-block margin), EIP-6780 (SELFDESTRUCT only in same tx), EIP-7910 (eth_config JSON-RPC method), EIP-7997 (deterministic CREATE2 factory at 0x4e59b44847b379578588920cA78FbF26c0B4956C, same address as every other EVM chain)
- Cryptographic and Precompile Enhancements: EIP-2537 (BLS12-381 precompile), EIP-7951 (secp256r1 / P256VERIFY for WebAuthn and passkeys)
- Execution Context Optimizations: EIP-5656 (MCOPY), EIP-2935 (historical block hashes in state), EIP-1153 (transient storage TSTORE/TLOAD), EIP-7939 (CLZ opcode, 0x1e)
- Networking (activates via devp2p capability negotiation, NOT a hard fork): EIP-7642 (eth/69 — retains total difficulty for PoW chain selection, drops receipt bloom filters), EIP-7975 (eth/70 — paginated receipts for blocks above the 10 MiB p2p limit)

Explicitly excluded: all blob-dependent EIPs (EIP-4844, EIP-7516, EIP-7691). Ethereum Classic is a pure Layer 1 execution chain.

Each client publishes an Olympia release before the activation block. Client readiness for Olympia: https://ethereumclassic.com/olympia/clients. The clients themselves are under Node Clients below.

Activation block: TBD (announced after CDC-23 community call).

## Node Clients

The client pages, which hold across network upgrades: https://ethereumclassic.com/build/clients

- Core-Geth (coregeth.com) — the recommended client to run: an Ethereum Classic execution client and public-good Go reference client, a go-ethereum derivative released and maintained in the ethereumclassic GitHub organization. Not native, and not a plugin. The v1.13 line is the current production line; the v1.12 line is vulnerable and should be left. Ethereum Classic's core developers and community contributors do the work, and the Ethereum Classic DAO maintains and funds the client today as its funder of last resort. Current release: https://github.com/ethereumclassic/core-geth/releases/latest. Docs: https://docs.coregeth.com. Overview: https://ethereumclassic.com/build/clients/core-geth
- Fukuii (fukuii.com) — an alternative to try, in alpha. ${FUKUII_DESCRIPTION} Latest release: ${FUKUII_LATEST_RELEASE_URL}. Repo: ${FUKUII_REPO_URL} · Docs: ${FUKUII_DOCS_URL}. Overview: https://ethereumclassic.com/build/clients/fukuii

ETC execution client plugins, a planned framework, add Ethereum Classic support into existing Ethereum clients. A plugin is not a client implementation and carries no mining or Proof-of-Work consensus: Besu (https://github.com/besu-eth/besu), Erigon (https://github.com/erigontech/erigon), Ethrex (https://github.com/lambdaclass/ethrex), Go-Ethereum (https://github.com/ethereum/go-ethereum), Nethermind (https://github.com/NethermindEth/nethermind), Reth (https://github.com/paradigmxyz/reth). The framework: https://ethereumclassic.com/build/clients#plugins

## Networks

- Mainnet RPC: https://etc.blockscout.com/api/eth-rpc
- Mordor Testnet RPC: https://etc-mordor.blockscout.com/api/eth-rpc
- Block Explorer: https://etc.blockscout.com

## Core-Geth: What the Network Is Running

${coreGethLlmsSection()}

## Regulatory Positioning

- United States: digital commodity candidate under the CLARITY Act — Senate Banking Committee passed 15-9 (May 2026), Senate floor vote pending (CFTC spot jurisdiction upon enactment)
- United States: Proof-of-Work EVM platform for regulated stablecoin deployment under the GENIUS Act
- European Union: decentralized asset under MiCA (Markets in Crypto-Assets Regulation), exempt from issuer obligations as a fully decentralized protocol
- Japan: recognized crypto-asset on the FSA Green List (JVCEA), fast-track listing across all Japanese regulated exchanges

## Olympia Ecosystem Properties

- https://olympiadao.org — Governance landing page
- https://olympiatreasury.org — Treasury monitoring dashboard
- https://app.olympiadao.org — Proposal submission, voting, and execution
- https://ethereumclassicdao.org — the Ethereum Classic DAO, a Wyoming DAO LLC that maintains and funds Ethereum Classic's public goods today as their funder of last resort
- https://github.com/olympiadao — Open-source governance repositories

## Contact

- Website: https://ethereumclassic.com
- GitHub: https://github.com/ethereumclassic-com

- /olympia/treasury — Olympia Treasury (ECIP-1112): how it is funded, what it can never do, staged deployment
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}

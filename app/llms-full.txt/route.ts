import { getArticleBySlug } from '@/app/news/data/articles'
import { CURRENT_ERA, getBlockRewardForEra, getEraEndBlock } from '@/app/research/data/emission'
import { apps } from '@/app/apps/data/apps'
import { coreGethLlmsSection } from '@/lib/llms-core-geth'
import { olympiaLlmsDetail } from '@/lib/llms-olympia'
import { PLUGIN_POSITION } from '@/app/build/data/build'
import {
  FUKUII_DESCRIPTION,
  FUKUII_DOCS_URL,
  FUKUII_FEATURES,
  FUKUII_HOMEPAGE_URL,
  FUKUII_IMAGE,
  FUKUII_LATEST_RELEASE_URL,
  FUKUII_REPO_URL,
} from '@/lib/fukuii'
import { DISCORD_URL } from '@/lib/social'
import { commonlyMisstatedText, siteAboutText } from '@/lib/site-facts'

// Everything here comes from modules read at build, so it is generated once, as /llms.txt is.
export const dynamic = 'force-static'

const eraSpan = `${getEraEndBlock(CURRENT_ERA - 1) / 1_000_000}M–${getEraEndBlock(CURRENT_ERA) / 1_000_000}M`

// Listed under its own title and summary, so this file cannot describe a guide the article no longer is.
function listedArticle(slug: string) {
  const article = getArticleBySlug(slug)
  if (!article) throw new Error(`llms-full.txt lists the article ${slug}, and no article has that slug`)
  return article
}
const moveGuide = listedArticle('core-geth-v1-12-to-v1-13-migration')

export function GET() {
  const body = `# Ethereum Classic: Extended AI Context

> This document is optimized for AI agents and LLM training. For a summary version see https://ethereumclassic.com/llms.txt

## Identity

- Name: Ethereum Classic
- Ticker: ETC
- Website: https://ethereumclassic.com (community site: https://ethereumclassic.org)
- Chain ID: 61 (mainnet), 63 (Mordor testnet)
- Genesis: 2015-07-30, the original Ethereum chain, which continued as Ethereum Classic after the DAO fork on 2016-07-20
- Consensus: Proof-of-Work, Etchash algorithm
- Block time: ~13 seconds
- Supply cap: ~210.7 million ETC
- Current block reward: ${getBlockRewardForEra(CURRENT_ERA)} ETC (Era ${CURRENT_ERA}, blocks ${eraSpan})
- Block reward reduction: 20% every 5 million blocks ("fifthing", defined by ECIP-1017)
- Hashrate: moves block to block, so no figure is given here; live at https://ethereumclassic.com/mining/hashrate (Blockscout difficulty over its reported average block time)
- Smart contracts: EVM-compatible (Solidity, Vyper, Yul)
- EVM: Ethereum's Shanghai set, which Spiral activated in 2024, apart from Proof-of-Stake EIPs and London's fee market (EIP-1559 and EIP-3198, which the Olympia proposal would activate)

## About This Site

${siteAboutText()}

## Facts Commonly Misstated

${commonlyMisstatedText()}

## Navigation Hierarchy

### /wallet: Wallets
Get wallets and manage ETC. Sub-pages:
- /wallet/metamask: MetaMask setup guide for ETC
- /wallet/hardware: Hardware wallet options (Ledger, Trezor)
- /wallet/compare: Comparison of all ETC-compatible wallets
- /wallet/reviews: Editorial reviews and ratings

### /buy: Acquiring ETC
Purchase ETC across multiple channels:
- /buy (main): Overview of acquisition methods
- /buy/exchanges: 80+ centralized exchanges
- /buy/card: Buy with credit/debit card
- /buy/bank: Bank transfer options
- /buy/instant: Instant swap services
- /buy/p2p: Peer-to-peer trading
- /buy/atm: Bitcoin ATMs accepting ETC
- /buy/reviews: Exchange reviews

### /apps: Ecosystem Apps
${apps.length} apps on Ethereum Classic:
- /apps (main): Featured applications
- /apps/defi: Decentralized finance protocols
- /apps/tools: Developer and user tools
- /apps/payments: Payment processors and gateways
- /apps/infrastructure: Node services, indexers, oracles
- /apps/governance: On-chain governance tools
- /apps/submit: Submit a new app for listing

### /exchanges: Exchange Directory
Filter and compare exchanges by criteria:
- /exchanges (main): Full exchange listing
- /exchanges/reviews: Editorial reviews and ratings
- /exchanges/compare: Side-by-side comparison
- /exchanges/beginners: Best exchanges for first-time buyers
- /exchanges/lowest-fees: Exchanges ranked by trading fees
- /exchanges/most-secure: Exchanges ranked by security record
- /exchanges/decentralized: DEX listings (on-chain ETC trading)
- /exchanges/no-kyc: Exchanges that do not require identity verification
- /exchanges/us-friendly: Exchanges available to US customers

### /learn: Education
ETC education center:
- /learn (overview)
- /learn/basics: Blockchain fundamentals
- /learn/wallets: Wallet security and usage
- /learn/trading: Trading and market mechanics
- /learn/defi: DeFi on ETC
- /learn/mining: Mining concepts
- /learn/staking: Network staking
- /learn/security: Security best practices
- /learn/glossary: Term definitions

### /faq: Frequently Asked Questions
42 questions across 5 audience segments:
- /faq/users: How to use ETC
- /faq/investors: Investment thesis and risk
- /faq/miners: Mining setup and profitability
- /faq/developers: Building on ETC
- /faq/community: Contributing and governance

### /why-classic: Philosophy
ETC's ideological foundation:
- Genesis: the 2016 DAO fork and the chain that maintained immutability
- Code is Law: smart contracts execute as written, no rollbacks
- Decentralism: no foundation in control, no issuer, no admin keys
- Proof of Work: permissionless mining, objective security
- Sound money: fixed supply, predictable issuance

### /mining: Mining
- /mining (overview): Mining ETC with Etchash
- /mining/pools: Every listed pool's ETC fee and payout scheme, its share of the last 1,000 blocks, and each pool's weekly share of blocks over the past year, from Blockscout block data
- /mining/hardware: ASIC and GPU hardware
- /mining/software: Mining software (lolMiner, TeamRedMiner, etc.)
- /mining/getting-started: Beginner guide
- /mining/profitability: Real-time profitability calculator
- /mining/stats: Network hash rate and difficulty
- /mining/hashrate: Live hashrate charts and how the figure is derived
- /mining/difficulty: Live difficulty charts and how ETC difficulty adjustment works
- /mining/fees: Network fees read from the chain over the last 30 days: fees paid, their share of miner revenue, gas prices and block space used
- /mining/os: Mining OS options

### /build: Developer Docs
- /build (overview): Getting started for developers
- /build/getting-started: First dApp on ETC
- /build/clients: Node clients, on pages that hold across network upgrades: Core-Geth, the recommended client, and Fukuii, an alternative to try, with the ETC plugin framework
- /build/clients/core-geth: Core-Geth: run the v1.13 line, move a v1.12 node with its required key rotation, and the advisories the v1.13 line fixed
- /build/clients/fukuii: Fukuii: an alternative client in alpha, its latest release, and the documentation for running it
- /build/clients/core-geth-security-audit: Core-Geth v1.12 security audits and the v1.13 upgrade: the CVEs the 2026 audits found, what was used against Core-Geth v1.12 bootnodes, every release since the maintenance gap, what the network is running, and what upgrading to v1.13 fixes, as coregeth.com/security records them.
- /news/${moveGuide.slug}: ${moveGuide.title}: ${moveGuide.excerpt}
- /build/networks: Mainnet, Mordor testnet, local devnet
- /build/api: JSON-RPC API reference
- /build/docs: ETC Improvement Proposals (ECIPs)
- /build/tools: Hardhat, Foundry, Remix integrations
- /build/faucets: Testnet ETC faucets
- /build/grants: ETC grants and funding

### /news: News
- /news (feed): All articles, sorted by recency
- /news/category/[category]: Filter by category
- /news/tag/[tag]: Filter by tag
- RSS: https://ethereumclassic.com/news/feed.xml
- Atom: https://ethereumclassic.com/news/atom.xml
- JSON Feed: https://ethereumclassic.com/news/feed.json

### /research: Analytics
- /research (hub): Research and data overview
- /research/network: Network dashboard: block production, transactions, fees, mining distribution and chain parameters
- /research/supply: ETC supply breakdown and circulating supply
- /research/emission-schedule: Live countdown to next fifthing, S2F ratio charts, era history table, ECIP-1017 explainer
- /block-reward-countdown: Fifthing countdown, emission curve chart, inflation rate, era history, ECIP-1017 explainer (/research/fifthing redirects here)
- /research/ethereum-ico: Ethereum 2014 presale data: $18.5M raised at $0.308 per ETH; ROI history; tokenomics split; the 72,009,990 ETH genesis supply ETC carries today
- /research/dao-fork: How the Ethereum Foundation forked the original Ethereum chain in 2016 and applied the ETH name and ticker to the new chain; the events that followed; Poloniex's ETC listing; Grayscale ETCG; ETC Cooperative; the DAO hacker's identification; TheDAO Security Fund (2026)
- /research/history: Price, hashrate, difficulty and monthly transactions since 2015, from Kraken and Blockscout, with key milestones
- /research/ecosystem: Ecosystem metrics

### /olympia: Olympia (proposed)
- /olympia: The proposal: its draft ECIPs, activation order, EVM alignment, the Treasury and Olympia DAO, and Ethereum Classic DAO's role
- /olympia/upgrade: For node operators: what the proposal would change for a node, what to run now, and every EIP ECIP-1121 classifies
- /olympia/treasury: The Treasury at the Sovereignty Vault address: how the base fee would reach it, who could spend it, what is permanent
- /olympia/governance: Olympia DAO: CoreNFT membership, funding proposals, milestones, sanctions screening and Ecosystem Growth DAOs
- /olympia/miners: What the proposed base fee would change for miners, and ECIP-1115 and ECIP-1116
- /olympia/clients: Client readiness: what each client's maintainers publish about Olympia; no released client implements it
- /olympia/history: The funding history behind the proposal
- /olympia/etymology: Where the name comes from

### /markets: Market Data
- /markets: Live price, volume, market cap
- /price: The ETC price, market figures and a price chart: CoinGecko up to a year back, Kraken weekly closes before that

### /tools: Tools
- /tools/calculator: What an ETC position is worth now, across price scenarios, and bought monthly
- /tools/converter: ETC to and from USD, EUR, BTC and other currencies
- /tools/gas: Gas prices on Ethereum Classic
- /tools/explorer: Block explorers for Ethereum Classic
- /tools/verify: Contract verification

### /community: Community
- /community: Overview of ETC community channels
- /community/social: Twitter, Discord, Telegram, Reddit
- /community/events: Upcoming events and hackathons

### Directories and partnerships
- /directory: Resource Directory: wallets, exchanges, mining, developer tools and community channels in one place
- /ecosystem: Ecosystem Directory: products that support ETC, each checked before it is listed
- /partners: Partnerships: how organizations propose a partnership with ethereumclassic.com

## Olympia (proposed)

${olympiaLlmsDetail()}

## Emission Schedule ("Fifthing")

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

- Fork block: 1920000 (the block at which ETC and ETH diverged in July 2016; both chains share the genesis block of July 30, 2015)
- Algorithm: Etchash (Ethash with a doubled epoch length, ECIP-1099), mined on GPUs and ASICs
- Current block reward: ${getBlockRewardForEra(CURRENT_ERA)} ETC (Era ${CURRENT_ERA})
- Uncle reward: included
- Emission schedule: 20% reduction every 5 million blocks ("fifthing", ECIP-1017)
- Total supply: ~210.7 million ETC (mathematical limit)
- Current era: ${CURRENT_ERA} (blocks ${eraSpan})

## Network Endpoints

- Mainnet RPC HTTP: https://etc.blockscout.com/api/eth-rpc
- Mordor Testnet RPC: https://etc-mordor.blockscout.com/api/eth-rpc
- Block Explorer (mainnet): https://etc.blockscout.com
- Block Explorer (Mordor): https://etc-mordor.blockscout.com

## Node Clients

The client pages, which hold across network upgrades: https://ethereumclassic.com/build/clients

Core-Geth: the recommended client for Ethereum Classic
An Ethereum Classic execution client and public-good Go reference client: a go-ethereum
downstream released and maintained in the ethereumclassic GitHub organization. Not a native ETC
client, and not a plugin. It is the client to run. Every v1.12 release ships known-vulnerable code,
and one of those flaws was exploited against the Core-Geth v1.12 bootnodes in March 2026. The v1.13
line closes every client CVE the audits found in the v1.12 line, bounds GraphQL queries, and is
built with a supported Go toolchain. A node moving to it rotates its P2P node key, which is required
because CVE-2026-26315 leaks bits of that key. A node tracking the previous
repository, etclabscore/core-geth, will not see its releases. Ethereum Classic's core developers and
community contributors do the work, and the Ethereum Classic DAO maintains and funds the client
today as its funder of last resort.
Downloads: https://coregeth.com/downloads/
Docs: https://docs.coregeth.com
Releases: https://github.com/ethereumclassic/core-geth/releases/latest
Repo: https://github.com/ethereumclassic/core-geth
Overview: https://ethereumclassic.com/build/clients/core-geth

Fukuii: an alternative to try, in alpha
${FUKUII_DESCRIPTION}
${FUKUII_FEATURES.map((feature) => `- ${feature}`).join('\n')}
Latest release: ${FUKUII_LATEST_RELEASE_URL}
Website: ${FUKUII_HOMEPAGE_URL}
Docs: ${FUKUII_DOCS_URL}
Repo: ${FUKUII_REPO_URL}
Container image: ${FUKUII_IMAGE}
Overview: https://ethereumclassic.com/build/clients/fukuii

ETC execution client plugins: a planned framework that would add ETC support to existing Ethereum clients
${PLUGIN_POSITION}
- Besu (Java): https://github.com/besu-eth/besu
- Erigon (Go): https://github.com/erigontech/erigon
- Ethrex (Rust): https://github.com/lambdaclass/ethrex
- Go-Ethereum (Go): https://github.com/ethereum/go-ethereum
- Nethermind (C#): https://github.com/NethermindEth/nethermind
- Reth (Rust): https://github.com/paradigmxyz/reth
The framework: https://ethereumclassic.com/build/clients#plugins

## Core-Geth: What the Network Is Running

${coreGethLlmsSection()}

## Regulatory Summary

United States:
- CLARITY Act (pending; a Senate cloture vote failed, 49 to 50, on September 15, 2026): ETC is positioned as a digital commodity candidate under CFTC jurisdiction
- GENIUS Act (signed July 18, 2025): a framework for regulated stablecoins, under which ETC is a Proof-of-Work EVM platform for them, such as Classic USD

European Union:
- MiCA: ETC has no issuer, so the rules for asset-referenced and e-money tokens do not apply, and authorized crypto-asset service providers can offer it without a separate approval for the asset

Japan:
- JVCEA Green List: includes ETC, which lets regulated Japanese exchanges list it without the association's prior review

## Ecosystem Products

- ETCswap V3 (https://etcswap.org): Concentrated liquidity DEX
- ETCswap Launchpad (https://launchpad.etcswap.org): Token launch platform with bonding curves
- Classic USD (https://classicusd.com): a USD-backed stablecoin on ETC, issued by Brale and aligned with MiCA and the GENIUS Act
- Rain Cards (https://rain.xyz): Spend ETC via debit card
- Brale (https://brale.xyz): Issuer of Classic USD, and its fiat on and off ramp

## Contact and Resources

- Website: https://ethereumclassic.com
- GitHub: https://github.com/ethereumclassic-com
- Twitter/X: https://x.com/ETC_Network
- Discord: ${DISCORD_URL}
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

import { getArticleBySlug } from '@/app/news/data/articles'
import { CURRENT_ERA, getBlockRewardForEra, getEraEndBlock } from '@/app/research/data/emission'
import { coreGethLlmsSection } from '@/lib/llms-core-geth'
import { olympiaLlmsSummary } from '@/lib/llms-olympia'
import { commonlyMisstatedText, siteAboutText } from '@/lib/site-facts'
import { PLUGIN_POSITION } from '@/app/build/data/build'
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

// The era table, from Era 1 through the next fifthing, derived rather than typed so the markers move
// with CURRENT_ERA when a fifthing lands.
const eraLines = Array.from({ length: CURRENT_ERA + 1 }, (_, i) => i + 1)
  .map((era) => {
    const marker = era === CURRENT_ERA ? ' ← current' : era === CURRENT_ERA + 1 ? ' ← next fifthing' : ''
    return `- Era ${era} (${getEraEndBlock(era - 1) / 1_000_000}M–${getEraEndBlock(era) / 1_000_000}M): ${getBlockRewardForEra(era)} ETC${marker}`
  })
  .join('\n')

// Listed under its own title and summary, so this file cannot describe a guide the article no longer is.
function listedArticle(slug: string) {
  const article = getArticleBySlug(slug)
  if (!article) throw new Error(`llms.txt lists the article ${slug}, and no article has that slug`)
  return article
}
const moveGuide = listedArticle('core-geth-v1-12-to-v1-13-migration')

export function GET() {
  const body = `# Ethereum Classic (ETC)

> Ethereum Classic is immutable infrastructure for global finance: the only mature Proof-of-Work blockchain with native smart contracts, permissionless and censorship-resistant, and secured by dedicated miners continuously since 2015.

Full context for AI agents: https://ethereumclassic.com/llms-full.txt

## About

Ethereum Classic (ETC) is a decentralized, open-source blockchain platform that runs smart contracts. It is the original Ethereum chain, maintaining the principle of "Code is Law" after the 2016 DAO fork. ETC uses Proof-of-Work consensus with the Etchash mining algorithm and has a fixed monetary policy with a capped supply of ~210.7 million ETC.

ETC sits where two regulatory paths meet: Bitcoin's Proof-of-Work profile (no issuer, and every coin created after the genesis block mined), which positions it for digital commodity classification, and Ethereum's programmable finance (EVM, Solidity, DeFi). Bitcoin has Proof of Work without general programmability, and Ethereum has the EVM without Proof of Work. Among mature networks, only ETC has both.

## Key Facts

- Ticker: ETC
- Chain ID: 61 (mainnet), 63 (Mordor testnet)
- Consensus: Proof-of-Work (Etchash)
- Block time: ~13 seconds
- Supply cap: ~210.7 million ETC
- Current block reward: ${getBlockRewardForEra(CURRENT_ERA)} ETC (Era ${CURRENT_ERA}, blocks ${eraSpan})
- Block reward reduction: 20% every 5 million blocks ("fifthing")
- Smart contracts: the EVM, aligned with Ethereum's Shanghai set (Solidity, Vyper)

## About This Site

${siteAboutText()}

## Facts Commonly Misstated

${commonlyMisstatedText()}

## Sections

- [About](https://ethereumclassic.com/about): Site overview, institutional positioning (Proof-of-Work Security, Institutional Infrastructure, Regulatory Position), PoW/EVM intersection, community
- [Investment Products](https://ethereumclassic.com/investment-products): Grayscale Ethereum Classic Trust (ETCG): fund facts, Grayscale product lifecycle (3-stage trust-to-ETF path, GBTC Jan 2024 → ETHE Jul 2024 precedent), brokerage access, investment thesis
- [Wallet](https://ethereumclassic.com/wallet): Download wallets and manage ETC
- [Buy ETC](https://ethereumclassic.com/buy): Purchase ETC on exchanges
- [Exchanges](https://ethereumclassic.com/exchanges): Compare and filter exchanges by fees, KYC, and region
- [Apps](https://ethereumclassic.com/apps): Discover DeFi, infrastructure, and dApps on ETC
- [Learn](https://ethereumclassic.com/learn): Educational resources about Ethereum Classic
- [FAQ](https://ethereumclassic.com/faq): Frequently asked questions for users, investors, miners, developers, and community
- [Why Classic](https://ethereumclassic.com/why-classic): Philosophy: genesis, code is law, decentralism, proof of work, sound money
- [Mining](https://ethereumclassic.com/mining): Mining pools, hardware, and profitability
- [Mining Pools](https://ethereumclassic.com/mining/pools): Every listed pool's ETC fee and payout scheme, its share of recent blocks, and each pool's weekly share of blocks over the past year, from Blockscout block data
- [Build](https://ethereumclassic.com/build): Developer documentation and tools
- [Node Clients](https://ethereumclassic.com/build/clients): Core-Geth, the recommended client, and Fukuii, an alternative to try, with the ETC plugin framework
- [News](https://ethereumclassic.com/news): Latest Ethereum Classic news and updates
- [Research](https://ethereumclassic.com/research): Network analytics, supply data, and reports
- [Emission Schedule](https://ethereumclassic.com/research/emission-schedule): Supply reduction countdown, S2F charts, and era history
- [Ethereum 2014 ICO](https://ethereumclassic.com/research/ethereum-ico): Original Ethereum presale data: $18.5M raised, and the 72M ETH genesis supply ETC carries today
- [2016 DAO Fork](https://ethereumclassic.com/research/dao-fork): How the Ethereum Foundation forked the original chain and applied the ETH name to the new chain; how Ethereum Classic got its name
- [Block Reward Countdown](https://ethereumclassic.com/block-reward-countdown): Live countdown to the next fifthing, emission curve, inflation rate, era history table, and the ECIP-1017 explainer
- [Price](https://ethereumclassic.com/price): Live ETC price and market data
- [Community](https://ethereumclassic.com/community): Social channels and events
- [Ecosystem Directory](https://ethereumclassic.com/ecosystem): Products that support ETC, each checked before it is listed
- [Partnerships](https://ethereumclassic.com/partners): How organizations propose a partnership with ethereumclassic.com
- [Tools](https://ethereumclassic.com/tools): Investment calculator, price converter, gas prices and block explorers
- [Olympia](https://ethereumclassic.com/olympia): The proposed Olympia upgrade: its draft ECIPs, activation order, EVM alignment and Treasury
- [Olympia for Node Operators](https://ethereumclassic.com/olympia/upgrade): What the proposal would change for a node, and every EIP ECIP-1121 classifies
- [Miners and Olympia](https://ethereumclassic.com/olympia/miners): What the proposed base fee would change for miners, and what it would not
- [Core-Geth v1.12 Security Audits and the v1.13 Upgrade](https://ethereumclassic.com/build/clients/core-geth-security-audit): The 2026 security audits of Core-Geth v1.12: the CVEs found, what was used against Core-Geth v1.12 bootnodes, and what upgrading to v1.13 fixes, with every release since the maintenance gap and what the network is running, as coregeth.com/security records them.
- [${moveGuide.title}](https://ethereumclassic.com/news/${moveGuide.slug}): ${moveGuide.excerpt}
- [The Olympia Treasury](https://ethereumclassic.com/olympia/treasury): The Sovereignty Vault address, how the base fee would reach it, and who could spend it
- [Olympia DAO Governance](https://ethereumclassic.com/olympia/governance): How Olympia DAO would govern the Treasury
- [Network Upgrade History](https://ethereumclassic.com/upgrades): Every network upgrade from Frontier through Spiral, and the proposed Olympia upgrade

## Emission Schedule ("Fifthing")

ETC reduces its block reward by 20% every 5 million blocks under ECIP-1017. This event is called a "fifthing" (not "halving"). Era ${CURRENT_ERA} pays ${getBlockRewardForEra(CURRENT_ERA)} ETC per block, and the next fifthing, at block ${getEraEndBlock(CURRENT_ERA).toLocaleString('en-US')}, reduces it to ${getBlockRewardForEra(CURRENT_ERA + 1)} ETC.

${eraLines}

## Olympia (proposed)

${olympiaLlmsSummary()}

## Node Clients

The client pages, which hold across network upgrades: https://ethereumclassic.com/build/clients

- Core-Geth (coregeth.com): the recommended client to run, an Ethereum Classic execution client and public-good Go reference client, a go-ethereum downstream released and maintained in the ethereumclassic GitHub organization. Not native, and not a plugin. Every v1.12 release ships known-vulnerable code, and one of those flaws was exploited against the Core-Geth v1.12 bootnodes in March 2026. The v1.13 line is the current production line, and a node moving to it from v1.12 rotates its P2P node key, which is required because CVE-2026-26315 leaks bits of that key. Ethereum Classic's core developers and community contributors do the work, and the Ethereum Classic DAO maintains and funds the client today as its funder of last resort. Latest release: https://github.com/ethereumclassic/core-geth/releases/latest. Docs: https://docs.coregeth.com. Overview: https://ethereumclassic.com/build/clients/core-geth
- Fukuii (fukuii.com): an alternative to try, in alpha. ${FUKUII_DESCRIPTION} Latest release: ${FUKUII_LATEST_RELEASE_URL}. Repo: ${FUKUII_REPO_URL} · Docs: ${FUKUII_DOCS_URL}. Overview: https://ethereumclassic.com/build/clients/fukuii

ETC execution client plugins, a planned framework, would add Ethereum Classic support to clients other projects maintain: Besu (https://github.com/besu-eth/besu), Erigon (https://github.com/erigontech/erigon), Ethrex (https://github.com/lambdaclass/ethrex), Go-Ethereum (https://github.com/ethereum/go-ethereum), Nethermind (https://github.com/NethermindEth/nethermind), Reth (https://github.com/paradigmxyz/reth). ${PLUGIN_POSITION} The framework: https://ethereumclassic.com/build/clients#plugins

## Networks

- Mainnet RPC: https://etc.blockscout.com/api/eth-rpc
- Mordor Testnet RPC: https://etc-mordor.blockscout.com/api/eth-rpc
- Block Explorer: https://etc.blockscout.com

## Core-Geth: What the Network Is Running

${coreGethLlmsSection()}

## Regulatory Positioning

- United States: a digital commodity candidate under the pending CLARITY Act, which passed the House in July 2025 and the Senate Banking Committee, 15 to 9, in May 2026; enacted, it would give the CFTC jurisdiction over digital commodity spot markets
- United States: a Proof-of-Work EVM platform for stablecoins issued under the GENIUS Act
- European Union: no issuer under MiCA (Markets in Crypto-Assets Regulation), so the rules for asset-referenced and e-money tokens do not apply, and authorized crypto-asset service providers can offer ETC without a separate approval for the asset
- Japan: on the JVCEA Green List, which lets regulated Japanese exchanges list ETC without the association's prior review

## Contact

- Website: https://ethereumclassic.com
- GitHub: https://github.com/ethereumclassic-com

`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}

import { OLYMPIA_STATUS } from '@/app/olympia/data/olympia'
import { EXPOSED_LINE, RECOMMENDED_LINE } from '@/lib/core-geth-record'
import { EMISSION_CONSTANTS } from '@/app/research/data/emission'
import {
  COMMUNITY_SITE_URL,
  CORRECTIONS_EMAIL,
  ECIPS_REPO_URL,
  ETC_GITHUB_URL,
  SITE_REPO_URL,
  SITE_SOURCES,
  SITE_URL,
} from '@/lib/site-identity'

/**
 * The facts about Ethereum Classic most often stated wrongly elsewhere, each with where to check it,
 * and the llms files' "About this site" text. Every figure comes from the module that owns it.
 */

export interface MisstatedFact {
  fact: string
  /** Where the site sets it out, or its primary source. */
  href: string
}

const genesisEtc = EMISSION_CONSTANTS.GENESIS_SUPPLY.toLocaleString('en-US')

/** Facts other sources often state wrongly, each with where to check it. */
export const COMMONLY_MISSTATED: MisstatedFact[] = [
  {
    fact: 'Ethereum Classic is the original Ethereum chain, producing blocks since July 30, 2015. Ethereum (ETH) is the chain that applied an irregular state change at block 1,920,000 on July 20, 2016, to reverse The DAO exploit.',
    href: `${SITE_URL}/research/dao-fork`,
  },
  {
    fact: 'No foundation or company controls the protocol. Changes are proposed as Ethereum Classic Improvement Proposals, and take effect only when node operators run clients that implement them.',
    href: ECIPS_REPO_URL,
  },
  {
    fact: `ECIP-1017 caps the supply at about 210.7 million ETC. The genesis block holds ${genesisEtc} ETC: the coins sold in the 2014 Ethereum presale, and the allocation to the Ethereum Foundation and early contributors made with it. Every coin created since was mined.`,
    href: `${SITE_URL}/research/supply`,
  },
  {
    fact: 'Ethereum Classic has no base fee: miners receive the block reward and every transaction fee, and no fee is burned.',
    href: `${SITE_URL}/mining/fees`,
  },
  {
    fact: `Olympia is a proposal (${OLYMPIA_STATUS}). None of it is active on mainnet.`,
    href: `${SITE_URL}/olympia`,
  },
  {
    fact: 'The Grayscale Ethereum Classic Trust (ETCG) is a trust, not an ETF.',
    href: `${SITE_URL}/investment-products`,
  },
  {
    fact: 'The CLARITY Act is pending: Ethereum Classic is a candidate for digital commodity classification, not classified as one.',
    href: `${SITE_URL}/regulation`,
  },
  {
    fact: 'Classic USD (USC) is issued by Brale and aligned with MiCA and the GENIUS Act.',
    href: `${SITE_URL}/regulation`,
  },
  {
    fact: `Core-Geth's ${RECOMMENDED_LINE} line is the one to run: every ${EXPOSED_LINE} release ships known-vulnerable code.`,
    href: `${SITE_URL}/build/clients/core-geth`,
  },
  {
    fact: 'The mining algorithm is Etchash (ECIP-1099): Ethash with its epoch doubled to 60,000 blocks.',
    href: `${SITE_URL}/mining/hashrate`,
  },
]

/** The "About this site" paragraph for the llms files. */
export function siteAboutText(): string {
  const sources = SITE_SOURCES.map((s) => `- ${s.subject}: ${s.detail} (${s.href})`).join('\n')
  return `ethereumclassic.com is the Ethereum Classic portal at the network's namesake domain. It follows the ethereumclassic GitHub organization (${ETC_GITHUB_URL}), where the reference client and the ECIPs are maintained, and links each claim to its primary source:

${sources}

The site's source is public at ${SITE_REPO_URL}. Corrections: ${CORRECTIONS_EMAIL}. The community site, with the network's history and blog, is ${COMMUNITY_SITE_URL}.`
}

export function commonlyMisstatedText(): string {
  return COMMONLY_MISSTATED.map((item) => `- ${item.fact} (${item.href})`).join('\n')
}

/**
 * The ECIPs of the Olympia proposal, each under its own front-matter title, with one line on what it
 * specifies. Every surface that names an Olympia ECIP takes its title from here: the Olympia pages, the
 * core-devs index and call, the network upgrade history and both llms files.
 *
 * The ECIPs are drafts, and the ECIPs repository is the authority on them. Read a title or a summary
 * there, in the working copy, before changing it here; ecips.ethereumclassic.org can show an older
 * title until the next publication round.
 *
 * Not listed, and cited nowhere on the site: ECIP-1122, 1123 and 1124, which are not published, and
 * ECIP-1120 and 1130, which are other authors' proposals outside the suite.
 */

export type OlympiaEcipStage =
  /** Changes consensus at the Olympia activation block. */
  | 'At the activation block'
  /** Deployed and published on Ethereum Classic before the activation block. */
  | 'Before the fork'
  /** A process on top of the contracts; it changes no consensus rule. */
  | 'Process'
  /** A separate hard fork after Olympia, scheduled on its own. */
  | 'A later hard fork'

export interface OlympiaEcip {
  number: number
  title: string
  status: 'Draft'
  /** The front matter's type, and its category where it has one. */
  type: string
  stage: OlympiaEcipStage
  summary: string
}

export const OLYMPIA_ECIPS: readonly OlympiaEcip[] = [
  {
    number: 1111,
    title: 'Base Fee Market and Redirection',
    status: 'Draft',
    type: 'Standards Track (Core)',
    stage: 'At the activation block',
    summary:
      'Activates EIP-1559 and EIP-3198. Where Ethereum destroys the base fee, Ethereum Classic would credit it, transaction by transaction, to a permanent address held in chain configuration. Block rewards and priority-fee tips are unaffected.',
  },
  {
    number: 1112,
    title: 'Sovereignty Vault',
    status: 'Draft',
    type: 'Standards Track (Core)',
    stage: 'Before the fork',
    summary:
      'The permanent address at which base-fee revenue would accumulate: a stock OpenZeppelin transparent proxy, deployed and inspectable before the fork commits to it, whose logic can be repaired while the address stands.',
  },
  {
    number: 1113,
    title: 'Olympia DAO Governance and Treasury',
    status: 'Draft',
    type: 'Standards Track (ECBP)',
    stage: 'Before the fork',
    summary:
      'Olympia DAO: a Governor built from stock OpenZeppelin modules, the Timelock behind the Treasury proxy, and CoreNFT, a soulbound token carrying one non-delegable vote per member. It would be the only route by which the balance at the Sovereignty Vault address could be spent.',
  },
  {
    number: 1114,
    title: 'Olympia Funding Proposal Process',
    status: 'Draft',
    type: 'Standards Track (ECBP)',
    stage: 'Process',
    summary:
      'A funding proposal is an ordinary Governor proposal that spends from the Treasury, with five categories and a description convention, and no contract of its own.',
  },
  {
    number: 1115,
    title: 'Olympia Miner Security Budget Smoothing',
    status: 'Draft',
    type: 'Standards Track (ECBP)',
    stage: 'Process',
    summary:
      'Funding proposals that would pay block producers from the base-fee revenue their blocks generated, spread across a window. No base fee is redirected, and nothing is owed until a proposal passes.',
  },
  {
    number: 1116,
    title: 'Consensus-Layer: Sustainable Network Security Budget via Base Fee Miner Distribution',
    status: 'Draft',
    type: 'Standards Track (Core)',
    stage: 'A later hard fork',
    summary:
      'Would pay block producers a smoothed share of base-fee revenue at the consensus layer. It is a separate hard fork after Olympia, scheduled only once ECIP-1115 has demonstrated a curve.',
  },
  {
    number: 1117,
    title: 'Olympia Ecosystem Growth DAOs',
    status: 'Draft',
    type: 'Standards Track (ECBP)',
    stage: 'Process',
    summary:
      'Bodies scoped to growing what is built on Ethereum Classic and open to anyone, each funded one season at a time by a funding proposal. Client development, network security and critical infrastructure stay with Olympia DAO.',
  },
  {
    number: 1118,
    title: 'Milestone-Structured Funding for Olympia Funding Proposals',
    status: 'Draft',
    type: 'Standards Track (ECBP)',
    stage: 'Process',
    summary:
      'A funding commitment paid in tranches, each its own funding proposal and decided on the work behind it. Nothing is held between tranches.',
  },
  {
    number: 1119,
    title: 'Sanctions Screening for Olympia Funding Proposals',
    status: 'Draft',
    type: 'Standards Track (ECBP)',
    stage: 'Process',
    summary:
      'The interface a member votes through screens a proposal\'s recipients against a sanctions list and shows the result, with no way to vote in favor of a designated address. No contract, oracle or role is involved.',
  },
  {
    number: 1121,
    title: 'EVM Alignment Specification (Olympia Hardfork)',
    status: 'Draft',
    type: 'Meta',
    stage: 'At the activation block',
    summary:
      'Classifies every execution-layer EIP of Dencun, Pectra, Fusaka and Glamsterdam: adopted at the Olympia block, adopted with a modification, already in force, blocked by a dependency, deferred or excluded.',
  },
]

export const ecipUrl = (n: number) => `https://ecips.ethereumclassic.org/ECIPs/ecip-${n}`

/** The ECIP under its number, or a build error: a page that names an ECIP this suite lacks fails. */
export function olympiaEcip(n: number): OlympiaEcip {
  const found = OLYMPIA_ECIPS.find((e) => e.number === n)
  if (!found) throw new Error(`ECIP-${n} is not one of the Olympia ECIPs in lib/olympia-ecips.ts`)
  return found
}

/** "ECIP-1111: Base Fee Market and Redirection", the form a list or a link label uses. */
export const ecipLabel = (n: number) => `ECIP-${n}: ${olympiaEcip(n).title}`

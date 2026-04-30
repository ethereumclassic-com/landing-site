import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeIn } from '@/app/components/ui/FadeIn'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: '2016 DAO Fork — How Ethereum Classic Got Its Name | ETC Research',
  description:
    'In 2016 the Ethereum Foundation forked the original chain and applied the ETH name and ticker to the new chain. The original chain — operating since 2015 — became known as Ethereum Classic.',
  keywords: [
    'DAO fork 2016',
    'Ethereum Classic genesis',
    'ETC origin',
    'DAO hack fork',
    'Robin Hood Group',
    'ETC suppression',
    'Ethereum Classic history',
  ],
}

type ForkEventType = 'origin' | 'defining' | 'action' | 'institutional' | 'legacy'

interface ForkEvent {
  title: string
  date: string
  type: ForkEventType
  description: string
  tags: string[]
  link?: { href: string; label: string }
}

const EVENT_TYPE_LABELS: Record<ForkEventType, string> = {
  origin: 'Origin',
  defining: 'Defining Moment',
  action: 'Event',
  institutional: 'Institutional',
  legacy: 'Present Day',
}

const FORK_EVENTS: ForkEvent[] = [
  {
    title: 'The DAO Crowdsale',
    date: 'Apr 30 – May 27, 2016',
    type: 'action',
    description:
      "Slock.it deploys The DAO smart contract; members of the public send it ETH in exchange for DAO tokens. The crowdsale closes on May 27 raising $150 million — the world's largest crowdfund at the time. Approximately 14% of all circulating ETH becomes locked in a single contract. When the Ethereum Foundation created a new chain in July 2016, this ETH remained on the original chain — intact, in its pre-exploit state.",
    tags: ['$150M raised', '~14% of all ETH locked', 'DAO token holders', 'Slock.it'],
  },
  {
    title: 'The DAO Exploit',
    date: 'Jun 17, 2016',
    type: 'action',
    description:
      'An attacker exploits a recursive call vulnerability in The DAO, which holds roughly 14% of all circulating ETH. The Robin Hood Group (RHG) drains the remaining DAO funds into a child DAO they control, citing intent to secure them until after the planned hard fork.',
    tags: ['~14% of circulating ETH at risk', 'RHG child DAO formed', 'Recursive call exploit'],
  },
  {
    title: 'The Hard Fork — The Ethereum Foundation Creates a New Chain',
    date: 'Jul 20, 2016',
    type: 'defining',
    description:
      "The Ethereum Foundation implements an irregular state change, creating a new chain that reverses the DAO exploit. The Foundation applies the Ethereum name, brand, and ETH ticker to this new chain. The original chain — operating continuously and unmodified since the July 2015 genesis block — retains the full original state, including the 72,009,991-token genesis supply and the RHG's child DAO position. The global community names the original chain Ethereum Classic; exchanges assign it the ETC ticker.",
    tags: ['New chain created — takes ETH name & ticker', 'Original chain retains genesis supply', 'ETC = original unmodified chain', 'Code is Law'],
  },
  {
    title: 'Poloniex Lists ETC',
    date: 'Jul 23, 2016',
    type: 'action',
    description:
      "Three days after the fork, Poloniex lists the original chain under the ETC ticker — one of the first uses of the Ethereum Classic name — against expectations: the Ethereum Foundation had told exchanges the original chain would have little to no community interest or value. Poloniex's listing triggers an immediate price discovery market and signals that the original chain would not disappear. Many exchanges quickly follow. This unexpected survival is the direct context for the suppression activity that follows.",
    tags: ['ETC ticker first applied by Poloniex', 'EF told exchanges original chain would be worthless', 'Price discovery established', 'Many exchanges follow'],
  },
  {
    title: 'Internal Ethereum Foundation Communications Circulated',
    date: 'Jul 26, 2016',
    type: 'action',
    description:
      'A screenshot of a Skype group labeled "Ethereum foundation [internal only]" (36 participants) is circulated publicly. It shows participants discussing ETC following the fork. Fabian Vogelsteller (author of the ERC-20 standard) writes "Just did. Haha. Nice free money" and "Hopefully it stays a coin like expanse with no real value."',
    tags: ['Fabian Vogelsteller: "Haha. Nice free money"', 'Internal group (36 participants)', 'Circulated publicly'],
  },
  {
    title: 'Requests to Delete Public Posts',
    date: 'Jul–Aug 2016',
    type: 'action',
    description:
      'Lefteris Karapetsas (Ethereum core developer) sends a direct message on July 28 asking a Reddit user to delete a comment explaining the contract being used, noting "the zero hour to attack the DAO...is really close." Griff Green (Slockit community manager) separately messages the same user to delete posts "especially about the paid out and similar things." Both messages are screenshotted and published.',
    tags: ['Lefteris Karapetsas DM (Jul 28)', 'Griff Green DM', 'Published as contemporaneous record'],
  },
  {
    title: '51Pool — Coordinated Hashrate Attack',
    date: 'Jul 31, 2016',
    type: 'action',
    description:
      'ETH-aligned participants form a mining pool called 51Pool.org with the stated intent to destroy the ETC network through a sustained 51% hashrate attack. The pool fails to accumulate sufficient hashrate as ETHash miners instead commit resources to mining ETC. By August 1, the mining pools publicly declare they will not attack ETC.',
    tags: ['51Pool.org formed', 'Goal: destroy ETC via 51% attack', 'Miners commit to ETC instead', 'Attack abandoned Aug 1'],
  },
  {
    title: 'Alex van de Sande Reverses Public Position',
    date: 'Aug 8, 2016',
    type: 'action',
    description:
      'Alex van de Sande (Ethereum Foundation) had publicly led the white hat counter-attack on June 21 — tweeting "DAO IS BEING SECURELY DRAINED. DO NOT PANIC." and "we launched our white hat counter attack." On August 8, he publicly states: "TLDR: I had nothing to do with it."',
    tags: ['Jun 21: publicly announced counter-attack', 'Aug 8: "I had nothing to do with it"'],
  },
  {
    title: '2,987,009 ETC Transferred to Exchanges',
    date: 'Aug 9–10, 2016',
    type: 'action',
    description:
      'Approximately 2,987,009 ETC is transferred from the White Hat multisig (0x1ac729d2db43103faf213cb9371d6b42ea7a830f) through a distribution contract to Poloniex, Kraken, Bittrex, and Yunbi. Poloniex and Kraken freeze the deposits. The ETC reaching Bittrex and Yunbi is sold via market orders on August 10, contributing to a sharp price decline that day.',
    tags: ['~2,987,009 ETC transferred', 'Poloniex & Kraken: froze deposits', 'Bittrex & Yunbi: market sells', 'ETC price declined sharply'],
    link: { href: 'https://medium.com/@WhalePanda/ethereum-chain-of-liars-thieves-b04aaa0762cb', label: 'Contemporaneous reporting — Aug 16, 2016 ↗' },
  },
  {
    title: 'RHG Follow-Up Statement',
    date: 'Aug 13, 2016',
    type: 'action',
    description:
      'Jordi Baylina posts a follow-up on Reddit disclosing that signals were received "from the greater community to distribute these ETC in ETH, to continue to support Ethereum projects," that the first transfers took place on August 9 without prior public announcement, and that exchanges are being asked to return the frozen funds to multisig wallets.',
    tags: ['ETC converted to ETH', '"to continue to support Ethereum projects"', 'Transfers made without prior announcement', 'Exchanges asked to return funds'],
  },
  {
    title: 'DAO Funds Unlock on ETC',
    date: 'Aug 31, 2016',
    type: 'action',
    description:
      "Beyond the RHG's child DAO position, millions of additional ETC held by DAO token holders and the original attacker become accessible as the DAO's splitting mechanism completes on ETC. Large sell pressure hits the market. ETC's price holds remarkably well despite the sustained dumping across August, demonstrating sufficient buy-side demand to absorb the concentrated institutional sell-offs.",
    tags: ['DAO token holder ETC unlocks', "Attacker's position also unlocks", 'ETC price holds through sell pressure', 'Buy-side absorbs distribution'],
  },
  {
    title: 'Grayscale Ethereum Classic Trust (ETCG) Established',
    date: 'Apr 2017',
    type: 'institutional',
    description:
      'Grayscale establishes the Ethereum Classic Trust approximately eight months after the August 2016 events. The trust becomes publicly quoted on OTCQX in May 2018, accessible through Charles Schwab, Fidelity, and Interactive Brokers — pioneering regulated institutional access to ETC. ETC is held in cold storage by Coinbase Custody under a 2.50% annual management fee. As of March 31, 2026, ETCG reports $89.31M in assets under management at 0.78020295 ETC per share.',
    tags: ['ETCG inception Apr 2017', 'OTCQX public quotation May 2018', '$89.31M AUM (Mar 2026)', '2.50% annual management fee', 'Coinbase Custody cold storage'],
  },
  {
    title: 'ETC Cooperative Founded — Core Development Funded',
    date: '2017 – Present',
    type: 'institutional',
    description:
      "The ETC Cooperative is established as a US 501(c)(3) non-profit by Ethereum Classic's earliest core contributors. A 1% portion of Grayscale's ETCG management fee is donated to the Cooperative, making Grayscale the primary institutional funder of ETC's core development. The Cooperative has backed every hard fork, every client release, and every cross-client coordination effort since the Atlantis upgrade.",
    tags: ['US 501(c)(3) non-profit', '1% of ETCG fee donated', 'Every hard fork since Atlantis funded', 'Millions contributed to client teams'],
  },
  {
    title: 'DAO Hacker Identified — Toby Hoenisch',
    date: 'Feb 22, 2022',
    type: 'action',
    description:
      "Journalist Laura Shin, in a joint investigation with Chainalysis, identifies Austrian programmer Toby Hoenisch — co-founder and former CEO of TenX — as the likely perpetrator of the 2016 DAO hack. The investigation traced the stolen ETH to Bitcoin, through Wasabi Wallet mixing, de-mixed by Chainalysis to four exchanges, then converted to Grin (a privacy coin) and withdrawn to a non-custodial node named 'grin.toby.ai' — hosted on the same IP address as a node named 'TenX.' Hoenisch had previously written blog posts warning about the DAO's vulnerability before the hack. He denied the allegations, stating Shin's conclusion was 'factually inaccurate.' The investigation was published in Shin's book The Cryptopians.",
    tags: ['Toby Hoenisch (TenX co-founder) accused', 'Laura Shin + Chainalysis investigation', 'ETH → BTC → Wasabi Wallet → Grin trail', '"grin.toby.ai" node on same IP as "TenX"', 'Hoenisch denies: "factually inaccurate"', 'The Cryptopians published Feb 2022'],
    link: { href: 'https://decrypt.co/93547/crypto-ceo-denies-11-billion-ethereum-dao-hack', label: 'Decrypt coverage — Feb 22, 2022 ↗' },
  },
  {
    title: '"The DAO is back" — Unclaimed Funds Repurposed for Security',
    date: 'Jan 29, 2026',
    type: 'legacy',
    description:
      "Griff Green announces that approximately 70,500 ETH from the ExtraBalance Withdrawal contract and ~4,600 ETH from TheDAO's Curator Multisig — funds with \"no clear claimants\" — will be deployed as TheDAO Security Fund, part of the Ethereum Foundation's Trillion Dollar Security initiative. About 20% of the original refund pool was never claimed; that ~$6M in 2016 is now estimated at ~$200 million. The funds will be staked, with revenue directed to Ethereum security grants via quadratic funding and retroactive mechanisms. Named curators include Vitalik Buterin and Jordi Baylina — the same Baylina who posted the 2016 follow-up acknowledging the ETC had been converted to ETH \"to support Ethereum projects.\"",
    tags: ['70,500 ETH from ExtraBalance contract', '~4,600 ETH from Curator Multisig', '~$200M estimated value', 'Part of EF Trillion Dollar Security initiative', 'Jordi Baylina named curator', 'Funds staked, yield funds operations'],
  },
]

export default function DaoForkPage() {
  return (
    <main className="hero-gradient noise-overlay grid-overlay relative min-h-screen overflow-hidden pb-16 pt-12">

      {/* Hero */}
      <FadeIn>
        <section className="px-6 pb-8 pt-4 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/research"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Research
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
              The 2016 DAO Fork — How Ethereum Classic Got Its Name
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-[var(--text-secondary)]">
              The Ethereum Foundation forked the original chain and applied the ETH name to the new chain. The original, unmodified chain became Ethereum Classic.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-[var(--border-default)] bg-[var(--bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
                Jul 20, 2016
              </span>
              <span className="inline-flex items-center rounded-full border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-3 py-1 text-xs font-medium text-[var(--brand-green)]">
                Original Chain · Continuous Since 2015
              </span>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Timeline */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn delay={60}>
            <p className="mb-6 text-sm text-[var(--text-muted)]">
              The original Ethereum chain — operating since the July 2015 genesis block — continued unmodified after the 2016 fork.
              The Ethereum Foundation applied the ETH name and ticker to the new chain; the global community recognised the original as Ethereum Classic.
              This is the sequence of events — and who fought to suppress it.
            </p>
          </FadeIn>
          <div className="relative">
            <div className="absolute bottom-2 left-[15px] top-2 w-px bg-gradient-to-b from-[var(--border-subtle)] via-[var(--brand-green)]/30 to-[var(--brand-green)]" />
            <div className="space-y-3">
              {FORK_EVENTS.map((event, i) => (
                <FadeIn key={event.title} delay={80 + i * 35}>
                  <div className="relative pl-10">
                    <div className={`absolute left-[9px] top-[18px] h-3 w-3 rounded-full ${
                      event.type === 'defining'
                        ? 'bg-white ring-2 ring-[var(--border-default)]'
                        : event.type === 'action'
                          ? 'border-2 border-[var(--border-default)] bg-[var(--bg-elevated)]'
                          : event.type === 'legacy'
                            ? 'animate-pulse bg-[var(--brand-green)]'
                            : 'bg-[var(--brand-green)]'
                    }`} />
                    <div className={`rounded-xl border p-4 ${
                      event.type === 'defining'
                        ? 'border-[var(--brand-green)]/40 bg-[var(--brand-green)]/5'
                        : event.type === 'institutional' || event.type === 'legacy'
                          ? 'border-[var(--brand-green)]/20 bg-[var(--brand-green)]/5'
                          : 'border-[var(--border-default)] bg-[var(--bg-elevated)]'
                    }`}>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-semibold text-[var(--text-primary)]">{event.title}</h3>
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                            event.type === 'action'
                              ? 'border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-muted)]'
                              : 'bg-[var(--brand-green)]/10 text-[var(--brand-green)]'
                          }`}>
                            {EVENT_TYPE_LABELS[event.type]}
                          </span>
                        </div>
                        <span className="shrink-0 font-mono text-[10px] text-[var(--text-muted)]">{event.date}</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">{event.description}</p>
                      {event.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {event.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-0.5 text-[10px] text-[var(--text-muted)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {event.link && (
                        <a
                          href={event.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 block font-mono text-[10px] text-[var(--brand-green)] underline-offset-2 hover:underline"
                        >
                          {event.link.label}
                        </a>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <FadeIn delay={140}>
        <section className="px-6 pb-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Related</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/research/ethereum-ico"
                className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--brand-green)]/40 hover:bg-[var(--brand-green)]/5"
              >
                <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">Ethereum 2014 ICO</p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">The presale that seeded ETC&apos;s genesis supply</p>
              </Link>
              <Link
                href="/research/emission-schedule"
                className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--brand-green)]/40 hover:bg-[var(--brand-green)]/5"
              >
                <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">Emission Schedule</p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">ECIP-1017 era charts and supply data</p>
              </Link>
              <Link
                href="/block-reward-countdown"
                className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--brand-green)]/40 hover:bg-[var(--brand-green)]/5"
              >
                <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">Block Reward Countdown</p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">Live countdown to the next fifthing</p>
              </Link>
              <a
                href="https://medium.com/@WhalePanda/ethereum-chain-of-liars-thieves-b04aaa0762cb"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--brand-green)]/40 hover:bg-[var(--brand-green)]/5"
              >
                <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">Chain of Liars &amp; Thieves</p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">WhalePanda on the 2016 suppression campaign</p>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

    </main>
  )
}

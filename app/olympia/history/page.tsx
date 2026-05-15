'use client'

import Link from 'next/link'

const threads = [
  {
    label: 'Abandoned at Birth',
    heading: 'No treasury. No foundation. No premine.',
    color: 'var(--brand-green)',
    body: [
      "Ethereum Foundation raised $18.5M in a 2014 ICO and gave insiders a 16.7% premine. When Ethereum Classic emerged from the DAO Fork in July 2016, the Foundation held a windfall of duplicated ETC — and used it to declare ETC dead, discourage exchange listings, and reinforce ETH's position. ETC launched with nothing: no treasury, no foundation, no premine.",
      "The conversation about sustainable funding began within weeks. In August 2016 — one month after the DAO Fork — Dr. Avtar Sehra was already circulating slides on protocol governance and funding models. Arvicco was coordinating the fragmented developer community. Igor Artamonov held the clients together as CTO. These early contributors didn't wait for organizations to form. They articulated the question ETC would spend ten years answering: how do you fund a decentralized network without compromising it?",
      'In late 2016, the community pooled 17,313 ETC into a public donation address — ETC\'s first attempt at a shared financial resource. By 2018 it was secured in a 5-of-7 multisig. Today, nearly a decade later, it sits untouched. The will to self-fund was there from the beginning. The mechanism to distribute funds fairly was not.',
    ],
  },
  {
    label: 'Teams That Came and Went',
    heading: 'Four organizations stepped into the vacuum',
    color: 'var(--color-purple)',
    body: [
      'ETCDEV (2016–2018) was the first real development team. They authored ECIP-1017 — ETC\'s 5M20 monetary policy, a Bitcoin-style schedule of block reward reductions. They built the first wallets, removed the difficulty bomb, and maintained the network through its formative years. In December 2018, the bear market ended them. ETC-denominated reserves collapsed. No stablecoins, no hedging — no payroll. The best development team ETC ever had was gone within two years, not from lack of talent, but from lack of sustainable funding.',
      'Ethereum Classic Labs (2018–2021) stepped in after ETCDEV. DFG\'s corporate venture maintained Core-Geth, funded an incubator, and provided the institutional face exchanges required. Then quietly wound down. Corporate sponsors answer to their own priorities, not the chain\'s.',
      "IOHK (2017–2022) built Mantis, an ETC client in Scala. They returned during the 2020 51% attack crisis with ECIP-1097 — a checkpointing mechanism that would have subordinated PoW consensus to an external authority — and ECIP-1098, a miner tax treasury with pre-selected beneficiaries. The community rejected both. On exit, IOHK repurposed ETC's largest verified Twitter account (670K followers) into an Ergo promotional channel. Chris Mercer built Twitter-Together — a GitHub-controlled community management system — as the response. The lesson: outside sponsors with good resources can turn hostile when their proposals are rejected.",
      'ETC Cooperative (2017–present) is the one steward that endured. Founded by Ethereum Classic\'s earliest core contributors as a US 501(c)(3) non-profit, ETC Cooperative backed every hard fork, every client release, and every cross-client coordination effort since Atlantis. The Grayscale Ethereum Classic Trust (ETCG) — launched in May 2018, years before Bitcoin ETFs existed as a product category — became the primary institutional donor, with Grayscale\'s management fees from the $100M+ AUM trust\'s userbase indirectly funding the majority of ETC core development and infrastructure for nearly a decade. By late 2024, those reserves were nearly exhausted. The model worked — as a stopgap. Nonprofits are not permanence.',
    ],
  },
  {
    label: 'Three Attempts, One Lesson',
    heading: 'Every rejection wrote the next design',
    color: 'var(--color-warning)',
    body: [
      'ETC tried twice to solve protocol-level funding before Olympia. The community rejected both — and those rejections wrote the exact specifications the third attempt satisfies.',
      'ECIP-1051 (December 31, 2018 — Dexaran): Split block rewards into miner share plus two designated treasury addresses. Modeled directly on Callisto Network\'s treasury — a competing chain ETC had explicitly distanced itself from. Status: Rejected. Two fixed addresses with no permissionless access, no accountability, and no governance. The community established what it would not accept: centralized custody with no oversight.',
      'ECIP-1098 (August 26, 2020 — Julian Mendiola, Nicolas Tallar, Brian McKenna, aligned with IOHK): Redirect 20% of block rewards to a smart contract treasury — 90% split equally among three hardcoded client development teams, 10% to Gitcoin grants. Status: Withdrawn. A 20% miner tax. Pre-selected winners baked into the protocol. A governance design that explicitly picked three teams as permanent beneficiaries. The community established what else it would not accept: block reward capture and corporate-style allocation.',
      'ECIP-1111 and ECIP-1112 (July 4, 2025 — Cody Burns, Chris Mercer): The third attempt learned from both. No miner tax. No block reward capture. No pre-selected beneficiaries. Instead: redirect the basefee — the portion of every transaction fee that EIP-1559 sends to be burned on Ethereum — to a protocol treasury on ETC. Creating value with that which was set to be destroyed. What Ethereum incinerates, ETC accumulates. Miners are untouched. Block rewards are untouched. Any contributor can propose funding via ECFP. Any ETC account can participate. The treasury contract is immutable — no admin keys, no upgrade mechanisms, custody separated from governance by design.',
      'Every principle ECIP-1051 and ECIP-1098 violated became a design constraint Olympia satisfies. The community said no twice, and meant it.',
    ],
  },
  {
    label: 'The Stewards Who Held the Line',
    heading: 'Continuity while the organizations rose and fell',
    color: 'var(--color-info)',
    body: [
      'Cody Burns wrote ECIP-1043 (Fixed DAG Limit, 2018), anticipating the GPU accessibility problem years before the 2020 attacks made it urgent. His foresight seeded Thanos (ECIP-1099, 2020): the ETChash transition that halved DAG growth, brought 3GB and 4GB GPUs back online, and positioned ETC to absorb Ethereum\'s displaced Ethash mining infrastructure when Ethereum merged to proof-of-stake in 2022. At the 2022 Mystique upgrade, Burns deliberately deferred EIP-1559. Not an omission — a deliberate design choice. The official network record is unambiguous: "The 2021 developer consensus landed on the treasury model, a position formalized four years later with the Olympia upgrade." Burns preserved the design space. He co-authored Olympia ECIPs 1111 through 1114.',
      'Chris Mercer built Twitter-Together after IOHK\'s exit — a GitHub-controlled community account system that prevented any single organization from capturing ETC\'s social infrastructure again. He proposed the Wyoming DAO LLC legal wrapper: the first legal entity in ETC history explicitly subordinate to an on-chain DAO. He deployed ETC\'s foundational DeFi stack from 2022 to 2025: an AMM DEX, Classic USD (the first MiCA and GENIUS Act-compliant stablecoin on a proof-of-work network), a CLMM DEX, and a launchpad. When IOHK abandoned Mantis, Mercer forked it under the name Fukuii — after Chordodes fukuii, a horsehair worm that hijacks a mantis and drives it toward water. The name is the story: Fukuii hijacks Mantis and drives it toward Olympia. In doing so, Mercer delivered on the 2018 Orbita Client vision ETCDEV had presented before their collapse: an ETC-native execution client with no upstream dependency on Ethereum\'s development cycle. He co-authored Olympia ECIPs 1111 through 1114.',
      'In summer 2020, three 51% attacks hit ETC in rapid succession. No foundation rescue. No corporate intervention. The community coordinated emergency responses across time zones. The protocol fixes — Thanos (ECIP-1099) and MESS (ECIP-1100) — stopped the attacks. The lesson from 2020: the risks had been signaled years earlier by ECIP-1043, but underfunding had left them unaddressed until the cost of waiting became undeniable. Only sustainable protocol funding can make ETC proactive rather than reactive.',
      'The Olympia ECIPs (1111 through 1114) were published on July 4, 2025. For the first time, Ethereum Classic had a fully specified, non-inflationary, protocol-native funding proposal — one that had learned from every failure before it.',
    ],
  },
  {
    label: 'The EVM Thesis',
    heading: 'Ten years of conviction realized',
    color: 'var(--brand-green)',
    body: [
      'For a decade, a consistent thread ran through Ethereum Classic community dialogue: ETC would not only survive — it would thrive with the adoption of the EVM stack. While Ethereum moved to proof-of-stake, ETC held its ground. The bet was that the EVM would become the dominant execution environment for global smart contracts, and that the only proof-of-work chain on that stack would eventually be recognized for what it is.',
      "That bet is settled. The EVM stack won. Wallets, tooling, libraries, compiler toolchains, developer knowledge — all converged on the EVM as the universal interface for programmable money. ETC's position — PoW consensus, EVM execution, no pre-mine, no ICO, decentralized governance — became more compelling with every passing year, not less.",
      'Olympia is the moment that ten-year thesis is realized in protocol infrastructure. ECIP-1121 delivers full Fusaka EVM alignment. ECIP-1111 captures basefee revenue. ECIP-1112 puts that revenue under on-chain governance. The EVM bet paid off. Olympia is the payout.',
    ],
  },
  {
    label: 'Second Decade',
    heading: 'The beginning of what comes next',
    color: 'var(--color-purple)',
    body: [
      "ETC's first decade (2015–2025) was defined by survival. A contentious origin, industry skepticism, the long proof-of-work vigil, development without predictable resources. The Ethereum Classic network endured — maintained by ETC Cooperative through a decade of institutional commitment and by Grayscale's ETCG trust, which built the earliest regulated institutional access product for any proof-of-work smart contract network.",
      "The second decade opens with alignment and strength. Regulatory clarity across four major jurisdictions — CLARITY Act digital commodity classification, GENIUS Act stablecoin platform designation, MiCA decentralized asset recognition, FSA Green List status in Japan. Grayscale's ETCG trust, established in May 2018 with $100M+ AUM. Protocol-funded development through a treasury that requires no central organization. Multi-client architecture eliminating single-point-of-failure risk. Classic USD: the first MiCA and GENIUS Act-compliant stablecoin on a proof-of-work network.",
      'Olympia is the stake in the ground that marks this transition. The first decade of survival is over. The second decade of active development, institutional adoption, and competitive positioning has begun. And it builds on the foundation that ETC Cooperative and the Grayscale ETCG userbase held together long enough to reach.',
    ],
  },
]

const timeline = [
  { year: '2015', events: 'Olympia testnet · ETC genesis block (July 30) · EVM goes live' },
  { year: '2016', events: 'DAO Fork rejected · Code is Law · 17,313 ETC community fund · Dr. Avtar Sehra governance slides' },
  { year: '2017', events: 'ECIP-1017 (5M20 monetary policy) · ETC Cooperative founded · Grayscale ETCG launched (May)' },
  { year: '2018', events: 'ETCDEV collapse (bear market) · ECIP-1051 rejected · Difficulty bomb removed' },
  { year: '2019', events: 'Atlantis — Byzantium parity · ZK-proof precompiles' },
  { year: '2020', events: '51% attacks (×3) · Thanos (ETChash + MESS) · ECIP-1098 rejected · Phoenix — Istanbul parity' },
  { year: '2021', events: 'Magneto — Berlin parity · 2021 treasury model consensus' },
  { year: '2022', events: 'Mystique — EIP-1559 deliberately deferred · Ethereum Merge · ETC absorbs Ethash hashrate' },
  { year: '2024', events: 'Spiral — Shanghai partial parity · ETC Coop reserves near exhausted' },
  { year: '2025', events: 'Olympia ECIPs published (July 4) · Classic USD — first PoW MiCA stablecoin' },
  { year: '2026', events: 'Olympia upgrade activation — Fusaka EVM + EIP-1559 + DAO governance' },
]

export default function OlympiaHistoryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-green-subtle)] blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <Link
              href="/olympia"
              className="text-sm text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
            >
              ← Olympia Hub
            </Link>
            <span className="text-[var(--color-text-muted)]">·</span>
            <Link
              href="/olympia/name"
              className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--text-primary)]"
            >
              Why the name Olympia
            </Link>
          </div>

          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-4 py-1.5 text-sm font-medium text-[var(--brand-green)]">
              History
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
            A Decade of{' '}
            <span className="bg-gradient-to-r from-[var(--brand-green)] to-[var(--color-success)] bg-clip-text text-transparent">
              Conviction
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Ten years of Ethereum Classic — the teams that came and went, the proposals the
            community rejected, and how Olympia finally delivers what was sought since 2016.
          </p>
        </div>
      </section>

      {/* Thread sections */}
      {threads.map((thread, i) => (
        <section
          key={thread.label}
          className={`px-6 py-20 md:px-10 lg:px-12 ${i % 2 === 1 ? 'border-y border-[var(--border)] bg-[var(--panel)]' : ''}`}
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 rounded-full" style={{ backgroundColor: thread.color }} />
              <span
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: thread.color }}
              >
                {thread.label}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">{thread.heading}</h2>
            <div className="mt-6 space-y-4">
              {thread.body.map((para, j) => (
                <p key={j} className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Historical timeline strip */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
            Timeline
          </p>
          <div className="space-y-0">
            {timeline.map((entry, i) => (
              <div key={entry.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-16 shrink-0 items-center justify-center rounded-md border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] font-mono text-xs font-semibold text-[var(--brand-green)]">
                    {entry.year}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="mt-1 h-full w-px bg-[var(--border)]" />
                  )}
                </div>
                <p className="pb-6 pt-1.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {entry.events}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade heritage strip */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
            Upgrade Heritage
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {[
              'Frontier',
              'Homestead',
              'Atlantis',
              'Agharta',
              'Phoenix',
              'Thanos',
              'Magneto',
              'Mystique',
              'Spiral',
            ].map((name) => (
              <span
                key={name}
                className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 font-mono text-xs text-[var(--color-text-muted)]"
              >
                {name}
              </span>
            ))}
            <span className="rounded-full border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-3 py-1 font-mono text-xs font-semibold text-[var(--brand-green)]">
              Olympia
            </span>
          </div>
          <p className="mt-4 text-sm text-[var(--color-text-muted)]">
            Thirteen upgrades over a decade. Each one coordinated across independent client teams,
            ratified through the ECIP process, and applied to Ethereum Classic mainnet without
            interruption. Olympia is next.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/olympia"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-green)] px-6 py-3 font-medium text-[var(--brand-green-foreground)] transition-all hover:bg-[var(--brand-green)]/90 hover:shadow-lg hover:shadow-[var(--brand-green)]/25"
            >
              Back to Olympia Hub
            </Link>
            <Link
              href="/core-devs/olympia"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--border-brand)] hover:bg-[var(--brand-green)]/5"
            >
              Core Devs Call Agenda
            </Link>
            <Link
              href="/olympia/name"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--border-brand)] hover:bg-[var(--brand-green)]/5"
            >
              Why the name Olympia
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

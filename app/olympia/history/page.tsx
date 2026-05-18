'use client'

import Link from 'next/link'

const threads: Array<{
  label: string
  heading: string
  color: string
  body: React.ReactNode[]
}> = [
  {
    label: 'Abandoned at Birth',
    heading: 'No treasury. No foundation. No premine.',
    color: 'var(--brand-green)',
    body: [
      "Ethereum Foundation raised $18.5M in a 2014 ICO and gave insiders a 16.7% premine. When Ethereum Classic emerged from the DAO Fork in July 2016, the Foundation held a windfall of duplicated ETC — and used it to declare ETC dead, discourage exchange listings, and reinforce ETH's position. ETC launched with nothing: no treasury, no foundation, no premine.",
      <>
        {'The conversation about sustainable funding began at the first public meetup. On '}
        <a
          href="https://www.slideshare.net/slideshow/ethereum-classic-18-august-2016/65152938"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
        >
          August 18, 2016
        </a>
        {' — one month after the DAO fork — ETC\'s earliest core contributors gathered in London. The agenda named two unsolved problems: '}
        <em>{"\"define and deploy an appropriate governance model\""}</em>
        {' and '}
        <em>{"\"define and deploy an appropriate fundraising plan.\""}</em>
        {' Both were listed as '}
        <strong>{"\"in discussion.\""}</strong>
        {' Arvicco coordinated the fragmented developer community. Igor Artamonov held the clients together as CTO. Avtar Sehra led strategy and governance work. By the '}
        <a
          href="https://www.slideshare.net/slideshow/ethereum-classic-shanghai-products-and-services/65652587"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
        >
          September 2016 Shanghai event
        </a>
        {', eight contributors were operating at ethereumclassic.org email addresses, including Elaine Ou and Cody Burns. These early contributors didn\'t wait for organizations to form. They articulated the question ETC would spend ten years answering: '}
        <em>how do you fund a decentralized network without compromising it?</em>
      </>,
      "In late 2016, the community pooled 17,313 ETC into a public donation address — ETC's first attempt at a shared financial resource. By 2018 it was secured in a 5-of-7 multisig. Today, nearly a decade later, it sits untouched. The will to self-fund was there from the beginning. The mechanism to distribute funds fairly was not.",
    ],
  },
  {
    label: 'What Was Already Being Built',
    heading: 'On-chain governance and funding were being prototyped in smart contracts within months.',
    color: 'var(--color-warning)',
    body: [
      <>
        {'The questions raised at the August 2016 meetup didn\'t sit. By September 2016, '}
        <a
          href="https://www.slideshare.net/slideshow/fundonomy-overview-and-roadmap/66598232"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
        >
          Fundonomy
        </a>
        {' — a platform for launching project funding contracts directly on the ETC blockchain — had been specified across a four-phase roadmap: smart contract escrows with milestone-based release, a decentralized reputation utility, regulated investment frameworks, and a final phase of full-stack decentralization. The architecture is recognizable today. Smart contract escrows. On-chain reputation. Milestone-triggered fund release. The vocabulary of Olympia\'s treasury and ECFP funding mechanics is the vocabulary of 2016.'}
      </>,
      <>
        {'The monetary policy work moved in parallel. At the '}
        <a
          href="https://www.slideshare.net/slideshow/ethereum-classic-and-crypto-monetary-policy-london-event/70126702"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
        >
          December 13, 2016 London event
        </a>
        {' hosted by Eversheds LLP, Matthew Mazur (Snaproll) publicly presented ECIP-1017 — the 5M20 deflationary emission schedule with a 210,700,000 ETC supply cap. The path-to-implementation timeline drafted at that event targeted block 5,000,000 for activation. The schedule slipped to December 2017\'s Gotham upgrade, but the policy is the one ETC has run on since. Predictable issuance, hard cap, fifth-of-the-supply era reductions — committed to publicly thirteen months before activation.'}
      </>,
      'Two patterns were established at the start: ETC would attempt to build on-chain primitives rather than depend on off-chain organizations, and it would commit to long-horizon technical policy in public before shipping it. Olympia operates on both.',
    ],
  },
  {
    label: 'Teams That Came and Went',
    heading: 'Four organizations stepped into the vacuum.',
    color: 'var(--color-purple)',
    body: [
      <>
        {'ETCDEV (2016–2018) was the first real development team. They shipped ECIP-1017\'s 5M20 monetary policy through the Gotham upgrade, built the first wallets, removed the difficulty bomb, and maintained the network through its formative years. At the '}
        <a
          href="https://www.slideshare.net/slideshow/etc-summit-18/115722695"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
        >
          2018 ETC Summit in Seoul
        </a>
        {', Igor Artamonov presented '}
        <strong>Orbita</strong>
        {' — a specification for sidechains and an ETC-native execution client with no upstream dependency on Ethereum\'s development cycle. Months later, the bear market ended ETCDEV. ETC-denominated reserves collapsed. No stablecoins, no hedging — no payroll. The best development team ETC ever had was gone within two years, not from lack of talent, but from lack of sustainable funding. The Orbita specification outlived them.'}
      </>,
      "Ethereum Classic Labs (2018–2021) stepped in after ETCDEV. DFG's corporate venture maintained Core-Geth, funded an incubator, and provided the institutional face exchanges required. Then quietly wound down. Corporate sponsors answer to their own priorities, not the chain's.",
      "IOHK (2017–2022) built Mantis, an ETC client in Scala. They returned during the 2020 51% attack crisis with ECIP-1097 — a checkpointing mechanism that would have subordinated PoW consensus to an external authority — and ECIP-1098, a miner tax treasury with pre-selected beneficiaries. The community rejected both. On exit, IOHK repurposed ETC's largest verified Twitter account (670K followers) into an Ergo promotional channel. Chris Mercer built Twitter-Together — a GitHub-controlled community management system — as the response. The lesson: outside sponsors with good resources can turn hostile when their proposals are rejected.",
      "ETC Cooperative (2017–present) is the one steward that endured. Founded by Ethereum Classic's earliest core contributors as a US 501(c)(3) non-profit, ETC Cooperative backed every hard fork, every client release, and every cross-client coordination effort since Atlantis. The Grayscale Ethereum Classic Trust (ETCG) — launched in May 2018, years before Bitcoin ETFs existed as a product category — became the primary institutional donor, with management fees from the trust's $100M+ AUM indirectly funding the majority of ETC core development and infrastructure for nearly a decade. By late 2024, those reserves were nearly exhausted. The model worked — as a stopgap. Nonprofits are not permanence.",
    ],
  },
  {
    label: 'Three Attempts, One Lesson',
    heading: 'Every rejection wrote the next design.',
    color: 'var(--color-info)',
    body: [
      'ETC tried twice to solve protocol-level funding before Olympia. The community rejected both — and those rejections wrote the exact specifications the third attempt satisfies.',
      <>
        <strong>ECIP-1051</strong>
        {' '}
        <em>(December 31, 2018 — Dexaran)</em>
        {': Split block rewards into a miner share plus two designated treasury addresses. Modeled directly on Callisto Network\'s treasury — a competing chain ETC had explicitly distanced itself from. '}
        <strong>Status: Rejected.</strong>
        {' Two fixed addresses with no permissionless access, no accountability, and no governance. The community established what it would not accept: centralized custody with no oversight.'}
      </>,
      <>
        <strong>ECIP-1098</strong>
        {' '}
        <em>(August 26, 2020 — Julian Mendiola, Nicolas Tallar, Brian McKenna, aligned with IOHK)</em>
        {': Redirect 20% of block rewards to a smart contract treasury — 90% split equally among three hardcoded client development teams, 10% to Gitcoin grants. '}
        <strong>Status: Withdrawn.</strong>
        {' A 20% miner tax. Pre-selected winners baked into the protocol. A governance design that explicitly picked three teams as permanent beneficiaries. The community established what else it would not accept: block reward capture and corporate-style allocation.'}
      </>,
      <>
        <strong>ECIP-1111 and ECIP-1112</strong>
        {' '}
        <em>(July 4, 2025 — Cody Burns, Chris Mercer)</em>
        {': The third attempt learned from both. No miner tax. No block reward capture. No pre-selected beneficiaries. Instead: redirect the basefee — the portion of every transaction fee that EIP-1559 sends to be burned on Ethereum — to a protocol treasury on ETC. '}
        <em>What Ethereum incinerates, ETC accumulates.</em>
        {' Miners are untouched. Block rewards are untouched. Any contributor can propose funding via ECFP. Any ETC account can participate. The treasury contract is immutable — no admin keys, no upgrade mechanisms, custody separated from governance by design.'}
      </>,
      "The third attempt is also the first to arrive with institutional alignment. ETC Cooperative — the 501(c)(3) steward that has backed every hard fork since Atlantis — and Grayscale, whose ETCG trust has held ETC in regulated institutional custody since May 2018, are aligned with the treasury and governance design. The proposal that finally satisfies the community's funding question is the same proposal the chain's longest-standing institutional partners support. The bridge from a decade of nonprofit and regulated-custody stewardship to permanent on-chain infrastructure is built in.",
      'Every principle ECIP-1051 and ECIP-1098 violated became a design constraint Olympia satisfies. The community said no twice, and meant it.',
    ],
  },
  {
    label: 'The Stewards Who Held the Line',
    heading: 'Continuity while the organizations rose and fell.',
    color: 'var(--color-warning)',
    body: [
      "Ethereum Classic has been stewarded since 2016 by a global network of volunteer contributors — maintaining the chain, coordinating upgrades, and building the ecosystem before any formal organization existed. When ETCDEV collapsed, when ETC Labs wound down, when IOHK turned hostile, the chain did not stop. The contributors kept showing up. No single institution owns that continuity. It belongs to everyone who ran a node, reviewed an ECIP, maintained a client, built a tool, or held the line in a community forum when the narrative was against them.",
      'The Olympia ECIPs were co-authored by Cody Burns and Chris Mercer — both core contributors since 2016, both present across the full arc this page describes.',
      <>
        {'Cody Burns has been a core contributor since 2016, named in the '}
        <a
          href="https://www.slideshare.net/slideshow/ethereum-classic-shanghai-products-and-services/65652587"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
        >
          September 2016 Shanghai contributor roster
        </a>
        {' and serving as technical lead across network upgrades since. He authored ECIP-1043 (Fixed DAG Limit, 2018), anticipating the GPU accessibility problem years before the 2020 attacks made it urgent — foresight that seeded Thanos (ECIP-1099, 2020), the ETChash transition that halved DAG growth and positioned ETC to absorb Ethereum\'s displaced Ethash hashrate at the Merge. At the 2022 Mystique upgrade, EIP-1559 was deliberately deferred — preserving the design space that the 2021 developer consensus had mapped to a treasury model, formalized four years later as Olympia. The Fukuii client he maintains is built on IOHK\'s abandoned Mantis codebase and realizes the ETC-native execution client ETCDEV specified as '}
        <a
          href="https://www.slideshare.net/slideshow/etc-summit-18/115722695"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
        >
          Orbita in 2018
        </a>
        {' before their collapse — lineage from two predecessor teams, delivered in one client. He co-authored Olympia ECIPs 1111 through 1114.'}
      </>,
      "Chris Mercer has been a core contributor since Ethereum Classic's first year, active across governance, client development, and the application layer. He built Twitter-Together after IOHK's exit — a GitHub-controlled community account system that prevented any single organization from capturing ETC's social infrastructure again. He proposed the Wyoming DAO LLC legal wrapper: the first legal entity in ETC history explicitly subordinate to an on-chain DAO. From 2022 to 2025 he deployed ETC's foundational DeFi stack: an AMM DEX, Classic USD (the first MiCA and GENIUS Act-compliant stablecoin on a proof-of-work network), a CLMM DEX, and a launchpad. He co-authored Olympia ECIPs 1111 through 1114, contributing on the governance and application layer architecture alongside Burns on the client and protocol work.",
      'They are part of the story, not the whole of it.',
      'In summer 2020, three 51% attacks hit ETC in rapid succession. No foundation rescue. No corporate intervention. The community coordinated emergency responses across time zones. The protocol fixes — Thanos (ECIP-1099) and MESS (ECIP-1100) — stopped the attacks. The lesson from 2020: the risks had been signaled years earlier by ECIP-1043, but underfunding had left them unaddressed until the cost of waiting became undeniable. Only sustainable protocol funding can make ETC proactive rather than reactive.',
      'The Olympia ECIPs (1111 through 1114) were published on July 4, 2025. For the first time, Ethereum Classic had a fully specified, non-inflationary, protocol-native funding proposal — one that had learned from every failure before it.',
    ],
  },
  {
    label: 'The EVM Thesis',
    heading: 'Ten years of conviction, settled by the market.',
    color: 'var(--brand-green)',
    body: [
      "For a decade, a consistent thread ran through Ethereum Classic community dialogue: ETC would not only survive — it would be vindicated by the adoption of the EVM stack. While Ethereum moved to proof-of-stake, ETC held its ground. The bet was that the EVM would become the dominant execution environment for global smart contracts, and that the only proof-of-work chain on that stack would eventually be recognized for what it is.",
      "That bet is settled. The EVM stack won. Wallets, tooling, libraries, compiler toolchains, developer knowledge — all converged on the EVM as the universal interface for programmable money. Every major L2, every alternative L1 that achieved real adoption, every institutional deployment ultimately spoke EVM. ETC's position — PoW consensus, EVM execution, no pre-mine, no ICO, decentralized governance — became more compelling with every passing year, not less.",
      'The implication is structural. There is exactly one proof-of-work chain with full EVM execution and a credible decade of operational history. No new chain can manufacture that profile. The combination is not reproducible by capital or by launch — it can only be preserved by a network that already has it.',
      'Olympia is the moment that ten-year thesis is realized in protocol infrastructure. ECIP-1121 delivers full Fusaka EVM alignment. ECIP-1111 captures basefee revenue. ECIP-1112 puts that revenue under on-chain governance. The EVM bet paid off. Olympia is the payout.',
      <>
        {'The administrative problems the founding contributors listed as "in discussion" at the '}
        <a
          href="https://www.slideshare.net/slideshow/ethereum-classic-18-august-2016/65152938"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
        >
          August 2016 London meetup
        </a>
        {' — governance model, fundraising plan — close as protocol mechanics in May 2026. The discussion ends. The system runs.'}
      </>,
    ],
  },
  {
    label: 'Second Decade',
    heading: 'The first decade of survival is over.',
    color: 'var(--color-purple)',
    body: [
      "ETC's first decade was defined by what it endured. The second begins from a different position entirely.",
      "The first decade was held together by ETC Cooperative's institutional commitment and by the Grayscale ETCG trust, which built the earliest regulated institutional access product for any proof-of-work smart contract network. That foundation reached far enough to deliver Olympia — protocol-funded development through an immutable treasury, multi-client architecture, on-chain governance, and a legal wrapper subordinate to that governance. The stopgap held long enough for the permanent infrastructure to be built.",
      <>
        {'What comes next belongs on a different page. '}
        <em>Why Olympia arrives on time</em>
        {' — the regulatory frameworks, the investment products, the recognition of proof-of-work as infrastructure — is covered in '}
        <Link
          href="/olympia/etymology"
          className="text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
        >
          Etymology & Lore
        </Link>
        {'. This page is the record of what was endured to get there.'}
      </>,
      'The first decade of survival is over. The second decade begins from ground that no longer needs to be defended.',
    ],
  },
]

const timeline = [
  { year: '2015', events: 'Olympic testnet · ETC genesis block (July 30) · EVM goes live' },
  { year: '2016', events: 'DAO Fork rejected · Code is Law · August 18 London meetup names governance and funding as open problems · September Shanghai event documents eight-contributor roster · Fundonomy four-phase roadmap published · 17,313 ETC community fund · December 13 London monetary policy event presents ECIP-1017' },
  { year: '2017', events: 'Diehard fork freezes difficulty bomb · ETC Cooperative founded · Grayscale ETCG launched (May) · Gotham upgrade ships ECIP-1017 5M20' },
  { year: '2018', events: 'ETCDEV presents Orbita specification at ETC Summit Seoul · ETCDEV collapse (bear market) · ECIP-1043 Fixed DAG Limit · ECIP-1051 rejected · Difficulty bomb permanently defused' },
  { year: '2019', events: 'Atlantis — Byzantium parity · ZK-proof precompiles' },
  { year: '2020', events: 'January 51% attack ($1.1M) · August 51% attacks · Thanos (ETChash + MESS) · ECIP-1098 withdrawn · Phoenix — Istanbul parity' },
  { year: '2021', events: 'Magneto — Berlin parity · 2021 treasury model developer consensus' },
  { year: '2022', events: 'Mystique — EIP-1559 deliberately deferred · Ethereum Merge · ETC absorbs Ethash hashrate' },
  { year: '2024', events: 'Spiral — Shanghai partial parity · ETC Coop reserves near exhausted' },
  { year: '2025', events: 'Olympia ECIPs published (July 4) · GENIUS Act signed (July 18) · Classic USD live as compliant stablecoin' },
  { year: '2026', events: 'Olympia upgrade activation — Fusaka EVM + EIP-1559 + DAO governance' },
]

export default function OlympiaHistoryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
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
              href="/olympia/etymology"
              className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--text-primary)]"
            >
              Etymology & Lore
            </Link>
          </div>

          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-4 py-1.5 text-sm font-medium text-[var(--brand-green)]">
              The Foundations of Olympia
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
            A Decade of{' '}
            <span className="bg-gradient-to-r from-[var(--brand-green)] to-[var(--color-success)] bg-clip-text text-transparent">
              Conviction
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold text-[var(--text-primary)]">
            Ethereum Classic was born without a treasury, without a foundation, without a premine.
            What grew from that — the teams that built and collapsed, the proposals twice rejected
            on principle, and the contributors who held the line across a decade of governance
            failures — became the structural foundations Olympia is built on.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-[var(--color-text-secondary)]">
            Ten years of Ethereum Classic — the teams that came and went, the proposals the
            community rejected, and how Olympia finally delivers what was sought since 2016.
          </p>
        </div>
      </section>

      {/* Thread sections */}
      {threads.map((thread, i) => (
        <section
          key={thread.label}
          className={`grid-overlay px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12 ${i % 2 === 1 ? 'border-y border-[var(--border)] bg-[var(--panel)]' : ''}`}
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
      <section className="grid-overlay border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
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
      <section className="grid-overlay border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
            Upgrade Heritage
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {[
              'Frontier',
              'Frontier Thawing',
              'Homestead',
              'Gas Reprice',
              'Die Hard',
              'Gotham',
              'Defuse Difficulty Bomb',
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
      <section className="grid-overlay border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
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
              href="/olympia/etymology"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--border-brand)] hover:bg-[var(--brand-green)]/5"
            >
              Etymology & Lore
            </Link>
          </div>
          <p className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
            Why Olympia arrives on time —{' '}
            <Link
              href="/olympia/etymology"
              className="text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
            >
              Etymology & Lore →
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

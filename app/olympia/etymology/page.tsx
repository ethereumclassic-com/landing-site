'use client'

import Link from 'next/link'

const heritage: Array<{ name: string; side: 'left' | 'right' }> = [
  { name: 'Frontier',               side: 'left'  },
  { name: 'Frontier Thawing',       side: 'right' },
  { name: 'Homestead',              side: 'left'  },
  { name: 'Gas Reprice',            side: 'right' },
  { name: 'Die Hard',               side: 'left'  },
  { name: 'Gotham',                 side: 'right' },
  { name: 'Defuse Difficulty Bomb', side: 'left'  },
  { name: 'Atlantis',               side: 'right' },
  { name: 'Agharta',                side: 'left'  },
  { name: 'Phoenix',                side: 'right' },
  { name: 'Thanos',                 side: 'left'  },
  { name: 'Magneto',                side: 'right' },
  { name: 'Mystique',               side: 'left'  },
  { name: 'Spiral',                 side: 'right' },
]

const threads: Array<{
  label: string
  heading: string
  color: string
  body: React.ReactNode[]
}> = [
  {
    label: 'Origin',
    heading: 'From Olympic to Olympia',
    color: 'var(--brand-green)',
    body: [
      'Olympic was the ninth and final Ethereum testnet — Ethereum 0.9, the last proving ground before Frontier launched on July 30, 2015. Application developers, data providers, and exchanges were incentivized to push it to its absolute limits: send maximum load, mine every block, find every vulnerability. It was not a soft launch. It was a deliberate stress test, designed to break things before they could break in production. The Ethereum chain that went live after Olympic is the direct ancestor of Ethereum Classic.',
      "Olympia is not the same name. That's the point. Olympic was the trial — the proving ground, the gauntlet. Olympia is the destination — the sacred site the trial pointed toward all along. One is the test. The other is what you build once you've passed it.",
      'The chain forged in the Olympic proving ground — preserved through the DAO fork, maintained through a decade without predictable resources — now arrives at Olympia. Not as a survivor. As the thing that persisted.',
    ],
  },
  {
    label: 'Mythology',
    heading: 'The common ground',
    color: 'var(--color-warning)',
    body: [
      <>
        {'In ancient Greece, Olympia was a sanctuary in the western Peloponnese — sacred ground dedicated to Zeus, held in common across rival city-states. Athens, Sparta, Corinth, Thebes — all sent competitors. None owned it. The site imposed the '}
        <em>ekecheiria</em>
        {' — the sacred Olympic truce — for the duration of the Panhellenic gathering, hostilities ceased across all of Greece. Olympia was neutral not because everyone agreed to make it neutral, but because it was sovereign to none. What endured at Olympia endured because no one owned it.'}
      </>,
      "This is the parallel that matters for ETC. After a decade of being defined by what it endured — the DAO fork, hash wars, deprecation, the constant pressure to justify its existence — Olympia marks the shift from a chain that survives to a chain with permanent infrastructure. A treasury funded by the protocol itself. Development it funds directly — no foundation required. Governance on-chain, open to any ETC account. A legal wrapper subordinate to on-chain governance, not above it. Permanent infrastructure on permanent ground.",
      'Ten years of conviction becomes shared infrastructure.',
    ],
  },
  {
    label: 'Lineage',
    heading: 'The upgrade naming tradition',
    color: 'var(--color-purple)',
    body: [
      "Ethereum Classic's network upgrades have always drawn from Marvel and comics: Phoenix, Magneto, Mystique, Spiral. The tradition is deliberate — these names carry meaning beyond the technical specs.",
      "Olympia closes the Marvel arc with the Eternals — Marvel's oldest cosmic beings, immortal and unkillable since the beginning of time. Beings who predate civilizations, who cannot be destroyed, who persist across every conflict and catastrophe.",
      "The alignment with ETC's own story is not accidental. The original chain that refused to die now enters its eternal phase — not because it won a fight, but because it was never going to end. Persistence as a property of the thing itself, not the outcome of a struggle.",
    ],
  },
  {
    label: 'Inheritance',
    heading: 'What Olympia receives',
    color: 'var(--color-info)',
    body: [
      'Olympia is a place of inheritance. The flame, the rites, the records — what was built by predecessors held in trust and passed forward across generations. The sanctuary endured because each generation accepted custody of what the last had built.',
      'ETC inherits more than code. It inherits the original social contract of Ethereum — immutability, neutrality, code is law — held intact through a decade when those principles were traded away elsewhere. Olympia is where that inheritance stops being a memory and becomes a working system: a treasury that funds the principles, clients that implement them, governance that defends them.',
      <>
        {'In '}
        <a
          href="https://www.slideshare.net/slideshow/ethereum-classic-18-august-2016/65152938"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
        >
          August 2016
        </a>
        {" — one month after the DAO fork — the earliest ETC core contributors held the chain's first public meetup in London. Sustainable funding and on-chain governance were named there as the two open administrative problems the network would need to solve. They remained the unfinished work of the next decade. Olympia is where that work concludes: protocol-funded development, on-chain governance, multi-client architecture realizing the ETC-native specifications drafted in 2018. The August 2016 question, answered in protocol."}
      </>,
    ],
  },
  {
    label: 'Positioning Ahead',
    heading: 'The work of stewards.',
    color: 'var(--color-purple)',
    body: [
      'Olympia is the latest move in a decade-long pattern.',
      "In December 2016, when no major chain had committed to a deflationary monetary policy, ECIP-1017 set ETC's 5M20 schedule — a Bitcoin-style hard cap of 210,700,000 ETC, committed publicly thirteen months before activation. The position held. ETC has run on that policy for nearly a decade, and the broader market has since validated capped issuance as the property that makes a digital asset a credible store of value.",
      "When Ethereum signaled its move to proof-of-stake, ETC's stewards committed harder to proof-of-work — and prepared infrastructure to absorb what Ethereum would leave behind. Thanos (ECIP-1099) shifted to ETChash in 2020, halving DAG growth so 3GB and 4GB GPUs would remain viable. The 51% attack risk had been signaled years earlier by ECIP-1043 (2018). When the Merge came in 2022, ETC was the only major proof-of-work chain with full EVM execution, ready to receive the displaced hashrate. The position was built before it was needed.",
      "The pattern repeats at every layer. EVM upgrades have always been absorbed on ETC's own schedule — observed on Ethereum, evaluated empirically, then incorporated through the ECIP process. Fusaka alignment in Olympia is not a rush to catch up. It is the next disciplined increment. Fukuii — the ETC-native execution client — realizes the Orbita specification ETCDEV drafted in 2018, on a Mantis codebase IOHK left behind. Two predecessor teams' work, preserved and shipped seven years after it was first specified.",
      'Grayscale launched the ETCG trust in May 2018 — years before Bitcoin ETFs existed as a product category — and routed management fees into ETC Cooperative, which has backed every hard fork since Atlantis. The institutional access infrastructure was in place before the regulatory frameworks that would later make it valuable. CLARITY, GENIUS, MiCA, FSA Green List, MAS, SFC — every framework finalized in the past two years lands on properties ETC already has. The positioning was complete before the regulators arrived.',
      "Olympia continues the pattern. The treasury captures the basefee — the value Ethereum was already burning, redirected on ETC to permanent on-chain funding. The Wyoming DAO LLC wrapper is filed because the statute now exists to receive it. The ETC Cooperative's stewardship and Grayscale's institutional bridge are aligned with the treasury design, ready to flow into permanent on-chain infrastructure. The PoW commitment hardens as nation-states begin treating proof-of-work as strategic energy infrastructure.",
      'This is what good stewardship looks like. Read the conditions ahead. Position the network before the conditions arrive. Let the rest of the market discover, years later, that the work was already done.',
      'The Eternals do not react. They position. Olympia is the latest move.',
    ],
  },
]

export default function OlympiaNamePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-4">
            <Link
              href="/olympia"
              className="text-sm text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
            >
              ← Olympia Hub
            </Link>
          </div>

          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-4 py-1.5 text-sm font-medium text-[var(--brand-green)]">
              Etymology & Lore
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
            Origin:{' '}
            <span className="bg-gradient-to-r from-[var(--brand-green)] to-[var(--color-success)] bg-clip-text text-transparent">
              Olympia
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold text-[var(--text-primary)]">
            The Olympia network upgrade takes its name from where Ethereum Classic has been
            pointing for a decade — and from one of the most enduring sites in the ancient world.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-[var(--color-text-secondary)]">
            {'The ninth and final Ethereum testnet was named '}
            <strong>Olympic</strong>
            {" — Ethereum 0.9, a gauntlet deliberately designed to break. Olympia is not the same name. It is where Olympic pointed all along: the Panhellenic sanctuary sovereign to none, the home of Marvel’s Eternals, the ground that endures because no one owns it. The chain forged in that proving ground — preserved through the DAO fork, maintained through a decade without predictable resources — now arrives at Olympia. Not as a survivor. As the thing that was never going to end."}
          </p>
        </div>
      </section>

      {/* Upgrade heritage */}
      <section className="grid-overlay border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
            Upgrade Heritage
          </p>

          <div className="mx-auto max-w-xl">
            <div className="relative">
              {/* Vertical center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--border)] via-[var(--brand-green)]/20 to-[var(--brand-green)]" />

              {/* Historical upgrades — alternating left/right */}
              {heritage.map((upgrade) => (
                <div key={upgrade.name} className="grid grid-cols-[1fr_auto_1fr] items-center py-1.5">
                  <div className="pr-4 text-right">
                    {upgrade.side === 'left' && (
                      <span className="font-mono text-xs text-[var(--color-text-muted)]">
                        {upgrade.name}
                      </span>
                    )}
                  </div>
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="h-2.5 w-2.5 rounded-full border border-[var(--border)] bg-[var(--panel)]" />
                  </div>
                  <div className="pl-4 text-left">
                    {upgrade.side === 'right' && (
                      <span className="font-mono text-xs text-[var(--color-text-muted)]">
                        {upgrade.name}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Olympia — terminal entry */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center py-2">
                <div />
                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className="h-4 w-4 rounded-full bg-[var(--brand-green)]"
                    style={{ boxShadow: '0 0 12px rgba(0, 255, 174, 0.4)' }}
                  />
                </div>
                <div className="pl-4 text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-xs font-semibold text-[var(--brand-green)]">
                      Olympia
                    </span>
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-green)] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-[var(--color-text-muted)]">
            ETC&apos;s network upgrades have always carried names that mean something beyond the
            technical. Olympia closes the Marvel arc with the Eternals — and opens the second decade.
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
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: thread.color }}>
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
          </div>
          <p className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
            The decade of history behind the name —{' '}
            <Link href="/olympia/history" className="text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80">
              A Decade of Conviction →
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

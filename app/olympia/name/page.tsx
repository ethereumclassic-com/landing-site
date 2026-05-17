'use client'

import Link from 'next/link'

const threads = [
  {
    label: 'Origin',
    heading: 'From Olympic to Olympia',
    color: 'var(--brand-green)',
    body: [
      'Olympic was the ninth and final Ethereum testnet — Ethereum 0.9, the last proving ground before Frontier launched on July 30, 2015. Application developers, data providers, and exchanges were incentivized to push it to its absolute limits: send maximum load, mine every block, find every vulnerability. It was not a soft launch. It was a deliberate stress test, designed to break things before they could break in production. The Ethereum chain that went live after Olympic is the direct ancestor of Ethereum Classic.',
      "Olympia is not the same name. That's the point. Olympic was the trial — the proving ground, the gauntlet. Olympia is the destination — the sacred site the trial pointed toward all along. One is the test. The other is what you build once you've passed it.",
      'The chain forged in the Olympic proving ground — preserved through the DAO fork, maintained through a decade without predictable resources — now arrives at Olympia. Not as a survivor. As an institution.',
    ],
  },
  {
    label: 'Mythology',
    heading: 'The sacred site',
    color: 'var(--color-warning)',
    body: [
      'In ancient Greece, Olympia was a sanctuary in the western Peloponnese — sacred ground dedicated to Zeus, set apart from the conflicts of mortals. It was a place of sovereignty and continuity, where the affairs of the gods were honored and where civic order was preserved across generations. The site held the Temple of Zeus and the great statue counted among the seven wonders of the ancient world. Authority resided there. It was not contested there.',
      "This is the parallel that matters for ETC. After a decade of being defined by what it endured — the DAO fork, hash wars, deprecation, the constant pressure to justify its existence — Olympia marks the shift from a chain that survives to a chain with a seat. A treasury. A funded development organization. A governance structure. A legal wrapper. Permanent infrastructure on permanent ground.",
      'Ten years of conviction becomes institution.',
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
      "A decade of ETC Cooperative stewardship, Grayscale's ETCG trust providing regulated institutional access since 2018, and a global volunteer network holding the line across every upgrade since 2016 — all of it passes forward into Olympia's on-chain governance. The custody chain is unbroken.",
    ],
  },
  {
    label: 'The Decade Ahead',
    heading: 'The world caught up',
    color: 'var(--brand-green)',
    body: [
      "ETC's first decade was spent proving it could persist. The second begins in a world that has finally caught up to what the chain was built for.",
      'Regulatory clarity has arrived. The GENIUS Act — signed July 18, 2025 — establishes the first U.S. federal framework for payment stablecoin issuance, and Classic USD is live on ETC mainnet as a compliant instrument. The CLARITY Act has passed the House, advancing the clearest jurisdictional framework yet for digital commodities — and ETC\'s profile fits natively: no pre-mine, no foundation-controlled treasury, no insider allocation, no securities-like issuance. MiCA is in force across all 27 EU member states. Japan\'s FSA Green List, Hong Kong\'s SFC regime, Singapore\'s MAS framework. The properties that made ETC unfashionable during the ICO era are the properties that make it legible to regulators now.',
      "Investment products are maturing. Spot Bitcoin ETFs cleared in 2024. Spot Ether ETFs followed. The Grayscale Ethereum Classic Trust has held ETC in regulated custody since May 2018 — predating most of the assets that have since converted to ETF structure, building the institutional track record that conversion requires. The infrastructure exists. The regulatory path is open.",
      "Proof of work is being recognized as infrastructure. What was dismissed as wasteful a decade ago is now understood as something else: dispatchable load, grid stabilization, monetizable stranded energy, and a hardware-anchored security model that nation-states are treating as strategic. Governments from Bhutan to El Salvador operate sovereign mining programs. The United States has shifted from regulatory hostility toward active encouragement — the Mined in America Act positions domestic PoW mining as a federal energy asset program. The energy argument has inverted. Proof of work is no longer the liability. It is the moat.",
    ],
  },
  {
    label: 'Arriving On Time',
    heading: 'Not late — on time',
    color: 'var(--color-purple)',
    body: [
      'Olympia is not a late upgrade. It is an on-time arrival.',
      'The treasury launches when regulatory frameworks finally support protocol-funded development. The DAO LLC wrapper is filed when Wyoming\'s statute exists to wrap it. The institutional bridge to regulated investment products forms when the conversion path is open. The proof-of-work commitment hardens when proof-of-work is being adopted as national infrastructure.',
      "A decade of conviction did not produce an upgrade that catches ETC up to the market. It produced an upgrade that meets the market exactly where it has now arrived. The longest gap between network upgrades in ETC's history ends with Olympia — not reluctantly, but with a plan, with multi-client architecture, protocol-funded development, EVM parity through Fusaka, and a rhythm of upgrades on ETC's own schedule.",
      "Maintenance mode ends here. Not with a return to a fight. With the establishment of ground that no longer needs to be defended.",
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
              The Name
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
            Why{' '}
            <span className="bg-gradient-to-r from-[var(--brand-green)] to-[var(--color-success)] bg-clip-text text-transparent">
              Olympia
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            From the proving ground to the arena — the name that carries ten years of Ethereum
            Classic history into its second decade.
          </p>
        </div>
      </section>

      {/* Thread sections */}
      {threads.map((thread, i) => (
        <section
          key={thread.label}
          className={`px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12 ${i % 2 === 1 ? 'border-y border-[var(--border)] bg-[var(--panel)]' : ''}`}
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

      {/* Upgrade heritage strip */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
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
            ETC&apos;s network upgrades have always carried names that mean something beyond the
            technical. Olympia closes the Marvel arc with the Eternals — and opens the second decade.
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

'use client'

import Link from 'next/link'

const threads = [
  {
    label: 'Origin',
    heading: 'From Olympic to Olympia',
    color: 'var(--brand-green)',
    body: [
      'Olympic was the ninth and final Ethereum testnet — Ethereum 0.9, the last proving ground before Frontier launched on July 30, 2015. Application developers, data providers, and exchanges were incentivized to push it to its absolute limits: send maximum load, mine every block, find every vulnerability. It was not a soft launch. It was a deliberate stress test designed to break things before they could break in production. The Ethereum chain that went live after Olympic is the direct ancestor of Ethereum Classic.',
      "Olympia is not the same name. That's the point. Olympic was the competition — the stress test, the trial by fire. Olympia is the arena — the sacred site in the Greek Peloponnese where the ancient Olympic Games were held every four years, where the best gathered at a fixed location to compete at the highest level. One is the event. The other is where the event is held.",
      "The chain forged in the Olympic proving ground — preserved through the DAO fork, maintained through a decade without predictable resources — now arrives at Olympia. Not to prove it can run. Not to survive another year. To compete.",
    ],
  },
  {
    label: 'Lineage',
    heading: 'The upgrade naming tradition',
    color: 'var(--color-purple)',
    body: [
      "Ethereum Classic's network upgrades have always drawn from Marvel and comics: Phoenix, Magneto, Mystique, Spiral. The tradition is deliberate — these names carry meaning beyond the technical specs.",
      "Olympia continues that lineage with the Eternals — Marvel's oldest cosmic beings, immortal and unkillable since the beginning of time. Beings who predate civilizations, who cannot be destroyed, who persist across every conflict and catastrophe. The alignment with ETC's own story is not accidental: the original chain that refused to die, now entering its eternal phase.",
    ],
  },
  {
    label: 'Mythology',
    heading: 'Home of the Eternals',
    color: 'var(--color-warning)',
    body: [
      'In Greek mythology, Olympia is the sacred site of the gods — timeless, sovereign, set apart from the conflicts of mortals. The seat of power where the highest beings convene.',
      'The ancient Olympic Games were held at Olympia, the city in the Peloponnese — not Mount Olympus. Every four years, competing city-states gathered at a fixed location for structured, prestigious competition. The Games were a civilizational institution: a recurring cycle, a demonstration of peak performance, a gathering that transcended the ordinary conflicts between states.',
      'Both meanings carry forward. ETC\'s Olympia is the seat where ten years of conviction becomes infrastructure. And it is the arena where ETC returns — not to survive, but to compete at the highest level.',
    ],
  },
  {
    label: 'Competitive Return',
    heading: 'Positioned to compete and win',
    color: 'var(--color-info)',
    body: [
      'Olympia marks the end of maintenance mode and the return to active competition. Not reacting to deprecation. Not surviving another year. Entering the arena positioned to win.',
      "The longest gap between network upgrades in ETC's history ends with Olympia. Multi-client architecture. Protocol-funded development. EVM parity through Fusaka. These are not defensive measures — they are offensive positioning. ETC is not leaving maintenance mode reluctantly. It is leaving it with a plan.",
      'The competitive spirit of the Olympic Games — the best, prepared, competing on a fixed cycle — is exactly the posture Olympia establishes. A rhythm of upgrades. A funded development organization. Clients that evolve on ETC\'s own schedule.',
    ],
  },
]

export default function OlympiaNamePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-green-subtle)] blur-[100px]" />
        </div>

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
            A name that carries ten years of Ethereum Classic history — from the pre-genesis
            testnet to the upgrade that opens the second decade.
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
            ETC&apos;s network upgrades have always carried names that mean something beyond the technical.
            Olympia closes the Marvel arc with the Eternals — and opens the second decade.
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

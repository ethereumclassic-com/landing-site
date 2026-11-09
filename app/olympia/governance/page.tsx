import Link from 'next/link'
import { FadeIn, SectionDivider } from '@/app/components/ui'
import { ecipUrl } from '@/lib/olympia-ecips'
import GovernanceStageComponent from '../components/GovernanceStage'
import OlympiaStatusBadge from '../components/OlympiaStatusBadge'
import { olympiaLinks } from '../data/olympia'

/**
 * Olympia DAO as ECIP-1113 to ECIP-1119 specify it, read from the ECIPs working copy when written. The
 * ECIPs are drafts, so the page is in proposal voice throughout, and it describes them at the level of
 * what each would do rather than restating their mechanics.
 */

const CATEGORIES = [
  { name: 'Core Development', body: 'Client implementations and their maintenance, security patching and CVE response, release engineering and specification work.' },
  { name: 'Critical Infrastructure', body: 'Public RPC endpoints, block explorers, indexers and the services integrations depend on.' },
  { name: 'Network Security', body: 'Security review and audit, responsible disclosure, hashrate incentives, and bringing in contributors to replace departing maintainers.' },
  { name: 'Ecosystem Growth', body: 'Applications, tooling, integrations, documentation and the work that brings users and developers to the network.' },
  { name: 'Other', body: 'Anything the four above do not cover. A proposal is not disqualified by falling here.' },
]

const SECTIONS = [
  {
    ecip: 1113,
    heading: 'Membership: CoreNFT',
    body: [
      'Voting power would come from CoreNFT and nothing else: a soulbound token carrying one vote per member, which cannot be transferred, sold or delegated. There would be no fungible governance token, so no market in votes could form.',
      'The first members would be those who verifiably contributed to the Olympia ECIPs or their reference client implementations by a published cutoff date. After that, contributors would apply and Olympia DAO would vote on each admission, with no admissions committee and no account that could admit anyone alone. A member could resign at any time, and Olympia DAO could revoke a seat by the same kind of vote.',
    ],
  },
  {
    ecip: 1114,
    heading: 'Funding proposals',
    body: [
      'An Olympia Funding Proposal would be an ordinary Governor proposal that spends from the Treasury: a recipient, an amount, and a description written to a shared convention. ECIP-1114 adds no contract: no registry, no submission contract and no gate. The Olympia DAO dashboard would build the same proposal any author could build alone.',
      'Each proposal would declare one of five categories, which describes what it would fund and restricts nothing.',
    ],
    categories: true,
  },
  {
    ecip: 1118,
    heading: 'Funding in tranches',
    body: [
      'A larger commitment could be paid as a milestone program: each tranche its own funding proposal, decided on the work delivered for it. Nothing would be held between tranches, so a program that stops delivering simply stops being funded.',
    ],
  },
  {
    ecip: 1117,
    heading: 'Ecosystem Growth DAOs',
    body: [
      'Core Contributors could establish bodies scoped to growing what is built on Ethereum Classic, open to anyone without membership. Olympia DAO would decide, one season at a time and in the same vote as any other spending, whether to seed one, with how much, and within what theme. Once seeded, the body\'s own published model chooses among the destinations the seeding proposal named; a conditional market is one model it may use, and a published allocation strategy or a modular vote are others.',
      'Client development, network security and critical infrastructure would never be such a body\'s mandate. They stay with Olympia DAO, decided by proposals voted directly in its Governor.',
    ],
  },
  {
    ecip: 1119,
    heading: 'Sanctions screening',
    body: [
      'Before a Core Contributor votes on a funding proposal, the interface they vote through would screen its recipients against a sanctions list and show the result, offering no way to vote in favor of paying a designated address. Screening would be a lookup in the interface: no contract, no oracle and no role, and nothing stored on chain.',
    ],
  },
]

const WOULD_NOT = [
  'Decide protocol changes: those remain with the ECIP process, ECIP-1000.',
  'Hold an admin key, a privileged multisig or a committee.',
  'Let an off-chain entity approve or veto a governance action.',
  'Read a proposal\'s description in any contract: identifiers and metadata are for people, not code.',
]

export default function GovernancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20 lg:px-12">
        <div className="relative mx-auto max-w-4xl">
          <Link href="/olympia" className="text-sm text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80">
            ← Olympia Hub
          </Link>
          <div className="mt-4">
            <OlympiaStatusBadge />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Olympia DAO Governance
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Under ECIP-1113, Olympia DAO would be a Governor built from unmodified OpenZeppelin modules, the
            Timelock behind the Treasury, and CoreNFT, the membership token that voting power is read from. It
            would be the only way to spend the Treasury&rsquo;s balance.
          </p>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <GovernanceStageComponent />
        </div>
      </section>

      {SECTIONS.map((s) => (
        <div key={s.heading}>
          <SectionDivider />
          <section className="px-6 py-14 md:px-10 lg:px-12">
            <div className="mx-auto max-w-3xl">
              <FadeIn>
                <a
                  href={ecipUrl(s.ecip)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[var(--brand-green)] hover:underline"
                >
                  ECIP-{s.ecip}
                </a>
                <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)]">{s.heading}</h2>
                <div className="mt-4 space-y-4 text-[var(--color-text-muted)]">
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {s.categories && (
                  <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                    {CATEGORIES.map((c) => (
                      <div key={c.name} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
                        <dt className="text-sm font-semibold text-[var(--text-primary)]">{c.name}</dt>
                        <dd className="mt-1 text-sm text-[var(--color-text-muted)]">{c.body}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </FadeIn>
            </div>
          </section>
        </div>
      ))}

      <SectionDivider />

      {/* What it would not do */}
      <section className="px-6 py-14 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">What Olympia DAO Would Not Do</h2>
            <ul className="mt-4 space-y-3 text-[var(--color-text-muted)]">
              {WOULD_NOT.map((w) => (
                <li key={w} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-green)]" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 text-sm leading-relaxed text-[var(--color-text-muted)]">
              ECIP-1114 names Ethereum Classic DAO LLC as the legal wrapper Olympia DAO would use for the
              off-chain acts an on-chain organization cannot perform, such as signing an audit engagement Olympia
              DAO has voted to fund. Ethereum Classic DAO would be downstream of Olympia DAO in authority, and it
              holds no role in Olympia until Olympia DAO is operating.{' '}
              <Link href="/olympia" className="font-medium text-[var(--brand-green)] hover:underline">
                Ethereum Classic DAO and Olympia, in full →
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Olympia's sites */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
          {[
            { href: olympiaLinks.olympiaDAO, label: 'olympiadao.org' },
            { href: olympiaLinks.governanceApp, label: 'The governance app' },
            { href: olympiaLinks.treasurySite, label: 'The treasury site' },
            { href: olympiaLinks.ethereumClassicDAO, label: 'Ethereum Classic DAO' },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--border-brand)] hover:bg-[var(--brand-green)]/5"
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

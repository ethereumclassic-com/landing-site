import Link from 'next/link'
import { FadeIn, SectionDivider } from '@/app/components/ui'
import {
  CORE_GETH_DOCS_URL,
  CORE_GETH_LATEST_RELEASE_URL,
  CORE_GETH_MOVE_GUIDE_PATH,
  CORE_GETH_RECOMMENDED_LINE,
  CORE_GETH_MIGRATE_GUIDE_URL,
} from '@/lib/core-geth'
import { FUKUII_DOCS_URL, FUKUII_LATEST_RELEASE_URL, FUKUII_STATUS } from '@/lib/fukuii'
import { ecipUrl } from '@/lib/olympia-ecips'
import EipDispositions from '../components/EipDispositions'
import ForkTimeline from '../components/ForkTimeline'
import OlympiaCountdown from '../components/OlympiaCountdown'
import OlympiaStatusBadge from '../components/OlympiaStatusBadge'
import { operatorFaqs } from '../data/olympia'

/**
 * Olympia for a node operator: what the proposal would change at the activation block, what to run
 * until a client implements it, and every EIP ECIP-1121 classifies. Readiness itself is what each
 * client's maintainers publish, so this page links them rather than predicting a release.
 */
const atTheBlock = [
  {
    ecip: 1111,
    body: 'EIP-1559 and EIP-3198 would activate. Each transaction would pay a base fee, never below a permanent minimum, credited to the Sovereignty Vault address inside that transaction\'s own state transition. The miner would keep the priority fee, and block rewards would not change. Legacy and access-list transactions would stay valid.',
  },
  {
    ecip: 1121,
    body: 'The core EIPs ECIP-1121 adopts from Dencun, Pectra, Fusaka and Glamsterdam would take effect, and a client that omitted one would fork at that block. Its networking and interface EIPs are not tied to the block: peers negotiate protocol versions, and a client may add the JSON-RPC method before or after it.',
  },
]

const beforeTheBlock = [
  {
    ecip: 1112,
    body: 'The Treasury at the Sovereignty Vault address would be deployed and published, with its source, its upgrade authority and its role table, before the activation block is scheduled. Clients would carry that address in chain configuration.',
  },
  {
    ecip: 1113,
    body: 'Olympia DAO\'s contracts would be deployed beforehand too, then reviewed and rehearsed on Mordor while the Treasury still holds nothing. None of them would change what a node validates.',
  },
]

const clientRows = [
  {
    name: 'Core-Geth',
    role: 'Recommended',
    run: `Run its ${CORE_GETH_RECOMMENDED_LINE} line. A node on a v1.12 release moves to the ${CORE_GETH_RECOMMENDED_LINE} line first and rotates its P2P node key, which is required because CVE-2026-26315 leaks bits of that key.`,
    links: [
      { label: 'Move a v1.12 node', href: CORE_GETH_MIGRATE_GUIDE_URL },
      { label: 'Walkthrough with recordings', href: CORE_GETH_MOVE_GUIDE_PATH },
      { label: 'Latest release', href: CORE_GETH_LATEST_RELEASE_URL },
      { label: 'Documentation', href: CORE_GETH_DOCS_URL },
    ],
  },
  {
    name: 'Fukuii',
    role: `Alternative · ${FUKUII_STATUS}`,
    run: 'Its maintainers mark it alpha, not yet recommended for production-critical workloads: an alternative to try beside Core-Geth.',
    links: [
      { label: 'Latest release', href: FUKUII_LATEST_RELEASE_URL },
      { label: 'Documentation', href: FUKUII_DOCS_URL },
    ],
  },
]

function EcipItems({ items }: { items: { ecip: number; body: string }[] }) {
  return (
    <ul className="mt-4 space-y-4">
      {items.map((i) => (
        <li key={i.ecip} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
          <a
            href={ecipUrl(i.ecip)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[var(--brand-green)] hover:underline"
          >
            ECIP-{i.ecip}
          </a>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{i.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default function UpgradeGuidePage() {
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
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
            Olympia for Node Operators
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            What the proposed upgrade would change for a node, what to run until a client implements it, and
            every EIP ECIP-1121 classifies. No released client implements Olympia.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <OlympiaCountdown variant="banner" />
        </div>
      </section>

      <SectionDivider />

      {/* What would change */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">What Would Change at the Activation Block</h2>
            <EcipItems items={atTheBlock} />
            <h2 className="mt-12 text-2xl font-bold text-[var(--text-primary)]">What Would Happen Before It</h2>
            <EcipItems items={beforeTheBlock} />
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Client readiness */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">What to Run Now</h2>
            <p className="mt-2 max-w-3xl text-[var(--color-text-muted)]">
              Until a client release implements Olympia, run a current release. Each client&rsquo;s Olympia readiness is
              what its maintainers publish, and{' '}
              <Link href="/olympia/clients" className="font-medium text-[var(--brand-green)] hover:underline">
                client readiness
              </Link>{' '}
              lists each one.
            </p>
            <div className="mt-6 space-y-4">
              {clientRows.map((c) => (
                <div key={c.name} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                  <p className="font-semibold text-[var(--text-primary)]">
                    {c.name} <span className="ml-2 text-xs font-normal text-[var(--color-text-muted)]">{c.role}</span>
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{c.run}</p>
                  <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                    {c.links.map((l) =>
                      l.href.startsWith('/') ? (
                        <Link key={l.href} href={l.href} className="text-[var(--brand-green)] hover:underline">
                          {l.label} →
                        </Link>
                      ) : (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-[var(--brand-green)] hover:underline">
                          {l.label} →
                        </a>
                      ),
                    )}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm">
              <Link href="/build/clients" className="font-medium text-[var(--brand-green)] hover:underline">
                Compare and run the clients →
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Every EIP */}
      <section id="eips" className="scroll-mt-24 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Every EIP ECIP-1121 Classifies</h2>
            <p className="mt-2 max-w-3xl text-[var(--color-text-muted)]">
              The upstream upgrades Olympia would align with, then each EIP under the disposition ECIP-1121
              gives it.
            </p>
            <div className="mt-8">
              <ForkTimeline />
            </div>
            <div className="mt-12">
              <EipDispositions />
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Operator FAQ */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Questions From Node Operators</h2>
          <div className="mt-6 divide-y divide-[var(--border)]">
            {operatorFaqs.map((item) => (
              <details key={item.question} className="group py-5" open>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <span className="text-sm font-semibold text-[var(--text-primary)]">{item.question}</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm">
            <Link href="/olympia" className="font-medium text-[var(--brand-green)] hover:underline">
              Questions about the proposal itself →
            </Link>
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: operatorFaqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />
    </div>
  )
}

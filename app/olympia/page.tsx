import Link from 'next/link'
import { FAQAccordion } from '@/app/components/sections/FAQAccordion'
import { FadeIn, SectionDivider } from '@/app/components/ui'
import { ecipUrl } from '@/lib/olympia-ecips'
import ActivationOrder from './components/ActivationOrder'
import EcipSet from './components/EcipSet'
import ForkTimeline from './components/ForkTimeline'
import GovernanceStageComponent from './components/GovernanceStage'
import LegalWrapper from './components/LegalWrapper'
import OlympiaCountdown from './components/OlympiaCountdown'
import OlympiaStatusBadge from './components/OlympiaStatusBadge'
import { faqs, olympiaLinks, OLYMPIA_TARGET } from './data/olympia'

const ECIPS_REPO_URL = 'https://github.com/ethereumclassic/ECIPs'

const changes = [
  {
    label: 'EVM alignment (ECIP-1121)',
    body: 'Would advance the execution layer through Dencun, Pectra and Fusaka, and carry that work into Glamsterdam.',
  },
  {
    label: 'A base fee market (ECIP-1111)',
    body: 'EIP-1559 and EIP-3198, with the base fee credited to a permanent address rather than destroyed, as it is on Ethereum. Block rewards and priority-fee tips would be unchanged.',
  },
  {
    label: 'A treasury and its governance (ECIP-1112, ECIP-1113)',
    body: 'The Sovereignty Vault, the address where the base fee would accumulate, and Olympia DAO, the only way to spend it.',
  },
]

const sites = [
  { href: olympiaLinks.olympiaDAO, name: 'olympiadao.org', body: 'Olympia DAO’s own site.' },
  { href: olympiaLinks.governanceApp, name: 'app.olympiadao.org', body: 'The governance app, where proposals would be submitted and voted on once Olympia DAO is operating.' },
  { href: olympiaLinks.treasurySite, name: 'olympiatreasury.org', body: 'The treasury site.' },
  { href: olympiaLinks.olympiaGitHub, name: 'github.com/olympiadao', body: 'The source of the governance contracts.' },
  { href: olympiaLinks.ethereumClassicDAO, name: 'ethereumclassicdao.org', body: 'Ethereum Classic DAO, which maintains and funds Ethereum Classic’s public goods today as their funder of last resort.' },
]

const pages = [
  { href: '/olympia/upgrade', title: 'For Node Operators', body: 'What Olympia would ask of a node, and every EIP ECIP-1121 classifies.' },
  { href: '/olympia/treasury', title: 'The Treasury', body: 'The Sovereignty Vault address, how the base fee would reach it, and who could spend it.' },
  { href: '/olympia/governance', title: 'Governance', body: 'Olympia DAO, funding proposals, and the Ecosystem Growth DAOs it could fund.' },
  { href: '/olympia/miners', title: 'Miners and Fees', body: 'What the base fee would change for miners, and what it would not.' },
  { href: '/olympia/clients', title: 'Client Readiness', body: 'What each client’s maintainers publish about Olympia.' },
  { href: '/olympia/history', title: 'A Decade of Conviction', body: 'The funding history that led to the proposal.' },
  { href: '/olympia/etymology', title: 'Etymology and Lore', body: 'Where the name comes from.' },
]

export default function OlympiaHubPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20 lg:px-12">
        <div className="relative mx-auto max-w-4xl">
          <OlympiaStatusBadge />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
            The <span className="text-[var(--brand-green)]">Olympia</span> Upgrade
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Olympia is a proposed upgrade to Ethereum Classic, {OLYMPIA_TARGET}. Its ECIPs are drafts, and{' '}
            <a
              href={ECIPS_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-[var(--text-primary)]"
            >
              the ECIPs repository
            </a>{' '}
            holds their current text.
          </p>
          <ul className="mt-6 max-w-2xl space-y-3 text-sm text-[var(--color-text-muted)]">
            {changes.map((c) => (
              <li key={c.label} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-green)]" />
                <span>
                  <span className="font-semibold text-[var(--text-primary)]">{c.label}:</span> {c.body}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
            <a href="#activation" className="text-[var(--brand-green)] transition hover:text-[var(--text-primary)]">
              Activation ↓
            </a>
            <Link href="/olympia/treasury" className="text-[var(--brand-green)] transition hover:text-[var(--text-primary)]">
              The Treasury →
            </Link>
            <Link href="/olympia/governance" className="text-[var(--brand-green)] transition hover:text-[var(--text-primary)]">
              Governance →
            </Link>
            <Link href="/olympia/upgrade" className="text-[var(--brand-green)] transition hover:text-[var(--text-primary)]">
              For node operators →
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <OlympiaCountdown variant="hero" />
        </div>
      </section>

      <SectionDivider />

      {/* The ECIPs */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">The ECIPs</h2>
            <p className="mt-2 max-w-3xl text-[var(--color-text-muted)]">
              Each Olympia ECIP under its own title, grouped by when it would take effect.
            </p>
            <div className="mt-8">
              <EcipSet />
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Activation */}
      <section id="activation" className="scroll-mt-24 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-4 text-2xl font-bold text-[var(--text-primary)]">Activation</h2>
            <ActivationOrder />
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* EVM alignment */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <a
              href={ecipUrl(1121)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] px-2.5 py-0.5 font-mono text-[10px] text-[var(--brand-green)] transition-opacity hover:opacity-80"
            >
              ECIP-1121
            </a>
            <h2 className="mt-3 text-2xl font-bold text-[var(--text-primary)]">EVM Alignment</h2>
            <p className="mt-2 max-w-3xl text-[var(--color-text-muted)]">
              Spiral, in 2024, brought Ethereum Classic&rsquo;s execution layer up to Ethereum&rsquo;s Shanghai upgrade, except for the Proof-of-Stake changes and the London fee market, which Mystique left out. ECIP-1111 would add that fee market, and ECIP-1121 classifies every execution-layer EIP of the four Ethereum upgrades since Shanghai, giving each a disposition.
            </p>
            <div className="mt-8">
              <ForkTimeline />
            </div>
            <div className="mt-8 max-w-3xl rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green)]/5 p-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Tools that assume EIP-1559 need an Ethereum Classic path of their own today. ECIP-1111 records that Foundry sends a type-2 (EIP-1559) transaction to any chain missing from its list of legacy chains, Ethereum Classic included, so a deployment here passes <code className="font-mono">--legacy</code>. Activating EIP-1559 would make that workaround unnecessary.
            </div>
            <p className="mt-6 text-sm">
              <Link href="/olympia/upgrade#eips" className="font-medium text-[var(--brand-green)] hover:underline">
                Every EIP ECIP-1121 classifies, by disposition →
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Treasury and governance */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">The Treasury and Olympia DAO</h2>
            <p className="mt-2 max-w-3xl text-[var(--color-text-muted)]">
              The base fee would accumulate at one permanent address, the Sovereignty Vault, where an unmodified OpenZeppelin proxy would hold it as the Olympia Treasury (ECIP-1112, ECIP-1113). Only Olympia DAO could spend that balance, through a funding proposal its members vote on, queued in the Timelock and executed after a public delay. There would be no admin key, multisig or committee.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
              <Link href="/olympia/treasury" className="text-[var(--brand-green)] hover:underline">
                The Treasury →
              </Link>
              <Link href="/olympia/governance" className="text-[var(--brand-green)] hover:underline">
                Governance →
              </Link>
            </div>
          </FadeIn>
          <div className="mt-12">
            <GovernanceStageComponent />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Ethereum Classic DAO and Olympia, as ethereumclassicdao.org states it */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <LegalWrapper />
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Olympia's sites */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Olympia&rsquo;s Sites</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {sites.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:border-[var(--brand-green)]/40"
                >
                  <p className="font-mono text-sm text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">{s.name}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{s.body}</p>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* More on Olympia */}
      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">More on Olympia</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:border-[var(--brand-green)]/40"
                >
                  <p className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">{p.title}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{p.body}</p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion title="Frequently Asked Questions" subtitle="The Olympia proposal" items={faqs} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
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

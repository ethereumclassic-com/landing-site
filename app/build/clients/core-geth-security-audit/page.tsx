import Link from 'next/link'

import { SectionDivider } from '@/app/components/ui/SectionDivider'
import { CORE_GETH_DOCS_URL, CORE_GETH_REPO_URL, CORE_GETH_SECURITY_URL, coregethHref } from '@/lib/core-geth'
import {
  ADVISORIES_URL,
  AUDIT_DOCS,
  AUDITS,
  DISCLOSURE,
  DISCOVERY_FLAG_STEP,
  EXPOSED_LINE,
  NETWORK_RUNNING,
  RECOMMENDED_LINE,
  RECORDS,
  RELEASE_FIXES,
  RELEASE_TIMELINE,
  REPORT_DOCS,
  SECURITY_EMAIL,
  SECURITY_POLICY_URL,
  UPGRADE_ANCHOR,
  type ReleaseFact,
} from '@/lib/core-geth-record'
import { RecordText } from './RecordText'

/**
 * Core-Geth's security record, shown the way coregeth.com/security shows it: the three records,
 * every release since the gap, what the network is running, and the audits and reports behind
 * each claim. Every sentence and figure is lib/core-geth-record.ts, the mirror of coregeth.com's
 * own data, so this page and coregeth.com state the same facts. The audits themselves stay on
 * coregeth.com, which publishes them in full.
 */

const TITLE = `Core-Geth ${EXPOSED_LINE} Security Audits and the ${RECOMMENDED_LINE} Upgrade`

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: TITLE,
  description: `The 2026 security audits of Core-Geth ${EXPOSED_LINE}: the CVEs found, what was used against Core-Geth ${EXPOSED_LINE} bootnodes, and what upgrading to ${RECOMMENDED_LINE} fixes.`,
  datePublished: '2026-03-01',
  dateModified: '2026-11-05',
  author: { '@type': 'Organization', name: 'Ethereum Classic core developers', url: 'https://github.com/ethereumclassic' },
  publisher: { '@type': 'Organization', name: 'Ethereum Classic', url: 'https://ethereumclassic.com' },
  isBasedOn: CORE_GETH_SECURITY_URL,
  about: [
    {
      '@type': ['SoftwareApplication', 'SoftwareSourceCode'],
      name: 'Core-Geth',
      url: coregethHref('/'),
      sameAs: [CORE_GETH_REPO_URL, CORE_GETH_DOCS_URL],
      codeRepository: CORE_GETH_REPO_URL,
      programmingLanguage: 'Go',
      applicationCategory: 'DeveloperApplication',
    },
  ],
}

// The census figures, computed as coregeth.com computes them, so a tile cannot disagree with the table.
const nodesWhere = (status: 'vulnerable' | 'recommended') =>
  NETWORK_RUNNING.rows.filter((row) => row.status === status).reduce((sum, row) => sum + row.nodes, 0)
const vulnerableNodes = nodesWhere('vulnerable')
const recommendedNodes = nodesWhere('recommended')
const percent = (nodes: number) => `${((nodes / NETWORK_RUNNING.total) * 100).toFixed(1)}%`
const SPELLED = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const spell = (count: number) => SPELLED[count] ?? String(count)
const auditsAndReports = `${spell(AUDIT_DOCS.length)} audits covering the ${EXPOSED_LINE} line and the work that replaced it, and ${spell(REPORT_DOCS.length)} ${RECOMMENDED_LINE} release ${REPORT_DOCS.length === 1 ? 'report' : 'reports'}`

const STATS = [
  {
    label: 'Nodes measured',
    value: NETWORK_RUNNING.total.toLocaleString('en-US'),
    caption: `Core-Geth nodes seen on ${NETWORK_RUNNING.measured.text}, counted by ${NETWORK_RUNNING.source.label}.`,
    tone: 'text-[var(--text-primary)]',
  },
  {
    label: 'On a vulnerable release',
    value: percent(vulnerableNodes),
    caption: `${vulnerableNodes} nodes running a release with a client CVE still open.`,
    tone: 'text-[var(--color-error)]',
  },
  {
    label: `On the ${RECOMMENDED_LINE} line`,
    value: percent(recommendedNodes),
    caption: `${recommendedNodes} nodes running the line with every client CVE patched.`,
    tone: 'text-[var(--color-primary)]',
  },
  {
    label: 'Audits and reports',
    value: String(AUDITS.length),
    caption: `${auditsAndReports[0]?.toUpperCase()}${auditsAndReports.slice(1)}.`,
    tone: 'text-[var(--text-primary)]',
  },
]

/**
 * The Vulnerability Summary of the March 2026 audit, row for row, as coregeth.com publishes it.
 * Each identifier links where the audit links it.
 */
const VULNERABILITIES = [
  { id: 'CVE-2025-24883', href: 'https://github.com/ethereum/go-ethereum/commit/159fb1a1d', severity: 'High', component: 'crypto: secp256k1 key deserialization', previous: 'Backported in v1.12.22', current: 'Patched' },
  { id: 'CVE-2026-22862', href: 'https://github.com/ethereum/go-ethereum/commit/638741b08', severity: 'High', component: 'crypto/ecies: ECIES decrypt length check', previous: 'Backported in v1.12.21', current: 'Patched' },
  { id: 'CVE-2026-26315', href: 'https://github.com/ethereum/go-ethereum/commit/46bee92f9', severity: 'Medium', component: 'crypto/ecies + secp256k1: ECIES GenerateShared / IsOnCurve', previous: 'Backported in v1.12.21', current: 'Patched' },
  { id: 'CVE-2026-26314', href: 'https://github.com/ethereum/go-ethereum/commit/895a8597c', severity: 'High', component: 'crypto/secp256k1: coordinate field boundary bypass', previous: 'Backported in v1.12.22', current: 'Patched' },
  { id: 'CVE-2026-22868', href: 'https://github.com/ethereum/go-ethereum/commit/fdfd1235a', severity: 'Medium', component: 'txpool / P2P: KZG DoS (blob/KZG proof verification)', previous: 'Declared N/A to ETC ¹', current: 'Patched (peer disconnect on invalid proof)' },
  { id: 'CVE-2026-26313', href: 'https://github.com/ethereum/go-ethereum/pull/33835', severity: 'High', component: 'P2P: RLP item count memory exhaustion', previous: 'Mitigated in v1.12.22 ²', current: 'Patched' },
  { id: 'GraphQL depth', href: 'https://github.com/graph-gophers/graphql-go/security/advisories/GHSA-mh3m-8c74-74xh', severity: 'Medium', component: 'RPC: unbounded query nesting DoS', previous: 'Not addressed', current: 'Patched' },
]

const VULNERABILITY_NOTES = [
  `¹ \`etclabscore/core-geth\` declared CVE-2026-22868 not applicable to Ethereum Classic, because Ethereum Classic does not support EIP-4844 blob transactions. That holds for the Ethereum Classic network, but the \`v1.12.x\` line also ships the Ethereum mainnet, Sepolia and Holesky configurations, where EIP-4844 and the KZG path are active, so the finding applies to a supported configuration of the client. The \`v1.13.0\` patch implements the go-ethereum fix and refuses those three networks, with \`--mainnet\` selecting Ethereum Classic.`,
  `² Both mitigations prevent the out-of-memory crash by refusing to allocate per declared item, and neither avoids scanning the payload, so a peer can still spend CPU proportional to message size on a message that will be rejected. The bound comes from a static item ceiling in \`v1.12.22\` and from the pending request in \`v1.13.0\`.`,
  `Read the \`etclabscore/core-geth\` column by release, not as a single verdict: "Backported in v1.12.22" means the fix is present in \`v1.12.22\` and later. No \`v1.12.x\` release, \`v1.12.23\` included, closes every finding; the \`${RECOMMENDED_LINE}\` line does. [The August 2026 follow-up](/security/2026-08-core-geth-v1.12-security-follow-up/#status-by-release) gives the full per-release matrix.`,
]

const SEVERITY_TONE: Record<string, string> = {
  High: 'bg-[var(--color-error)]/12 text-[var(--color-error)]',
  Medium: 'bg-[var(--color-warning)]/12 text-[var(--color-warning)]',
}

const FACT_TONE: Record<ReleaseFact['tone'], { label: string; rule: string }> = {
  fixed: { label: 'text-[var(--color-primary)]', rule: 'border-[var(--color-primary)]' },
  vulnerable: { label: 'text-[var(--color-error)]', rule: 'border-[var(--color-error)]' },
  neutral: { label: 'text-[var(--color-text-muted)]', rule: 'border-[var(--border)]' },
}

const SECTION = 'border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12'
const WRAP = 'mx-auto max-w-6xl'
const LABEL = 'font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]'
const H2 = 'mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl'
const LEDE = 'mt-4 max-w-3xl leading-relaxed text-[var(--color-text-secondary)]'
const BUTTON_PRIMARY =
  'inline-flex items-center rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-[var(--background)] transition hover:bg-[var(--color-primary-hover)]'
const BUTTON =
  'inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--color-primary)]/50'

const upgradeHref = coregethHref(`/downloads/#${UPGRADE_ANCHOR}`)

function DocCards({ docs }: { docs: readonly { title: string; href: string; date: { text: string; iso: string }; summary: string }[] }) {
  return (
    <ul className="mt-8 grid gap-4 md:grid-cols-2" role="list">
      {docs.map((doc) => (
        <li key={doc.href} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:border-[var(--color-primary)]/40">
          <h3 className="text-base font-semibold tracking-tight">
            <a href={coregethHref(doc.href)} target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] hover:text-[var(--color-primary)]">
              {doc.title} →
            </a>
          </h3>
          <p className="mt-1 font-mono text-xs text-[var(--color-text-muted)]">
            <time dateTime={doc.date.iso}>{doc.date.text}</time>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            <RecordText text={doc.summary} />
          </p>
        </li>
      ))}
    </ul>
  )
}

export default function CoreGethSecurityAuditPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen">
        <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-16 pb-12 md:px-10 md:pt-20 lg:px-12">
          <div className="relative mx-auto max-w-6xl">
            <div className="mb-4 flex items-center gap-3">
              <Link href="/build/clients" className="text-sm text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80">
                ← Node Clients
              </Link>
              <span className="text-sm text-[var(--color-text-muted)]">/</span>
              <Link href="/build/clients/core-geth" className="text-sm text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80">
                Core-Geth
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-sm bg-[var(--color-error)]/15 px-2 py-0.5 font-mono text-[10px] font-medium text-[var(--color-error)]">
                SECURITY AUDITS
              </span>
              <span className="font-mono text-sm text-[var(--color-text-muted)]">What the audits found</span>
            </div>

            <h1 className="mt-3 max-w-4xl text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl lg:text-4xl">{TITLE}</h1>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
              <RecordText
                text={`The \`${EXPOSED_LINE}\` line went 21 months without security maintenance, and in March 2026 one of the flaws that gap left open was used to crash Core-Geth \`${EXPOSED_LINE}\` bootnodes. The \`${RECOMMENDED_LINE}\` line closes all six client CVEs the audits found, that one among them. Every finding on this page is measured, dated and linked to the audit that records it, so nothing here has to be taken on trust.`}
              />
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={upgradeHref} target="_blank" rel="noopener noreferrer" className={BUTTON_PRIMARY}>
                Upgrade to the latest release
              </a>
              <a href="#audits" className={BUTTON}>
                The audits
              </a>
            </div>

            <p className="mt-6 text-xs text-[var(--color-text-muted)]">
              Core-Geth&apos;s maintainers keep this record on{' '}
              <a href={CORE_GETH_SECURITY_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                coregeth.com/security
              </a>
              , and this page states it as they do.
            </p>
          </div>
        </section>

        <div className={SECTION}>
          <div className={WRAP}>
            <p className={LABEL}>What the network is running, in figures</p>
            <div className="mt-4 grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-[var(--bg-elevated)] px-5 py-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">{stat.label}</p>
                  <p className={`mt-1 font-mono text-3xl font-bold ${stat.tone}`}>{stat.value}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-text-secondary)]">{stat.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className={SECTION} aria-labelledby="records-title">
          <div className={WRAP}>
            <p className={LABEL}>Core-Geth security and provenance</p>
            <h2 id="records-title" className={H2}>
              How Ethereum Classic Core Developers Fixed Core-Geth
            </h2>
            <ol className="mt-10 grid gap-10 border-t border-[var(--border)] pt-6 lg:grid-cols-3 lg:gap-8" role="list">
              {RECORDS.map((record) => (
                <li key={record.label} className="relative">
                  <span className="absolute -top-[29px] left-0 h-2.5 w-2.5 rounded-full bg-[var(--brand-green)]" aria-hidden="true" />
                  <time dateTime={record.date.iso} className="font-mono text-sm text-[var(--color-text-muted)]">
                    {record.date.month} <span className="text-[var(--text-primary)]">{record.date.year}</span>
                  </time>
                  <p className="mt-3 font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">{record.label}</p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight">
                    <a href={coregethHref(record.page.href)} target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] hover:text-[var(--color-primary)]">
                      <RecordText text={record.page.title} /> →
                    </a>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    <RecordText text={record.summary} />
                  </p>
                  {record.cta ? (
                    <a href={coregethHref(record.cta.href)} target="_blank" rel="noopener noreferrer" className={`${BUTTON_PRIMARY} mt-4`}>
                      {record.cta.label}
                    </a>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <SectionDivider />

        <section className={SECTION} aria-labelledby="timeline-title">
          <div className={WRAP}>
            <p className={LABEL}>The Core-Geth release record</p>
            <h2 id="timeline-title" className={H2}>
              Every Release Since the Gap, Newest First
            </h2>
            <p className={LEDE}>
              <RecordText
                text="The 21 months between June 2024 and February 2026 are the gap. This runs from the release that ended the gap back to the last release before it, and each release names the repository that published it: what `etclabscore/core-geth` cut as an emergency patch, and what was built, tested and released in `ethereumclassic/core-geth`. Every release in this timeline but the first is still vulnerable, and each entry says what it left open."
              />
            </p>
            <ol className="mt-10 border-l border-[var(--border)]" role="list" aria-label="Releases since the maintenance gap">
              {RELEASE_TIMELINE.map((entry) => (
                <li key={`${entry.iso}-${entry.title}`} className="relative pb-10 pl-8 last:pb-0">
                  <span
                    className={`absolute top-1.5 -left-[6px] h-[11px] w-[11px] rounded-full border-2 ${entry.current ? 'border-[var(--brand-green)] bg-[var(--brand-green)]' : 'border-[var(--border)] bg-[var(--background)]'}`}
                    aria-hidden="true"
                  />
                  <p className="font-mono text-xs text-[var(--color-text-muted)]">
                    {entry.iso ? <time dateTime={entry.iso}>{entry.when}</time> : entry.when}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                    <RecordText text={entry.title} />
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    <RecordText text={entry.body} />
                  </p>
                  {entry.quote ? (
                    <figure className="mt-4 max-w-3xl rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
                      {entry.quote.kicker ? (
                        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">{entry.quote.kicker}</p>
                      ) : null}
                      <blockquote className="mt-1 text-sm italic leading-relaxed text-[var(--text-primary)]">“{entry.quote.text}”</blockquote>
                      <figcaption className="mt-2 text-xs text-[var(--color-text-muted)]">
                        {entry.quote.attribution},{' '}
                        {entry.quote.href ? (
                          <a href={entry.quote.href} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                            {entry.quote.source}
                          </a>
                        ) : (
                          entry.quote.source
                        )}
                      </figcaption>
                    </figure>
                  ) : null}
                  {entry.link ? (
                    <a href={coregethHref(entry.link.href)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-medium text-[var(--color-primary)] hover:underline">
                      {entry.link.label} →
                    </a>
                  ) : null}
                  {entry.cta ? (
                    <div className="mt-4">
                      <a href={coregethHref(entry.cta.href)} target="_blank" rel="noopener noreferrer" className={BUTTON_PRIMARY}>
                        {entry.cta.label}
                      </a>
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <SectionDivider />

        <section className={SECTION} aria-labelledby="network-title">
          <div className={WRAP}>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className={LABEL}>Ethereum Classic nodes</p>
                <h2 id="network-title" className={H2}>
                  Most Ethereum Classic Nodes Are Running a Vulnerable Release
                </h2>
              </div>
              <a href={upgradeHref} target="_blank" rel="noopener noreferrer" className={BUTTON_PRIMARY}>
                {NETWORK_RUNNING.upgrade.label}
              </a>
            </div>
            <p className={LEDE}>
              <RecordText text={NETWORK_RUNNING.lede} />
            </p>

            <div className="mt-8 space-y-4">
              {NETWORK_RUNNING.rows.map((row) => (
                <div
                  key={row.running}
                  className={`rounded-xl border bg-[var(--panel)] p-5 ${row.status === 'recommended' ? 'border-[var(--color-primary)]/50' : 'border-[var(--border)]'}`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                    <span className="text-lg font-semibold">
                      <RecordText text={row.running} />
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider ${row.status === 'recommended' ? 'bg-[var(--color-primary)]/12 text-[var(--color-primary)]' : 'bg-[var(--color-error)]/12 text-[var(--color-error)]'}`}
                    >
                      {row.status}
                    </span>
                    <span className="font-mono text-sm text-[var(--text-primary)]">
                      {row.nodes} nodes <span className="text-[var(--color-text-muted)]">· {row.share}</span>
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    <RecordText text={row.summary} />
                  </p>
                  <details className="group mt-3" open>
                    <summary className="cursor-pointer text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--text-primary)]">
                      What <RecordText text={row.running} /> carries
                    </summary>
                    <dl className="mt-3 grid gap-3 md:grid-cols-2">
                      {row.carries.map((fact) => (
                        <div key={fact.label} className={`border-l-2 pl-3 ${FACT_TONE[fact.tone].rule}`}>
                          <dt className={`font-mono text-[11px] uppercase tracking-wider ${FACT_TONE[fact.tone].label}`}>{fact.label}</dt>
                          <dd className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                            <RecordText text={fact.text} />
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </details>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-relaxed text-[var(--color-text-muted)]">
              Core-Geth nodes by release on <time dateTime={NETWORK_RUNNING.measured.iso}>{NETWORK_RUNNING.measured.text}</time>,{' '}
              {NETWORK_RUNNING.total} in all. Source:{' '}
              <a href={NETWORK_RUNNING.source.href} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                {NETWORK_RUNNING.source.label}
              </a>
              . The {NETWORK_RUNNING.unlisted.nodes} nodes not listed above ran <RecordText text={NETWORK_RUNNING.unlisted.what} />.{' '}
              <a href={coregethHref(NETWORK_RUNNING.evidence)} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                The evidence for each row
              </a>
              {' · '}
              <a href={coregethHref(NETWORK_RUNNING.goAdvisories.href)} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                {NETWORK_RUNNING.goAdvisories.label}
              </a>
            </p>
          </div>
        </section>

        <SectionDivider />

        <section className={SECTION} aria-labelledby="vulnerabilities-title">
          <div className={WRAP}>
            <p className={LABEL}>{`The Core-Geth ${EXPOSED_LINE} security audit`}</p>
            <h2 id="vulnerabilities-title" className={H2}>
              Vulnerability Summary
            </h2>
            <p className={LEDE}>
              <RecordText
                text={`The six client CVEs and the GraphQL denial of service the March 2026 audit found in the \`${EXPOSED_LINE}\` client code, and what each line did about them. [The audit](/security/2026-03-core-geth-v1.12-security-audit/) carries the detail of each one.`}
              />
            </p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--border)]">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--bg-elevated)] text-left">
                    <th scope="col" className="px-4 py-3 font-semibold text-[var(--text-primary)]">CVE</th>
                    <th scope="col" className="px-4 py-3 font-semibold text-[var(--text-primary)]">Severity</th>
                    <th scope="col" className="px-4 py-3 font-semibold text-[var(--text-primary)]">Component</th>
                    <th scope="col" className="whitespace-nowrap px-4 py-3 font-mono text-xs font-semibold text-[var(--color-error)]">etclabscore/core-geth</th>
                    <th scope="col" className="px-4 py-3 font-semibold text-[var(--color-primary)]">v1.13.0 (ethereumclassic)</th>
                  </tr>
                </thead>
                <tbody>
                  {VULNERABILITIES.map((v) => (
                    <tr key={v.id} className="border-b border-[var(--border)]/60 last:border-0">
                      <th scope="row" className="whitespace-nowrap px-4 py-3 text-left font-mono text-xs font-medium">
                        <a href={v.href} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">
                          {v.id}
                        </a>
                      </th>
                      <td className="px-4 py-3">
                        <span className={`rounded px-2 py-0.5 font-mono text-[11px] ${SEVERITY_TONE[v.severity] ?? ''}`}>{v.severity}</span>
                      </td>
                      <td className="px-4 py-3 text-[var(--color-text-secondary)]">{v.component}</td>
                      <td className="px-4 py-3 text-[var(--color-text-secondary)]">{v.previous}</td>
                      <td className="px-4 py-3 text-[var(--color-text-secondary)]">{v.current}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 max-w-4xl space-y-2">
              {VULNERABILITY_NOTES.map((note) => (
                <p key={note.slice(0, 24)} className="text-xs leading-relaxed text-[var(--color-text-muted)]">
                  <RecordText text={note} />
                </p>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section id="audits" className={SECTION} aria-labelledby="audits-title">
          <div className={WRAP}>
            <p className={LABEL}>{`The Core-Geth ${EXPOSED_LINE} audits`}</p>
            <h2 id="audits-title" className={H2}>
              {`Everything the 2026 Core-Geth ${EXPOSED_LINE} Audits Found, Published in Full`}
            </h2>
            <p className={LEDE}>
              <RecordText
                text={`These ${spell(AUDIT_DOCS.length)} examine the ${EXPOSED_LINE} line and the work that replaced it: that line's client code, the Go toolchain its binaries inherit, its dependency tree, and the archives it published. If you run a node, read these reports with your security engineers: each one carries its method and its raw measurements, so you can verify every claim and judge what running ${EXPOSED_LINE} exposed you to.`}
              />
            </p>
            <DocCards docs={AUDIT_DOCS} />
          </div>
        </section>

        <section id="release-reports" className={SECTION} aria-labelledby="reports-title">
          <div className={WRAP}>
            <p className={LABEL}>{`The Core-Geth ${RECOMMENDED_LINE} release`}</p>
            <h2 id="reports-title" className={H2}>
              {`What the Core-Geth ${RECOMMENDED_LINE} Line Fixes, and How to Check Each Claim`}
            </h2>
            <p className={LEDE}>
              <RecordText text={RELEASE_FIXES} />
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-text-secondary)]">
              <RecordText text={DISCOVERY_FLAG_STEP} />
            </p>
            <DocCards docs={REPORT_DOCS} />
          </div>
        </section>

        <SectionDivider />

        <section className={SECTION} aria-labelledby="disclosure-title">
          <div className={WRAP}>
            <p className={LABEL}>How disclosure was handled</p>
            <h2 id="disclosure-title" className={H2}>
              {DISCLOSURE.heading}
            </h2>
            {DISCLOSURE.body.map((paragraph, i) => (
              <p key={paragraph.slice(0, 32)} className={i === 0 ? LEDE : 'mt-4 max-w-3xl leading-relaxed text-[var(--color-text-secondary)]'}>
                <RecordText text={paragraph} />
              </p>
            ))}
            <a href={coregethHref(DISCLOSURE.link.href)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-medium text-[var(--color-primary)] hover:underline">
              {DISCLOSURE.link.label} →
            </a>
          </div>
        </section>

        <section className={SECTION} aria-labelledby="report-title">
          <div className={WRAP}>
            <p className={LABEL}>Reporting a vulnerability</p>
            <h2 id="report-title" className={H2}>
              Found Something? Report It Privately
            </h2>
            <p className={LEDE}>
              A vulnerability goes to the security address or to the repository&apos;s private advisories, never to a public issue
              or channel, so a fix can ship before the flaw is known. Ethereum Classic&apos;s core developers read both routes, and
              they are the people maintaining the client, so a report reaches someone who can cut the release that fixes the flaw.
              The release timeline above shows how quickly that has happened since February 2026.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${SECURITY_EMAIL}`} className={BUTTON}>
                {SECURITY_EMAIL}
              </a>
              <a href={SECURITY_POLICY_URL} target="_blank" rel="noopener noreferrer" className={BUTTON}>
                The security policy
              </a>
              <a href={ADVISORIES_URL} target="_blank" rel="noopener noreferrer" className={BUTTON}>
                Private advisories
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

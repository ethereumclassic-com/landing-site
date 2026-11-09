import { OLYMPIA_ECIPS, ecipUrl, type OlympiaEcipStage } from '@/lib/olympia-ecips'

const STAGES: { stage: OlympiaEcipStage; lede: string }[] = [
  { stage: 'At the activation block', lede: 'Consensus changes at the Olympia activation block.' },
  { stage: 'Before the fork', lede: 'Would be deployed and published on Ethereum Classic before the activation block.' },
  { stage: 'Process', lede: 'Procedures that run on the governance contracts and change no consensus rule.' },
  { stage: 'A later hard fork', lede: 'A separate hard fork after Olympia, scheduled on its own.' },
]

/**
 * The Olympia ECIPs under their front-matter titles, grouped by when each would take effect. Every
 * title and summary is lib/olympia-ecips.ts's, so this list cannot drift from the other surfaces.
 */
export default function EcipSet() {
  return (
    <div className="space-y-10">
      {STAGES.map(({ stage, lede }) => {
        const ecips = OLYMPIA_ECIPS.filter((e) => e.stage === stage)
        return (
          <div key={stage}>
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">{stage}</h3>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">{lede}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {ecips.map((e) => (
                <a
                  key={e.number}
                  href={ecipUrl(e.number)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:border-[var(--brand-green)]/40"
                >
                  <span className="font-mono text-xs text-[var(--brand-green)]">ECIP-{e.number}</span>
                  <span className="mt-1 font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-green)]">
                    {e.title}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{e.summary}</span>
                </a>
              ))}
            </div>
          </div>
        )
      })}
      <p className="max-w-3xl text-xs leading-relaxed text-[var(--color-text-muted)]">
        Each ECIP is a draft. The ECIPs repository holds its current text, and ecips.ethereumclassic.org can show an earlier version.
      </p>
    </div>
  )
}

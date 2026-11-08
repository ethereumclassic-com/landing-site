import { OLYMPIA_EIPS, eipUrl, eipsBy, type OlympiaEip } from '@/lib/olympia-eips'
import { ecipUrl } from '@/lib/olympia-ecips'

/**
 * The one fork timeline: the upstream upgrades Olympia would align Ethereum Classic with, and the
 * EIPs ECIP-1121 adopts from each. Every EIP and every count comes from lib/olympia-eips.ts, which is
 * generated from ECIP-1121's own rows. The hub and /olympia/upgrade both render this component.
 */
const UPGRADES: { name: string; upstream: string; via?: string }[] = [
  { name: 'London', upstream: 'the fee market, through ECIP-1111', via: 'ECIP-1111' },
  { name: 'Dencun', upstream: 'Cancun-Deneb' },
  { name: 'Pectra', upstream: 'Prague-Electra' },
  { name: 'Fusaka', upstream: 'Fulu-Osaka' },
  { name: 'Glamsterdam', upstream: 'Gloas-Amsterdam' },
]

const ADOPTED = new Set(['core', 'networking', 'interface', 'modified'])

/** How each exclusion group reads in a sentence; ECIP-1121 names the groups. */
const EXCLUDED_REASON: Record<string, string> = {
  'Proof-of-Stake': 'as Proof-of-Stake',
  'No client behavior to adopt': 'with no client behavior to adopt',
}

function Chip({ e }: { e: OlympiaEip }) {
  return (
    <a
      href={eipUrl(e.eip)}
      target="_blank"
      rel="noopener noreferrer"
      title={`${e.label}${e.disposition === 'modified' ? ' (adopted with a modification another Olympia ECIP states)' : ''}`}
      className="rounded bg-[var(--color-violet-bg)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-violet)] transition-colors hover:bg-[var(--color-violet)]/15"
    >
      EIP-{e.eip}
      {e.disposition === 'modified' ? '*' : ''}
    </a>
  )
}

export default function ForkTimeline() {
  const blocked = eipsBy('blocked')
  const deferred = eipsBy('deferred')
  const excluded = eipsBy('excluded')
  const inForce = eipsBy('in-force')
  const adoptedCount = OLYMPIA_EIPS.filter((e) => ADOPTED.has(e.disposition)).length

  return (
    <div>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {UPGRADES.map((u, i) => {
          const adopted = OLYMPIA_EIPS.filter((e) => e.group === u.name && ADOPTED.has(e.disposition))
          const blockedHere = blocked.filter((e) => e.group === u.name)
          return (
            <li key={u.name} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
              <span className="font-mono text-xs font-bold text-[var(--brand-green)]">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-1 font-semibold text-[var(--text-primary)]">{u.name}</p>
              <p className="text-xs text-[var(--color-text-muted)]">{u.upstream}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {adopted.map((e) => (
                  <Chip key={e.eip} e={e} />
                ))}
              </div>
              {blockedHere.length > 0 && (
                <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-muted)]">
                  Blocked by a dependency: {blockedHere.map((e) => `EIP-${e.eip}`).join(', ')}
                </p>
              )}
            </li>
          )
        })}
      </ol>
      <p className="mt-4 max-w-4xl text-xs leading-relaxed text-[var(--color-text-muted)]">
        <a href={ecipUrl(1121)} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--text-primary)]">
          ECIP-1121
        </a>{' '}
        adopts {adoptedCount} EIPs, an asterisk marking each one adopted with a modification another
        Olympia ECIP states. {blocked.length} more are blocked by a dependency that is out of scope:
        tracked, not rejected. {deferred.length} tied to blob data availability are deferred.{' '}
        {excluded.length} are excluded:{' '}
        {[...new Set(excluded.map((e) => e.group))]
          .map((g) => `${excluded.filter((e) => e.group === g).length} ${EXCLUDED_REASON[g] ?? `as ${g}`}`)
          .join(' and ')}
        . {inForce.length} were already in force before Olympia. Glamsterdam is included, and ECIP-1121
        adopts part of its set.
      </p>
    </div>
  )
}

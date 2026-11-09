import { ecipUrl } from '@/lib/olympia-ecips'
import { OLYMPIA_TARGET } from '../data/olympia'
import OlympiaStatusBadge from './OlympiaStatusBadge'

/**
 * The order the ECIPs set for Olympia, each step citing the section that states it, so a citation can
 * be checked against the ECIP. Rendered at #activation on the hub.
 */
const SEQUENCE: { step: string; cites: { ecip: number; cite: string }[] }[] = [
  {
    step: 'The governance contracts would be deployed on Ethereum Classic before the fork, in dependency order and with no address predicted or reserved: first the Timelock behind the Treasury proxy, then CoreNFT, then the Governor, the only contract granted the Timelock\'s roles to propose, execute and cancel.',
    cites: [{ ecip: 1113, cite: 'ECIP-1113 §"Deployment and Activation"' }],
  },
  {
    step: 'Their security review and multi-client testing on the Mordor testnet would be finished before the activation block is scheduled, rehearsed while the Treasury still holds nothing.',
    cites: [{ ecip: 1113, cite: 'ECIP-1113 §"Audit and Testnet Rollout"' }],
  },
  {
    step: 'The Treasury\'s address would be published in its final configuration before the activation block is scheduled, so the network commits only to an address anyone could inspect first.',
    cites: [{ ecip: 1112, cite: 'ECIP-1112 §"Deployment and Publication"' }],
  },
  {
    step: 'The activation blocks for Mordor and mainnet would be set through open coordination and recorded only in ECIP-1111, where both read TBD. Clients must be shown to behave identically on Mordor before a mainnet block is scheduled.',
    cites: [
      { ecip: 1111, cite: 'ECIP-1111 §Implementation' },
      { ecip: 1111, cite: 'ECIP-1111 §"Test Cases"' },
    ],
  },
  {
    step: 'At the activation block, EIP-1559 would begin, with each transaction\'s base fee credited to the Treasury\'s address, and the core EIPs ECIP-1121 adopts would take effect.',
    cites: [{ ecip: 1121, cite: 'ECIP-1121 §Activation' }],
  },
]

export default function ActivationOrder() {
  return (
    <div>
      <OlympiaStatusBadge />
      <p className="mt-4 max-w-3xl text-[var(--color-text-muted)]">
        Olympia is a proposal, {OLYMPIA_TARGET}, and its activation blocks are TBD. Under ECIP-1121, they would be decided at the Olympia Core Devs Call.
      </p>
      <h3 className="mt-10 text-lg font-semibold text-[var(--text-primary)]">The order the ECIPs set</h3>
      <ol className="mt-5 space-y-5">
        {SEQUENCE.map((s, i) => (
          <li key={s.step} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] font-mono text-xs font-bold text-[var(--brand-green)]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{s.step}</p>
              <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                {s.cites.map((c) => (
                  <a
                    key={c.cite}
                    href={ecipUrl(c.ecip)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[var(--text-subtle)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    {c.cite}
                  </a>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[var(--color-text-muted)]">
        ECIP-1116 is not part of this sequence: it would be a separate hard fork after Olympia, scheduled on its own.
      </p>
    </div>
  )
}

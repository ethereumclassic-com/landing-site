import { OLYMPIA_EIPS, eipUrl, type EipDisposition, type OlympiaEip } from '@/lib/olympia-eips'
import { ecipUrl } from '@/lib/olympia-ecips'

/**
 * Every EIP ECIP-1121 classifies, under the disposition it gives it, with ECIP-1121's own label for
 * each. The rows are lib/olympia-eips.ts's, generated from ECIP-1121, so the table and its counts move
 * with the ECIP rather than with this page.
 */
const SECTIONS: { disposition: EipDisposition; heading: string; lede: string }[] = [
  {
    disposition: 'core',
    heading: 'Adopted at the activation block',
    lede: 'Core EIPs that would take effect at the Olympia block, and only there. A client that omits one forks at that block.',
  },
  {
    disposition: 'modified',
    heading: 'Adopted with a modification',
    lede: 'Adopted at the same block, each with a change Proof-of-Work makes necessary, stated by another Olympia ECIP rather than by ECIP-1121.',
  },
  {
    disposition: 'networking',
    heading: 'Adopted without a block: networking',
    lede: 'Peer-to-peer protocol versions, which nodes negotiate with each other rather than switching at a block.',
  },
  {
    disposition: 'interface',
    heading: 'Adopted without a block: interface',
    lede: 'A JSON-RPC method, which changes no rule a block is checked against.',
  },
  {
    disposition: 'blocked',
    heading: 'Blocked by a dependency',
    lede: 'Each meets ECIP-1121\'s criteria on its own terms but depends on an EIP out of scope here. They are tracked, not rejected.',
  },
  {
    disposition: 'deferred',
    heading: 'Deferred',
    lede: 'Blob data availability. Ethereum Classic does not implement blobs, and deferral does not imply rejection.',
  },
  {
    disposition: 'excluded',
    heading: 'Excluded',
    lede: 'Proof-of-Stake mechanisms, which do not apply to a Proof-of-Work chain, and EIPs with no client behavior to adopt.',
  },
  {
    disposition: 'in-force',
    heading: 'Already in force before Olympia',
    lede: 'Earlier EIPs that the adopted ones depend on, listed so the dependency graph is complete.',
  },
]

function detail(e: OlympiaEip) {
  if (e.disposition === 'blocked' && e.blockedOn) return `${e.group}, blocked on EIP-${e.blockedOn}`
  if (e.disposition === 'modified') return e.eip === 1559 || e.eip === 3198 ? `${e.group}, through ECIP-1111` : `${e.group}, through a separate Olympia ECIP`
  return e.group
}

export default function EipDispositions() {
  return (
    <div className="space-y-10">
      {SECTIONS.map(({ disposition, heading, lede }) => {
        const rows = OLYMPIA_EIPS.filter((e) => e.disposition === disposition)
        if (rows.length === 0) return null
        return (
          <div key={disposition}>
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              {heading} <span className="font-mono text-sm font-normal text-[var(--color-text-muted)]">({rows.length})</span>
            </h3>
            <p className="mt-1 max-w-3xl text-sm text-[var(--color-text-muted)]">{lede}</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--border)]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[var(--panel)] text-xs text-[var(--color-text-muted)]">
                  <tr>
                    <th scope="col" className="px-4 py-2 font-medium">EIP</th>
                    <th scope="col" className="px-4 py-2 font-medium">ECIP-1121&apos;s label</th>
                    <th scope="col" className="px-4 py-2 font-medium">Listed under</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {rows.map((e) => (
                    <tr key={e.eip}>
                      <td className="whitespace-nowrap px-4 py-2">
                        <a
                          href={eipUrl(e.eip)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-[var(--color-violet)] hover:underline"
                        >
                          EIP-{e.eip}
                        </a>
                      </td>
                      <td className="px-4 py-2 text-[var(--text-primary)]">{e.label}</td>
                      <td className="px-4 py-2 text-[var(--color-text-muted)]">{detail(e)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      })}
      <p className="max-w-3xl text-xs leading-relaxed text-[var(--color-text-muted)]">
        Read from{' '}
        <a href={ecipUrl(1121)} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--text-primary)]">
          ECIP-1121
        </a>
        , a draft. Each EIP links to its specification at eips.ethereum.org.
      </p>
    </div>
  )
}

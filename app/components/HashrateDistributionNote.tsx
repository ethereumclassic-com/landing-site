import Link from 'next/link'

/**
 * A standing note wherever pool hashrate is listed.
 *
 * Deliberately not conditional on any pool's current share: the case for
 * distributing hashrate holds at every level of concentration, and a note that
 * appears only past a threshold would read as an alarm about whoever happens to
 * be largest that week. Stated as the principle, it stays true and needs no
 * maintenance as shares move.
 */
export function HashrateDistributionNote({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`rounded-xl border border-[var(--brand-green)]/25 bg-[var(--brand-green)]/5 ${
        compact ? 'p-4' : 'p-5'
      }`}
    >
      <p className="text-sm font-semibold text-[var(--text-primary)]">
        Spread hashrate, strengthen the network
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
        Proof-of-Work security comes from work being distributed across many independent operators,
        and miners set that distribution directly. Every pool choice either concentrates block
        production or spreads it, so pointing hashrate at a smaller established pool widens the base
        the network rests on. The pools listed here pay out on published terms &mdash; which one you
        join is a decentralization decision as much as a fee one.
      </p>
      <Link
        href="/mining/pools"
        className="mt-3 inline-flex text-sm font-medium text-[var(--brand-green)] transition hover:underline"
      >
        Compare pools &rarr;
      </Link>
    </div>
  )
}

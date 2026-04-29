import Link from 'next/link'
import { FadeIn } from '@/app/components/ui'
import { fetchMiningNetworkStats } from '@/lib/etc-rpc'

export async function FeeMarketCallout() {
  const stats = await fetchMiningNetworkStats()
  const avgTx = stats.latestBlock.txCount
  const utilization =
    stats.latestBlock.gasLimit > 0
      ? (stats.latestBlock.gasUsed / stats.latestBlock.gasLimit) * 100
      : 0.42

  return (
    <section className="border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Fee Market
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            The Fee Market Problem
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            ETC blocks are currently near ATL utilization — the average block is over 99% empty.
            Block rewards fifthened every 5M blocks under ECIP-1017. Without fee revenue to replace
            diminishing block rewards, PoW miners eventually have no financial incentive to secure
            the network. Olympia is how ETC fixes this: it funds the core development that fills
            blocks, creates fee revenue, and aligns miners with long-term ecosystem growth.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                Avg Txs / Block
              </p>
              <p className="mt-2 text-2xl font-bold text-[var(--text-primary)]">
                ~{avgTx.toFixed(1)}
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                Network Utilization
              </p>
              <p className="mt-2 text-2xl font-bold text-[var(--text-primary)]">
                {utilization.toFixed(2)}%
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mt-6 flex justify-start">
            <Link
              href="/olympia"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-green)] transition-colors hover:underline"
            >
              Learn about the Olympia upgrade
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

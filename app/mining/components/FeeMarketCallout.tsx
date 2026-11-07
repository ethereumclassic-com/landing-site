import Link from 'next/link'
import { FadeIn } from '@/app/components/ui'
import { fetchNetworkFees, formatShare } from '@/lib/network-fees'

const ArrowIcon = () => (
  <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

/** The mining hub's fee summary, read from the same daily series as /mining/fees. */
export async function FeeMarketCallout() {
  const fees = await fetchNetworkFees()

  return (
    <section className="border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Network Fees
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Fees and Miner Revenue
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            Miners are paid the block reward and the fees of the transactions they include. The block
            reward falls 20% every 5 million blocks under ECIP-1017, so fees are the part of miner revenue
            that can grow with use of the network.
          </p>
        </FadeIn>

        {fees && (
          <FadeIn delay={100}>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                  Fee share of miner revenue
                </p>
                <p className="mt-2 text-2xl font-bold text-[var(--text-primary)]">{formatShare(fees.feeShare)}</p>
                <p className="mt-1 text-xs text-[var(--text-subtle)]">Last {fees.days.length} days</p>
              </div>
              <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                  Block space used
                </p>
                <p className="mt-2 text-2xl font-bold text-[var(--text-primary)]">{formatShare(fees.utilization)}</p>
                <p className="mt-1 text-xs text-[var(--text-subtle)]">Gas used as a share of the gas limit</p>
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={150}>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/mining/fees"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-green)] transition-colors hover:underline"
            >
              See network fees
              <ArrowIcon />
            </Link>
            <Link
              href="/olympia/miners"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-green)] transition-colors hover:underline"
            >
              What Olympia changes for miners
              <ArrowIcon />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

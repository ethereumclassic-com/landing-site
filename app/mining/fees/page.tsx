import Link from 'next/link'
import { FadeIn } from '@/app/components/ui/FadeIn'
import { SectionDivider } from '@/app/components/ui'
import { CURRENT_ERA, formatBlockReward, getBlockRewardForEra } from '@/app/research/data/emission'
import {
  FEE_SOURCE_URL,
  FEE_WINDOW_DAYS,
  fetchNetworkFees,
  formatShare,
  formatSignificant,
  type FeeDay,
} from '@/lib/network-fees'

// The series are daily, so one upstream read per hour, shared by every visitor, keeps them current.
export const revalidate = 3600

/** Gas a plain ETC transfer uses: fixed by the protocol, not a reading. */
const TRANSFER_GAS = 21_000

/** Days in the table. The figures above it cover the whole reading window. */
const TABLE_DAYS = 14

function dayLabel(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })
}

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--panel)] p-5">
      <p className="text-xs text-[var(--color-text-muted)]">{label}</p>
      <p className="mt-2 font-mono text-2xl font-bold text-[var(--text-primary)]">{value}</p>
      <p className="mt-1 text-xs text-[var(--color-text-muted)]">{note}</p>
    </div>
  )
}

function RecentDays({ days }: { days: FeeDay[] }) {
  const recent = days.slice(-TABLE_DAYS).reverse()
  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--border-default)]">
      <table className="w-full min-w-[34rem] text-left text-sm">
        <thead className="bg-[var(--panel)] text-xs text-[var(--color-text-muted)]">
          <tr>
            <th scope="col" className="px-4 py-3 font-medium">Day (UTC)</th>
            <th scope="col" className="px-4 py-3 text-right font-medium">Transactions</th>
            <th scope="col" className="px-4 py-3 text-right font-medium">Fees</th>
            <th scope="col" className="px-4 py-3 text-right font-medium">Gas price</th>
            <th scope="col" className="px-4 py-3 text-right font-medium">Block space used</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border-default)]">
          {recent.map((day) => (
            <tr key={day.date}>
              <td className="px-4 py-2.5 text-[var(--text-primary)]">{dayLabel(day.date)}</td>
              <td className="px-4 py-2.5 text-right font-mono text-[var(--color-text-muted)]">
                {day.transactions.toLocaleString('en-US')}
              </td>
              <td className="px-4 py-2.5 text-right font-mono text-[var(--color-text-muted)]">
                {formatSignificant(day.fees, 3)} ETC
              </td>
              <td className="px-4 py-2.5 text-right font-mono text-[var(--color-text-muted)]">
                {formatSignificant(day.gasPrice, 3)} gwei
              </td>
              <td className="px-4 py-2.5 text-right font-mono text-[var(--color-text-muted)]">
                {formatShare(day.utilization)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default async function NetworkFeesPage() {
  const fees = await fetchNetworkFees()
  const reward = getBlockRewardForEra(CURRENT_ERA)
  const nextReward = getBlockRewardForEra(CURRENT_ERA + 1)

  return (
    <div className="min-h-screen">
      <section className="px-6 pt-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--brand-green)]">Mining</p>
            <h1 className="mt-3 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">Network Fees</h1>
            <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
              What transactions on Ethereum Classic pay to be included in a block, and how much of
              miners&apos; revenue those fees make up, read from the chain over the last {FEE_WINDOW_DAYS} days.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn delay={100}>
            {fees ? (
              <>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Stat
                    label={`Fees paid, last ${fees.days.length} days`}
                    value={`${formatSignificant(fees.totals.fees, 3)} ETC`}
                    note={`${formatSignificant(fees.feesPerDay, 2)} ETC a day`}
                  />
                  <Stat
                    label="Share of miner revenue"
                    value={formatShare(fees.feeShare)}
                    note="Fees as a share of what miners were paid, block rewards included"
                  />
                  <Stat
                    label="Transactions"
                    value={fees.totals.transactions.toLocaleString('en-US')}
                    note={`${Math.round(fees.totals.transactions / fees.days.length).toLocaleString('en-US')} a day`}
                  />
                  <Stat
                    label="Average fee per transaction"
                    value={`${formatSignificant(fees.feePerTransaction, 2)} ETC`}
                    note="Total fees over total transactions"
                  />
                  <Stat
                    label="Average gas price"
                    value={`${formatSignificant(fees.gasPrice, 3)} gwei`}
                    note="Weighted by transactions"
                  />
                  <Stat
                    label="Block space used"
                    value={formatShare(fees.utilization)}
                    note="Gas used as a share of the gas limit"
                  />
                </div>
                <p className="mt-3 font-mono text-[10px] text-[var(--color-text-muted)]">
                  Blockscout&apos;s daily series for {dayLabel(fees.days[0].date)} to{' '}
                  {dayLabel(fees.days[fees.days.length - 1].date)}, full UTC days only.{' '}
                  <a href={FEE_SOURCE_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--text-primary)]">
                    Blockscout charts
                  </a>
                </p>
              </>
            ) : (
              <p className="rounded-xl border border-[var(--border-default)] bg-[var(--panel)] p-5 text-sm text-[var(--color-text-muted)]">
                Blockscout&apos;s fee data is unavailable right now, so this page shows no figures. They
                appear here when it answers again.
              </p>
            )}
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-4 text-[var(--color-text-muted)]">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">How fees work on Ethereum Classic</h2>
            <p className="mt-4">
              Every transaction sets a gas price and pays it on each unit of gas it uses. The miner who
              includes the transaction in a block collects that fee, on top of the block reward. Senders
              compete for space in a block, so when blocks have room to spare, a low gas price is enough
              to be included.
            </p>
            <p className="mt-4">
              A network upgrade can change how fees are set and who receives them. The changes Olympia
              would make are described in the{' '}
              <Link href="/olympia/miners" className="font-medium text-[var(--brand-green)] hover:underline">
                Olympia hub
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-4 text-[var(--color-text-muted)]">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">Fees and the block reward</h2>
            <p className="mt-4">
              Miners are paid the block reward and the fees of the transactions they include. The block
              reward is {formatBlockReward(reward)} ETC in era {CURRENT_ERA} and falls 20% at every
              fifthing under ECIP-1017, to {formatBlockReward(nextReward)} ETC in era {CURRENT_ERA + 1}.
              Fees are the part of miner revenue that can grow with use of the network
              {fees ? `; over the last ${fees.days.length} days they were ${formatShare(fees.feeShare)} of it.` : '.'}
            </p>
            <p className="mt-4">
              <Link href="/block-reward-countdown" className="font-medium text-[var(--brand-green)] hover:underline">
                Countdown to the next fifthing →
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {fees && (
        <section className="px-6 py-12 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl space-y-4 text-[var(--color-text-muted)]">
            <FadeIn>
              <h2 className="text-2xl font-semibold text-[var(--text-primary)]">What a transaction costs</h2>
              <p className="mt-4">
                A plain ETC transfer uses {TRANSFER_GAS.toLocaleString('en-US')} gas, so at the average gas
                price of the last {fees.days.length} days it cost{' '}
                {formatSignificant((TRANSFER_GAS * fees.gasPrice) / 1e9, 2)} ETC. A contract call uses more
                gas, and the average transaction paid {formatSignificant(fees.feePerTransaction, 2)} ETC.
              </p>
            </FadeIn>
          </div>
        </section>
      )}

      {fees && (
        <section className="px-6 py-12 md:px-10 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <h2 className="mb-5 text-xl font-semibold text-[var(--text-primary)]">The last {TABLE_DAYS} days</h2>
              <RecentDays days={fees.days} />
            </FadeIn>
          </div>
        </section>
      )}

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-5 text-xl font-semibold text-[var(--text-primary)]">Related</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: '/block-reward-countdown',
                  title: 'Fifthing Countdown',
                  body: 'When the block reward next falls, and to what.',
                },
                {
                  href: '/mining/stats',
                  title: 'Network Stats',
                  body: 'Block height, emission, daily metrics and pool share.',
                },
                {
                  href: '/mining/profitability',
                  title: 'Profitability',
                  body: 'Estimate returns for your hardware at current rates.',
                },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="rounded-xl border border-[var(--border-default)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--brand-green)]"
                >
                  <p className="font-semibold text-[var(--text-primary)]">{c.title}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{c.body}</p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

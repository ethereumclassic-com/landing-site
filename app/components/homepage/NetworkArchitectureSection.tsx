import Link from 'next/link'
import { Cpu, Code2 } from 'lucide-react'
import { FadeIn, ETCswapLink, ClassicUSDLink } from '@/app/components/ui'

const archColumns = [
  {
    icon: Cpu,
    heading: 'From Proof-of-Work',
    subheading: "Bitcoin's regulatory path",
    points: [
      'No issuer and no foundation controlling the protocol. Every coin created after the genesis block was mined.',
      'Anyone can buy mining hardware, and miners operate around the world.',
      'Block rewards and transaction fees go to miners. Under the Olympia proposal, a new base fee would fund a treasury, with no added issuance.',
      'Positioned for classification as a digital commodity under the pending CLARITY Act, with the same Proof-of-Work profile as Bitcoin.',
      'Mining can sit beside any power source, anywhere in the world.',
    ] as React.ReactNode[],
  },
  {
    icon: Code2,
    heading: 'From the EVM',
    subheading: "Ethereum's regulatory path",
    points: [
      'Solidity and the EVM up to Ethereum\'s Shanghai upgrade, so standard Ethereum tools work. A tool that assumes EIP-1559 needs its legacy-transaction setting.',
      <><ClassicUSDLink>Classic USD ($USC)</ClassicUSDLink>, issued by Brale: a 1:1 USD-backed stablecoin aligned with the GENIUS Act, live on Ethereum Classic.</>,
      <><ETCswapLink>ETCswap</ETCswapLink> V2 and V3 provide on-chain liquidity, including pools paired with Classic USD.</>,
      'Under MiCA, ETC has no issuer, and authorized crypto-asset service providers can offer it across the EU.',
    ] as React.ReactNode[],
  },
]

export default function NetworkArchitectureSection() {
  return (
    <section className="bg-[var(--bg-elevated)]/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Network Architecture
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Proof-of-Work and the EVM
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            Ethereum Classic is both a Proof-of-Work network and a smart contract platform.
            Bitcoin has Proof-of-Work without general-purpose smart contracts, and Ethereum has the
            EVM without Proof-of-Work. ETC has had both since 2015, which puts it on two regulatory
            paths at once: the commodity path Bitcoin set, and the rules taking shape for smart
            contract platforms such as Ethereum.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {archColumns.map((col, i) => (
            <FadeIn key={col.heading} delay={i * 80}>
              <div className="h-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green)]/10">
                    <col.icon size={16} aria-hidden="true" className="text-[var(--brand-green)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{col.heading}</p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      {col.subheading}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3">
                  {col.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                        aria-hidden="true"
                      />
                      <p className="text-xs leading-relaxed text-[var(--text-muted)]">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={160}>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/mining"
              className="text-xs font-medium text-[var(--brand-green)] underline-offset-4 hover:underline"
            >
              Mining on ETC →
            </Link>
            <Link
              href="/regulation"
              className="text-xs font-medium text-[var(--brand-green)] underline-offset-4 hover:underline"
            >
              Regulatory landscape →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

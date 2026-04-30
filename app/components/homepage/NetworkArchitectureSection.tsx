'use client'

import Link from 'next/link'
import { Cpu, Code2 } from 'lucide-react'
import { FadeIn, ETCswapLink, ClassicUSDLink } from '@/app/components/ui'

const archColumns = [
  {
    icon: Cpu,
    heading: 'From Proof-of-Work',
    subheading: "Bitcoin's regulatory trajectory",
    points: [
      'No pre-mine, no foundation controlling the protocol, no issuer.',
      'Mining hardware is globally distributed and permissionless to acquire.',
      'Block rewards and tips go to miners. The treasury is funded by the basefee, not inflation.',
      'CLARITY Act digital commodity classification path: same PoW profile as Bitcoin.',
      'Energy demand that co-locates with any power source, anywhere in the world.',
    ] as React.ReactNode[],
  },
  {
    icon: Code2,
    heading: 'From the EVM',
    subheading: "Ethereum's regulatory trajectory",
    points: [
      'Full Solidity and EVM compatibility. Every Ethereum tool, library, and framework works without modification.',
      <><ClassicUSDLink>Classic USD ($USC)</ClassicUSDLink> by Brale: a live, 1:1 USD-backed stablecoin on a PoW chain, the first of its kind.</>,
      'GENIUS Act-compliant stablecoin infrastructure, the first on any Proof-of-Work network.',
      <><ETCswapLink>ETCswap</ETCswapLink> V2 and V3 provide on-chain liquidity for composable DeFi with a regulated stable base.</>,
      'MiCA decentralized asset classification: exempt from ART/EMT issuer obligations.',
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
            The Only Proof-of-Work EVM
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            Ethereum Classic is not simply a Proof-of-Work network or simply a smart contract
            platform. It sits at the intersection of both, inheriting the commodity classification
            path that Bitcoin established and the programmable finance frameworks that Ethereum
            established. Bitcoin has PoW without programmability. Ethereum has the EVM without PoW.
            ETC has both, and its regulatory surface is additive, not exclusive. In a regulatory
            landscape that forces most networks to pick a lane, ETC occupies two, not by design
            after the fact, but by continuous, uninterrupted operation since 2015.
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
              PoW as energy infrastructure →
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

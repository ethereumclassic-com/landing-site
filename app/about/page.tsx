import type { Metadata } from 'next'
import Link from 'next/link'
import { Cpu, Code2, Shield, Building2, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Ethereum Classic',
  description:
    'EthereumClassic.com is the comprehensive resource for Ethereum Classic — the only Proof-of-Work EVM. Institutional positioning: PoW Security, ETCG investment products, regulatory clarity across CLARITY Act, MiCA, and GENIUS Act. News, education, mining, and developer tools.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
            About
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
            The Primary Website for{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-400 bg-clip-text text-transparent">
              Ethereum Classic
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            EthereumClassic.com is the comprehensive resource for Ethereum Classic — the world&apos;s largest
            Proof-of-Work smart contract platform, running continuously since July 2015. Covering news, education,
            developer tools, mining resources, and ecosystem applications for users, developers, miners, and institutions.
          </p>
        </div>
      </section>

      {/* What We Cover */}
      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">What We Cover</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'News', description: 'Protocol updates, ecosystem developments, and EVM industry analysis.', href: '/news' },
              { title: 'Learn', description: 'Guides for users, traders, developers, and security-conscious participants.', href: '/learn' },
              { title: 'Apps', description: 'Verified dApps and infrastructure built on Ethereum Classic.', href: '/apps' },
              { title: 'Mining', description: 'Hardware, software, pools, and profitability for ETC miners.', href: '/mining' },
              { title: 'Build', description: 'Developer documentation, RPC endpoints, and smart contract tools.', href: '/build' },
              { title: 'Research', description: 'Network statistics, supply data, fee analysis, and ecosystem reports.', href: '/research' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-all hover:border-[var(--color-primary)]/50"
              >
                <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Our Mission</h2>
          <div className="mt-6 space-y-4 text-[var(--color-text-secondary)]">
            <p>
              Ethereum Classic is the original, unaltered Ethereum blockchain. It is secured by proof-of-work, governed by a
              fixed monetary policy, and committed to the principle that code is law.
            </p>
            <p>
              This website exists to provide accurate, up-to-date information about the ETC ecosystem. We cover protocol
              developments, review dApps, publish educational guides, and maintain developer resources, all without
              gatekeeping or editorial bias.
            </p>
            <p>
              Every piece of content on this site is factual and verifiable. We do not provide financial advice, endorse
              specific investments, or make price predictions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Ethereum Classic — three-pillar institutional positioning */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Why Ethereum Classic</h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            Three structural properties that define ETC&apos;s position in the 2025–2026 institutional landscape.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                <Shield className="h-5 w-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)]">Proof-of-Work Security</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                The only EVM-compatible blockchain secured by Proof-of-Work. Following Ethereum&apos;s
                transition to Proof-of-Stake, Ethereum Classic absorbed significant mining infrastructure
                and stands alone at the intersection of Bitcoin&apos;s security model and Ethereum&apos;s
                programmability.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                <Building2 className="h-5 w-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)]">Institutional Infrastructure</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Listed on all major global exchanges with 300+ active markets. Institutional-grade custody
                from leading digital asset custodians. Regulated securities exposure via the Grayscale
                Ethereum Classic Trust (ETCG), trading on OTCQX since 2018 and positioned for ETF
                conversion, following Grayscale&apos;s established trust-to-ETF precedent with Bitcoin and
                Ethereum.
              </p>
              <Link
                href="/investment-products"
                className="mt-3 inline-block text-xs font-medium text-[var(--color-primary)] transition hover:opacity-80"
              >
                View Investment Products →
              </Link>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                <Scale className="h-5 w-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)]">Regulatory Clarity</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                ETC straddles two regulatory trajectories — digital commodity candidate under the CLARITY
                Act and decentralized asset under MiCA — recognized across leading global regulatory
                frameworks in the US, EU, UK, Japan, and UAE. The Grayscale Ethereum Classic Trust
                positions ETC as a second-wave ETF candidate, the only Proof-of-Work smart contract
                platform in that pipeline.
              </p>
              <Link
                href="/regulation"
                className="mt-3 inline-block text-xs font-medium text-[var(--color-primary)] transition hover:opacity-80"
              >
                View Regulatory Framework →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Only Proof-of-Work EVM — intersection two-column */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">The Only Proof-of-Work EVM</h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            Ethereum Classic sits at the intersection of two independent regulatory and institutional
            trajectories — combining properties from each without belonging entirely to either.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                  <Cpu className="h-5 w-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)]">From Proof-of-Work</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Bitcoin&apos;s regulatory trajectory</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-[var(--color-primary)]">·</span>No pre-mine, no foundation controlling the protocol, no issuer.</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-[var(--color-primary)]">·</span>Mining hardware is globally distributed and permissionless to acquire.</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-[var(--color-primary)]">·</span>Block rewards and tips go to miners — the treasury is funded by basefee, not inflation.</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-[var(--color-primary)]">·</span>CLARITY Act digital commodity classification path: same PoW profile as Bitcoin.</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-[var(--color-primary)]">·</span>Energy demand that co-locates with any power source, anywhere in the world.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                  <Code2 className="h-5 w-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)]">From the EVM</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Ethereum&apos;s regulatory trajectory</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-[var(--color-primary)]">·</span>Full Solidity and EVM compatibility — every Ethereum tool, library, and framework works without modification.</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-[var(--color-primary)]">·</span>Classic USD ($USC) by Brale: a live, 1:1 USD-backed stablecoin on a PoW chain.</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-[var(--color-primary)]">·</span>GENIUS Act-compliant stablecoin infrastructure, the first on any Proof-of-Work network.</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-[var(--color-primary)]">·</span>ETCswap V2 and V3 provide on-chain liquidity for composable DeFi with a regulated stable base.</li>
                <li className="flex gap-2"><span className="mt-1 shrink-0 text-[var(--color-primary)]">·</span>MiCA decentralized asset classification: exempt from ART/EMT issuer obligations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Join the Community</h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            Ethereum Classic is built by a global, decentralized community. Connect with developers, miners, and
            enthusiasts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { label: 'Discord', href: 'https://discord.com/invite/Tq57jxSwsa' },
              { label: 'GitHub', href: 'https://github.com/ethereumclassic' },
              { label: 'Reddit', href: 'https://reddit.com/r/EthereumClassic' },
              { label: 'Telegram', href: 'https://t.me/ethclassic' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-all hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)]"
              >
                {link.label}
                <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
          <h3 className="font-semibold text-[var(--text-primary)]">Disclaimer</h3>
          <p className="mt-3 text-sm text-[var(--color-text-muted)]">
            EthereumClassic.com provides information for educational purposes only. Nothing on this website constitutes
            financial advice, investment guidance, or a recommendation to buy, sell, or hold any cryptocurrency.
            Cryptocurrency involves significant risk. Always do your own research and consult qualified professionals
            before making financial decisions.
          </p>
        </div>
      </section>
    </main>
  )
}

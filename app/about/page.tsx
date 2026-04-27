import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Ethereum Classic',
  description:
    'EthereumClassic.com is the primary website for Ethereum Classic — covering news, learning resources, apps, mining, research, and development tools.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 via-transparent to-transparent" />

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
            EthereumClassic.com is the comprehensive resource for everything Ethereum Classic — from breaking news and
            educational content to developer tools and ecosystem applications.
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
              Ethereum Classic is the original, unaltered Ethereum blockchain — secured by proof-of-work, governed by a
              fixed monetary policy, and committed to the principle that code is law.
            </p>
            <p>
              This website exists to provide accurate, up-to-date information about the ETC ecosystem. We cover protocol
              developments, review dApps, publish educational guides, and maintain developer resources — all without
              gatekeeping or editorial bias.
            </p>
            <p>
              Every piece of content on this site is factual and verifiable. We do not provide financial advice, endorse
              specific investments, or make price predictions.
            </p>
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

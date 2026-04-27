'use client'

import Link from 'next/link'

const contributionAreas = [
  {
    title: 'Code & Development',
    description: 'Contribute to core clients, tools, and ecosystem projects.',
    items: [
      { label: 'Core Clients', detail: 'core-geth (Go), Besu (Java), Fukuii (Scala)', href: '/olympia/clients' },
      { label: 'Smart Contracts', detail: 'Solidity development, auditing, and testing', href: '/build' },
      { label: 'Frontend & Tools', detail: 'dApp interfaces, developer tooling, utilities', href: '/build/tools' },
    ],
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    color: 'text-blue-400 bg-blue-500/10',
  },
  {
    title: 'Mining & Infrastructure',
    description: 'Secure the network by running nodes and mining ETC.',
    items: [
      { label: 'Run a Node', detail: 'Full node, archive node, or light client', href: '/build/clients' },
      { label: 'Mine ETC', detail: 'GPU/ASIC mining with Etchash algorithm', href: '/mining' },
      { label: 'RPC Providers', detail: 'Operate public or private RPC endpoints', href: '/build' },
    ],
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    color: 'text-[var(--color-warning)] bg-[var(--color-warning-bg)]',
  },
  {
    title: 'Governance & ECIPs',
    description: 'Participate in protocol governance and improvement proposals.',
    items: [
      { label: 'Olympia DAO', detail: 'Membership NFT voting, proposals, and treasury governance', href: '/olympia/governance' },
      { label: 'ECIPs', detail: 'Write, review, and discuss improvement proposals', href: 'https://ecips.ethereumclassic.org' },
      { label: 'Core Dev Calls', detail: 'Join bi-weekly protocol development meetings', href: '/core-devs' },
    ],
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    color: 'text-[var(--color-success)] bg-[var(--color-success-bg)]',
  },
  {
    title: 'Community & Content',
    description: 'Help grow the community through education and outreach.',
    items: [
      { label: 'Social Media', detail: 'Share news, create content, engage on Discord/X', href: '/community' },
      { label: 'Education', detail: 'Write guides, tutorials, and documentation', href: '/learn' },
      { label: 'Events', detail: 'Organize meetups, hackathons, and conferences', href: '/community' },
    ],
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: 'text-purple-400 bg-purple-500/10',
  },
]

export default function CommunityContributePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <div>
              <Link
                href="/community"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Community
              </Link>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">How to Contribute</h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Ethereum Classic is a community-driven project. Everyone can contribute —
                whether through code, mining, governance, or community building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Areas */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {contributionAreas.map((area, idx) => (
              <div
                key={area.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${area.color}`}>
                    {area.icon}
                  </div>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)]">{area.title}</h2>
                </div>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">{area.description}</p>
                <div className="mt-4 space-y-3">
                  {area.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group block rounded-lg bg-[var(--bg)] p-3 transition-colors hover:bg-[var(--bg)]/80"
                    >
                      <div className="font-medium text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">{item.label}</div>
                      <div className="text-xs text-[var(--color-text-muted)]">{item.detail}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Quick Start</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/20 text-lg font-bold text-[var(--color-primary)]">1</div>
                <h3 className="font-medium text-[var(--text-primary)]">Join Discord</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Introduce yourself and find your niche</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/20 text-lg font-bold text-[var(--color-primary)]">2</div>
                <h3 className="font-medium text-[var(--text-primary)]">Pick an Area</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Code, mine, govern, or educate</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/20 text-lg font-bold text-[var(--color-primary)]">3</div>
                <h3 className="font-medium text-[var(--text-primary)]">Start Building</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Open a PR, submit an ECIP, or run a node</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://discord.com/invite/Tq57jxSwsa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Join Discord
            </a>
            <a
              href="https://github.com/ethereumclassic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

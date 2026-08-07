'use client'

import Link from 'next/link'

const REPO = 'https://github.com/fukuii-project/fukuii-gui'

export default function FukuiiGuiPage() {
  const modules = [
    {
      name: 'Self-custody wallet',
      module: 'Hold',
      description:
        'Keys stay on your machine. Mnemonic seed backup, view-only wallets for watching an address without exposing its keys, and offline transaction signing for an air-gapped setup.',
      features: ['Mnemonic seed backup', 'View-only wallets', 'Offline signing', 'Keys never leave the device'],
      icon: (
        <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
    },
    {
      name: 'Hardware wallets',
      module: 'Secure',
      description:
        'Ledger and Trezor devices are supported directly, so the signing key stays in the secure element and the desktop application never sees it.',
      features: ['Ledger Nano S, S Plus, X, Gen 5', 'Ledger Stax and Flex', 'Trezor Model T', 'Trezor Safe 3 and Safe 5'],
      icon: (
        <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      name: 'Node operation',
      module: 'Run',
      description:
        'Drive a Fukuii node from a graphical interface: watch sync progress, manage peers, and point the application at a node you run locally or one you reach remotely.',
      features: ['Sync monitoring', 'Peer management', 'Local or remote node config', 'Your own RPC, not a third party'],
      icon: (
        <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V6a3 3 0 013-3h13.5a3 3 0 013 3v5.25a3 3 0 01-3 3m-13.5 0v1.5a3 3 0 003 3h7.5a3 3 0 003-3v-1.5M6.75 6.75h.008v.008H6.75V6.75z" />
        </svg>
      ),
    },
    {
      name: 'Mining management',
      module: 'Mine',
      description:
        'A hub for miners working against their own node rather than a pool operator’s. Solo mining and P2Pool integration run alongside the wallet, on the same client.',
      features: ['Solo mining', 'P2Pool integration', 'Runs against your node', 'Alongside the wallet'],
      icon: (
        <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
    },
  ]

  const platforms = [
    { name: 'Windows', detail: 'x86-64' },
    { name: 'macOS', detail: 'Apple silicon and Intel' },
    { name: 'Linux', detail: 'x86-64' },
  ]

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <Link
            href="/wallet"
            className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Wallets
          </Link>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-warning)]/30 bg-[var(--color-warning)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-warning)]">
              In development
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Fukuii GUI
            </span>
          </h1>

          <p className="mt-2 text-xl text-[var(--color-text-secondary)] md:text-2xl">
            Use your own node
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-[var(--color-text-muted)]">
            A native desktop application for self-custody asset management and node operation, built
            on the same Qt/QML model as Monero GUI. It is the graphical interface to Fukuii: hold and
            transact ETC against the node you run, rather than through a third-party RPC endpoint
            that sees every address you look up.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--color-text-muted)]">
            Not just for miners. Anyone who would rather their own node answered their wallet&rsquo;s
            questions is the audience.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-[var(--background)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
            >
              Follow development
              <svg aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <a
              href="https://fukuii.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-8 py-4 text-base font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              <svg aria-hidden="true" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              About Fukuii
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">
              Capabilities
            </p>
            <h2 className="mt-4 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
              Your keys, your node, one application
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[var(--color-text-muted)]">
              Fukuii keeps the node lean and does not speak pool or wallet protocols itself. Fukuii
              GUI is a separate product that attaches to the node&rsquo;s integration seams.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {modules.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition hover:border-[var(--color-primary)]/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {m.icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">
                      {m.module}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">{m.name}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {m.description}
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                      <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">
              Platforms
            </p>
            <h2 className="mt-4 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
              Cross-platform desktop
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[var(--color-text-muted)]">
              Qt/QML, the same toolkit Monero GUI is built on, so the application is native on each
              desktop rather than a browser wrapped in a window.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 text-center"
              >
                <p className="font-semibold text-[var(--text-primary)]">{p.name}</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{p.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              <span className="font-semibold text-[var(--text-primary)]">The node underneath.</span>{' '}
              Fukuii is Ethereum Classic&rsquo;s first native client — an EVM execution client in
              Scala 3 LTS on the JVM, where one binary runs several networks at once in one process.
              Fukuii GUI drives it.{' '}
              <Link href="/build/clients/fukuii" className="text-[var(--color-primary)] hover:underline">
                Read about the client
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Running ETC today?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-text-muted)]">
            Hardware wallets and browser wallets cover Ethereum Classic now. Compare what is
            available while Fukuii GUI is built.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/wallet/compare"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--background)] transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Compare wallets
            </Link>
            <Link
              href="/wallet/hardware"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--color-primary)]/30"
            >
              Hardware wallets
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

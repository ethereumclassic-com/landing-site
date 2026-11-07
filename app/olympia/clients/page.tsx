import Link from 'next/link'
import ClientUpgradeCard from '../components/ClientUpgradeCard'
import OlympiaCountdown from '../components/OlympiaCountdown'
import { clients } from '../data/olympia'

/**
 * Each client's Olympia readiness, and nothing that outlives the upgrade. Choosing and running a
 * client is /build/clients, which is where every client link outside the Olympia hub goes.
 */
export default function OlympiaClientsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-4">
            <Link
              href="/olympia"
              className="text-sm text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
            >
              ← Olympia Hub
            </Link>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Clients for Olympia
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Each client publishes an Olympia release before the activation block. Until then, run the
            current release: Core-Geth, on its v1.13 line, is the recommended client, and Fukuii is an
            alternative to try.
          </p>

          <p className="mt-6">
            <Link
              href="/build/clients"
              className="text-sm font-medium text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
            >
              Compare and run the clients →
            </Link>
          </p>
        </div>
      </section>

      {/* Countdown banner */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <OlympiaCountdown variant="banner" />
        </div>
      </section>

      {/* Readiness by client */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 pt-16 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {clients.map((client) => (
              <ClientUpgradeCard key={client.id} client={client} />
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm text-[var(--color-text-muted)]">
            ETC plugins are not client implementations, so they are not part of a client&apos;s Olympia
            readiness. The plugin framework is described with the{' '}
            <Link
              href="/build/clients#plugins"
              className="font-medium text-[var(--brand-green)] hover:underline"
            >
              node clients
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}

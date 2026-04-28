import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal & Terms | Ethereum Classic',
  description: 'Terms of service and legal information for EthereumClassic.com.',
}

export default function LegalPage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">Terms of Service</h1>
          <p className="mt-4 text-[var(--color-text-secondary)]">Last updated: March 2026</p>

          <div className="mt-12 space-y-10 text-[var(--color-text-secondary)]">
            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Acceptance of Terms</h2>
              <p className="mt-3">
                By accessing and using EthereumClassic.com, you agree to these terms of service. If you do not agree with
                any part of these terms, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Informational Purpose Only</h2>
              <p className="mt-3">
                All content on EthereumClassic.com is provided for informational and educational purposes only. Nothing on
                this website constitutes:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1">
                <li>Financial, investment, or trading advice</li>
                <li>A recommendation to buy, sell, or hold any cryptocurrency</li>
                <li>A guarantee of any particular outcome or return</li>
                <li>Legal, tax, or accounting advice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Risk Disclaimer</h2>
              <p className="mt-3">
                Cryptocurrency and blockchain technology involve significant risks, including but not limited to:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1">
                <li>Loss of funds due to market volatility</li>
                <li>Smart contract vulnerabilities and exploits</li>
                <li>Regulatory changes affecting cryptocurrency use</li>
                <li>Loss of access to funds through lost private keys</li>
                <li>Network attacks and protocol-level risks</li>
              </ul>
              <p className="mt-3">
                Always do your own research (DYOR) and consult qualified professionals before making any financial decisions.
                Never invest more than you can afford to lose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Third-Party Links</h2>
              <p className="mt-3">
                This website contains links to third-party websites, applications, and services. We do not control, endorse,
                or assume responsibility for the content, privacy policies, or practices of any third-party services.
                Accessing third-party links is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Accuracy of Information</h2>
              <p className="mt-3">
                While we strive to provide accurate and up-to-date information, we make no warranties or representations
                regarding the completeness, accuracy, reliability, or availability of any content. Network statistics,
                prices, and protocol data may be delayed or approximate.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Intellectual Property</h2>
              <p className="mt-3">
                Original content on this website is provided under open terms. The Ethereum Classic protocol, brand assets,
                and community resources are governed by their respective licenses. Third-party trademarks and logos belong to
                their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Limitation of Liability</h2>
              <p className="mt-3">
                To the maximum extent permitted by law, EthereumClassic.com and its contributors shall not be liable for any
                direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or
                reliance on any information provided herein.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Changes to Terms</h2>
              <p className="mt-3">
                We reserve the right to modify these terms at any time. Continued use of the website following changes
                constitutes acceptance of the updated terms.
              </p>
            </section>

            <div className="pt-6">
              <Link
                href="/privacy"
                className="text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
              >
                View Privacy Policy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

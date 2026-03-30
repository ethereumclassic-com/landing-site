import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ethereum Classic',
  description: 'Privacy policy for EthereumClassic.com. Learn how we handle your data.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white">Privacy Policy</h1>
          <p className="mt-4 text-[var(--color-text-secondary)]">Last updated: March 2026</p>

          <div className="mt-12 space-y-10 text-[var(--color-text-secondary)]">
            <section>
              <h2 className="text-xl font-semibold text-white">Overview</h2>
              <p className="mt-3">
                EthereumClassic.com is an informational website about the Ethereum Classic blockchain. We are committed to
                respecting your privacy and minimizing data collection.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
              <p className="mt-3">
                This website is a static site that does not require user accounts or login. We do not collect personal
                information unless you voluntarily provide it (for example, via a contact form or newsletter signup).
              </p>
              <p className="mt-3">We may collect anonymous usage data through standard web analytics, including:</p>
              <ul className="mt-3 list-inside list-disc space-y-1">
                <li>Pages visited and time spent</li>
                <li>Referring websites</li>
                <li>Browser type and device information</li>
                <li>Approximate geographic location (country level)</li>
              </ul>
              <p className="mt-3">This data is aggregated and cannot be used to identify individual users.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Cookies</h2>
              <p className="mt-3">
                This website may use essential cookies for basic functionality (such as theme preferences). We do not use
                tracking cookies or third-party advertising cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Third-Party Services</h2>
              <p className="mt-3">
                This site may embed content from or link to third-party services (block explorers, exchanges, dApps). These
                services have their own privacy policies. We encourage you to review their policies before interacting with
                them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Blockchain Interactions</h2>
              <p className="mt-3">
                This website does not process blockchain transactions directly. If you interact with dApps or services linked
                from this site, those transactions occur on-chain and are publicly visible by design. We have no control over
                blockchain data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Data Retention</h2>
              <p className="mt-3">
                Analytics data is retained in aggregated form. If you contact us via email, we retain correspondence for as
                long as necessary to respond to your inquiry.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Your Rights</h2>
              <p className="mt-3">
                You may request deletion of any personal data you have provided to us. Since we collect minimal data, there
                is typically nothing to delete for anonymous visitors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Changes to This Policy</h2>
              <p className="mt-3">
                We may update this privacy policy from time to time. Changes will be reflected on this page with an updated
                date.
              </p>
            </section>

            <div className="pt-6">
              <Link
                href="/legal"
                className="text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
              >
                View Terms of Service &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

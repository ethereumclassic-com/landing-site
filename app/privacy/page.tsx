import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ethereum Classic',
  description:
    'Privacy policy for ethereumclassic.com: no accounts, forms or cookies, and page views counted with Cloudflare Web Analytics, which collects no personal data.',
}

/**
 * What the site does with a visitor's data, written from what it actually loads: one script, Cloudflare
 * Web Analytics, from the root layout. Check this page against the scripts and requests a page makes in a
 * browser whenever the layout or a page adds one.
 */
export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">Privacy Policy</h1>
          <p className="mt-4 text-[var(--color-text-secondary)]">Last updated: November 2026</p>

          <div className="mt-12 space-y-10 text-[var(--color-text-secondary)]">
            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Overview</h2>
              <p className="mt-3">
                ethereumclassic.com is an informational website about the Ethereum Classic blockchain. It has no
                accounts, no logins and no forms. It collects no personal data, sets no cookies, and uses no
                advertising pixels or cross-site tracking.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Analytics</h2>
              <p className="mt-3">
                To count page views and measure how pages perform, the site loads Cloudflare Web Analytics, which in
                Cloudflare&rsquo;s words &ldquo;does not collect or use your visitors&rsquo; personal data.&rdquo; It
                is the only script the site loads from another company. See{' '}
                <a
                  href="https://developers.cloudflare.com/web-analytics/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  how Cloudflare Web Analytics works
                </a>{' '}
                and{' '}
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Cloudflare&rsquo;s Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">In Your Browser</h2>
              <p className="mt-3">
                Your light or dark theme choice is kept in your browser&rsquo;s local storage and is not sent
                anywhere. Prices, network statistics and other live figures are fetched by this site&rsquo;s own
                servers from public sources such as Blockscout and CoinGecko, so your browser does not contact them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Email</h2>
              <p className="mt-3">
                If you write to one of the addresses on the{' '}
                <Link href="/contact" className="text-[var(--color-primary)] hover:underline">
                  Contact page
                </Link>
                , your message and your address are kept for as long as it takes to answer you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Links to Other Sites</h2>
              <p className="mt-3">
                This site links to block explorers, exchanges, wallets, apps and other services. Each has its own
                privacy policy, which applies once you follow a link to it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Blockchain Interactions</h2>
              <p className="mt-3">
                This website does not process blockchain transactions. If you interact with apps or services linked
                from this site, those transactions occur on-chain and are publicly visible by design. We have no
                control over blockchain data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Hosting</h2>
              <p className="mt-3">
                This site is hosted on Vercel, which may keep standard server logs, such as IP addresses and request
                times, as part of normal web hosting. See{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Vercel&rsquo;s Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Your Rights</h2>
              <p className="mt-3">
                You may ask for any correspondence you have sent us to be deleted, by writing to the general address
                on the Contact page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">Changes to This Policy</h2>
              <p className="mt-3">
                When this policy changes, this page shows the change and a new date.
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
    </div>
  )
}

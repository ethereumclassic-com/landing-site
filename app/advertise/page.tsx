import { CONTACT_EMAILS } from '@/lib/social'

const adPlacements = [
  {
    name: 'Banner Ads',
    description: 'Full-width banners at the top of key pages. High visibility placement.',
    pages: ['Homepage', 'Wallet', 'Mining', 'Apps'],
    format: '728x90 or responsive',
  },
  {
    name: 'Sidebar Ads',
    description: 'Vertical ad cards in page sidebars. Great for targeted content.',
    pages: ['Learn articles', 'News', 'Tools'],
    format: '300x250',
  },
  {
    name: 'Inline Ads',
    description: 'Native-style ads within content areas. Non-intrusive integration.',
    pages: ['Mining guides', 'Trading pages', 'Hardware reviews'],
    format: 'Text + small image',
  },
  {
    name: 'Sponsored Content',
    description: 'Featured articles and guides promoting your product or service.',
    pages: ['News section', 'Learn section'],
    format: 'Full article',
  },
]

// Who reads the site, described by what they come for. No figures: nothing on the site measures them,
// so a number here would be a claim with nothing behind it.
const audienceTypes = [
  { type: 'Miners', description: 'ETC miners looking for hardware, pools, and tools' },
  { type: 'Traders', description: 'Traders looking for exchanges, wallets, and market tools' },
  { type: 'Developers', description: 'Developers building dApps and integrations on ETC' },
  { type: 'Holders', description: 'Long-term holders following ecosystem news' },
]

const guidelines = [
  'Ads must be relevant to cryptocurrency, blockchain, or related technologies',
  'No scams, phishing, or misleading claims',
  'No explicit or inappropriate content',
  'Links must be working and lead to legitimate websites',
  'Advertisers must disclose their relationship with advertised products',
  'We reserve the right to reject any ad at our discretion',
]

export default function AdvertisePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-[var(--panel)] to-[var(--bg)] py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--color-primary-rgb),0.1),transparent_70%)]" />
        <div className="container relative mx-auto max-w-6xl px-4">
          <div
            className="mx-auto max-w-3xl text-center"
          >
            <h1
              className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl"
            >
              Advertise on EthereumClassic.com
            </h1>
            <p
              className="mt-4 text-lg text-[var(--color-text-secondary)]"
            >
              Reach the Ethereum Classic community directly — a technically sophisticated audience of miners, developers, DeFi users, and long-term holders. Promote your wallet, exchange, mining pool, or blockchain product to one of the most engaged Proof-of-Work communities in the industry.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${CONTACT_EMAILS.advertising}`}
                className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--brand-green-foreground)] transition hover:bg-[var(--color-primary-hover)]"
              >
                Get Started
              </a>
              <a
                href="#placements"
                className="rounded-xl border border-[var(--border)] px-6 py-3 font-semibold text-[var(--text-primary)] transition hover:bg-[var(--panel)]"
              >
                View Placements
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Breakdown */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Our Audience</h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              The people who come to the site, and what they come for
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {audienceTypes.map((audience) => (
              <div
                key={audience.type}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{audience.type}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Placements */}
      <section id="placements" className="border-t border-[var(--border)] bg-[var(--panel)] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Ad Placements</h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Multiple placement options to fit your marketing goals and budget
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {adPlacements.map((placement) => (
              <div
                key={placement.name}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{placement.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{placement.description}</p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-[var(--color-text-secondary)]">Pages:</span>
                    <span className="text-xs text-[var(--color-text-muted)]">{placement.pages.join(', ')}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-[var(--color-text-secondary)]">Format:</span>
                    <span className="text-xs text-[var(--color-text-muted)]">{placement.format}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div
            >
              <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Advertising Guidelines</h2>
              <p className="mt-4 text-[var(--color-text-muted)]">
                We maintain high standards to protect our community. All ads must comply with these guidelines.
              </p>

              <ul className="mt-6 space-y-3">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-[var(--color-primary)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[var(--color-text-secondary)]">{guideline}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">Ready to Advertise?</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Contact us with your campaign details and we will get back to you with a custom quote.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-[var(--color-text-secondary)]">What we need:</h4>
                  <ul className="mt-2 space-y-1 text-sm text-[var(--color-text-muted)]">
                    <li>- Your company/project name</li>
                    <li>- Desired ad placement(s)</li>
                    <li>- Campaign duration</li>
                    <li>- Budget range</li>
                    <li>- Ad creative (or if you need design help)</li>
                  </ul>
                </div>

                <a
                  href={`mailto:${CONTACT_EMAILS.advertising}`}
                  className="mt-6 block w-full rounded-xl bg-[var(--color-primary)] px-6 py-4 text-center font-semibold text-[var(--brand-green-foreground)] transition hover:bg-[var(--color-primary-hover)]"
                >
                  Contact Us
                </a>

                <p className="text-center text-xs text-[var(--color-text-muted)]">
                  Typical response time: 1-2 business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Why Advertise With Us?</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Targeted Audience',
                description: 'Reach people engaged with the ETC ecosystem.',
                icon: (
                  <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'High Engagement',
                description: 'Our community is active and engaged. Real users making real decisions.',
                icon: (
                  <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
              {
                title: 'Flexible Options',
                description: 'From banner ads to sponsored content. Find the format that works for you.',
                icon: (
                  <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 font-semibold text-[var(--text-primary)]">{benefit.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

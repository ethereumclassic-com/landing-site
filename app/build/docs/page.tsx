'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { docResources, explorerAPIs, rpcEndpoints, getDocsByCategory, getMainnetEndpoints, getTestnetEndpoints } from '../data/build'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Icons
const ChevronRightIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
)

const BookIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const AcademicIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
)

const DocumentIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
)

const ServerIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

const ClipboardIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
  </svg>
)

const categoryIcons: Record<string, React.ReactNode> = {
  official: <BookIcon />,
  tutorial: <AcademicIcon />,
  reference: <DocumentIcon />,
  standards: <ServerIcon />,
  community: <UsersIcon />,
}

const categoryLabels: Record<string, string> = {
  official: 'Official Documentation',
  tutorial: 'Tutorials & Guides',
  reference: 'Quick Reference',
  standards: 'Standards & Specs',
  community: 'Community Resources',
}

export default function DocsPage() {
  const officialDocs = getDocsByCategory('official')
  const tutorials = getDocsByCategory('tutorial')
  const references = getDocsByCategory('reference')
  const standards = getDocsByCategory('standards')
  const mainnetRpcs = getMainnetEndpoints()
  const testnetRpcs = getTestnetEndpoints()

  const categories = [
    { key: 'official', docs: officialDocs },
    { key: 'standards', docs: standards },
    { key: 'tutorial', docs: tutorials },
    { key: 'reference', docs: references },
  ]

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Breadcrumb */}
      <div className="border-b border-[var(--border)] bg-[var(--panel)] px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Link href="/build" className="hover:text-white">
              Build
            </Link>
            <ChevronRightIcon />
            <span className="text-white">Documentation</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--color-primary)]/10 via-[var(--bg)] to-[var(--bg)] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Developer Documentation
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Everything you need to build on Ethereum Classic. Protocol specs, API references,
              tutorials, and tools documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {categories.map(({ key, docs }) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  {categoryIcons[key]}
                </div>
                <h2 className="text-2xl font-bold text-white">{categoryLabels[key]}</h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {docs.map((doc) => (
                  <a
                    key={doc.id}
                    href={doc.url}
                    target={doc.url.startsWith('http') ? '_blank' : undefined}
                    rel={doc.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:border-[var(--color-primary)]/30 hover:bg-[var(--panel-hover)]"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                        {doc.name}
                      </h3>
                      {doc.url.startsWith('http') && <ExternalLinkIcon />}
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">{doc.description}</p>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RPC Endpoints */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white">RPC Endpoints</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Public RPC endpoints for connecting to Ethereum Classic
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Mainnet RPC */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--bg)] p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">Mainnet (Chain ID: 61)</h3>
              <div className="space-y-3">
                {mainnetRpcs.map((rpc, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg bg-[var(--panel)] p-3"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-white">{rpc.provider}</p>
                      <p className="truncate font-mono text-xs text-[var(--color-text-muted)]">
                        {rpc.url}
                      </p>
                    </div>
                    <button
                      onClick={() => navigator.clipboard.writeText(rpc.url)}
                      className="ml-3 flex-shrink-0 rounded-lg bg-[var(--bg)] p-2 text-[var(--color-text-muted)] transition hover:text-white"
                    >
                      <ClipboardIcon />
                    </button>
                  </div>
                ))}
              </div>
              <a
                href="https://chainlist.org/chain/61"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--color-primary)]/30 py-2 text-sm text-[var(--color-primary)] transition hover:bg-[var(--color-primary)]/10"
              >
                View all on Chainlist <ExternalLinkIcon />
              </a>
            </motion.div>

            {/* Testnet RPC */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">Mordor Testnet (Chain ID: 63)</h3>
              <div className="space-y-3">
                {testnetRpcs.map((rpc, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg bg-[var(--panel)] p-3"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-white">{rpc.provider}</p>
                      <p className="truncate font-mono text-xs text-[var(--color-text-muted)]">
                        {rpc.url}
                      </p>
                    </div>
                    <button
                      onClick={() => navigator.clipboard.writeText(rpc.url)}
                      className="ml-3 flex-shrink-0 rounded-lg bg-[var(--bg)] p-2 text-[var(--color-text-muted)] transition hover:text-white"
                    >
                      <ClipboardIcon />
                    </button>
                  </div>
                ))}
              </div>
              <a
                href="https://chainlist.org/chain/63"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border)] py-2 text-sm text-white transition hover:bg-[var(--panel)]"
              >
                View all on Chainlist <ExternalLinkIcon />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Block Explorers */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white">Block Explorers & APIs</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Explore transactions, verify contracts, and access blockchain data
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-2"
          >
            {explorerAPIs.map((explorer, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold text-white">{explorer.name}</h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${
                      explorer.network === 'mainnet'
                        ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}
                  >
                    {explorer.network}
                  </span>
                </div>
                <p className="mb-4 text-sm text-[var(--color-text-muted)]">{explorer.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--color-text-muted)]">Explorer</span>
                    <a
                      href={explorer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[var(--color-primary)] hover:underline"
                    >
                      {explorer.url.replace('https://', '')} <ExternalLinkIcon />
                    </a>
                  </div>
                  {explorer.apiUrl && (
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--color-text-muted)]">API</span>
                      <code className="text-xs text-white">
                        {explorer.apiUrl.replace('https://', '')}
                      </code>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-center text-2xl font-bold text-white">Quick Links</h2>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Getting Started',
                  description: 'Deploy your first contract',
                  href: '/build/getting-started',
                },
                {
                  title: 'Node Clients',
                  description: 'Run your own ETC node',
                  href: '/build/clients',
                },
                {
                  title: 'Developer Tools',
                  description: 'Frameworks and libraries',
                  href: '/build/tools',
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="group rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 transition hover:border-[var(--color-primary)]/30"
                >
                  <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                    {link.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{link.description}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] bg-gradient-to-b from-[var(--bg)] to-[var(--panel)] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Need Help?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-muted)]">
              Join the Ethereum Classic developer community for support and discussions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://discord.gg/ethereumclassic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
              >
                Join Discord
                <ExternalLinkIcon />
              </a>
              <a
                href="https://github.com/ethereumclassic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--panel-hover)]"
              >
                GitHub
                <ExternalLinkIcon />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

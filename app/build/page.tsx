'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  devTools,
  nodeClients,
  networks,
  buildStats,
  getRecommendedTools,
  docResources,
  faucets,
} from './data/build'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Icons
const CodeIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const ServerIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
)

const BookIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const RocketIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
)

const WrenchIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
  </svg>
)

const CubeIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

export default function BuildPage() {
  const recommendedTools = getRecommendedTools()
  const mainnet = networks.find((n) => n.type === 'mainnet')!
  const testnet = networks.find((n) => n.type === 'testnet')!

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-[var(--color-primary)]/10 via-[var(--bg)] to-[var(--bg)] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm text-[var(--color-primary)]">
              <CodeIcon />
              <span>EVM Compatible</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Build on Ethereum Classic
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-[var(--color-text-muted)] md:text-xl">
              Full EVM compatibility means you can use familiar Ethereum tools like Hardhat, Foundry,
              and Remix. Deploy your Solidity contracts to a network that values
              <span className="text-white"> immutability</span> and
              <span className="text-white"> code is law</span>.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/build/getting-started"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
              >
                <RocketIcon />
                Get Started
              </Link>
              <Link
                href="/build/docs"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--panel-hover)]"
              >
                <BookIcon />
                Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="border-b border-[var(--border)] bg-[var(--panel)] px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {[
              { label: 'Chain ID', value: buildStats.chainId.toString() },
              { label: 'Testnet ID', value: buildStats.testnetChainId.toString() },
              { label: 'Block Time', value: buildStats.blockTime },
              { label: 'EVM Version', value: buildStats.evmVersion },
              { label: 'Consensus', value: 'Proof of Work' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-sm text-[var(--color-text-muted)]">{stat.label}</p>
                <p className="text-lg font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-3xl font-bold text-white"
          >
            Developer Resources
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                title: 'Getting Started',
                description: 'Step-by-step guide to deploying your first contract on ETC',
                href: '/build/getting-started',
                icon: <RocketIcon />,
              },
              {
                title: 'Documentation',
                description: 'Tutorials, API references, and protocol specifications',
                href: '/build/docs',
                icon: <BookIcon />,
              },
              {
                title: 'Node Clients',
                description: 'Run your own node with Core-Geth or Hyperledger Besu',
                href: '/build/clients',
                icon: <ServerIcon />,
              },
              {
                title: 'Developer Tools',
                description: 'Frameworks, libraries, and testing utilities',
                href: '/build/tools',
                icon: <WrenchIcon />,
              },
            ].map((card, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6 transition hover:border-[var(--color-primary)]/30 hover:bg-[var(--panel-hover)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {card.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-[var(--color-primary)]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{card.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Network Configuration */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white">Network Configuration</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Add ETC to your wallet or configure your development environment
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Mainnet */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--bg)] p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/20">
                  <CubeIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{mainnet.name}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">Production Network</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between rounded-lg bg-[var(--panel)] p-3">
                  <span className="text-[var(--color-text-muted)]">Chain ID</span>
                  <code className="font-mono text-[var(--color-primary)]">{mainnet.chainId}</code>
                </div>
                <div className="flex justify-between rounded-lg bg-[var(--panel)] p-3">
                  <span className="text-[var(--color-text-muted)]">Symbol</span>
                  <code className="font-mono text-white">{mainnet.symbol}</code>
                </div>
                <div className="flex justify-between rounded-lg bg-[var(--panel)] p-3">
                  <span className="text-[var(--color-text-muted)]">RPC URL</span>
                  <code className="font-mono text-white">https://etc.rivet.link</code>
                </div>
                <div className="flex justify-between rounded-lg bg-[var(--panel)] p-3">
                  <span className="text-[var(--color-text-muted)]">Explorer</span>
                  <a
                    href={mainnet.explorer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-[var(--color-primary)] hover:underline"
                  >
                    Blockscout <ExternalLinkIcon />
                  </a>
                </div>
              </div>
              <a
                href="https://chainlist.org/chain/61"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 py-3 text-sm font-medium text-[var(--color-primary)] transition hover:bg-[var(--color-primary)]/20"
              >
                Add to Wallet via Chainlist
                <ExternalLinkIcon />
              </a>
            </motion.div>

            {/* Testnet */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg)]">
                  <CubeIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testnet.name}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">Development & Testing</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between rounded-lg bg-[var(--panel)] p-3">
                  <span className="text-[var(--color-text-muted)]">Chain ID</span>
                  <code className="font-mono text-white">{testnet.chainId}</code>
                </div>
                <div className="flex justify-between rounded-lg bg-[var(--panel)] p-3">
                  <span className="text-[var(--color-text-muted)]">Symbol</span>
                  <code className="font-mono text-white">{testnet.symbol}</code>
                </div>
                <div className="flex justify-between rounded-lg bg-[var(--panel)] p-3">
                  <span className="text-[var(--color-text-muted)]">RPC URL</span>
                  <code className="font-mono text-xs text-white">rpc.mordor.etccooperative.org</code>
                </div>
                <div className="flex justify-between rounded-lg bg-[var(--panel)] p-3">
                  <span className="text-[var(--color-text-muted)]">Explorer</span>
                  <a
                    href={testnet.explorer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-[var(--color-primary)] hover:underline"
                  >
                    Blockscout <ExternalLinkIcon />
                  </a>
                </div>
              </div>
              <a
                href={faucets[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] py-3 text-sm font-medium text-white transition hover:bg-[var(--panel-hover)]"
              >
                Get Testnet ETC from Faucet
                <ExternalLinkIcon />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Tools */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white">Recommended Tools</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Industry-standard development tools that work seamlessly with ETC
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {recommendedTools.map((tool) => (
              <motion.a
                key={tool.id}
                variants={fadeInUp}
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:border-[var(--color-primary)]/30 hover:bg-[var(--panel-hover)]"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                    {tool.name}
                  </h3>
                  <ExternalLinkIcon />
                </div>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{tool.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                    {tool.category}
                  </span>
                  {tool.languages?.slice(0, 2).map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              href="/build/tools"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline"
            >
              View all developer tools
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Node Clients */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white">Node Clients</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Run your own Ethereum Classic node for maximum decentralization
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {nodeClients.map((client) => (
              <motion.div
                key={client.id}
                variants={fadeInUp}
                className={`rounded-2xl border p-6 ${
                  client.recommended
                    ? 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5'
                    : 'border-[var(--border)] bg-[var(--bg)]'
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{client.name}</h3>
                  {client.recommended && (
                    <span className="rounded-full bg-[var(--color-primary)]/20 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="mb-4 text-sm text-[var(--color-text-muted)]">{client.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[var(--panel)] px-2 py-0.5 text-xs text-white">
                    {client.language}
                  </span>
                  {client.platforms.slice(0, 3).map((platform) => (
                    <span
                      key={platform}
                      className="rounded-full bg-[var(--panel)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1 rounded-lg bg-[var(--panel)] py-2 text-sm text-white transition hover:bg-[var(--panel-hover)]"
                  >
                    Docs <ExternalLinkIcon />
                  </a>
                  <a
                    href={client.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1 rounded-lg bg-[var(--panel)] py-2 text-sm text-white transition hover:bg-[var(--panel-hover)]"
                  >
                    GitHub <ExternalLinkIcon />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              href="/build/clients"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline"
            >
              View detailed client comparison
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white">Learning Resources</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Tutorials, documentation, and guides to help you get started
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {docResources.slice(0, 6).map((resource) => (
              <motion.a
                key={resource.id}
                variants={fadeInUp}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition hover:border-[var(--color-primary)]/30 hover:bg-[var(--panel-hover)]"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-medium text-white group-hover:text-[var(--color-primary)]">
                    {resource.name}
                  </h3>
                  <ExternalLinkIcon />
                </div>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{resource.description}</p>
                <span className="mt-2 inline-block rounded-full bg-[var(--bg)] px-2 py-0.5 text-xs capitalize text-[var(--color-text-muted)]">
                  {resource.category}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] bg-gradient-to-b from-[var(--panel)] to-[var(--bg)] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to Build on ETC?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-muted)]">
              Start with our getting started guide and deploy your first smart contract on Ethereum
              Classic in minutes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/build/getting-started"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
              >
                <RocketIcon />
                Start Building
              </Link>
              <a
                href="https://discord.gg/ethereumclassic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-8 py-4 font-semibold text-white transition hover:bg-[var(--panel-hover)]"
              >
                Join Developer Discord
                <ExternalLinkIcon />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

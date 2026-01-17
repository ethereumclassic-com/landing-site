'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { gettingStartedSteps, networks, faucets, getRecommendedTools, buildStats } from '../data/build'

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

const CheckCircleIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CodeIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const CubeIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
)

const WalletIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
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

export default function GettingStartedPage() {
  const recommendedTools = getRecommendedTools().slice(0, 3)
  const mainnet = networks.find((n) => n.type === 'mainnet')!
  const testnet = networks.find((n) => n.type === 'testnet')!

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
            <span className="text-white">Getting Started</span>
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
              Getting Started with ETC Development
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Deploy your first smart contract to Ethereum Classic in under 10 minutes. Follow this
              step-by-step guide using industry-standard tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b border-[var(--border)] bg-[var(--panel)] px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: <CubeIcon />, label: 'Chain ID', value: buildStats.chainId.toString() },
              { icon: <GlobeIcon />, label: 'Testnet', value: `Mordor (${buildStats.testnetChainId})` },
              { icon: <CodeIcon />, label: 'EVM', value: buildStats.evmVersion },
              { icon: <WalletIcon />, label: 'Block Time', value: buildStats.blockTime },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--bg)] text-[var(--color-primary)]">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)]">{stat.label}</p>
                  <p className="font-semibold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-2xl font-bold text-white">Prerequisites</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: 'Node.js 18+',
                  description: 'JavaScript runtime for development tools',
                  link: 'https://nodejs.org/',
                },
                {
                  title: 'Code Editor',
                  description: 'VS Code with Solidity extension recommended',
                  link: 'https://code.visualstudio.com/',
                },
                {
                  title: 'MetaMask or Wallet',
                  description: 'Browser wallet for interacting with ETC',
                  link: '/wallet',
                },
                {
                  title: 'Basic Solidity',
                  description: 'Familiarity with smart contract concepts',
                  link: 'https://docs.soliditylang.org/',
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition hover:border-[var(--color-primary)]/30"
                >
                  <CheckCircleIcon />
                  <div>
                    <p className="font-medium text-white group-hover:text-[var(--color-primary)]">
                      {item.title}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)]">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold text-white"
          >
            Step-by-Step Guide
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {gettingStartedSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="relative"
              >
                {/* Connector Line */}
                {index < gettingStartedSteps.length - 1 && (
                  <div className="absolute left-6 top-16 h-full w-0.5 bg-[var(--border)]" />
                )}

                <div className="flex gap-6">
                  {/* Step Number */}
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-bold text-black">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mb-4 text-[var(--color-text-muted)]">{step.description}</p>

                    {/* Code Block */}
                    {step.code && (
                      <div className="relative mb-4 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg)]">
                        <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--panel)] px-4 py-2">
                          <span className="text-xs text-[var(--color-text-muted)]">
                            {step.code.includes('//') ? 'JavaScript' : 'Terminal'}
                          </span>
                          <button
                            onClick={() => navigator.clipboard.writeText(step.code!)}
                            className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] hover:text-white"
                          >
                            <ClipboardIcon />
                            Copy
                          </button>
                        </div>
                        <pre className="overflow-x-auto p-4 text-sm">
                          <code className="text-[var(--color-primary)]">{step.code}</code>
                        </pre>
                      </div>
                    )}

                    {/* Link */}
                    {step.link && step.linkText && (
                      <a
                        href={step.link}
                        target={step.link.startsWith('http') ? '_blank' : undefined}
                        rel={step.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline"
                      >
                        {step.linkText}
                        {step.link.startsWith('http') && <ExternalLinkIcon />}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Network Configuration Quick Reference */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-center text-2xl font-bold text-white">
              Network Configuration
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Mainnet Config */}
              <div className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--panel)] p-6">
                <h3 className="mb-4 font-semibold text-white">Mainnet (Production)</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Network Name</span>
                    <code className="text-white">{mainnet.name}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Chain ID</span>
                    <code className="text-[var(--color-primary)]">{mainnet.chainId}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Currency</span>
                    <code className="text-white">{mainnet.symbol}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">RPC URL</span>
                    <code className="text-xs text-white">etc.rivet.link</code>
                  </div>
                </div>
              </div>

              {/* Testnet Config */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
                <h3 className="mb-4 font-semibold text-white">Mordor Testnet (Development)</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Network Name</span>
                    <code className="text-white">{testnet.name}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Chain ID</span>
                    <code className="text-white">{testnet.chainId}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">Currency</span>
                    <code className="text-white">{testnet.symbol}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-muted)]">RPC URL</span>
                    <code className="text-xs text-white">rpc.mordor.etccooperative.org</code>
                  </div>
                </div>
                <a
                  href={faucets[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] py-2 text-sm text-white transition hover:bg-[var(--panel)]"
                >
                  Get Testnet ETC <ExternalLinkIcon />
                </a>
              </div>
            </div>

            {/* Hardhat Config Example */}
            <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--bg)]">
              <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--panel)] px-4 py-2">
                <span className="text-sm font-medium text-white">hardhat.config.js</span>
                <button
                  onClick={() => {
                    const config = `module.exports = {
  networks: {
    etc: {
      url: "https://etc.rivet.link",
      chainId: 61,
      accounts: [process.env.PRIVATE_KEY]
    },
    mordor: {
      url: "https://rpc.mordor.etccooperative.org",
      chainId: 63,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
}`
                    navigator.clipboard.writeText(config)
                  }}
                  className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] hover:text-white"
                >
                  <ClipboardIcon />
                  Copy
                </button>
              </div>
              <pre className="overflow-x-auto p-4 text-sm">
                <code className="text-[var(--color-text-muted)]">
{`module.exports = {
  networks: {
    etc: {
      url: `}<span className="text-[var(--color-primary)]">"https://etc.rivet.link"</span>{`,
      chainId: `}<span className="text-[var(--color-primary)]">61</span>{`,
      accounts: [process.env.PRIVATE_KEY]
    },
    mordor: {
      url: `}<span className="text-[var(--color-primary)]">"https://rpc.mordor.etccooperative.org"</span>{`,
      chainId: `}<span className="text-[var(--color-primary)]">63</span>{`,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
}`}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recommended Tools */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-center text-2xl font-bold text-white">Recommended Tools</h2>

            <div className="grid gap-4 md:grid-cols-3">
              {recommendedTools.map((tool) => (
                <a
                  key={tool.id}
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 transition hover:border-[var(--color-primary)]/30"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)]">
                      {tool.name}
                    </h3>
                    <ExternalLinkIcon />
                  </div>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{tool.description}</p>
                </a>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/build/tools"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline"
              >
                View all tools
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-center text-2xl font-bold text-white">Development Tips</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: 'Always Test on Mordor First',
                  description:
                    'Deploy and test thoroughly on testnet before mainnet. Mordor has the same EVM as mainnet.',
                },
                {
                  title: 'Use Established Patterns',
                  description:
                    'Leverage OpenZeppelin contracts for tokens, access control, and common patterns.',
                },
                {
                  title: 'Verify Your Contracts',
                  description:
                    'Verify source code on Blockscout for transparency and easier interaction.',
                },
                {
                  title: 'Mind Gas Costs',
                  description:
                    'ETC gas is cheaper than ETH, but optimize contracts to minimize user costs.',
                },
              ].map((tip, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5"
                >
                  <h3 className="mb-2 font-semibold text-white">{tip.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{tip.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] bg-gradient-to-b from-[var(--panel)] to-[var(--bg)] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Need More Help?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-muted)]">
              Explore our documentation, join the community, or check out example projects.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/build/docs"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
              >
                View Documentation
              </Link>
              <a
                href="https://discord.gg/ethereumclassic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--panel-hover)]"
              >
                Join Discord
                <ExternalLinkIcon />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

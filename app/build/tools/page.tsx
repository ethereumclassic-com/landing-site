'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { devTools, getToolsByCategory, type DevTool } from '../data/build'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const categoryLabels: Record<DevTool['category'], { label: string; description: string; color: string }> = {
  framework: {
    label: 'Development Frameworks',
    description: 'Complete toolkits for building, testing, and deploying smart contracts',
    color: 'text-purple-400',
  },
  library: {
    label: 'Libraries & SDKs',
    description: 'Libraries for interacting with Ethereum Classic from your applications',
    color: 'text-blue-400',
  },
  ide: {
    label: 'IDEs & Editors',
    description: 'Integrated development environments for writing smart contracts',
    color: 'text-green-400',
  },
  testing: {
    label: 'Security & Testing',
    description: 'Tools for analyzing and auditing smart contract security',
    color: 'text-red-400',
  },
  deployment: {
    label: 'Deployment',
    description: 'Tools for deploying contracts to the network',
    color: 'text-amber-400',
  },
  debugging: {
    label: 'Debugging',
    description: 'Tools for debugging and tracing transactions',
    color: 'text-cyan-400',
  },
}

const languageColors: Record<string, { bg: string; text: string }> = {
  JavaScript: { bg: 'bg-yellow-500/10', text: 'text-yellow-400' },
  TypeScript: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
  Solidity: { bg: 'bg-purple-500/10', text: 'text-purple-400' },
  Vyper: { bg: 'bg-green-500/10', text: 'text-green-400' },
  Python: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
  React: { bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
}

function ToolCard({ tool }: { tool: DevTool }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition-colors hover:border-[var(--color-primary)]/30"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-white">{tool.name}</h3>
            {tool.recommended && (
              <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs font-medium text-[var(--color-primary)]">
                Recommended
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{tool.description}</p>
        </div>
      </div>

      {tool.languages && tool.languages.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {tool.languages.map((lang) => {
              const colors = languageColors[lang] || { bg: 'bg-gray-500/10', text: 'text-gray-400' }
              return (
                <span
                  key={lang}
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${colors.bg} ${colors.text}`}
                >
                  {lang}
                </span>
              )
            })}
          </div>
        </div>
      )}

      <a
        href={tool.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline"
      >
        Visit Website
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </motion.div>
  )
}

function CategorySection({ category }: { category: DevTool['category'] }) {
  const tools = getToolsByCategory(category)
  if (tools.length === 0) return null

  const { label, description, color } = categoryLabels[category]

  return (
    <section className="mb-12">
      <div className="mb-6">
        <h2 className={`text-xl font-semibold ${color}`}>{label}</h2>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">{description}</p>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid gap-6 md:grid-cols-2"
      >
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </motion.div>
    </section>
  )
}

export default function BuildToolsPage() {
  const recommendedTools = devTools.filter((t) => t.recommended)
  const categories: DevTool['category'][] = ['framework', 'library', 'ide', 'testing']

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Link
                href="/build"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Build
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Developer Tools
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Essential tools for building on Ethereum Classic. Frameworks, libraries, IDEs, and security tools
                to accelerate your development workflow.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Recommendation */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Quick Start Recommendation</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  <strong className="text-purple-400">New to Solidity?</strong> Start with Remix IDE for browser-based development.{' '}
                  <strong className="text-blue-400">Production projects:</strong> Use Hardhat or Foundry for full development workflow.{' '}
                  <strong className="text-cyan-400">Frontend apps:</strong> Viem and ethers.js are the recommended libraries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {categories.map((category) => (
            <CategorySection key={category} category={category} />
          ))}
        </div>
      </section>

      {/* ETC Compatibility Note */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">ETC Compatibility</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-medium text-[var(--color-primary)]">Full EVM Compatibility</h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Ethereum Classic is fully EVM-compatible. Any Ethereum development tool, library, or framework
                  works on ETC. Just configure the correct RPC endpoint and chain ID.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium text-[var(--color-primary)]">Network Configuration</h3>
                <ul className="space-y-1 text-sm text-[var(--color-text-muted)]">
                  <li><strong>Mainnet Chain ID:</strong> 61</li>
                  <li><strong>Mordor Testnet ID:</strong> 63</li>
                  <li><strong>RPC:</strong> https://etc.rivet.link</li>
                  <li><strong>Testnet RPC:</strong> https://rpc.mordor.etccooperative.org</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Configuration Example */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="mb-4 text-xl font-semibold text-white">Configuration Examples</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4">
                <h4 className="mb-2 font-medium text-white">Hardhat Configuration</h4>
                <div className="rounded-lg bg-[var(--panel)] p-3 font-mono text-xs overflow-x-auto">
                  <pre className="text-[var(--color-text-muted)]">
{`// hardhat.config.js
module.exports = {
  networks: {
    etc: {
      url: "https://etc.rivet.link",
      chainId: 61,
      accounts: [PRIVATE_KEY]
    },
    mordor: {
      url: "https://rpc.mordor.etccooperative.org",
      chainId: 63,
      accounts: [PRIVATE_KEY]
    }
  }
}`}
                  </pre>
                </div>
              </div>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4">
                <h4 className="mb-2 font-medium text-white">Foundry Configuration</h4>
                <div className="rounded-lg bg-[var(--panel)] p-3 font-mono text-xs overflow-x-auto">
                  <pre className="text-[var(--color-text-muted)]">
{`# foundry.toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]

[rpc_endpoints]
etc = "https://etc.rivet.link"
mordor = "https://rpc.mordor.etccooperative.org"

# Deploy: forge script Deploy --rpc-url etc`}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Ready to Start Building?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Get testnet ETC from a faucet and start deploying contracts on Mordor testnet.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/build/faucets"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Get Testnet ETC
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/build/getting-started"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--bg)]"
              >
                Getting Started Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

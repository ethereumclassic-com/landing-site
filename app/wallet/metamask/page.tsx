'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const networkConfig = {
  networkName: 'Ethereum Classic',
  rpcUrl: 'https://etc.rivet.link',
  chainId: '61',
  symbol: 'ETC',
  blockExplorer: 'https://etc.blockscout.com',
}

const setupSteps = [
  {
    step: 1,
    title: 'Install MetaMask',
    description: 'Download and install the MetaMask browser extension from the official website.',
    details: [
      'Visit metamask.io and click "Download"',
      'Choose your browser (Chrome, Firefox, Brave, Edge)',
      'Click "Add to Browser" and confirm the installation',
      'Pin the extension to your toolbar for easy access',
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    step: 2,
    title: 'Create or Import Wallet',
    description: 'Set up a new wallet or import an existing one using your secret recovery phrase.',
    details: [
      'Click "Create a new wallet" for a fresh start',
      'Or click "Import wallet" if you have an existing seed phrase',
      'Set a strong password for local access',
      'IMPORTANT: Write down your 12-word recovery phrase and store it securely offline',
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: 'Add Ethereum Classic Network',
    description: 'Configure MetaMask to connect to the Ethereum Classic mainnet.',
    details: [
      'Click the network dropdown (shows "Ethereum Mainnet" by default)',
      'Click "Add network" at the bottom',
      'Click "Add a network manually"',
      'Enter the network details shown below',
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    showNetworkConfig: true,
  },
  {
    step: 4,
    title: 'Switch to ETC Network',
    description: 'Select Ethereum Classic from your network list to start using ETC.',
    details: [
      'Click the network dropdown in MetaMask',
      'Select "Ethereum Classic" from the list',
      'Your balance will update to show your ETC holdings',
      'You can now send, receive, and interact with ETC dApps',
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    step: 5,
    title: 'Get ETC',
    description: 'Fund your wallet with ETC to start using Ethereum Classic.',
    details: [
      'Copy your wallet address by clicking on it',
      'Purchase ETC from an exchange and withdraw to your address',
      'Or receive ETC from another wallet',
      'Always double-check addresses before sending',
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
]

const troubleshootingTips = [
  {
    issue: 'Network not showing in list',
    solution: 'Make sure you saved the network after entering all details. Try adding it again with the exact values.',
  },
  {
    issue: 'Transactions stuck pending',
    solution: 'Try increasing the gas price or resetting your account in Settings > Advanced > Reset Account.',
  },
  {
    issue: 'Wrong balance showing',
    solution: 'Ensure you\'re connected to the correct network (Chain ID 61 for ETC mainnet).',
  },
  {
    issue: 'Can\'t connect to dApps',
    solution: 'Make sure you\'re on the ETC network and the dApp supports Ethereum Classic.',
  },
]

export default function MetaMaskPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-16 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 via-transparent to-transparent" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-2 text-sm">
            <Link
              href="/wallet"
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              Wallets
            </Link>
            <span className="text-[var(--color-text-muted)]">/</span>
            <span className="text-white">MetaMask Setup</span>
          </motion.div>

          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.83 6.33L12.6 1.5c-.33-.2-.87-.2-1.2 0L2.17 6.33c-.2.13-.2.47 0 .6l9.23 5.17c.33.2.87.2 1.2 0l9.23-5.17c.2-.13.2-.47 0-.6zM12 13.17L3.6 8.33v7.84c0 .27.13.53.4.67l7.6 4.33c.13.07.27.1.4.1s.27-.03.4-.1l7.6-4.33c.27-.13.4-.4.4-.67V8.33L12 13.17z"/>
              </svg>
              Browser Wallet
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            MetaMask Setup Guide for{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-400 bg-clip-text text-transparent">
              Ethereum Classic
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-[var(--color-text-secondary)]"
          >
            MetaMask is the most popular browser wallet for interacting with EVM-compatible blockchains.
            Follow this guide to configure MetaMask for Ethereum Classic in just a few minutes.
          </motion.p>

          {/* Quick Stats */}
          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-[var(--color-text-secondary)]">5 min setup</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-[var(--color-text-secondary)]">Classic OS compatible</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-sm text-[var(--color-text-secondary)]">Non-custodial</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Setup Steps */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {setupSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < setupSteps.length - 1 && (
                  <div className="absolute left-6 top-16 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[var(--color-primary)]/50 to-transparent" />
                )}

                <div className="flex gap-6">
                  {/* Step number */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="rounded-full bg-[var(--color-primary)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary)]">
                        Step {item.step}
                      </span>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="mb-4 text-[var(--color-text-secondary)]">{item.description}</p>

                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Network Config Box */}
                    {item.showNetworkConfig && (
                      <div className="mt-6 rounded-lg border border-[var(--border)] bg-[var(--color-bg-primary)] p-4">
                        <h4 className="mb-3 text-sm font-semibold text-white">ETC Network Configuration</h4>
                        <div className="space-y-3">
                          {Object.entries(networkConfig).map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between gap-4">
                              <span className="text-sm text-[var(--color-text-muted)] capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </span>
                              <div className="flex items-center gap-2">
                                <code className="rounded bg-[var(--panel)] px-2 py-1 text-sm text-white">
                                  {value}
                                </code>
                                <button
                                  onClick={() => copyToClipboard(value)}
                                  className="rounded p-1 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--panel)] hover:text-white"
                                  title="Copy to clipboard"
                                >
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative RPC Endpoints */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-xl font-bold text-white">Alternative RPC Endpoints</h2>
            <p className="mb-6 text-[var(--color-text-secondary)]">
              Rivet is the primary public RPC endpoint, funded by ETC Cooperative and Grayscale.
              If you experience issues, try these alternatives:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: 'Rivet (Primary)', url: 'https://etc.rivet.link', note: 'Funded by ETC Cooperative' },
                { name: 'Blockscout RPC', url: 'https://etc.blockscout.com/api/eth-rpc', note: 'Official explorer' },
                { name: 'ETC Desktop', url: 'https://etc.etcdesktop.com', note: 'Community maintained' },
                { name: '0xRPC', url: 'https://0xrpc.io/etc', note: 'No tracking' },
                { name: 'GETH Austria', url: 'https://geth-at.etc-network.info', note: 'Core-Geth node' },
                { name: 'Besu Austria', url: 'https://besu-at.etc-network.info', note: 'Besu node' },
              ].map((rpc) => (
                <div
                  key={rpc.name}
                  className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-white">{rpc.name}</p>
                      <span className="text-xs text-[var(--color-text-muted)]">• {rpc.note}</span>
                    </div>
                    <code className="block truncate text-xs text-[var(--color-text-muted)]">{rpc.url}</code>
                  </div>
                  <button
                    onClick={() => copyToClipboard(rpc.url)}
                    className="ml-2 shrink-0 rounded p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-bg-primary)] hover:text-white"
                    title="Copy RPC URL"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              For a complete list of public RPC endpoints, see{' '}
              <a
                href="https://chainlist.org/chain/61"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline"
              >
                Chainlist
              </a>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-xl font-bold text-white">Troubleshooting</h2>
            <p className="mb-6 text-[var(--color-text-secondary)]">
              Having issues? Here are solutions to common problems:
            </p>
            <div className="space-y-4">
              {troubleshootingTips.map((tip, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{tip.issue}</h4>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">{tip.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-gradient-to-b from-[var(--color-primary)]/10 to-[var(--panel)] p-8 text-center"
          >
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Ready to Use Classic OS?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[var(--color-text-secondary)]">
              Now that MetaMask is configured, connect to Classic OS to manage your ETC portfolio,
              swap tokens, and earn yields.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://app.classicos.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
              >
                Launch Classic OS
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <Link
                href="/buy"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
              >
                Buy ETC
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-bold text-white">Related Guides</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              href="/wallet/hardware"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                </svg>
              </div>
              <h3 className="font-medium text-white group-hover:text-[var(--color-primary)]">Hardware Wallets</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Maximum security with Ledger & Trezor</p>
            </Link>
            <Link
              href="/wallet/compare"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="font-medium text-white group-hover:text-[var(--color-primary)]">Compare Wallets</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Find the best wallet for your needs</p>
            </Link>
            <Link
              href="/learn/security"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-medium text-white group-hover:text-[var(--color-primary)]">Security Guide</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Best practices to protect your crypto</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

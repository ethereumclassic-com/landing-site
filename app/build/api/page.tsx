'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

interface ApiEndpoint {
  method: 'GET' | 'POST'
  path: string
  description: string
  parameters?: { name: string; type: string; required: boolean; description: string }[]
  response: string
  example: string
}

const apiEndpoints: ApiEndpoint[] = [
  {
    method: 'GET',
    path: '/api/price',
    description: 'Get current ETC price data including USD price, 24h change, market cap, and volume.',
    parameters: [
      { name: 'currency', type: 'string', required: false, description: 'Target currency (default: usd)' },
    ],
    response: `{
  "price": 25.42,
  "change24h": 3.5,
  "marketCap": 3650000000,
  "volume24h": 185000000,
  "high24h": 26.10,
  "low24h": 24.80,
  "currency": "usd",
  "timestamp": "2024-02-04T12:00:00Z"
}`,
    example: 'curl https://ethereumclassic.com/api/price',
  },
  {
    method: 'GET',
    path: '/api/price/history',
    description: 'Get historical price data for ETC over a specified time range.',
    parameters: [
      { name: 'days', type: 'number', required: false, description: 'Number of days (default: 7, max: 365)' },
      { name: 'currency', type: 'string', required: false, description: 'Target currency (default: usd)' },
    ],
    response: `{
  "prices": [
    { "timestamp": "2024-01-28T00:00:00Z", "price": 24.10 },
    { "timestamp": "2024-01-29T00:00:00Z", "price": 24.85 },
    ...
  ],
  "currency": "usd"
}`,
    example: 'curl https://ethereumclassic.com/api/price/history?days=30',
  },
  {
    method: 'GET',
    path: '/api/network',
    description: 'Get current Ethereum Classic network statistics.',
    response: `{
  "hashrate": "185.2 TH/s",
  "difficulty": "2.5 PH",
  "blockHeight": 19250000,
  "blockTime": 13.5,
  "blockReward": 2.56,
  "totalSupply": 147500000,
  "timestamp": "2024-02-04T12:00:00Z"
}`,
    example: 'curl https://ethereumclassic.com/api/network',
  },
  {
    method: 'GET',
    path: '/api/network/blocks',
    description: 'Get recent blocks from the ETC blockchain.',
    parameters: [
      { name: 'limit', type: 'number', required: false, description: 'Number of blocks (default: 10, max: 100)' },
    ],
    response: `{
  "blocks": [
    {
      "number": 19250000,
      "hash": "0x...",
      "timestamp": "2024-02-04T11:59:45Z",
      "transactions": 45,
      "miner": "0x...",
      "reward": 2.56,
      "gasUsed": 12500000
    },
    ...
  ]
}`,
    example: 'curl https://ethereumclassic.com/api/network/blocks?limit=5',
  },
]

const rpcEndpoints = [
  {
    name: 'Rivet (ETC)',
    url: 'https://etc.rivet.cloud',
    description: 'High-performance ETC RPC endpoint',
    rateLimit: '100 req/s',
  },
  {
    name: 'Blockscout RPC',
    url: 'https://etc.blockscout.com/api/eth-rpc',
    description: 'Blockscout-powered RPC endpoint',
    rateLimit: '50 req/s',
  },
  {
    name: 'ETC Cooperative',
    url: 'https://www.ethercluster.com/etc',
    description: 'Community-operated RPC endpoint',
    rateLimit: 'Unlimited',
  },
]

const codeExamples = {
  javascript: `// Using fetch
const response = await fetch('https://ethereumclassic.com/api/price');
const data = await response.json();
console.log(\`ETC Price: $\${data.price}\`);

// Using ethers.js for RPC
import { ethers } from 'ethers';
const provider = new ethers.JsonRpcProvider('https://etc.rivet.cloud');
const blockNumber = await provider.getBlockNumber();`,

  python: `import requests

# Get price data
response = requests.get('https://ethereumclassic.com/api/price')
data = response.json()
print(f"ETC Price: {data['price']}")

# Using web3.py for RPC
from web3 import Web3
w3 = Web3(Web3.HTTPProvider('https://etc.rivet.cloud'))
block = w3.eth.block_number`,

  curl: `# Get current price
curl https://ethereumclassic.com/api/price

# Get network stats
curl https://ethereumclassic.com/api/network

# Get price history (30 days)
curl "https://ethereumclassic.com/api/price/history?days=30"`,
}

export default function ApiDocsPage() {
  const [selectedLang, setSelectedLang] = useState<'javascript' | 'python' | 'curl'>('javascript')
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null)

  const copyToClipboard = async (text: string, endpoint: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedEndpoint(endpoint)
    setTimeout(() => setCopiedEndpoint(null), 2000)
  }

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-[var(--color-primary)]/10 via-[var(--bg)] to-[var(--bg)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm text-[var(--color-primary)]">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              Developer APIs
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              API Documentation
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-secondary)]">
              Access ETC price data, network statistics, and blockchain information through our REST API endpoints.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Quick Start */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-white">Quick Start</h2>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6">
            <div className="mb-4 flex gap-2">
              {(['javascript', 'python', 'curl'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    selectedLang === lang
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-[var(--bg)] text-[var(--color-text-secondary)] hover:text-white'
                  }`}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>
            <pre className="overflow-x-auto rounded-lg bg-[var(--bg)] p-4 text-sm">
              <code className="text-[var(--color-text-secondary)]">{codeExamples[selectedLang]}</code>
            </pre>
          </div>
        </motion.section>

        {/* REST API Endpoints */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-white">REST API Endpoints</h2>
          <div className="space-y-6">
            {apiEndpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden"
              >
                <div className="border-b border-[var(--border)] bg-[var(--bg)] px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-emerald-500/20 px-2 py-1 text-xs font-bold text-emerald-400">
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono text-white">{endpoint.path}</code>
                    <button
                      onClick={() => copyToClipboard(endpoint.example, endpoint.path)}
                      className="ml-auto rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--panel)] hover:text-white"
                    >
                      {copiedEndpoint === endpoint.path ? 'Copied!' : 'Copy cURL'}
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{endpoint.description}</p>
                </div>
                <div className="p-6">
                  {endpoint.parameters && endpoint.parameters.length > 0 && (
                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-semibold text-white">Parameters</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-[var(--border)]">
                              <th className="pb-2 text-left font-medium text-[var(--color-text-secondary)]">Name</th>
                              <th className="pb-2 text-left font-medium text-[var(--color-text-secondary)]">Type</th>
                              <th className="pb-2 text-left font-medium text-[var(--color-text-secondary)]">Required</th>
                              <th className="pb-2 text-left font-medium text-[var(--color-text-secondary)]">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {endpoint.parameters.map((param) => (
                              <tr key={param.name} className="border-b border-[var(--border)]/50">
                                <td className="py-2 font-mono text-[var(--color-primary)]">{param.name}</td>
                                <td className="py-2 text-[var(--color-text-secondary)]">{param.type}</td>
                                <td className="py-2">
                                  <span className={`text-xs ${param.required ? 'text-amber-400' : 'text-[var(--color-text-muted)]'}`}>
                                    {param.required ? 'Required' : 'Optional'}
                                  </span>
                                </td>
                                <td className="py-2 text-[var(--color-text-secondary)]">{param.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-white">Response</h4>
                    <pre className="overflow-x-auto rounded-lg bg-[var(--bg)] p-4 text-xs">
                      <code className="text-[var(--color-text-secondary)]">{endpoint.response}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* RPC Endpoints */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-white">Public RPC Endpoints</h2>
          <p className="mb-6 text-[var(--color-text-secondary)]">
            Use these public RPC endpoints to interact with the Ethereum Classic blockchain directly.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {rpcEndpoints.map((rpc) => (
              <div
                key={rpc.name}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5"
              >
                <h3 className="mb-2 font-semibold text-white">{rpc.name}</h3>
                <code className="mb-3 block rounded bg-[var(--bg)] px-3 py-2 text-xs text-[var(--color-primary)]">
                  {rpc.url}
                </code>
                <p className="mb-2 text-sm text-[var(--color-text-secondary)]">{rpc.description}</p>
                <p className="text-xs text-[var(--color-text-muted)]">Rate limit: {rpc.rateLimit}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Rate Limits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-white">Rate Limits & Best Practices</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h3 className="mb-4 font-semibold text-white">Rate Limits</h3>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <span><strong className="text-white">100 requests/minute</strong> per IP for REST API</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <span>Responses include <code className="text-[var(--color-primary)]">X-RateLimit-*</code> headers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <span>429 status code when limit exceeded</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
              <h3 className="mb-4 font-semibold text-white">Best Practices</h3>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>Cache responses when possible (prices update every 60s)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>Use batch requests for multiple data points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>Implement exponential backoff for retries</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Additional Resources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="mb-6 text-2xl font-bold text-white">Additional Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="https://blockscout.com/etc/mainnet/api-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--color-primary)]/30"
            >
              <h3 className="mb-2 font-semibold text-white group-hover:text-[var(--color-primary)]">
                Blockscout API
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Full blockchain explorer API with address, transaction, and token data.
              </p>
            </Link>
            <Link
              href="/build/docs"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--color-primary)]/30"
            >
              <h3 className="mb-2 font-semibold text-white group-hover:text-[var(--color-primary)]">
                Developer Docs
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Comprehensive documentation for building on Ethereum Classic.
              </p>
            </Link>
            <Link
              href="/build/tools"
              className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--color-primary)]/30"
            >
              <h3 className="mb-2 font-semibold text-white group-hover:text-[var(--color-primary)]">
                Developer Tools
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                SDKs, libraries, and tools for ETC development.
              </p>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  )
}

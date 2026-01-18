'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface GlossaryTerm {
  term: string
  definition: string
  category: 'blockchain' | 'defi' | 'trading' | 'mining' | 'wallet' | 'general'
  relatedTerms?: string[]
}

const glossaryTerms: GlossaryTerm[] = [
  // Blockchain Fundamentals
  {
    term: 'Blockchain',
    definition: 'A distributed digital ledger that records transactions across many computers in a way that makes records difficult to alter. Each block contains a cryptographic hash of the previous block, forming a chain.',
    category: 'blockchain',
    relatedTerms: ['Block', 'Hash', 'Distributed Ledger'],
  },
  {
    term: 'Block',
    definition: 'A collection of transaction data that is bundled together and added to the blockchain. Each block references the previous block through its hash.',
    category: 'blockchain',
    relatedTerms: ['Blockchain', 'Block Height', 'Block Time'],
  },
  {
    term: 'Block Height',
    definition: 'The number of blocks that have been mined since the genesis block. Higher block height means more blocks exist on the chain.',
    category: 'blockchain',
  },
  {
    term: 'Block Time',
    definition: 'The average time it takes to mine a new block. Ethereum Classic has an average block time of approximately 13 seconds.',
    category: 'blockchain',
  },
  {
    term: 'Consensus Mechanism',
    definition: 'The method by which a blockchain network agrees on the current state of the ledger. ETC uses Proof-of-Work consensus.',
    category: 'blockchain',
    relatedTerms: ['Proof-of-Work', 'Mining'],
  },
  {
    term: 'Decentralization',
    definition: 'The distribution of power away from a central authority. In blockchain, this means no single entity controls the network.',
    category: 'blockchain',
  },
  {
    term: 'Distributed Ledger',
    definition: 'A database that is shared, replicated, and synchronized among the members of a decentralized network.',
    category: 'blockchain',
  },
  {
    term: 'EVM (Ethereum Virtual Machine)',
    definition: 'A Turing-complete virtual machine that executes smart contracts on Ethereum and Ethereum Classic networks. It provides a sandboxed runtime environment.',
    category: 'blockchain',
    relatedTerms: ['Smart Contract', 'Gas'],
  },
  {
    term: 'Fork',
    definition: 'A change to the blockchain protocol. Hard forks are not backward-compatible, while soft forks are. ETC split from ETH due to a hard fork after The DAO incident.',
    category: 'blockchain',
  },
  {
    term: 'Genesis Block',
    definition: 'The first block of a blockchain, also known as Block 0. It serves as the foundation upon which all other blocks are built.',
    category: 'blockchain',
  },
  {
    term: 'Hash',
    definition: 'A fixed-size alphanumeric string produced by a cryptographic function. Used to verify data integrity and link blocks together.',
    category: 'blockchain',
  },
  {
    term: 'Immutability',
    definition: 'The principle that once data is recorded on the blockchain, it cannot be altered or deleted. A core value of Ethereum Classic.',
    category: 'blockchain',
  },
  {
    term: 'Node',
    definition: 'A computer that maintains a copy of the blockchain and participates in the network by validating and relaying transactions.',
    category: 'blockchain',
    relatedTerms: ['Full Node', 'Light Node'],
  },
  {
    term: 'Smart Contract',
    definition: 'Self-executing code stored on the blockchain that automatically enforces agreements when predetermined conditions are met.',
    category: 'blockchain',
    relatedTerms: ['EVM', 'Solidity', 'dApp'],
  },
  {
    term: 'Transaction',
    definition: 'An action initiated by an account that changes the state of the blockchain, such as sending tokens or interacting with a smart contract.',
    category: 'blockchain',
  },

  // Mining
  {
    term: 'Proof-of-Work (PoW)',
    definition: 'A consensus mechanism where miners compete to solve complex mathematical puzzles to validate transactions and create new blocks. ETC uses this for security.',
    category: 'mining',
    relatedTerms: ['Mining', 'Hashrate', 'Difficulty'],
  },
  {
    term: 'Mining',
    definition: 'The process of using computational power to solve cryptographic puzzles and add new blocks to the blockchain, earning block rewards.',
    category: 'mining',
    relatedTerms: ['Proof-of-Work', 'Miner', 'Block Reward'],
  },
  {
    term: 'Hashrate',
    definition: 'The measure of computational power used in mining, expressed in hashes per second (H/s). Higher hashrate means more mining power.',
    category: 'mining',
  },
  {
    term: 'Difficulty',
    definition: 'A measure of how hard it is to find a valid block hash. Difficulty adjusts automatically to maintain consistent block times.',
    category: 'mining',
  },
  {
    term: 'Mining Pool',
    definition: 'A group of miners who combine their computational resources to increase their chances of finding blocks and share rewards proportionally.',
    category: 'mining',
  },
  {
    term: 'ASIC',
    definition: 'Application-Specific Integrated Circuit. Hardware designed specifically for mining cryptocurrencies, more efficient than GPUs for specific algorithms.',
    category: 'mining',
  },
  {
    term: 'ETChash',
    definition: 'The mining algorithm used by Ethereum Classic. A modified version of Ethash designed to be ASIC-friendly while maintaining security.',
    category: 'mining',
  },
  {
    term: 'Block Reward',
    definition: 'The amount of cryptocurrency given to a miner for successfully adding a block to the blockchain. Currently about 2 ETC per block.',
    category: 'mining',
  },

  // DeFi
  {
    term: 'DeFi (Decentralized Finance)',
    definition: 'Financial services built on blockchain technology that operate without traditional intermediaries like banks.',
    category: 'defi',
    relatedTerms: ['DEX', 'AMM', 'Liquidity Pool'],
  },
  {
    term: 'DEX (Decentralized Exchange)',
    definition: 'A peer-to-peer marketplace where users trade cryptocurrency directly without a central authority. ETCswap is the main DEX on ETC.',
    category: 'defi',
    relatedTerms: ['AMM', 'Liquidity Pool'],
  },
  {
    term: 'AMM (Automated Market Maker)',
    definition: 'A type of DEX that uses algorithms and liquidity pools instead of order books to facilitate trading.',
    category: 'defi',
    relatedTerms: ['DEX', 'Liquidity Pool'],
  },
  {
    term: 'Liquidity Pool',
    definition: 'A collection of tokens locked in a smart contract that provides liquidity for decentralized trading.',
    category: 'defi',
    relatedTerms: ['LP Token', 'AMM'],
  },
  {
    term: 'LP Token',
    definition: 'Liquidity Provider tokens received when depositing assets into a liquidity pool. They represent your share of the pool.',
    category: 'defi',
  },
  {
    term: 'Impermanent Loss',
    definition: 'The temporary loss of funds experienced by liquidity providers when the price ratio of pooled tokens changes from when they were deposited.',
    category: 'defi',
  },
  {
    term: 'Slippage',
    definition: 'The difference between the expected price of a trade and the actual executed price, often due to low liquidity or high volatility.',
    category: 'defi',
  },
  {
    term: 'Stablecoin',
    definition: 'A cryptocurrency designed to maintain a stable value, usually pegged to a fiat currency like USD. ClassicUSD (USC) is the native stablecoin on ETC.',
    category: 'defi',
  },
  {
    term: 'TVL (Total Value Locked)',
    definition: 'The total amount of assets deposited in a DeFi protocol, used as a measure of the protocol\'s size and popularity.',
    category: 'defi',
  },
  {
    term: 'Yield Farming',
    definition: 'The practice of moving crypto assets between DeFi protocols to maximize returns through interest, fees, or token rewards.',
    category: 'defi',
  },
  {
    term: 'WETC (Wrapped ETC)',
    definition: 'An ERC-20 token representation of ETC that can be used in DeFi protocols that require token standard compatibility.',
    category: 'defi',
  },

  // Trading
  {
    term: 'Market Order',
    definition: 'An order to buy or sell at the best available current price. Executes immediately but may have slippage.',
    category: 'trading',
  },
  {
    term: 'Limit Order',
    definition: 'An order to buy or sell at a specific price or better. Only executes when the market reaches your price.',
    category: 'trading',
  },
  {
    term: 'Stop-Loss',
    definition: 'An order that automatically sells an asset when it reaches a specified price, used to limit potential losses.',
    category: 'trading',
  },
  {
    term: 'Spot Trading',
    definition: 'The immediate purchase or sale of cryptocurrency at current market prices, with instant settlement.',
    category: 'trading',
  },
  {
    term: 'Trading Pair',
    definition: 'Two assets that can be traded against each other on an exchange, such as ETC/USDT or ETC/BTC.',
    category: 'trading',
  },
  {
    term: 'Liquidity',
    definition: 'The ease with which an asset can be bought or sold without significantly affecting its price. Higher liquidity means easier trading.',
    category: 'trading',
  },
  {
    term: 'Volume',
    definition: 'The total amount of an asset traded over a specific period. Higher volume often indicates stronger market interest.',
    category: 'trading',
  },
  {
    term: 'Market Cap',
    definition: 'Market capitalization - the total value of all coins in circulation, calculated by multiplying price by circulating supply.',
    category: 'trading',
  },

  // Wallet
  {
    term: 'Wallet',
    definition: 'Software or hardware that stores your private keys and allows you to interact with the blockchain to send and receive cryptocurrency.',
    category: 'wallet',
    relatedTerms: ['Private Key', 'Public Key', 'Address'],
  },
  {
    term: 'Private Key',
    definition: 'A secret cryptographic key that proves ownership of your assets and allows you to sign transactions. Never share this.',
    category: 'wallet',
  },
  {
    term: 'Public Key',
    definition: 'A cryptographic key derived from your private key that can be shared publicly. Used to verify signatures and derive addresses.',
    category: 'wallet',
  },
  {
    term: 'Address',
    definition: 'A public identifier (like 0x123...) where cryptocurrency can be sent. Derived from your public key.',
    category: 'wallet',
  },
  {
    term: 'Seed Phrase',
    definition: 'A series of 12-24 words that can be used to recover your wallet. Store this securely offline - it controls access to all your funds.',
    category: 'wallet',
  },
  {
    term: 'Hot Wallet',
    definition: 'A wallet connected to the internet, offering convenience but with higher security risk. Examples: MetaMask, mobile wallets.',
    category: 'wallet',
  },
  {
    term: 'Cold Wallet',
    definition: 'A wallet not connected to the internet, offering maximum security for long-term storage. Examples: hardware wallets, paper wallets.',
    category: 'wallet',
  },
  {
    term: 'Hardware Wallet',
    definition: 'A physical device that stores private keys offline, providing strong security against online threats. Examples: Ledger, Trezor.',
    category: 'wallet',
  },
  {
    term: 'Custodial Wallet',
    definition: 'A wallet where a third party (like an exchange) controls your private keys. You don\'t fully own your crypto.',
    category: 'wallet',
  },
  {
    term: 'Non-Custodial Wallet',
    definition: 'A wallet where you alone control your private keys. You have full ownership and responsibility for your assets.',
    category: 'wallet',
  },

  // General
  {
    term: 'Gas',
    definition: 'The unit measuring computational effort required for transactions on EVM blockchains. Users pay gas fees to miners.',
    category: 'general',
  },
  {
    term: 'Gas Price',
    definition: 'The amount of cryptocurrency (usually in Gwei) you\'re willing to pay per unit of gas. Higher gas price = faster transaction.',
    category: 'general',
  },
  {
    term: 'Gwei',
    definition: 'A denomination of ETC/ETH equal to 0.000000001 (10^-9) of a coin. Used to express gas prices.',
    category: 'general',
  },
  {
    term: 'dApp',
    definition: 'Decentralized Application - an application built on a blockchain that operates autonomously through smart contracts.',
    category: 'general',
  },
  {
    term: 'Token',
    definition: 'A digital asset created on an existing blockchain (like ERC-20 tokens on ETC) rather than having its own blockchain.',
    category: 'general',
  },
  {
    term: 'ERC-20',
    definition: 'A technical standard for fungible tokens on EVM-compatible blockchains. Most tokens on ETC follow this standard.',
    category: 'general',
  },
  {
    term: 'NFT',
    definition: 'Non-Fungible Token - a unique digital asset that represents ownership of a specific item, artwork, or collectible.',
    category: 'general',
  },
  {
    term: 'DAO',
    definition: 'Decentralized Autonomous Organization - an organization governed by smart contracts and token holder voting rather than centralized management.',
    category: 'general',
  },
  {
    term: 'KYC',
    definition: 'Know Your Customer - identity verification required by centralized exchanges to comply with regulations.',
    category: 'general',
  },
  {
    term: 'DYOR',
    definition: 'Do Your Own Research - a reminder to thoroughly investigate before investing in any cryptocurrency or project.',
    category: 'general',
  },
  {
    term: 'HODL',
    definition: 'A misspelling of "hold" that became crypto slang for holding assets long-term regardless of price volatility.',
    category: 'general',
  },
  {
    term: 'Whale',
    definition: 'An individual or entity holding a large amount of cryptocurrency, capable of influencing market prices.',
    category: 'general',
  },
  {
    term: 'Airdrop',
    definition: 'Free distribution of tokens to wallet addresses, often used for marketing or rewarding early adopters.',
    category: 'general',
  },
  {
    term: 'Bridge',
    definition: 'A protocol that allows tokens to be transferred between different blockchain networks.',
    category: 'general',
  },
  {
    term: 'RPC',
    definition: 'Remote Procedure Call - a protocol that allows applications to communicate with blockchain nodes to read data or submit transactions.',
    category: 'general',
  },
]

const categories = [
  { id: 'all', name: 'All Terms' },
  { id: 'blockchain', name: 'Blockchain' },
  { id: 'mining', name: 'Mining' },
  { id: 'defi', name: 'DeFi' },
  { id: 'trading', name: 'Trading' },
  { id: 'wallet', name: 'Wallets' },
  { id: 'general', name: 'General' },
]

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set())

  const filteredTerms = useMemo(() => {
    return glossaryTerms
      .filter((item) => {
        const matchesSearch =
          searchQuery === '' ||
          item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.definition.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory =
          selectedCategory === 'all' || item.category === selectedCategory
        return matchesSearch && matchesCategory
      })
      .sort((a, b) => a.term.localeCompare(b.term))
  }, [searchQuery, selectedCategory])

  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {}
    filteredTerms.forEach((term) => {
      const letter = term.term[0].toUpperCase()
      if (!groups[letter]) {
        groups[letter] = []
      }
      groups[letter].push(term)
    })
    return groups
  }, [filteredTerms])

  const toggleTerm = (term: string) => {
    setExpandedTerms((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(term)) {
        newSet.delete(term)
      } else {
        newSet.add(term)
      }
      return newSet
    })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <Link
            href="/learn"
            className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to Learn
          </Link>

          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            {glossaryTerms.length} Terms
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Crypto{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-400 bg-clip-text text-transparent">
              Glossary
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Your comprehensive guide to cryptocurrency and blockchain terminology. Learn the language of Ethereum Classic.
          </p>
        </motion.div>
      </section>

      {/* Search & Filter */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)]/50 px-6 py-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <svg
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-text-muted)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="text"
                placeholder="Search terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] py-2.5 pl-10 pr-4 text-white placeholder-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-primary)]"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-[var(--panel)] text-[var(--color-text-muted)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Glossary Content */}
      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          {Object.keys(groupedTerms).length > 0 ? (
            <div className="space-y-8">
              {Object.entries(groupedTerms).map(([letter, terms]) => (
                <motion.div
                  key={letter}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-lg font-bold text-[var(--color-primary)]">
                      {letter}
                    </span>
                    <div className="h-px flex-1 bg-[var(--border)]" />
                  </div>

                  <div className="space-y-2">
                    {terms.map((item) => (
                      <div
                        key={item.term}
                        className="rounded-xl border border-[var(--border)] bg-[var(--panel)] transition-colors hover:border-[var(--color-primary)]/30"
                      >
                        <button
                          onClick={() => toggleTerm(item.term)}
                          className="flex w-full items-center justify-between p-4 text-left"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-white">{item.term}</span>
                            <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs font-medium capitalize text-[var(--color-primary)]">
                              {item.category}
                            </span>
                          </div>
                          <svg
                            className={`h-5 w-5 text-[var(--color-text-muted)] transition-transform ${
                              expandedTerms.has(item.term) ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>

                        {expandedTerms.has(item.term) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="border-t border-[var(--border)] px-4 pb-4 pt-3"
                          >
                            <p className="text-[var(--color-text-secondary)]">{item.definition}</p>
                            {item.relatedTerms && item.relatedTerms.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                <span className="text-xs text-[var(--color-text-muted)]">Related:</span>
                                {item.relatedTerms.map((related) => (
                                  <button
                                    key={related}
                                    onClick={() => {
                                      setSearchQuery(related)
                                      setSelectedCategory('all')
                                    }}
                                    className="rounded-md bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/10"
                                  >
                                    {related}
                                  </button>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-12 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
                <svg className="h-6 w-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <p className="text-[var(--color-text-secondary)]">
                No terms found matching &quot;{searchQuery}&quot;
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="mt-4 text-sm text-[var(--color-primary)] hover:underline"
              >
                Clear search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)] bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent px-6 py-16 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Ready to Learn More?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
            Now that you know the terminology, dive deeper into Ethereum Classic with our guides.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/learn/basics/what-is-ethereum-classic"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-all hover:bg-[var(--color-primary-hover)]"
            >
              What is Ethereum Classic?
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-white transition-all hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10"
            >
              Browse All Guides
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

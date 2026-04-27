'use client'

import React from 'react'
import Link from 'next/link'
// Inline SVG icons (etc-com does not use lucide-react)
type IconProps = { size?: number; className?: string; style?: React.CSSProperties; 'aria-hidden'?: boolean | 'true' | 'false' }
const CheckCircle2 = ({ size = 16, className = '', style, ...rest }: IconProps) => (
  <svg aria-hidden="true" width={size} height={size} className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...rest}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const ExternalLink = ({ size = 12, className = '', style, ...rest }: IconProps) => (
  <svg aria-hidden="true" width={size} height={size} className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...rest}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)
const Flame = ({ size = 20, className = '', style, ...rest }: IconProps) => (
  <svg aria-hidden="true" width={size} height={size} className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...rest}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
  </svg>
)
const Landmark = ({ size = 20, className = '', style, ...rest }: IconProps) => (
  <svg aria-hidden="true" width={size} height={size} className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...rest}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
  </svg>
)
const Cpu = ({ size = 20, className = '', style, ...rest }: IconProps) => (
  <svg aria-hidden="true" width={size} height={size} className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...rest}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
  </svg>
)
const Layers = ({ size = 20, className = '', style, ...rest }: IconProps) => (
  <svg aria-hidden="true" width={size} height={size} className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...rest}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
  </svg>
)
const ShieldCheck = ({ size = 20, className = '', style, ...rest }: IconProps) => (
  <svg aria-hidden="true" width={size} height={size} className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...rest}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)
const Code2 = ({ size = 20, className = '', style, ...rest }: IconProps) => (
  <svg aria-hidden="true" width={size} height={size} className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...rest}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
)
import OlympiaCountdown from '../components/OlympiaCountdown'
import { faqs } from '../data/olympia'

const statusStyles = {
  complete: 'bg-[#00ffae]/10 text-[#00ffae] border border-[#00ffae]/30',
  active: 'bg-[#00ffae]/10 text-[#00ffae] border border-[#00ffae]/30',
  research: 'bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30',
  future: 'bg-[var(--border-subtle)] text-[var(--color-text-muted)] border border-[var(--border-subtle)]',
}

const ecips = [
  {
    ecip: 'ECIP-1111',
    title: 'EIP-1559 Fee Market',
    icon: Flame,
    color: '#F59E0B',
    description:
      'Unlike Ethereum where the basefee is burned, ETC redirects it to the protocol treasury — the mechanism that funds open-source core development without any foundation or donor dependency. Dynamic gas pricing delivers predictable fees for users and applications. Fully additive: legacy transactions remain valid indefinitely. Miner block rewards and tips remain completely untouched.',
  },
  {
    ecip: 'ECIP-1112',
    title: 'Protocol Treasury',
    icon: Landmark,
    color: '#00ffae',
    description:
      'A protocol-controlled vault funded by basefee revenue and voluntary contributions. For the first time, institutions, developers, and network stakeholders can directly fund Ethereum Classic\'s core development and critical infrastructure without fielding their own team. Miners receive everything they do today: block rewards and tips remain completely untouched.',
  },
  {
    ecip: 'ECIP-1121',
    title: 'Fusaka EVM Alignment',
    icon: Cpu,
    color: '#38bdf8',
    description:
      'Building on Mystique and Spiral, Olympia delivers the remaining EVM execution-layer improvements from Dencun, Pectra, and Fusaka, covering every improvement that is independent of Proof-of-Stake and blob data availability. Exchanges and wallets gain modern RPC compatibility. Developers gain full access to every current Ethereum tool, library, and framework. One codebase, every EVM chain.',
  },
]

const forkTimeline = [
  { name: 'Dencun', fullName: 'Cancun-Deneb', year: '2024', eips: ['EIP-1153', 'EIP-5656', 'EIP-2935'] },
  { name: 'Pectra', fullName: 'Prague-Electra', year: '2025', eips: ['EIP-7702', 'EIP-2537', 'EIP-6780'] },
  { name: 'Fusaka', fullName: 'Fulu-Osaka', year: '2025', eips: ['EIP-7623', 'EIP-7951', 'EIP-7825'] },
]

const evmCategories = [
  {
    title: 'Gas & State Access',
    icon: Layers,
    eips: ['EIP-7702', 'EIP-7623', 'EIP-7825', 'EIP-7883', 'EIP-7935'],
    description:
      'Account delegation, cheaper calldata, gas limit enforcement, opcode repricing, and jumpdest removal. Reduces transaction costs and enables smart account patterns without protocol changes.',
  },
  {
    title: 'EVM Safety',
    icon: ShieldCheck,
    eips: ['EIP-6780', 'EIP-7934', 'EIP-7910'],
    description:
      'SELFDESTRUCT restricted to deployment context, stack size enforcement, and call target constraints. Makes contract behavior more predictable and reduces attack surface.',
  },
  {
    title: 'Cryptographic Precompiles',
    icon: Cpu,
    eips: ['EIP-2537', 'EIP-7951'],
    description:
      'BLS12-381 pairing operations for ZK-friendly proof verification, P256VERIFY for WebAuthn and passkey authentication. Native cryptographic primitives for privacy and identity.',
  },
  {
    title: 'Execution Context',
    icon: Code2,
    eips: ['EIP-5656', 'EIP-2935', 'EIP-1153'],
    description:
      'MCOPY for efficient memory operations, historical block hashes in state, transient storage TSTORE/TLOAD. Unlocks reentrancy guards, flash loans, and cross-contract patterns without persistent storage.',
  },
]

const roadmapStages = [
  {
    title: 'Consensus Upgrades',
    status: 'complete' as const,
    description:
      'EIP-1559 fee market, protocol treasury funded by basefee revenue, and full Fusaka EVM parity in a single upgrade. Every Ethereum tool and framework works on ETC without modification.',
    deliverables: [
      'EIP-1559 fee market (ECIP-1111)',
      'Protocol treasury funded by basefee (ECIP-1112)',
      'Fusaka EVM parity: Dencun, Pectra, Fusaka EIPs (ECIP-1121)',
    ],
  },
  {
    title: 'Core Governance',
    status: 'active' as const,
    description:
      'On-chain governance with membership-based voting and a full proposal lifecycle: submit, vote, queue, execute. Core development funding moves to an open, transparent, on-chain process.',
    deliverables: [
      'Governance and treasury contracts with timelock execution',
      'Membership-based voting with sanctions compliance',
      'Open proposal process with competitive bidding',
    ],
  },
  {
    title: 'Prediction Markets',
    status: 'research' as const,
    description:
      'Futarchy-assisted governance uses prediction markets to inform treasury allocation, providing financially-backed public signals alongside on-chain member votes.',
    deliverables: [
      'Conditional outcome tokens',
      'Market-informed proposal ranking',
      'Open participation for any stakeholder',
    ],
  },
  {
    title: 'Treasury Distribution',
    status: 'future' as const,
    description:
      'Governance-controlled smoothing curve (ECIP-1115) optionally supplements miner security budgets as fixed-emission block subsidies decline, without touching consensus-layer rewards.',
    deliverables: [
      'Treasury smoothing algorithm (ECIP-1115)',
      'Modeling through ECIP-1017 emission events',
      'Parameters adjustable without a hard fork',
    ],
  },
  {
    title: 'Protocol Integration',
    status: 'future' as const,
    description:
      'Proven governance mechanisms elevated from the contract layer to consensus, making treasury rules immutable at the protocol level.',
    deliverables: [
      'Consensus-level governance encoding',
      'Immutable treasury rules',
    ],
  },
]

const clientData = [
  {
    name: 'Fukuii',
    language: 'Scala',
    languageColor: '#DC322F',
    role: 'Primary Client · Enterprise Grade',
    runtime: 'JDK 21+',
    disk: '500 GB+ (SNAP sync)',
    ram: '8 GB minimum',
    steps: [
      'Stop your running Fukuii node',
      'Download the Olympia-compatible release from GitHub',
      'Replace the existing binary',
      'Restart your node. Fukuii automatically follows the Olympia fork.',
    ],
    githubUrl: 'https://github.com/ethereumclassic/fukuii/releases',
    docsUrl: 'https://github.com/ethereumclassic/fukuii#readme',
  },
  {
    name: 'Core-Geth',
    language: 'Go',
    languageColor: '#00ADD8',
    role: 'Legacy Client · Maintenance Mode',
    runtime: 'Go 1.24+',
    disk: '500 GB+ (full sync)',
    ram: '8 GB minimum',
    steps: [
      'Stop your running Core-Geth node',
      'Download the Olympia-compatible release from GitHub',
      'Replace the existing binary or update via package manager',
      'Restart your node. It will automatically follow the Olympia fork.',
    ],
    githubUrl: 'https://github.com/ethereumclassic/core-geth/releases',
    docsUrl: 'https://github.com/ethereumclassic/core-geth#readme',
  },
]

export default function UpgradeGuidePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ffae]/10 blur-[100px]" />
        </div>

        <div
          className="relative mx-auto max-w-4xl"
        >
          <div className="mb-4">
            <Link href="/olympia" className="text-sm text-[#00ffae] transition hover:text-[#00ffae]/80">
              ← Olympia Hub
            </Link>
          </div>

          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00ffae]/30 bg-[#00ffae]/10 px-4 py-1.5 text-sm font-medium text-[#00ffae]">
              Network Upgrade
            </span>
          </div>

          <h1
            className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl"
          >
            The <span className="text-[#00ffae]">Olympia</span> Upgrade
          </h1>

          <p
            className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Olympia delivers three protocol changes in a single activation on the
            longest-running EVM and the only Proof-of-Work smart contract platform
            in the world.
          </p>

          <ul
            className="mt-6 max-w-2xl space-y-3 text-sm text-[var(--color-text-muted)]"
          >
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 text-[#00ffae]">—</span>
              <span>
                <span className="font-semibold text-[var(--text-primary)]">Fusaka EVM alignment:</span> the headline change — closes years of execution-layer divergence from Ethereum in a single fork. Every Solidity compiler version, every deployment tool (Foundry, Hardhat), and every major library (wagmi, viem, ethers.js) works on ETC without modification, patching, or ETC-specific overrides. One codebase, every EVM chain.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 text-[#00ffae]">—</span>
              <span>
                <span className="font-semibold text-[var(--text-primary)]">EIP-1559 fee market:</span> predictable base fees, type 2 transaction support, and the fee market parity the entire EVM ecosystem assumes. Unlike Ethereum where the basefee is burned, ETC redirects it to the protocol treasury — funding open-source core development without any foundation or donor dependency.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 text-[#00ffae]">—</span>
              <span>
                <span className="font-semibold text-[var(--text-primary)]">Protocol treasury:</span> seeded by basefee revenue and voluntary contributions, governed on-chain by the Olympia DAO, funding core development, infrastructure, and long-term network security. Block rewards and tips remain completely untouched and go entirely to miners.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 text-[#00ffae]">—</span>
              <span>
                <span className="font-semibold text-[var(--text-primary)]">Institutional infrastructure:</span> the Proof-of-Work foundation for regulated stablecoin issuance (
                <a href="https://classicusd.com" target="_blank" rel="noopener noreferrer" className="text-[#00ffae] transition hover:opacity-80">
                  Classic USD
                </a>
                , MiCA and GENIUS Act-compliant), digital commodity classification under the CLARITY Act, and the broadest cross-jurisdictional institutional access profile of any Proof-of-Work smart contract network.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Activation countdown */}
      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <OlympiaCountdown variant="banner" />
        </div>
      </section>

      {/* What Olympia Brings — ECIP cards */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              What Olympia Brings to Ethereum Classic
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Three protocol upgrades in a single activation — fee market, protocol treasury, and Fusaka EVM alignment — delivered to the only Proof-of-Work smart contract platform in the world.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {ecips.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.ecip}
                    className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition hover:border-[#00ffae]/20"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <Icon size={20} style={{ color: item.color }} aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs text-[var(--color-text-muted)]">{item.ecip}</span>
                    </div>
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ECIP-1121 EVM Deep Dive */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#38bdf8]">ECIP-1121</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-[var(--text-primary)]">
              EVM Compatibility in Detail
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Three Ethereum upgrade cycles delivered to ETC in a single fork — every execution-layer improvement independent of Proof-of-Stake and blob data availability.
            </p>

            {/* Fork Timeline */}
            <div className="mt-8 mb-6 relative">
              <div className="hidden md:block absolute top-[22px] left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-[#00ffae]/30" />
              <div className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between">
                {forkTimeline.map((fork, i, arr) => (
                  <div key={fork.name} className="relative flex md:flex-col md:items-center md:w-1/3 gap-4 md:gap-0">
                    {i < arr.length - 1 && (
                      <div className="md:hidden absolute left-[17px] top-[38px] bottom-[-22px] w-px bg-[#00ffae]/30" />
                    )}
                    <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#00ffae]/40 bg-[#00ffae]/10 font-mono text-xs font-bold text-[#00ffae] relative z-10">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="md:mt-4 md:text-center">
                      <p className="font-semibold text-sm text-[var(--text-primary)]">{fork.name}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">{fork.fullName} · {fork.year}</p>
                      <div className="mt-2 flex flex-wrap gap-1 md:justify-center">
                        {fork.eips.map((eip) => (
                          <a
                            key={eip}
                            href={`https://eips.ethereum.org/EIPS/${eip.toLowerCase()}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded bg-[#8b5cf615] px-1.5 py-0.5 font-mono text-[10px] text-violet-400 transition-colors hover:bg-[#8b5cf625] hover:text-violet-300"
                          >
                            {eip}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divergence callout */}
            <div className="mb-8 rounded-xl border border-[#00ffae]/30 bg-[#00ffae]/5 p-5 text-sm text-[var(--color-text-secondary)]">
              Ethereum Classic implemented partial London EIPs in Mystique (2022) and partial Shanghai EIPs in Spiral (2024), deliberately deferring the EIP-1559 fee market for independent governance design.
              ECIP-1111 now delivers those deferred London EIPs. ECIP-1121 advances the execution layer through Dencun, Pectra, and Fusaka: every EVM improvement that is independent of Proof-of-Stake and blob data availability.
              Together, Olympia brings ETC to full Fusaka execution-layer parity.
            </div>

            {/* EVM Categories */}
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              {evmCategories.map((cat) => {
                const Icon = cat.icon
                return (
                  <div
                    key={cat.title}
                    className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:border-[#00ffae]/20"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00ffae]/8">
                        <Icon size={16} aria-hidden="true" className="text-[#00ffae]" />
                      </div>
                      <h3 className="text-sm font-semibold text-[var(--text-primary)]">{cat.title}</h3>
                    </div>
                    <div className="mb-3 flex flex-wrap gap-1">
                      {cat.eips.map((eip) => (
                        <a
                          key={eip}
                          href={`https://eips.ethereum.org/EIPS/${eip.toLowerCase()}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded bg-[#8b5cf615] px-1.5 py-0.5 font-mono text-[10px] text-violet-400 transition-colors hover:bg-[#8b5cf625] hover:text-violet-300"
                        >
                          {eip}
                        </a>
                      ))}
                    </div>
                    <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">{cat.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Blobs excluded */}
            <p className="mb-8 text-xs italic text-[var(--color-text-muted)]">
              Explicitly excluded: all blob-dependent EIPs ({' '}
              {['EIP-4844', 'EIP-7516', 'EIP-7691'].map((eip, i, arr) => (
                <span key={eip}>
                  <a
                    href={`https://eips.ethereum.org/EIPS/${eip.toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="not-italic rounded bg-[#8b5cf615] px-1 py-0.5 font-mono text-violet-400 transition-colors hover:bg-[#8b5cf625] hover:text-violet-300"
                  >
                    {eip}
                  </a>
                  {i < arr.length - 1 && ', '}
                </span>
              ))}
              {' '}). Ethereum Classic is a pure Layer 1 execution chain with no data availability requirement: blobs are L2 scaffolding ETC does not need.
            </p>

            {/* Developer tooling */}
            <h3 className="mb-4 text-base font-semibold text-[var(--text-primary)]">
              Developer Tooling — Works Without Modification
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { name: 'Solidity 0.8.x+', description: 'All recent compiler versions produce compatible bytecode for ETC without modification.' },
                { name: 'Foundry / Hardhat', description: 'Standard EVM testing and deployment toolchains work on ETC without ETC-specific forks or patches.' },
                { name: 'wagmi / viem / ethers.js', description: 'Standard wallet libraries and RPC types work on ETC without patching or overrides. One codebase, every EVM chain.' },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition hover:border-[#00ffae]/20"
                >
                  <p className="mb-1 text-sm font-semibold text-[var(--text-primary)]">{tool.name}</p>
                  <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Olympia Upgrade — callout box */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              The Olympia Upgrade
            </h2>
            <div
              className="mt-4 space-y-4 rounded-xl border border-[#00ffae]/30 bg-[#00ffae]/5 p-8 text-base leading-relaxed text-[var(--color-text-secondary)]"
            >
              <p>
                Olympia is Ethereum Classic&rsquo;s most significant protocol upgrade. Three changes arrive in a single activation: Fusaka EVM alignment, EIP-1559 fee market, and a protocol-managed treasury.
              </p>
              <p>
                The headline change is full Fusaka EVM parity &mdash; closing years of execution-layer divergence from Ethereum in a single fork. Every Solidity compiler version, every deployment tool (Foundry, Hardhat), and every major library (wagmi, viem, ethers.js) works on ETC without modification, patching, or ETC-specific overrides. One codebase deploys to every EVM chain. ETC could not credibly claim this before Olympia. After Olympia, it can.
              </p>
              <p>
                The EIP-1559 fee market redirects the basefee &mdash; value that would otherwise be destroyed &mdash; to a protocol-managed treasury. Block rewards and tips remain completely untouched and go entirely to miners. Anyone can submit proposals on-chain. Members vote on resource allocation and execute decisions. Every step is transparent and verifiable on-chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Olympia Roadmap */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Olympia Roadmap
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Five stages from consensus upgrades to permanent protocol integration.
            </p>

            <div className="mt-8 space-y-0">
              {roadmapStages.map((stage, i) => (
                <div key={stage.title} className="relative flex gap-6 pb-8">
                  <div className="flex flex-col items-center">
                    <div
                      className={`h-3 w-3 shrink-0 rounded-full ${
                        stage.status === 'complete'
                          ? 'bg-[#00ffae]'
                          : stage.status === 'active'
                            ? 'animate-pulse bg-[#00ffae]'
                            : 'bg-[var(--border)]'
                      }`}
                    />
                    {i < roadmapStages.length - 1 && (
                      <div className="mt-1 h-full w-px bg-[var(--border)]" />
                    )}
                  </div>
                  <div className="-mt-1 flex-1">
                    <div className="flex items-center gap-3">
                      <p className="text-base font-semibold text-[var(--text-primary)]">{stage.title}</p>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[stage.status]}`}>
                        {stage.status.charAt(0).toUpperCase() + stage.status.slice(1)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{stage.description}</p>
                    <ul className="mt-3 space-y-1">
                      {stage.deliverables.map((d) => (
                        <li key={d} className="text-xs text-[var(--color-text-muted)] before:mr-2 before:content-['·']">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Upgrade Guides */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Steps to Upgrade Your Client
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Node operators must upgrade before the activation block. All client releases are published well in advance.
            </p>

            <div className="mt-8 space-y-6">
              {clientData.map((client) => (
                <div
                  key={client.name}
                  className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition hover:border-[#00ffae]/20"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold"
                      style={{ backgroundColor: `${client.languageColor}20`, color: client.languageColor }}
                    >
                      {client.language.slice(0, 2)}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)]">{client.name}</h3>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {client.role} · {client.language}
                      </span>
                    </div>
                  </div>

                  {/* Prerequisites */}
                  <div className="mb-4 grid grid-cols-3 gap-2">
                    {[
                      { label: 'Runtime', value: client.runtime },
                      { label: 'Disk', value: client.disk },
                      { label: 'RAM', value: client.ram },
                    ].map((req) => (
                      <div key={req.label} className="rounded-lg bg-[var(--panel)] px-3 py-2 text-center">
                        <p className="text-[10px] text-[var(--color-text-muted)]">{req.label}</p>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{req.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Steps */}
                  <div className="space-y-2">
                    {client.steps.map((step, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#00ffae]" aria-hidden="true" />
                        <p className="text-sm text-[var(--color-text-muted)]">{step}</p>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-4 flex gap-4">
                    <a
                      href={client.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[#00ffae] transition hover:opacity-80"
                    >
                      Releases <ExternalLink size={12} />
                    </a>
                    <a
                      href={client.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[#00ffae] transition hover:opacity-80"
                    >
                      Docs <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Common questions about the Olympia upgrade, treasury funding, governance, and node operations.
            </p>

            <div className="mt-8 divide-y divide-[var(--border)]">
              {faqs.map((item) => (
                <details key={item.question} className="group py-5" open>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">{item.question}</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[var(--border)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Ready to Upgrade?</h2>
          <p className="mt-3 text-[var(--color-text-muted)]">
            Fukuii is the recommended client. Core-Geth is maintained through the transition.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/olympia/clients"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00ffae] px-6 py-3 font-medium text-black transition-all hover:bg-[#00ffae]/90 hover:shadow-lg hover:shadow-[#00ffae]/25"
            >
              View All Clients
            </Link>
            <Link
              href="/olympia/governance"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[#00ffae]/30 hover:bg-[#00ffae]/5"
            >
              Governance Framework
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />
    </main>
  )
}

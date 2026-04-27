'use client'

import Link from 'next/link'
import OlympiaCountdown from './components/OlympiaCountdown'
import OlympiaRoadmap from './components/OlympiaRoadmap'
import GovernanceStageComponent from './components/GovernanceStage'
import { FAQAccordion } from '@/app/components/sections/FAQAccordion'
import { faqs as olympiaFAQ, olympiaLinks } from './data/olympia'

const howItWorks = [
  {
    title: 'Basefee Revenue',
    description:
      'Every transaction pays a basefee via EIP-1559. The basefee is directed to the Treasury. Block rewards and tips remain completely untouched. Miners are unaffected.',
    color: '#F59E0B',
  },
  {
    title: 'Protocol Treasury',
    description:
      'Protocol-managed vault accumulates basefee revenue, voluntary donations, and mining rewards directed to the treasury address. Real-time monitoring via public dashboard.',
    color: '#00ffae',
  },
  {
    title: 'On-Chain Governance',
    description:
      'On-chain governance via the OpenZeppelin Governor 5.x contract suite. The Olympia DAO handles critical protocol decisions — security maintenance, EVM parity, and client funding — using non-transferable membership NFTs. Futarchy prediction markets open public participation to inform treasury allocation. All on-chain and auditable.',
    color: '#38bdf8',
  },
]

export default function OlympiaHubPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ffae]/10 blur-[100px]" />
        </div>

        <div
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00ffae]/30 bg-[#00ffae]/10 px-4 py-1.5 text-sm font-medium text-[#00ffae]">
              Network Upgrade
            </span>
          </div>

          <h1
            className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-[#00ffae] to-emerald-300 bg-clip-text text-transparent">
              Olympia
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]"
          >
            Active protocol development for Ethereum Classic: EVM modernization, maintained
            clients, and funded development through sustainable basefee revenue.
          </p>

          <ul
            className="mx-auto mt-6 max-w-2xl space-y-2 text-left text-sm text-[var(--color-text-muted)]"
          >
            {[
              'Fusaka EVM alignment: full parity with every Ethereum tool, library, and framework',
              'EIP-1559 fee market: predictable gas pricing, basefee revenue redirected to protocol treasury',
              'Protocol treasury: sustainable funding without new token issuance or miner reward changes',
              'Institutional infrastructure: the Proof-of-Work foundation for regulated stablecoin issuance (Classic USD, MiCA and GENIUS Act-compliant), digital commodity classification under the CLARITY Act, and the broadest cross-jurisdictional institutional access profile of any Proof-of-Work smart contract network',
            ].map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ffae]" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/olympia/clients"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00ffae] px-6 py-3 font-medium text-black transition-all hover:bg-[#00ffae]/90 hover:shadow-lg hover:shadow-[#00ffae]/25"
            >
              View Clients
            </Link>
            <a
              href={olympiaLinks.olympiaDAO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[#00ffae]/30 hover:bg-[#00ffae]/5"
            >
              OlympiaDAO.org
            </a>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <OlympiaCountdown variant="hero" />
        </div>
      </section>

      {/* What Olympia Changes — ECIP Explainer */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              What Olympia Changes
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Three client-facing ECIPs that modernize the protocol in a single coordinated upgrade.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  ecip: 'ECIP-1111',
                  title: 'EIP-1559 Fee Market',
                  description:
                    'The most widely adopted transaction format in the EVM ecosystem, now on Ethereum Classic. Dynamic gas pricing delivers predictable fees. Unlike Ethereum where basefee is burned, ETC redirects it to the protocol treasury. Miner block rewards and tips remain completely untouched.',
                  color: '#F59E0B',
                },
                {
                  ecip: 'ECIP-1112',
                  title: 'Protocol Treasury',
                  description:
                    'A protocol-controlled vault funded by basefee revenue and voluntary contributions. Institutions, developers, and stakeholders can fund Ethereum Classic core development without fielding their own team. No admin keys, no multisig. Only on-chain governance can release funds.',
                  color: '#00ffae',
                },
                {
                  ecip: 'ECIP-1121',
                  title: 'Fusaka EVM Alignment',
                  description:
                    'Building on Mystique and Spiral, Olympia delivers the remaining EVM execution-layer improvements from Dencun, Pectra, and Fusaka: every improvement independent of Proof-of-Stake and blob data availability. Exchanges and wallets gain modern RPC compatibility. Developers gain full access to every current Ethereum tool, library, and framework. One codebase, every EVM chain.',
                  color: '#38bdf8',
                },
              ].map((item) => (
                <div
                  key={item.ecip}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition hover:border-[#00ffae]/20"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="h-1 w-12 rounded-full" style={{ backgroundColor: item.color }} />
                    <a href={`https://ecips.ethereumclassic.org/ECIPs/${item.ecip.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-[var(--color-text-muted)] transition-opacity hover:opacity-70">{item.ecip}</a>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
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
              <a href="https://ecips.ethereumclassic.org/ECIPs/ecip-1121" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-[#38bdf8] transition-opacity hover:opacity-80">ECIP-1121</a>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-[var(--text-primary)]">
              EVM Compatibility in Detail
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Three Ethereum upgrade cycles delivered to ETC in a single fork: every execution-layer improvement independent of Proof-of-Stake and blob data availability.
            </p>

            {/* Fork Timeline */}
            <div className="mt-8 mb-6 relative">
              <div className="hidden md:block absolute top-[22px] left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-[#00ffae]/30" />
              <div className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between">
                {[
                  { name: 'Dencun', fullName: 'Cancun-Deneb', year: '2024', eips: ['EIP-1153', 'EIP-5656', 'EIP-2935'] },
                  { name: 'Pectra', fullName: 'Prague-Electra', year: '2025', eips: ['EIP-7702', 'EIP-2537', 'EIP-6780'] },
                  { name: 'Fusaka', fullName: 'Fulu-Osaka', year: '2025', eips: ['EIP-7623', 'EIP-7951', 'EIP-7825'] },
                ].map((fork, i, arr) => (
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
                          <span key={eip} className="rounded-sm border border-[var(--border)] bg-[var(--background)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-text-muted)]">
                            {eip}
                          </span>
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
              <a href="https://ecips.ethereumclassic.org/ECIPs/ecip-1111" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">ECIP-1111</a>{' '}
              now delivers those deferred London EIPs.{' '}
              <a href="https://ecips.ethereumclassic.org/ECIPs/ecip-1121" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">ECIP-1121</a>{' '}
              advances the execution layer through Dencun, Pectra, and Fusaka: every EVM improvement that is independent of Proof-of-Stake and blob data availability.
              Together, Olympia brings ETC to full Fusaka execution-layer parity.
            </div>

            {/* EIP Categories */}
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Gas & State Access',
                  color: '#38bdf8',
                  eips: ['EIP-7702', 'EIP-7623', 'EIP-7825', 'EIP-7883', 'EIP-7935'],
                  description: 'Account delegation, cheaper calldata, gas limit enforcement, opcode repricing, and jumpdest removal. Reduces transaction costs and enables smart account patterns without protocol changes.',
                },
                {
                  title: 'EVM Safety',
                  color: '#F59E0B',
                  eips: ['EIP-6780', 'EIP-7934', 'EIP-7910'],
                  description: 'SELFDESTRUCT restricted to deployment context, stack size enforcement, and call target constraints. Makes contract behavior more predictable and reduces attack surface.',
                },
                {
                  title: 'Cryptographic Precompiles',
                  color: '#a78bfa',
                  eips: ['EIP-2537', 'EIP-7951'],
                  description: 'BLS12-381 pairing operations for ZK-friendly proof verification, P256VERIFY for WebAuthn and passkey authentication. Native cryptographic primitives for privacy and identity.',
                },
                {
                  title: 'Execution Context',
                  color: '#00ffae',
                  eips: ['EIP-5656', 'EIP-2935', 'EIP-1153'],
                  description: 'MCOPY for efficient memory operations, historical block hashes in state, transient storage TSTORE/TLOAD. Unlocks reentrancy guards, flash loans, and cross-contract patterns without persistent storage.',
                },
              ].map((cat) => (
                <div
                  key={cat.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:border-[#00ffae]/20"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="h-1 w-12 rounded-full" style={{ backgroundColor: cat.color }} />
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">{cat.title}</h3>
                  </div>
                  <div className="mb-3 flex flex-wrap gap-1">
                    {cat.eips.map((eip) => (
                      <span key={eip} className="rounded-sm border border-[var(--border)] bg-[var(--background)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-text-muted)]">
                        {eip}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">{cat.description}</p>
                </div>
              ))}
            </div>

            {/* Blobs excluded note */}
            <p className="mb-8 text-xs text-[var(--color-text-muted)] italic">
              Explicitly excluded: all blob-dependent EIPs (EIP-4844, EIP-7516, EIP-7691). Ethereum Classic is a pure Layer 1 execution chain with no data availability requirement. Blobs are L2 scaffolding ETC does not need.
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

      {/* Global Regulatory Recognition */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#00ffae]">
                Regulatory Positioning
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-[var(--text-primary)]">
              Global Regulatory Recognition
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Ethereum Classic has received formal regulatory classification across four major jurisdictions.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  framework: 'CLARITY Act',
                  classification: 'Digital Commodity',
                  detail: 'CFTC · United States',
                  description:
                    'Classified as a digital commodity under CFTC jurisdiction. Proof-of-Work consensus is the defining characteristic for commodity status under US digital asset legislation.',
                },
                {
                  framework: 'GENIUS Act',
                  classification: 'Stablecoin Platform',
                  detail: 'United States',
                  description:
                    'The only Proof-of-Work EVM platform for regulated stablecoin deployment under the GENIUS Act. Positions ETC as the immutable settlement layer for compliant digital dollar infrastructure.',
                },
                {
                  framework: 'MiCA',
                  classification: 'Decentralized Asset',
                  detail: 'European Union',
                  description:
                    'Classified as a decentralized crypto-asset under MiCA, exempt from issuer obligations as a fully decentralized protocol with no central issuer or controlling party.',
                },
                {
                  framework: 'FSA Green List',
                  classification: 'Recognized Asset',
                  detail: 'Japan',
                  description:
                    'Recognized crypto-asset on the FSA Green List via JVCEA. Enables fast-track listing across all Japanese regulated exchanges without additional review requirements.',
                },
              ].map((item) => (
                <div
                  key={item.framework}
                  className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--background)] p-5"
                >
                  <div className="mb-3 h-0.5 w-8 rounded-full bg-[#00ffae]" />
                  <p className="text-xs font-mono text-[var(--color-text-muted)]">{item.framework}</p>
                  <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">{item.classification}</p>
                  <p className="mt-0.5 text-xs text-[#00ffae]">{item.detail}</p>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Olympia Upgrade Callout */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
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

      {/* How It Works */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              How It Works
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Funded by basefee revenue, not inflation. Block rewards and tips remain untouched.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {howItWorks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 transition hover:border-[#00ffae]/20"
                >
                  <div
                    className="mb-3 h-1 w-12 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance Process */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <GovernanceStageComponent />
        </div>
      </section>

      {/* Olympia Roadmap */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <OlympiaRoadmap />
        </div>
      </section>

      {/* Coordinating Organizations */}
      <section className="border-y border-[var(--border)] bg-[var(--panel)] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Coordinating Organizations
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Coordinating organizations working together to govern and advance the Ethereum Classic network.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: 'Ethereum Classic',
                  role: 'Network Protocol',
                  description: 'The largest Proof-of-Work smart contract platform. Coordinating network upgrades to maintain EVM parity and modern tooling.',
                  href: 'https://ethereumclassic.com',
                },
                {
                  name: 'Olympia Treasury',
                  role: 'Protocol-Funded Treasury',
                  description: 'Basefee revenue creates sustainable protocol funding. Real-time treasury monitoring via public dashboard.',
                  href: olympiaLinks.treasuryDashboard,
                },
                {
                  name: 'Olympia DAO',
                  role: 'On-Chain Governance',
                  description: 'Olympia DAO membership NFTs for critical protocol decisions, futarchy prediction markets for public participation. All on-chain on Ethereum Classic.',
                  href: olympiaLinks.olympiaDAO,
                },
                {
                  name: 'Ethereum Classic DAO LLC',
                  role: 'Legal Entity',
                  description: 'The legal wrapper for the Olympia DAO under Wyoming\'s DAO LLC framework. Ensures regulatory compliance, proper reporting, and alignment with digital asset legislation.',
                  href: olympiaLinks.ethereumClassicDAO,
                },
              ].map((entity) => (
                <a
                  key={entity.name}
                  href={entity.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all hover:-translate-y-0.5 hover:border-[#00ffae]/20"
                >
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">{entity.name}</h3>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">{entity.role}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {entity.description}
                  </p>
                  <span className="mt-4 text-xs font-medium text-[#00ffae] transition group-hover:translate-x-0.5">
                    Visit →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        title="Frequently Asked Questions"
        subtitle="Olympia Upgrade"
        items={olympiaFAQ.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      {/* Bottom CTA */}
      <section className="border-t border-[var(--border)] px-6 py-20 md:px-10 lg:px-12">
        <div
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Ready to Upgrade?
          </h2>
          <p className="mt-3 text-[var(--color-text-muted)]">
            Fukuii is the recommended client. Core-Geth is maintained through the transition.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/olympia/upgrade"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00ffae] px-6 py-3 font-medium text-black transition-all hover:bg-[#00ffae]/90 hover:shadow-lg hover:shadow-[#00ffae]/25"
            >
              Upgrade Guide
            </Link>
            <Link
              href="/olympia/clients"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[#00ffae]/30 hover:bg-[#00ffae]/5"
            >
              View Clients
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
            mainEntity: olympiaFAQ.map((f) => ({
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

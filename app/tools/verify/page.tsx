'use client'

import Link from 'next/link'

const verificationMethods = [
  {
    name: 'Via Solidity (Single File)',
    description: 'Upload a single Solidity file for simple contracts',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    url: 'https://etc.blockscout.com/contract-verification',
  },
  {
    name: 'Via Solidity (Multi-Part Files)',
    description: 'Upload multiple files for contracts with imports',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
    url: 'https://etc.blockscout.com/contract-verification',
  },
  {
    name: 'Via Standard Input JSON',
    description: 'Use compiler standard JSON input for complex projects',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    url: 'https://etc.blockscout.com/contract-verification',
  },
  {
    name: 'Via Vyper',
    description: 'Verify contracts written in Vyper language',
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    url: 'https://etc.blockscout.com/contract-verification',
  },
]

const steps = [
  {
    number: '1',
    title: 'Deploy Your Contract',
    description: 'Deploy your smart contract to the ETC mainnet or Mordor testnet',
  },
  {
    number: '2',
    title: 'Gather Information',
    description: 'Note the contract address, compiler version, and constructor arguments',
  },
  {
    number: '3',
    title: 'Submit Source Code',
    description: 'Upload your source code via Blockscout verification interface',
  },
  {
    number: '4',
    title: 'Verify & Publish',
    description: 'Verification is automatic. Your contract will show as verified',
  },
]

const benefits = [
  {
    title: 'Build Trust',
    description: 'Users can verify the code matches what\'s deployed on-chain',
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Enable Interaction',
    description: 'Verified contracts get read/write tabs in the explorer',
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: 'Improve Discoverability',
    description: 'Verified contracts appear in search and verified contract lists',
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: 'Security Audits',
    description: 'Makes it easier for security researchers to audit your code',
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function VerifyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <div>
              <Link
                href="/tools"
                className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Tools
              </Link>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
                Contract Verification
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
                Verify your smart contracts on Blockscout to make them transparent and trustworthy.
                Users can read your code and interact with verified contracts directly.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="https://etc.blockscout.com/contract-verification"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Verify Contract on Blockscout
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Methods */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-6 text-xl font-semibold text-[var(--text-primary)]"
          >
            Verification Methods
          </h2>
          <div
            className="grid gap-4 sm:grid-cols-2"
          >
            {verificationMethods.map((method) => (
              <a
                key={method.name}
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                    {method.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{method.description}</p>
                </div>
                <svg aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How to Verify */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-6 text-xl font-semibold text-[var(--text-primary)]"
          >
            How to Verify
          </h2>
          <div
            className="grid gap-4 md:grid-cols-4"
          >
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4"
              >
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-0.5 w-4 -translate-y-1/2 translate-x-full bg-[var(--border)] md:block" />
                )}
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-black">
                  {step.number}
                </div>
                <h3 className="font-semibold text-[var(--text-primary)]">{step.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">Why Verify Your Contract?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-success-bg)] text-[var(--color-success)]">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)]">{benefit.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-xl border border-[var(--color-warning)]/20 bg-[var(--color-warning)]/5 p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">What You Need</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-warning)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong className="text-[var(--text-primary)]">Contract Address</strong> - The deployed contract address on mainnet or testnet</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-warning)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong className="text-[var(--text-primary)]">Compiler Version</strong> - Exact Solidity/Vyper version used (e.g., v0.8.20)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-warning)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong className="text-[var(--text-primary)]">Source Code</strong> - Original source files including all imports</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-warning)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong className="text-[var(--text-primary)]">Constructor Arguments</strong> - ABI-encoded arguments if your contract has a constructor</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                <svg aria-hidden="true" className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-warning)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong className="text-[var(--text-primary)]">Optimization Settings</strong> - Whether optimizer was enabled and run count</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Developer CTA */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Need Help Building?</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Check out our developer documentation for guides on smart contract development,
              testing, and deployment on Ethereum Classic.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/build/getting-started"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Getting Started
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/build/tools"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg)]"
              >
                Developer Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

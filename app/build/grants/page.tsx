'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

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

interface FundingSource {
  name: string
  description: string
  type: 'grants' | 'bounties' | 'investment' | 'community'
  url: string
  fundingRange?: string
  status: 'active' | 'periodic' | 'case-by-case'
  focus?: string[]
}

const fundingSources: FundingSource[] = [
  {
    name: 'ETC Cooperative Grants',
    description: 'The ETC Cooperative provides grants for projects that benefit the Ethereum Classic ecosystem, including protocol development, tooling, and community initiatives.',
    type: 'grants',
    url: 'https://etccooperative.org',
    fundingRange: '$5K - $100K+',
    status: 'active',
    focus: ['Protocol Development', 'Infrastructure', 'Developer Tools', 'Education'],
  },
  {
    name: 'ETC Community Fund',
    description: 'Community-driven funding for smaller projects, events, and initiatives. Proposals are reviewed by community members.',
    type: 'community',
    url: 'https://discord.com/invite/Tq57jxSwsa',
    fundingRange: '$500 - $10K',
    status: 'periodic',
    focus: ['Community Events', 'Content Creation', 'Translations', 'Small Tools'],
  },
  {
    name: 'Bug Bounties',
    description: 'Security-focused bounties for finding and responsibly disclosing vulnerabilities in ETC protocol clients and critical infrastructure.',
    type: 'bounties',
    url: 'https://github.com/etclabscore/core-geth/security',
    fundingRange: '$100 - $50K+',
    status: 'active',
    focus: ['Security', 'Core Clients', 'Critical Infrastructure'],
  },
  {
    name: 'Gitcoin Grants',
    description: 'Quadratic funding rounds where community donations are matched. Great for public goods and open-source projects.',
    type: 'grants',
    url: 'https://gitcoin.co',
    fundingRange: 'Variable',
    status: 'periodic',
    focus: ['Open Source', 'Public Goods', 'Developer Tools'],
  },
]

const projectIdeas = [
  {
    title: 'Developer Tooling',
    description: 'Build tools that make it easier to develop on ETC: IDEs, testing frameworks, debugging tools.',
    difficulty: 'Medium',
    impact: 'High',
  },
  {
    title: 'Block Explorer Features',
    description: 'Enhance Blockscout or build complementary tools for network transparency.',
    difficulty: 'Medium',
    impact: 'High',
  },
  {
    title: 'DeFi Protocols',
    description: 'Build or port DeFi protocols to ETC: lending, derivatives, yield aggregators.',
    difficulty: 'Hard',
    impact: 'Very High',
  },
  {
    title: 'Mobile Wallets',
    description: 'Create or improve mobile wallet experiences with native ETC support.',
    difficulty: 'Medium',
    impact: 'High',
  },
  {
    title: 'Educational Content',
    description: 'Create tutorials, videos, courses, or documentation for ETC developers and users.',
    difficulty: 'Easy',
    impact: 'Medium',
  },
  {
    title: 'Network Monitoring',
    description: 'Build dashboards and monitoring tools for network health, node distribution, and metrics.',
    difficulty: 'Medium',
    impact: 'Medium',
  },
  {
    title: 'Bridge Infrastructure',
    description: 'Build or improve bridges between ETC and other networks for cross-chain interoperability.',
    difficulty: 'Hard',
    impact: 'Very High',
  },
  {
    title: 'NFT Marketplace',
    description: 'Create an NFT marketplace or tooling for the ETC ecosystem.',
    difficulty: 'Medium',
    impact: 'Medium',
  },
]

const applicationSteps = [
  {
    step: 1,
    title: 'Research',
    description: 'Understand the ETC ecosystem, existing projects, and identify gaps or opportunities.',
  },
  {
    step: 2,
    title: 'Proposal',
    description: 'Write a detailed proposal including problem statement, solution, timeline, budget, and team.',
  },
  {
    step: 3,
    title: 'Submit',
    description: 'Submit your proposal to the appropriate funding source. Each has different submission processes.',
  },
  {
    step: 4,
    title: 'Review',
    description: 'Your proposal will be reviewed by the funding committee or community members.',
  },
  {
    step: 5,
    title: 'Approval',
    description: 'If approved, you will receive funding disbursement details and milestone requirements.',
  },
  {
    step: 6,
    title: 'Build',
    description: 'Build your project, submit milestone updates, and deliver the final product.',
  },
]

export default function BuildGrantsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-[var(--panel)] to-[var(--bg)] py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--color-primary-rgb),0.1),transparent_70%)]" />
        <div className="container relative mx-auto max-w-6xl px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <Link
                href="/build"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--text-primary)]"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Build
              </Link>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl"
            >
              Grants & Funding
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-[var(--color-text-secondary)]"
            >
              Get funding to build on Ethereum Classic. Grants, bounties, and community support for developers and projects.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#funding-sources"
                className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
              >
                View Funding Sources
              </a>
              <a
                href="#project-ideas"
                className="rounded-xl border border-[var(--border)] px-6 py-3 font-semibold text-[var(--text-primary)] transition hover:bg-[var(--panel)]"
              >
                Project Ideas
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[var(--border)] py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: '$1M+', label: 'Grants Distributed' },
              { value: '50+', label: 'Projects Funded' },
              { value: '4', label: 'Active Programs' },
              { value: '24/7', label: 'Community Support' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6 text-center"
              >
                <div className="text-3xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                <div className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Sources */}
      <section id="funding-sources" className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Funding Sources</h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Multiple avenues to fund your ETC project
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {fundingSources.map((source, index) => (
              <motion.div
                key={source.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">{source.name}</h3>
                    <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs ${
                      source.status === 'active'
                        ? 'bg-[var(--color-success)]/10 text-[var(--color-success)]'
                        : 'bg-[var(--color-warning)]/10 text-[var(--color-warning)]'
                    }`}>
                      {source.status === 'active' ? 'Active' : source.status === 'periodic' ? 'Periodic' : 'Case by Case'}
                    </span>
                  </div>
                  {source.fundingRange && (
                    <span className="text-sm font-medium text-[var(--color-primary)]">
                      {source.fundingRange}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                  {source.description}
                </p>

                {source.focus && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {source.focus.map((area) => (
                      <span
                        key={area}
                        className="rounded-full bg-[var(--bg)] px-2 py-1 text-xs text-[var(--color-text-muted)]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline"
                >
                  Learn More
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Ideas */}
      <section id="project-ideas" className="border-t border-[var(--border)] bg-[var(--panel)] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Project Ideas</h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Looking for inspiration? Here are some areas where the ETC ecosystem needs builders.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {projectIdeas.map((idea, index) => (
              <motion.div
                key={idea.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5"
              >
                <h3 className="font-semibold text-[var(--text-primary)]">{idea.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{idea.description}</p>
                <div className="mt-4 flex items-center gap-4 text-xs">
                  <span className="text-[var(--color-text-muted)]">
                    Difficulty: <span className="text-[var(--text-primary)]">{idea.difficulty}</span>
                  </span>
                  <span className="text-[var(--color-text-muted)]">
                    Impact: <span className="text-[var(--color-primary)]">{idea.impact}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Application Process</h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              Follow these steps to apply for funding
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
              >
                <div className="absolute -top-3 left-6 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-black">
                  {step.step}
                </div>
                <h3 className="mt-2 font-semibold text-[var(--text-primary)]">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Ready to Build?</h2>
              <p className="mt-4 text-[var(--color-text-muted)]">
                Have questions about funding or need help with your proposal? Join our community channels.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://discord.com/invite/Tq57jxSwsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[var(--color-primary)] px-6 py-3 font-semibold text-black transition hover:bg-[var(--color-primary-hover)]"
                >
                  Join Discord
                </a>
                <Link
                  href="/build"
                  className="rounded-xl border border-[var(--border)] px-6 py-3 font-semibold text-[var(--text-primary)] transition hover:bg-[var(--bg)]"
                >
                  Developer Hub
                </Link>
                <Link
                  href="/contact?type=partnership"
                  className="rounded-xl border border-[var(--border)] px-6 py-3 font-semibold text-[var(--text-primary)] transition hover:bg-[var(--bg)]"
                >
                  Contact Us
                </Link>
              </div>

              <p className="mt-6 text-sm text-[var(--color-text-muted)]">
                For general inquiries about grants, reach out via{' '}
                <a
                  href="https://etccooperative.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  ETC Cooperative
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

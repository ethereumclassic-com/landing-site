import Link from 'next/link'
import { FadeIn } from '@/app/components/ui/FadeIn'
import { SectionDivider } from '@/app/components/ui'

/**
 * Every claim on this page is checked against ECIP-1112 rather than paraphrased
 * from another site. Two are easy to get wrong and are stated deliberately:
 *
 *  - The Treasury deploys via plain CREATE from a reserved deployer nonce, NOT
 *    CREATE2. Only CoreNFT, Executor and Governor use CREATE2 (§ Deployment).
 *  - BASEFEE is the only protocol-directed source. Voluntary contributions are
 *    real but are donations, including a miner naming the Treasury as their
 *    coinbase recipient — that is donated hashpower, not a protocol mandate.
 */

const FLOW = [
  { step: 'Transactions', detail: 'Users pay gas on every ETC transaction' },
  { step: 'Basefee', detail: 'Redirected by ECIP-1111, not burned' },
  { step: 'Treasury', detail: 'Credited at block finalization' },
  { step: 'Governance', detail: 'Members propose and vote on spending' },
  { step: 'Ecosystem', detail: 'Development, tooling and security work' },
]

const INVARIANTS = [
  {
    title: 'It cannot mint',
    body: 'The Treasury holds ETC and disburses ETC. It has no power to create supply, so ECIP-1017 monetary policy is untouched.',
  },
  {
    title: 'Its code cannot change',
    body: 'The contract is immutable, with no proxy and no upgrade path. What ships at the fork is what runs permanently.',
  },
  {
    title: 'One caller can withdraw',
    body: 'Withdrawal is restricted to a single authorized executor, fixed in the constructor at deployment and never reassignable.',
  },
  {
    title: 'It is non-custodial',
    body: 'No individual, foundation or company can move the funds. There is no admin key, because there is no admin.',
  },
  {
    title: 'It tracks nothing',
    body: 'The withdraw interface receives a recipient and an amount, and nothing else. Proposal accounting lives in the governance layer, never here.',
  },
  {
    title: 'Miner income is untouched',
    body: 'Block rewards and priority tips go entirely to miners, exactly as before. The basefee was never part of miner compensation.',
  },
]

export default function TreasuryPage() {
  return (
    <main className="min-h-screen">
      <section className="px-6 pt-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--brand-green)]">
              Olympia · ECIP-1112
            </p>
            <h1 className="mt-3 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              The Olympia Treasury
            </h1>
            <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
              An immutable, non-custodial contract that receives Ethereum
              Classic&apos;s basefee at block finalization. It is the mechanism that
              lets the network fund its own development without depending on any
              single organization&apos;s continued generosity.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn delay={100}>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              How funds reach it
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {FLOW.map((f, i) => (
                <div
                  key={f.step}
                  className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4"
                >
                  <p className="font-mono text-[10px] text-[var(--text-subtle)]">
                    Step {i + 1}
                  </p>
                  <p className="mt-1 font-semibold text-[var(--brand-green)]">{f.step}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{f.detail}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              What funds it, and what does not
            </h2>
            <div className="mt-6 space-y-5 text-[var(--color-text-muted)]">
              <p>
                The basefee reaches the Treasury automatically. Every ETC
                transaction pays one, and under ECIP-1111 the full amount is
                credited to the Treasury address during block finalization rather
                than burned. That is the protocol-directed source, and it is the
                only one.
              </p>
              <p>
                Anyone can add to it by choice. Sending ETC to the address works
                like any other transfer, and a miner can name the Treasury as the
                recipient of their coinbase — donating hashpower rather than
                currency. Both are voluntary contributions by different means, and
                neither is directed by any ECIP.
              </p>
              <p className="rounded-xl border border-[var(--border-default)] bg-[var(--panel)] p-4 text-sm">
                <span className="font-semibold text-[var(--text-primary)]">
                  Miner compensation does not change.
                </span>{' '}
                Block rewards and priority tips go entirely to miners. The basefee
                is value that Ethereum destroys and Ethereum Classic redirects; it
                has never formed part of what a miner is paid.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              What it can never do
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--color-text-muted)]">
              These are properties of the contract, not policies of an operator.
              None can be changed after deployment.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {INVARIANTS.map((inv) => (
                <div
                  key={inv.title}
                  className="rounded-xl border border-[var(--border-default)] bg-[var(--panel)] p-5"
                >
                  <p className="font-semibold text-[var(--text-primary)]">{inv.title}</p>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{inv.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              Deployed in stages, on purpose
            </h2>
            <div className="mt-6 space-y-5 text-[var(--color-text-muted)]">
              <p>
                The Treasury deploys at the Olympia hard fork, in Stage 1, alongside
                the consensus changes that fund it. The governance suite that spends
                it — the DAO framework, the funding-proposal process and the
                sanctions oracle — follows in Stage 2, once audited.
              </p>
              <p>
                It deploys first because its address is written into every client at
                the consensus layer and can never be changed afterward. Staging buys
                audit time for the governance layer without leaving the basefee with
                nowhere to go.
              </p>
              <p>
                Funds stay locked in the meantime by construction rather than by
                discretion: the only address permitted to withdraw is the Executor,
                fixed at deployment, and nothing can spend from the Treasury until
                that contract exists and governance is live.
              </p>
              <p className="text-sm">
                <Link
                  href="/olympia/upgrade"
                  className="text-[var(--brand-green)] underline underline-offset-4"
                >
                  The full five-stage roadmap
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-5 text-xl font-semibold text-[var(--text-primary)]">
              Related
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: '/olympia/governance',
                  title: 'On-Chain Governance',
                  body: 'Who decides how the Treasury is spent, and how.',
                },
                {
                  href: '/olympia/upgrade',
                  title: 'Upgrade Details',
                  body: 'The five stages, the ECIPs, and what activates when.',
                },
                {
                  href: '/mining/fee-market',
                  title: 'Miners & the Fee Market',
                  body: 'Why a fee market matters to Proof-of-Work security.',
                },
                {
                  href: '/olympia',
                  title: 'Olympia Hub',
                  body: 'The upgrade in full, across every ECIP.',
                },
                {
                  href: 'https://olympiatreasury.org',
                  title: 'Live Treasury Dashboard',
                  body: 'Balance, inflows and transactions in real time.',
                  external: true,
                },
                {
                  href: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1112',
                  title: 'ECIP-1112',
                  body: 'The specification this page describes.',
                  external: true,
                },
              ].map((c) =>
                c.external ? (
                  <a
                    key={c.href}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-[var(--border-default)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--brand-green)]"
                  >
                    <p className="font-semibold text-[var(--text-primary)]">{c.title}</p>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{c.body}</p>
                  </a>
                ) : (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="rounded-xl border border-[var(--border-default)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--brand-green)]"
                  >
                    <p className="font-semibold text-[var(--text-primary)]">{c.title}</p>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{c.body}</p>
                  </Link>
                ),
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

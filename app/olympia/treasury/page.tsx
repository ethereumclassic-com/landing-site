import Link from 'next/link'
import { FadeIn } from '@/app/components/ui/FadeIn'
import { SectionDivider } from '@/app/components/ui'
import { ecipUrl } from '@/lib/olympia-ecips'
import OlympiaStatusBadge from '../components/OlympiaStatusBadge'
import { olympiaLinks } from '../data/olympia'

/**
 * The Olympia Treasury as ECIP-1112 and ECIP-1113 specify it, read from the ECIPs working copy when
 * written. Both are drafts, so every sentence is in proposal voice. The two things most often stated
 * wrongly are stated deliberately:
 *
 *  - The address is permanent and the logic behind it is not. It is a stock TransparentUpgradeableProxy,
 *    repairable by an ordinary proposal; only the address needs a hard fork to change.
 *  - The base fee is credited inside each transaction's own state transition, never at block
 *    finalization, and the credit runs no contract code.
 */

const FLOW = [
  { step: 'Transactions', detail: 'Each would pay a base fee under ECIP-1111.' },
  { step: 'Credit', detail: 'Inside that transaction’s own state transition, with no contract code run.' },
  { step: 'Treasury', detail: 'The balance at the Sovereignty Vault address.' },
  { step: 'Proposal', detail: 'A funding proposal, voted by Olympia DAO’s members.' },
  { step: 'Timelock', detail: 'Queued, a public delay, then executed by the Governor.' },
]

const PERMANENCE = [
  { what: 'The Sovereignty Vault address', permanent: 'Yes: the consensus commitment', replaced: 'A hard fork, and nothing else' },
  { what: 'The Treasury’s logic, behind the address', permanent: 'No', replaced: 'A proposal, at the same address' },
  { what: 'The Governor', permanent: 'No', replaced: 'A proposal moving the Timelock’s roles to a successor' },
  { what: 'CoreNFT, the voting token', permanent: 'No', replaced: 'A new Governor bound to a new token' },
]

const CANNOT = [
  {
    title: 'No key can move it',
    body: 'There would be no admin key, multisig or committee. The Governor alone would hold the Timelock’s roles to propose, execute and cancel, and the Treasury itself would own the contract that upgrades it.',
  },
  {
    title: 'No one off-chain can approve or veto',
    body: 'No off-chain entity could unilaterally approve or veto a governance action. Ethereum Classic DAO LLC, the legal wrapper ECIP-1114 contemplates, would hold no on-chain role.',
  },
  {
    title: 'Its balance is the only ledger',
    body: 'No implementation at the address may keep its own count of what it received, now or after any upgrade, so value credited by consensus can always be spent.',
  },
  {
    title: 'It cannot mint',
    body: 'It would hold and move what it receives and create nothing, so ECIP-1017 monetary policy is untouched.',
  },
]

export default function TreasuryPage() {
  return (
    <main className="min-h-screen">
      <section className="px-6 pt-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--brand-green)]">
              Olympia · ECIP-1112 · ECIP-1113
            </p>
            <h1 className="mt-3 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">The Olympia Treasury</h1>
            <div className="mt-4">
              <OlympiaStatusBadge />
            </div>
            <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
              In the Olympia proposal, the Treasury would be the account at the Sovereignty Vault: the one
              permanent address at which Ethereum Classic&apos;s base-fee revenue would accumulate. The address
              would be permanent and the logic behind it repairable, and Olympia DAO would be the only route by
              which its balance could be spent.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn delay={100}>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">How funds would reach it, and leave it</h2>
            <ol className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {FLOW.map((f, i) => (
                <li key={f.step} className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-4">
                  <p className="font-mono text-[10px] text-[var(--text-subtle)]">Step {i + 1}</p>
                  <p className="mt-1 font-semibold text-[var(--brand-green)]">{f.step}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{f.detail}</p>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">What would fund it</h2>
            <div className="mt-6 space-y-5 text-[var(--color-text-muted)]">
              <p>
                The base fee is the protocol-directed source, and the only one. ECIP-1111 would credit each
                transaction&apos;s base fee to the Sovereignty Vault address where Ethereum destroys it: inside
                that transaction&apos;s own state transition, as a direct addition to the balance that runs no
                contract code and cannot fail.
              </p>
              <p>
                Anyone could add to it by choice. The address would accept any asset, so there would be one
                contribution address for every asset class, and anything it holds could be moved by an ordinary
                proposal. The one exception is an ERC-777 token, whose transfer to it reverts, so the sender
                keeps it. A miner could also name the address as a block&apos;s coinbase, donating that
                block&apos;s reward. Donations Ethereum Classic DAO LLC receives off-chain are its own, not the
                Treasury&apos;s, and are accounted for separately.
              </p>
              <p className="rounded-xl border border-[var(--border-default)] bg-[var(--panel)] p-4 text-sm">
                <span className="font-semibold text-[var(--text-primary)]">Miner compensation would not change.</span>{' '}
                Block rewards and priority-fee tips go to miners as before. Ethereum Classic has no base fee
                today, so nothing is taken from what miners earn now.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">A permanent address, with repairable logic</h2>
            <p className="mt-2 max-w-3xl text-[var(--color-text-muted)]">
              Every client would carry the address in its chain configuration, so redirecting the
              network&apos;s revenue would take a coordinated hard fork. The account there would be a stock
              OpenZeppelin transparent proxy, so its logic could take a security fix or a dependency migration
              by an ordinary proposal while the address stands. Wyoming&apos;s DAO statute requires that every
              smart contract a DAO uses can be upgraded, and this design meets it.
            </p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--border-default)]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[var(--panel)] text-xs text-[var(--color-text-muted)]">
                  <tr>
                    <th scope="col" className="px-4 py-2 font-medium">What</th>
                    <th scope="col" className="px-4 py-2 font-medium">Permanent?</th>
                    <th scope="col" className="px-4 py-2 font-medium">Replaced by</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-default)]">
                  {PERMANENCE.map((r) => (
                    <tr key={r.what}>
                      <td className="px-4 py-2 text-[var(--text-primary)]">{r.what}</td>
                      <td className="px-4 py-2 text-[var(--color-text-muted)]">{r.permanent}</td>
                      <td className="px-4 py-2 text-[var(--color-text-muted)]">{r.replaced}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 max-w-3xl text-sm text-[var(--color-text-muted)]">
              One case cannot be repaired by a proposal: capture of the upgrade authority itself. The remedy
              would be a hard fork pointing the address at a newly deployed account, which bounds the loss to
              the balance held at the moment of capture and the revenue credited before the new block.
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">Who could spend it</h2>
            <p className="mt-2 max-w-3xl text-[var(--color-text-muted)]">
              Only Olympia DAO, by a proposal that passes a vote of its members, is queued in the Timelock and
              executes after its delay. Every step would be public and recorded in the contracts&apos; events.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {CANNOT.map((c) => (
                <div key={c.title} className="rounded-xl border border-[var(--border-default)] bg-[var(--panel)] p-5">
                  <p className="font-semibold text-[var(--text-primary)]">{c.title}</p>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{c.body}</p>
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
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">Deployed before the fork</h2>
            <div className="mt-6 space-y-5 text-[var(--color-text-muted)]">
              <p>
                Every contract the revenue would pass through would be deployed on Ethereum Classic as it runs
                today, in dependency order, with no address predicted or reserved. The Treasury&apos;s address
                would be published, with the verified source of every contract at and beneath it, where upgrade
                authority rests and its full role table, before the activation block is scheduled.
              </p>
              <p>
                The fork would then commit to an address anyone could inspect first. Before that block the
                balance is zero, and that window is where a change of Governor is rehearsed end to end, while
                nothing is at stake.
              </p>
              <p className="text-sm">
                <Link href="/olympia#activation" className="text-[var(--brand-green)] underline underline-offset-4">
                  The order the ECIPs set for activation
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
            <h2 className="mb-5 text-xl font-semibold text-[var(--text-primary)]">Related</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { href: '/olympia/governance', title: 'Governance', body: 'How Olympia DAO would decide what the Treasury funds.' },
                { href: '/olympia/miners', title: 'Miners and Fees', body: 'What the base fee would change for miners, and what it would not.' },
                { href: '/olympia/upgrade', title: 'For Node Operators', body: 'What Olympia would change for a node.' },
                { href: '/olympia', title: 'Olympia Hub', body: 'The proposal across every ECIP.' },
                { href: olympiaLinks.treasurySite, title: 'olympiatreasury.org', body: 'The treasury site.', external: true },
                { href: ecipUrl(1112), title: 'ECIP-1112', body: 'Sovereignty Vault.', external: true },
                { href: ecipUrl(1113), title: 'ECIP-1113', body: 'Olympia DAO Governance and Treasury.', external: true },
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

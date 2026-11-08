/**
 * The Core-Geth section of /llms.txt and /llms-full.txt, rendered from lib/core-geth-record.ts the
 * way coregeth.com renders its own /llms.txt, so the three files cannot state different figures.
 * Backticks mark code and `[label](href)` marks a link, as there.
 */
import {
  AUDITS,
  EXPOSED_LINE,
  NETWORK_RUNNING,
  OPERATOR_ACTIONS,
  PREVIOUS_NAMESPACE,
  RECOMMENDED_LINE,
  REPO,
  SITE_URL,
  TRANSITION,
} from '@/lib/core-geth-record'
import { CORE_GETH_LLMS_URL, CORE_GETH_MESS_DEFAULT_URL, CORE_GETH_SECURITY_URL, coregethHref } from '@/lib/core-geth'

/** A link in this file is read away from coregeth.com, so its site-relative hrefs are spelled out. */
const absolute = (text: string) => text.replaceAll('](/', `](${SITE_URL}/`)

/** A release's MESS default, named with its reason. */
const MESS = `MESS (Modified Exponential Subjective Scoring, ECBP-1100) makes a node resist deep chain reorganizations. It never changes whether a block is valid; it only decides which of two valid chains the node keeps when a competing chain would replace blocks it already accepted. A release ships MESS on or off by default: because every \`${EXPOSED_LINE}\` release still carried at least one known vulnerability when \`${RECOMMENDED_LINE}.0\` was released, \`${RECOMMENDED_LINE}.0\` ships it on, while \`${EXPOSED_LINE}.x\` releases carrying ECBP-1110 switch it off from the Spiral block, 19,250,000. \`${RECOMMENDED_LINE}.1\` turns it off by default again, and a build of the main branch, which reports \`${RECOMMENDED_LINE}.1-unstable\`, already does. Without a flag the node uses the setting its release ships with; \`--mess\` turns it on and \`--mess=false\` turns it off, and every node you run should carry the same setting: ${CORE_GETH_MESS_DEFAULT_URL}`

/** coregeth.com's release pipeline audit, in its own words (src/data/reports.ts). */
const GLIBC = `From \`${EXPOSED_LINE}.21\`, every Linux archive requires glibc 2.34, up from 2.17 in \`${EXPOSED_LINE}.20\` on x86_64, so Ubuntu 20.04, Debian 11, RHEL 8 and Amazon Linux 2 cannot run any later \`${EXPOSED_LINE}\` release, and nothing in a build log reported the change.`

/** What ruleset 20254016 enforces on core-geth's main branch, and nothing more. */
const REVIEW = `Every change reaches \`main\` in \`${REPO.slug}\` through a pull request that needs an approving review and the project's required checks.`

export function coreGethLlmsSection(): string {
  const rows = NETWORK_RUNNING.rows.map(
    (row) => `- ${row.running}: ${row.nodes} nodes, ${row.share}, ${row.status}: ${absolute(row.summary)}.`
  )
  const actions = OPERATOR_ACTIONS.map((action) => {
    const name = action.href
      ? `[${action.text}](${coregethHref(action.href)})`
      : `${action.text}${action.code ? `\`${action.code}\`` : ''}`
    return action.detail ? `- ${name}: ${absolute(action.detail)}` : `- ${name}`
  })
  const audits = AUDITS.map(
    (doc) => `- [${doc.title}](${coregethHref(doc.href)}), ${doc.date.text}: ${absolute(doc.summary)}`
  )
  return [
    `Core-Geth is maintained at ${SITE_URL}, which publishes its own machine-readable summary at ${CORE_GETH_LLMS_URL}. This section takes its figures and sentences from the same data, as coregeth.com publishes them.`,
    '',
    `Releases are published from ${REPO.releasesUrl}. ${PREVIOUS_NAMESPACE} The latest release is ${REPO.latestUrl}; a reader told to upgrade goes to ${SITE_URL}/downloads/, which has the commands.`,
    '',
    absolute(TRANSITION.lede),
    '',
    absolute(TRANSITION.advice),
    '',
    absolute(NETWORK_RUNNING.lede),
    '',
    `Core-Geth nodes by release on ${NETWORK_RUNNING.measured.text}, ${NETWORK_RUNNING.total} in all, from ${NETWORK_RUNNING.source.label} (${NETWORK_RUNNING.source.href}):`,
    '',
    ...rows,
    `- The other ${NETWORK_RUNNING.unlisted.nodes} nodes ran ${NETWORK_RUNNING.unlisted.what}.`,
    '',
    `What each release fixed, left open and was built with is on ${CORE_GETH_SECURITY_URL}, and the evidence for each row is at ${NETWORK_RUNNING.evidence}.`,
    '',
    'For node operators:',
    '',
    ...actions,
    '',
    MESS,
    '',
    GLIBC,
    '',
    REVIEW,
    '',
    'The audits and release reports behind these claims:',
    '',
    ...audits,
  ].join('\n')
}

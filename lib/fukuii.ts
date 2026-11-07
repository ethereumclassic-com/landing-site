import type { CoreGethTask } from './core-geth'

/**
 * Fukuii addresses and facts shared across the site.
 *
 * Fukuii's own pages lead how it is described: fukuii.com, its documentation at
 * docs.fukuii.com, and the chippr-robotics/fukuii repository with its NOTICE. Copy here
 * follows them. `fukuii-project/fukuii-cli` is a separate codebase with no common ancestor,
 * not the client this site lists, so its descriptions never describe Fukuii here.
 *
 * Core-Geth is the recommended client. Fukuii's maintainers mark it alpha, so the site offers
 * it as an alternative to try, and the status below says so wherever it appears.
 *
 * Copy here names no release: a link to the release itself is `releases/latest`, so a new
 * Fukuii release needs no edit here.
 */

export const FUKUII_HOMEPAGE_URL = 'https://fukuii.com'
export const FUKUII_DOCS_URL = 'https://docs.fukuii.com'
export const FUKUII_REPO_URL = 'https://github.com/chippr-robotics/fukuii'
export const FUKUII_RELEASES_URL = `${FUKUII_REPO_URL}/releases`
/**
 * The newest release not marked pre-release, whatever it is: the builds published between full
 * releases are marked pre-release, and this skips them. A link to the release itself uses this,
 * never a tag.
 */
export const FUKUII_LATEST_RELEASE_URL = `${FUKUII_RELEASES_URL}/latest`
export const FUKUII_IMAGE = 'ghcr.io/chippr-robotics/fukuii'
export const FUKUII_MAINTAINER = 'Chippr Robotics LLC'

/** Its maintainers' own maturity label, shown as a badge so a change is one edit. */
export const FUKUII_STATUS = 'Alpha'

/** One line, for cards and meta descriptions. */
export const FUKUII_SUMMARY =
  'An execution client in Scala 3, maintained by Chippr Robotics, with native Proof-of-Work for Ethereum Classic. In alpha: an alternative to try beside Core-Geth.'

export const FUKUII_DESCRIPTION =
  "An EVM-compliant execution client in Scala 3 with pluggable consensus: native Proof-of-Work for Ethereum Classic and Mordor, and the Engine API for post-Merge Ethereum networks, paired with a consensus client. It continues IOHK's Mantis client and is maintained by Chippr Robotics LLC under Apache 2.0. Its maintainers mark it alpha, not yet recommended for production-critical workloads, so it is an alternative to try beside Core-Geth, the recommended client."

export const FUKUII_FEATURES = [
  'Native Proof-of-Work (Ethash) for Ethereum Classic and Mordor',
  'Engine API V1–V4 for post-Merge Ethereum, paired with a consensus client',
  'SNAP, fast and regular sync',
  'JSON-RPC over HTTP and WebSocket, GraphQL, and an MCP server for AI agents',
  'MESS (ECBP-1100) protection against deep reorganizations',
  'Prometheus metrics, Grafana dashboards, and health and readiness endpoints',
  'Cosign-signed container images with SLSA build provenance and a CycloneDX SBOM',
]

/** The network is named when the node starts, as Fukuii's documentation shows it. */
export const FUKUII_MAINNET_COMMAND = './bin/fukuii etc'
export const FUKUII_MORDOR_COMMAND = './bin/fukuii mordor'

/**
 * What an operator comes to do, each linking the page of Fukuii's documentation that carries
 * the steps. Like Core-Geth's, this site carries no copy of the install commands.
 */
export const FUKUII_TASKS: CoreGethTask[] = [
  {
    title: 'Run a node with Docker',
    body: "The route Fukuii's documentation recommends: a signed image from GitHub's container registry, with volumes for the chain data and configuration.",
    links: [
      { label: 'Quick Start', href: `${FUKUII_DOCS_URL}/getting-started/quickstart/` },
      { label: 'Docker guide', href: `${FUKUII_DOCS_URL}/deployment/docker/` },
    ],
  },
  {
    title: 'Download a release',
    body: 'Each release carries a distribution with launch scripts, a standalone JAR, checksums and a CycloneDX SBOM. Unpack it and start the node with the network name.',
    links: [{ label: 'Latest release', href: FUKUII_LATEST_RELEASE_URL }],
  },
  {
    title: 'Build from source',
    body: 'From a clone of chippr-robotics/fukuii, with JDK 25 and sbt.',
    links: [{ label: 'Build from source', href: `${FUKUII_DOCS_URL}/getting-started/build-from-source/` }],
  },
  {
    title: 'Configure and secure the node',
    body: 'Network selection, ports, peering, and which RPC namespaces to expose.',
    links: [
      { label: 'Node configuration', href: `${FUKUII_DOCS_URL}/runbooks/node-configuration/` },
      { label: 'Security', href: `${FUKUII_DOCS_URL}/runbooks/security/` },
    ],
  },
  {
    title: 'See what its tests cover',
    body: 'Fukuii publishes which test suites must pass before a change merges, and which only report.',
    links: [{ label: 'Verification status', href: `${FUKUII_DOCS_URL}/STATUS/` }],
  },
]

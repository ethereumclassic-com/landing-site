/**
 * Core-Geth release facts shared by the /build and /olympia sections.
 *
 * The install commands follow the Core-Geth installation guide, so every page
 * prints the same steps. When a release ships, change CORE_GETH_VERSION: the
 * commands, the download links and the version shown on client cards follow.
 *
 * A version a fix first shipped in ("fixed in v1.13.0") is history, not the
 * current release, so copy that states one keeps it written out.
 */

export const CORE_GETH_VERSION = 'v1.13.0'

export const CORE_GETH_REPO_URL = 'https://github.com/ethereumclassic/core-geth'
export const CORE_GETH_RELEASE_URL = `${CORE_GETH_REPO_URL}/releases/tag/${CORE_GETH_VERSION}`
export const CORE_GETH_SECURITY_POLICY_URL = `${CORE_GETH_REPO_URL}/blob/main/SECURITY.md`

export const CORE_GETH_DOCS_URL = 'https://docs.coregeth.com/'
export const CORE_GETH_INSTALL_URL = `${CORE_GETH_DOCS_URL}getting-started/installation/`

/** The upgrade from any v1.12.x release. Named for v1.13.0, and still the guide for later v1.13.x. */
export const CORE_GETH_MIGRATION_URL = `${CORE_GETH_DOCS_URL}tutorials/v1.13.0-migration/`
export const CORE_GETH_FUKUII_MIGRATION_URL = `${CORE_GETH_MIGRATION_URL}#migrating-to-fukuii`

export interface ReleaseFile {
  name: string
  url: string
}

export interface ReleaseDownload {
  platform: string
  requirement?: string
  files: ReleaseFile[]
}

export interface ClientRelease {
  version: string
  url: string
  downloads: ReleaseDownload[]
  note: string
}

function releaseFile(name: string, extension: 'zip' | 'tar.gz'): ReleaseFile {
  const file = `core-geth-${name}-${CORE_GETH_VERSION}.${extension}`
  return { name: file, url: `${CORE_GETH_REPO_URL}/releases/download/${CORE_GETH_VERSION}/${file}` }
}

/**
 * The files the release notes list, with each platform's floor as the notes state
 * it. The release workflow fails a build whose binary exceeds its floor, so the
 * floors hold across v1.13.x unless the notes of a later release say otherwise.
 */
export const CORE_GETH_RELEASE: ClientRelease = {
  version: CORE_GETH_VERSION,
  url: CORE_GETH_RELEASE_URL,
  downloads: [
    { platform: 'Linux, x86_64', requirement: 'glibc 2.17 or newer', files: [releaseFile('linux', 'zip')] },
    { platform: 'Linux, arm64', requirement: 'glibc 2.17 or newer', files: [releaseFile('arm64', 'zip')] },
    {
      platform: 'Linux, 32-bit ARM',
      requirement: 'glibc 2.28 or newer',
      files: [releaseFile('arm7', 'zip'), releaseFile('arm6', 'zip'), releaseFile('arm5', 'zip')],
    },
    { platform: 'macOS, Apple Silicon', requirement: 'macOS 12 or newer', files: [releaseFile('osx-arm64', 'zip')] },
    { platform: 'macOS, Intel', requirement: 'macOS 12 or newer', files: [releaseFile('osx', 'zip')] },
    { platform: 'Windows, x86_64', files: [releaseFile('win64', 'zip')] },
    {
      platform: 'Docker image',
      requirement: 'linux/amd64 or linux/arm64',
      files: [releaseFile('docker-amd64', 'tar.gz'), releaseFile('docker-arm64', 'tar.gz')],
    },
  ],
  note: 'Every file has a .sha256 and a build attestation beside it, and each archive has a core-geth-alltools counterpart that adds the developer tools. The binaries are not code-signed.',
}

export interface InstallStep {
  platform: string
  /** One command per line, as a shell would take it. */
  command: string
  note?: string
  /** The section of the installation guide this step comes from. */
  docsUrl?: string
}

const DOWNLOAD_BASE = `${CORE_GETH_REPO_URL}/releases/download/$VERSION`

/** Archive install steps; `archive` is the filename part, a literal or a shell variable. */
function archiveSteps(archive: string, checksum: string): string[] {
  return [
    `curl -LO $BASE/core-geth-${archive}-$VERSION.zip`,
    `curl -LO $BASE/core-geth-${archive}-$VERSION.zip.sha256`,
    `${checksum} core-geth-${archive}-$VERSION.zip.sha256`,
    `unzip core-geth-${archive}-$VERSION.zip`,
    'sudo install -m 0755 geth /usr/local/bin/geth',
    'geth version',
  ]
}

export const CORE_GETH_INSTALL: InstallStep[] = [
  {
    platform: 'Linux, x86_64',
    command: [
      `VERSION=${CORE_GETH_VERSION}`,
      `BASE=${DOWNLOAD_BASE}`,
      ...archiveSteps('linux', 'sha256sum -c'),
    ].join('\n'),
    note: 'sha256sum -c must print OK. If it prints FAILED, delete the file and download it again.',
    docsUrl: `${CORE_GETH_INSTALL_URL}#linux-x86_64`,
  },
  {
    platform: 'Linux, ARM',
    command: [
      `VERSION=${CORE_GETH_VERSION}`,
      'ARCH=arm64                # or: arm7, arm6, arm5',
      `BASE=${DOWNLOAD_BASE}`,
      ...archiveSteps('$ARCH', 'sha256sum -c'),
    ].join('\n'),
    note: 'Set ARCH from what uname -m prints: aarch64 or arm64 is arm64, armv7l is arm7, armv6l is arm6, and armv5 is arm5.',
    docsUrl: `${CORE_GETH_INSTALL_URL}#linux-arm`,
  },
  {
    platform: 'macOS',
    command: [
      `VERSION=${CORE_GETH_VERSION}`,
      'PLATFORM=osx-arm64        # or: osx, for Intel',
      `BASE=${DOWNLOAD_BASE}`,
      ...archiveSteps('$PLATFORM', 'shasum -a 256 -c'),
    ].join('\n'),
    note: 'The binaries are not code-signed. A curl download is not quarantined; for a file a browser downloaded, run xattr -d com.apple.quarantine geth before starting it.',
    docsUrl: `${CORE_GETH_INSTALL_URL}#macos`,
  },
  {
    platform: 'Windows (PowerShell)',
    command: [
      `$VERSION = "${CORE_GETH_VERSION}"`,
      `$BASE = "${DOWNLOAD_BASE}"`,
      'Invoke-WebRequest "$BASE/core-geth-win64-$VERSION.zip" -OutFile "core-geth-win64-$VERSION.zip"',
      'Invoke-WebRequest "$BASE/core-geth-win64-$VERSION.zip.sha256" -OutFile "core-geth-win64-$VERSION.zip.sha256"',
      '(Get-FileHash "core-geth-win64-$VERSION.zip" -Algorithm SHA256).Hash',
      'Get-Content "core-geth-win64-$VERSION.zip.sha256"',
      'Expand-Archive "core-geth-win64-$VERSION.zip" -DestinationPath .',
      '.\\geth.exe version',
    ].join('\n'),
    note: 'Compare the two hash lines yourself: the letters must match, the case does not. The binary is not code-signed, so Windows names its publisher as unknown.',
    docsUrl: `${CORE_GETH_INSTALL_URL}#windows`,
  },
  {
    platform: 'Verify where a download came from',
    command: `gh attestation verify core-geth-linux-${CORE_GETH_VERSION}.zip --repo ethereumclassic/core-geth`,
    note: "A checksum proves only that the download is intact. The build attestation proves this repository's release workflow built the file. Use the archive you downloaded; the GitHub CLI is required.",
    docsUrl: `${CORE_GETH_INSTALL_URL}#verify-where-the-archive-came-from`,
  },
  {
    platform: 'Docker',
    command: [
      '# The registry copies are not public yet, so take the image from the release:',
      `curl -LO ${CORE_GETH_REPO_URL}/releases/download/${CORE_GETH_VERSION}/core-geth-docker-amd64-${CORE_GETH_VERSION}.tar.gz`,
      `docker load -i core-geth-docker-amd64-${CORE_GETH_VERSION}.tar.gz`,
      '',
      'docker pull ghcr.io/ethereumclassic/core-geth:latest   # for when the registry is public',
    ].join('\n'),
    note: 'It is the same image and it keeps its published name, so nothing in your setup changes when the registry copy opens. Images are built for linux/amd64 and linux/arm64; on ARM, use the arm64 file. Run the container as the guide shows, which keeps JSON-RPC reachable from this host only.',
    docsUrl: `${CORE_GETH_INSTALL_URL}#docker`,
  },
  {
    platform: 'Build from source',
    command: [
      'git clone https://github.com/ethereumclassic/core-geth.git',
      'cd core-geth',
      'make geth',
      './build/bin/geth version',
    ].join('\n'),
    note: 'Building needs Go 1.26 and a C compiler. Do not clone with --recursive: the submodules hold test fixtures that make geth does not read.',
    docsUrl: `${CORE_GETH_INSTALL_URL}#build-from-source`,
  },
]

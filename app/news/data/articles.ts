export type ArticleCategory = 'Updates' | 'Security' | 'Ecosystem' | 'Community'

export interface Author {
  name: string
  role: string
  avatar?: string
  twitter?: string
}

export interface Article {
  slug: string
  title: string
  excerpt: string
  content?: string // Full article content in markdown-like format
  date: string
  category: ArticleCategory
  featured?: boolean
  tags?: string[]
  image?: string
  author?: string
  authorInfo?: Author
  externalLink?: string
  readTime?: number
}

// Author profiles - only include verified information
export const authors: Record<string, Author> = {
  'ETC Community': {
    name: 'ETC Community',
    role: 'Ethereum Classic Community',
  },
  'ETC Labs': {
    name: 'ETC Labs',
    role: 'ETC Labs Core',
  },
  'ETC Cooperative': {
    name: 'ETC Cooperative',
    role: 'Ethereum Classic Cooperative',
  },
  'IOHK': {
    name: 'IOHK',
    role: 'Input Output Hong Kong',
  },
}

export const articles: Article[] = [
  // Featured Articles - Recent and historically significant
  {
    slug: 'spiral-hard-fork-activated',
    title: 'Spiral Hard Fork Successfully Activated',
    excerpt:
      'Ethereum Classic completes the Spiral network upgrade at block 19,250,000, bringing Shanghai EVM equivalence to the network.',
    content: `The Spiral network upgrade has been successfully activated on the Ethereum Classic mainnet at block 19,250,000, marking another milestone in the network's continued development.

## What is Spiral?

Spiral is a hard fork upgrade that brings Ethereum Classic to Shanghai EVM equivalence. This upgrade ensures that smart contracts and developer tools designed for Ethereum can work seamlessly on ETC.

## Key Changes

### EVM Improvements
Spiral includes several Ethereum Improvement Proposals (EIPs):

- **EIP-3855**: PUSH0 instruction - A new opcode that pushes zero onto the stack, saving gas
- **EIP-3860**: Limit and meter initcode - Limits the maximum size of initcode and meters its cost
- **EIP-6049**: Deprecate SELFDESTRUCT - Warns developers about future changes to SELFDESTRUCT

### Benefits for Developers
The upgrade ensures that smart contracts deployed on Ethereum can be deployed on ETC without modification, making it easier for developers to build on both networks.

## Node Operator Requirements

Node operators must update to compatible client versions:
- **Core-Geth**: v1.12.17 or later
- **Hyperledger Besu**: Compatible versions available

## ETC's Upgrade Philosophy

Ethereum Classic carefully evaluates each potential upgrade, adopting EVM improvements while maintaining its core principles of immutability and proof-of-work consensus.

For technical details, visit the ECIP repository.`,
    date: '2024-01-31',
    category: 'Updates',
    featured: true,
    tags: ['Hard Fork', 'Network', 'Upgrade'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'etc-merge-hashrate-surge',
    title: 'ETC Hashrate Surges Following Ethereum Merge',
    excerpt:
      'Ethereum Classic experiences massive hashrate increase as GPU miners migrate from Ethereum following the proof-of-stake transition.',
    content: `Following Ethereum's transition to proof-of-stake in September 2022, Ethereum Classic has seen a dramatic increase in network hashrate as miners seek new proof-of-work opportunities.

## The Migration

When Ethereum completed "The Merge" on September 15, 2022, it ended proof-of-work mining on that network. Many miners who had invested in GPU hardware looked to alternative chains, with Ethereum Classic being a natural choice due to its use of the ETChash algorithm.

## Hashrate Growth

ETC network hashrate increased significantly:
- Pre-Merge: ~25 TH/s
- Post-Merge: Peaked at over 200 TH/s
- Current: Stabilized at higher levels than pre-Merge

## Security Implications

Higher hashrate means:
- **Greater Attack Resistance**: More computational power needed to attempt attacks
- **Network Stability**: Consistent block times and reliable transaction processing
- **Miner Confidence**: Demonstrates economic viability of ETC mining

## What This Means for ETC

Ethereum Classic has emerged as one of the largest proof-of-work smart contract platforms by hashrate. This positions ETC as a viable option for users and developers who value proof-of-work security.

The increased mining activity also brings more attention to the ETC ecosystem, potentially attracting new developers and projects.`,
    date: '2022-09-20',
    category: 'Security',
    featured: true,
    tags: ['Hashrate', 'Mining', 'Security'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'ethereum-network-launch',
    title: 'Ethereum Frontier Launch: The Beginning',
    excerpt:
      'On July 30, 2015, the Ethereum network goes live with the Frontier release, marking the birth of the blockchain that would become Ethereum Classic.',
    content: `On July 30, 2015, the Ethereum network launched its first live release, known as "Frontier." This marked the beginning of what would later become Ethereum Classic after the 2016 fork.

## The Launch

At block 0 (the genesis block), the Ethereum network went live. The Frontier release was intentionally bare-bones, aimed at developers and technical users who wanted to start experimenting with smart contracts.

## What Made Ethereum Different

Ethereum introduced revolutionary concepts to blockchain technology:

### Smart Contracts
Unlike Bitcoin, which primarily handles value transfers, Ethereum enabled arbitrary computation on the blockchain. Developers could deploy programs (smart contracts) that execute exactly as written.

### Ethereum Virtual Machine (EVM)
The EVM provided a standardized execution environment for smart contracts, ensuring deterministic computation across all nodes.

### Turing Completeness
Ethereum's programming capability was Turing complete, meaning developers could implement virtually any computational logic.

## The Vision

Created by Vitalik Buterin and a team of co-founders, Ethereum aimed to be a "world computer" - a decentralized platform for applications that run exactly as programmed without downtime, censorship, or third-party interference.

## From Ethereum to Ethereum Classic

This same blockchain, launched on July 30, 2015, is the one that Ethereum Classic continues today. After the 2016 DAO fork, those who chose to preserve the original chain without intervention kept this history intact.

The genesis block that was mined on this date remains block 0 on Ethereum Classic, connecting ETC directly to the original Ethereum vision.`,
    date: '2015-07-30',
    category: 'Community',
    featured: true,
    tags: ['History', 'Launch', 'Origins'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'dao-hack-and-fork',
    title: 'The DAO Hack and the Fork That Defined Ethereum Classic',
    excerpt:
      'In June 2016, The DAO was exploited for 3.6 million ETH, leading to a controversial fork that split the community and gave birth to Ethereum Classic.',
    content: `In June 2016, one of the most significant events in blockchain history occurred when a smart contract called "The DAO" was exploited. The aftermath of this event would split the Ethereum community and give birth to Ethereum Classic.

## The DAO

The DAO (Decentralized Autonomous Organization) was an ambitious project launched in April 2016. It was a venture capital fund governed entirely by smart contract code, allowing token holders to vote on investment proposals.

The DAO raised approximately 12.7 million ETH (about $150 million at the time), making it the largest crowdfunding campaign in history at that point.

## The Exploit

On June 17, 2016, an attacker exploited a vulnerability in The DAO's smart contract code. Using a recursive call exploit (later known as a "reentrancy attack"), the attacker drained approximately 3.6 million ETH into a "child DAO."

Due to The DAO's design, the funds were locked for 28 days before they could be moved, creating a window for the community to respond.

## The Community Debate

The Ethereum community faced a difficult choice:
- **Do nothing**: Let the code execute as written, accepting the loss
- **Soft fork**: Blacklist the attacker's address
- **Hard fork**: Roll back the blockchain state to return funds to DAO investors

A heated debate ensued about the nature of blockchain immutability and whether "code is law" should be absolute.

## The Hard Fork

On July 20, 2016, the majority of the Ethereum network implemented a hard fork at block 1,920,000, effectively rewriting history to return The DAO funds to their original holders.

## Ethereum Classic Is Born

Not everyone agreed with this decision. Those who believed that blockchain immutability was paramount chose to continue mining the original chain - the one where The DAO hack remained in the transaction history.

This chain became known as Ethereum Classic (ETC), while the forked chain continued as Ethereum (ETH).

## The Principles at Stake

Ethereum Classic's founding was based on core principles:
- Blockchains should be immutable
- No entity should be able to rewrite history, even with good intentions
- "Code is Law" means accepting both the benefits and consequences

This event established Ethereum Classic as a distinct project with its own philosophy and community.`,
    date: '2016-06-17',
    category: 'Community',
    featured: true,
    tags: ['History', 'DAO', 'Fork', 'Origins'],
    author: 'ETC Community',
    readTime: 5,
  },
  {
    slug: 'ethereum-classic-birth',
    title: 'Ethereum Classic: The Original Chain Lives On',
    excerpt:
      'On July 20, 2016, as Ethereum forks to reverse The DAO hack, a community chooses to preserve the original immutable chain as Ethereum Classic.',
    content: `On July 20, 2016, at block 1,920,000, the Ethereum network executed a hard fork to reverse The DAO hack. However, not everyone followed. A portion of the community chose to continue mining and using the original, unaltered chain. This chain became known as Ethereum Classic.

## The Fork Moment

When the forked Ethereum chain began processing blocks that altered The DAO's state, nodes running unpatched software continued on the original chain. Rather than being abandoned, this chain found support from those who believed in blockchain immutability.

## Why Continue the Original Chain?

Supporters of the original chain argued:

### Immutability Matters
If transactions can be reversed when enough people disagree with the outcome, the blockchain loses its fundamental trustworthiness as a neutral ledger.

### Precedent Concerns
Allowing one hard fork to reverse a hack could set a precedent for future interventions, potentially enabling censorship or favoritism.

### Code is Law
Smart contracts should execute exactly as written. Users interact with code, and the code's behavior is the "agreement" - not external interpretations of intent.

## Early Challenges

Ethereum Classic faced significant challenges in its early days:
- Most developers followed the forked chain
- Infrastructure had to be rebuilt
- The network had to establish its own identity

## Community Forms

Despite challenges, a dedicated community formed around ETC. Supporters included:
- Advocates of blockchain immutability
- Those concerned about centralized decision-making
- Developers who valued the original Ethereum vision

## Moving Forward

From this moment, Ethereum Classic established itself as an independent blockchain project. While maintaining EVM compatibility, ETC charted its own course based on the principles of immutability, decentralization, and censorship resistance.

The chain that launched on July 30, 2015, continues unbroken on Ethereum Classic.`,
    date: '2016-07-20',
    category: 'Community',
    featured: true,
    tags: ['History', 'Fork', 'Origins'],
    author: 'ETC Community',
    readTime: 4,
  },

  // Historical Updates
  {
    slug: 'mystique-hard-fork',
    title: 'Mystique Hard Fork Brings London Upgrades to ETC',
    excerpt:
      'Ethereum Classic activates the Mystique hard fork at block 14,525,000, implementing selected London EIPs.',
    content: `The Mystique network upgrade has been successfully activated on Ethereum Classic mainnet at block 14,525,000, bringing selected improvements from Ethereum's London hard fork.

## What is Mystique?

Mystique continues ETC's practice of carefully adopting beneficial EVM improvements while maintaining network stability and its core principles.

## Key Changes

### EIP-3529: Reduction in Refunds
Reduces gas refunds for SELFDESTRUCT and SSTORE operations. This change:
- Removes gas tokens abuse vectors
- Simplifies gas estimation
- Improves network predictability

### EIP-3541: Reject New Contracts Starting with 0xEF
Reserves the 0xEF byte prefix for future use (EVM Object Format), ensuring forward compatibility.

## Why Not EIP-1559?

Ethereum Classic chose not to implement EIP-1559 (the fee burn mechanism) as it would change the monetary policy of ETC. The community decided to maintain the existing fee market.

## Upgrade Coordination

Node operators successfully updated their clients before the fork block, ensuring a smooth transition.`,
    date: '2022-02-13',
    category: 'Updates',
    tags: ['Hard Fork', 'Network', 'Upgrade'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'magneto-hard-fork',
    title: 'Magneto Hard Fork Activates Berlin EIPs',
    excerpt:
      'Ethereum Classic implements the Magneto upgrade at block 13,189,133, bringing Berlin hard fork improvements.',
    content: `The Magneto network upgrade has been successfully activated on Ethereum Classic mainnet at block 13,189,133, implementing selected Berlin hard fork EIPs.

## Included EIPs

### EIP-2565: ModExp Gas Cost
Reduces gas cost for the ModExp precompile, making cryptographic operations more affordable.

### EIP-2718: Typed Transaction Envelope
Introduces a new transaction envelope type, enabling future transaction format improvements.

### EIP-2929: Gas Cost Increases for State Access
Increases gas costs for SLOAD and account-touching opcodes when accessed for the first time in a transaction.

### EIP-2930: Optional Access Lists
Allows transactions to include an access list of addresses and storage keys, providing gas savings for known state accesses.

## Impact

These changes improve EVM compatibility with Ethereum while also enhancing security and predictability of gas costs for complex operations.

The upgrade proceeded smoothly with strong coordination from node operators and the mining community.`,
    date: '2021-07-24',
    category: 'Updates',
    tags: ['Hard Fork', 'Network', 'Upgrade'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'phoenix-hard-fork',
    title: 'Phoenix Hard Fork Completes Istanbul Parity',
    excerpt:
      'Ethereum Classic achieves full Istanbul EVM compatibility with the Phoenix hard fork activation.',
    content: `The Phoenix network upgrade has activated on Ethereum Classic mainnet at block 10,500,839, completing the adoption of Ethereum's Istanbul hard fork changes.

## Full Istanbul Compatibility

Phoenix brings the remaining Istanbul EIPs to ETC:

### EIP-2200: Structured Definitions for Net Gas Metering
Rebalances gas costs for SSTORE operations, enabling more efficient smart contract patterns.

### EIP-1884: Repricing for Trie-Size-Dependent Opcodes
Adjusts gas costs for opcodes based on actual computational requirements.

### EIP-152: Blake2b Precompile
Adds a precompile for the Blake2b hash function, enabling interoperability with Zcash and other Blake2b-using systems.

### EIP-1108: Alt_bn128 Precompile Gas Reductions
Reduces gas costs for elliptic curve operations, making privacy-preserving applications more affordable.

## Significance

With Phoenix, Ethereum Classic achieved complete EVM compatibility with Ethereum up to the Istanbul fork. This ensures that smart contracts and development tools work consistently across both networks.`,
    date: '2020-06-01',
    category: 'Updates',
    tags: ['Hard Fork', 'Network', 'Upgrade'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'agharta-hard-fork',
    title: 'Agharta Hard Fork Implements Constantinople Features',
    excerpt:
      'Ethereum Classic activates Agharta at block 9,573,000, bringing Constantinople and Petersburg upgrades.',
    content: `The Agharta network upgrade has been successfully activated on Ethereum Classic mainnet at block 9,573,000, implementing Ethereum's Constantinople and Petersburg hard fork features.

## Included Changes

### EIP-145: Bitwise Shifting Instructions
Adds native bitwise shift operations (SHL, SHR, SAR) to the EVM, reducing gas costs for bit manipulation.

### EIP-1014: CREATE2
Introduces a new opcode for deploying contracts at predictable addresses, enabling state channels and other advanced patterns.

### EIP-1052: EXTCODEHASH
Adds an opcode to get the hash of a contract's code, useful for verifying contract identity efficiently.

### EIP-1283 Removal
The potentially problematic EIP-1283 (SSTORE gas changes) was not included, following Ethereum's lead with Petersburg.

## Smooth Activation

The Agharta upgrade activated without issues, demonstrating the ETC community's ability to coordinate complex network upgrades.`,
    date: '2020-01-12',
    category: 'Updates',
    tags: ['Hard Fork', 'Network', 'Upgrade'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'atlantis-hard-fork',
    title: 'Atlantis Hard Fork Brings Byzantium to ETC',
    excerpt:
      'Ethereum Classic implements the Atlantis upgrade at block 8,772,000, achieving Byzantium EVM equivalence.',
    content: `The Atlantis network upgrade has been successfully activated on Ethereum Classic mainnet at block 8,772,000, bringing Ethereum's Byzantium features to ETC.

## Key Improvements

### EIP-100: Difficulty Adjustment
Changes the difficulty calculation to account for uncle blocks, providing more stable block times.

### EIP-140: REVERT Opcode
Adds the REVERT opcode, allowing contracts to stop execution and return remaining gas while reverting state changes.

### EIP-196 & EIP-197: Elliptic Curve Operations
Adds precompiles for elliptic curve operations on the alt_bn128 curve, enabling privacy applications and efficient verification.

### EIP-198: Big Integer Modular Exponentiation
Adds a precompile for modular exponentiation, supporting cryptographic operations like RSA verification.

### EIP-211: RETURNDATASIZE and RETURNDATACOPY
New opcodes for handling return data from calls, improving smart contract capabilities.

### EIP-214: STATICCALL
Adds a new call type that guarantees no state modification, useful for safe view functions.

## Significance

Atlantis was a major step in maintaining EVM compatibility between ETC and ETH, ensuring developers could deploy contracts on both networks.`,
    date: '2019-09-12',
    category: 'Updates',
    tags: ['Hard Fork', 'Network', 'Upgrade'],
    author: 'ETC Community',
    readTime: 4,
  },

  // Security Articles
  {
    slug: 'mess-implemented',
    title: 'MESS: Modified Exponential Subjective Scoring Implemented',
    excerpt:
      'Ethereum Classic implements MESS to provide additional protection against 51% attacks while maintaining decentralization.',
    content: `Following network security incidents, Ethereum Classic has implemented MESS (Modified Exponential Subjective Scoring), a novel approach to enhancing chain security.

## What is MESS?

MESS adds an additional layer of protection against chain reorganizations by making it exponentially more difficult to reorg recent blocks. It works by requiring increasingly more work to replace recent blocks.

## How It Works

MESS assigns a "gravity" score to chain tips based on:
- The length of the chain segment
- How recently blocks were produced
- Total accumulated work

Longer reorganizations require proportionally more work to succeed, making attacks more expensive without changing the fundamental proof-of-work consensus.

## Benefits

- **Attack Resistance**: Makes 51% attacks significantly more expensive
- **No Centralization**: Doesn't rely on checkpoints or trusted parties
- **Preserves Finality Model**: Transactions still achieve probabilistic finality through proof-of-work

## Implementation

MESS was activated through a client update, not requiring a hard fork. Node operators upgraded their software to enable this protection.

This represents a pragmatic approach to security enhancement while maintaining ETC's commitment to decentralization.`,
    date: '2020-10-10',
    category: 'Security',
    tags: ['Security', 'MESS', 'Network'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'thanos-hard-fork',
    title: 'Thanos Hard Fork Implements ECIP-1099',
    excerpt:
      'Ethereum Classic activates Thanos at block 11,700,000, modifying the DAG size calculation to allow continued GPU mining.',
    content: `The Thanos network upgrade has activated on Ethereum Classic mainnet at block 11,700,000, implementing ECIP-1099 to modify the ETChash DAG size calculation.

## The DAG Size Issue

The Ethash/ETChash algorithm requires miners to store a DAG (Directed Acyclic Graph) in GPU memory. This DAG grows over time, eventually exceeding the memory of 4GB GPUs.

## ECIP-1099 Solution

The Thanos upgrade implements ECIP-1099, which:
- Resets the DAG epoch to allow 4GB GPUs to continue mining
- Modifies the DAG growth schedule
- Maintains security while extending hardware compatibility

## Impact

This change:
- Extends the useful life of 4GB GPU mining hardware
- Keeps mining accessible to more participants
- Maintains network hashrate from smaller miners

## Algorithm Note

With this change, ETC's mining algorithm is now called "ETChash" to distinguish it from Ethereum's Ethash, though they remain similar in fundamental operation.

The upgrade demonstrates ETC's commitment to maintaining accessible mining while balancing security considerations.`,
    date: '2020-11-29',
    category: 'Security',
    tags: ['Hard Fork', 'Mining', 'Security'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'security-best-practices',
    title: 'ETC Security Best Practices Guide',
    excerpt:
      'Essential security guidance for Ethereum Classic users covering wallet safety, transaction verification, and scam awareness.',
    content: `Protecting your Ethereum Classic holdings requires good security practices. This guide covers essential measures every ETC user should follow.

## Wallet Security

### Hardware Wallets
For significant holdings, hardware wallets like Ledger or Trezor provide strong security. Private keys never leave the device.

### Seed Phrase Safety
- Write it down on paper, never digitally
- Store in multiple secure locations
- Never share with anyone
- Consider metal backup for durability

## Transaction Safety

### Verification Steps
- Double-check recipient addresses
- Use small test transactions for new addresses
- Verify you're on the correct network (Chain ID 61)

### Smart Contract Interactions
- Verify contract addresses on block explorers
- Understand what permissions you're granting
- Revoke unnecessary token approvals

## Common Scams

### Red Flags
- "Send X ETC, receive 2X back" - always a scam
- Unsolicited messages about investments
- Requests for your seed phrase or private keys
- Promises of guaranteed returns

### Protection
- Official teams never DM you first asking for funds
- Always verify URLs before connecting wallets
- Use official links from ethereumclassic.org

Stay vigilant and protect your ETC.`,
    date: '2023-03-15',
    category: 'Security',
    tags: ['Security', 'Guide', 'Best Practices'],
    author: 'ETC Community',
    readTime: 4,
  },

  // Ecosystem Articles
  {
    slug: 'etc-cooperative-formed',
    title: 'ETC Cooperative Established',
    excerpt:
      'The ETC Cooperative is formed as a nonprofit organization to support the development and growth of Ethereum Classic.',
    content: `The ETC Cooperative has been established as a Delaware-incorporated 501(c)(3) nonprofit organization dedicated to supporting the Ethereum Classic ecosystem.

## Mission

The ETC Cooperative's mission is to steward the development of the Ethereum Classic protocol and support the growth of the ETC ecosystem through:

- Core protocol development support
- Infrastructure maintenance
- Community coordination
- Educational initiatives

## Focus Areas

### Development
Supporting client development teams working on Core-Geth and other critical infrastructure.

### Infrastructure
Maintaining public RPC endpoints, block explorers, and other essential services.

### Community
Coordinating ecosystem participants, organizing events, and facilitating collaboration.

### Education
Creating resources to help developers and users understand and use Ethereum Classic.

## Governance

The Cooperative operates transparently, publishing financial reports and development updates. It does not control the protocol but serves as one of several organizations supporting ETC.

## Funding

The Cooperative is funded through donations and grants, operating as a nonprofit in service of the ETC community.`,
    date: '2017-09-15',
    category: 'Ecosystem',
    tags: ['ETC Cooperative', 'Organization', 'Community'],
    author: 'ETC Cooperative',
    readTime: 3,
  },
  {
    slug: 'etc-labs-launches',
    title: 'ETC Labs Launches to Accelerate Ecosystem Growth',
    excerpt:
      'ETC Labs is established to drive innovation and adoption in the Ethereum Classic ecosystem through incubation and investment.',
    content: `ETC Labs has been established to accelerate innovation and adoption in the Ethereum Classic ecosystem, focusing on incubating projects and supporting developers.

## Mission

ETC Labs aims to grow the ETC ecosystem by:
- Incubating promising projects
- Providing development resources
- Supporting infrastructure development
- Fostering community growth

## Core-Geth Development

ETC Labs supports the development of Core-Geth, the primary Ethereum Classic client. Core-Geth maintains compatibility with Ethereum tooling while implementing ETC-specific features.

## Incubation Program

The ETC Labs incubation program provides:
- Technical mentorship
- Development resources
- Business guidance
- Community connections

## Infrastructure Support

ETC Labs contributes to essential infrastructure including:
- Client development
- Development tools
- Network monitoring
- Documentation

The organization works alongside other ecosystem participants to strengthen Ethereum Classic.`,
    date: '2018-06-01',
    category: 'Ecosystem',
    tags: ['ETC Labs', 'Organization', 'Development'],
    author: 'ETC Labs',
    readTime: 3,
  },
  {
    slug: 'monetary-policy-fixed',
    title: 'ETC Monetary Policy: Fixed Supply Confirmed',
    excerpt:
      'Ethereum Classic implements ECIP-1017, establishing a fixed monetary policy with a maximum supply of approximately 210.7 million ETC.',
    content: `Ethereum Classic has implemented ECIP-1017, establishing a fixed monetary policy that differentiates ETC from other smart contract platforms.

## The 5M20 Policy

ECIP-1017 implements a monetary policy where:
- Block rewards reduce by 20% every 5 million blocks (approximately every 2.5 years)
- This creates a deflationary supply schedule
- Maximum supply is capped at approximately 210.7 million ETC

## Emission Schedule

| Era | Blocks | Reward |
|-----|--------|--------|
| Era 1 | 0 - 5M | 5 ETC |
| Era 2 | 5M - 10M | 4 ETC |
| Era 3 | 10M - 15M | 3.2 ETC |
| Era 4 | 15M - 20M | 2.56 ETC |
| Era 5 | 20M+ | 2.048 ETC |

## Why Fixed Supply Matters

A fixed supply provides:
- **Predictability**: Miners and holders know the future supply
- **Scarcity**: Supply won't be arbitrarily inflated
- **Sound Money**: Economic properties similar to precious metals

## Contrast with ETH

Unlike Ethereum, which has variable monetary policy, ETC maintains algorithmic, predictable issuance. This appeals to those who value monetary predictability.`,
    date: '2017-12-11',
    category: 'Updates',
    tags: ['Monetary Policy', 'Economics', 'ECIP-1017'],
    author: 'ETC Community',
    readTime: 3,
  },

  // Community Articles
  {
    slug: 'etc-declaration-independence',
    title: 'The Ethereum Classic Declaration of Independence',
    excerpt:
      'The ETC community publishes its Declaration of Independence, articulating the principles and values that define Ethereum Classic.',
    content: `The Ethereum Classic community has published a Declaration of Independence, articulating the core principles that define the project and differentiate it from other blockchains.

## Core Principles

### Immutability
We believe that blockchain history should not be altered. Transactions that have been confirmed should remain confirmed, regardless of their nature or the identities involved.

### Decentralization
No single entity should control the network. Power should be distributed among miners, developers, and users, with no central authority capable of dictating protocol changes.

### Censorship Resistance
The network should process valid transactions regardless of their content or the parties involved. No transaction should be blocked based on external pressure.

### Open Development
Protocol development should be open and transparent, with decisions made through community consensus rather than corporate control.

## Code is Law

The principle of "Code is Law" means that smart contracts execute exactly as written. While this may sometimes produce unintended results, altering the blockchain to reverse such outcomes undermines the foundational trust in the system.

## Moving Forward

Ethereum Classic represents a commitment to these principles, providing a platform for those who value immutability and decentralization above all else.

Read the full declaration at the Ethereum Classic website.`,
    date: '2016-08-13',
    category: 'Community',
    tags: ['Philosophy', 'Declaration', 'Principles'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'etc-summit-vancouver',
    title: 'ETC Summit 2018 in Vancouver',
    excerpt:
      'The Ethereum Classic community gathers in Vancouver for the first major ETC Summit, bringing together developers and enthusiasts.',
    content: `The Ethereum Classic community gathered in Vancouver, Canada for the first major ETC Summit, bringing together developers, miners, researchers, and enthusiasts from around the world.

## Event Highlights

### Technical Presentations
- Protocol development updates
- Client implementation progress
- Research initiatives
- Infrastructure improvements

### Ecosystem Updates
- Project showcases
- Partnership announcements
- Community initiatives

### Networking
The summit provided an opportunity for community members who usually interact online to meet in person and discuss the future of Ethereum Classic.

## Key Announcements

Several important developments were announced at the summit, including:
- Roadmap updates
- New ecosystem projects
- Partnership initiatives

## Community Building

The summit reinforced the strength of the ETC community and its commitment to the project's principles. Despite challenges, the community demonstrated resilience and continued dedication.

The event established a tradition of annual summits that would continue in subsequent years.`,
    date: '2018-09-14',
    category: 'Community',
    tags: ['Summit', 'Event', 'Conference'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'iohk-grothendieck-team',
    title: 'IOHK Grothendieck Team Supports ETC Development',
    excerpt:
      'IOHK establishes a dedicated team to contribute to Ethereum Classic protocol development and research.',
    content: `Input Output Hong Kong (IOHK) has established the Grothendieck team, dedicated to contributing to Ethereum Classic protocol development and research.

## IOHK's Contribution

IOHK, known for developing Cardano, committed resources to Ethereum Classic development through the Grothendieck team. Named after the mathematician Alexander Grothendieck, the team focused on:

- Protocol research
- Client development
- Formal methods
- Scaling solutions

## Research Focus

The team contributed to several areas:
- Sidechains research
- Treasury systems
- Protocol improvements
- Smart contract security

## Mantis Client

IOHK developed Mantis, a Scala-based Ethereum Classic client. While development has since concluded, Mantis demonstrated the feasibility of alternative client implementations.

## Legacy

IOHK's involvement brought academic rigor and research focus to ETC development during a formative period. Their work on treasury systems and formal methods influenced broader blockchain development practices.

The collaboration demonstrated how academic institutions and blockchain projects can work together effectively.`,
    date: '2017-03-01',
    category: 'Ecosystem',
    tags: ['IOHK', 'Development', 'Research'],
    author: 'IOHK',
    readTime: 3,
  },
]

// Helper functions
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((article) => article.category === category)
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured)
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter((article) => article.tags?.includes(tag))
}

export function getRecentArticles(limit: number = 10): Article[] {
  return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  articles.forEach((article) => {
    article.tags?.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function getAllCategories(): ArticleCategory[] {
  return ['Updates', 'Security', 'Ecosystem', 'Community']
}

export function getAuthorInfo(authorName: string): Author | undefined {
  return authors[authorName]
}

export function getRelatedArticles(article: Article, limit: number = 3): Article[] {
  // Get articles in the same category, excluding the current article
  const sameCategoryArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, limit)

  // If we don't have enough, add articles with matching tags
  if (sameCategoryArticles.length < limit && article.tags) {
    const tagMatches = articles.filter(
      (a) =>
        a.slug !== article.slug &&
        !sameCategoryArticles.includes(a) &&
        a.tags?.some((tag) => article.tags?.includes(tag))
    )
    sameCategoryArticles.push(...tagMatches.slice(0, limit - sameCategoryArticles.length))
  }

  // If still not enough, add recent articles
  if (sameCategoryArticles.length < limit) {
    const recent = getRecentArticles(limit * 2).filter(
      (a) => a.slug !== article.slug && !sameCategoryArticles.includes(a)
    )
    sameCategoryArticles.push(...recent.slice(0, limit - sameCategoryArticles.length))
  }

  return sameCategoryArticles.slice(0, limit)
}

export const categoryDescriptions: Record<ArticleCategory, string> = {
  Updates: 'Network upgrades, client releases, and protocol changes',
  Security: 'Security advisories, best practices, and network health',
  Ecosystem: 'DeFi, dApps, and project announcements',
  Community: 'Events, governance, and community initiatives',
}

export const categoryIcons: Record<ArticleCategory, string> = {
  Updates: '🔄',
  Security: '🛡️',
  Ecosystem: '🌐',
  Community: '👥',
}

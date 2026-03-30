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
    slug: 'spiral-network-upgrade',
    title: 'Spiral Network Upgrade Brings Shanghai EVM Equivalence',
    excerpt:
      'Ethereum Classic activated Spiral at block 19,250,000 on February 5, 2024, adopting Shanghai execution-layer EIPs including PUSH0 and warm COINBASE.',
    content: `Ethereum Classic activated the Spiral network upgrade at block 19,250,000 on February 5, 2024, achieving Shanghai execution-layer equivalence. Spiral was specified in ECIP-1109.

## Included EIPs

- **EIP-3651 — Warm COINBASE**: The block producer's address starts in the warm access set, reducing its first-touch cost from 2,600 to 100 gas. Benefits MEV-aware contracts and direct block-producer payments.
- **EIP-3855 — PUSH0 Instruction**: New opcode (0x5f) that pushes zero onto the stack in 1 byte / 2 gas, replacing the previous PUSH1 0x00 (2 bytes / 3 gas). Zero is the most common constant in EVM bytecode, so this reduces deployed contract size network-wide.
- **EIP-3860 — Limit and Meter Initcode**: Caps initcode at 49,152 bytes (twice the EIP-170 deployed-code limit) and charges 2 gas per 32-byte word. Prevents denial-of-service via arbitrarily large initcode payloads.
- **EIP-6049 — Deprecate SELFDESTRUCT**: Formal deprecation notice. The opcode still functions but developers are warned not to depend on its state-clearing behavior. Follows EIP-3529 (Mystique) which already removed SELFDESTRUCT refunds.

## Omitted EIPs

- **EIP-4399 (PREVRANDAO)**: Replaces DIFFICULTY with beacon chain randomness. PoS-only — not applicable to ETC's proof-of-work consensus.
- **EIP-4895 (Beacon Chain Withdrawals)**: Enables validator withdrawals. PoS-only — not applicable.

## Client Requirements

- Core-Geth v1.12.17 or later
- Hyperledger Besu with ETC Spiral support

Spiral represents ETC's current production EVM level, maintaining execution-layer parity with Ethereum while preserving proof-of-work consensus.`,
    date: '2024-02-05',
    category: 'Updates',
    featured: true,
    tags: ['Network Upgrade', 'Shanghai', 'ECIP-1109'],
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

Created by Vitalik Buterin and a team of co-founders, Ethereum aimed to be a "world computer" — a decentralized platform for applications that run exactly as programmed without downtime, censorship, or third-party interference.

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
    slug: 'dao-fork-etc-born',
    title: 'The DAO Fork and the Birth of Ethereum Classic',
    excerpt:
      'On July 20, 2016, Ethereum forked at block 1,920,000 to reverse The DAO exploit. Those who rejected the rollback continued the original chain as Ethereum Classic.',
    content: `On July 20, 2016, at block 1,920,000, the Ethereum network executed an irregular state change to reverse The DAO exploit. A portion of the community rejected this intervention and continued mining the original, unaltered chain. That chain became Ethereum Classic.

## The DAO

The DAO (Decentralized Autonomous Organization) launched in April 2016 as a smart-contract-governed venture fund. It raised approximately 12.7 million ETH (~$150 million at the time) — the largest crowdfunding campaign in history at that point.

## The Exploit

On June 17, 2016, an attacker exploited a reentrancy vulnerability in The DAO's smart contract, draining approximately 3.6 million ETH into a child DAO. The DAO's design locked these funds for 28 days before they could be moved, creating a window for the community to respond.

## The Fork Decision

The Ethereum community debated three options:
- **Do nothing** — let the code execute as written
- **Soft fork** — blacklist the attacker's address
- **Hard fork** — irregular state change to return funds to DAO token holders

On July 20, 2016, the majority of the network implemented the hard fork at block 1,920,000, rewriting state to move The DAO's ETH to a recovery contract.

## The Original Chain Continues

Not everyone agreed. Those who held that blockchain immutability was non-negotiable continued mining the original chain — the one where The DAO exploit remained in the transaction history. This chain became Ethereum Classic (ETC), while the forked chain continued as Ethereum (ETH).

Supporters of the original chain argued:
- **Immutability**: If transactions can be reversed by social consensus, the blockchain loses its value as a neutral ledger.
- **Precedent**: Allowing one state intervention opens the door to future interventions.
- **Code is Law**: Smart contracts execute as written. The code's behavior is the agreement.

## Early Challenges

Ethereum Classic faced significant obstacles in its first months. Most developers and infrastructure followed the forked chain. The ETC community had to rebuild tooling, establish its own identity, and attract new contributors — but a dedicated community formed around the principles of immutability, decentralization, and censorship resistance.

The chain that launched on July 30, 2015, continues unbroken on Ethereum Classic.`,
    date: '2016-07-20',
    category: 'Community',
    featured: true,
    tags: ['History', 'DAO', 'Fork', 'Origins'],
    author: 'ETC Community',
    readTime: 5,
  },

  // Network Upgrade Articles (CDC-style factual format)
  {
    slug: 'mystique-network-upgrade',
    title: 'Mystique Network Upgrade Adopts London Subset',
    excerpt:
      'Ethereum Classic activated Mystique at block 14,525,000 on February 12, 2022, implementing selected London EIPs while deliberately omitting EIP-1559.',
    content: `Ethereum Classic activated the Mystique network upgrade at block 14,525,000 on February 12, 2022. Mystique adopted a subset of Ethereum's London hard fork changes, specified in ECIP-1104.

## Included EIPs

- **EIP-3529 — Alternative Refund Reduction**: Eliminated SELFDESTRUCT refund (24,000 → 0 gas) and capped SSTORE refunds at 20% of transaction gas. This change made gas token contracts (CHI, GST2) economically unviable, removing a long-standing abuse vector that complicated gas estimation.
- **EIP-3541 — Reject New Contracts Starting with 0xEF**: New contract deployments with bytecode starting at 0xEF are rejected. Existing contracts are unaffected. This reserves the 0xEF prefix for the future EVM Object Format (EOF), preventing bytecode collisions.

## Omitted EIPs

- **EIP-1559 (Fee Market Change)**: EIP-1559 burns the transaction basefee, permanently destroying tokens. This conflicts with ETC's fixed monetary policy under ECIP-1017 (~210.7M cap). The community chose to defer EIP-1559 adoption — the Olympia network upgrade redirects the basefee to a community treasury (ECIP-1112) instead of burning it, preserving the monetary policy while adopting the fee market mechanism.
- **EIP-3198 (BASEFEE Opcode)**: Depends on EIP-1559; without an active basefee, the opcode has no defined return value.
- **EIP-3228 (Difficulty Bomb Delay)**: ETC permanently removed the difficulty bomb in ECIP-1041 (block 5,900,000). Not applicable.

## Client Requirements

- Core-Geth v1.12.9 or later
- Hyperledger Besu with ETC Mystique support`,
    date: '2022-02-12',
    category: 'Updates',
    tags: ['Network Upgrade', 'London', 'ECIP-1104'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'magneto-network-upgrade',
    title: 'Magneto Network Upgrade Achieves Berlin Equivalence',
    excerpt:
      'Ethereum Classic activated Magneto at block 13,189,133 on July 23, 2021, introducing typed transactions, access lists, and the cold/warm state access model.',
    content: `Ethereum Classic activated the Magneto network upgrade at block 13,189,133 on July 23, 2021, achieving Berlin EVM equivalence. Magneto was specified in ECIP-1103.

## Included EIPs

- **EIP-2565 — ModExp Gas Cost**: Repriced the MODEXP precompile to reflect actual computational cost. Small inputs were previously overpriced; large inputs were underpriced. This made RSA signature verification and other cryptographic operations more affordable and accurately metered.
- **EIP-2718 — Typed Transaction Envelope**: Introduced a transaction format where the first byte indicates the type. Type 0 = legacy transactions (unchanged). Type 1 = access list transactions (EIP-2930). This framework enables future transaction type extensions without breaking backward compatibility.
- **EIP-2929 — Gas Cost Increases for State Access Opcodes**: Introduced the cold/warm access model. First access to an address or storage slot (cold) costs more; subsequent accesses in the same transaction (warm) cost less. SLOAD: 2,100 cold / 100 warm. CALL, BALANCE, EXT*: 2,600 cold / 100 warm. More accurately reflects I/O cost and mitigates state-access DoS vectors.
- **EIP-2930 — Optional Access Lists (Type 1 Transactions)**: Transactions can declare upfront which addresses and storage slots they will access. Pre-declared slots receive the warm access price, providing gas savings for cross-contract calls with known state patterns.

## Client Requirements

- Core-Geth v1.12.1 or later
- Hyperledger Besu with ETC Magneto support`,
    date: '2021-07-23',
    category: 'Updates',
    tags: ['Network Upgrade', 'Berlin', 'ECIP-1103'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'phoenix-network-upgrade',
    title: 'Phoenix Network Upgrade Completes Istanbul Alignment',
    excerpt:
      'Ethereum Classic activated Phoenix at block 10,500,839 on June 1, 2020, achieving full Istanbul EVM equivalence after the Aztlan governance crisis.',
    content: `Ethereum Classic activated the Phoenix network upgrade at block 10,500,839 on June 1, 2020, completing Istanbul EVM equivalence. Phoenix was specified in ECIP-1088, replacing the earlier failed Aztlan proposal.

## Included EIPs

- **EIP-152 — Blake2b Compression Function F**: Added a precompile at address 0x09 for Blake2b compression. Enables efficient verification of Zcash block headers and Equihash proofs, supporting cross-chain interoperability.
- **EIP-1108 — Reduce alt_bn128 Gas Costs**: Dramatically reduced elliptic curve precompile costs. ECADD: 500 → 150 gas. ECMUL: 40,000 → 6,000 gas. Made zk-SNARK verification economically practical on-chain.
- **EIP-1344 — ChainID Opcode**: Returns the EIP-155 chain ID (61 for ETC) via a new opcode. Enables contracts to verify their execution chain at runtime, critical for cross-chain replay protection in multi-chain dApps.
- **EIP-1884 — Trie-Size-Dependent Opcode Repricing**: Increased gas costs for state-access opcodes to reflect growing state trie size. SLOAD: 200 → 800 gas. BALANCE, EXT*: 400 → 700 gas. Mitigates DoS vectors from cheap state reads.
- **EIP-2028 — Calldata Gas Cost Reduction**: Reduced non-zero calldata cost from 68 → 16 gas per byte. Significantly benefits data-heavy operations including multi-sig wallets, Layer 2 batch submissions, and large function calls.
- **EIP-2200 — SSTORE Net Gas Metering**: Rebalanced SSTORE costs to account for the EIP-1884 SLOAD increase. Ensures multiple writes to the same storage slot in one transaction are not unfairly penalized.

## Background: Aztlan Crisis

Phoenix replaced the earlier Aztlan proposal (ECIP-1061), which included EIP-2200 but omitted EIP-1884. Since EIP-2200's gas calculations depend on EIP-1884's SLOAD pricing, this produced a consensus bug on the Mordor testnet. ECIP-1078 also proved insufficient. The community rebuilt the upgrade from scratch as ECIP-1088 with the complete Istanbul EIP set.

## Client Requirements

- Core-Geth v1.11.16 or later
- Hyperledger Besu with ETC Phoenix support`,
    date: '2020-06-01',
    category: 'Updates',
    tags: ['Network Upgrade', 'Istanbul', 'ECIP-1088'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'agharta-network-upgrade',
    title: 'Agharta Network Upgrade Adopts Constantinople/Petersburg',
    excerpt:
      'Ethereum Classic activated Agharta at block 9,573,000 on January 12, 2020, adding bitwise shifting, CREATE2, and EXTCODEHASH.',
    content: `Ethereum Classic activated the Agharta network upgrade at block 9,573,000 on January 12, 2020, implementing Ethereum's Constantinople and Petersburg features. Agharta was specified in ECIP-1056.

## Included EIPs

- **EIP-145 — Bitwise Shifting Instructions**: Added native SHL (shift left), SHR (logical shift right), and SAR (arithmetic shift right) opcodes. Before Agharta, bit shifting required expensive arithmetic (MUL/DIV with powers of 2) at 5+ gas. Native shifts cost 3 gas and enable efficient binary data manipulation.
- **EIP-1014 — CREATE2**: Deploys contracts at deterministic addresses calculated as keccak256(0xff, deployer, salt, bytecode_hash). The address is known before deployment, enabling counterfactual instantiation — contracts can be referenced before they exist on-chain. Foundation for state channels, factory patterns, and governance contracts.
- **EIP-1052 — EXTCODEHASH**: Returns the keccak256 hash of an account's code in a single opcode (700 gas flat). Previously required EXTCODECOPY to copy entire bytecode then hash it — cost scaled with code size. Enables efficient proxy pattern verification and contract identity checks.

## Note on EIP-1283

EIP-1283 (net gas metering for SSTORE) was not included. Ethereum itself removed EIP-1283 in the Petersburg fork after a reentrancy vulnerability was discovered. The SSTORE rebalancing was later reintroduced safely as EIP-2200 in the Phoenix upgrade (ECIP-1088).

## Client Requirements

- Core-Geth v1.11.6 or later
- Hyperledger Besu with ETC Agharta support`,
    date: '2020-01-12',
    category: 'Updates',
    tags: ['Network Upgrade', 'Constantinople', 'ECIP-1056'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'atlantis-network-upgrade',
    title: 'Atlantis Network Upgrade Brings Byzantium to ETC',
    excerpt:
      'Ethereum Classic activated Atlantis at block 8,772,000 on September 12, 2019, closing a two-year EVM gap with 10 Byzantium EIPs.',
    content: `Ethereum Classic activated the Atlantis network upgrade at block 8,772,000 on September 12, 2019, achieving Spurious Dragon and Byzantium EVM equivalence. Atlantis was specified in ECIP-1054 and closed a two-year compatibility gap with Ethereum.

## Included EIPs

- **EIP-100 — Difficulty Adjustment for Uncles**: Modified difficulty calculation to target mean block time including uncle blocks, providing more stable block production.
- **EIP-140 — REVERT Instruction**: Added the REVERT opcode, allowing contracts to stop execution, revert state changes, and return unused gas. Essential for Solidity's require() and revert() patterns — before Atlantis, failed contracts consumed all remaining gas.
- **EIP-161 — State Trie Clearing**: Removes empty accounts from state. Cleans up accounts created during the 2016 Shanghai DoS attacks that bloated the state trie.
- **EIP-170 — Contract Code Size Limit**: Caps deployed bytecode at 24,576 bytes. Prevents denial-of-service through arbitrarily large contract deployments.
- **EIP-196 — alt_bn128 Addition and Scalar Multiplication**: Precompiles for elliptic curve operations on the BN128 curve. Foundation for zk-SNARK verification and privacy protocols.
- **EIP-197 — alt_bn128 Pairing Check**: Precompile for bilinear pairing checks on BN128. Enables efficient on-chain verification of zero-knowledge proofs.
- **EIP-198 — BIGINT Modular Exponentiation**: Precompile for modular exponentiation. Supports RSA signature verification and other cryptographic operations.
- **EIP-211 — RETURNDATASIZE and RETURNDATACOPY**: Opcodes for accessing return data from external calls. Enables contracts to handle variable-length return data without pre-allocating memory.
- **EIP-214 — STATICCALL**: A new call opcode that guarantees no state modifications. Critical for Solidity's view and pure function modifiers — callers can prove the called contract cannot change state.
- **EIP-658 — Transaction Status Code in Receipts**: Replaced the intermediate state root in transaction receipts with a simple boolean (1 = success, 0 = failure). Enabled dApps to reliably detect failed transactions.

## Client Requirements

- Core-Geth v1.11.0 or later (Multi-Geth at the time)
- Hyperledger Besu with ETC Atlantis support`,
    date: '2019-09-12',
    category: 'Updates',
    tags: ['Network Upgrade', 'Byzantium', 'ECIP-1054'],
    author: 'ETC Community',
    readTime: 4,
  },

  // Security Articles
  {
    slug: 'mess-implemented',
    title: 'MESS: Modified Exponential Subjective Scoring Implemented',
    excerpt:
      'Ethereum Classic implemented ECBP-1100 (MESS) in October 2020 to defend against 51% attacks. MESS was later deprecated after hashrate grew substantially post-Merge.',
    content: `Following the August 2020 chain reorganization attacks, Ethereum Classic implemented ECBP-1100 — Modified Exponential Subjective Scoring (MESS) — a novel approach to enhancing chain security without introducing centralized checkpoints.

## What is MESS?

MESS adds a "gravity" penalty to chain reorganizations, making it exponentially more difficult to replace recent blocks. It works by requiring increasingly more total work to displace the current chain tip as the reorganization depth grows.

## How It Works

MESS assigns a gravity score to chain tips based on:
- The length of the chain segment being replaced
- How recently the blocks were produced
- Total accumulated difficulty

Longer reorganizations require proportionally more work to succeed, making deep reorgs economically prohibitive without changing the fundamental proof-of-work consensus mechanism.

## Benefits

- **Attack Resistance**: Made 51% attacks significantly more expensive — an attacker needs not just majority hashrate but exponentially more work for deeper reorgs
- **No Centralization**: Does not rely on checkpoints, trusted parties, or finality gadgets
- **Preserves PoW Model**: Transactions still achieve probabilistic finality through proof-of-work

## Deprecation

MESS was deprecated after Ethereum's Merge in September 2022, when GPU miners migrated to ETC and network hashrate increased from ~25 TH/s to over 200 TH/s. At that hashrate level, the economic cost of a 51% attack became prohibitively expensive without MESS, and the additional reorganization penalty was no longer necessary.

## Specification

ECBP-1100 is documented in the Ethereum Classic Improvement Proposals repository.`,
    date: '2020-10-10',
    category: 'Security',
    tags: ['Security', 'ECBP-1100', 'Network'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'thanos-network-upgrade',
    title: 'Thanos Network Upgrade Preserves GPU Mining',
    excerpt:
      'Ethereum Classic activated Thanos at block 11,700,000 on November 28, 2020, doubling the DAG epoch length to keep 4GB GPUs mining and establishing the Etchash algorithm.',
    content: `Ethereum Classic activated the Thanos network upgrade at block 11,700,000 on November 28, 2020, implementing ECIP-1099 to modify the mining algorithm's DAG growth schedule.

## The DAG Size Problem

The Ethash mining algorithm requires miners to store a DAG (Directed Acyclic Graph) in GPU memory. The DAG grows approximately 8 MB every 30,000-block epoch (~5 days). By late 2020, the DAG was approaching the 4 GB memory limit of consumer GPUs like the GTX 1050 Ti and RX 570/580, which would force these miners offline.

## ECIP-1099: Epoch Doubling

Thanos doubled the DAG epoch from 30,000 to 60,000 blocks, halving the DAG growth rate. This extended the viability of 4GB GPU mining by approximately three additional years.

## Etchash Algorithm

With the epoch length change, ETC's mining algorithm is now called Etchash to distinguish it from Ethereum's Ethash. The algorithms are identical in all other respects — the only difference is the epoch duration parameter. Existing mining software required only minor configuration updates.

## Mining Decentralization

The decision preserved mining accessibility for operators running consumer-grade hardware, preventing centralization toward ASIC operators and large GPU farms with 8GB+ cards. This aligns with ETC's commitment to censorship resistance through distributed mining.

## Client Requirements

- Core-Geth v1.11.22 or later
- Hyperledger Besu with ETC Thanos support`,
    date: '2020-11-28',
    category: 'Updates',
    tags: ['Network Upgrade', 'Mining', 'ECIP-1099', 'Etchash'],
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
- "Send X ETC, receive 2X back" — always a scam
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
    slug: 'monetary-policy-fixed',
    title: 'ETC Monetary Policy: Fixed Supply via ECIP-1017',
    excerpt:
      'Ethereum Classic implemented ECIP-1017 and ECIP-1039, establishing a fixed monetary policy with 20% block reward reductions every 5 million blocks and a maximum supply of approximately 210.7 million ETC.',
    content: `Ethereum Classic implemented ECIP-1017 at block 5,000,001, establishing a fixed monetary policy that differentiates ETC from other smart contract platforms. ECIP-1039 later clarified the rounding behavior for sub-wei reward calculations.

## The 5M20 Policy

ECIP-1017 implements a disinflationary emission schedule:
- Block rewards reduce by 20% every 5 million blocks (approximately every 2.5 years)
- Uncle and nephew rewards reduce at the same rate
- Maximum supply is capped at approximately 210.7 million ETC

## Emission Schedule

| Era | Blocks | Block Reward | Uncle Reward |
|-----|--------|-------------|--------------|
| Era 1 | 0 – 5M | 5 ETC | 0.15625 ETC (1/32) |
| Era 2 | 5M – 10M | 4 ETC | 0.125 ETC |
| Era 3 | 10M – 15M | 3.2 ETC | 0.1 ETC |
| Era 4 | 15M – 20M | 2.56 ETC | 0.08 ETC |
| Era 5 | 20M – 25M | 2.048 ETC | 0.064 ETC |

## ECIP-1039: Rounding Precision

ECIP-1039 specified that when reward reductions produce sub-wei fractional amounts, the value rounds down to the nearest wei. This prevents precision drift over long timeframes and ensures deterministic reward calculation across all client implementations.

## Why Fixed Supply Matters

- **Predictability**: Miners and holders know the future issuance schedule with certainty
- **Scarcity**: Supply cannot be arbitrarily inflated by protocol changes
- **Sound Money**: Algorithmic, auditable monetary properties — contrasts with Ethereum's variable issuance

## Specifications

- ECIP-1017: Monetary Policy and Final Modification to the Ethereum Classic Emission Schedule
- ECIP-1039: Monetary Policy Rounding Specification`,
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
    slug: 'iohk-grothendieck-team',
    title: 'IOHK Grothendieck Team Contributes to ETC Development',
    excerpt:
      'IOHK established the Grothendieck team to contribute to Ethereum Classic, producing the Mantis client and treasury research including ECIP-1051 and ECIP-1098.',
    content: `Input Output Hong Kong (IOHK) established the Grothendieck team in early 2017, dedicating resources to Ethereum Classic protocol development and research. Named after the mathematician Alexander Grothendieck, the team operated until its wind-down in 2020.

## Contributions

### Mantis Client
IOHK developed Mantis, a Scala-based Ethereum Classic client built on functional programming principles. Mantis demonstrated the feasibility of alternative client implementations with formal methods influence, though development concluded when IOHK shifted focus.

### Treasury Research
The Grothendieck team produced two treasury proposals for sustainable protocol funding:
- **ECIP-1051**: A protocol-level treasury system funded by a percentage of block rewards, modeled on research from IOHK's work on Cardano treasury mechanisms.
- **ECIP-1098**: A refined treasury proposal with a decentralized governance structure for fund allocation.

Both proposals were eventually withdrawn after community deliberation, but the research influenced subsequent treasury discussions in the ETC ecosystem, including the Olympia governance framework.

### Additional Research
The team contributed work in:
- Sidechain research and cross-chain interoperability
- Formal verification methods for smart contracts
- Protocol improvement proposals

## Legacy

IOHK's involvement brought academic rigor to ETC development during a formative period. The treasury research — while not adopted at the time — established the conceptual groundwork for protocol-level funding mechanisms. The Mantis client proved that a non-Go client could maintain ETC consensus, validating the multi-client approach the network continues to pursue.`,
    date: '2017-03-01',
    category: 'Ecosystem',
    tags: ['IOHK', 'Development', 'Research', 'Mantis'],
    author: 'IOHK',
    readTime: 3,
  },

  // Early Network Upgrades
  {
    slug: 'frontier-thawing-network-upgrade',
    title: 'Frontier Thawing: Gas Limit Unlocked',
    excerpt:
      'At block 200,000 on September 7, 2015, the Frontier Thawing upgrade unlocked the gas limit, enabling practical smart contract deployment for the first time.',
    content: `At block 200,000 on September 7, 2015, the Frontier Thawing upgrade removed the initial 5,000 gas limit that had been in place since genesis, enabling miners to vote on gas limit increases.

## What Changed

The Frontier genesis launch deliberately set a 5,000 gas per block limit — enough for simple ETH transfers but too low for meaningful smart contract execution. Frontier Thawing unlocked this limit and set the default target to 3,141,592 gas per block, allowing miners to adjust the limit through the standard voting mechanism.

## Difficulty Bomb Introduced

Frontier Thawing also introduced the exponential difficulty bomb — a mechanism that progressively increases mining difficulty to make block production impractical. The bomb was designed to force future protocol upgrades by making the chain unusable without them.

Ethereum Classic later removed the difficulty bomb permanently at block 5,900,000 (ECIP-1041), affirming its commitment to proof-of-work consensus. Ethereum delayed the bomb five times before transitioning to proof-of-stake in September 2022.

## Significance

This upgrade marked the moment smart contract deployment became practical on the network. The blockchain that Ethereum Classic continues today first became a usable smart contract platform at this block.`,
    date: '2015-09-07',
    category: 'Updates',
    tags: ['Network Upgrade', 'History', 'Gas Limit'],
    author: 'ETC Community',
    readTime: 2,
  },
  {
    slug: 'homestead-network-upgrade',
    title: 'Homestead Network Upgrade Marks Production Readiness',
    excerpt:
      'At block 1,150,000 on March 14, 2016, Homestead moved the network from beta to production with DELEGATECALL, tightened transaction rules, and P2P forward compatibility.',
    content: `At block 1,150,000 on March 14, 2016, the Homestead network upgrade activated — the first major planned hard fork, marking the network's transition from beta ("Frontier") to production status.

## Included EIPs

- **EIP-2 — Homestead Hard-fork Changes**: Increased contract creation gas cost from 21,000 to 53,000 gas, preventing certain denial-of-service patterns. Tightened transaction signature rules to require low-s values only, eliminating transaction malleability — a class of attacks where valid transaction hashes could be altered without changing the transaction itself.
- **EIP-7 — DELEGATECALL**: Added opcode 0xf4, which calls another contract's code while preserving the caller's context (msg.sender and msg.value). This is the foundation for proxy patterns and upgradeable contracts — the called contract's code executes as if it were the calling contract's own code.
- **EIP-8 — devp2p Forward Compatibility**: Modified the peer-to-peer networking layer to accept packets with unknown future fields. Prevents network fragmentation during future protocol upgrades by ensuring older nodes don't disconnect from newer nodes advertising updated capabilities.

## Significance

Homestead established the network as production-ready. DELEGATECALL enabled the library and proxy contract patterns that underpin most modern smart contract architectures. The transaction malleability fix removed a persistent security concern inherited from early Ethereum.`,
    date: '2016-03-14',
    category: 'Updates',
    tags: ['Network Upgrade', 'Homestead', 'History'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'gas-reprice-network-upgrade',
    title: 'Gas Reprice: Emergency Response to DoS Attacks',
    excerpt:
      'At block 2,500,000 on October 24, 2016, the Gas Reprice upgrade (EIP-150) was activated as an emergency response to the Shanghai DoS attacks that had been crippling the network.',
    content: `At block 2,500,000 on October 24, 2016, the Gas Reprice network upgrade activated EIP-150 in response to the Shanghai denial-of-service attacks that had been disrupting the network since September 2016. This upgrade was specified in ECIP-1015.

## The Shanghai DoS Attacks

In September and October 2016, attackers exploited underpriced I/O opcodes to create transactions that took minutes to process. Operations like EXTCODESIZE, BALANCE, and CALL were priced at 20–40 gas but required expensive disk reads, allowing attackers to generate blocks that stalled nodes for extended periods.

## EIP-150: State Access Repricing

The upgrade repriced I/O-heavy opcodes to reflect their actual computational cost:

| Opcode | Before | After |
|--------|--------|-------|
| EXTCODESIZE | 20 gas | 700 gas |
| EXTCODECOPY | 20 gas | 700 gas |
| BALANCE | 20 gas | 400 gas |
| SLOAD | 50 gas | 200 gas |
| CALL / DELEGATECALL | 40 gas | 700 gas |
| SELFDESTRUCT (new account) | 0 gas | 5,000 gas |

## The 63/64 Gas Rule

EIP-150 also introduced the 63/64 gas forwarding rule: child calls receive at most 63/64 of the parent's available gas. This limits practical call depth and prevents stack-depth DoS attacks, where an attacker could force arbitrarily deep call chains.

## Significance

The Gas Reprice was one of the few post-DAO-Fork security measures coordinated between Ethereum and Ethereum Classic, as both networks were vulnerable to the same attack vectors. The repricing established the principle that gas costs should reflect actual I/O and computation costs — a principle refined in later upgrades (EIP-1884 in Phoenix, EIP-2929 in Magneto).`,
    date: '2016-10-24',
    category: 'Security',
    tags: ['Network Upgrade', 'ECIP-1015', 'DoS', 'Security'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'die-hard-network-upgrade',
    title: 'Die Hard: ETC\'s First Independent Network Upgrade',
    excerpt:
      'At block 3,000,000 on January 13, 2017, Die Hard established ETC\'s protocol sovereignty with replay protection (Chain ID 61), difficulty bomb delay, and state trie cleanup.',
    content: `At block 3,000,000 on January 13, 2017, the Die Hard network upgrade activated — the first network upgrade specific to Ethereum Classic, marking the network's protocol independence from Ethereum. Die Hard was specified in ECIP-1010.

## Included Changes

- **ECIP-1010 — Delay Difficulty Bomb**: Paused the exponential difficulty growth between blocks 3,000,000 and 5,000,000. The bomb formula (2^(floor(block/100000) - 2)) was producing noticeable block time increases. This delay bought time for the community to decide the bomb's permanent fate — it was later removed entirely in ECIP-1041.
- **EIP-155 — Replay Protection (Chain ID 61)**: Added a chain identifier parameter to transaction signatures. Before Die Hard, a transaction signed on ETC could be replayed on ETH (and vice versa), since both chains shared the same transaction format. Chain ID 61 for ETC (vs. 1 for ETH) made transactions chain-specific, eliminating this persistent security risk.
- **EIP-160 — EXP Cost Increase**: Increased the EXP opcode cost from 10 to 50 gas per byte of exponent. The original pricing underestimated the computational cost of large exponentiation operations.
- **EIP-161 — State Trie Clearing**: Enabled removal of empty accounts from the state trie. Cleaned up accounts created during the 2016 Shanghai DoS attacks that had bloated state storage.

## Significance

Die Hard was a sovereignty decision. By implementing Chain ID 61, ETC established a permanent cryptographic boundary between itself and Ethereum. Replay protection eliminated the most urgent cross-chain security risk, and the difficulty bomb delay initiated the process that would eventually lead to ETC permanently removing the bomb — affirming proof-of-work as the network's consensus mechanism.`,
    date: '2017-01-13',
    category: 'Updates',
    tags: ['Network Upgrade', 'ECIP-1010', 'Replay Protection', 'Chain ID'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'defuse-difficulty-bomb-network-upgrade',
    title: 'Difficulty Bomb Permanently Removed from ETC',
    excerpt:
      'At block 5,900,000 on May 29, 2018, ECIP-1041 permanently removed the exponential difficulty bomb, affirming ETC\'s commitment to proof-of-work consensus.',
    content: `At block 5,900,000 on May 29, 2018, Ethereum Classic permanently removed the exponential difficulty bomb via ECIP-1041. This was one of the most consequential protocol decisions in ETC's history.

## What Was the Difficulty Bomb?

The difficulty bomb was an exponential term in the block difficulty formula: 2^(floor(block_number / 100,000) - 2). As block numbers increased, this term grew exponentially, eventually making block times so long that the chain became unusable. It was originally designed to force the network to upgrade — specifically, to transition to proof-of-stake.

## ECIP-1041: Complete Removal

Unlike Ethereum, which delayed the bomb five separate times (Byzantium, Constantinople, Muir Glacier, Arrow Glacier, Gray Glacier) before finally transitioning to proof-of-stake in September 2022, ETC removed the bomb coefficient entirely. The exponential term was set to zero permanently.

## Result

- Block times stabilized at approximately 13 seconds without artificial pressure
- No future "ice age" events can occur
- The network cannot be coerced into consensus changes via difficulty manipulation

## Significance

This was a deliberate sovereignty decision. By removing the bomb, ETC committed at the protocol level to proof-of-work consensus. The network's consensus mechanism is now a choice, not a deadline — upgrades happen because the community evaluates them as beneficial, not because inaction makes the chain unusable.`,
    date: '2018-05-29',
    category: 'Updates',
    tags: ['Network Upgrade', 'ECIP-1041', 'Proof of Work', 'Difficulty Bomb'],
    author: 'ETC Community',
    readTime: 3,
  },

  // Historical Events
  {
    slug: '51-percent-attacks-2020',
    title: 'ETC Responds to 51% Attacks with Security Upgrades',
    excerpt:
      'In August 2020, Ethereum Classic experienced three chain reorganization attacks. The network responded with ECBP-1100 (MESS), increased confirmations, and ultimately benefited from post-Merge hashrate growth.',
    content: `In August 2020, the Ethereum Classic network experienced three separate chain reorganization (51%) attacks over a period of approximately two weeks. The incidents prompted immediate security responses and longer-term protocol improvements.

## The Attacks

- **August 1**: A reorganization of approximately 3,693 blocks, with an estimated double-spend of 807,260 ETC.
- **August 6**: A second reorganization of approximately 4,000 blocks.
- **August 29**: A third reorganization of approximately 7,000 blocks.

In each case, the attacker acquired sufficient hashrate to produce a longer competing chain, replacing confirmed blocks on the canonical chain with the attacker's blocks containing double-spend transactions.

## Immediate Responses

- Exchanges increased ETC confirmation requirements — some to 10,000+ confirmations
- Mining pools increased payout confirmation thresholds
- The community began developing ECBP-1100 (MESS)

## ECBP-1100: MESS

Modified Exponential Subjective Scoring (MESS) was activated in October 2020. MESS penalizes deep chain reorganizations by requiring exponentially more work to replace recent blocks, making 51% attacks significantly more expensive without introducing centralized checkpoints.

## Long-Term Resolution

The most effective security improvement came in September 2022, when Ethereum's transition to proof-of-stake caused GPU miners to migrate to ETC. Network hashrate increased from ~25 TH/s to over 200 TH/s, making the economic cost of a 51% attack prohibitively expensive. MESS was subsequently deprecated, as the hashrate increase provided sufficient natural protection.

## Lessons

The 2020 attacks demonstrated that proof-of-work security is directly proportional to hashrate, and that low-hashrate PoW chains are vulnerable to rental attacks. ETC's response was pragmatic: implement a short-term defense (MESS), and benefit from the long-term hashrate growth that the Merge delivered.`,
    date: '2020-08-06',
    category: 'Security',
    tags: ['Security', '51% Attack', 'ECBP-1100', 'Chain Reorganization'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'core-geth-client',
    title: 'Core-Geth: The Reference ETC Client',
    excerpt:
      'Core-Geth became the primary Ethereum Classic client, forked from go-ethereum with multi-chain support for ETC, ETH, and testnets.',
    content: `Core-Geth is the primary Ethereum Classic client, maintained as a fork of go-ethereum (Geth) with native support for ETC, ETH, and their respective testnets. It serves as the reference implementation for the Ethereum Classic protocol.

## Origins

Core-Geth evolved from Multi-Geth, a multi-chain variant of go-ethereum maintained by ETC Labs. When Multi-Geth development transitioned to broader community stewardship, it was renamed Core-Geth to reflect its role as the core reference client for ETC.

## Key Features

- **Multi-chain support**: Natively supports Ethereum Classic mainnet (Chain ID 61), Mordor testnet (Chain ID 63), and Ethereum mainnet/testnets
- **ETC-specific protocol rules**: Implements all ETC network upgrades (Atlantis through Spiral), ECIP-1017 monetary policy, and Etchash mining algorithm
- **Go-ethereum compatibility**: Tracks upstream Geth improvements for EVM execution, P2P networking, state storage, and JSON-RPC APIs
- **Mining support**: Full Etchash mining with stratum protocol support for pool mining

## Role in the Ecosystem

Core-Geth processes the majority of ETC network traffic. It is used by:
- Mining pools and solo miners
- RPC infrastructure providers (Rivet, Ethercluster)
- Block explorers and analytics platforms
- DApp developers and node operators

## Multi-Client Future

Ethereum Classic also supports Hyperledger Besu (Java) and has development underway on Fukuii (Scala). Running multiple independent client implementations provides consensus diversity — if one client has a bug, the others continue producing correct blocks, preventing a single point of failure from halting the network.`,
    date: '2019-04-01',
    category: 'Ecosystem',
    tags: ['Core-Geth', 'Client', 'Infrastructure'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'olympia-upgrade-announced',
    title: 'Olympia Network Upgrade Announced',
    excerpt:
      'The Olympia network upgrade will bring EIP-1559 fee markets, a community treasury funded by the basefee, and Cancun/Fusaka EVM equivalence to Ethereum Classic.',
    content: `The Ethereum Classic community has announced Olympia, the next major network upgrade. Olympia will adopt EIP-1559 fee markets with a unique modification: instead of burning the basefee, it will be directed to a community treasury for ecosystem funding.

## Key Changes

### EIP-1559 Fee Market with Treasury Redirect
Olympia implements EIP-1559's dynamic basefee mechanism, which replaces the first-price auction fee model with predictable, algorithmically-adjusted gas prices. On Ethereum, the basefee is burned (permanently destroyed). On ETC, the basefee will be redirected to a community treasury contract (ECIP-1112), preserving the fixed monetary policy established by ECIP-1017 while funding ecosystem development.

### EVM Equivalence
Olympia brings Cancun execution-layer EIPs to ETC, maintaining the network's track record of selective EVM alignment. PoS-specific changes are omitted as usual.

### Multi-Client Activation
Three independent client implementations are preparing for Olympia:
- **Core-Geth** (Go) — primary reference client
- **Hyperledger Besu** (Java) — enterprise-grade alternative
- **Fukuii** (Scala) — new client in development

## Treasury Funding Mechanism

The treasury is funded exclusively by the EIP-1559 basefee — not by block rewards. This preserves the ECIP-1017 emission schedule. The basefee amount varies with network demand, providing sustainable funding that scales with actual network usage.

## Activation

Olympia will activate on the Mordor testnet first, followed by ETC mainnet. Activation block numbers will be announced after multi-client testing is complete.

## Governance

Treasury fund allocation will be governed by the Olympia decentralized governance framework, ensuring that spending decisions are made by ETC stakeholders rather than any single organization.`,
    date: '2026-01-15',
    category: 'Updates',
    featured: true,
    tags: ['Network Upgrade', 'Olympia', 'EIP-1559', 'Treasury'],
    author: 'ETC Community',
    readTime: 4,
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

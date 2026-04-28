export type ArticleCategory = 'Updates' | 'Security' | 'Ecosystem' | 'Community' | 'Development'

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
- Use official links from ethereumclassic.com

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

  // ═══════════════════════════════════════════════════════════════════
  // BATCH 1: Historical Milestones & Founding Documents
  // ═══════════════════════════════════════════════════════════════════

  {
    slug: 'crypto-decentralist-manifesto',
    title: 'The Crypto-Decentralist Manifesto',
    excerpt:
      'Arvicco publishes the Crypto-Decentralist Manifesto, articulating the philosophical principles that define the Ethereum Classic community.',
    content: `On July 11, 2016 — just days before the contentious DAO fork — a document appeared that would define the philosophical core of Ethereum Classic. The Crypto-Decentralist Manifesto, written by Arvicco, articulated why decentralization matters and what a truly decentralized blockchain must protect.

## Core Principles

The manifesto argues that blockchains are most useful as decentralized systems, and that true decentralization requires protecting three properties:

### Open Architecture
The protocol rules must be fully transparent and open source. Anyone can run a node, send transactions, and verify the chain's state without permission from any authority.

### Neutrality
The protocol must treat all participants equally. No transaction can be censored, no account can be frozen, and no rule change can be imposed by a minority — no matter how well-intentioned.

### Immutability
The blockchain's history is inviolable. Completed transactions cannot be reversed, and the ledger cannot be rewritten. This is not merely a technical preference but a fundamental property that gives blockchains their value.

## Why It Mattered

The manifesto was published during the most contentious period in Ethereum's history. The DAO had been exploited, and the community was debating whether to modify the blockchain to reverse the exploit's effects. The manifesto articulated why some community members believed that rewriting history — even to fix a clear wrong — would undermine the very properties that make blockchains valuable.

## Legacy

When the DAO fork occurred on July 20, 2016, the community members who rejected the irregular state change coalesced around these principles. The Crypto-Decentralist Manifesto became one of Ethereum Classic's foundational documents, alongside the Declaration of Independence.

The full text remains available at [ethereumclassic.com](https://ethereumclassic.com).`,
    date: '2016-07-11',
    category: 'Community',
    tags: ['History', 'Philosophy', 'Founding Documents'],
    author: 'Arvicco',
    readTime: 4,
  },
  {
    slug: 'code-is-law',
    title: 'Code Is Law and the Genesis of Ethereum Classic',
    excerpt:
      'The principle that smart contracts should execute exactly as written — without external intervention — becomes the defining ethos of Ethereum Classic.',
    content: `"Code is law" is the principle that smart contract outcomes should be determined solely by the code that was deployed and the transactions that were submitted — not by the decisions of any external authority. This idea predates Ethereum, but it became the defining principle of Ethereum Classic after the events of 2016.

## Origins

When Ethereum launched in 2015, its founding promise was a platform for "applications that run exactly as programmed without any possibility of downtime, censorship, fraud, or third-party interference." Smart contracts were meant to be self-executing agreements where the code itself was the final arbiter.

## The Test

In June 2016, The DAO — a smart contract holding roughly 14% of all ETH — was exploited through a recursive calling vulnerability. The exploit was legal within the rules of the smart contract: the code permitted the withdrawals. But the financial impact was enormous.

The Ethereum community faced a choice: intervene to reverse the exploit (violating the principle that code determines outcomes) or accept the result (preserving the principle at significant financial cost).

## The Fork

On July 20, 2016, at block 1,920,000, the majority of the network chose to implement an irregular state change that moved the exploited funds to a recovery contract. This was the DAO fork.

## Ethereum Classic Continues

Those who believed that "code is law" meant the blockchain should not be rewritten — regardless of the circumstances — continued mining and transacting on the original chain. This chain became Ethereum Classic.

The principle does not mean all smart contract outcomes are desirable. It means the blockchain itself should not be the mechanism for correcting them. Courts, insurance, and governance layers can address harms without modifying the immutable ledger.

## Significance

"Code is law" is not a slogan — it is a design constraint. It means ETC's ledger has never been irregularly modified, and its history is a faithful record of every transaction since genesis block 0 on July 30, 2015.`,
    date: '2016-09-15',
    category: 'Community',
    tags: ['Philosophy', 'History', 'Code Is Law'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'vitalik-endorses-etc',
    title: 'Vitalik Buterin Endorses Ethereum Classic',
    excerpt:
      'Ethereum co-founder Vitalik Buterin publicly states that Ethereum Classic has a right to exist and is a legitimate project.',
    content: `In the days following the DAO fork on July 20, 2016, Ethereum co-founder Vitalik Buterin publicly acknowledged Ethereum Classic's legitimacy.

## The Statement

Buterin stated that Ethereum Classic, as the continuation of the original unforked chain, had a right to exist. He recognized that the community members who rejected the irregular state change were acting on legitimate principles — specifically, the belief that blockchains should not have their history rewritten by any party, regardless of intent.

## Context

The DAO fork had divided the Ethereum community. The majority supported the fork to recover funds from the DAO exploit, but a significant minority believed the intervention violated blockchain immutability. When the original chain continued to receive mining support and exchange listings, it became clear that both chains would persist.

## Significance

Buterin's endorsement was notable because:

- **Legitimacy**: It came from Ethereum's most prominent co-founder, lending credibility to ETC at a critical early moment
- **Principle**: It acknowledged that reasonable people could disagree about whether the DAO fork was the right decision
- **Precedent**: It established that blockchain forks could produce two legitimate chains with different governance philosophies

## Two Chains, One Origin

From this point forward, Ethereum and Ethereum Classic shared identical history up to block 1,920,000 but diverged in philosophy. Ethereum pursued pragmatic governance with the ability to make irregular state changes when community consensus supported them. Ethereum Classic committed to absolute immutability and the principle that the protocol should never override smart contract outcomes.

Both chains trace their genesis to July 30, 2015. The difference is purely in governance philosophy.`,
    date: '2016-07-23',
    category: 'Community',
    tags: ['History', 'Vitalik Buterin', 'Endorsement'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'monetary-policy-adopted',
    title: 'ETC Adopts Fixed Monetary Policy with 210M Supply Cap',
    excerpt:
      'ECIP-1017 introduces a fixed monetary policy for Ethereum Classic with a hard supply cap of approximately 210.7 million ETC and a 20% emission reduction every 5 million blocks.',
    content: `On March 1, 2017, the Ethereum Classic community formally adopted ECIP-1017, establishing a fixed monetary policy with a hard supply cap — differentiating ETC from Ethereum's uncapped supply model.

## ECIP-1017: The Monetary Policy

The proposal, authored by Matthew Spoke, introduced a predictable emission schedule:

- **Era 1** (blocks 0–5,000,000): 5 ETC per block
- **Era 2** (blocks 5,000,001–10,000,000): 4 ETC per block (20% reduction)
- **Era 3** (blocks 10,000,001–15,000,000): 3.2 ETC per block
- **Each subsequent era**: 20% reduction from the previous era

This creates a geometric series that converges to a maximum supply of approximately **210,700,000 ETC**.

## Why It Matters

### Sound Money
A fixed, predictable supply schedule makes ETC a deflationary asset. Unlike fiat currencies or uncapped cryptocurrencies, no authority can increase ETC's supply beyond the protocol-defined limit.

### Predictability
Miners, investors, and users can calculate exactly how many ETC will exist at any future point. There are no surprises and no discretionary monetary decisions.

### Bitcoin Parallel
The 20% reduction per era is ETC's equivalent of Bitcoin's halving events, though with a gentler reduction curve. The community calls these reductions "fifthings" (keeping four-fifths of the previous reward).

## Uncle/Nephew Rewards

ECIP-1017 also reduces uncle and nephew block rewards proportionally in each era, ensuring that all emission — including stale block rewards — follows the same schedule.

## Activation

The monetary policy was activated at block 5,000,000 (Era 2) via the Gotham hard fork on December 11, 2017.

[View the next block reward reduction →](/research/supply)`,
    date: '2017-03-01',
    category: 'Updates',
    tags: ['Monetary Policy', 'ECIP-1017', 'Supply Cap'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'gotham-hard-fork',
    title: 'Gotham Hard Fork: Monetary Policy Activated',
    excerpt:
      'At block 5,000,000, Ethereum Classic activates its fixed monetary policy via the Gotham hard fork, reducing block rewards from 5 ETC to 4 ETC.',
    content: `On December 11, 2017, at block 5,000,000, the Ethereum Classic network activated the Gotham hard fork — implementing ECIP-1017's fixed monetary policy and beginning Era 2 of the emission schedule.

## What Changed

| Parameter | Before (Era 1) | After (Era 2) |
|-----------|----------------|----------------|
| Block reward | 5 ETC | 4 ETC |
| Uncle reward | 0.15625 ETC (1/32) | 0.125 ETC |
| Era | 1 | 2 |
| Activation block | — | 5,000,000 |

The 20% reduction from 5 ETC to 4 ETC per block marked the first "fifthing" — the beginning of ETC's deflationary emission curve.

## Technical Details

Gotham implemented:

- **ECIP-1017**: Block reward reduction to 4 ETC per block, with proportional uncle/nephew reward reductions
- **ECIP-1010**: Difficulty bomb delay, removing the inherited Ethereum difficulty bomb that would have made mining progressively harder

## Why "Gotham"

ETC network upgrades are named after locations in fiction and mythology, distinguishing them from Ethereum's naming conventions. Gotham was the first upgrade with a distinctly ETC identity.

## Significance

This was ETC's first monetary policy event — proving that the community could coordinate a protocol change through the ECIP process and activate it across the network without incident. Every ~2.5 years thereafter, the block reward reduces by another 20%.

## Era Timeline

| Era | Block Range | Reward | Date |
|-----|-------------|--------|------|
| 1 | 0 – 5M | 5 ETC | Jul 2015 |
| 2 | 5M – 10M | 4 ETC | Dec 2017 |
| 3 | 10M – 15M | 3.2 ETC | Mar 2020 |
| 4 | 15M – 20M | 2.56 ETC | Apr 2022 |
| 5 | 20M – 25M | 2.048 ETC | May 2024 |

[View the next block reward reduction →](/research/supply)`,
    date: '2017-12-11',
    category: 'Updates',
    tags: ['Network Upgrade', 'Gotham', 'ECIP-1017', 'Monetary Policy'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'mordor-testnet-launch',
    title: 'Mordor PoW Testnet Launched for ETC Development',
    excerpt:
      'Ethereum Classic launches Mordor, a dedicated proof-of-work testnet using the ETChash algorithm, providing developers with an accurate testing environment.',
    content: `In October 2019, the Ethereum Classic community launched the Mordor testnet — a dedicated proof-of-work test network that mirrors ETC mainnet conditions.

## Why Mordor

Previous ETC testnets had limitations: some used proof-of-authority consensus (which behaves differently from proof-of-work), and others suffered from instability. Mordor was designed from the ground up as a proper PoW testnet using the same ETChash algorithm as ETC mainnet.

## Technical Details

- **Chain ID**: 63 (0x3f)
- **Consensus**: Proof-of-work (ETChash)
- **Block time**: ~13 seconds (matching mainnet)
- **Network upgrades**: Activates upgrades before mainnet for testing

## What Mordor Provides

### For Developers
- Deploy and test smart contracts in a realistic PoW environment
- Test gas estimation with real mining dynamics
- Verify contract behavior under actual consensus conditions

### For Client Teams
- Test network upgrade implementations before mainnet activation
- Run multi-client compatibility tests
- Verify fork transitions at specific block numbers

### For Miners
- Test mining software configurations
- Verify pool compatibility
- Benchmark hardware performance

## Testnet ETC

Mordor ETC has no monetary value. Developers can obtain testnet ETC from community faucets to deploy contracts and test transactions without cost.

## Ongoing Use

Mordor continues to serve as ETC's primary testnet. All network upgrades — including Atlantis, Agharta, Phoenix, Magneto, Mystique, Thanos, and Spiral — were activated on Mordor before mainnet deployment. The upcoming Olympia upgrade will follow the same pattern.`,
    date: '2019-10-03',
    category: 'Updates',
    tags: ['Testnet', 'Mordor', 'Development'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'era-3-block-reward-reduction',
    title: 'Era 3 Block Reward Reduction to 3.2 ETC',
    excerpt:
      'At block 10,000,001, Ethereum Classic enters Era 3 of its monetary policy, reducing block rewards from 4 ETC to 3.2 ETC per block.',
    content: `On March 17, 2020, at block 10,000,001, Ethereum Classic entered Era 3 of its fixed monetary policy under ECIP-1017. The block reward reduced from 4 ETC to 3.2 ETC — a 20% decrease.

## The Numbers

| Parameter | Era 2 | Era 3 |
|-----------|-------|-------|
| Block reward | 4 ETC | 3.2 ETC |
| Uncle reward | 0.125 ETC | 0.1 ETC |
| Daily emission | ~26,400 ETC | ~21,120 ETC |
| Annual emission | ~9.64M ETC | ~7.71M ETC |

## Cumulative Supply

By the start of Era 3, approximately 113.4 million ETC had been minted — just over half of the ~210.7 million maximum supply.

## What This Means

The Era 3 reduction continued the predictable deflationary curve established by ECIP-1017. Each era lasts 5 million blocks (~2.5 years at 13-second block times), and each reduces the reward by exactly 20%.

Unlike Bitcoin's abrupt halvings (50% reduction), ETC's fifthings are a gentler 20% reduction. This provides miners with a more gradual revenue adjustment while still ensuring the supply converges to a hard cap.

## Mining Economics

The reduction to 3.2 ETC per block occurred during a period of relatively low ETC prices. Despite reduced block rewards, mining continued without disruption — miners had advance knowledge of the reduction schedule and could plan accordingly.

## Looking Ahead

Era 4 would arrive at block 15,000,001, reducing rewards further to 2.56 ETC per block.

[View the next block reward reduction →](/research/supply)`,
    date: '2020-03-17',
    category: 'Updates',
    tags: ['Monetary Policy', 'Era 3', 'Block Reward'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'era-4-block-reward',
    title: 'Era 4: Block Reward Reduces to 2.56 ETC',
    excerpt:
      'At block 15,000,001, Ethereum Classic enters Era 4 of its monetary policy, reducing block rewards from 3.2 ETC to 2.56 ETC per block.',
    content: `On April 25, 2022, at block 15,000,001, Ethereum Classic entered Era 4 of its fixed monetary policy. The block reward reduced from 3.2 ETC to 2.56 ETC — the fourth era of ECIP-1017's 20% reduction schedule.

## The Numbers

| Parameter | Era 3 | Era 4 |
|-----------|-------|-------|
| Block reward | 3.2 ETC | 2.56 ETC |
| Uncle reward | 0.1 ETC | 0.08 ETC |
| Daily emission | ~21,120 ETC | ~16,896 ETC |
| Annual emission | ~7.71M ETC | ~6.17M ETC |

## Cumulative Supply

By the start of Era 4, approximately 131.1 million ETC had been minted — roughly 62% of the ~210.7 million maximum supply.

## Context

Era 4 began just five months before Ethereum's transition to proof-of-stake (The Merge, September 2022). The timing was significant: as ETC's emission rate decreased, a massive influx of hashrate from former Ethereum miners was about to arrive.

The combination of reduced block rewards and dramatically increased hashrate meant miners earned less ETC per unit of computing power — but the network's security increased substantially.

## The Emission Curve

| Era | Block Range | Reward | Activation |
|-----|-------------|--------|------------|
| 1 | 0 – 5M | 5 ETC | Jul 2015 |
| 2 | 5M – 10M | 4 ETC | Dec 2017 |
| 3 | 10M – 15M | 3.2 ETC | Mar 2020 |
| **4** | **15M – 20M** | **2.56 ETC** | **Apr 2022** |
| 5 | 20M – 25M | 2.048 ETC | May 2024 |

[View the next block reward reduction →](/research/supply)`,
    date: '2022-04-25',
    category: 'Updates',
    tags: ['Monetary Policy', 'Era 4', 'Block Reward'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'era-5-fifthening',
    title: "Era 5 'Fifthing': Block Reward Drops to 2.048 ETC",
    excerpt:
      'At block 20,000,001, Ethereum Classic enters its fifth monetary era, reducing block rewards from 2.56 ETC to 2.048 ETC per block.',
    content: `On May 31, 2024, at block 20,000,001, Ethereum Classic entered Era 5 of its fixed monetary policy — the fifth "fifthing" since the ECIP-1017 emission schedule was established.

## The Numbers

| Parameter | Era 4 | Era 5 |
|-----------|-------|-------|
| Block reward | 2.56 ETC | 2.048 ETC |
| Uncle reward | 0.08 ETC | 0.064 ETC |
| Daily emission | ~16,896 ETC | ~13,517 ETC |
| Annual emission | ~6.17M ETC | ~4.93M ETC |

## Cumulative Supply

By the start of Era 5, approximately 144.0 million ETC had been minted — roughly 68% of the ~210.7 million maximum supply. The remaining ~66.7 million ETC will be emitted over subsequent eras, with each era producing 20% fewer coins than the last.

## Why "Fifthing"

The ETC community uses the term "fifthing" because each era keeps four-fifths (80%) of the previous reward — or equivalently, reduces by one-fifth (20%). This distinguishes ETC's gentler reduction curve from Bitcoin's more aggressive halvings.

## Network State at Era 5

Era 5 began with ETC operating as one of the largest proof-of-work EVM chains by hashrate, following the post-Merge migration of GPU miners. The Spiral network upgrade was active, providing EVM parity with Ethereum's Shanghai execution-layer improvements.

## Remaining Supply

| Era | Reward | Approx. Dates | Emission |
|-----|--------|---------------|----------|
| 5 | 2.048 ETC | 2024–2027 | ~24.6M |
| 6 | 1.6384 ETC | 2027–2029 | ~19.7M |
| 7 | 1.3107 ETC | 2029–2032 | ~15.7M |
| 8+ | Decreasing | 2032+ | ~6.7M remaining |

The emission asymptotically approaches zero but never technically reaches it. In practice, block rewards become negligibly small by approximately Era 15.

[View the next block reward reduction →](/research/supply)`,
    date: '2024-05-31',
    category: 'Updates',
    tags: ['Monetary Policy', 'Era 5', 'Fifthing', 'Block Reward'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'etc-welcomes-ethash-miners',
    title: 'ETC Welcomes Ethereum Miners After PoS Merge',
    excerpt:
      'Following Ethereum\'s transition to proof-of-stake, Ethereum Classic becomes the primary destination for displaced GPU miners seeking proof-of-work opportunities.',
    content: `On September 15, 2022, Ethereum completed its transition from proof-of-work to proof-of-stake — "The Merge." This ended PoW mining on the Ethereum network and displaced thousands of GPU miners worldwide. Ethereum Classic emerged as the natural home for this mining community.

## The Migration

Within hours of The Merge, ETC's network hashrate began climbing dramatically:

- **Pre-Merge hashrate**: ~25 TH/s
- **Peak post-Merge**: Over 200 TH/s (8x increase)
- **Stabilized level**: Significantly above pre-Merge baseline

The migration was driven by practical factors: ETC uses the ETChash algorithm (derived from Ethash), meaning existing GPU mining hardware and software required minimal reconfiguration.

## Why ETC

Several factors made Ethereum Classic the primary destination:

- **Algorithm compatibility**: ETChash works with the same GPU hardware used for ETH mining
- **Established network**: ETC has operated continuously since 2015 with an active ecosystem
- **Proof-of-work commitment**: ETC's community has repeatedly affirmed its commitment to PoW consensus
- **EVM compatibility**: Developers can deploy the same smart contracts and tools

## Security Impact

The hashrate increase dramatically improved ETC's security posture. More hashrate means a higher cost to mount a 51% attack, making the network more resistant to the kind of chain reorganization attacks that affected ETC in 2020.

## Community Response

The ETC community welcomed the influx of miners. Mining pools expanded capacity, and infrastructure providers ensured their nodes could handle increased network activity. The community emphasized that ETC's value proposition — proof-of-work security, immutability, and sound monetary policy — aligns with the priorities of miners who value decentralized consensus.

## A New Era

Post-Merge, Ethereum Classic became the largest proof-of-work smart contract platform by hashrate and the original EVM chain still secured by mining. This position distinguishes ETC in the broader EVM ecosystem.`,
    date: '2022-09-15',
    category: 'Community',
    tags: ['Mining', 'The Merge', 'Hashrate', 'PoW'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'mystique-upgrade-success',
    title: 'Mystique Network Upgrade Successfully Activated',
    excerpt:
      'Ethereum Classic activates the Mystique network upgrade at block 14,525,000, implementing selected London EIPs while deliberately omitting EIP-1559.',
    content: `On February 12, 2022, at block 14,525,000, the Ethereum Classic network successfully activated the Mystique network upgrade. The upgrade brought selected improvements from Ethereum's London release to ETC while deliberately omitting EIP-1559's fee-burning mechanism.

## What Was Included

Mystique implemented four EIPs from Ethereum's London upgrade:

- **EIP-3529 — Reduced Refunds**: Removed gas refunds for SELFDESTRUCT and reduced SSTORE refunds. This eliminated gas token exploits that were distorting block gas usage.
- **EIP-3541 — Reject 0xEF Bytecode**: Prevents deployment of contracts starting with the 0xEF byte, reserving the prefix for future EVM Object Format (EOF) standards.
- **EIP-3198 — BASEFEE Opcode**: Makes the base fee accessible to smart contracts via a new opcode.
- **EIP-3855 — PUSH0 Instruction**: Adds a zero-cost PUSH instruction for pushing the value 0 onto the stack, reducing gas costs for common operations.

## What Was Omitted

### EIP-1559 Base Fee Burning
The most notable omission was EIP-1559's fee-burning mechanism. ETC chose not to implement the automatic burning of base fees because:

- ETC has a **fixed supply cap** under ECIP-1017. Burning fees would reduce the effective supply below the intended ~210.7M cap.
- The Olympia proposal (later formalized in ECIP-1109) would redirect the base fee to a community treasury instead of burning it.

## ECIP Reference

Mystique was specified in **ECIP-1104**.

## Activation

The upgrade activated smoothly across all ETC clients. No network disruptions were observed. Miners and node operators had upgraded their software in advance following the successful Mordor testnet activation.

## Significance

Mystique demonstrated ETC's approach to protocol upgrades: adopt proven EVM improvements for compatibility while making independent decisions about economic mechanisms. The deliberate omission of EIP-1559 burning showed that ETC evaluates each change against its own principles rather than automatically following Ethereum.`,
    date: '2022-02-12',
    category: 'Updates',
    tags: ['Network Upgrade', 'Mystique', 'ECIP-1104', 'London'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'spiral-upgrade-retrospective',
    title: 'Spiral Upgrade: Six Months In Review',
    excerpt:
      'Six months after activation, the Spiral network upgrade has brought EVM parity with Ethereum\'s Shanghai execution layer to Ethereum Classic without incident.',
    content: `Six months after its activation on February 5, 2024, the Spiral network upgrade has proven stable and successful — bringing Ethereum Classic's EVM to parity with Ethereum's Shanghai execution-layer improvements.

## What Spiral Delivered

Spiral (ECIP-1109) implemented seven EIPs from Ethereum's Shanghai upgrade:

- **EIP-3651 — Warm COINBASE**: Reduced gas cost for accessing the block producer's address from 2,600 to 100 gas. Benefits MEV and staking-related contracts.
- **EIP-3855 — PUSH0**: New opcode that pushes zero onto the stack at minimal cost. Reduces bytecode size across all new deployments.
- **EIP-3860 — Limit and Meter initcode**: Caps initcode size at 49,152 bytes and charges 2 gas per 32-byte word. Prevents oversized deployment transactions.
- **EIP-4200 — Static Relative Jumps**: Introduces RJUMP, RJUMPI, and RJUMPV opcodes for more efficient control flow in EVM bytecode.
- **EIP-6049 — Deprecate SELFDESTRUCT**: Formal deprecation notice for the SELFDESTRUCT opcode.

## Omitted EIPs

As with previous upgrades, ETC excluded PoS-specific changes:

- **EIP-4399 (PREVRANDAO)**: Replaces DIFFICULTY with beacon chain randomness — only applicable to proof-of-stake
- **EIP-4895 (Beacon Chain Withdrawals)**: Validator withdrawals — only applicable to proof-of-stake

## Network Impact

### Stability
Zero client incompatibilities. All three ETC clients (Core-Geth, Besu, Fukuii) processed the fork boundary without issues.

### Developer Experience
EVM parity with Shanghai means developers can use the latest Solidity compiler features when deploying to ETC. Tools like Hardhat, Foundry, and Remix work without special configuration.

### Gas Efficiency
PUSH0 and Warm COINBASE have measurably reduced gas costs for common operations, benefiting all users.

## Current Status

Spiral represents ETC's current production EVM level. The next planned upgrade, Olympia, will introduce the treasury funding mechanism via EIP-1559 base fee redirection.`,
    date: '2024-07-31',
    category: 'Updates',
    tags: ['Network Upgrade', 'Spiral', 'ECIP-1109', 'Shanghai'],
    author: 'ETC Community',
    readTime: 4,
  },

  // ═══════════════════════════════════════════════════════════════════
  // BATCH 2: Technical Education
  // ═══════════════════════════════════════════════════════════════════

  {
    slug: 'smart-contracts-overview',
    title: 'Smart Contracts on Ethereum Classic: A Technical Overview',
    excerpt:
      'How smart contracts work on the EVM, from Solidity compilation to on-chain execution, and what makes ETC a reliable platform for immutable contract deployment.',
    content: `Smart contracts are self-executing programs stored on the blockchain that run exactly as written. On Ethereum Classic, smart contracts benefit from the network's commitment to immutability — once deployed, a contract's code cannot be altered by any party.

## How Smart Contracts Work

### Compilation
Developers write contracts in high-level languages like Solidity or Vyper. The compiler translates this code into EVM bytecode — the low-level instruction set that the Ethereum Virtual Machine understands.

### Deployment
The bytecode is included in a special transaction sent to the network. When miners include this transaction in a block, the contract is assigned an address and becomes part of the permanent blockchain state.

### Execution
When a user sends a transaction to a contract's address, nodes execute the bytecode against the current state. Each operation consumes gas — a unit of computational effort that prevents infinite loops and ensures fair resource allocation.

### Determinism
Every node executes the same bytecode with the same inputs and must arrive at the same result. This deterministic execution is what allows a decentralized network to agree on state without a central authority.

## Gas and Execution Costs

Every EVM operation has a gas cost:
- **Simple transfer**: 21,000 gas
- **Storage write**: 20,000 gas (new slot) or 5,000 gas (update)
- **Computation**: Varies by opcode (ADD = 3 gas, MUL = 5 gas)

Users set a gas limit and gas price per transaction. If execution exceeds the gas limit, the transaction reverts but the gas is still consumed.

## ERC Standards

Smart contracts on ETC follow the same token standards as Ethereum:
- **ERC-20**: Fungible tokens (currencies, utility tokens)
- **ERC-721**: Non-fungible tokens (unique digital assets)
- **ERC-1155**: Multi-token standard (batch operations)

## Why ETC for Smart Contracts

ETC's immutability guarantee means deployed contracts will execute as written indefinitely. The blockchain has never undergone an irregular state change since the 2016 fork, making it a reliable platform for contracts that must remain unchanged.`,
    date: '2017-05-10',
    category: 'Development',
    tags: ['Smart Contracts', 'EVM', 'Solidity', 'Development'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'keys-and-addresses',
    title: 'Public Keys, Private Keys, and Addresses in ETC',
    excerpt:
      'A technical explanation of elliptic curve cryptography, key derivation, and address generation on Ethereum Classic.',
    content: `Every Ethereum Classic account is secured by public-key cryptography. Understanding how keys and addresses work is fundamental to safe interaction with the network.

## The Key Pair

### Private Key
A private key is a randomly generated 256-bit number — essentially a number between 1 and approximately 1.158 × 10⁷⁷. This number must be kept secret. Anyone who knows a private key has full control over the associated account.

### Public Key
The public key is derived from the private key using elliptic curve multiplication on the secp256k1 curve — the same curve used by Bitcoin. This operation is computationally easy in one direction but infeasible to reverse. Given a public key, there is no known way to determine the private key.

### Address
An ETC address is the last 20 bytes (160 bits) of the Keccak-256 hash of the public key, prefixed with "0x". For example: \`0x3b0952fB8eAAC74E56E176102eBA70BAB1C81537\`.

## Key Derivation Path

The derivation process follows a chain:

1. **Random entropy** → Private key (256 bits)
2. **Private key** → Public key (secp256k1 elliptic curve multiplication)
3. **Public key** → Address (Keccak-256 hash, take last 20 bytes)

Each step is a one-way function: you cannot reverse the process to recover the previous step.

## HD Wallets

Modern wallets use Hierarchical Deterministic (HD) key generation (BIP-32/BIP-44). A single seed phrase (12 or 24 words) deterministically generates an unlimited number of key pairs. ETC uses derivation path \`m/44'/61'/0'/0\` (where 61 is ETC's coin type per SLIP-44).

## Security Implications

- **Seed phrase = all keys**: Anyone with your seed phrase can derive every key your wallet has ever generated
- **Private key = account control**: There is no password reset. If a private key is lost, the funds are permanently inaccessible
- **Address = public identifier**: Addresses can be freely shared. They reveal no information about the private key

## Checksummed Addresses

EIP-55 mixed-case checksums encode error detection directly into the address string. Wallets should always validate checksums before sending transactions.`,
    date: '2017-09-14',
    category: 'Development',
    tags: ['Cryptography', 'Keys', 'Addresses', 'Security'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'replay-attacks-explained',
    title: 'Replay Attacks: What They Are and How ETC Handles Them',
    excerpt:
      'After the 2016 DAO fork created two chains with shared history, replay attacks became a real concern. How ETC and ETH addressed the problem.',
    content: `When the Ethereum network split into ETH and ETC on July 20, 2016, both chains shared identical transaction formats and account histories. This created a vulnerability: a transaction signed on one chain could be "replayed" on the other.

## What Is a Replay Attack?

A replay attack occurs when a valid transaction from one blockchain is broadcast on another blockchain where it is also valid. After the DAO fork:

- Alice sends 10 ETC to Bob on the ETC chain
- An attacker copies that signed transaction and broadcasts it on the ETH chain
- Since the transaction format and signing scheme were identical, Alice also sends 10 ETH to Bob — unintentionally

## Why It Happened

Both chains diverged from the same state at block 1,920,000. All accounts, balances, and contract code were identical on both chains. Signed transactions didn't specify which chain they were intended for, making them valid on both.

## The Solution: Chain ID (EIP-155)

EIP-155 introduced a chain identifier into the transaction signing process:

- **Ethereum (ETH)**: Chain ID 1
- **Ethereum Classic (ETC)**: Chain ID 61
- **Mordor Testnet**: Chain ID 63

With EIP-155, the chain ID is incorporated into the transaction hash before signing. A transaction signed for chain 61 produces an invalid signature on chain 1, and vice versa.

## Implementation on ETC

ETC implemented EIP-155 replay protection via the Spurious Dragon equivalent changes. After activation:

- All new transactions include the chain ID in the signature
- Legacy transactions (without chain ID) are still accepted for backward compatibility
- Wallets and libraries automatically include the chain ID when constructing transactions

## Practical Impact

Today, replay attacks between ETH and ETC are effectively eliminated for any transaction using EIP-155 signing. All modern wallets and libraries use this format by default.

The chain ID solution was one of the earliest examples of both chains cooperating on a technical standard that benefited users of both networks.`,
    date: '2018-01-31',
    category: 'Security',
    tags: ['Replay Attack', 'EIP-155', 'Chain ID', 'Security'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'merkle-trees-explained',
    title: 'Merkle Trees: The Data Structure Behind Blockchain Verification',
    excerpt:
      'How Merkle trees enable efficient and trustless verification of blockchain data, from transaction inclusion proofs to state verification.',
    content: `Every block in Ethereum Classic contains three Merkle tree roots: one for transactions, one for receipts, and one for the world state. These trees are the foundation of trustless verification.

## What Is a Merkle Tree?

A Merkle tree (or hash tree) is a data structure where every leaf node contains the hash of a data block, and every non-leaf node contains the hash of its children. The topmost hash is called the root.

## How It Works

1. **Leaf nodes**: Each transaction in a block is hashed individually
2. **Pairing**: Adjacent hashes are concatenated and hashed together
3. **Recursion**: This continues up the tree until a single hash remains — the Merkle root
4. **Inclusion proof**: To prove a transaction is in a block, you only need the transaction, the sibling hashes along the path to the root, and the root itself

## Three Trees in Every Block

### Transaction Trie
Contains all transactions in the block. The transaction root in the block header commits to every transaction.

### Receipt Trie
Contains the execution results (logs, gas used, status) for each transaction. The receipt root commits to every execution outcome.

### State Trie (Modified Merkle Patricia Trie)
The most complex of the three. It maps every account address to its state (balance, nonce, storage root, code hash). ETC uses a Modified Merkle Patricia Trie — a combination of a Patricia trie (for key-based lookup) and a Merkle tree (for cryptographic verification).

## Why Merkle Trees Matter

### Efficient Verification
A light client can verify that a transaction was included in a block using only ~log₂(n) hashes instead of downloading the entire block. For a block with 1,000 transactions, only ~10 hashes are needed.

### Tamper Detection
Changing any single transaction would change its leaf hash, which would cascade up the tree and change the root. Since the root is in the block header (which is part of the chain), any modification is immediately detectable.

### State Proofs
The state trie root allows anyone to prove the balance or storage of any account at any block height, without trusting the data provider.

## In Practice

When your wallet shows your ETC balance, it's ultimately verified against the state trie root in the latest block header. The entire security model of light clients and block explorers depends on these Merkle tree structures.`,
    date: '2018-03-15',
    category: 'Development',
    tags: ['Merkle Trees', 'Data Structures', 'Verification'],
    author: 'ETC Community',
    readTime: 5,
  },
  {
    slug: 'dos-attacks-blockchain',
    title: 'Understanding DoS Attacks on Blockchain Networks',
    excerpt:
      'How denial-of-service attacks target blockchain networks, the 2016 attacks on Ethereum/ETC, and the protocol-level defenses that were implemented.',
    content: `In September and October 2016, both Ethereum and Ethereum Classic experienced coordinated denial-of-service attacks that exploited underpriced EVM opcodes. The response shaped both networks' approach to gas pricing.

## The 2016 Attacks

### Transaction Spam (September 2016)
Attackers discovered that certain opcodes — particularly EXTCODESIZE and BALANCE — were priced far below their actual computational cost. By constructing transactions that called these opcodes thousands of times, attackers could force nodes to perform expensive I/O operations for minimal gas cost.

### State Bloat (October 2016)
A second wave targeted state growth. The CREATE opcode was used to generate millions of empty accounts, bloating the state trie that every full node must store. At peak, the attack added over 19 million empty accounts to the state.

## Impact

- Block processing times increased from seconds to minutes
- Some nodes ran out of memory and crashed
- Network throughput dropped dramatically
- Synchronizing new nodes became impractical

## Protocol-Level Fixes

Both ETH and ETC implemented the same fixes, known as the "Spurious Dragon" changes on ETH and equivalent changes on ETC:

### Gas Repricing (EIP-150)
Opcodes that performed I/O operations had their gas costs increased to reflect actual computational cost:
- EXTCODESIZE: 20 → 700 gas
- BALANCE: 20 → 400 gas
- SLOAD: 50 → 200 gas
- CALL variants: 40 → 700 gas

### State Clearing (EIP-161)
Empty accounts (zero balance, zero nonce, no code) could be removed from the state trie, allowing nodes to clean up the millions of accounts created during the attack.

### EXP Repricing (EIP-160)
The EXP opcode cost was increased from 10 + 10 per byte to 10 + 50 per byte to prevent computational DoS via exponentiation.

## Lessons Learned

The 2016 attacks demonstrated that gas pricing must accurately reflect actual resource consumption. Underpriced opcodes create economic attack vectors that are difficult to mitigate without protocol changes. Both networks now conduct more thorough gas cost analysis before introducing new opcodes.`,
    date: '2018-06-21',
    category: 'Security',
    tags: ['DoS Attack', 'Gas Pricing', 'Network Security'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'accounts-states-explained',
    title: 'Accounts and State in Ethereum Classic',
    excerpt:
      'How the ETC world state works: externally owned accounts, contract accounts, the state trie, and how every transaction modifies the global state.',
    content: `Ethereum Classic maintains a global "world state" — a mapping from every account address to its current state. Understanding this data model is key to understanding how the EVM works.

## Two Types of Accounts

### Externally Owned Accounts (EOAs)
Controlled by private keys. EOAs have:
- **Balance**: Amount of ETC held
- **Nonce**: Number of transactions sent (prevents replay)
- No code, no storage

### Contract Accounts
Controlled by their deployed code. Contract accounts have:
- **Balance**: Amount of ETC held
- **Nonce**: Number of contracts created by this contract
- **Code hash**: Hash of the EVM bytecode
- **Storage root**: Root of the account's storage trie

## The World State

The world state is a mapping: \`address → {nonce, balance, storageRoot, codeHash}\`.

This mapping is stored in a Modified Merkle Patricia Trie. The root hash of this trie is included in every block header as the \`stateRoot\`. This single 32-byte hash cryptographically commits to the entire state of every account on the network.

## State Transitions

Every transaction modifies the world state:

1. **Sender's nonce** increments by 1
2. **Sender's balance** decreases by (gas used × gas price) + value transferred
3. **Recipient's balance** increases by the value transferred
4. **Miner's balance** increases by gas used × gas price
5. **Contract storage** may change if the transaction calls a contract

The new state root after applying all transactions in a block becomes the block's \`stateRoot\`.

## State Growth

Every new account and every new storage slot adds to the state that full nodes must maintain. As of 2024, the ETC state contains millions of accounts and billions of storage entries. State growth management is an ongoing challenge for all EVM chains.

## State Proofs

Because the state is stored in a Merkle trie, anyone can construct a proof that a specific account has a specific balance at a specific block. This enables light clients and cross-chain verification without trusting the data provider.`,
    date: '2018-09-20',
    category: 'Development',
    tags: ['State', 'Accounts', 'EVM', 'World State'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'transaction-lifecycle',
    title: 'The Lifecycle of an ETC Transaction',
    excerpt:
      'From signing to finality: the complete journey of a transaction through the Ethereum Classic network, including mempool dynamics and block inclusion.',
    content: `Every ETC transaction follows a specific lifecycle from creation to finality. Understanding this process helps users and developers reason about confirmation times, gas pricing, and transaction reliability.

## 1. Creation and Signing

The sender constructs a transaction with:
- **To**: Recipient address (or empty for contract deployment)
- **Value**: Amount of ETC to transfer
- **Data**: Input data (empty for simple transfers, calldata for contract interactions)
- **Gas limit**: Maximum gas the transaction may consume
- **Gas price**: ETC per unit of gas the sender is willing to pay
- **Nonce**: Sequential number matching the sender's current nonce
- **Chain ID**: 61 for ETC mainnet (EIP-155 replay protection)

The transaction is then signed with the sender's private key using ECDSA on the secp256k1 curve.

## 2. Broadcast

The signed transaction is broadcast to the sender's connected peers. Each peer validates the transaction (valid signature, sufficient balance, correct nonce) and forwards it to their peers. Within seconds, the transaction propagates across the network.

## 3. Mempool

Each node maintains a transaction pool (mempool) of valid but unconfirmed transactions. The mempool is not consensus-critical — different nodes may have different views of pending transactions.

## 4. Block Inclusion

Miners select transactions from their mempool to include in the next block, typically prioritizing by gas price (higher price = higher priority). When a miner finds a valid proof-of-work nonce, the block — including the selected transactions — is broadcast to the network.

## 5. Confirmation

Once included in a block, the transaction has one confirmation. Each subsequent block adds another confirmation. The probability of a transaction being reversed decreases exponentially with each confirmation:

| Confirmations | Security Level |
|--------------|----------------|
| 1 | Low (possible reorganization) |
| 6 | Moderate (standard for most transfers) |
| 20 | High (recommended for large amounts) |
| 40+ | Very high (exchange standard) |

## 6. Finality

Unlike proof-of-stake chains with deterministic finality, ETC uses probabilistic finality. A transaction is never mathematically "final" — but after sufficient confirmations, the cost of reversing it exceeds any rational economic incentive.

## Failed Transactions

If a transaction runs out of gas during execution, it reverts — but the gas is still consumed and the transaction appears on-chain as failed. The sender pays for the computation even though the state change was rolled back.`,
    date: '2018-11-08',
    category: 'Development',
    tags: ['Transactions', 'Mempool', 'Confirmation', 'Gas'],
    author: 'ETC Community',
    readTime: 5,
  },
  {
    slug: 'block-confirmations-security',
    title: 'Block Confirmations and Transaction Security',
    excerpt:
      'Why confirmations matter on proof-of-work chains, how many are needed for different transaction sizes, and the economics of chain reorganizations.',
    content: `On proof-of-work blockchains like Ethereum Classic, transaction security is measured in block confirmations. Each confirmation makes it exponentially more expensive to reverse a transaction.

## What Is a Confirmation?

When your transaction is included in block N, it has one confirmation. When block N+1 is mined on top of block N, your transaction has two confirmations. Each new block adds another confirmation.

## Why Confirmations Matter

In PoW, miners compete to extend the longest chain. Occasionally, two miners find valid blocks at nearly the same time, creating a temporary fork. The network resolves this by following the chain with more cumulative work — the "heaviest chain."

Transactions in the shorter fork are returned to the mempool and may be re-included in a future block. This is a **chain reorganization** (reorg).

## Confirmation Guidelines

The appropriate number of confirmations depends on the value at stake:

| Transaction Value | Recommended Confirmations | Wait Time (~13s/block) |
|------------------|--------------------------|----------------------|
| Small (< 100 ETC) | 6 | ~78 seconds |
| Medium (100–10K ETC) | 20 | ~4.3 minutes |
| Large (> 10K ETC) | 40 | ~8.7 minutes |
| Exchange deposits | 40–100 | 8.7–21.7 minutes |

## The Economics of Reorgs

To reverse a transaction with N confirmations, an attacker must:

1. Mine an alternative chain starting from the block before the transaction
2. This chain must be longer than the current chain (requiring > 50% of network hashrate sustained for N blocks)
3. The cost scales linearly with N: more confirmations = more mining power × more time needed

After Ethereum's Merge, ETC's hashrate increased dramatically, making 51% attacks substantially more expensive than pre-Merge levels.

## MESS and Additional Protections

In 2020, following 51% attacks, ETC implemented MESS (Modified Exponential Subjective Scoring, ECBP-1100) to penalize deep reorganizations. MESS was later deprecated after the post-Merge hashrate increase made attacks economically infeasible.

## Compared to PoS Finality

Proof-of-stake chains like Ethereum offer deterministic finality — after a certain point, transactions cannot be reversed at all. PoW chains offer probabilistic finality — transactions become increasingly secure but are never mathematically irreversible. The tradeoff is that PoW finality requires no trusted validator set.`,
    date: '2019-02-07',
    category: 'Security',
    tags: ['Confirmations', 'Security', 'Reorgs', 'Finality'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'zero-knowledge-proofs',
    title: 'Zero-Knowledge Proofs and Their Potential on ETC',
    excerpt:
      'How zero-knowledge proofs work, their applications in blockchain privacy and scalability, and what they mean for EVM-compatible chains like Ethereum Classic.',
    content: `Zero-knowledge proofs (ZKPs) are cryptographic protocols that allow one party to prove a statement is true without revealing any information beyond the statement's validity. They have significant implications for blockchain privacy and scalability.

## How ZKPs Work

A zero-knowledge proof satisfies three properties:

1. **Completeness**: If the statement is true, an honest prover can convince an honest verifier
2. **Soundness**: If the statement is false, no cheating prover can convince the verifier (except with negligible probability)
3. **Zero-knowledge**: The verifier learns nothing beyond the fact that the statement is true

## Types of ZKPs

### zk-SNARKs
Succinct Non-interactive Arguments of Knowledge. Small proof size (~288 bytes), fast verification, but requires a trusted setup ceremony.

### zk-STARKs
Scalable Transparent Arguments of Knowledge. Larger proofs but no trusted setup required. Quantum-resistant.

### Groth16, PLONK, Halo 2
Different proving systems with varying tradeoffs in proof size, verification time, and setup requirements.

## Blockchain Applications

### Privacy
ZKPs can prove that a transaction is valid without revealing the sender, recipient, or amount. Projects like Zcash use this for private transactions.

### Scalability (zk-Rollups)
ZKPs can compress thousands of transactions into a single proof. A verifier on the base layer (like ETC) can verify the proof in a single transaction, enabling massive throughput scaling.

### Identity
Prove you are over 18 without revealing your birthdate. Prove you are a citizen without revealing which citizen. ZKPs enable selective disclosure of identity attributes.

## ZKPs and the EVM

The EVM includes precompiled contracts for elliptic curve operations (added in the Byzantium/Atlantis upgrades) that make on-chain ZKP verification feasible:

- **ecAdd** (address 0x06): Elliptic curve addition
- **ecMul** (address 0x07): Elliptic curve scalar multiplication
- **ecPairing** (address 0x08): Pairing check for zk-SNARK verification

These precompiles are available on Ethereum Classic, meaning ZKP-based applications built for Ethereum can be deployed on ETC.

## Future Potential

As ZKP technology matures, ETC's role as an immutable base layer could make it attractive for anchoring ZKP proofs. The combination of proof-of-work security, EVM compatibility, and cryptographic verification primitives positions ETC to benefit from advances in this field.`,
    date: '2019-06-13',
    category: 'Development',
    tags: ['Zero-Knowledge Proofs', 'Privacy', 'Scalability', 'Cryptography'],
    author: 'ETC Community',
    readTime: 5,
  },
  {
    slug: 'ecip-process-explained',
    title: 'The ECIP Process: How ETC Protocol Changes Work',
    excerpt:
      'The Ethereum Classic Improvement Proposal process governs all protocol-level changes to ETC, from initial draft through community review to network activation.',
    content: `The Ethereum Classic Improvement Proposal (ECIP) process is the formal mechanism through which protocol changes are proposed, discussed, and implemented on the ETC network.

## What Is an ECIP?

An ECIP is a design document providing information to the ETC community about a proposed change to the protocol. ECIPs follow a structured format that includes motivation, specification, rationale, and backwards compatibility analysis.

## ECIP Types

### Standards Track
Changes to the network protocol, including consensus changes, block or transaction format changes, and EVM opcode additions. These are the most significant ECIPs as they require all nodes to upgrade.

### Informational
Provides general guidelines or information. Does not propose protocol changes.

### Meta
Describes a process surrounding ETC (like the ECIP process itself).

## The ECIP Lifecycle

1. **Draft**: Author writes the proposal and submits it to the ECIP repository
2. **Review**: Community discusses the proposal on GitHub, Discord, and community calls
3. **Last Call**: Final review period before acceptance
4. **Accepted**: The proposal is technically sound and has community support
5. **Final**: Implemented and activated on the network
6. **Withdrawn/Rejected**: Not moving forward

## Key ECIPs in ETC History

| ECIP | Title | Status |
|------|-------|--------|
| ECIP-1017 | Monetary Policy and Final Modification to the Ethereum Classic Emission Schedule | Final |
| ECIP-1054 | Atlantis EVM and Protocol Upgrades | Final |
| ECIP-1056 | Agharta EVM and Protocol Upgrades | Final |
| ECIP-1061 | Blake2b, Derivation Path, and ECIP-1061 | Final |
| ECIP-1078 | Phoenix EVM and Protocol Upgrades | Final |
| ECIP-1099 | Calibrate Epoch Duration (Thanos/Etchash) | Final |
| ECIP-1100 | MESS (Modified Exponential Subjective Scoring) | Deprecated |
| ECIP-1103 | Magneto EVM and Protocol Upgrades | Final |
| ECIP-1104 | Mystique EVM and Protocol Upgrades | Final |
| ECIP-1109 | Spiral EVM and Protocol Upgrades | Final |

## Relationship to EIPs

ECIPs often reference Ethereum Improvement Proposals (EIPs) when adopting upstream EVM changes. ETC evaluates each EIP independently — some are adopted (execution-layer improvements), while others are rejected (PoS-specific changes, EIP-1559 fee burning).

## How to Participate

The ECIP process is open to anyone. Proposals are submitted as pull requests to the ECIP repository. Discussion happens publicly on GitHub and in community channels. There is no permissioned committee — acceptance is based on technical merit and rough consensus.`,
    date: '2019-08-15',
    category: 'Development',
    tags: ['ECIP', 'Governance', 'Protocol', 'Process'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'reorg-mitigation',
    title: 'Chain Reorganization Mitigation on ETC',
    excerpt:
      'Following 51% attacks in 2020, Ethereum Classic implemented MESS (ECBP-1100) to penalize deep chain reorganizations — and later deprecated it as hashrate grew.',
    content: `In August 2020, Ethereum Classic experienced multiple 51% attacks that resulted in deep chain reorganizations and double-spend attempts. The community responded with MESS (Modified Exponential Subjective Scoring), a novel defense mechanism.

## The 2020 Attacks

Three separate 51% attacks occurred in August 2020:

- **August 1**: 3,693 block reorganization (~12 hours of chain history rewritten)
- **August 6**: 4,000+ block reorganization
- **August 29**: 7,000+ block reorganization (the deepest)

The attacker used rented hashrate to build alternative chains in secret, then broadcast them to reorganize the canonical chain. This enabled double-spend attacks against exchanges.

## MESS: The Response

ECBP-1100, known as MESS (Modified Exponential Subjective Scoring), was implemented in October 2020. The mechanism works by penalizing chain reorganizations that go back many blocks:

### How MESS Worked
- Each node tracks the "gravity" of the chain it's following
- A competing chain that reorganizes N blocks back must demonstrate exponentially more work than the current chain tip
- Short reorgs (1-2 blocks, normal PoW behavior) are unaffected
- Deep reorgs (100+ blocks) become effectively impossible even with majority hashrate

### Key Properties
- **No consensus change**: MESS is a node-level policy, not a consensus rule
- **Gradual penalty**: The penalty increases with reorganization depth
- **Configurable**: Node operators could adjust or disable the penalty

## The Merge Changes Everything

When Ethereum transitioned to proof-of-stake in September 2022, GPU miners migrated to ETC in massive numbers. Network hashrate increased from ~25 TH/s to over 200 TH/s — an 8x increase.

This dramatically changed the economics of 51% attacks. The cost to rent sufficient hashrate to attack ETC became prohibitively expensive.

## Deprecation

With the post-Merge hashrate providing strong natural protection, MESS was deprecated. The community determined that the economic security from high hashrate made the additional subjective penalty unnecessary — and removing it simplified the client codebase.

## Lessons Learned

The 2020 attacks and MESS response demonstrated ETC's ability to:
1. Respond quickly to security incidents
2. Implement novel defense mechanisms
3. Remove temporary measures when they're no longer needed
4. Rely on fundamental PoW economics for long-term security`,
    date: '2020-11-10',
    category: 'Security',
    tags: ['51% Attack', 'MESS', 'ECBP-1100', 'Chain Reorganization'],
    author: 'ETC Community',
    readTime: 5,
  },

  // ===========================================
  // BATCH 3: Ecosystem & Recent Events
  // ===========================================

  {
    slug: 'besu-etc-client',
    title: 'Hyperledger Besu Adds Ethereum Classic Support',
    excerpt:
      'The enterprise-grade Ethereum client Hyperledger Besu integrated native Ethereum Classic support, expanding multi-client diversity for the network.',
    content: `Hyperledger Besu, the enterprise-grade Ethereum client maintained under the Linux Foundation's Hyperledger project, added native support for Ethereum Classic. The integration brought a fourth client implementation to the ETC network, strengthening client diversity — a critical factor in blockchain resilience.

## Background

Besu was originally developed by ConsenSys under the name "Pantheon" before being donated to the Hyperledger Foundation. Written in Java, Besu was designed from the ground up with enterprise requirements in mind: permissioned network support, privacy features, and modular architecture. Its donation to the Linux Foundation made it a vendor-neutral, open-source project.

## ETC Integration

The integration added full support for Ethereum Classic's protocol rules, including the ETCHash mining algorithm and all ETC-specific hard forks. Running Besu on the ETC network requires a single configuration flag:

\`\`\`
besu --network=classic
\`\`\`

This simplicity made Besu an attractive option for node operators, particularly those already running Besu for Ethereum or private network deployments. The shared codebase means operators can leverage the same tooling and operational knowledge across multiple EVM chains.

## Client Diversity

Client diversity is essential for blockchain network health. If all nodes run the same software, a single bug can cause network-wide failures. With Besu joining Core-Geth as an actively maintained ETC client, the network gained meaningful protection against single-implementation risk.

Besu's unique capabilities on ETC include:
- **Enterprise features:** Private transactions and permissioned network support
- **Node-as-a-Service:** Well-suited for infrastructure providers
- **Cross-chain operation:** Operators can run ETC, ETH, and private networks from one client

## Current Status

Besu continues to track upstream Ethereum improvements while maintaining ETC compatibility. The client is actively used by node operators and infrastructure providers serving the ETC ecosystem.`,
    date: '2020-06-15',
    category: 'Ecosystem',
    tags: ['Besu', 'Hyperledger', 'Client Diversity', 'Enterprise'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'derivation-path-standard',
    title: 'ETC Adopts HD Derivation Path Standard',
    excerpt:
      'Ethereum Classic standardized its HD wallet derivation path as m/44\'/61\'/0\'/0, establishing proper key separation from Ethereum wallets.',
    content: `The Ethereum Classic community formalized its hierarchical deterministic (HD) wallet derivation path standard, establishing \`m/44'/61'/0'/0\` as the canonical path for ETC addresses. This standard ensures proper key separation between ETC and ETH wallets, preventing address confusion and improving security.

## The Problem

When Ethereum Classic forked from Ethereum in 2016, both chains initially shared the same derivation path (\`m/44'/60'/0'/0\`), where \`60\` is Ethereum's coin type registered in SLIP-0044. This meant hardware wallets and HD wallet implementations generated identical addresses for both chains — a significant security and usability concern.

Users could accidentally send ETC to an ETH-derived address or vice versa. While the funds weren't technically lost (the same private key controls both), the confusion created real problems for wallet software and users managing assets on both chains.

## The Standard

The BIP-44 standard defines a hierarchical path structure:

\`\`\`
m / purpose' / coin_type' / account' / change / address_index
\`\`\`

Ethereum Classic registered coin type **61** in the SLIP-0044 registry, establishing the standard derivation path:

\`\`\`
m/44'/61'/0'/0/0    (first address)
m/44'/61'/1'/0/0    (second account)
m/44'/61'/2'/0/0    (third account)
\`\`\`

This cleanly separates ETC key material from ETH (\`m/44'/60'/...\`), ensuring that wallet software generates distinct addresses for each chain.

## Wallet Adoption

Hardware wallet manufacturers including Ledger and Trezor implemented the standard, generating ETC-specific addresses when users select Ethereum Classic in their wallet interfaces. Software wallets and key management libraries followed, making the standard path the default for new ETC wallet implementations.

## Why It Matters

Proper derivation path separation is foundational infrastructure. It ensures that:

1. **Key isolation:** ETC private keys are derived independently from ETH keys
2. **Address clarity:** Users see distinct addresses for each chain
3. **Wallet interoperability:** Any BIP-44 compliant wallet generates the same ETC addresses from the same seed phrase
4. **Recovery reliability:** Users can recover ETC funds from seed phrases using any compliant wallet`,
    date: '2018-08-20',
    category: 'Development',
    tags: ['BIP-44', 'SLIP-0044', 'HD Wallet', 'Derivation Path', 'Standards'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'false-dapp-warning',
    title: 'Security Advisory: Fraudulent dApp Sites Targeting ETC Users',
    excerpt:
      'The ETC community issued warnings about fraudulent websites impersonating legitimate dApps to steal user funds through phishing and malicious smart contracts.',
    content: `The Ethereum Classic community issued a security advisory warning users about a rise in fraudulent websites impersonating legitimate decentralized applications. These scam sites targeted ETC users through phishing, malicious contract approvals, and fake token offerings.

## Common Attack Vectors

### Phishing Sites
Attackers created websites visually identical to popular DeFi interfaces, using similar domain names (typosquatting) to trick users into connecting their wallets. Once connected, the sites would prompt users to sign transactions that drained their funds.

### Malicious Token Approvals
Some fraudulent dApps requested unlimited token approval permissions. While legitimate dApps may request approvals for specific amounts, scam sites exploited the ERC-20 approval mechanism to gain permanent access to a user's token balances, which could be drained at any time.

### Fake Token Contracts
Scammers deployed token contracts designed to appear legitimate — complete with names, symbols, and even fake liquidity — but containing hidden mechanisms such as:
- Transfer taxes that route funds to the deployer
- Mint functions allowing unlimited supply creation
- Blacklist functions preventing token sales (honeypots)
- Self-destruct mechanisms to remove evidence

## How to Stay Safe

**Verify contract addresses:** Always confirm dApp contract addresses through official sources. Check addresses on [Blockscout](https://etc.blockscout.com) before interacting.

**Bookmark trusted sites:** Access dApps through bookmarked URLs rather than search engine results or social media links. Scam sites frequently purchase ads to appear above legitimate results.

**Review approvals:** Before signing any transaction, carefully review what permissions you're granting. Use token approval checker tools to audit and revoke unnecessary approvals.

**Check contract verification:** Legitimate dApps typically have verified, open-source contracts on block explorers. Unverified contracts should be treated with extreme caution.

**Use hardware wallets:** Hardware wallets provide an additional verification step, displaying transaction details on the device screen before signing.

## Community Response

The ETC community maintains awareness of known scam contracts and phishing domains. Users who encounter suspicious sites are encouraged to report them through community channels to help protect others.

Always verify before you interact. If a deal seems too good to be true, it almost certainly is.`,
    date: '2023-01-10',
    category: 'Security',
    tags: ['Phishing', 'Scams', 'Security Advisory', 'DeFi Safety'],
    author: 'ETC Community',
    readTime: 4,
  },
  {
    slug: 'pow-censorship-resistance',
    title: 'Proof of Work and Censorship Resistance: Why ETC Stays PoW',
    excerpt:
      'After Ethereum transitioned to Proof of Stake in September 2022, Ethereum Classic reaffirmed its commitment to Proof of Work as the foundation of censorship resistance.',
    content: `When Ethereum completed its transition to Proof of Stake on September 15, 2022 — an event known as "The Merge" — Ethereum Classic became the largest Proof of Work smart contract platform. ETC's commitment to PoW was not a passive default but a deliberate choice rooted in the network's founding principles.

## The Merge and Its Implications

Ethereum's Merge eliminated mining from its consensus mechanism, replacing it with a validator staking model. This transition had significant implications for censorship resistance:

- **Validator concentration:** A small number of large staking providers control substantial portions of the validator set
- **Regulatory surface:** Identifiable validators can be compelled by jurisdictions to comply with transaction filtering requirements
- **OFAC compliance incidents:** In the months following The Merge, a measurable percentage of Ethereum blocks were produced by validators complying with OFAC sanctions lists, temporarily excluding certain transactions

## Why Proof of Work Matters

Proof of Work provides censorship resistance through physical decentralization:

**Permissionless participation:** Anyone with mining hardware and electricity can participate. There is no minimum stake, no approval process, and no identity requirement.

**Geographic distribution:** Mining operations are distributed globally, often in jurisdictions with minimal regulatory overlap. No single government can effectively control the majority of hash power.

**Transaction inclusion guarantee:** In PoW, miners are economically incentivized to include all fee-paying transactions regardless of content. Excluding valid transactions means forgoing fee revenue — a direct economic cost.

**No slashing risk:** PoW miners cannot have their equipment confiscated through protocol-level penalties. Validators in PoS systems face slashing, creating leverage for entities that can influence validator behavior.

## ETC's Position

Ethereum Classic's commitment to Proof of Work predates The Merge. The network's monetary policy (ECIP-1017), immutability principles, and resistance to irregular state changes all reflect the same philosophy: protocol rules should be enforced by physics and economics, not by social consensus among identifiable parties.

After The Merge, ETC absorbed significant hash power from former Ethereum miners, further strengthening its security. The network continues to operate as a permissionless, censorship-resistant platform where transaction inclusion depends solely on paying the required fee — not on the sender's identity or the transaction's purpose.`,
    date: '2022-10-15',
    category: 'Community',
    tags: ['Proof of Work', 'Censorship Resistance', 'The Merge', 'PoW vs PoS'],
    author: 'ETC Community',
    readTime: 5,
  },
  {
    slug: 'discord-migration',
    title: 'ETC Community Migrates to Discord',
    excerpt:
      'The Ethereum Classic community established Discord as its primary real-time communication platform, centralizing developer and community discussion.',
    content: `The Ethereum Classic community migrated its primary real-time communication to Discord, establishing a dedicated server as the main hub for developer coordination, community discussion, and ecosystem announcements.

## Why Discord

Prior to the migration, ETC community communication was fragmented across multiple platforms including Telegram groups, Reddit, and various chat services. This fragmentation made it difficult for newcomers to find the active community and for developers to coordinate effectively.

Discord offered several advantages:

- **Organized channels:** Topic-specific channels for development, mining, trading, and general discussion prevent conversations from getting lost in a single stream
- **Role-based access:** Contributors, developers, and moderators can be identified through roles, building trust and accountability
- **Bot integration:** Automated moderation, GitHub commit notifications, and price feeds keep the community informed without manual effort
- **Voice channels:** Real-time voice discussion for developer calls and community meetings
- **Persistent history:** Unlike some platforms, Discord maintains searchable message history

## Server Structure

The ETC Discord was organized to serve both technical and general community needs:

- **Announcements:** Network upgrades, security advisories, and ecosystem news
- **Development:** Protocol discussion, client development, smart contract development
- **Mining:** Hash rate discussion, pool recommendations, hardware setup
- **Community:** General discussion, newcomer questions, project showcases
- **Governance:** ECIP discussion and community proposals

## Moderation

The server implemented automated anti-spam and anti-phishing measures to protect users from scam links and impersonation attempts — a persistent problem across cryptocurrency communities. Moderation rules were published transparently, and moderation actions were logged for accountability.

## Joining

The ETC Discord remains the primary real-time communication channel for the Ethereum Classic community. Developers, miners, and community members can join through the link at [ethereumclassic.com/community](/community).`,
    date: '2019-11-01',
    category: 'Community',
    tags: ['Discord', 'Community', 'Communication', 'Social'],
    author: 'ETC Community',
    readTime: 3,
  },
  {
    slug: 'olympia-ecips-review',
    title: 'Olympia Network Upgrade: ECIP Review Begins',
    excerpt:
      'The Ethereum Classic community began formal review of the Olympia upgrade ECIPs, proposing EIP-1559 fee markets, a non-inflationary treasury, and on-chain governance.',
    content: `The Ethereum Classic community opened formal review of the Olympia network upgrade — the most significant protocol change proposed for ETC since its founding. The upgrade introduces EIP-1559 dynamic fee markets, a non-inflationary treasury mechanism, and an on-chain governance framework.

## The Olympia ECIPs

The upgrade is defined across multiple Ethereum Classic Improvement Proposals:

**ECIP-1111: Olympia Network Upgrade**
The meta-ECIP that activates the upgrade at a specified block height. It bundles the individual protocol changes into a single coordinated activation, ensuring all nodes upgrade simultaneously.

**ECIP-1112: Olympia Treasury Contract**
Defines an immutable, non-custodial smart contract that receives redirected base fees from EIP-1559 transactions. Unlike the original EIP-1559 design where base fees are burned, Olympia redirects them to fund public goods development. The treasury contract has no admin keys and no upgrade mechanism — funds can only be disbursed through the governance process.

**ECIP-1113: Olympia DAO Governance Framework**
Establishes a modular on-chain governance system for managing treasury funds. The framework defines proposal submission, voting mechanisms, and execution processes. Governance decisions are enforced by smart contracts, not by social consensus among off-chain parties.

**ECIP-1114: ETC Funding Proposal Process (ECFP)**
Standardizes the lifecycle for funding proposals — from submission through review, voting, and disbursement. This creates a transparent, repeatable process for allocating treasury resources to development, infrastructure, and ecosystem growth.

## Non-Inflationary Design

A critical design decision: Olympia does not create new tokens. Miners continue to receive their full block rewards and priority fees (tips). Only the base fee — which EIP-1559 would otherwise burn — is redirected to the treasury. This means the monetary policy established by ECIP-1017 remains unchanged: the 210.7 million ETC supply cap is preserved.

## Review Process

The ECIPs were published in Draft status, opening a formal review period for the community to evaluate the proposals. Core developers, miners, node operators, and community members were invited to provide feedback through the standard ECIP process.

## Testing Plan

The upgrade targets deployment on the Mordor testnet before mainnet activation, allowing thorough multi-client testing across Core-Geth, Besu, and Fukuii — the three ETC client implementations preparing Olympia support.`,
    date: '2025-09-01',
    category: 'Updates',
    tags: ['Olympia', 'ECIP', 'EIP-1559', 'Treasury', 'Governance', 'Network Upgrade'],
    author: 'ETC Community',
    readTime: 5,
  },
  {
    slug: 'gorgoroth-trials-fukuii',
    title: 'Gorgoroth Trials: Multi-Client Testing for Olympia',
    excerpt:
      'The Gorgoroth Trials testing campaign launched to validate multi-client compatibility between Fukuii, Core-Geth, and Besu ahead of the Olympia network upgrade.',
    content: `The Gorgoroth Trials — a structured testing campaign for the Olympia network upgrade — launched to validate multi-client compatibility across the three Ethereum Classic client implementations. Named after the volcanic plateau in Tolkien's Mordor, the trials serve as a proving ground for protocol changes before testnet and mainnet activation.

## Three-Client Testing

The Olympia upgrade requires simultaneous support from all three ETC clients:

- **Core-Geth:** The Go-based client derived from go-ethereum, maintained as the primary ETC implementation
- **Hyperledger Besu:** The Java-based enterprise client maintained under the Linux Foundation
- **Fukuii:** A new Scala 3 implementation built specifically for Ethereum Classic, bringing a third independent codebase to the network

Testing across three independent implementations provides strong assurance that the protocol specification is unambiguous and correctly implemented. If all three clients — written in different languages by different teams — produce identical results, the specification is likely correct.

## Test Configurations

The trials defined progressively complex network configurations:

1. **Single-client baseline:** Three Fukuii nodes verifying internal consistency
2. **Fukuii + Core-Geth:** Mixed network testing Go and Scala implementations
3. **Fukuii + Besu:** Mixed network testing Scala and Java implementations
4. **Full mixed network:** All three clients operating together — the ultimate compatibility test

Each configuration validated:
- Block production and propagation across client boundaries
- Transaction pool synchronization
- Protocol rule enforcement consistency
- Mining compatibility across implementations
- Network discovery and peer management

## What's Being Tested

The Gorgoroth Trials specifically target Olympia protocol changes:

- **EIP-1559 fee market:** All three clients must calculate identical base fees, validate transaction types consistently, and handle the fee market transition correctly
- **Treasury redirection:** Base fee routing to the treasury contract must produce identical state transitions
- **Fork activation:** The upgrade boundary must be handled identically by all clients

## From Testing to Activation

The Gorgoroth Trials represent the first phase of a multi-stage testing process. Successful completion leads to Mordor testnet activation, where the upgrade runs on a public proof-of-work network before mainnet deployment. This methodical approach — private testing, public testnet, then mainnet — follows established blockchain upgrade best practices.`,
    date: '2026-02-15',
    category: 'Updates',
    tags: ['Gorgoroth', 'Olympia', 'Multi-Client', 'Testing', 'Fukuii', 'Core-Geth', 'Besu'],
    author: 'ETC Community',
    readTime: 5,
  },

  // ===========================================
  // BATCH 4: EVM Ecosystem Monitoring
  // ===========================================

  {
    slug: 'evm-ecosystem-origins',
    title: 'The EVM Ecosystem: From One Chain to Many',
    excerpt:
      'How the Ethereum Virtual Machine grew from a single blockchain into a multi-chain standard, and Ethereum Classic\'s role as the original EVM chain.',
    content: `When the Ethereum blockchain split in July 2016 following the DAO fork, two chains emerged running the same virtual machine: Ethereum (the fork) and Ethereum Classic (the original chain). This was the first instance of the Ethereum Virtual Machine operating across multiple independent networks — a pattern that would eventually define an entire ecosystem.

## The EVM Standard

The Ethereum Virtual Machine (EVM) is a stack-based execution environment that processes smart contract bytecode. Any blockchain implementing the EVM specification can execute the same smart contracts, use the same development tools, and share the same developer knowledge base. This compatibility created a powerful network effect.

## Proliferation

After 2016, the EVM standard spread rapidly:

- **Binance Smart Chain (2020):** Launched as an EVM-compatible chain optimized for low fees, quickly attracting DeFi applications
- **Polygon (2020):** An EVM sidechain and later L2 solution providing Ethereum scaling
- **Avalanche C-Chain (2020):** An EVM-compatible chain within Avalanche's multi-chain architecture
- **Fantom (2019):** A DAG-based chain with EVM compatibility
- **Layer 2 rollups (2021+):** Optimism, Arbitrum, and zkSync brought EVM execution to rollup architectures

Today, dozens of chains run EVM-compatible execution environments, from independent L1s to Ethereum rollups to application-specific chains.

## ETC's Position

Ethereum Classic occupies a unique position in the EVM ecosystem:

**Original chain:** ETC preserved the state of the Ethereum blockchain as it existed before the DAO fork. Every transaction, contract deployment, and state change from Ethereum's launch through block 1,920,000 exists on ETC in its unaltered form.

**Largest PoW EVM:** Following Ethereum's transition to Proof of Stake in September 2022, ETC became the largest Proof of Work blockchain running the EVM. This makes it the only major EVM chain where block production is secured by physical computational work rather than staked capital.

**Full EVM compatibility:** ETC tracks relevant EVM improvements through its own upgrade process, maintaining compatibility with Solidity, Vyper, and the standard EVM development toolchain. Contracts written for any EVM chain can be deployed on ETC with minimal or no modification.

## Developer Portability

The shared EVM standard means developers can move between chains with near-zero switching costs. Tools like Hardhat, Foundry, and Remix work identically across EVM chains. ABIs, bytecode, and development patterns are universal. This portability benefits ETC directly — any developer experienced with Solidity on any EVM chain can build on ETC immediately.`,
    date: '2016-07-20',
    category: 'Ecosystem',
    tags: ['EVM', 'Ecosystem', 'Multi-Chain', 'Compatibility', 'Smart Contracts'],
    author: 'ETC Community',
    readTime: 5,
  },
  {
    slug: 'eth-shanghai-dencun-review',
    title: 'Ethereum Shanghai and Dencun: What ETC Evaluates',
    excerpt:
      'A review of Ethereum\'s Shanghai and Dencun upgrades and which EVM improvements ETC evaluates for potential adoption.',
    content: `Ethereum's Shanghai (April 2023) and Dencun (March 2024) upgrades introduced significant EVM changes. As the original EVM chain, Ethereum Classic actively monitors upstream improvements to evaluate which are beneficial for adoption — and which are irrelevant to a PoW chain.

## Shanghai (April 2023)

Shanghai's primary feature was enabling staking withdrawals (EIP-4895), which is PoS-specific and irrelevant to ETC. However, Shanghai also included EVM improvements that ETC evaluates:

- **EIP-3651 (Warm COINBASE):** Reduces the gas cost of accessing the block producer's address. Relevant to ETC miners and contracts that interact with block.coinbase.
- **EIP-3855 (PUSH0 instruction):** Adds a new opcode that pushes zero onto the stack, reducing bytecode size and gas costs. A pure EVM improvement applicable to any chain.
- **EIP-3860 (Limit and meter initcode):** Caps the maximum size of contract initialization code and charges gas proportionally. Improves predictability of contract deployment costs.

ETC's Spiral upgrade (February 2024) adopted equivalent EVM improvements, keeping the execution environment aligned with upstream where changes are chain-agnostic.

## Dencun (March 2024)

Dencun was primarily focused on Layer 2 scaling through blob transactions:

- **EIP-4844 (Proto-danksharding):** Introduced blob-carrying transactions designed for rollup data availability. This is L2-specific infrastructure with limited relevance to ETC, which operates as a standalone L1.
- **EIP-1153 (Transient storage):** Added TSTORE and TLOAD opcodes for storage that exists only during transaction execution, then is discarded. Useful for reentrancy locks and callback patterns — relevant to ETC smart contract development.
- **EIP-5656 (MCOPY instruction):** Added an efficient memory copy opcode, improving gas costs for memory-intensive operations. A pure EVM improvement.
- **EIP-6780 (SELFDESTRUCT restriction):** Limited the SELFDESTRUCT opcode to only send funds without deleting contract storage (unless called in the same transaction as creation). Improves state management predictability.

## ETC's Evaluation Process

ETC does not automatically adopt Ethereum upgrades. Each EIP is evaluated independently through the ECIP process:

1. **PoS-specific changes** (withdrawals, validator logic, blob transactions) are generally excluded
2. **Pure EVM improvements** (new opcodes, gas schedule changes) are strong candidates for adoption
3. **Consensus changes** are evaluated for PoW compatibility
4. **State management changes** are reviewed for impact on ETC's state model

This selective approach allows ETC to benefit from the broader EVM ecosystem's development efforts while maintaining its distinct protocol characteristics.`,
    date: '2024-03-13',
    category: 'Ecosystem',
    tags: ['Shanghai', 'Dencun', 'EIP-4844', 'EIP-1153', 'EVM Upgrades', 'Ethereum'],
    author: 'ETC Community',
    readTime: 5,
  },
  {
    slug: 'evm-cross-chain-interop',
    title: 'Cross-Chain Bridges and EVM Interoperability with ETC',
    excerpt:
      'An overview of cross-chain bridge infrastructure connecting Ethereum Classic to the broader EVM ecosystem, and the shared tooling that enables developer portability.',
    content: `Ethereum Classic's EVM compatibility extends beyond smart contract execution to encompass the entire development and infrastructure ecosystem. Cross-chain bridges, shared tooling, and universal standards connect ETC to the broader multi-chain landscape.

## Bridge Infrastructure

Cross-chain bridges allow assets to move between ETC and other EVM chains. These bridges typically operate by locking assets on one chain and minting wrapped representations on another:

- **ETC ↔ ETH bridges:** Allow movement of assets between Ethereum Classic and Ethereum, the two original EVM chains
- **Multi-chain bridges:** Some bridge protocols support ETC alongside dozens of other EVM chains, providing broad interoperability

Bridge usage enables ETC users to access DeFi protocols on other chains and allows users from other ecosystems to interact with ETC-native applications.

**Security note:** Cross-chain bridges are high-value targets for attackers. Users should exercise caution, use established bridges with proven track records, and understand the trust assumptions involved. Not all bridges are created equal — some rely on multisig committees, others on optimistic verification, and others on zero-knowledge proofs.

## Shared Development Tooling

The EVM standard means that the entire Ethereum development toolchain works on ETC:

**Development frameworks:**
- **Hardhat:** Compile, test, and deploy contracts with network configuration pointing to ETC RPC endpoints
- **Foundry:** Fast, Rust-based development toolkit works identically on ETC
- **Remix:** Browser-based IDE connects to ETC through MetaMask or direct RPC

**Languages:**
- **Solidity:** The primary EVM smart contract language compiles to identical bytecode regardless of target chain
- **Vyper:** Python-inspired EVM language works on any EVM chain

**Testing and verification:**
- Unit testing frameworks, fuzzing tools, and formal verification tools are chain-agnostic
- Contract verification on Blockscout follows the same process as on Etherscan

## Developer Skill Portability

A developer who has built on any EVM chain can build on ETC with no additional training. This is a significant strategic advantage:

- Smart contract patterns (ERC-20, ERC-721, proxy patterns) are universal
- ABI encoding and decoding is identical
- Transaction signing, gas estimation, and RPC methods follow the same standards
- Frontend libraries (ethers.js, viem, wagmi) connect to ETC by changing a single RPC URL

## RPC Compatibility

ETC nodes expose the standard Ethereum JSON-RPC API, meaning wallets, dApps, and tooling built for Ethereum can connect to ETC by simply pointing to an ETC RPC endpoint. Public RPC providers serve the ETC network, making it accessible to any application that supports custom EVM chains.`,
    date: '2023-06-01',
    category: 'Ecosystem',
    tags: ['Cross-Chain', 'Bridges', 'Interoperability', 'Tooling', 'Development'],
    author: 'ETC Community',
    readTime: 5,
  },
  {
    slug: 'evm-l1-landscape',
    title: 'The L1 EVM Landscape: Where Ethereum Classic Fits',
    excerpt:
      'A factual survey of the Layer 1 EVM ecosystem — from Ethereum PoS to Avalanche, BSC, and rollups — and ETC\'s unique position as the PoW original.',
    content: `The EVM ecosystem has grown from two chains in 2016 to dozens of Layer 1 blockchains and Layer 2 rollups. Each chain makes different trade-offs in consensus, decentralization, throughput, and governance. Understanding the landscape helps contextualize Ethereum Classic's position.

## Layer 1 EVM Chains

**Ethereum (PoS)**
The largest EVM chain by market capitalization and developer activity. Transitioned from Proof of Work to Proof of Stake in September 2022. Focuses on rollup-centric scaling through EIP-4844 blob transactions. Validator set is permissionless but requires 32 ETH minimum stake.

**Binance Smart Chain (PoSA)**
A high-throughput EVM chain using Proof of Staked Authority consensus with a limited validator set. Offers low fees and fast block times. Trade-off: smaller, permissioned validator set compared to fully decentralized chains.

**Avalanche C-Chain (PoS)**
An EVM-compatible chain within Avalanche's multi-chain architecture. Uses Snowball consensus for fast finality. Supports custom subnets for application-specific chains.

**Fantom (PoS)**
A DAG-based chain with EVM compatibility, offering fast transaction finality through its Lachesis consensus mechanism.

**Ethereum Classic (PoW)**
The original EVM chain, maintaining Proof of Work consensus and the unaltered pre-fork state. No minimum stake, no validator set, no identity requirements for block production.

## Layer 2 Rollups

Layer 2 solutions execute transactions off the main Ethereum chain while inheriting its security:

- **Optimistic rollups** (Optimism, Arbitrum): Assume transactions are valid, with a challenge period for fraud proofs
- **ZK rollups** (zkSync, Polygon zkEVM): Use zero-knowledge proofs to validate transaction batches cryptographically

Rollups are Ethereum-specific infrastructure. ETC operates as a standalone L1 and does not currently have or require L2 solutions.

## ETC's Distinguishing Characteristics

In the L1 landscape, ETC is differentiated by several factors:

**Consensus:** ETC is the only major EVM chain still secured by Proof of Work. Block production requires computational expenditure, making censorship economically costly rather than politically enforceable.

**Immutable ledger:** ETC has never performed an irregular state change. The ledger reflects every transaction exactly as executed, without retroactive modifications.

**Fixed supply:** ECIP-1017 established a hard cap of approximately 210.7 million ETC with a known, predictable emission schedule. No governance mechanism can alter this.

**No validator set:** There is no identifiable group of validators who can be compelled to filter transactions. Mining is permissionless and pseudonymous.

These characteristics are not claims of superiority — they are factual trade-offs. Higher throughput chains sacrifice some decentralization. More decentralized chains may have lower throughput. ETC has chosen maximum resistance to censorship and state modification as its primary design goals.`,
    date: '2024-01-15',
    category: 'Ecosystem',
    tags: ['L1', 'EVM Landscape', 'Comparison', 'Ethereum', 'BSC', 'Avalanche', 'Rollups'],
    author: 'ETC Community',
    readTime: 6,
  },
  {
    slug: 'eth-pectra-etc-implications',
    title: 'Ethereum Pectra Upgrade: Implications for ETC',
    excerpt:
      'Ethereum\'s Pectra upgrade introduced EOF and EIP-7702 account abstraction. Here\'s what ETC evaluates for potential future adoption.',
    content: `Ethereum's Pectra upgrade, activated in early 2025, introduced several significant changes to the EVM. As with previous Ethereum upgrades, the Ethereum Classic community evaluates each component independently to determine which improvements are worth adopting.

## EVM Object Format (EOF)

The most substantial EVM change in Pectra was the introduction of the EVM Object Format — a structured container format for smart contract bytecode:

- **Separation of code and data:** EOF separates executable code from static data within contract bytecode, enabling better analysis and optimization
- **Explicit function definitions:** Contracts declare functions with typed inputs and outputs, enabling static validation before deployment
- **Removal of dynamic jumps:** EOF eliminates JUMP and JUMPI in favor of structured control flow, making bytecode more analyzable and potentially more gas-efficient
- **Versioned bytecode:** EOF containers include a version field, allowing future EVM improvements without breaking existing contracts

EOF is a pure EVM improvement with no dependency on Proof of Stake. It improves the execution environment for smart contracts regardless of the underlying consensus mechanism. This makes it a strong candidate for ETC evaluation.

**Trade-off:** EOF is a complex change that introduces a dual-track execution environment — legacy bytecode and EOF bytecode must both be supported indefinitely. The implementation burden is significant across all client implementations.

## EIP-7702: Account Abstraction

EIP-7702 introduced a new transaction type that allows externally owned accounts (EOAs) to temporarily delegate to smart contract code during a transaction:

- Users can batch multiple operations into a single transaction
- Gas sponsorship becomes possible — a third party can pay gas fees on behalf of a user
- Custom validation logic (multi-sig, social recovery) can be applied to regular accounts

Account abstraction improves user experience significantly, particularly for onboarding new users who may not hold native tokens for gas. This is a chain-agnostic improvement applicable to any EVM network.

## What ETC Evaluates

For each Pectra component, ETC's evaluation criteria remain consistent:

| Component | PoS Dependency | EVM Improvement | ETC Relevance |
|-----------|---------------|-----------------|---------------|
| EOF | None | Yes — structured bytecode | High — improves contract analysis |
| EIP-7702 | None | Yes — account abstraction | High — improves UX |
| Blob throughput increases | PoS/L2 specific | No | Low — ETC is standalone L1 |
| Validator changes | PoS specific | No | None |

## Protocol Stewardship

ETC's approach to upstream monitoring reflects active protocol stewardship. Rather than either blindly adopting or ignoring Ethereum improvements, the community evaluates each change on its technical merits and compatibility with ETC's design principles. Changes that improve the EVM execution environment benefit all EVM users and are prioritized for adoption. Changes tied to PoS consensus or L2 infrastructure are documented but not adopted.

This ongoing evaluation ensures ETC remains a modern, capable EVM platform while maintaining its distinct identity as a Proof of Work chain with an immutable ledger.`,
    date: '2025-03-15',
    category: 'Ecosystem',
    tags: ['Pectra', 'EOF', 'EIP-7702', 'Account Abstraction', 'EVM Upgrades', 'Ethereum'],
    author: 'ETC Community',
    readTime: 5,
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
  Development: 'Protocol internals, technical education, and developer resources',
}

export const categoryIcons: Record<ArticleCategory, string> = {
  Updates: '🔄',
  Security: '🛡️',
  Ecosystem: '🌐',
  Community: '👥',
  Development: '⚙️',
}

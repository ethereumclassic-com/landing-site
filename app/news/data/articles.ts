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
The 20% reduction per era is ETC's equivalent of Bitcoin's halving events, though with a gentler reduction curve. The community calls these reductions "fifthenings" (keeping four-fifths of the previous reward).

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

The 20% reduction from 5 ETC to 4 ETC per block marked the first "fifthening" — the beginning of ETC's deflationary emission curve.

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

Unlike Bitcoin's abrupt halvings (50% reduction), ETC's fifthenings are a gentler 20% reduction. This provides miners with a more gradual revenue adjustment while still ensuring the supply converges to a hard cap.

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
    title: "Era 5 'Fifthening': Block Reward Drops to 2.048 ETC",
    excerpt:
      'At block 20,000,001, Ethereum Classic enters its fifth monetary era, reducing block rewards from 2.56 ETC to 2.048 ETC per block.',
    content: `On May 31, 2024, at block 20,000,001, Ethereum Classic entered Era 5 of its fixed monetary policy — the fifth "fifthening" since the ECIP-1017 emission schedule was established.

## The Numbers

| Parameter | Era 4 | Era 5 |
|-----------|-------|-------|
| Block reward | 2.56 ETC | 2.048 ETC |
| Uncle reward | 0.08 ETC | 0.064 ETC |
| Daily emission | ~16,896 ETC | ~13,517 ETC |
| Annual emission | ~6.17M ETC | ~4.93M ETC |

## Cumulative Supply

By the start of Era 5, approximately 144.0 million ETC had been minted — roughly 68% of the ~210.7 million maximum supply. The remaining ~66.7 million ETC will be emitted over subsequent eras, with each era producing 20% fewer coins than the last.

## Why "Fifthening"

The ETC community uses the term "fifthening" because each era keeps four-fifths (80%) of the previous reward — or equivalently, reduces by one-fifth (20%). This distinguishes ETC's gentler reduction curve from Bitcoin's more aggressive halvings.

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
    tags: ['Monetary Policy', 'Era 5', 'Fifthening', 'Block Reward'],
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

The upgrade activated smoothly across all ETC clients. No chain splits or network disruptions were observed. Miners and node operators had upgraded their software in advance following the successful Mordor testnet activation.

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
Zero chain splits, zero client incompatibilities. All three ETC clients (Core-Geth, Besu, Fukuii) processed the fork boundary without issues.

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

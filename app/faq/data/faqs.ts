export interface FAQ {
  question: string
  answer: string
}

export interface FAQSection {
  id: string
  audience: string
  description: string
  icon: string
  faqs: FAQ[]
}

export const faqSections: FAQSection[] = [
  {
    id: 'users',
    audience: 'Users',
    description: 'Getting started with wallets, transactions, and using Ethereum Classic.',
    icon: '👤',
    faqs: [
      {
        question: 'What is Ethereum Classic (ETC)?',
        answer:
          'Ethereum Classic is the original Ethereum blockchain that maintained the unaltered transaction history after the 2016 DAO fork. It is a decentralized, Proof of Work smart contract platform with a fixed monetary policy capping supply at approximately 210.7 million ETC. ETC runs the Ethereum Virtual Machine (EVM), meaning it supports the same smart contracts and developer tooling as Ethereum and other EVM-compatible chains.',
      },
      {
        question: 'How do I add ETC to MetaMask?',
        answer:
          'Open MetaMask, click the network dropdown, then "Add Network." Enter: Network Name: Ethereum Classic, RPC URL: https://etc.rivet.link, Chain ID: 61, Currency Symbol: ETC, Block Explorer: https://etc.blockscout.com. Alternatively, visit chainlist.org/chain/61 and click "Add to MetaMask" for automatic configuration.',
      },
      {
        question: 'My transaction is stuck. What do I do?',
        answer:
          'A stuck transaction usually means the gas price was too low or there is a nonce gap. To fix it, send a new transaction with the same nonce but a higher gas price. In MetaMask, you can use the "Speed Up" button on a pending transaction. If that does not work, send a 0 ETC transaction to yourself with the stuck nonce and a higher gas price to clear the queue.',
      },
      {
        question: 'How do I view my transactions on the blockchain?',
        answer:
          'Use the Blockscout explorer at etc.blockscout.com. Paste your wallet address in the search bar to see all transactions, token balances, and contract interactions. Each transaction shows the sender, recipient, amount, gas used, and confirmation status.',
      },
      {
        question: 'How do I buy ETC?',
        answer:
          'ETC is available on major exchanges including Coinbase, Kraken, Binance, and OKX. You can also use decentralized exchanges like ETCswap directly on the ETC network. For fiat on-ramps, Brale offers ACH bank transfers to purchase ClassicUSD (USC), which you can then swap for ETC on ETCswap.',
      },
      {
        question: 'Which wallets support Ethereum Classic?',
        answer:
          'Hardware wallets (Trezor, Ledger, SafePal), browser extensions (MetaMask), and mobile wallets (Trust Wallet, Exodus, Coinomi) all support ETC. MetaMask requires manual network configuration with Chain ID 61 and RPC URL https://etc.rivet.link. Hardware wallets provide the strongest security for long-term storage.',
      },
      {
        question: 'What dApps are available on ETC?',
        answer:
          'The ETC ecosystem includes ETCswap (V2 and V3 decentralized exchanges), ETCswap Launchpad (token launch platform), Classic USD (USC stablecoin), WrappedEther.org (WETC), and Classic OS (economic dashboard). All approved dApps are listed on the Apps page at ethereumclassic.com/apps.',
      },
      {
        question: 'Is there DeFi on Ethereum Classic?',
        answer:
          'Yes. ETCswap V2 and V3 provide automated market maker (AMM) functionality for token swaps and liquidity provision. Classic USD (USC) is a 1:1 USD-backed stablecoin on ETC. WETC (Wrapped ETC) enables ETC to be used in DeFi protocols that require ERC-20 tokens. Liquidity providers can earn trading fees by depositing assets into ETCswap pools.',
      },
      {
        question: 'Can I stake ETC?',
        answer:
          'No. Ethereum Classic uses Proof of Work consensus, not Proof of Stake. There is no native staking mechanism. However, you can earn yield by providing liquidity on ETCswap — depositing token pairs into liquidity pools to earn a share of trading fees. This is sometimes called "liquidity mining" but it is fundamentally different from PoS staking.',
      },
      {
        question: 'Has ETC been 51% attacked? Is it safe now?',
        answer:
          'ETC experienced 51% attacks in 2020, which led to the adoption of ECBP-1100 (Modified Exponential Subjective Scoring / MESS) as a temporary defense. MESS was later deprecated as the network hashrate grew significantly after Ethereum miners migrated to ETC following the September 2022 Merge. Current network hashrate makes 51% attacks economically prohibitive.',
      },
      {
        question: 'How many confirmations do I need for ETC deposits?',
        answer:
          'Confirmation requirements vary by service. Most exchanges require 40,000+ confirmations for ETC deposits (approximately 6 days) as a security measure. For peer-to-peer transactions with known parties, 20-50 confirmations (~5-12 minutes) provides reasonable security. Higher-value transactions warrant more confirmations.',
      },
      {
        question: 'What is gas on Ethereum Classic?',
        answer:
          'Gas is the unit measuring computational work required to execute transactions and smart contract operations on ETC. Every operation (sending ETC, interacting with contracts, deploying code) costs a specific amount of gas. You pay for gas in ETC at a price you set — higher gas prices incentivize miners to include your transaction faster. A simple ETC transfer costs 21,000 gas.',
      },
      {
        question: 'What is the difference between ETC and ETH?',
        answer:
          'ETC and ETH share the same origin (the Ethereum launch in 2015) and the same virtual machine (EVM). They diverged in July 2016 over the DAO fork. Key differences: ETC uses Proof of Work, ETH uses Proof of Stake. ETC has a fixed supply cap (~210.7M), ETH has no hard cap. ETC has never performed an irregular state change. Both run the same smart contract languages (Solidity, Vyper) and development tools.',
      },
    ],
  },
  {
    id: 'investors',
    audience: 'Investors',
    description: 'Market information, monetary policy, and investment considerations.',
    icon: '📊',
    faqs: [
      {
        question: 'Where can I buy and trade ETC?',
        answer:
          'ETC trades on most major cryptocurrency exchanges including Coinbase, Kraken, Binance, OKX, KuCoin, Gate.io, and Bybit. For decentralized trading directly on the ETC network, ETCswap V2 and V3 offer non-custodial swaps. Grayscale offers the Ethereum Classic Trust (ETCG) for investors who prefer traditional brokerage access.',
      },
      {
        question: 'What is the ETC monetary policy?',
        answer:
          'ECIP-1017, adopted in March 2017, established a Bitcoin-like fixed monetary policy. Block rewards reduce by 20% every 5 million blocks (~2.5 years). The emission schedule produces a hard cap of approximately 210.7 million ETC. Current era (Era 5, starting block 20,000,001) rewards miners 2.048 ETC per block. This fixed, predictable supply schedule cannot be altered by governance.',
      },
      {
        question: 'What is the elevator pitch for ETC?',
        answer:
          'Ethereum Classic is the original Ethereum blockchain — a Proof of Work smart contract platform with a fixed supply cap, an immutable transaction history, and permissionless access. It combines Bitcoin\'s monetary principles (fixed supply, PoW security) with Ethereum\'s programmability (EVM, smart contracts). It is the largest Proof of Work EVM chain.',
      },
      {
        question: 'What makes ETC different from other cryptocurrencies?',
        answer:
          'ETC occupies a unique intersection: it has the programmability of Ethereum (full EVM compatibility) with the monetary properties of Bitcoin (fixed supply, Proof of Work). Unlike Ethereum, ETC never performed an irregular state change — the ledger is immutable. Unlike Bitcoin, ETC supports smart contracts. No other major cryptocurrency combines all three properties: PoW security, EVM programmability, and ledger immutability.',
      },
      {
        question: 'Is ETC a good investment?',
        answer:
          'EthereumClassic.com does not provide investment advice. Cryptocurrency investments carry significant risk including potential total loss. ETC\'s fixed monetary policy, Proof of Work security model, and EVM compatibility are objective protocol properties — their relevance to investment decisions is for each individual to assess. Always do your own research and consult a financial advisor.',
      },
    ],
  },
  {
    id: 'miners',
    audience: 'Miners',
    description: 'Hardware, software, pools, and profitability for mining ETC.',
    icon: '⛏️',
    faqs: [
      {
        question: 'What hardware do I need to mine ETC?',
        answer:
          'ETC uses the ETCHash algorithm, which is compatible with both GPUs (4GB+ VRAM for current DAG size) and ASIC miners. Popular GPUs include NVIDIA RTX 3060/3070/3080 and AMD RX 6600/6700/6800. ASIC options include iPollo V1 Mini, Jasminer X4, and Bitmain E9. ASICs offer higher efficiency but less flexibility than GPUs. See our Mining Hardware guide for detailed comparisons.',
      },
      {
        question: 'What mining software works with ETC?',
        answer:
          'Popular miners include lolMiner (AMD + NVIDIA), T-Rex (NVIDIA), TeamRedMiner (AMD), and GMiner (NVIDIA). All support the ETCHash algorithm. Configure your miner with your pool\'s stratum address, your wallet address, and worker name. Most miners auto-detect the ETCHash algorithm when connecting to an ETC pool.',
      },
      {
        question: 'I was mining ETH. How do I switch to ETC?',
        answer:
          'Since Ethereum moved to Proof of Stake in September 2022, your ETH mining hardware can mine ETC with minimal reconfiguration. Change your mining software\'s pool address to an ETC pool, update your wallet address to an ETC address, and ensure ETCHash (not ETHash) is selected. The DAG size is similar, so hardware that mined ETH should work for ETC.',
      },
      {
        question: 'What is a mining pool?',
        answer:
          'A mining pool combines the hash power of multiple miners to find blocks more frequently, then distributes rewards proportionally to each miner\'s contributed hash rate. Solo mining requires significant hash power to find blocks regularly — pools provide more consistent (but smaller) payouts. Pools typically charge a 1-2% fee on rewards.',
      },
      {
        question: 'Which pools support ETC mining?',
        answer:
          'Major ETC mining pools include F2Pool, 2Miners, K1Pool, Poolin, EMCD, and GTPool. Choose a pool based on fee structure, payout method (PPS, PPLNS, PROP), minimum payout threshold, server locations, and current pool hashrate. Distributing across multiple pools helps network decentralization.',
      },
      {
        question: 'How do I choose the best mining pool?',
        answer:
          'Consider: fee rate (typically 1-2%), payout method (PPS for consistent payouts, PPLNS for potentially higher but variable payouts), minimum payout threshold, server proximity (lower latency = fewer stale shares), and pool hashrate relative to total network (avoid pools with >40% of network hash). Check the Mining Pools page for current options.',
      },
      {
        question: 'Is mining ETC profitable?',
        answer:
          'Profitability depends on your hardware efficiency, electricity cost, ETC price, and network difficulty. Use our Profitability Calculator to estimate returns based on your specific setup. Key factors: electricity cost below $0.10/kWh is generally needed for GPU profitability, ASICs are more efficient per watt, and network difficulty adjusts with total hash power.',
      },
      {
        question: 'What is the ETCHash algorithm?',
        answer:
          'ETCHash is a modified version of ETHash (Ethereum\'s original mining algorithm). The modification, introduced via ECIP-1099 (Thanos fork, November 2020), reduced the DAG epoch length to keep the DAG size manageable for 4GB GPUs. This ensures broader hardware accessibility for mining while maintaining the same security properties as ETHash.',
      },
      {
        question: 'What is the current block reward?',
        answer:
          'As of Era 5 (starting block 20,000,001 in May 2024), the block reward is 2.048 ETC per block. Rewards decrease by 20% every 5 million blocks under ECIP-1017. The next reduction to 1.6384 ETC will occur at block 25,000,001. Visit our Supply page for the full emission schedule and countdown to the next reduction.',
      },
      {
        question: 'Should I use ASICs or GPUs for ETC mining?',
        answer:
          'ASICs (like iPollo V1 Mini or Jasminer X4) offer higher hashrate per watt, meaning better efficiency and potentially higher profit margins. GPUs are more flexible — you can mine other coins or repurpose them. For dedicated ETC mining with low electricity costs, ASICs typically have better ROI. For miners who want hardware flexibility, GPUs are the safer choice.',
      },
      {
        question: 'Will ETC ever switch to Proof of Stake?',
        answer:
          'No. Ethereum Classic\'s commitment to Proof of Work is a foundational principle, not a temporary technical choice. The network explicitly chose to maintain PoW when Ethereum transitioned to PoS. ETC\'s security model, censorship resistance properties, and permissionless participation all depend on Proof of Work. There are no proposals to change this.',
      },
    ],
  },
  {
    id: 'developers',
    audience: 'Developers',
    description: 'Building, deploying, and contributing to Ethereum Classic.',
    icon: '💻',
    faqs: [
      {
        question: 'What kinds of applications can I build on ETC?',
        answer:
          'Anything you can build on Ethereum or any EVM chain. ETC runs the same Ethereum Virtual Machine, supporting Solidity and Vyper smart contracts. This includes DeFi protocols, NFT platforms, DAOs, token systems, on-chain games, and any other smart contract application. The full EVM toolchain (Hardhat, Foundry, Remix, OpenZeppelin) works on ETC.',
      },
      {
        question: 'What are the differences between developing for ETH vs ETC?',
        answer:
          'Minimal. Both use the same EVM, same smart contract languages, same development tools, and same ABI encoding. Key differences: ETC uses Chain ID 61 (vs ETH\'s 1), the RPC endpoint is different (etc.rivet.link), and ETC does not include some PoS-specific EIPs. Your existing Solidity contracts can be deployed on ETC by simply changing the network configuration.',
      },
      {
        question: 'How do I deploy a smart contract to ETC?',
        answer:
          'Configure your development framework (Hardhat, Foundry, or Remix) with Chain ID 61 and RPC URL https://etc.rivet.link. Deploy using the same workflow as any EVM chain. For testing, use the Mordor testnet (Chain ID 63, RPC: https://rpc.mordor.etccooperative.org). Get test ETC from the Mordor faucet. Verify your contract on etc.blockscout.com after deployment.',
      },
      {
        question: 'What public RPC endpoints are available?',
        answer:
          'The primary public endpoint is https://etc.rivet.link (mainnet). For Mordor testnet: https://rpc.mordor.etccooperative.org. For a comprehensive, performance-monitored list of RPC endpoints, visit chainlist.org/chain/61 (mainnet) or chainlist.org/chain/63 (Mordor). These endpoints support the standard Ethereum JSON-RPC API.',
      },
      {
        question: 'Are there grants or funding available for ETC development?',
        answer:
          'The Olympia DAO governance framework (currently in development) will establish a non-inflationary treasury funded by EIP-1559 base fees, with on-chain governance for funding allocation. Until Olympia activates, development funding comes from community initiatives and individual contributors. Check the ETC Community channels for current opportunities.',
      },
      {
        question: 'How does the ECIP process work?',
        answer:
          'The Ethereum Classic Improvement Proposal (ECIP) process is how protocol changes are proposed, discussed, and adopted. Anyone can author an ECIP. Proposals go through stages: Draft → Last Call → Accepted → Final. ECIPs are reviewed in Core Developer Calls. The process is documented at the ECIPs repository and mirrors Ethereum\'s EIP process with ETC-specific adaptations.',
      },
      {
        question: 'What development tools work with ETC?',
        answer:
          'All standard EVM tools: Hardhat and Foundry for development/testing, Remix for browser-based development, OpenZeppelin for audited contract libraries, Blockscout for contract verification and blockchain exploration, MetaMask for wallet interaction, and ethers.js/viem/wagmi for frontend integration. No ETC-specific tooling is needed — standard EVM tools work by changing the RPC endpoint.',
      },
    ],
  },
  {
    id: 'community',
    audience: 'Community',
    description: 'Contributing, participating, and getting involved with ETC.',
    icon: '🤝',
    faqs: [
      {
        question: 'Do I need to be a developer to contribute?',
        answer:
          'No. The ETC ecosystem needs writers, translators, educators, testers, designers, community moderators, and advocates. Non-technical contributions like documentation improvements, tutorial creation, social media engagement, and event organization are valuable. Technical contributions like running a node, testing upgrades, and reporting bugs are also welcome without being a core developer.',
      },
      {
        question: 'How do I join the ETC community?',
        answer:
          'The primary community channels are: Discord (real-time chat and development discussion), Reddit r/EthereumClassic (long-form discussion), Twitter @eth_classic (announcements), GitHub (code contributions), and Telegram (regional groups in multiple languages). Links to all channels are available at ethereumclassic.com/community.',
      },
      {
        question: 'What tasks can I help with?',
        answer:
          'Current community needs include: running ETC nodes (Core-Geth, Besu, or Fukuii) to strengthen network decentralization, testing protocol upgrades on the Mordor testnet, creating educational content, translating documentation, building dApps, providing liquidity on ETCswap, and participating in governance discussions through the ECIP process.',
      },
      {
        question: 'Where does the ETC community hang out?',
        answer:
          'Discord is the most active real-time channel for both developers and general community. Reddit is used for longer discussions and news sharing. Twitter/X for announcements and ecosystem updates. Telegram has active groups in English, Spanish, Chinese, Russian, Vietnamese, and other languages. GitHub for code-level discussion and contributions.',
      },
      {
        question: 'How do I suggest changes to the ETC protocol?',
        answer:
          'Write an Ethereum Classic Improvement Proposal (ECIP). Fork the ECIPs repository, create your proposal following the template, and submit a pull request. ECIPs are discussed in community channels and reviewed during Core Developer Calls. Anyone can author an ECIP — there are no gatekeepers. The process is transparent and documented in the repository.',
      },
      {
        question: 'Are there ETC community events?',
        answer:
          'The ETC community participates in cryptocurrency conferences, hosts online community calls, and organizes regional meetups. Core Developer Calls discuss protocol development and are open to observers. Check the Community page and Discord announcements channel for upcoming events and recordings of past calls.',
      },
    ],
  },
]

export function getFAQSection(id: string): FAQSection | undefined {
  return faqSections.find((section) => section.id === id)
}

export function getAllFAQSections(): FAQSection[] {
  return faqSections
}

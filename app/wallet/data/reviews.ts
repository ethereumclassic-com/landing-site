// Wallet reviews data for Ethereum Classic
// Comprehensive reviews with ratings, pros/cons, and detailed assessments

export interface WalletRating {
  overall: number // 1-5 stars
  security: number
  usability: number
  features: number
  support: number
}

export interface WalletReview {
  id: string
  name: string
  slug: string
  tagline: string
  logo?: string
  website: string
  rating: WalletRating
  pros: string[]
  cons: string[]
  summary: string
  fullReview: string
  etcSupport: {
    native: boolean // Built-in ETC support
    networkSetup: 'automatic' | 'manual' | 'not-required'
    etcSpecificFeatures: string[]
  }
  pricing: {
    type: 'free' | 'paid' | 'freemium'
    price?: string
    notes?: string
  }
  lastUpdated: string
  reviewDate: string
  verdict: 'highly-recommended' | 'recommended' | 'acceptable' | 'not-recommended'
  bestFor: string[]
}

export const walletReviews: WalletReview[] = [
  // Hardware Wallets
  {
    id: 'trezor',
    name: 'Trezor',
    slug: 'trezor',
    tagline: 'The Original Hardware Wallet',
    website: 'https://trezor.io',
    rating: {
      overall: 4.8,
      security: 5.0,
      usability: 4.5,
      features: 4.5,
      support: 4.8,
    },
    pros: [
      'Fully open-source firmware for transparency',
      'Excellent track record with no known successful attacks',
      'Native ETC support built into Trezor Suite',
      'Supports 1000+ cryptocurrencies',
      'Regular firmware updates and active development',
      'Works with popular wallets like MetaMask',
    ],
    cons: [
      'No Bluetooth connectivity (USB only)',
      'Touchscreen only on Model T (higher price)',
      'No mobile app for direct management',
    ],
    summary: 'Trezor is the gold standard for hardware wallet security. With fully open-source firmware and native ETC support through Trezor Suite, it provides unmatched transparency and ease of use for Ethereum Classic holders.',
    fullReview: `Trezor pioneered the hardware wallet industry in 2014 and continues to lead with its commitment to open-source security. The Trezor Model One and Model T both offer excellent ETC support through the Trezor Suite desktop application.

**Security Architecture**
Trezor devices use a secure element design with PIN protection, passphrase support, and a recovery seed system. All firmware is open-source, allowing security researchers to audit the code. The device never exposes private keys to the connected computer.

**ETC Experience**
Ethereum Classic is natively supported in Trezor Suite. Adding ETC accounts is straightforward - simply click "Add account" and select Ethereum Classic. The interface shows your balance, transaction history, and allows sending/receiving with ease.

**Setup Process**
Initial setup takes about 15 minutes. You'll create a PIN, write down your 12 or 24-word recovery seed, and optionally set up a passphrase for additional security. The process is well-guided with clear instructions.

**DeFi & dApp Connectivity**
Trezor works seamlessly with MetaMask and other web3 wallets. For ETC dApps, you can connect your Trezor through MetaMask configured for the ETC network. Transaction signing happens on the device for maximum security.

**Customer Support**
Trezor offers comprehensive documentation, video tutorials, and responsive email support. The community forum is active and helpful for troubleshooting.`,
    etcSupport: {
      native: true,
      networkSetup: 'automatic',
      etcSpecificFeatures: ['Native account management', 'Transaction signing', 'Token support', 'MetaMask integration'],
    },
    pricing: {
      type: 'paid',
      price: '$69 - $219',
      notes: 'Model One starts at $69, Model T at $219',
    },
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-10',
    verdict: 'highly-recommended',
    bestFor: ['Security-focused users', 'Long-term holders', 'Open-source advocates'],
  },
  {
    id: 'ledger',
    name: 'Ledger',
    slug: 'ledger',
    tagline: 'Industry-Leading Secure Element Technology',
    website: 'https://ledger.com',
    rating: {
      overall: 4.6,
      security: 4.8,
      usability: 4.5,
      features: 4.8,
      support: 4.2,
    },
    pros: [
      'Secure Element chip (CC EAL5+ certified)',
      'Bluetooth connectivity on Nano X and Stax',
      'Mobile app support (Ledger Live)',
      'Large ecosystem with 5500+ supported assets',
      'Sleek, portable design',
      'Built-in buy/sell/swap features',
    ],
    cons: [
      'Closed-source secure element firmware',
      'Ledger Recover feature controversial (optional)',
      '2020 customer data breach (addressed)',
      'Higher price point for full features',
    ],
    summary: 'Ledger offers a polished hardware wallet experience with excellent mobile support through Ledger Live. Native ETC support and secure element technology make it a top choice for users who value convenience alongside security.',
    fullReview: `Ledger has established itself as a leading hardware wallet manufacturer with over 6 million devices sold. The Ledger Nano S Plus, Nano X, and Stax all support Ethereum Classic natively through Ledger Live.

**Security Architecture**
Ledger uses a certified secure element chip (CC EAL5+) to protect private keys. While the secure element firmware is closed-source, the device's security has been validated by independent audits. The BOLOS operating system provides isolation between applications.

**ETC Experience**
ETC is fully supported in Ledger Live. Install the Ethereum Classic app on your device, create an account in Ledger Live, and you're ready to manage your ETC. The interface is clean and intuitive with clear transaction signing flows.

**Mobile Experience**
Ledger Live mobile (iOS/Android) provides full wallet functionality when paired with a Bluetooth-enabled device (Nano X or Stax). Check balances, send transactions, and manage accounts from your phone with hardware security.

**Ecosystem Features**
Ledger Live includes built-in services for buying, selling, and swapping crypto through partners. While these features primarily focus on major assets, ETC can be managed alongside your other holdings in one interface.

**Privacy Consideration**
Following the 2020 data breach affecting customer information (not funds), Ledger has significantly improved their security practices. Consider using a separate email when purchasing.`,
    etcSupport: {
      native: true,
      networkSetup: 'automatic',
      etcSpecificFeatures: ['Ledger Live integration', 'Mobile support', 'Transaction signing', 'MetaMask/Rabby compatibility'],
    },
    pricing: {
      type: 'paid',
      price: '$79 - $399',
      notes: 'Nano S Plus $79, Nano X $149, Stax $399',
    },
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-08',
    verdict: 'recommended',
    bestFor: ['Mobile users', 'Multi-asset holders', 'Convenience-focused users'],
  },

  // Browser Wallets
  {
    id: 'metamask',
    name: 'MetaMask',
    slug: 'metamask',
    tagline: 'The Most Popular Web3 Wallet',
    website: 'https://metamask.io',
    rating: {
      overall: 4.5,
      security: 4.0,
      usability: 4.8,
      features: 4.5,
      support: 4.2,
    },
    pros: [
      'Extremely easy to set up and use',
      'Excellent dApp compatibility',
      'Available on all major browsers and mobile',
      'Hardware wallet integration (Trezor, Ledger)',
      'Active development and regular updates',
      'Large community and extensive documentation',
    ],
    cons: [
      'Software wallet (less secure than hardware)',
      'ETC requires manual network configuration',
      'Potential phishing risks for beginners',
      'Can be targeted by browser exploits',
    ],
    summary: 'MetaMask is the gateway to Web3 for millions of users. While ETC requires manual network setup, once configured, it provides an excellent experience for interacting with ETC dApps and managing your tokens.',
    fullReview: `MetaMask has become synonymous with Web3, boasting over 30 million monthly active users. Originally built for Ethereum, it fully supports Ethereum Classic through its custom network feature.

**Security Considerations**
As a browser extension wallet, MetaMask stores encrypted keys locally. While convenient, this means your security depends on your browser and computer security. Always use a strong password and consider a hardware wallet for significant holdings.

**ETC Setup**
Adding ETC to MetaMask requires manual network configuration:
1. Open Settings → Networks → Add Network
2. Enter ETC mainnet details:
   - Network Name: Ethereum Classic
   - RPC URL: https://etc.rivet.link
   - Chain ID: 61
   - Symbol: ETC
   - Explorer: https://etc.blockscout.com

**dApp Experience**
MetaMask excels at dApp connectivity. Connect to ETC DeFi protocols, NFT marketplaces, and other applications with a single click. Transaction previews show you exactly what you're signing.

**Mobile App**
MetaMask mobile provides the same functionality as the browser extension. Sync between devices using your recovery phrase or import accounts individually.

**Hardware Wallet Integration**
For enhanced security, connect a Trezor or Ledger device to MetaMask. This gives you hardware wallet security with MetaMask's excellent dApp compatibility.`,
    etcSupport: {
      native: false,
      networkSetup: 'manual',
      etcSpecificFeatures: ['Custom RPC support', 'Full dApp connectivity', 'Token management', 'Hardware wallet pairing'],
    },
    pricing: {
      type: 'free',
    },
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-05',
    verdict: 'highly-recommended',
    bestFor: ['dApp users', 'Beginners', 'Multi-chain users'],
  },
  {
    id: 'rabby',
    name: 'Rabby',
    slug: 'rabby',
    tagline: 'Security-First Browser Wallet',
    website: 'https://rabby.io',
    rating: {
      overall: 4.4,
      security: 4.5,
      usability: 4.3,
      features: 4.4,
      support: 4.0,
    },
    pros: [
      'Pre-transaction security checks',
      'Transaction simulation before signing',
      'Multi-chain support with automatic network switching',
      'Open-source codebase',
      'Native ETC support',
      'No seed phrase exposure during setup',
    ],
    cons: [
      'Smaller user base than MetaMask',
      'Less dApp compatibility in some cases',
      'Desktop only (no mobile app yet)',
      'Newer wallet with shorter track record',
    ],
    summary: 'Rabby brings enterprise-grade security features to everyday users. Its transaction simulation and security warnings help prevent costly mistakes, making it an excellent choice for security-conscious ETC users.',
    fullReview: `Rabby was developed by the DeBank team with a focus on transaction security. It shows you exactly what will happen before you sign, helping prevent scams and costly errors.

**Security Features**
Rabby's standout feature is pre-transaction analysis. Before signing, you see:
- Token balance changes
- Approval amounts
- Contract interaction details
- Risk warnings for suspicious contracts

**ETC Support**
Ethereum Classic is supported natively in Rabby. The wallet automatically detects when you're interacting with an ETC dApp and switches networks. No manual configuration needed.

**User Experience**
The interface is clean and informative. Transaction history shows detailed information about each interaction. The security score system helps identify risky addresses.

**Hardware Wallet Support**
Rabby works with Ledger and Trezor devices, providing hardware security with Rabby's security analysis features.

**Comparison to MetaMask**
While MetaMask has broader compatibility and mobile support, Rabby offers superior security features for desktop users who want extra protection against scams and errors.`,
    etcSupport: {
      native: true,
      networkSetup: 'automatic',
      etcSpecificFeatures: ['Auto network detection', 'Transaction simulation', 'Security analysis', 'Hardware wallet support'],
    },
    pricing: {
      type: 'free',
    },
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-03',
    verdict: 'recommended',
    bestFor: ['Security-conscious users', 'DeFi users', 'Advanced users'],
  },
  {
    id: 'brave-wallet',
    name: 'Brave Wallet',
    slug: 'brave-wallet',
    tagline: 'Built-in Browser Wallet',
    website: 'https://brave.com/wallet',
    rating: {
      overall: 4.2,
      security: 4.3,
      usability: 4.5,
      features: 4.0,
      support: 4.0,
    },
    pros: [
      'Built into Brave browser (no extension needed)',
      'Native ETC support',
      'No extension attack surface',
      'Integrated with Brave ecosystem',
      'Hardware wallet support',
      'Open-source',
    ],
    cons: [
      'Requires using Brave browser',
      'Fewer features than dedicated wallets',
      'Smaller ecosystem than MetaMask',
      'Less dApp compatibility',
    ],
    summary: 'Brave Wallet offers a secure, integrated experience for Brave browser users. Native ETC support and no extension requirements make it a convenient choice for those already in the Brave ecosystem.',
    fullReview: `Brave Wallet is built directly into the Brave browser, eliminating extension-related security risks. For Brave users, it provides a seamless crypto experience with native ETC support.

**Security Advantages**
As a built-in wallet, Brave Wallet avoids the extension attack surface that affects MetaMask and similar wallets. Your keys are managed by the browser itself, and Brave's privacy-first approach extends to the wallet.

**ETC Experience**
Ethereum Classic is natively supported. Add an ETC account from the network selector and you're ready to go. The interface shows balances, recent transactions, and provides send/receive functionality.

**Browser Integration**
The wallet integrates with Brave's Web3 features. When you visit an ETC dApp, Brave can connect automatically. Transaction signing happens in a secure popup.

**Limitations**
While convenient, Brave Wallet has fewer features than dedicated wallets. Swap functionality is limited, and some advanced dApps may not fully support Brave Wallet connections.

**Who Should Use It**
If you already use Brave browser and want a simple, secure wallet without managing extensions, Brave Wallet is an excellent choice for ETC.`,
    etcSupport: {
      native: true,
      networkSetup: 'automatic',
      etcSpecificFeatures: ['Native account support', 'dApp connectivity', 'Hardware wallet integration'],
    },
    pricing: {
      type: 'free',
    },
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-01',
    verdict: 'recommended',
    bestFor: ['Brave users', 'Privacy-focused users', 'Casual users'],
  },

  // Mobile Wallets
  {
    id: 'trust-wallet',
    name: 'Trust Wallet',
    slug: 'trust-wallet',
    tagline: 'The Most Trusted Mobile Wallet',
    website: 'https://trustwallet.com',
    rating: {
      overall: 4.4,
      security: 4.2,
      usability: 4.8,
      features: 4.5,
      support: 4.2,
    },
    pros: [
      'Very beginner-friendly interface',
      'Native ETC support',
      'Built-in DeFi browser',
      'Staking for supported coins',
      'Open-source core',
      'Wide asset support (millions of tokens)',
    ],
    cons: [
      'Mobile-only (browser extension is newer)',
      'Backed by Binance (centralization concerns)',
      'Limited hardware wallet integration',
      'Some features require Trust Wallet token',
    ],
    summary: 'Trust Wallet provides an excellent mobile experience for ETC users. Native support, built-in dApp browser, and intuitive design make it perfect for managing ETC on the go.',
    fullReview: `Trust Wallet has grown to become one of the most popular mobile wallets with over 60 million users. Originally acquired by Binance, it maintains an open-source core and operates independently.

**Mobile Experience**
Trust Wallet excels at mobile usability. The interface is clean and intuitive, making it easy for beginners to send, receive, and manage their ETC. Transaction confirmations are clear and informative.

**ETC Support**
Ethereum Classic is natively supported. Your ETC balance appears automatically, and you can receive ETC using your address or QR code. The wallet correctly identifies ETC tokens and shows them in your portfolio.

**DeFi Browser**
The built-in dApp browser allows you to interact with ETC DeFi protocols directly from your phone. Browse decentralized exchanges, lending platforms, and other ETC applications.

**Security**
Keys are stored encrypted on your device. Biometric authentication (Face ID/fingerprint) provides convenient access while maintaining security. Back up your recovery phrase and store it safely.

**Considerations**
While excellent for mobile use, consider pairing Trust Wallet with a hardware wallet for significant holdings. The Binance connection may concern some users, though the wallet itself is non-custodial.`,
    etcSupport: {
      native: true,
      networkSetup: 'automatic',
      etcSpecificFeatures: ['Native support', 'Built-in dApp browser', 'Token detection', 'WalletConnect support'],
    },
    pricing: {
      type: 'free',
    },
    lastUpdated: '2025-01-15',
    reviewDate: '2024-12-28',
    verdict: 'recommended',
    bestFor: ['Mobile users', 'Beginners', 'DeFi explorers'],
  },
  {
    id: 'exodus',
    name: 'Exodus',
    slug: 'exodus',
    tagline: 'Beautiful Multi-Asset Wallet',
    website: 'https://exodus.com',
    rating: {
      overall: 4.3,
      security: 4.0,
      usability: 4.8,
      features: 4.5,
      support: 4.5,
    },
    pros: [
      'Stunning visual design',
      'Native ETC support',
      'Desktop, mobile, and browser extension',
      'Built-in exchange',
      'Excellent customer support',
      'Trezor integration',
    ],
    cons: [
      'Closed-source code',
      'Higher exchange fees',
      'No multi-sig support',
      'Cannot set custom transaction fees on some assets',
    ],
    summary: 'Exodus combines beautiful design with practical functionality. Native ETC support across all platforms and excellent customer support make it a solid choice for users who value aesthetics and ease of use.',
    fullReview: `Exodus stands out with its gorgeous interface and focus on user experience. Available on desktop, mobile, and as a browser extension, it provides a consistent experience across all platforms.

**Design Philosophy**
Exodus prioritizes beautiful, intuitive design. The portfolio view shows your holdings with real-time values and charts. Transaction flows are smooth and easy to understand.

**ETC Support**
Ethereum Classic is fully supported. Send, receive, and track your ETC with ease. The wallet displays your balance in both ETC and your chosen fiat currency.

**Built-in Exchange**
Exchange crypto directly in the wallet. While convenient, exchange rates include a markup. For better rates, use external exchanges, but for quick swaps, the built-in feature works well.

**Cross-Platform Sync**
Your wallet syncs across devices. Start a transaction on desktop, and see it reflected on mobile. This seamless experience is a key Exodus strength.

**Security Trade-offs**
Exodus is closed-source, which some security-focused users dislike. However, keys are encrypted locally and never leave your device. For enhanced security, link a Trezor hardware wallet.

**Customer Support**
Exodus provides excellent support with 24/7 live chat and comprehensive help articles. This level of support is rare in the crypto wallet space.`,
    etcSupport: {
      native: true,
      networkSetup: 'automatic',
      etcSpecificFeatures: ['Full send/receive', 'Portfolio tracking', 'Trezor integration', 'Cross-platform sync'],
    },
    pricing: {
      type: 'free',
      notes: 'Exchange fees apply for in-app swaps',
    },
    lastUpdated: '2025-01-15',
    reviewDate: '2024-12-25',
    verdict: 'recommended',
    bestFor: ['Design-conscious users', 'Multi-platform users', 'Support-focused users'],
  },
  {
    id: 'coinomi',
    name: 'Coinomi',
    slug: 'coinomi',
    tagline: 'Privacy-First Multi-Chain Wallet',
    website: 'https://coinomi.com',
    rating: {
      overall: 4.1,
      security: 4.2,
      usability: 4.0,
      features: 4.0,
      support: 3.8,
    },
    pros: [
      'Strong privacy features (no KYC, IP masking)',
      'Native ETC support since 2016',
      'One of the oldest multi-chain wallets',
      'Desktop and mobile support',
      'Built-in exchange',
      '1000+ supported assets',
    ],
    cons: [
      'Interface feels dated',
      'Closed-source since 2019',
      'Limited dApp support',
      'Customer support can be slow',
    ],
    summary: 'Coinomi is a veteran wallet with strong privacy credentials and long-standing ETC support. While the interface shows its age, it remains a solid choice for privacy-conscious users.',
    fullReview: `Coinomi launched in 2014 and has supported Ethereum Classic since 2016, making it one of the earliest multi-chain wallets with ETC support.

**Privacy Focus**
Coinomi emphasizes privacy with no KYC requirements and IP address masking. Your transaction requests are anonymized before reaching blockchain nodes.

**ETC History**
Coinomi was one of the first wallets to support ETC after the Ethereum/ETC split. This long history means battle-tested ETC support with years of reliability.

**User Interface**
The interface is functional but dated compared to newer wallets. Recent updates have improved usability, but it lacks the polish of Exodus or Trust Wallet.

**Built-in Services**
Exchange crypto through built-in partners. Buy crypto with fiat. These features work but aren't as seamless as in newer wallets.

**Security Concerns**
Coinomi went closed-source in 2019, which concerned some users. However, the wallet has maintained a clean security record. A 2019 incident where seed phrases were sent to a spell-check server was quickly addressed.

**Verdict**
For privacy-focused users who want a reliable, long-standing wallet with native ETC support, Coinomi remains a valid choice. Those prioritizing modern features should consider alternatives.`,
    etcSupport: {
      native: true,
      networkSetup: 'automatic',
      etcSpecificFeatures: ['Native support since 2016', 'Privacy-focused transactions', 'Built-in exchange'],
    },
    pricing: {
      type: 'free',
    },
    lastUpdated: '2025-01-15',
    reviewDate: '2024-12-20',
    verdict: 'acceptable',
    bestFor: ['Privacy-focused users', 'Long-term holders', 'Multi-asset holders'],
  },

  // Web Wallets
  {
    id: 'myetherwallet',
    name: 'MyEtherWallet',
    slug: 'myetherwallet',
    tagline: 'The Original Ethereum Web Wallet',
    website: 'https://myetherwallet.com',
    rating: {
      overall: 4.2,
      security: 4.3,
      usability: 4.0,
      features: 4.2,
      support: 4.0,
    },
    pros: [
      'Open-source and audited',
      'Native ETC network support',
      'Excellent hardware wallet integration',
      'Advanced features (contract interaction, etc.)',
      'Educational resources',
      'MEW wallet mobile app',
    ],
    cons: [
      'Web interface can be overwhelming',
      'Phishing risk (always verify URL)',
      'Requires understanding of blockchain basics',
      'Software wallet options less secure than hardware',
    ],
    summary: 'MyEtherWallet (MEW) provides powerful, open-source tools for managing ETC. Native network support and excellent hardware wallet integration make it great for advanced users, though beginners may find it complex.',
    fullReview: `MyEtherWallet has been a cornerstone of the Ethereum ecosystem since 2015 and provides excellent Ethereum Classic support. Its open-source nature and feature depth make it valuable for advanced users.

**ETC Network Support**
MEW natively supports Ethereum Classic. Switch to the ETC network from the network selector and interact with your ETC using the same interface you'd use for ETH.

**Access Methods**
Connect via:
- MEW Wallet mobile app
- Hardware wallets (Ledger, Trezor, etc.)
- WalletConnect
- Browser extension (MEW CX)
- Keystore file (less recommended)

**Advanced Features**
MEW offers features beyond basic sending:
- Smart contract interaction
- Message signing
- Offline transaction signing
- Batch transactions
- ENS support

**Security Best Practices**
Always access MEW through the official URL (myetherwallet.com). Bookmark it and never click links from emails or messages. MEW is a frequent phishing target.

**Hardware Wallet Recommendation**
For the best MEW experience with ETC, use a hardware wallet. This provides MEW's powerful features with hardware security.`,
    etcSupport: {
      native: true,
      networkSetup: 'automatic',
      etcSpecificFeatures: ['Network switching', 'Full feature support', 'Hardware wallet integration', 'Contract interaction'],
    },
    pricing: {
      type: 'free',
    },
    lastUpdated: '2025-01-15',
    reviewDate: '2024-12-15',
    verdict: 'recommended',
    bestFor: ['Advanced users', 'Hardware wallet users', 'Contract developers'],
  },
  {
    id: 'emerald-wallet',
    name: 'Emerald Wallet',
    slug: 'emerald-wallet',
    tagline: 'Built for Ethereum Classic',
    website: 'https://emerald.cash',
    rating: {
      overall: 4.0,
      security: 4.2,
      usability: 3.8,
      features: 3.5,
      support: 4.0,
    },
    pros: [
      'Built specifically for ETC by ETC Cooperative',
      'Open-source with transparent development',
      'Hardware wallet support (Ledger)',
      'Direct connection to ETC network',
      'No third-party dependencies for core features',
    ],
    cons: [
      'Desktop only (no mobile)',
      'Limited to ETC and ETH',
      'Smaller development team',
      'Less polished than commercial alternatives',
      'Fewer features than multi-chain wallets',
    ],
    summary: 'Emerald Wallet is the official ETC Cooperative wallet, built specifically for Ethereum Classic. While limited in scope compared to multi-chain alternatives, it offers dedicated ETC support from the community that maintains the network.',
    fullReview: `Emerald Wallet is developed by the ETC Cooperative, the organization that funds Ethereum Classic core development. This makes it the most "official" ETC wallet available.

**ETC-First Development**
Unlike multi-chain wallets where ETC is one of many supported assets, Emerald Wallet prioritizes ETC. Updates and features are designed with ETC users in mind.

**Open Source**
The entire codebase is open-source and available on GitHub. Development discussions happen in the open, and the community can contribute improvements.

**Hardware Wallet Support**
Connect a Ledger device for hardware security. This combination provides dedicated ETC software with hardware wallet security.

**Limitations**
Emerald Wallet supports only ETC and ETH. If you hold multiple cryptocurrencies, you'll need additional wallets. The interface, while functional, lacks the polish of commercial alternatives.

**Who Should Use It**
- ETC purists who want dedicated software
- Users who prefer community-developed tools
- Those who value open-source transparency
- Desktop users who don't need mobile access

**Future Development**
The ETC Cooperative continues to develop Emerald Wallet with plans for additional features. Check the GitHub repository for the latest updates.`,
    etcSupport: {
      native: true,
      networkSetup: 'not-required',
      etcSpecificFeatures: ['Built for ETC', 'Direct network connection', 'ETC-first development', 'Community support'],
    },
    pricing: {
      type: 'free',
    },
    lastUpdated: '2025-01-15',
    reviewDate: '2024-12-10',
    verdict: 'acceptable',
    bestFor: ['ETC enthusiasts', 'Open-source advocates', 'Desktop users'],
  },
]

// Helper functions
export function getReviewBySlug(slug: string): WalletReview | undefined {
  return walletReviews.find((r) => r.slug === slug)
}

export function getReviewById(id: string): WalletReview | undefined {
  return walletReviews.find((r) => r.id === id)
}

export function getReviewsByVerdict(verdict: WalletReview['verdict']): WalletReview[] {
  return walletReviews.filter((r) => r.verdict === verdict)
}

export function getTopRatedReviews(limit: number = 5): WalletReview[] {
  return [...walletReviews].sort((a, b) => b.rating.overall - a.rating.overall).slice(0, limit)
}

export function getAllReviewSlugs(): string[] {
  return walletReviews.map((r) => r.slug)
}

export function formatRating(rating: number): string {
  return rating.toFixed(1)
}

export function getRatingLabel(rating: number): string {
  if (rating >= 4.5) return 'Excellent'
  if (rating >= 4.0) return 'Very Good'
  if (rating >= 3.5) return 'Good'
  if (rating >= 3.0) return 'Fair'
  return 'Poor'
}

export function getVerdictLabel(verdict: WalletReview['verdict']): string {
  switch (verdict) {
    case 'highly-recommended':
      return 'Highly Recommended'
    case 'recommended':
      return 'Recommended'
    case 'acceptable':
      return 'Acceptable'
    case 'not-recommended':
      return 'Not Recommended'
  }
}

export function getVerdictColor(verdict: WalletReview['verdict']): { bg: string; text: string } {
  switch (verdict) {
    case 'highly-recommended':
      return { bg: 'bg-green-500/10', text: 'text-green-400' }
    case 'recommended':
      return { bg: 'bg-blue-500/10', text: 'text-blue-400' }
    case 'acceptable':
      return { bg: 'bg-amber-500/10', text: 'text-amber-400' }
    case 'not-recommended':
      return { bg: 'bg-red-500/10', text: 'text-red-400' }
  }
}

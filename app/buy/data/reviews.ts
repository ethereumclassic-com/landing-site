// Exchange reviews data for Ethereum Classic
// Comprehensive reviews with ratings, pros/cons, and detailed assessments

export interface ExchangeRating {
  overall: number // 1-5 stars
  security: number
  fees: number
  liquidity: number
  userExperience: number
  support: number
}

export interface ExchangeReview {
  id: string
  name: string
  slug: string
  tagline: string
  logo?: string
  website: string
  type: 'CEX' | 'DEX'
  rating: ExchangeRating
  pros: string[]
  cons: string[]
  summary: string
  fullReview: string
  etcSupport: {
    tradingPairs: string[]
    depositMethods: string[]
    withdrawalFee: string
    etcSpecificFeatures: string[]
  }
  fees: {
    trading: string
    deposit: string
    withdrawal: string
    notes?: string
  }
  regions: string[]
  kycRequired: boolean
  paymentMethods: string[]
  lastUpdated: string
  reviewDate: string
  verdict: 'highly-recommended' | 'recommended' | 'acceptable' | 'not-recommended'
  bestFor: string[]
}

export const exchangeReviews: ExchangeReview[] = [
  // DEX - Native ETC
  {
    id: 'etcswap',
    name: 'ETCswap',
    slug: 'etcswap',
    tagline: 'The Native ETC Decentralized Exchange',
    website: 'https://etcswap.org',
    type: 'DEX',
    rating: {
      overall: 4.7,
      security: 5.0,
      fees: 4.5,
      liquidity: 4.0,
      userExperience: 4.5,
      support: 4.5,
    },
    pros: [
      'Fully decentralized - no KYC required',
      'Native ETC chain - no bridging needed',
      'Self-custody throughout the trade',
      'V3 concentrated liquidity for better rates',
      'Open source and transparent',
      'Community-governed protocol',
    ],
    cons: [
      'Lower liquidity than major CEXs',
      'Requires wallet setup knowledge',
      'Gas fees for each transaction',
      'Limited trading pairs compared to CEXs',
    ],
    summary: 'ETCswap is the premier decentralized exchange native to Ethereum Classic. With both V2 classic AMM and V3 concentrated liquidity, it offers the most trustless way to trade ETC tokens while maintaining full custody of your assets.',
    fullReview: `ETCswap represents the pinnacle of decentralized trading on Ethereum Classic. As a native DEX, it eliminates the need for wrapped tokens or bridges, providing a pure ETC trading experience.

**Protocol Architecture**
ETCswap offers two versions: V2 uses the classic constant-product AMM model, while V3 introduces concentrated liquidity positions for improved capital efficiency. Both are battle-tested designs proven on other chains.

**Trading Experience**
The interface is clean and intuitive, familiar to anyone who's used Uniswap. Connect your wallet (MetaMask, Trust Wallet, etc.), select your tokens, and swap. Slippage protection and price impact warnings help prevent costly mistakes.

**Liquidity & Pairs**
Primary pairs include ETC/USDC, ETC/USC (native stablecoin), and ETC/WBTC. While liquidity is growing, larger trades may experience higher slippage. Consider splitting large orders.

**Security Model**
As a non-custodial protocol, your funds never leave your wallet until the swap executes. Smart contracts are open source and follow established, audited patterns. No admin keys or central points of failure.

**Fees**
Standard 0.3% swap fee goes to liquidity providers. Gas costs vary with network congestion but are typically very low on ETC compared to ETH mainnet.

**Best Use Cases**
ETCswap excels for privacy-conscious traders, those avoiding CEX custody risks, and anyone wanting to trade ETC-native tokens without leaving the ecosystem.`,
    etcSupport: {
      tradingPairs: ['ETC/USDC', 'ETC/USC', 'ETC/WBTC', 'Various ERC-20 tokens'],
      depositMethods: ['Wallet connection'],
      withdrawalFee: 'Gas only',
      etcSpecificFeatures: ['Native chain', 'No bridging', 'Full self-custody', 'ETC token ecosystem'],
    },
    fees: {
      trading: '0.3%',
      deposit: 'Free',
      withdrawal: 'Gas only (~$0.01)',
      notes: 'All fees go to liquidity providers',
    },
    regions: ['Global'],
    kycRequired: false,
    paymentMethods: ['Wallet'],
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-10',
    verdict: 'highly-recommended',
    bestFor: ['Privacy-focused traders', 'Self-custody advocates', 'ETC token trading', 'Small to medium trades'],
  },

  // Top CEXs
  {
    id: 'binance',
    name: 'Binance',
    slug: 'binance',
    tagline: "World's Largest Crypto Exchange",
    website: 'https://www.binance.com',
    type: 'CEX',
    rating: {
      overall: 4.6,
      security: 4.5,
      fees: 4.8,
      liquidity: 5.0,
      userExperience: 4.5,
      support: 4.0,
    },
    pros: [
      'Highest ETC liquidity globally',
      'Lowest trading fees (0.1% or less)',
      'Multiple ETC trading pairs',
      'Advanced trading features (futures, margin)',
      'Mobile app with full functionality',
      'Earn products for ETC',
    ],
    cons: [
      'KYC required for most features',
      'Not available in all US states',
      'Custodial - exchange holds your keys',
      'Complex interface can overwhelm beginners',
      'Occasional withdrawal delays during high volume',
    ],
    summary: 'Binance offers the deepest ETC liquidity and lowest fees of any exchange. With multiple trading pairs and advanced features, it is the go-to platform for serious ETC traders seeking the best execution.',
    fullReview: `Binance dominates global crypto trading, and their ETC markets are among the most liquid available. For traders prioritizing execution and fees, it's hard to beat.

**Trading Features**
Spot trading is just the beginning. Binance offers ETC futures (up to 75x leverage), margin trading, and various order types including OCO, trailing stop, and more. The depth charts show excellent order book liquidity.

**ETC Markets**
Primary pairs: ETC/USDT (highest volume), ETC/BTC, ETC/USDC, ETC/FDUSD, ETC/ETH, and ETC/TRY. The USDT pair typically sees $4M+ daily volume, ensuring minimal slippage even for large orders.

**Fee Structure**
Base fee of 0.1% for spot trading, reduced with BNB payment or higher VIP tiers. Withdrawal fee is a flat 0.01 ETC regardless of amount. Very competitive for both small and large traders.

**Security**
Binance uses cold storage for the majority of funds, 2FA requirements, and maintains a SAFU insurance fund. They've successfully handled security incidents in the past and made users whole.

**User Experience**
The interface offers both "Lite" and "Pro" modes. Lite mode is suitable for beginners doing simple spot trades, while Pro provides the full suite of professional trading tools.

**Limitations**
Regulatory restrictions mean some features aren't available in certain jurisdictions, particularly parts of the US. Always verify availability in your region.`,
    etcSupport: {
      tradingPairs: ['ETC/USDT', 'ETC/BTC', 'ETC/USDC', 'ETC/FDUSD', 'ETC/ETH', 'ETC/TRY'],
      depositMethods: ['ETC Network', 'Internal transfer'],
      withdrawalFee: '0.01 ETC',
      etcSpecificFeatures: ['Spot trading', 'Futures', 'Margin', 'Earn products', 'Convert'],
    },
    fees: {
      trading: '0.1%',
      deposit: 'Free',
      withdrawal: '0.01 ETC',
      notes: 'Fees reduced with BNB or VIP status',
    },
    regions: ['Global', 'Limited US'],
    kycRequired: true,
    paymentMethods: ['Card', 'Bank', 'Crypto', 'P2P'],
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-10',
    verdict: 'highly-recommended',
    bestFor: ['High-volume traders', 'Advanced trading', 'Best liquidity', 'Low fees'],
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    slug: 'coinbase',
    tagline: 'Most Trusted US Exchange',
    website: 'https://www.coinbase.com',
    type: 'CEX',
    rating: {
      overall: 4.4,
      security: 4.8,
      fees: 3.5,
      liquidity: 4.5,
      userExperience: 4.8,
      support: 4.5,
    },
    pros: [
      'Publicly traded company (NASDAQ: COIN)',
      'Excellent regulatory compliance',
      'Very user-friendly interface',
      'Strong security track record',
      'Easy bank/card integration in US',
      'Coinbase One subscription eliminates fees',
    ],
    cons: [
      'Higher fees without Coinbase One',
      'Advanced features require Coinbase Advanced',
      'Limited ETC trading pairs',
      'Slower support during high-demand periods',
    ],
    summary: 'Coinbase is the premier choice for US-based ETC buyers seeking regulatory compliance and ease of use. While fees are higher than competitors, the platform\'s security and simplicity justify the premium for many users.',
    fullReview: `For US residents, Coinbase offers unmatched legitimacy and ease of use. As a publicly traded company with insurance on custodial funds, it provides peace of mind that smaller exchanges cannot match.

**Regulatory Standing**
Coinbase is registered with FinCEN, holds state money transmitter licenses, and is subject to SEC oversight as a public company. This regulatory clarity is valuable for users concerned about compliance.

**Trading Experience**
The main Coinbase app is designed for simplicity - buying ETC takes just a few taps. For more advanced trading, Coinbase Advanced (formerly Pro) provides limit orders, charts, and professional tools.

**ETC Support**
ETC is well-supported with direct fiat pairs. You can buy with USD directly, and deposits/withdrawals are processed on the native ETC chain. No wrapped tokens or extra steps required.

**Fee Structure**
Standard Coinbase fees can be steep (up to 1.5% + spread). The Coinbase One subscription ($30/month) eliminates trading fees entirely, making it economical for regular traders.

**Security**
98% of funds stored in offline cold storage, with insurance on custodial holdings. Two-factor authentication, vault options for time-delayed withdrawals, and excellent account recovery processes.

**Best For**
US residents prioritizing compliance and simplicity over lowest fees. Particularly good for recurring purchases (DCA) through their scheduled buy feature.`,
    etcSupport: {
      tradingPairs: ['ETC/USD', 'ETC/USDT', 'ETC/EUR'],
      depositMethods: ['ETC Network', 'Internal transfer'],
      withdrawalFee: 'Network fee',
      etcSpecificFeatures: ['Direct fiat purchase', 'Recurring buys', 'Coinbase Card rewards'],
    },
    fees: {
      trading: '0% - 1.5%',
      deposit: 'Free (crypto), varies (fiat)',
      withdrawal: 'Network fee',
      notes: 'Coinbase One ($30/mo) gives 0% trading fees',
    },
    regions: ['US', 'UK', 'EU', 'Global'],
    kycRequired: true,
    paymentMethods: ['Card', 'Bank', 'Crypto', 'PayPal'],
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-10',
    verdict: 'highly-recommended',
    bestFor: ['US residents', 'Beginners', 'Regulatory compliance', 'Recurring purchases'],
  },
  {
    id: 'kraken',
    name: 'Kraken',
    slug: 'kraken',
    tagline: 'Security-First Exchange Since 2011',
    website: 'https://www.kraken.com',
    type: 'CEX',
    rating: {
      overall: 4.5,
      security: 4.9,
      fees: 4.2,
      liquidity: 4.3,
      userExperience: 4.2,
      support: 4.5,
    },
    pros: [
      'Excellent security track record since 2011',
      'Never been hacked',
      'Proof of reserves (on-chain verification)',
      'Good regulatory standing',
      'Competitive fees',
      '24/7 live chat support',
    ],
    cons: [
      'Interface less intuitive than Coinbase',
      'Limited payment methods in some regions',
      'Lower liquidity than Binance',
      'Wire transfers only for large fiat deposits',
    ],
    summary: 'Kraken is one of the oldest and most secure crypto exchanges operating today. With proof of reserves and a spotless security record, it is an excellent choice for security-conscious ETC holders.',
    fullReview: `Founded in 2011, Kraken has never suffered a security breach - a remarkable achievement in the crypto industry. This track record, combined with proof of reserves, makes it a top choice for security-focused traders.

**Security Philosophy**
Kraken pioneered proof of reserves in the crypto industry, allowing users to cryptographically verify that the exchange holds their funds. 95% of funds are kept in air-gapped cold storage across multiple geographic locations.

**Trading Platform**
Kraken Pro offers a professional trading interface with advanced charting, multiple order types, and margin trading. The standard platform is simpler but still feature-rich compared to competitors.

**ETC Markets**
Primary pairs include ETC/USD, ETC/EUR, and ETC/BTC. Liquidity is solid for retail trades, though very large orders may need to use the OTC desk for best execution.

**Fee Structure**
Maker/taker fee model starting at 0.16%/0.26% for low-volume traders, scaling down to 0%/0.1% for high-volume users. Competitive but not the absolute lowest available.

**Verification Levels**
Kraken uses tiered verification - basic verification for crypto deposits/withdrawals, full verification for fiat. The process is thorough but straightforward.

**Support**
24/7 live chat support is a standout feature. Response times are generally quick, and support staff are knowledgeable about technical issues.`,
    etcSupport: {
      tradingPairs: ['ETC/USD', 'ETC/EUR', 'ETC/BTC'],
      depositMethods: ['ETC Network', 'Wire transfer', 'Crypto'],
      withdrawalFee: '0.005 ETC',
      etcSpecificFeatures: ['Spot trading', 'Margin trading', 'Staking rewards'],
    },
    fees: {
      trading: '0.16% - 0.26%',
      deposit: 'Free (crypto), varies (fiat)',
      withdrawal: '0.005 ETC',
      notes: 'Volume-based discounts available',
    },
    regions: ['US', 'UK', 'EU', 'Global'],
    kycRequired: true,
    paymentMethods: ['Bank', 'Wire', 'Crypto'],
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-10',
    verdict: 'highly-recommended',
    bestFor: ['Security-focused users', 'Proof of reserves', 'Long-term holders', '24/7 support'],
  },
  {
    id: 'mexc',
    name: 'MEXC',
    slug: 'mexc',
    tagline: 'Zero Maker Fee Exchange',
    website: 'https://www.mexc.com',
    type: 'CEX',
    rating: {
      overall: 4.2,
      security: 4.0,
      fees: 4.8,
      liquidity: 4.3,
      userExperience: 4.2,
      support: 3.8,
    },
    pros: [
      '0% maker fees - industry leading',
      'No mandatory KYC for basic trading',
      'Fast listing of new tokens',
      'High ETC liquidity',
      'Good mobile app',
      'MX token benefits',
    ],
    cons: [
      'Less regulatory clarity than US exchanges',
      'Support can be slow',
      'Not available in some jurisdictions',
      'Some features region-locked',
    ],
    summary: 'MEXC offers exceptional value with zero maker fees and optional KYC for basic trading. It is ideal for cost-conscious traders comfortable with a less regulated environment.',
    fullReview: `MEXC has rapidly grown to become a major player in crypto trading, primarily due to its aggressive fee structure and early token listings. For ETC traders, it offers excellent value.

**Fee Innovation**
MEXC's 0% maker fee policy is industry-leading. Combined with a low 0.2% taker fee, it's one of the most cost-effective platforms for ETC trading. This makes it particularly attractive for market makers and high-frequency traders.

**KYC Policy**
Basic trading is available without KYC verification, appealing to privacy-conscious users. Higher withdrawal limits and additional features require identity verification.

**ETC Markets**
Strong liquidity on ETC/USDT with consistent $2M+ daily volume. Also offers ETC/BTC and ETC/USDC pairs. Sufficient depth for most retail and moderate institutional trades.

**Platform Features**
Full suite of trading tools including spot, margin, and futures. The interface is functional if not the most polished. Mobile apps are well-designed and full-featured.

**Security Measures**
Standard security features including 2FA, withdrawal whitelist, and anti-phishing codes. Cold storage for majority of funds. No major security incidents reported.

**Considerations**
Less regulatory oversight than US-based exchanges. Users should assess their own comfort level with the regulatory environment.`,
    etcSupport: {
      tradingPairs: ['ETC/USDT', 'ETC/BTC', 'ETC/USDC'],
      depositMethods: ['ETC Network', 'Crypto'],
      withdrawalFee: '0.01 ETC',
      etcSpecificFeatures: ['Spot trading', 'Futures', 'Margin'],
    },
    fees: {
      trading: '0% maker / 0.2% taker',
      deposit: 'Free',
      withdrawal: '0.01 ETC',
      notes: 'Best fees in the industry',
    },
    regions: ['Global'],
    kycRequired: false,
    paymentMethods: ['Card', 'Crypto', 'P2P'],
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-10',
    verdict: 'recommended',
    bestFor: ['Fee-conscious traders', 'No-KYC trading', 'Market makers', 'Active traders'],
  },
  {
    id: 'gate-io',
    name: 'Gate.io',
    slug: 'gate-io',
    tagline: 'Feature-Rich Global Exchange',
    website: 'https://www.gate.io',
    type: 'CEX',
    rating: {
      overall: 4.1,
      security: 4.0,
      fees: 4.2,
      liquidity: 4.0,
      userExperience: 4.0,
      support: 4.0,
    },
    pros: [
      'Extensive trading pair selection',
      'Copy trading feature',
      'NFT marketplace',
      'Good ETC liquidity',
      'Proof of reserves',
      'Competitive fees',
    ],
    cons: [
      'Complex interface',
      'Not available in US',
      'Some features overwhelming for beginners',
      'Support response times vary',
    ],
    summary: 'Gate.io offers a comprehensive trading platform with unique features like copy trading. While complex, it provides good ETC liquidity and competitive fees for experienced traders.',
    fullReview: `Gate.io, founded in 2013, has evolved into a feature-rich exchange catering to experienced traders. With proof of reserves and extensive features, it's a solid ETC trading venue.

**Platform Features**
Beyond basic spot trading, Gate.io offers futures, options, copy trading, lending, staking, and an NFT marketplace. The breadth of features rivals any major exchange.

**Copy Trading**
A standout feature allowing users to automatically mirror successful traders' positions. Useful for those wanting exposure without active management.

**ETC Markets**
Good liquidity on ETC/USDT with multiple additional pairs available. Sufficient for most trading needs, though Binance still leads in absolute volume.

**Security**
Gate.io publishes proof of reserves and maintains standard security practices. 2FA, withdrawal whitelists, and cold storage for majority of funds.

**Fee Structure**
Standard 0.2% fee, reduced with GT token holdings or VIP tiers. Competitive but not the lowest available.

**Limitations**
The platform is not available to US residents. The interface can be overwhelming with so many features - beginners may prefer simpler alternatives.`,
    etcSupport: {
      tradingPairs: ['ETC/USDT', 'ETC/BTC', 'ETC/ETH'],
      depositMethods: ['ETC Network', 'Crypto'],
      withdrawalFee: '0.01 ETC',
      etcSpecificFeatures: ['Spot trading', 'Futures', 'Copy trading', 'Lending'],
    },
    fees: {
      trading: '0.2%',
      deposit: 'Free',
      withdrawal: '0.01 ETC',
      notes: 'GT token discounts available',
    },
    regions: ['Global', 'Not US'],
    kycRequired: true,
    paymentMethods: ['Card', 'Crypto', 'P2P'],
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-10',
    verdict: 'recommended',
    bestFor: ['Experienced traders', 'Copy trading', 'Feature seekers', 'Non-US users'],
  },
  {
    id: 'okx',
    name: 'OKX',
    slug: 'okx',
    tagline: 'Web3 Wallet + Exchange',
    website: 'https://www.okx.com',
    type: 'CEX',
    rating: {
      overall: 4.3,
      security: 4.2,
      fees: 4.3,
      liquidity: 4.4,
      userExperience: 4.5,
      support: 4.0,
    },
    pros: [
      'Excellent Web3 wallet integration',
      'Clean modern interface',
      'Good ETC liquidity',
      'Competitive fees',
      'Strong mobile experience',
      'Proof of reserves',
    ],
    cons: [
      'Limited availability in US',
      'KYC required for full features',
      'Some advanced features complex',
    ],
    summary: 'OKX combines a modern exchange with an excellent Web3 wallet, making it a great choice for traders who want both centralized convenience and decentralized access.',
    fullReview: `OKX has transformed from a simple exchange into a comprehensive Web3 platform. The combination of CEX trading and self-custody wallet makes it unique in the market.

**Web3 Integration**
The OKX Wallet is a standout feature - a non-custodial wallet supporting ETC and other chains. Trade on the CEX, then move to self-custody seamlessly within the same app.

**Trading Platform**
Clean, modern interface with all the tools professional traders expect. Spot, margin, futures, and options trading available with competitive fees.

**ETC Markets**
Good liquidity across ETC/USDT, ETC/BTC, and other pairs. Sufficient depth for most retail and moderate institutional activity.

**Mobile Experience**
One of the best mobile trading apps available. Full functionality including the Web3 wallet, with a design that doesn't compromise usability.

**Security**
Proof of reserves published regularly. Standard security features with 2FA, withdrawal protection, and cold storage for majority of funds.

**Considerations**
US availability is limited. Full features require KYC verification.`,
    etcSupport: {
      tradingPairs: ['ETC/USDT', 'ETC/BTC', 'ETC/USDC'],
      depositMethods: ['ETC Network', 'Crypto', 'OKX Wallet'],
      withdrawalFee: '0.01 ETC',
      etcSpecificFeatures: ['Spot trading', 'Web3 wallet', 'Futures', 'Earn products'],
    },
    fees: {
      trading: '0.1% - 0.15%',
      deposit: 'Free',
      withdrawal: '0.01 ETC',
      notes: 'OKB token discounts available',
    },
    regions: ['Global', 'Limited US'],
    kycRequired: true,
    paymentMethods: ['Card', 'Bank', 'Crypto', 'P2P'],
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-10',
    verdict: 'recommended',
    bestFor: ['Web3 users', 'Mobile traders', 'Self-custody + CEX convenience'],
  },
  {
    id: 'upbit',
    name: 'Upbit',
    slug: 'upbit',
    tagline: 'Korea\'s Leading Exchange',
    website: 'https://upbit.com',
    type: 'CEX',
    rating: {
      overall: 4.2,
      security: 4.5,
      fees: 4.0,
      liquidity: 4.5,
      userExperience: 4.0,
      support: 4.0,
    },
    pros: [
      'Highest KRW liquidity for ETC',
      'Very low trading fees (0.05%)',
      'Strong regulatory compliance in Korea',
      'Bank-grade security',
      'Fast KRW deposits/withdrawals',
    ],
    cons: [
      'Primarily serves Korean market',
      'Interface mainly in Korean',
      'Limited payment methods for non-Koreans',
      'KYC required',
    ],
    summary: 'Upbit is the dominant exchange in South Korea with exceptional ETC/KRW liquidity. Essential for Korean traders, but limited utility for international users.',
    fullReview: `Upbit dominates the South Korean crypto market, often showing the highest ETC/KRW volume globally. For Korean residents, it's the obvious choice.

**Market Position**
As Korea's largest exchange (operated by Dunamu, with backing from Kakao), Upbit enjoys trust and liquidity that smaller competitors cannot match.

**ETC/KRW Market**
The ETC/KRW pair frequently shows $2M+ daily volume, rivaling or exceeding some USD pairs. This liquidity ensures tight spreads for Korean won trades.

**Regulatory Compliance**
Fully compliant with Korean regulations, including real-name banking requirements. This provides a secure, regulated environment for Korean users.

**Fee Structure**
Very competitive 0.05% trading fee, among the lowest in the industry. Combined with free KRW deposits, it's very cost-effective for local users.

**Limitations**
The platform is optimized for the Korean market. While international access is possible, the interface, support, and banking options cater primarily to Korean residents.`,
    etcSupport: {
      tradingPairs: ['ETC/KRW', 'ETC/USDT', 'ETC/BTC'],
      depositMethods: ['ETC Network', 'KRW bank transfer'],
      withdrawalFee: '0.01 ETC',
      etcSpecificFeatures: ['Spot trading', 'High KRW liquidity'],
    },
    fees: {
      trading: '0.05%',
      deposit: 'Free (KRW)',
      withdrawal: '0.01 ETC',
      notes: 'Very competitive fees',
    },
    regions: ['Korea', 'Asia'],
    kycRequired: true,
    paymentMethods: ['Bank', 'Crypto'],
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-10',
    verdict: 'recommended',
    bestFor: ['Korean residents', 'KRW traders', 'High-volume KRW trading'],
  },
  {
    id: 'kucoin',
    name: 'KuCoin',
    slug: 'kucoin',
    tagline: 'The People\'s Exchange',
    website: 'https://www.kucoin.com',
    type: 'CEX',
    rating: {
      overall: 4.0,
      security: 3.8,
      fees: 4.3,
      liquidity: 4.0,
      userExperience: 4.2,
      support: 3.8,
    },
    pros: [
      'No mandatory KYC for basic trading',
      'Wide altcoin selection',
      'Trading bot features',
      'Competitive fees',
      'Good mobile app',
    ],
    cons: [
      'Past security incident (2020)',
      'Not regulated in major jurisdictions',
      'Support can be slow',
      'US users face restrictions',
    ],
    summary: 'KuCoin offers accessible trading without mandatory KYC, with unique features like built-in trading bots. Good for privacy-focused traders comfortable with less regulatory oversight.',
    fullReview: `KuCoin has built a reputation as "the people's exchange" with its accessible approach and extensive altcoin listings. The platform offers unique features while maintaining competitive fees.

**Trading Features**
Beyond basic spot trading, KuCoin offers futures, margin, lending, and built-in trading bots. The bot marketplace allows automated strategies without coding.

**KYC Policy**
Basic trading available without KYC, appealing to privacy-focused users. Higher limits and some features require verification.

**ETC Markets**
Decent liquidity on ETC/USDT with additional pairs available. Not the highest volume but sufficient for most retail trades.

**Security Note**
KuCoin experienced a security breach in 2020 but recovered stolen funds and made users whole. Security has been enhanced since, but the incident is worth noting.

**Fee Structure**
0.1% base fee with KCS token discounts. Competitive with major exchanges.`,
    etcSupport: {
      tradingPairs: ['ETC/USDT', 'ETC/BTC'],
      depositMethods: ['ETC Network', 'Crypto'],
      withdrawalFee: '0.01 ETC',
      etcSpecificFeatures: ['Spot trading', 'Futures', 'Trading bots', 'Lending'],
    },
    fees: {
      trading: '0.1%',
      deposit: 'Free',
      withdrawal: '0.01 ETC',
      notes: 'KCS token discounts available',
    },
    regions: ['Global'],
    kycRequired: false,
    paymentMethods: ['Card', 'Crypto', 'P2P'],
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-10',
    verdict: 'acceptable',
    bestFor: ['No-KYC trading', 'Trading bots', 'Altcoin variety'],
  },
  {
    id: 'htx',
    name: 'HTX (Huobi)',
    slug: 'htx',
    tagline: 'Established Asian Exchange',
    website: 'https://www.htx.com',
    type: 'CEX',
    rating: {
      overall: 3.8,
      security: 3.8,
      fees: 4.0,
      liquidity: 4.0,
      userExperience: 3.8,
      support: 3.5,
    },
    pros: [
      'Established since 2013',
      'Good Asian market access',
      'Decent ETC liquidity',
      'Competitive fees',
      'Multiple trading products',
    ],
    cons: [
      'Rebranding confusion (Huobi to HTX)',
      'Regulatory uncertainty',
      'Support quality inconsistent',
      'Not recommended for US users',
    ],
    summary: 'HTX (formerly Huobi) is an established exchange with decent ETC liquidity and competitive fees, though recent changes have introduced some uncertainty.',
    fullReview: `HTX, rebranded from Huobi in 2023, is one of the oldest exchanges still operating. The transition has caused some confusion, but the platform remains functional.

**Market Position**
Once a top-3 exchange, HTX has faced increased competition but maintains reasonable liquidity and trading volume.

**ETC Markets**
Decent ETC/USDT liquidity with additional pairs available. Volume has declined from peak but remains sufficient for most retail trades.

**Platform Features**
Standard suite of trading features including spot, futures, and margin. The interface is functional but not as polished as newer competitors.

**Considerations**
The Huobi to HTX rebrand and management changes have created uncertainty. Users should monitor developments and maintain appropriate risk management.`,
    etcSupport: {
      tradingPairs: ['ETC/USDT', 'ETC/BTC'],
      depositMethods: ['ETC Network', 'Crypto'],
      withdrawalFee: '0.01 ETC',
      etcSpecificFeatures: ['Spot trading', 'Futures', 'Margin'],
    },
    fees: {
      trading: '0.2%',
      deposit: 'Free',
      withdrawal: '0.01 ETC',
      notes: 'HT token discounts available',
    },
    regions: ['Asia', 'Global'],
    kycRequired: true,
    paymentMethods: ['Card', 'Crypto', 'P2P'],
    lastUpdated: '2025-01-15',
    reviewDate: '2025-01-10',
    verdict: 'acceptable',
    bestFor: ['Asian market access', 'Established exchange preference'],
  },
]

// Helper functions
export function getReviewBySlug(slug: string): ExchangeReview | undefined {
  return exchangeReviews.find((r) => r.slug === slug)
}

export function getAllReviewSlugs(): string[] {
  return exchangeReviews.map((r) => r.slug)
}

export function getVerdictLabel(verdict: ExchangeReview['verdict']): string {
  const labels: Record<ExchangeReview['verdict'], string> = {
    'highly-recommended': 'Highly Recommended',
    recommended: 'Recommended',
    acceptable: 'Acceptable',
    'not-recommended': 'Not Recommended',
  }
  return labels[verdict]
}

export function getVerdictColor(verdict: ExchangeReview['verdict']): string {
  const colors: Record<ExchangeReview['verdict'], string> = {
    'highly-recommended': 'text-green-400',
    recommended: 'text-emerald-400',
    acceptable: 'text-yellow-400',
    'not-recommended': 'text-red-400',
  }
  return colors[verdict]
}

export function formatRating(rating: number): string {
  return rating.toFixed(1)
}

export function getRatingLabel(rating: number): string {
  if (rating >= 4.5) return 'Excellent'
  if (rating >= 4.0) return 'Very Good'
  if (rating >= 3.5) return 'Good'
  if (rating >= 3.0) return 'Average'
  return 'Below Average'
}

export interface Wallet {
  name: string
  type: 'Hardware' | 'Browser' | 'Mobile' | 'Web'
  description: string
  link: string
  supportsClassicOS?: boolean
}

export const wallets: Wallet[] = [
  // Hardware Wallets
  {
    name: 'Ledger',
    type: 'Hardware',
    description: 'Industry-standard hardware wallet with secure cold storage',
    link: 'https://www.ledger.com',
    supportsClassicOS: true,
  },
  {
    name: 'Trezor',
    type: 'Hardware',
    description: 'Popular hardware wallet with open-source firmware',
    link: 'https://trezor.io',
    supportsClassicOS: true,
  },
  {
    name: 'SafePal',
    type: 'Hardware',
    description: 'Hardware wallet solution with mobile app integration',
    link: 'https://www.safepal.com',
  },
  {
    name: 'CoolWallet',
    type: 'Hardware',
    description: 'Credit card-sized hardware wallet',
    link: 'https://coolwallet.io',
  },
  {
    name: 'Ellipal',
    type: 'Hardware',
    description: 'Air-gapped hardware wallet for maximum security',
    link: 'https://www.ellipal.com',
  },
  {
    name: 'KeyPal',
    type: 'Hardware',
    description: 'Compact hardware wallet with touchscreen',
    link: 'https://keypal.pro',
  },

  // Browser Wallets
  {
    name: 'MetaMask',
    type: 'Browser',
    description: 'Most popular browser extension wallet for Ethereum and ETC',
    link: 'https://metamask.io',
    supportsClassicOS: true,
  },
  {
    name: 'MathWallet',
    type: 'Browser',
    description: 'Multi-chain browser extension wallet',
    link: 'https://mathwallet.org',
  },
  {
    name: 'TokenPocket',
    type: 'Browser',
    description: 'Multi-chain browser wallet with DeFi support',
    link: 'https://www.tokenpocket.pro',
  },
  {
    name: 'Brave Wallet',
    type: 'Browser',
    description: 'Built-in wallet in Brave browser',
    link: 'https://brave.com/wallet',
    supportsClassicOS: true,
  },
  {
    name: 'Opera Crypto Wallet',
    type: 'Browser',
    description: 'Native crypto wallet in Opera browser',
    link: 'https://www.opera.com/crypto',
  },
  {
    name: 'Rabby',
    type: 'Browser',
    description: 'Security-focused browser extension wallet',
    link: 'https://rabby.io',
    supportsClassicOS: true,
  },

  // Mobile Wallets
  {
    name: 'Trust Wallet',
    type: 'Mobile',
    description: 'Popular mobile wallet with DeFi browser',
    link: 'https://trustwallet.com',
  },
  {
    name: 'Exodus',
    type: 'Mobile',
    description: 'Beautiful multi-asset wallet with built-in exchange',
    link: 'https://www.exodus.com',
  },
  {
    name: 'Coinomi',
    type: 'Mobile',
    description: 'Multi-chain mobile wallet with strong privacy',
    link: 'https://www.coinomi.com',
  },
  {
    name: 'Edge',
    type: 'Mobile',
    description: 'Mobile wallet with buy/sell and exchange features',
    link: 'https://edge.app',
  },
  {
    name: 'Atomic Wallet',
    type: 'Mobile',
    description: 'Decentralized multi-asset wallet',
    link: 'https://atomicwallet.io',
  },
  {
    name: 'Guarda',
    type: 'Mobile',
    description: 'Multi-currency wallet with staking support',
    link: 'https://guarda.com',
  },
  {
    name: 'Emerald Wallet',
    type: 'Mobile',
    description: 'ETC-focused wallet by ETC Cooperative',
    link: 'https://emerald.cash',
  },
  {
    name: 'Zelcore',
    type: 'Mobile',
    description: 'Multi-asset wallet with advanced features',
    link: 'https://zelcore.io',
  },
  {
    name: 'ZenGo',
    type: 'Mobile',
    description: 'Keyless wallet with biometric security',
    link: 'https://zengo.com',
  },
  {
    name: 'imToken',
    type: 'Mobile',
    description: 'Feature-rich mobile wallet for EVM chains',
    link: 'https://token.im',
  },

  // Web Wallets
  {
    name: 'MyEtherWallet',
    type: 'Web',
    description: 'Popular web interface for Ethereum and ETC',
    link: 'https://www.myetherwallet.com',
  },
  {
    name: 'MyCrypto',
    type: 'Web',
    description: 'Web-based account management for ETC',
    link: 'https://mycrypto.com',
  },
  {
    name: 'Coin Wallet',
    type: 'Web',
    description: 'Simple web wallet for ETC',
    link: 'https://coin.space',
  },
]

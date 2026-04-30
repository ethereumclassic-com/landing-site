export const ETH_ICO = {
  tokenName: 'Ethereum',
  ticker: 'ETH',
  priceAtIco: '$0.3080',
  status: 'Finished',
  target: '$16,000,000',
  date: '07/22/2014',
  tokenRole: 'Utility',
  tokenType: 'Own wallet',
  fundingCap: 'Unlimited',
  fundsRaised: '$18,500,000',
  icoTokenSupply: 72_009_991,
  tokenSupplyAfterIco: 'Increases',
} as const

export const ETH_ICO_ROI = [
  {
    label: 'Now',
    date: 'Apr 29, 2026',
    multiplier: '×7,315',
    per100: '$731,484',
  },
  {
    label: 'ATH',
    date: 'Aug 24, 2025',
    multiplier: '×16,076',
    per100: '$1,607,650',
  },
  {
    label: 'ATL',
    date: 'Oct 21, 2015',
    multiplier: '×1.37',
    per100: '$136.64',
  },
] as const

export const ETH_ICO_TOKENOMICS = [
  { label: 'Crowdsale', pct: 83.33, color: 'var(--brand-green)' },
  { label: 'Foundation / Early Contributors & Others', pct: 16.67, color: 'var(--text-muted)' },
] as const

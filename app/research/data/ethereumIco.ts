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

// ICO price constants — used for live ROI computation
export const ETH_ICO_PRICE_USD = 0.308
// 2,000 ETH per BTC initial rate (first 14 days of the 42-day sale)
export const ETH_ICO_PRICE_BTC = 0.0005

// Static reference points (ATH/ATL stay hardcoded — they're historical facts)
export const ETH_ICO_ROI_REFERENCE = [
  {
    label: 'ATH (ETH)',
    date: 'Aug 24, 2025',
    multiplier: '×16,076',
    per100: '$1,607,650',
  },
  {
    label: 'ATL (ETH)',
    date: 'Oct 21, 2015',
    multiplier: '×1.37',
    per100: '$136.64',
  },
] as const

export const ETH_ICO_TOKENOMICS = [
  { label: 'Crowdsale', pct: 83.33, color: 'var(--brand-green)' },
  { label: 'Foundation / Early Contributors & Others', pct: 16.67, color: 'var(--text-muted)' },
] as const

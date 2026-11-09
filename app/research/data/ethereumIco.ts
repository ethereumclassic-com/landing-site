import { EMISSION_CONSTANTS } from './emission'

// Total tokens created at genesis (crowdsale + foundation allocations)
export const ETH_ICO_GENESIS_SUPPLY = EMISSION_CONSTANTS.GENESIS_SUPPLY

// Absolute token counts from the ICO allocation
export const ETH_ICO_ALLOCATION = {
  crowdsale: Math.round(ETH_ICO_GENESIS_SUPPLY * 0.8333),
  foundation: Math.round(ETH_ICO_GENESIS_SUPPLY * 0.1667),
} as const

export const ETH_ICO = {
  tokenName: 'Ethereum',
  ticker: 'ETH',
  priceAtIco: '$0.3080',
  status: 'Finished',
  target: '$16,000,000',
  dateStart: 'Jul 22, 2014',
  dateEnd: 'Sep 2, 2014',
  tokenRole: 'Utility',
  tokenType: 'Own wallet',
  fundingCap: 'Unlimited',
  fundsRaised: '$18,500,000',
  fundsRaisedBtc: '~31,529 BTC',
  icoTokenSupply: ETH_ICO_GENESIS_SUPPLY,
  tokenSupplyAfterIco: 'Increases',
} as const

// ICO price constants — used for live ROI computation
export const ETH_ICO_PRICE_USD = 0.308
// 2,000 ETH per BTC initial rate (first 14 days of the 42-day sale)
export const ETH_ICO_PRICE_BTC = 0.0005

// 42-day sale price schedule: flat early-bird rate for days 1–14, then linear decline
export const ETH_ICO_PRICE_SCHEDULE = Array.from({ length: 42 }, (_, i) => {
  const day = i + 1
  const rate = day <= 14 ? 2000 : Math.round(2000 - (663 / 28) * (day - 14))
  return { day, rate }
})

export const ETH_ICO_TOKENOMICS = [
  { label: 'ETH Foundation Crowdsale', pct: 83.33, color: 'var(--color-violet-border)' },
  { label: 'Foundation / Early Contributors & Others', pct: 16.67, color: 'var(--color-violet)' },
] as const

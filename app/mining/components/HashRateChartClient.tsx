'use client'

import dynamic from 'next/dynamic'

// SSR disabled: SVG arc paths use Math.sin/cos which produce floating-point
// differences between Node.js and the browser, causing hydration mismatches.
const HashRateChart = dynamic(() => import('./HashRateChart'), { ssr: false })

export { HashRateChart }

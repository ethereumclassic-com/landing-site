import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Olympia — Ethereum Classic',
    default:
      'Olympia Network Upgrade — Fusaka EVM Alignment, EIP-1559 Fee Market, Protocol Treasury — Ethereum Classic',
  },
  description:
    "Olympia is Ethereum Classic's most significant protocol upgrade. Full Fusaka EVM alignment closes years of tooling divergence — Foundry, Hardhat, wagmi, viem, and ethers.js work on ETC without modification. EIP-1559 fee market redirects the basefee to a protocol-managed treasury, funding open-source core development without foundation dependency.",
  keywords: [
    'Olympia upgrade',
    'Ethereum Classic upgrade',
    'Fusaka EVM',
    'EVM alignment',
    'ECIP-1121',
    'EIP-1559',
    'ECIP-1111',
    'ECIP-1112',
    'protocol treasury',
    'Ethereum Classic node upgrade',
    'Fukuii',
    'Core-Geth',
    'hard fork',
    'ETC upgrade',
    'Dencun',
    'Pectra',
    'Prague',
    'Cancun',
    'EVM upgrade',
    'Solidity compatibility',
    'Foundry ETC',
    'Hardhat ETC',
    'wagmi ETC',
    'viem ETC',
    'EIP-7702',
    'EIP-2537',
    'BLS12-381',
    'transient storage',
    'EIP-1153',
    'MCOPY',
    'EIP-5656',
    'London hard fork ETC',
  ],
  openGraph: {
    title:
      'Olympia Network Upgrade — Fusaka EVM Alignment, EIP-1559 Fee Market, Protocol Treasury — Ethereum Classic',
    description:
      "Olympia is Ethereum Classic's most significant protocol upgrade. Full Fusaka EVM alignment, EIP-1559 basefee directed to protocol treasury, and independent client implementations.",
    type: 'website',
  },
}

export default function OlympiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

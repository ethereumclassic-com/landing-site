// ETC Network Upgrade History
// Source: https://ecips.ethereumclassic.org and ETC-KNOWLEDGE.md

export interface ForkData {
  name: string
  block: number | null // null for TBD (Olympia)
  date: string | null // null for TBD
  ecip: string | null
  ecipUrl: string | null
  summary: string
  keyChanges: string[]
  isOlympia?: boolean
}

export const forks: ForkData[] = [
  {
    name: 'Atlantis',
    block: 8_772_000,
    date: '2019-09-12',
    ecip: 'ECIP-1054',
    ecipUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1054',
    summary: 'Aligned ETC with Ethereum\'s Spurious Dragon and Byzantium upgrades.',
    keyChanges: [
      'EIP-100 (difficulty adjustment)',
      'EIP-140 (REVERT opcode)',
      'EIP-196/197 (bn256 precompiles)',
      'EIP-198 (MODEXP precompile)',
      'EIP-211 (RETURNDATASIZE/COPY)',
      'EIP-214 (STATICCALL)',
    ],
  },
  {
    name: 'Agharta',
    block: 9_573_000,
    date: '2020-01-12',
    ecip: 'ECIP-1056',
    ecipUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1056',
    summary: 'Aligned ETC with Ethereum\'s Constantinople and Petersburg upgrades.',
    keyChanges: [
      'EIP-145 (bitwise shifting)',
      'EIP-1014 (CREATE2)',
      'EIP-1052 (EXTCODEHASH)',
      'EIP-1283 (net gas metering)',
    ],
  },
  {
    name: 'Phoenix',
    block: 10_500_839,
    date: '2020-06-01',
    ecip: 'ECIP-1088',
    ecipUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1088',
    summary: 'Aligned ETC with Ethereum\'s Istanbul upgrade.',
    keyChanges: [
      'EIP-152 (Blake2b precompile)',
      'EIP-1108 (bn256 gas reduction)',
      'EIP-1344 (CHAINID opcode)',
      'EIP-2028 (calldata gas reduction)',
      'EIP-2200 (SSTORE gas metering)',
    ],
  },
  {
    name: 'Thanos',
    block: 11_700_000,
    date: '2020-11-28',
    ecip: 'ECIP-1099',
    ecipUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1099',
    summary: 'Halved the DAG size epoch length, enabling consumer GPUs to continue mining ETC.',
    keyChanges: [
      'Etchash algorithm (modified Ethash)',
      'DAG epoch length doubled (30,000 → 60,000)',
      'GPU mining accessibility preserved',
      'ASIC resistance maintained',
    ],
  },
  {
    name: 'Magneto',
    block: 13_189_133,
    date: '2021-07-23',
    ecip: 'ECIP-1103',
    ecipUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1103',
    summary: 'Aligned ETC with Ethereum\'s Berlin upgrade.',
    keyChanges: [
      'EIP-2565 (ModExp gas cost)',
      'EIP-2718 (typed transactions)',
      'EIP-2929 (gas cost increases for state access)',
      'EIP-2930 (access lists)',
    ],
  },
  {
    name: 'Mystique',
    block: 14_525_000,
    date: '2022-02-12',
    ecip: 'ECIP-1104',
    ecipUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1104',
    summary: 'Aligned ETC with Ethereum\'s London upgrade (excluding EIP-1559 and EIP-3529).',
    keyChanges: [
      'EIP-3198 (BASEFEE opcode, no-op)',
      'EIP-3541 (reject new 0xEF contracts)',
      'EIP-3529 excluded (kept full SELFDESTRUCT refund)',
      'EIP-1559 excluded (deferred to Olympia)',
    ],
  },
  {
    name: 'Spiral',
    block: 19_250_000,
    date: '2024-02-05',
    ecip: 'ECIP-1109',
    ecipUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1109',
    summary: 'Aligned ETC with Ethereum\'s Shanghai upgrade (execution layer changes only).',
    keyChanges: [
      'EIP-3651 (warm COINBASE)',
      'EIP-3855 (PUSH0 instruction)',
      'EIP-3860 (limit/meter initcode)',
      'EIP-6049 (deprecate SELFDESTRUCT)',
    ],
  },
  {
    name: 'Olympia',
    block: null,
    date: null,
    ecip: 'ECIP-1111',
    ecipUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1111',
    summary:
      'The most significant ETC upgrade — EIP-1559 fee market, protocol treasury, on-chain governance foundation, and EVM alignment with 13 additional EIPs.',
    keyChanges: [
      'EIP-1559 dynamic base fee',
      'Basefee directed to protocol treasury',
      'On-chain governance framework',
      'Soulbound NFT voting',
      '13 EIPs from Shanghai/Cancun',
      'Gas limit increase to 60M',
    ],
    isOlympia: true,
  },
]

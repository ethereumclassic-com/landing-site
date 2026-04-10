// ETC Network Upgrade History
// Source: https://ecips.ethereumclassic.org and ETC-KNOWLEDGE.md

export interface ForkData {
  name: string
  block: number | null // null for TBD (Olympia)
  date: string | null // null for TBD
  ecip: string | null
  ecipUrl: string | null
  ecips?: { name: string; url: string }[] // multiple ECIPs (overrides ecip/ecipUrl when present)
  summary: string
  keyChanges: string[]
  isOlympia?: boolean
}

export const forks: ForkData[] = [
  {
    name: 'Frontier',
    block: 1,
    date: '2015-07-30',
    ecip: null,
    ecipUrl: null,
    summary: 'Genesis block: the Ethereum network launches.',
    keyChanges: [
      'Initial network launch',
      'Gas limit of 5,000 per block',
      'Proof-of-Work consensus',
    ],
  },
  {
    name: 'Frontier Thawing',
    block: 200_000,
    date: '2015-09-07',
    ecip: null,
    ecipUrl: null,
    summary: 'Increased gas limit from 5,000 to enable meaningful transactions and contract deployment.',
    keyChanges: [
      'Gas limit increase',
      'Difficulty bomb introduced',
      'Enabled contract deployment',
    ],
  },
  {
    name: 'Homestead',
    block: 1_150_000,
    date: '2016-03-14',
    ecip: null,
    ecipUrl: null,
    summary: 'First major planned upgrade: EIP-2, EIP-7, EIP-8.',
    keyChanges: [
      'EIP-2 (transaction validity rules)',
      'EIP-7 (DELEGATECALL opcode)',
      'EIP-8 (devp2p forward compatibility)',
    ],
  },
  {
    name: 'DAO Fork (Rejected)',
    block: 1_920_000,
    date: '2016-07-20',
    ecip: null,
    ecipUrl: null,
    summary: 'Ethereum forked to reverse the DAO hack. ETC rejected the irregular state change and continued the original chain.',
    keyChanges: [
      'ETC continued the original unaltered chain',
      'Ethereum Classic identity established',
      'Code is law principle preserved',
    ],
  },
  {
    name: 'Gas Reprice',
    block: 2_500_000,
    date: '2016-10-24',
    ecip: null,
    ecipUrl: null,
    summary: 'EIP-150 repriced I/O-heavy opcodes for DoS protection after the Shanghai attacks.',
    keyChanges: [
      'EIP-150 (gas cost increases for I/O operations)',
      'DoS attack mitigation',
      'CALL gas cost increase',
    ],
  },
  {
    name: 'Die Hard',
    block: 3_000_000,
    date: '2017-01-13',
    ecip: 'ECIP-1015',
    ecipUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1015',
    summary: 'Replay protection and difficulty bomb delay. The first ETC-specific hard fork.',
    keyChanges: [
      'EIP-155 (replay protection)',
      'EIP-160 (EXP gas cost increase)',
      'Difficulty bomb delay',
    ],
  },
  {
    name: 'Gotham',
    block: 5_000_000,
    date: '2017-12-11',
    ecip: 'ECIP-1017',
    ecipUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1017',
    summary: 'ECIP-1017 monetary policy: the 210.7 million ETC supply cap with era-based emission reduction.',
    keyChanges: [
      'Fixed monetary policy (supply cap ~210.7M ETC)',
      'Era-based emission reduction (20% per era)',
      'Five million block eras',
    ],
  },
  {
    name: 'Defuse Difficulty Bomb',
    block: 5_900_000,
    date: '2018-05-29',
    ecip: 'ECIP-1041',
    ecipUrl: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1041',
    summary: 'ECIP-1041 permanently removed the difficulty bomb from ETC, ensuring stable block times.',
    keyChanges: [
      'Difficulty bomb permanently removed',
      'Stable block times preserved',
      'No forced upgrade pressure',
    ],
  },
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
    ecip: null,
    ecipUrl: null,
    ecips: [
      { name: 'ECIP-1111', url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1111' },
      { name: 'ECIP-1112', url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1112' },
      { name: 'ECIP-1121', url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1121' },
    ],
    summary:
      'EVM alignment to Fusaka: EIPs spanning London, Dencun, Pectra, and Fusaka. Introduces EIP-1559 fee market with basefee directed to protocol treasury.',
    keyChanges: [
      'EIP-1559 dynamic basefee (directed to treasury)',
      'EVM parity with Ethereum Fusaka',
      'EIPs from London, Dencun, Pectra, Fusaka',
      'Protocol treasury funding mechanism',
      'Three independent client implementations',
    ],
    isOlympia: true,
  },
]

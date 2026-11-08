import { OLYMPIA_ECIPS, ecipUrl } from '@/lib/olympia-ecips'

export interface ECIPMeta {
  id: string
  title: string
  status: 'Final' | 'Draft' | 'Last Call' | 'Withdrawn' | 'Rejected' | 'Superseded' | 'Replaced' | 'Active'
  type: string
  url: string
}

export const ecipIndex: Record<string, ECIPMeta> = {
  'ecip-1010': {
    id: 'ecip-1010',
    title: 'Delay Difficulty Bomb Explosion',
    status: 'Final',
    type: 'Standards Track (Core)',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1010',
  },
  'ecip-1015': {
    id: 'ecip-1015',
    title: 'Long-term gas cost changes for IO-heavy operations to mitigate transaction spam attacks',
    status: 'Final',
    type: 'Standards Track (Core)',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1015',
  },
  'ecip-1017': {
    id: 'ecip-1017',
    title: 'Monetary Policy and Final Modification to the Ethereum Classic Emission Schedule',
    status: 'Final',
    type: 'Standards Track (Core)',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1017',
  },
  'ecip-1039': {
    id: 'ecip-1039',
    title: 'Monetary policy rounding specification',
    status: 'Final',
    type: 'Standards Track (Core)',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1039',
  },
  'ecip-1041': {
    id: 'ecip-1041',
    title: 'Remove Difficulty Bomb',
    status: 'Final',
    type: 'Standards Track (Core)',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1041',
  },
  'ecip-1043': {
    id: 'ecip-1043',
    title: 'Fixed DAG limit restriction',
    status: 'Superseded',
    type: 'Standards Track (Core)',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1043',
  },
  'ecip-1045': {
    id: 'ecip-1045',
    title: 'Support for ETH Byzantium & Constantinople EVM and Protocol Upgrades',
    status: 'Superseded',
    type: 'Meta',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1045',
  },
  'ecip-1049': {
    id: 'ecip-1049',
    title: 'Change the ETC Proof of Work Algorithm to Keccak256',
    status: 'Withdrawn',
    type: 'Standards Track (Core)',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1049',
  },
  'ecip-1054': {
    id: 'ecip-1054',
    title: 'Atlantis EVM and Protocol Upgrades',
    status: 'Final',
    type: 'Meta',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1054',
  },
  'ecip-1056': {
    id: 'ecip-1056',
    title: 'Agharta EVM and Protocol Upgrades',
    status: 'Final',
    type: 'Meta',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1056',
  },
  'ecip-1061': {
    id: 'ecip-1061',
    title: 'Aztlán EVM and Protocol Upgrades (Yingchun Edition)',
    status: 'Rejected',
    type: 'Meta',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1061',
  },
  'ecip-1078': {
    id: 'ecip-1078',
    title: 'Phoenix EVM and Protocol Upgrades ("Aztlán fix")',
    status: 'Rejected',
    type: 'Meta',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1078',
  },
  'ecip-1079': {
    id: 'ecip-1079',
    title: 'Phoenix EVM and Protocol Upgrades ("Aztlán redo")',
    status: 'Withdrawn',
    type: 'Meta',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1079',
  },
  'ecip-1088': {
    id: 'ecip-1088',
    title: 'Phoenix EVM and Protocol Upgrades',
    status: 'Final',
    type: 'Meta',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1088',
  },
  'ecip-1091': {
    id: 'ecip-1091',
    title: 'Fork identifier (forkid) protocol fork list specification v2',
    status: 'Active',
    type: 'Standards Track (ECBP)',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1091',
  },
  'ecip-1095': {
    id: 'ecip-1095',
    title: 'Change the ETC Proof of Work Algorithm to Sha-3-256',
    status: 'Rejected',
    type: 'Standards Track (Core)',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1095',
  },
  'ecip-1098': {
    id: 'ecip-1098',
    title: 'Proto Treasury System',
    status: 'Withdrawn',
    type: 'Standards Track (Core)',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1098',
  },
  'ecip-1099': {
    id: 'ecip-1099',
    title: 'Calibrate Epoch Duration',
    status: 'Final',
    type: 'Standards Track (Core)',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1099',
  },
  'ecip-1100': {
    id: 'ecip-1100',
    title: 'MESS (Modified Exponential Subjective Scoring)',
    status: 'Active',
    type: 'Standards Track (ECBP)',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1100',
  },
  'ecip-1103': {
    id: 'ecip-1103',
    title: 'Magneto EVM and Protocol Upgrades',
    status: 'Final',
    type: 'Meta',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1103',
  },
  'ecip-1104': {
    id: 'ecip-1104',
    title: 'Mystique EVM and Protocol Upgrades',
    status: 'Final',
    type: 'Meta',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1104',
  },
  'ecip-1109': {
    id: 'ecip-1109',
    title: 'Spiral EVM and Protocol Upgrades',
    status: 'Final',
    type: 'Meta',
    url: 'https://ecips.ethereumclassic.org/ECIPs/ecip-1109',
  },
  // The Olympia ECIPs, under their front-matter titles, from the one module every surface reads.
  ...Object.fromEntries(
    OLYMPIA_ECIPS.map((e) => [
      `ecip-${e.number}`,
      { id: `ecip-${e.number}`, title: e.title, status: e.status, type: e.type, url: ecipUrl(e.number) },
    ]),
  ),
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

type Category = 'all' | 'mining-hardware' | 'equipment' | 'network' | 'hardware-wallets' | 'apparel' | 'accessories'

// Products organized by professional e-commerce categories
const products = [
  // ═══════════════════════════════════════════════════════════════════
  // MINING HARDWARE - ASICs (sorted by profitability from WhatToMine)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'jasminer-x44p',
    name: 'Jasminer X44-P',
    description: 'Most profitable ETChash ASIC. 23.4 GH/s @ 2550W. $11.80/day profit at current difficulty.',
    category: 'mining-hardware' as const,
    subcategory: 'ASIC',
    price: 8999,
    hashrate: '23.4 GH/s',
    power: '2550W',
    efficiency: '0.109 J/MH',
    affiliate: true,
    affiliateLink: 'https://www.ebay.com/sch/i.html?_nkw=jasminer+x44',
    badge: 'Top Pick',
  },
  {
    id: 'ipollo-v2',
    name: 'iPollo V2',
    description: 'Excellent efficiency ASIC. 10 GH/s @ 1500W. Great ROI for medium-scale operations.',
    category: 'mining-hardware' as const,
    subcategory: 'ASIC',
    price: 4500,
    hashrate: '10 GH/s',
    power: '1500W',
    efficiency: '0.15 J/MH',
    affiliate: true,
    affiliateLink: 'https://www.ebay.com/sch/i.html?_nkw=ipollo+v2+eth',
    badge: 'Best Value',
  },
  {
    id: 'bombax-ez100-pro',
    name: 'Bombax EZ100-PRO',
    description: 'High hashrate ASIC. 15.5 GH/s @ 3100W. Powerful miner for industrial operations.',
    category: 'mining-hardware' as const,
    subcategory: 'ASIC',
    price: 6500,
    hashrate: '15.5 GH/s',
    power: '3100W',
    efficiency: '0.2 J/MH',
    affiliate: true,
    affiliateLink: 'https://www.ebay.com/sch/i.html?_nkw=bombax+ez100',
  },
  {
    id: 'bitmain-e11',
    name: 'Antminer E11',
    description: 'Latest Bitmain ASIC. 9 GH/s @ 2340W. Reliable brand with excellent support.',
    category: 'mining-hardware' as const,
    subcategory: 'ASIC',
    price: 3999,
    hashrate: '9 GH/s',
    power: '2340W',
    efficiency: '0.26 J/MH',
    affiliate: true,
    affiliateLink: 'https://shop.bitmain.com/',
  },
  {
    id: 'ipollo-v2h',
    name: 'iPollo V2H',
    description: 'Compact efficient ASIC. 3.4 GH/s @ 475W. Home mining friendly, quiet operation.',
    category: 'mining-hardware' as const,
    subcategory: 'ASIC',
    price: 1800,
    hashrate: '3.4 GH/s',
    power: '475W',
    efficiency: '0.14 J/MH',
    affiliate: true,
    affiliateLink: 'https://www.ebay.com/sch/i.html?_nkw=ipollo+v2h',
    badge: 'Home Miner',
  },
  // Mining Hardware - GPUs (sorted by efficiency)
  {
    id: 'rtx-5090',
    name: 'NVIDIA RTX 5090',
    description: 'Flagship GPU. 160 MH/s @ 290W. Best GPU hashrate available for ETChash.',
    category: 'mining-hardware' as const,
    subcategory: 'GPU',
    price: 3720,
    hashrate: '160 MH/s',
    power: '290W',
    efficiency: '1.81 J/MH',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=rtx+5090',
    badge: 'Flagship',
  },
  {
    id: 'rtx-5080',
    name: 'NVIDIA RTX 5080',
    description: 'High performance GPU. 120 MH/s @ 200W. Excellent price-to-performance ratio.',
    category: 'mining-hardware' as const,
    subcategory: 'GPU',
    price: 1301,
    hashrate: '120 MH/s',
    power: '200W',
    efficiency: '1.67 J/MH',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=rtx+5080',
  },
  {
    id: 'rtx-5070-ti',
    name: 'NVIDIA RTX 5070 Ti',
    description: 'Excellent efficiency. 88 MH/s @ 150W. Sweet spot for multi-GPU mining rigs.',
    category: 'mining-hardware' as const,
    subcategory: 'GPU',
    price: 880,
    hashrate: '88 MH/s',
    power: '150W',
    efficiency: '1.70 J/MH',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=rtx+5070+ti',
    badge: 'Efficient',
  },
  {
    id: 'rx-6600',
    name: 'AMD RX 6600',
    description: 'Best efficiency GPU. 28.5 MH/s @ 60W. Budget-friendly entry point for GPU mining.',
    category: 'mining-hardware' as const,
    subcategory: 'GPU',
    price: 262,
    hashrate: '28.5 MH/s',
    power: '60W',
    efficiency: '2.11 J/MH',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=rx+6600',
    badge: 'Budget King',
  },
  {
    id: 'rx-6800-xt',
    name: 'AMD RX 6800 XT',
    description: 'Top AMD performance. 62 MH/s @ 110W. Great for multi-GPU rig builds.',
    category: 'mining-hardware' as const,
    subcategory: 'GPU',
    price: 640,
    hashrate: '62 MH/s',
    power: '110W',
    efficiency: '1.77 J/MH',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=rx+6800+xt',
  },

  // ═══════════════════════════════════════════════════════════════════
  // MINING EQUIPMENT & ACCESSORIES
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'evga-supernova-1600',
    name: 'EVGA SuperNOVA 1600 G+',
    description: '1600W 80+ Gold PSU. Fully modular. Perfect for 4-6 GPU mining rigs.',
    category: 'equipment' as const,
    subcategory: 'PSU',
    price: 299,
    specs: '1600W, 80+ Gold, Fully Modular',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=evga+supernova+1600',
  },
  {
    id: 'corsair-hx1500i',
    name: 'Corsair HX1500i',
    description: '1500W 80+ Platinum PSU. Digital monitoring. Enterprise-grade reliability.',
    category: 'equipment' as const,
    subcategory: 'PSU',
    price: 349,
    specs: '1500W, 80+ Platinum, iCUE Compatible',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=corsair+hx1500i',
    badge: 'Premium',
  },
  {
    id: 'server-psu-2400w',
    name: 'Server PSU 2400W Kit',
    description: 'HP Server PSU with breakout board. Cost-effective power for large ASIC operations.',
    category: 'equipment' as const,
    subcategory: 'PSU',
    price: 89,
    specs: '2400W, 94% Efficiency, Breakout Board Included',
    affiliate: true,
    affiliateLink: 'https://www.ebay.com/sch/i.html?_nkw=hp+server+psu+2400w+breakout',
    badge: 'Best Value',
  },
  {
    id: 'parallel-miner-psu',
    name: 'Parallel Miner 3000W PSU',
    description: '3000W mining-grade PSU. Built for 24/7 operation. Ideal for ASIC farms.',
    category: 'equipment' as const,
    subcategory: 'PSU',
    price: 499,
    specs: '3000W, 95% Efficiency, Mining Optimized',
    affiliate: true,
    affiliateLink: 'https://www.parallelminer.com/product-category/power-supplies/',
  },
  {
    id: 'mining-frame-8gpu',
    name: 'Open Air Mining Frame (8 GPU)',
    description: 'Stackable aluminum frame. Fits 8 GPUs with excellent airflow. Easy assembly.',
    category: 'equipment' as const,
    subcategory: 'Frame',
    price: 89,
    specs: '8 GPU Capacity, Aluminum, Stackable',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=mining+frame+8+gpu',
  },
  {
    id: 'mining-frame-12gpu',
    name: 'Mining Rig Frame (12 GPU)',
    description: 'Professional 12-GPU frame. Steel construction. Integrated fan mounts.',
    category: 'equipment' as const,
    subcategory: 'Frame',
    price: 149,
    specs: '12 GPU Capacity, Steel, Fan Mounts',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=mining+frame+12+gpu',
    badge: 'Pro',
  },
  {
    id: 'asic-rack-mount',
    name: 'ASIC Rack Mount Shelf',
    description: '4U server rack shelf. Holds 2 standard ASICs. Vented for airflow.',
    category: 'equipment' as const,
    subcategory: 'Frame',
    price: 79,
    specs: '4U, 24" Deep, 150lb Capacity',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=server+rack+shelf+4u',
  },
  {
    id: 'pcie-riser-6pack',
    name: 'PCIe Riser Cards (6-Pack)',
    description: 'Ver 009S Plus risers. USB 3.0 cable. LED indicators for troubleshooting.',
    category: 'equipment' as const,
    subcategory: 'Riser',
    price: 39,
    specs: '6x Ver 009S Plus, 60cm USB Cable, LED',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=pcie+riser+6+pack',
    badge: 'Essential',
  },
  {
    id: 'pcie-splitter',
    name: 'PCIe 1-to-4 Splitter',
    description: 'Expand one PCIe slot to 4. USB powered. Perfect for maximizing motherboard capacity.',
    category: 'equipment' as const,
    subcategory: 'Riser',
    price: 29,
    specs: '1x16 to 4x1, USB Powered',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=pcie+splitter+1+to+4',
  },
  {
    id: 'industrial-fan-6inch',
    name: 'Industrial Inline Fan (6")',
    description: '440 CFM inline duct fan. Variable speed. Quiet operation for enclosed setups.',
    category: 'equipment' as const,
    subcategory: 'Cooling',
    price: 89,
    specs: '440 CFM, 6", Variable Speed',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=inline+duct+fan+6+inch',
  },
  {
    id: 'box-fan-20inch',
    name: 'High Velocity Box Fan (20")',
    description: '2500 CFM industrial fan. Metal blades. Direct cooling for open-air rigs.',
    category: 'equipment' as const,
    subcategory: 'Cooling',
    price: 79,
    specs: '2500 CFM, 20", 3-Speed',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=industrial+box+fan+20',
  },
  {
    id: 'thermal-paste-mx4',
    name: 'Arctic MX-4 Thermal Paste',
    description: 'Premium thermal compound. 8.5 W/mK conductivity. Essential for GPU re-pasting.',
    category: 'equipment' as const,
    subcategory: 'Cooling',
    price: 12,
    specs: '4g, 8.5 W/mK, Non-Conductive',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=arctic+mx-4',
  },
  {
    id: 'pdu-8outlet',
    name: 'Tripp Lite PDU (8 Outlet)',
    description: 'Rack-mount PDU. 20A capacity. Circuit breaker protected. Digital amp meter.',
    category: 'equipment' as const,
    subcategory: 'Power',
    price: 149,
    specs: '8 Outlet, 20A, Metered, Rack Mount',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=tripp+lite+pdu+metered',
    badge: 'Pro',
  },
  {
    id: 'surge-protector-3600j',
    name: 'APC Surge Protector (3600J)',
    description: '3600 joule surge protection. 12 outlets. Coax and ethernet protection included.',
    category: 'equipment' as const,
    subcategory: 'Power',
    price: 59,
    specs: '12 Outlet, 3600J, Coax/Ethernet',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=apc+surge+protector+3600',
  },
  {
    id: 'kill-a-watt',
    name: 'P3 Kill A Watt Meter',
    description: 'Monitor power consumption. Essential for calculating mining profitability accurately.',
    category: 'equipment' as const,
    subcategory: 'Power',
    price: 35,
    specs: 'Watts, Amps, Volts, kWh, Hz',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=kill+a+watt+meter',
    badge: 'Essential',
  },

  // ═══════════════════════════════════════════════════════════════════
  // NETWORK INFRASTRUCTURE
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'switch-8port-gig',
    name: 'TP-Link 8-Port Gigabit Switch',
    description: 'Unmanaged switch for small mining operations. Plug-and-play. Metal case.',
    category: 'network' as const,
    subcategory: 'Switch',
    price: 29,
    specs: '8 Port, Gigabit, Unmanaged, Metal',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=tp-link+8+port+gigabit+switch',
  },
  {
    id: 'switch-24port-managed',
    name: 'Ubiquiti UniFi 24-Port PoE',
    description: 'Managed switch for mining farms. PoE+ support. VLAN capable. Remote management.',
    category: 'network' as const,
    subcategory: 'Switch',
    price: 399,
    specs: '24 Port, PoE+, Managed, Rack Mount',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=ubiquiti+unifi+switch+24',
    badge: 'Pro',
  },
  {
    id: 'switch-48port',
    name: 'Netgear 48-Port Gigabit Switch',
    description: 'Enterprise switch for large operations. Lifetime warranty. Quiet fanless design.',
    category: 'network' as const,
    subcategory: 'Switch',
    price: 299,
    specs: '48 Port, Gigabit, Fanless, Rack Mount',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=netgear+48+port+gigabit',
  },
  {
    id: 'cat6-cable-100ft',
    name: 'CAT6 Ethernet Cable (100ft)',
    description: 'Bulk CAT6 cable. 23AWG solid copper. UV resistant for outdoor runs.',
    category: 'network' as const,
    subcategory: 'Cabling',
    price: 39,
    specs: '100ft, CAT6, 23AWG, Solid Copper',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=cat6+cable+100ft+solid',
  },
  {
    id: 'cat6-patch-10pack',
    name: 'CAT6 Patch Cables (10-Pack)',
    description: 'Pre-made patch cables. Various lengths. Snagless boots. Color coded.',
    category: 'network' as const,
    subcategory: 'Cabling',
    price: 29,
    specs: '10 Pack, 3-10ft Mix, CAT6, Snagless',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=cat6+patch+cable+10+pack',
    badge: 'Value Pack',
  },
  {
    id: 'c13-power-cable-6pack',
    name: 'C13 Power Cables (6-Pack)',
    description: 'Server-grade power cables. 6ft length. 14AWG heavy duty. ASIC compatible.',
    category: 'network' as const,
    subcategory: 'Cabling',
    price: 24,
    specs: '6 Pack, 6ft, C13, 14AWG',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=c13+power+cable+heavy+duty',
  },
  {
    id: 'ups-1500va',
    name: 'CyberPower UPS 1500VA',
    description: 'Battery backup for network equipment. 10 outlets. USB monitoring. Sine wave output.',
    category: 'network' as const,
    subcategory: 'UPS',
    price: 199,
    specs: '1500VA/900W, 10 Outlet, Sine Wave',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=cyberpower+ups+1500va',
  },
  {
    id: 'ups-3000va-rack',
    name: 'APC Smart-UPS 3000VA Rack',
    description: 'Enterprise UPS for mining farms. 2U rack mount. Extended runtime option.',
    category: 'network' as const,
    subcategory: 'UPS',
    price: 1299,
    specs: '3000VA/2700W, 2U Rack, LCD',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=apc+smart+ups+3000va+rack',
    badge: 'Enterprise',
  },
  {
    id: 'temp-humidity-monitor',
    name: 'Govee WiFi Temp/Humidity Monitor',
    description: 'Remote monitoring via app. Alerts for temperature spikes. Essential for farms.',
    category: 'network' as const,
    subcategory: 'Monitoring',
    price: 35,
    specs: 'WiFi, App Alerts, 2-Year Data',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=govee+wifi+temperature+monitor',
    badge: 'Smart',
  },
  {
    id: 'smart-plug-4pack',
    name: 'Smart Power Strips (4-Pack)',
    description: 'WiFi controlled outlets. Energy monitoring. Schedule and remote reboot miners.',
    category: 'network' as const,
    subcategory: 'Monitoring',
    price: 49,
    specs: '4 Pack, WiFi, Energy Monitor, 15A',
    affiliate: true,
    affiliateLink: 'https://www.newegg.com/p/pl?d=smart+power+strip+wifi',
  },

  // ═══════════════════════════════════════════════════════════════════
  // HARDWARE WALLETS (Affiliate)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'trezor-model-t',
    name: 'Trezor Model T',
    description: 'Premium hardware wallet with touchscreen. Full ETC support. Open-source firmware.',
    category: 'hardware-wallets' as const,
    price: 219,
    affiliate: true,
    affiliateLink: 'https://affil.trezor.io/aff_c?offer_id=133&aff_id=34561',
    badge: 'Premium',
  },
  {
    id: 'trezor-safe-3',
    name: 'Trezor Safe 3',
    description: 'Latest Trezor model. Secure element chip. Compact design. ETC compatible.',
    category: 'hardware-wallets' as const,
    price: 79,
    affiliate: true,
    affiliateLink: 'https://affil.trezor.io/aff_c?offer_id=133&aff_id=34561',
  },
  {
    id: 'ledger-nano-x',
    name: 'Ledger Nano X',
    description: 'Bluetooth-enabled hardware wallet. 100+ app capacity. Full ETC support.',
    category: 'hardware-wallets' as const,
    price: 149,
    affiliate: true,
    affiliateLink: 'https://shop.ledger.com/?r=bbf4d7f32e72',
  },
  {
    id: 'ledger-nano-s-plus',
    name: 'Ledger Nano S Plus',
    description: 'Best-selling hardware wallet. Larger screen. ETC Ledger Live support.',
    category: 'hardware-wallets' as const,
    price: 79,
    affiliate: true,
    affiliateLink: 'https://shop.ledger.com/?r=bbf4d7f32e72',
    badge: 'Best Seller',
  },

  // ═══════════════════════════════════════════════════════════════════
  // APPAREL (Printful - Coming Soon)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'etc-tshirt-black',
    name: 'ETC Classic Logo Tee',
    description: 'Premium cotton t-shirt with embroidered Ethereum Classic logo.',
    category: 'apparel' as const,
    price: 29.99,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Forest Green'],
  },
  {
    id: 'etc-hoodie',
    name: 'ETC Proof-of-Work Hoodie',
    description: 'Heavyweight hoodie with "Secured by Proof-of-Work" design.',
    category: 'apparel' as const,
    price: 59.99,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Charcoal'],
  },
  {
    id: 'etc-cap',
    name: 'ETC Snapback Cap',
    description: 'Structured snapback with embroidered ETC logo.',
    category: 'apparel' as const,
    price: 24.99,
    colors: ['Black', 'Green'],
  },

  // ═══════════════════════════════════════════════════════════════════
  // ACCESSORIES (Printful - Coming Soon)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'etc-mug',
    name: 'ETC Developer Mug',
    description: 'Ceramic mug with "Building on ETC" design.',
    category: 'accessories' as const,
    price: 16.99,
    colors: ['White', 'Black'],
  },
  {
    id: 'etc-sticker-pack',
    name: 'ETC Sticker Pack',
    description: 'Set of 10 high-quality vinyl stickers with various ETC designs.',
    category: 'accessories' as const,
    price: 9.99,
  },
  {
    id: 'etc-mousepad',
    name: 'ETC Mining Mousepad',
    description: 'Large desk mousepad with network visualization design.',
    category: 'accessories' as const,
    price: 19.99,
  },
]

const categories = [
  { id: 'all' as const, label: 'All Products', count: products.length },
  { id: 'mining-hardware' as const, label: 'Mining Hardware', count: products.filter(p => p.category === 'mining-hardware').length },
  { id: 'equipment' as const, label: 'Equipment & Accessories', count: products.filter(p => p.category === 'equipment').length },
  { id: 'network' as const, label: 'Network Infrastructure', count: products.filter(p => p.category === 'network').length },
  { id: 'hardware-wallets' as const, label: 'Hardware Wallets', count: products.filter(p => p.category === 'hardware-wallets').length },
  { id: 'apparel' as const, label: 'Apparel', count: products.filter(p => p.category === 'apparel').length },
  { id: 'accessories' as const, label: 'Accessories', count: products.filter(p => p.category === 'accessories').length },
]

// Get icon for category
function getCategoryIcon(category: string) {
  switch (category) {
    case 'mining-hardware':
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
        </svg>
      )
    case 'equipment':
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      )
    case 'network':
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
      )
    case 'hardware-wallets':
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      )
    default:
      return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      )
  }
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const isAffiliate = 'affiliate' in product && product.affiliate
  const hasBadge = 'badge' in product && product.badge
  const hasHashrate = 'hashrate' in product
  const hasSpecs = 'specs' in product

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden"
    >
      {/* Product Image Placeholder */}
      <div className="relative aspect-square bg-[var(--bg)] flex items-center justify-center">
        <div className="text-center p-4">
          <div className="mx-auto w-12 h-12 flex items-center justify-center text-[var(--color-text-muted)]">
            {getCategoryIcon(product.category)}
          </div>
          <p className="mt-2 text-xs text-[var(--color-text-muted)]">
            {'subcategory' in product ? product.subcategory : product.category.replace('-', ' ')}
          </p>
        </div>
        {hasBadge && (
          <span className="absolute top-2 left-2 rounded-full bg-[var(--color-primary)]/20 px-2 py-0.5 text-xs font-medium text-[var(--color-primary)]">
            {product.badge}
          </span>
        )}
        {isAffiliate && !hasBadge && (
          <span className="absolute top-2 right-2 rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-400">
            Partner
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-white">{product.name}</h3>
        <p className="mt-1 text-sm text-[var(--color-text-muted)] line-clamp-2">{product.description}</p>

        {/* Mining hardware specs */}
        {hasHashrate && 'power' in product && (
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
              {product.hashrate}
            </span>
            <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs text-amber-400">
              {product.power}
            </span>
            {'efficiency' in product && (
              <span className="rounded bg-blue-500/10 px-2 py-0.5 text-xs text-blue-400">
                {product.efficiency}
              </span>
            )}
          </div>
        )}

        {/* Equipment/Network specs */}
        {hasSpecs && (
          <div className="mt-3">
            <span className="rounded bg-[var(--bg)] px-2 py-1 text-xs text-[var(--color-text-muted)]">
              {product.specs}
            </span>
          </div>
        )}

        {/* Apparel sizes */}
        {'sizes' in product && product.sizes && (
          <div className="mt-3 flex flex-wrap gap-1">
            {product.sizes.map(size => (
              <span key={size} className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                {size}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-[var(--color-primary)]">
            {product.price >= 1000 ? `$${product.price.toLocaleString()}` : `$${product.price}`}
          </span>
          {isAffiliate && 'affiliateLink' in product ? (
            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/30"
            >
              Shop Now
            </a>
          ) : (
            <button
              disabled
              className="rounded-lg bg-[var(--color-primary)]/20 px-4 py-2 text-sm font-medium text-[var(--color-primary)]/50 cursor-not-allowed"
            >
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  // Stats for hero
  const totalProducts = products.length
  const partnerCount = 8 // eBay, Newegg, Trezor, Ledger, Parallel Miner, etc.

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              PoW Mining Hardware & Equipment
            </span>

            <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              ETC Hardware Store
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
              Professional mining hardware, equipment, and network infrastructure for the Ethereum Classic ecosystem.
              ASICs, GPUs, power supplies, cooling, and everything you need to mine ETC.
            </p>

            {/* Quick Stats */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">{totalProducts}</span>
                <span className="text-[var(--color-text-muted)]">Products</span>
              </div>
              <div className="h-8 w-px bg-[var(--border)]" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">{categories.length - 1}</span>
                <span className="text-[var(--color-text-muted)]">Categories</span>
              </div>
              <div className="h-8 w-px bg-[var(--border)]" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">{partnerCount}+</span>
                <span className="text-[var(--color-text-muted)]">Partners</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Store Info Banner */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <svg aria-hidden="true" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium text-[var(--color-primary)]">Mining Hardware Available Now</p>
                  <p className="text-sm text-[var(--color-primary)]/80">
                    Shop ASICs, GPUs, PSUs, and mining equipment from trusted retailers. Data sourced from WhatToMine.
                  </p>
                </div>
              </div>
              <Link
                href="/mining/hardware"
                className="rounded-lg bg-[var(--color-primary)]/20 px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/30"
              >
                View Hardware Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[var(--color-primary)] text-black'
                    : 'bg-[var(--panel)] text-[var(--color-text-muted)] hover:text-white'
                }`}
              >
                {category.label}
                <span className={`ml-2 ${activeCategory === category.id ? 'text-black/60' : 'text-[var(--color-text-muted)]'}`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Our Store */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6"
          >
            <h2 className="text-xl font-bold text-white">About Our Store</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="font-medium text-[var(--color-primary)]">Mining Hardware</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  ETChash ASICs and GPUs from manufacturers like Bitmain, iPollo, Jasminer, NVIDIA, and AMD.
                  Links to eBay and Newegg for competitive pricing.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[var(--color-primary)]">Equipment & Accessories</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Server-grade PSUs, mining rig frames, PCIe risers, cooling solutions, PDUs, and
                  everything needed to build professional mining operations.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[var(--color-primary)]">Network Infrastructure</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Ethernet switches, cabling, UPS battery backups, and monitoring equipment
                  for reliable mining farm connectivity.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[var(--color-primary)]">Hardware Wallets & Merch</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Trezor and Ledger hardware wallets via affiliate partnerships. ETC-branded apparel
                  and accessories coming soon via Printful.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Designs CTA */}
      <section className="px-6 pb-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white">Submit Your Design</h2>
            <p className="mx-auto mt-2 max-w-xl text-[var(--color-text-muted)]">
              Have a great ETC design idea? We&apos;re looking for community submissions for official
              merchandise. Selected designs earn royalties on each sale.
            </p>
            <div className="mt-6">
              <Link
                href="/contact?type=design"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                Submit Design
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            Hardware specs and pricing are sourced from WhatToMine and may change. Always verify current pricing and availability before purchasing.
            Mining hardware links redirect to eBay or Newegg. Hardware wallet purchases are processed through official manufacturer stores.
            EthereumClassic.com may receive affiliate commission on qualifying purchases. Not financial advice.
          </p>
        </div>
      </section>
    </main>
  )
}

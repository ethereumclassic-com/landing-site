import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ethereum Classic — Proof-of-Work Smart Contracts',
    short_name: 'ETC',
    description: 'The only mature Proof-of-Work blockchain with smart contracts. Get wallets, buy ETC, and discover apps.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0F14',
    theme_color: '#3AB83A',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Each entry stands in for a URL that was published. Retire one only when the
  // inbound links are known to be gone.
  async redirects() {
    return [
      {
        source: '/research/fifthening',
        destination: '/block-reward-countdown',
        permanent: true,
      },
      {
        source: '/research/fifthing',
        destination: '/block-reward-countdown',
        permanent: true,
      },
      {
        source: '/olympia/clients/besu',
        destination: '/olympia/clients',
        permanent: true,
      },
      {
        source: '/build/clients/hyperledger-besu',
        destination: '/build/clients',
        permanent: true,
      },
      // Besu reaches ETC through the plugin framework, so it has no app card.
      {
        source: '/apps/besu',
        destination: '/build/clients/besu-etc',
        permanent: true,
      },
      {
        source: '/wallet/classic-os',
        destination: '/wallet',
        permanent: true,
      },
      {
        source: '/wallet/fukuii-gui',
        destination: '/wallet',
        permanent: true,
      },
      {
        source: '/apps/fukuii-gui',
        destination: '/apps',
        permanent: true,
      },
      // Research report pages that had no report behind them.
      {
        source: '/research/reports',
        destination: '/research',
        permanent: true,
      },
      {
        source: '/research/reports/:slug',
        destination: '/research',
        permanent: true,
      },
      // The fee market argument for Olympia, which lives in the Olympia hub.
      {
        source: '/mining/fee-market',
        destination: '/olympia/miners',
        permanent: true,
      },
      // The fee dashboard, rebuilt on observed fees under the mining section.
      {
        source: '/research/fees',
        destination: '/mining/fees',
        permanent: true,
      },
      // The retired account prototype, which kept passwords in the browser.
      {
        source: '/account',
        destination: '/',
        permanent: true,
      },
      {
        source: '/account/:path*',
        destination: '/',
        permanent: true,
      },
      // A preview of a mining pool the site does not run, with invented statistics.
      {
        source: '/pool',
        destination: '/mining/pools',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

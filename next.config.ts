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
      {
        source: '/wallet/classic-os',
        destination: '/wallet/fukuii-gui',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

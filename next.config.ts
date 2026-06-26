import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/research/fifthening',
        destination: '/block-reward-countdown',
        permanent: true,
      },
      {
        source: '/olympia/security',
        destination: '/build/clients/core-geth-security-audit',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

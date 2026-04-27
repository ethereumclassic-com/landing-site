import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/research/fifthening',
        destination: '/block-reward-countdown',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

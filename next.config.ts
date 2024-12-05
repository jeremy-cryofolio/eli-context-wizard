import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/screener",
        destination: "/screener/step1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

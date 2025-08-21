import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/about-me",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

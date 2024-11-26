import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/', // The root path
        destination: '/checkin', // Redirect to /checkin
        permanent: true, // This is a permanent redirect (301)
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;

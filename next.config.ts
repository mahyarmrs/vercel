import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/ingest/:path*",
        destination: "http:/aeza.vtrust.tech:35938//:path*",
      },
    ];
  },
};

export default nextConfig;

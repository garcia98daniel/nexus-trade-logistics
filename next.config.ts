import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [{ source: "/comercio-internacional", destination: "/exportaciones", permanent: true }];
  },
};

export default nextConfig;

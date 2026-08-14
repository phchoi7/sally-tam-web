import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

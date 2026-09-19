import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Ibge-media-house",
  assetPrefix: "/Ibge-media-house/",
  trailingSlash: true,
};

export default nextConfig;

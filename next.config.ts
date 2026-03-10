import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/CivilClaw",
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;

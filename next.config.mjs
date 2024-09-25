/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(process.cwd(), "src/app");
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.200.189",
        port: "9003",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;

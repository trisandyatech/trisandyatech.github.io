/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "www.trisandya.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  output: "export",
  distDir: "build",
};

module.exports = nextConfig;

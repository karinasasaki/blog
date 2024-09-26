/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.panelinha.com.br",
        pathname: "**",
      }
    ]
  }
};

export default nextConfig;

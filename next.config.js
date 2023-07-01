/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/balits-peter-marton-cv-eng.pdf",
        destination: "/public/balits-peter-marton-cv-eng.pdf",
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['plenum.a-h-y.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'plenum.a-h-y.com',
        port: '8000',
        pathname: '/storage/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
};

export default nextConfig;

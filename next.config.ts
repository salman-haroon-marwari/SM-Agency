import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sm-agency.vercel.app',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    // Handle non-module files in node_modules that cause Turbopack build errors
    if (!isServer) {
      config.module.rules.push({
        test: /\\.md$/,
        use: 'raw-loader',
      });
    }
    return config;
  },
  outputFileTracingRoot: process.env.NODE_ENV === 'production' ? undefined : '.',
  transpilePackages: ['raw-loader'], // Add this to handle raw-loader properly

};

export default nextConfig;

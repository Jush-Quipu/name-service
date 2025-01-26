import type { NextConfig } from "next";
import { ProvidePlugin } from 'webpack';
import stream from 'stream-browserify';
import crypto from 'crypto-browserify';
import process from 'process/browser';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        stream: stream,
        crypto: crypto,
        buffer: require.resolve('buffer'),
        process: process
      };
      
      config.plugins.push(
        new ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser',
        })
      );
    }
    return config;
  },
  transpilePackages: [
    '@solana/wallet-adapter-base',
    '@solana/wallet-adapter-react',
    '@solana/wallet-adapter-react-ui',
    '@solana/wallet-adapter-wallets',
    '@solana/web3.js'
  ]
};

export default nextConfig;

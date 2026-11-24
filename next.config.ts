import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: { mode: 'on' },
});

const nextConfig: NextConfig = { agentRules: false };

export default withVanillaExtract(nextConfig);

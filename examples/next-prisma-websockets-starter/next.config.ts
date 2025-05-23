import { NextConfig } from 'next';

/**
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
export default {
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    APP_URL: process.env.APP_URL,
    WS_URL: process.env.WS_URL,
  },
  /** We run eslint as a separate task in CI */
  eslint: { ignoreDuringBuilds: !!process.env.CI },
} satisfies NextConfig;

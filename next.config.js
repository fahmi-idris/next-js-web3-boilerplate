/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const nextConfig = {
  target: 'server',
  /**
   * Ignoring ESLint on build in favor of GitLab CI.
   *
   * @see https://nextjs.org/docs/api-reference/next.config.js/ignoring-eslint
   */
  eslint: {
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  },
};

module.exports = nextConfig;

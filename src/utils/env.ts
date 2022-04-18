import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export function getServerRuntimeEnv(key: string, defaultValue?: string) {
  return serverRuntimeConfig[key] || defaultValue;
}

export default function getRuntimeEnv(key: string, defaultValue?: string) {
  return publicRuntimeConfig[key] || defaultValue;
}

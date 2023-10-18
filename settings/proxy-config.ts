const proxyConfigMappings: Record<ProxyType, ProxyConfig> = {
  dev: {
    prefix: '/api',
    target: 'http://127.0.0.1:3001',
  },
  test: {
    prefix: '/api',
    target: 'http://127.0.0.1:3001',
  },
  prod: {
    prefix: '/api',
    target: 'http://127.0.0.1:3001',
  },
}

export function getProxyConfig(envType: ProxyType = 'dev'): ProxyConfig {
  return proxyConfigMappings[envType]
}

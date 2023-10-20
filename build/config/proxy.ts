import type { ProxyOptions } from 'vite'
import { getProxyConfig } from '../../settings/proxy-config'

export function createViteProxy(isUseProxy = true, proxyType: ProxyType) {
  if (!isUseProxy) return undefined

  const proxyConfig = getProxyConfig(proxyType)
  const proxy: Record<string, string | ProxyOptions> = {
    [proxyConfig.prefix]: {
      target: proxyConfig.target,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(new RegExp(`^${proxyConfig.prefix}`), ''),
    },
  }
  console.log('proxy34',JSON.stringify(proxy))
  return proxy
}

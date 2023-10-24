import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'imageWorkbench',
  path: '/imageWorkbench',
  component: Layout,
  redirect: '/imageWorkbench',
  meta: {
    title: '图片工具',
    icon: 'mdi:home',
    order: 0,
  },
  children: [
    {
      name: 'imageWatermark',
      path: 'imageWatermark',
      component: () => import('./imageWatermark/index.vue'),
      meta: {
        title: '图片加水印',
        icon: 'mdi:home',
        order: 0,
      },
    },
  ],
} as RouteType
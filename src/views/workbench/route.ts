import type { RouteType } from '~/types/router'
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'voiceWorkbench',
  path: '/',
  component: Layout,
  redirect: '/inputTextDubbing',
  meta: {
    title: '文字转语言',
    icon: 'mdi:home',
    order: 0,
  },
  children: [
    {
      name: 'inputTextDubbing',
      path: 'inputTextDubbing',
      component: () => import('./inputTextDubbing/index.vue'),
      meta: {
        title: '输入文字配音',
        icon: 'mdi:home',
      },
    },{
      name: 'importFileDubbing',
      path: 'importFileDubbing',
      component: () => import('./importFileDubbing/index.vue'),
      meta: {
        title: '导入文件配音',
        icon: 'mdi:home',
      },
    }
  ],
} as RouteType

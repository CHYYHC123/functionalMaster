import { defineStore } from 'pinia'
import { filterAsyncRoutes } from './helpers'
import { asyncRoutes, basicRoutes } from '@/router/routes'
import type { RoutesType } from '~/types/router'

export const usePermissionStore = defineStore('permission', {
  state() {
    return {
      accessRoutes: <RoutesType> [],
    }
  },
  getters: {
    routes(): RoutesType {
      return basicRoutes.concat(this.accessRoutes)
    },
    menus(): RoutesType {
      return this.routes.filter(route => route.name && !route.isHidden)
    },
  },
  actions: {
    // 获取角色对应的权限
    generateRoutes(role: Array<string> = []): RoutesType {
      // 获取所有路由
      const accessRoutes = filterAsyncRoutes(asyncRoutes, role)
      this.accessRoutes = accessRoutes
      return accessRoutes
    },

    resetPermission() {
      this.$reset()
    },
  },
})

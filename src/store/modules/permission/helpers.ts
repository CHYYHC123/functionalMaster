import type { RouteType, RoutesType } from '~/types/router'

// 判断当前角色是否有对应路由权限
function hasPermission(route: RouteType, role: string[]) {
  // 不需要权限直接返回true
  if (!route.meta?.requireAuth){
    return true
  }

  const routeRole = route.meta?.role ? route.meta.role : []
  // 登录用户没有角色或者路由没有设置角色判定为没有权限
  if (!role.length || !routeRole.length){
    return false
  }
    
  // 路由指定的角色包含任一登录用户角色则判定有权限
  return role.some(item => routeRole.includes(item))
}

// 根据角色匹配对应的路由
export function filterAsyncRoutes(routes: RoutesType = [], role: Array<string>): RoutesType {
  const ret: RoutesType = []
  // console.log('routes3434',JSON.stringify(routes))
  routes.forEach((route) => {
    if (hasPermission(route, role)) {
      const curRoute: RouteType = {
        ...route,
        children: [],
      }
      // console.log('curRoute45',JSON.stringify(curRoute))
      // 处理二级路由
      if (route.children && route.children.length){
        // 递归处理三级或四级路由
        curRoute.children = filterAsyncRoutes(route.children, role) || []
      }else{
        // 删除对象空字段 --- children
        Reflect.deleteProperty(curRoute, 'children')
      }
      ret.push(curRoute)
    }
  })
  return ret
}

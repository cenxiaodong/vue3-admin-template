import { ref, h } from 'vue'
import { defineStore } from 'pinia'
import routes from '@/router/index'
import { AntdIcon } from '@/utils/antdIcon'
import { useRoute, useRouter } from 'vue-router'

/**
 * 根据权限列表筛选异步路由配置
 * @param {Array} routes - 路由配置表
 * @returns {Array} - 筛选后的路由配置
 */
function filterAsyncRouter(routes) {
  const res = []
  routes.forEach((route) => {
    const tmp = { ...route }
    res.push({
      key: tmp.path,
      icon: () => h(AntdIcon, { icon: tmp.meta.icon }),
      label: tmp.name,
      title: tmp.name,
      children:
        tmp.children &&
        tmp.children.map((child) => {
          return {
            key: tmp.path + '/' + child.path,
            label: child.name,
            title: child.name
          }
        })
    })
  })

  return res
}
export const useMenusStore = defineStore('menus', () => {
  // 菜单数据
  const menusList = ref([])
  // 生成菜单
  function generateMenus() {
    return new Promise(async (resolve, reject) => {
      const route = useRoute()
      const asyncRoutes = route.matched[0].children
      menusList.value = filterAsyncRouter(asyncRoutes)
      console.log(menusList.value)

      resolve(menusList.value)
    })
  }
  return { generateMenus }
})

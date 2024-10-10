import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '*',
    //   redirect: '/'
    // },
    {
      path: '/',
      redirect: '/dashboard',
      component: Layout,
      children: [
        {
          path: '/dashboard',
          component: () => import('@/views/dashboard/index.vue'),
          name: '仪表盘',
          meta: { title: '仪表盘', icon: 'HomeOutlined', requiresAuth: true }
        },
        {
          path: '/order',
          component: () => import('@/views/order/index.vue'),
          name: '订单管理',
          redirect: '/order/orderList',
          meta: { title: '订单管理', icon: 'DotChartOutlined', requiresAuth: true },
          children: [
            {
              path: 'orderList',
              component: () => import('@/views/order/orderList.vue'),
              name: '订单列表',
              meta: { title: '订单列表', icon: 'dashboard', requiresAuth: true }
            },
            {
              path: 'orderDetail',
              component: () => import('@/views/order/orderDetail.vue'),
              name: '订单详情',
              meta: { title: '订单详情', icon: 'dashboard', requiresAuth: true }
            }
          ]
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  // const searchStore = useSearchStore()
  // searchStore.showSearchPanel(false)
  NProgress.start()
  if (to.meta.requiresAuth) {
    // const isLoggedIn = dbUtils.get('token')
    // // 检查用户是否已经登录
    // if (isLoggedIn) {
    //   // 已经登录 访问登录页则直接跳到主页
    //   if (to.name === 'login') {
    //     NProgress.done()
    //     return next('/')
    //   }
    //   // 已经登录 访问非登录页则需要验证权限
    //   const permissionList = dbUtils.get('perms')
    //   // 如果还未找到缓存的权限数组则返回登录页
    //   if (!permissionList) {
    //     // 清空所有缓存数据
    //     dbUtils.clear()
    //     NProgress.done()
    //     // 重定向到登录页
    //     return next({ name: 'login' })
    //   }
    //   const hasRoles = hasPermission(permissionList, to)
    //   if (hasRoles) {
    //     // 有权限直接访问
    //     return next()
    //   }
    //   NProgress.done()
    //   // 无权限则重定向到401
    //   return next({ name: '401' })
    // }
    // NProgress.done()
    // // 未登录
    // // 清空所有缓存数据
    // dbUtils.clear()
    // // 重定向到登录页
    // return next({ name: 'login' })
  }
  NProgress.done()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
  window.document.title = to.meta.title
})

export default router

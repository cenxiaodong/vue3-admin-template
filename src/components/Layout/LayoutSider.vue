<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useGlobalConfigStore } from '@/stores/index'
const globalConfigStore = useGlobalConfigStore()
const router = useRouter()
const route = useRoute()

defineProps({
  menus: {
    type: Array,
    required: true
  }
})

const state = reactive({
  collapsed: false,
  selectedKeys: [],
  openKeys: [] // 当前展开的 SubMenu 菜单项 key 数组
})
const title = ref(import.meta.env.VITE_APP_TITLE)

const handleRouter = (info) => {
  router.push(info.key)
}
// 获取当前路径的选中项
const getCurrentPathSelectedKeys = () => {
  const { path, matched } = route
  const [parentRoute] = matched
  if (!parentRoute || !parentRoute.children) return
  const routeList = parentRoute.children
  const firstLevelMatch = routeList.find((item) => item.path === path)
  if (firstLevelMatch) {
    state.selectedKeys = [firstLevelMatch.path]
    return
  }
  routeList.forEach((item) => {
    if (item.children && item.children.length) {
      const secondLevelMatch = item.children.find(
        (childItem) => `${item.path}/${childItem.path}` === path
      )
      if (secondLevelMatch) {
        state.selectedKeys = [`${item.path}/${secondLevelMatch.path}`]
        state.openKeys = [item.path]
      }
    }
  })
}
onMounted(() => {
  getCurrentPathSelectedKeys()
})
</script>
<template>
  <a-layout-sider
    class="layout-sider"
    v-model:collapsed="globalConfigStore.collapsed"
    :trigger="null"
    collapsible
  >
    <div class="admin-logo">
      <transition enter-active-class="animate__animated animate__fadeInLeft">
        <div v-if="globalConfigStore.collapsed" class="wh-full flex-center" to="/">
          <img class="logo" src="@/assets/icon/logo.png" alt="" />
        </div>
        <div v-else class="wh-full flex-center" to="/">
          <span class="logo-title">{{ title }}</span>
        </div>
      </transition>
    </div>
    <a-menu
      class="admin-menu"
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="light"
      :inline-collapsed="state.collapsed"
      :items="menus"
      @click="handleRouter"
    ></a-menu>
  </a-layout-sider>
</template>
<style lang="scss">
@import '@/assets/styles/layout/_siderbar.scss';
</style>

<template>
  <a-layout
    class="layout-wrap layout_fixed_page"
    :class="globalConfigStore.collapsed ? 'layout_open_sider' : 'layout_close_sider'"
  >
    <LayoutSider :menus="menuList" />
    <a-layout class="layout-content-wrap">
      <LayoutHeader class="lay_header flex-space-between-center" />
      <div class="lay_card_wrap">
        <LayoutContent class="content-card" />
      </div>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { ref } from 'vue'
import LayoutSider from './LayoutSider.vue'
import LayoutHeader from './LayoutHeader.vue'
import LayoutContent from './LayoutContent.vue'
import { useMenusStore } from '@/stores/index'
import { useGlobalConfigStore } from '@/stores/index'
const globalConfigStore = useGlobalConfigStore()
let menuList = ref([])
const initSideMenus = async () => {
  const menusStore = useMenusStore()
  menuList.value = await menusStore.generateMenus()
}
initSideMenus()
</script>
<style lang="scss">
@import '@/assets/styles/layout/_layout.scss';
</style>

<script setup>
// 菜单切换开关
import CollapseToggle from './components/CollapseToggle.vue'
// 面包屑
import Breadcrumb from './components/Breadcrumb.vue'
// 切换主题
import ToggleTheme from './components/ToggleTheme.vue'
// 个人中心
import UserAvatar from './components/UserAvatar.vue'
</script>
<template>
  <a-layout-header>
    <div class="header-left">
      <CollapseToggle />
      <Breadcrumb />
    </div>
    <div class="header-right">
      <ToggleTheme />
      <UserAvatar />
    </div>
  </a-layout-header>
</template>
<style lang="scss" scoped></style>

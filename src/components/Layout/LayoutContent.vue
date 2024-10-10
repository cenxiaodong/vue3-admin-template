<script setup></script>
<template>
  <a-layout-content>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </a-layout-content>
</template>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in 0.1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

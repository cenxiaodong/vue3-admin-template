<script setup>
import { ref } from 'vue'
import PickColors from 'vue-pick-colors'
import { useGlobalConfigStore } from '@/stores/index'
const globalConfigStore = useGlobalConfigStore()
const headleChangeColor = (color) => {
  globalConfigStore.toggleThemeColor(color)
}
</script>
<template>
  <pick-colors
    class="toggle-theme"
    v-model:value="globalConfigStore.appThemeColor"
    placement="left"
    size="25"
    @change="headleChangeColor"
  />
</template>
<style lang="scss" scoped>
.toggle-theme {
  display: flex !important;
  align-items: center;
  margin-right: 15px;
}
</style>

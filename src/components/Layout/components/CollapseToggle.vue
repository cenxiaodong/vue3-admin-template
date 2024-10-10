<script setup>
import { AntdIcon } from '@/utils/antdIcon'
import { useGlobalConfigStore } from '@/stores/index'
const globalConfigStore = useGlobalConfigStore()
const toggleStatus = () => {
  globalConfigStore.collapsed = !globalConfigStore.collapsed
}
</script>
<template>
  <AntdIcon
    icon="MenuUnfoldOutlined"
    v-if="globalConfigStore.collapsed"
    class="trigger"
    @click="toggleStatus"
  ></AntdIcon>
  <AntdIcon icon="MenuFoldOutlined" v-else class="trigger" @click="toggleStatus"></AntdIcon>
</template>
<style lang="scss" scoped>
.trigger {
  font-size: 18px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.trigger:hover {
  color: #1890ff;
}
</style>

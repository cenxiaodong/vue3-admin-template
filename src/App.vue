<script setup>
import { useGlobalConfigStore } from '@/stores/index'
const globalConfigStore = useGlobalConfigStore()
globalConfigStore.initThenemeColor()
</script>
<template>
  <RouterView />
</template>

<style scoped>
</style>

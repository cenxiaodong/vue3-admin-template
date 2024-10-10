<script setup>
import { ref, watch, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
const currentRoute = useRoute()
const breadcrumbs = ref([])

watch(
  () => currentRoute.path,
  (path) => {
    if (path.startsWith('/redirect/')) {
      return
    }
    getBreadcrumb()
  }
)

function getBreadcrumb() {
  console.log(currentRoute.matched, 'currentRoute')
  let matched = currentRoute.matched.filter((item) => item.meta && item.meta.title)
  breadcrumbs.value = matched.filter((item) => {
    return item.meta && item.meta.title
  })
}

onBeforeMount(() => {
  getBreadcrumb()
})
</script>
<template>
  <a-breadcrumb separator="/">
    <a-breadcrumb-item v-for="item in breadcrumbs" :key="item.path">
      {{ item.meta.title }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
<style lang="scss" scoped></style>

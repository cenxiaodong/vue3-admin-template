<script setup>
import { ref } from 'vue'
const top = ref(10)
</script>
<template>
  <div class="">
    <div style="width: 100%; height: 300px">111</div>
    <!-- <a-affix :offset-top="top">
      <a-button type="primary" @click="top += 10">Affix top</a-button>
    </a-affix> -->
    <a-button type="primary" class="aaaa">Affix top</a-button>
    <div style="width: 100%; height: 300px; border: 1px solid blue">222</div>

    <div style="width: 100%; height: 300px; border: 1px solid yellow">222</div>
    <div style="width: 100%; height: 300px; border: 1px solid green">222</div>
  </div>
</template>
<style lang="scss" scoped>
.aaaa {
  position: sticky;
  top: 200;
}
</style>

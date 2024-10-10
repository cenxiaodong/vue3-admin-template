<script setup>
import { ref } from 'vue'
const show = ref(true)
const containerRef = ref()
const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left'
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8'
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100
  }
]
const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  })
}
// window.addEventListener('scroll', handerScroll, true)
// function handerScroll(t) {
//   console.log(t.target.scrollTop)
// }
</script>
<template>
  <div class="" ref="containerRef">
    <transition enter-active-class="animate__animated animate__fadeInLeft">
      <!-- <div v-if="show">ZY</div>
      <div v-else>ZHOUYI</div> -->
      <router-link v-if="show" class="wh-full flex-center" to="/"> ZY </router-link>
      <router-link v-else class="wh-full flex-center" to="/">
        <span class="logo-title">ZHOUYI</span>
      </router-link>
    </transition>
    <div><button @click="show = !show">切换</button></div>
    <div class="a">
      <div>111</div>
      <div>2222</div>
    </div>
    <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 300 }">
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'operation'">
          <a>action</a>
        </template>
      </template>
    </a-table>
    <a-affix :target="() => containerRef">
      <a-button type="primary">Fixed at the top of container</a-button>
    </a-affix>
    <div class="poster"></div>
    <a-affix :offset-top="200">
      <a-button type="primary" @click="top += 10">Affix top</a-button>
    </a-affix>
    <div style="height: 1000px"></div>
  </div>
</template>
<style lang="scss" scoped>
.a {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.poster {
  position: sticky;
  top: 200;
  width: 100px;
  height: 30px;
  border: 1px solid blue;
}
</style>

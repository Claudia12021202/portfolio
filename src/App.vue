<template>
  <div id="app">
    <!-- 導覽列 Navigation -->
    <Navbar />

    <!-- 這個標籤才是真正顯示 Home.vue 內容的地方 -->
    <RouterView /> 
  </div>
</template>

<script>
import Navbar from './component/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>

<style scoped></style>

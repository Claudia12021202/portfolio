<template>
  <div id="app">
    <!-- 這裡可以放導覽列 Navigation -->
    <nav>
      <router-link to="/home">首頁</router-link>
    </nav>

    <!-- 這個標籤才是真正顯示 Home.vue 內容的地方 -->
    <RouterView /> 
  </div>
</template>

<style scoped></style>
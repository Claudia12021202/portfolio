<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="nav-link">首頁</router-link>
      <router-link to="/portfolio1" class="nav-link">作品集1</router-link>
      <router-link to="/portfolio2" class="nav-link">作品集2</router-link>
      <router-link to="/about" class="nav-link">關於我</router-link>
      <router-link to="/contact" class="nav-link">聯絡我</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #555;
  transform: translateY(-2px);
}

.nav-link.router-link-active {
  background-color: #007bff;
  color: #fff;
}
</style>

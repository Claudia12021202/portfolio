<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="nav-link">首頁</router-link>
      <router-link to="/case-study/ai100" class="nav-link">ai100</router-link>
      <router-link to="/pages/ai100" class="nav-link">pages_ai</router-link>
      <!-- <router-link to="/about" class="nav-link">關於我</router-link> -->
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 60px;
  background: rgba(239, 232, 230, 0.92); /* #efe8e6 主色 + 透明 */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid #e0d5d1;
}

.navbar-container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0 1.5rem;
}

.nav-link {
  color: #5e2337; /* 副色酒紅 */
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
  position: relative;
}

/* hover — 極淡酒紅底 */
.nav-link:hover {
  background: rgba(94, 35, 55, 0.08);
  color: #5e2337;
}

/* active — 跳色金色底線 */
.nav-link.router-link-active {
  color: #5e2337;
  background: transparent;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 1rem;
  right: 1rem;
  height: 2px;
  background: #c9a96e; /* 跳色舊金 */
  border-radius: 1px;
}
</style>

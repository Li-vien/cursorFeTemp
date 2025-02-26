<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <nav class="main-nav">
      <RouterLink to="/" class="nav-link">首页</RouterLink>
      <RouterLink to="/subscription" class="nav-link">订阅</RouterLink>
      <RouterLink to="/about" class="nav-link">关于</RouterLink>
    </nav>
  </header>

  <main class="app-content">
    <RouterView />
  </main>
</template>

<style scoped>
.app-header {
  background-color: #FFFFFF;
  border-bottom: 1px solid #EBEBEB;
  padding: 16px 24px;
}

.main-nav {
  display: flex;
  gap: 24px;
  max-width: 1280px;
  margin: 0 auto;
}

.nav-link {
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2C2C2C;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #000000;
}

.nav-link.router-link-active {
  color: #000000;
  font-weight: 600;
}

.app-content {
  background-color: #F9F9F9;
  min-height: calc(100vh - 53px);
}
</style>

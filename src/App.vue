<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="heading">
    <div class="logo-section">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="40" height="40" />
      <h1 class="site-title">Vue.js Workshop</h1>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/components">Components</RouterLink>
      <RouterLink to="/directives">Directives</RouterLink>
      <RouterLink to="/state-management">State</RouterLink>
    </nav>
  </header>

  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>
.heading {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.site-title {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
  font-weight: 600;
}

header {
  line-height: 1.5;
}

nav {
  display: flex;
  font-size: 1rem;
  gap: 0.5rem;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #666;
  border-radius: 6px;
  transition: all 0.2s;
  font-weight: 500;
}

nav a:hover {
  background-color: #f8f9fa;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  background-color: #42b983;
  color: white;
}

nav a.router-link-exact-active:hover {
  background-color: #369870;
}

.main-content {
  min-height: calc(100vh - 80px);
  background: #f8f9fa;
}
</style>

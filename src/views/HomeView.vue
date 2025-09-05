<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="workshop-home">
    <section class="hero">
      <h1>Vue.js Frontend Workshop</h1>
      <p class="subtitle">Learn the fundamentals of Vue.js through hands-on examples</p>
    </section>

    <section class="workshop-sections">
      <h2>Workshop Modules</h2>
      <div class="modules-grid">
        <div class="module-card">
          <h3>🧩 Components</h3>
          <p>Learn about Vue components, props, emits, slots, and composition</p>
          <RouterLink to="/components" class="module-link">Start Learning →</RouterLink>
        </div>
        
        <div class="module-card">
          <h3>🎯 Directives</h3>
          <p>Master Vue directives like v-if, v-for, v-model, and create custom ones</p>
          <RouterLink to="/directives" class="module-link">Start Learning →</RouterLink>
        </div>
        
        <div class="module-card">
          <h3>🗃️ State Management</h3>
          <p>Understand state management with Pinia, computed properties, and reactivity</p>
          <RouterLink to="/state-management" class="module-link">Start Learning →</RouterLink>
        </div>
      </div>
    </section>

    <section class="getting-started">
      <h2>Getting Started</h2>
      <ol>
        <li>Navigate through the workshop modules in any order</li>
        <li>Each module contains interactive examples and exercises</li>
        <li>Try modifying the code to experiment with different concepts</li>
        <li>Use the browser developer tools to inspect Vue components</li>
      </ol>
    </section>
  </main>
</template>

<style scoped>
.workshop-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 3rem;
  color: #42b983;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 0;
}

.workshop-sections {
  margin-bottom: 3rem;
}

.workshop-sections h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.module-card {
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.module-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.module-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.module-card p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.module-link {
  display: inline-block;
  background: #42b983;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.module-link:hover {
  background: #369870;
}

.getting-started {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
}

.getting-started h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.getting-started ol {
  color: #666;
  line-height: 1.8;
}

.getting-started li {
  margin-bottom: 0.5rem;
}
</style>

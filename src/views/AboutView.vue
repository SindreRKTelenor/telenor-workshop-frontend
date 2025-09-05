<script setup lang="ts">
// You can add any setup logic here if needed
</script>

<template>
  <section class="about-page">
    <div class="about-content">
      <h1>About This Workshop</h1>

      <div class="workshop-info">
        <h2>What You'll Learn</h2>
        <p>This Vue.js frontend workshop is designed to teach you the fundamental concepts of Vue.js through hands-on, interactive examples. By the end of this workshop, you'll have a solid understanding of:</p>

        <ul class="learning-objectives">
          <li>Vue.js component architecture and best practices</li>
          <li>Props, emits, and component communication</li>
          <li>Template syntax and directive usage</li>
          <li>Reactive state management with Vue 3's Composition API</li>
          <li>Global state management using Pinia</li>
          <li>Building interactive and maintainable Vue applications</li>
        </ul>
      </div>

      <div class="workshop-structure">
        <h2>Workshop Structure</h2>
        <div class="modules">
          <div class="module">
            <h3>🧩 Components</h3>
            <p>Learn how to build reusable Vue components with props, emits, and slots. Practice component composition and understand the component lifecycle.</p>
          </div>

          <div class="module">
            <h3>🎯 Directives</h3>
            <p>Master Vue's built-in directives like v-if, v-for, and v-model. Learn when and how to create custom directives for specialized DOM manipulation.</p>
          </div>

          <div class="module">
            <h3>🗃️ State Management</h3>
            <p>Understand reactive state with ref/reactive, computed properties, watchers, and Pinia stores for scalable application state management.</p>
          </div>
        </div>
      </div>

      <div class="technologies">
        <h2>Technologies Used</h2>
        <div class="tech-stack">
          <div class="tech-item">
            <strong>Vue 3</strong>
            <span>Progressive JavaScript Framework</span>
          </div>
          <div class="tech-item">
            <strong>TypeScript</strong>
            <span>Type-safe JavaScript</span>
          </div>
          <div class="tech-item">
            <strong>Pinia</strong>
            <span>State management library</span>
          </div>
          <div class="tech-item">
            <strong>Vue Router</strong>
            <span>Official routing solution</span>
          </div>
          <div class="tech-item">
            <strong>Vite</strong>
            <span>Fast build tool and dev server</span>
          </div>
        </div>
      </div>

      <div class="getting-help">
        <h2>Getting Help</h2>
        <p>If you need help during the workshop:</p>
        <ul>
          <li>Use your browser's developer tools to inspect Vue components</li>
          <li>Check the console for any error messages</li>
          <li>Experiment with the code examples and see what happens</li>
          <li>Refer to the <a href="https://vuejs.org/" target="_blank" rel="noopener">official Vue.js documentation</a></li>
        </ul>
      </div>

      <div class="next-steps">
        <h2>After the Workshop</h2>
        <p>Continue your Vue.js journey with these resources:</p>
        <ul>
          <li><a href="https://vuejs.org/guide/" target="_blank" rel="noopener">Vue.js Official Guide</a></li>
          <li><a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia Documentation</a></li>
          <li><a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router Documentation</a></li>
          <li><a href="https://vueschool.io/" target="_blank" rel="noopener">Vue School (Video Courses)</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue (Community Resources)</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.about-content h1 {
  text-align: center;
  color: #42b983;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.workshop-info,
.workshop-structure,
.technologies,
.getting-help,
.next-steps {
  margin-bottom: 3rem;
}

.workshop-info h2,
.workshop-structure h2,
.technologies h2,
.getting-help h2,
.next-steps h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  border-bottom: 2px solid #42b983;
  padding-bottom: 0.5rem;
}

.learning-objectives {
  color: #42b983;
  list-style-type: none;
  padding: 0;
}

.learning-objectives li {
  background: #f8f9fa;
  margin: 0.5rem 0;
  padding: 1rem;
  border-left: 4px solid #42b983;
  border-radius: 0 6px 6px 0;
}

.modules {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.module {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-top: 4px solid #42b983;
}

.module h3 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 1.3rem;
}

.module p {
  color: #666;
  line-height: 1.6;
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.tech-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tech-item strong {
  display: block;
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.tech-item span {
  color: #666;
  font-size: 0.9rem;
}

.getting-help ul,
.next-steps ul {
  color: #666;
  line-height: 1.8;
}

.getting-help ul li,
.next-steps ul li {
  margin-bottom: 0.5rem;
}

.getting-help a,
.next-steps a {
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
}

.getting-help a:hover,
.next-steps a:hover {
  text-decoration: underline;
}

.about-content p {
  color: #666;
  line-height: 1.7;
  margin-bottom: 1rem;
}
</style>

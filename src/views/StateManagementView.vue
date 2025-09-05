<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useTodoStore, useUserStore } from '@/stores/workshop'
import InfoPanel from '@/components/examples/InfoPanel.vue'
import CustomButton from '@/components/examples/CustomButton.vue'

// Local reactive state examples
const localCount = ref(0)
const localMessage = ref('Hello Vue!')
const localUser = ref({ name: 'John', age: 25 })

// Computed properties example
const doubledCount = computed(() => localCount.value * 2)
const uppercaseMessage = computed(() => localMessage.value.toUpperCase())
const canVote = computed(() => localUser.value.age >= 18)

// Store usage
const todoStore = useTodoStore()
const userStore = useUserStore()

// New todo input
const newTodoText = ref('')
const newTodoPriority = ref<'low' | 'medium' | 'high'>('medium')

// Watch example
const watchOutput = ref<string[]>([])
watch(localCount, (newVal, oldVal) => {
  watchOutput.value.unshift(`Count changed from ${oldVal} to ${newVal}`)
  if (watchOutput.value.length > 5) {
    watchOutput.value = watchOutput.value.slice(0, 5)
  }
})

// Methods
const incrementLocal = () => {
  localCount.value++
}

const updateUserAge = () => {
  localUser.value.age++
}

const addTodo = () => {
  if (newTodoText.value.trim()) {
    todoStore.addTodo(newTodoText.value, newTodoPriority.value)
    newTodoText.value = ''
  }
}

const toggleTheme = () => {
  const newTheme = userStore.preferences.theme === 'light' ? 'dark' : 'light'
  userStore.updatePreferences({ theme: newTheme })
}
</script>

<template>
  <div class="state-workshop">
    <header class="workshop-header">
      <h1>🗃️ State Management Workshop</h1>
      <p>Learn reactive state, computed properties, watchers, and Pinia stores</p>
    </header>

    <div class="workshop-content">
      <!-- Local Reactive State -->
      <InfoPanel title="1. Local Reactive State (ref & reactive)" :default-expanded="true">
        <div class="section-content">
          <h4>Basic Reactivity with ref()</h4>
          <p>Create reactive state that automatically updates the UI when changed:</p>
          
          <div class="example-container">
            <div class="reactive-examples">
              <div class="example-box">
                <h5>Simple Counter</h5>
                <p>Count: <strong>{{ localCount }}</strong></p>
                <CustomButton title="Increment" @click="incrementLocal" size="small" />
              </div>
              
              <div class="example-box">
                <h5>Reactive String</h5>
                <input v-model="localMessage" placeholder="Type a message..." class="input-field" />
                <p>Message: "{{ localMessage }}"</p>
              </div>
              
              <div class="example-box">
                <h5>Reactive Object</h5>
                <p>Name: {{ localUser.name }}, Age: {{ localUser.age }}</p>
                <CustomButton title="Age +1" @click="updateUserAge" size="small" />
              </div>
            </div>
          </div>

          <div class="code-example">
            <h5>Key Concepts:</h5>
            <ul>
              <li><strong>ref():</strong> Creates reactive reference for primitives</li>
              <li><strong>reactive():</strong> Creates reactive proxy for objects</li>
              <li><strong>.value:</strong> Access ref values in script setup</li>
              <li><strong>Automatic unwrapping:</strong> No .value needed in templates</li>
            </ul>
          </div>
        </div>
      </InfoPanel>

      <!-- Computed Properties -->
      <InfoPanel title="2. Computed Properties">
        <div class="section-content">
          <h4>Derived State with computed()</h4>
          <p>Computed properties automatically update when their dependencies change:</p>
          
          <div class="computed-examples">
            <div class="example-box">
              <h5>Mathematical Computation</h5>
              <p>Count: {{ localCount }}</p>
              <p>Doubled: <strong>{{ doubledCount }}</strong></p>
              <small>Automatically calculated when count changes</small>
            </div>
            
            <div class="example-box">
              <h5>String Transformation</h5>
              <p>Original: "{{ localMessage }}"</p>
              <p>Uppercase: <strong>"{{ uppercaseMessage }}"</strong></p>
              <small>Updates when message changes</small>
            </div>
            
            <div class="example-box">
              <h5>Conditional Logic</h5>
              <p>Age: {{ localUser.age }}</p>
              <p>Can vote: <strong>{{ canVote ? 'Yes' : 'No' }}</strong></p>
              <small>Legal voting age check</small>
            </div>
          </div>

          <div class="code-example">
            <h5>Benefits of Computed Properties:</h5>
            <ul>
              <li><strong>Cached:</strong> Only re-calculated when dependencies change</li>
              <li><strong>Declarative:</strong> Express what you want, not how to get it</li>
              <li><strong>Performance:</strong> Better than methods for expensive operations</li>
              <li><strong>Reactive:</strong> Automatically track dependencies</li>
            </ul>
          </div>
        </div>
      </InfoPanel>

      <!-- Watchers -->
      <InfoPanel title="3. Watchers (watch & watchEffect)">
        <div class="section-content">
          <h4>Side Effects with watch()</h4>
          <p>Watch reactive data and perform side effects when it changes:</p>
          
          <div class="watcher-example">
            <div class="watch-demo">
              <h5>Watch Counter Changes</h5>
              <p>Current count: {{ localCount }}</p>
              <CustomButton title="Increment to trigger watcher" @click="incrementLocal" />
              
              <div class="watch-output">
                <h6>Watch Output:</h6>
                <div v-if="watchOutput.length === 0" class="no-changes">
                  No changes yet...
                </div>
                <div v-else class="changes-list">
                  <div 
                    v-for="(change, index) in watchOutput" 
                    :key="index"
                    class="change-item"
                  >
                    {{ change }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="code-example">
            <h5>When to Use Watchers:</h5>
            <ul>
              <li><strong>API calls:</strong> Fetch data when state changes</li>
              <li><strong>Persistence:</strong> Save to localStorage when data changes</li>
              <li><strong>Analytics:</strong> Track user interactions</li>
              <li><strong>Validation:</strong> Validate input as user types</li>
            </ul>
          </div>
        </div>
      </InfoPanel>

      <!-- Pinia Store -->
      <InfoPanel title="4. Global State with Pinia Stores">
        <div class="section-content">
          <h4>Centralized State Management</h4>
          <p>Share state across components with Pinia stores:</p>
          
          <div class="store-examples">
            <!-- Todo Store Example -->
            <div class="store-section">
              <h5>📝 Todo Store</h5>
              <div class="todo-manager">
                <div class="todo-stats">
                  <div class="stat-item">
                    <strong>{{ todoStore.todos.length }}</strong>
                    <span>Total</span>
                  </div>
                  <div class="stat-item">
                    <strong>{{ todoStore.activeTodos.length }}</strong>
                    <span>Active</span>
                  </div>
                  <div class="stat-item">
                    <strong>{{ todoStore.completedTodos.length }}</strong>
                    <span>Completed</span>
                  </div>
                  <div class="stat-item">
                    <strong>{{ todoStore.completionRate }}%</strong>
                    <span>Complete</span>
                  </div>
                </div>
                
                <div class="todo-add">
                  <input 
                    v-model="newTodoText" 
                    placeholder="Add a new todo..."
                    @keyup.enter="addTodo"
                    class="input-field"
                  />
                  <select v-model="newTodoPriority" class="select-field">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                  <CustomButton title="Add" @click="addTodo" size="small" />
                </div>
                
                <div class="filter-buttons">
                  <button 
                    v-for="filterOption in ['all', 'active', 'completed']"
                    :key="filterOption"
                    @click="todoStore.setFilter(filterOption as any)"
                    :class="{ active: todoStore.filter === filterOption }"
                    class="filter-btn"
                  >
                    {{ filterOption }}
                  </button>
                </div>
                
                <div class="todo-list">
                  <div 
                    v-for="todo in todoStore.filteredTodos"
                    :key="todo.id"
                    class="todo-item"
                    :class="[`priority-${todo.priority}`, { completed: todo.completed }]"
                  >
                    <input 
                      type="checkbox" 
                      :checked="todo.completed"
                      @change="todoStore.toggleTodo(todo.id)"
                    />
                    <span class="todo-text">{{ todo.text }}</span>
                    <span class="priority-badge">{{ todo.priority }}</span>
                    <button @click="todoStore.removeTodo(todo.id)" class="remove-btn">✕</button>
                  </div>
                </div>
                
                <div class="bulk-actions">
                  <CustomButton title="Mark All Complete" @click="todoStore.markAllComplete" size="small" variant="success" />
                  <CustomButton title="Clear Completed" @click="todoStore.clearCompleted" size="small" variant="danger" />
                </div>
              </div>
            </div>
            
            <!-- User Store Example -->
            <div class="store-section">
              <h5>👤 User Store</h5>
              <div class="user-manager">
                <div v-if="userStore.currentUser" class="current-user">
                  <h6>Current User</h6>
                  <p><strong>Name:</strong> {{ userStore.currentUser.name }}</p>
                  <p><strong>Email:</strong> {{ userStore.currentUser.email }}</p>
                  <p><strong>Theme:</strong> {{ userStore.preferences.theme }}</p>
                  
                  <div class="user-actions">
                    <CustomButton title="Toggle Theme" @click="toggleTheme" size="small" />
                    <CustomButton 
                      title="Toggle Notifications" 
                      @click="userStore.updatePreferences({ notifications: !userStore.preferences.notifications })"
                      size="small"
                      :variant="userStore.preferences.notifications ? 'success' : 'secondary'"
                    />
                  </div>
                </div>
                
                <div class="user-stats">
                  <p><strong>Total Users:</strong> {{ userStore.userCount }}</p>
                  <p><strong>Logged In:</strong> {{ userStore.isLoggedIn ? 'Yes' : 'No' }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="code-example">
            <h5>Pinia Store Benefits:</h5>
            <ul>
              <li><strong>TypeScript support:</strong> Full type safety out of the box</li>
              <li><strong>Composition API:</strong> Use the same patterns as Vue 3</li>
              <li><strong>DevTools:</strong> Excellent debugging experience</li>
              <li><strong>Server-side rendering:</strong> Works with SSR/SSG</li>
            </ul>
          </div>
        </div>
      </InfoPanel>

      <!-- Exercise Section -->
      <InfoPanel title="🏃‍♂️ Exercise: Build a Shopping Cart Store">
        <div class="section-content">
          <h4>Try It Yourself!</h4>
          <div class="exercise">
            <p><strong>Challenge:</strong> Create a shopping cart store that includes:</p>
            <ol>
              <li>State for cart items (product, quantity, price)</li>
              <li>Computed properties for total items and total price</li>
              <li>Actions to add, remove, and update quantities</li>
              <li>A watcher that saves cart to localStorage</li>
              <li>Components that use the store with proper reactivity</li>
            </ol>
            <p><strong>Bonus:</strong> Add product categories and filtering functionality!</p>
          </div>
        </div>
      </InfoPanel>
    </div>
  </div>
</template>

<style scoped>
.state-workshop {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.workshop-header {
  text-align: center;
  margin-bottom: 3rem;
}

.workshop-header h1 {
  color: #42b983;
  margin-bottom: 1rem;
}

.workshop-header p {
  color: #666;
  font-size: 1.1rem;
}

.workshop-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-content {
  padding: 1rem 0;
}

.section-content h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.example-container {
  margin: 1rem 0;
}

.reactive-examples,
.computed-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.example-box {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  background: white;
}

.example-box h5 {
  margin-top: 0;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.input-field {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.select-field {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  margin: 0 0.5rem;
}

.watcher-example {
  margin: 1rem 0;
}

.watch-demo {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
}

.watch-output {
  margin-top: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1rem;
}

.watch-output h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.no-changes {
  color: #666;
  font-style: italic;
}

.changes-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.change-item {
  background: white;
  padding: 0.5rem;
  border-radius: 4px;
  border-left: 3px solid #42b983;
  font-family: monospace;
  font-size: 0.9rem;
}

.store-examples {
  display: grid;
  gap: 2rem;
  margin: 1rem 0;
}

.store-section {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
}

.store-section h5 {
  margin-top: 0;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.todo-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.stat-item {
  text-align: center;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
}

.stat-item strong {
  display: block;
  font-size: 1.5rem;
  color: #42b983;
}

.stat-item span {
  color: #666;
  font-size: 0.9rem;
}

.todo-add {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  align-items: center;
}

.filter-buttons {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  text-transform: capitalize;
}

.filter-btn.active {
  background: #42b983;
  color: white;
  border-color: #42b983;
}

.todo-list {
  margin-bottom: 1rem;
  max-height: 300px;
  overflow-y: auto;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s;
}

.todo-item:hover {
  background: #f8f9fa;
}

.todo-item.completed {
  opacity: 0.6;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
}

.todo-text {
  flex: 1;
}

.priority-badge {
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-weight: 500;
}

.priority-high .priority-badge {
  background: #ffeaea;
  color: #d32f2f;
}

.priority-medium .priority-badge {
  background: #fff3cd;
  color: #b8860b;
}

.priority-low .priority-badge {
  background: #e8f5e8;
  color: #4caf50;
}

.remove-btn {
  background: #ff4757;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
}

.bulk-actions {
  display: flex;
  gap: 0.5rem;
}

.user-manager {
  display: grid;
  gap: 1rem;
}

.current-user {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
}

.current-user h6 {
  margin-top: 0;
  color: #2c3e50;
}

.user-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.user-stats {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 6px;
}

.code-example {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.code-example h5 {
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 1rem;
}

.code-example ul {
  margin: 0;
  color: #666;
}

.code-example li {
  margin-bottom: 0.5rem;
}

.exercise {
  background: #fff3cd;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #ffc107;
}

.exercise p {
  margin-bottom: 1rem;
}

.exercise ol {
  margin-bottom: 1rem;
  color: #666;
}

.exercise li {
  margin-bottom: 0.5rem;
}
</style>
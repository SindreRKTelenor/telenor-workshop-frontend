<script setup lang="ts">
import { ref, computed } from 'vue'
import InfoPanel from '@/components/examples/InfoPanel.vue'
import CustomButton from '@/components/examples/CustomButton.vue'

// State for examples
const showContent = ref(true)
const inputText = ref('')
const todoInput = ref('')
const selectedOption = ref('vue')
const isChecked = ref(false)
const number1 = ref(0)
const number2 = ref(0)

// Todo list for v-for example
const todos = ref([
  { id: 1, text: 'Learn Vue.js basics', completed: true },
  { id: 2, text: 'Understand directives', completed: false },
  { id: 3, text: 'Build a component', completed: false },
])

// Computed properties
const sum = computed(() => number1.value + number2.value)
const incompleteTodos = computed(() => todos.value.filter(todo => !todo.completed))

// Methods
const toggleVisibility = () => {
  showContent.value = !showContent.value
}

const addTodo = () => {
  if (todoInput.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: todoInput.value.trim(),
      completed: false
    })
    todoInput.value = ''
  }
}

const toggleTodo = (id: number) => {
  const todo = todos.value.find(t => t.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}

const removeTodo = (id: number) => {
  const index = todos.value.findIndex(t => t.id === id)
  if (index > -1) {
    todos.value.splice(index, 1)
  }
}

const handleOnceClick = () => {
  window.alert('This will only fire once!')
}

const handlePreventClick = () => {
  window.alert('Prevented default action')
}

// Custom directive
const vFocus = {
  mounted: (el: HTMLElement) => el.focus()
}

interface HighlightBinding {
  value: string
}

const vHighlight = {
  mounted: (el: HTMLElement, binding: HighlightBinding) => {
    el.style.backgroundColor = binding.value || 'yellow'
  },
  updated: (el: HTMLElement, binding: HighlightBinding) => {
    el.style.backgroundColor = binding.value || 'yellow'
  }
}
</script>

<template>
  <div class="directives-workshop">
    <header class="workshop-header">
      <h1>🎯 Directives Workshop</h1>
      <p>Master Vue directives for conditional rendering, lists, forms, and more</p>
    </header>

    <div class="workshop-content">
      <!-- Conditional Rendering -->
      <InfoPanel title="1. Conditional Rendering (v-if, v-show)" :default-expanded="true">
        <div class="section-content">
          <h4>v-if vs v-show</h4>
          <p>Both directives control visibility, but work differently:</p>
          
          <div class="example-container">
            <CustomButton 
              :title="showContent ? 'Hide Content' : 'Show Content'"
              @click="toggleVisibility"
            />
            
            <div class="visibility-examples">
              <div class="example-box">
                <h5>v-if (removes from DOM)</h5>
                <div v-if="showContent" class="content-box">
                  🎉 This content is conditionally rendered with v-if
                </div>
                <div v-else class="content-box alt">
                  📵 Content is hidden (not in DOM)
                </div>
              </div>
              
              <div class="example-box">
                <h5>v-show (toggles CSS display)</h5>
                <div v-show="showContent" class="content-box">
                  ✨ This content is shown/hidden with v-show
                </div>
                <div v-show="!showContent" class="content-box alt">
                  👻 Content is hidden (still in DOM)
                </div>
              </div>
            </div>
          </div>

          <div class="code-example">
            <h5>Key Differences:</h5>
            <ul>
              <li><strong>v-if:</strong> Lazy evaluation, removes/adds elements to DOM</li>
              <li><strong>v-show:</strong> Always renders, toggles CSS display property</li>
              <li><strong>v-else:</strong> Must follow v-if or v-else-if</li>
              <li><strong>Performance:</strong> v-show better for frequent toggling</li>
            </ul>
          </div>
        </div>
      </InfoPanel>

      <!-- List Rendering -->
      <InfoPanel title="2. List Rendering (v-for)">
        <div class="section-content">
          <h4>Rendering Lists with v-for</h4>
          <p>Use v-for to render lists of data with proper key attributes:</p>
          
          <div class="todo-app">
            <div class="todo-input">
              <input 
                v-model="todoInput" 
                v-focus
                placeholder="Add a new todo..."
                @keyup.enter="addTodo"
                class="input-field"
              />
              <CustomButton title="Add Todo" @click="addTodo" size="small" />
            </div>
            
            <div class="todo-list">
              <div 
                v-for="todo in todos" 
                :key="todo.id"
                class="todo-item"
                :class="{ completed: todo.completed }"
              >
                <input 
                  type="checkbox" 
                  :checked="todo.completed"
                  @change="toggleTodo(todo.id)"
                />
                <span class="todo-text">{{ todo.text }}</span>
                <button @click="removeTodo(todo.id)" class="remove-btn">✕</button>
              </div>
            </div>
            
            <p v-if="incompleteTodos.length === 0" class="completion-message">
              🎉 All todos completed!
            </p>
            <p v-else class="incomplete-count">
              {{ incompleteTodos.length }} todos remaining
            </p>
          </div>

          <div class="code-example">
            <h5>Key Concepts:</h5>
            <ul>
              <li><strong>:key attribute:</strong> Required for efficient list updates</li>
              <li><strong>Index vs unique ID:</strong> Use unique IDs when list order changes</li>
              <li><strong>Nested loops:</strong> Can use v-for on multiple levels</li>
              <li><strong>Object iteration:</strong> v-for works with objects too</li>
            </ul>
          </div>
        </div>
      </InfoPanel>

      <!-- Form Directives -->
      <InfoPanel title="3. Form Directives (v-model)">
        <div class="section-content">
          <h4>Two-way Data Binding with v-model</h4>
          <p>v-model creates two-way binding between form inputs and data:</p>
          
          <div class="form-examples">
            <div class="form-group">
              <label>Text Input:</label>
              <input v-model="inputText" placeholder="Type something..." class="input-field" />
              <p>You typed: "{{ inputText }}"</p>
            </div>
            
            <div class="form-group">
              <label>Select Dropdown:</label>
              <select v-model="selectedOption" class="select-field">
                <option value="vue">Vue.js</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="svelte">Svelte</option>
              </select>
              <p>Selected: {{ selectedOption }}</p>
            </div>
            
            <div class="form-group">
              <label>
                <input v-model="isChecked" type="checkbox" />
                I agree to the terms and conditions
              </label>
              <p>Agreed: {{ isChecked ? 'Yes' : 'No' }}</p>
            </div>
          </div>

          <div class="code-example">
            <h5>v-model Modifiers:</h5>
            <ul>
              <li><strong>.lazy:</strong> Update on change event instead of input</li>
              <li><strong>.number:</strong> Automatically typecast to number</li>
              <li><strong>.trim:</strong> Automatically trim whitespace</li>
              <li><strong>Custom components:</strong> Can implement v-model too</li>
            </ul>
          </div>
        </div>
      </InfoPanel>

      <!-- Event Handling -->
      <InfoPanel title="4. Event Handling (v-on/@)">
        <div class="section-content">
          <h4>Handling Events with v-on or @</h4>
          <p>React to user interactions with event directives:</p>
          
          <div class="event-examples">
            <div class="calculator">
              <h5>Simple Calculator</h5>
              <div class="calc-inputs">
                <input v-model.number="number1" type="number" class="input-field small" />
                <span>+</span>
                <input v-model.number="number2" type="number" class="input-field small" />
                <span>=</span>
                <span class="result">{{ sum }}</span>
              </div>
            </div>
            
            <div class="event-modifiers">
              <h5>Event Modifiers Demo</h5>
              <button @click.once="handleOnceClick" class="demo-btn">
                Click Once Only
              </button>
              <button @click.prevent="handlePreventClick" class="demo-btn">
                Prevent Default
              </button>
            </div>
          </div>

          <div class="code-example">
            <h5>Event Modifiers:</h5>
            <ul>
              <li><strong>.stop:</strong> Stop event propagation</li>
              <li><strong>.prevent:</strong> Prevent default action</li>
              <li><strong>.once:</strong> Listen for event only once</li>
              <li><strong>.self:</strong> Only trigger if target is element itself</li>
            </ul>
          </div>
        </div>
      </InfoPanel>

      <!-- Custom Directives -->
      <InfoPanel title="5. Custom Directives">
        <div class="section-content">
          <h4>Creating Your Own Directives</h4>
          <p>Build custom directives for reusable DOM manipulation:</p>
          
          <div class="custom-directive-examples">
            <div class="example-box">
              <h5>v-focus Directive</h5>
              <p>Automatically focuses an input when mounted:</p>
              <input v-focus placeholder="This input is auto-focused!" class="input-field" />
            </div>
            
            <div class="example-box">
              <h5>v-highlight Directive</h5>
              <p v-highlight="'lightblue'">This text has a light blue background</p>
              <p v-highlight="'lightgreen'">This text has a light green background</p>
            </div>
          </div>

          <div class="code-example">
            <h5>Directive Hooks:</h5>
            <ul>
              <li><strong>mounted:</strong> Called when element is mounted</li>
              <li><strong>updated:</strong> Called when component is updated</li>
              <li><strong>unmounted:</strong> Called when element is unmounted</li>
              <li><strong>beforeMount/beforeUpdate:</strong> Called before mounting/updating</li>
            </ul>
          </div>
        </div>
      </InfoPanel>

      <!-- Exercise Section -->
      <InfoPanel title="🏃‍♂️ Exercise: Build a Form with Directives">
        <div class="section-content">
          <h4>Try It Yourself!</h4>
          <div class="exercise">
            <p><strong>Challenge:</strong> Create a user registration form that uses:</p>
            <ol>
              <li>v-model for all form inputs (name, email, password, confirm password)</li>
              <li>v-if to show/hide password strength indicator</li>
              <li>v-for to display validation errors as a list</li>
              <li>Event handlers for form submission and validation</li>
              <li>A custom directive for input validation styling</li>
            </ol>
            <p><strong>Bonus:</strong> Add form field validation with visual feedback!</p>
          </div>
        </div>
      </InfoPanel>
    </div>
  </div>
</template>

<style scoped>
.directives-workshop {
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

.visibility-examples {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.example-box {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
}

.example-box h5 {
  margin-top: 0;
  color: #2c3e50;
}

.content-box {
  background: #e8f5e8;
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
  margin-top: 0.5rem;
}

.content-box.alt {
  background: #ffeaea;
}

.todo-app {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
}

.todo-input {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.input-field {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.input-field.small {
  flex: none;
  width: 80px;
}

.select-field {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background: white;
}

.todo-list {
  margin-bottom: 1rem;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-bottom: 1px solid #f0f0f0;
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

.remove-btn {
  background: #ff4757;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
}

.completion-message,
.incomplete-count {
  text-align: center;
  font-weight: 500;
  color: #42b983;
}

.form-examples {
  display: grid;
  gap: 1.5rem;
  margin: 1rem 0;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: #333;
}

.event-examples {
  display: grid;
  gap: 2rem;
  margin: 1rem 0;
}

.calculator {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
}

.calculator h5 {
  margin-top: 0;
  color: #2c3e50;
}

.calc-inputs {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
}

.result {
  font-weight: bold;
  color: #42b983;
  font-size: 1.5rem;
}

.event-modifiers {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.demo-btn:hover {
  background: #0056b3;
}

.custom-directive-examples {
  display: grid;
  gap: 1.5rem;
  margin: 1rem 0;
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
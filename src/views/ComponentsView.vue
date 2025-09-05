<script setup lang="ts">
import { ref } from 'vue'
import UserCard from '@/components/examples/UserCard.vue'
import CustomButton from '@/components/examples/CustomButton.vue'
import InfoPanel from '@/components/examples/InfoPanel.vue'

// State for examples
const selectedUser = ref<{ name: string; email: string } | null>(null)
const buttonStates = ref({
  primaryLoading: false,
  successCount: 0,
})

// Sample users data
const users = ref([
  { name: 'Alice Johnson', email: 'alice@example.com', isOnline: true },
  { name: 'Bob Smith', email: 'bob@example.com', isOnline: false },
  { name: 'Carol Davis', email: 'carol@example.com', isOnline: true },
])

// Event handlers
const handleUserClick = (user: { name: string; email: string }) => {
  selectedUser.value = user
}

const handlePrimaryButton = () => {
  buttonStates.value.primaryLoading = true
  setTimeout(() => {
    buttonStates.value.primaryLoading = false
    window.alert('Primary action completed!')
  }, 2000)
}

const handleSuccessButton = () => {
  buttonStates.value.successCount++
}

const handleSecondaryClick = () => {
  window.alert('Secondary clicked!')
}

const handleDangerClick = () => {
  window.alert('Danger action!')
}

const handleSlotComponentClick = () => {
  window.alert('Component inside a slot!')
}
</script>

<template>
  <div class="components-workshop">
    <header class="workshop-header">
      <h1>🧩 Components Workshop</h1>
      <p>Learn how to create and use Vue components with props, emits, and slots</p>
    </header>

    <div class="workshop-content">
      <!-- Props & Emits Example -->
      <InfoPanel title="1. Props & Emits Example" :default-expanded="true">
        <div class="section-content">
          <h4>User Cards with Props and Events</h4>
          <p>These components demonstrate props (data passed down) and emits (events passed up):</p>
          
          <div class="user-list">
            <UserCard
              v-for="user in users"
              :key="user.email"
              :name="user.name"
              :email="user.email"
              :is-online="user.isOnline"
              @user-clicked="handleUserClick"
            />
          </div>
          
          <div v-if="selectedUser" class="selected-user">
            <strong>Selected User:</strong> {{ selectedUser.name }} ({{ selectedUser.email }})
          </div>

          <div class="code-example">
            <h5>Key Concepts:</h5>
            <ul>
              <li><strong>Props:</strong> Data passed from parent to child component</li>
              <li><strong>Emits:</strong> Events sent from child to parent component</li>
              <li><strong>v-for:</strong> Rendering lists of components</li>
              <li><strong>Event handling:</strong> Responding to component events</li>
            </ul>
          </div>
        </div>
      </InfoPanel>

      <!-- Button Variants Example -->
      <InfoPanel title="2. Component Variants & States">
        <div class="section-content">
          <h4>Button Component with Different States</h4>
          <p>This demonstrates how to create flexible components with different variants and states:</p>
          
          <div class="button-grid">
            <CustomButton 
              title="Primary Action" 
              variant="primary" 
              :loading="buttonStates.primaryLoading"
              @click="handlePrimaryButton"
            />
            <CustomButton 
              title="Secondary" 
              variant="secondary" 
              @click="handleSecondaryClick"
            />
            <CustomButton 
              title="Danger Zone" 
              variant="danger" 
              @click="handleDangerClick"
            />
            <CustomButton 
              title="Success" 
              variant="success" 
              @click="handleSuccessButton"
            />
            <CustomButton 
              title="Disabled" 
              variant="primary" 
              :disabled="true"
            />
          </div>
          
          <p v-if="buttonStates.successCount > 0" class="success-counter">
            Success button clicked {{ buttonStates.successCount }} times!
          </p>

          <div class="code-example">
            <h5>Key Concepts:</h5>
            <ul>
              <li><strong>Props with defaults:</strong> Using withDefaults() for fallback values</li>
              <li><strong>Conditional classes:</strong> Dynamic styling based on props</li>
              <li><strong>Component states:</strong> Loading, disabled, and other interactive states</li>
              <li><strong>TypeScript interfaces:</strong> Type-safe props and emits</li>
            </ul>
          </div>
        </div>
      </InfoPanel>

      <!-- Slots Example -->
      <InfoPanel title="3. Slots - Content Projection">
        <div class="section-content">
          <h4>Using Slots for Flexible Content</h4>
          <p>Slots allow you to pass content into components. Notice the InfoPanel components above use slots!</p>
          
          <InfoPanel title="Custom Content Panel" :collapsible="false">
            <div class="custom-slot-content">
              <h5>🎯 This is custom content passed via slots!</h5>
              <p>You can pass any HTML, components, or Vue elements through slots.</p>
              <CustomButton 
                title="Nested Component" 
                variant="success" 
                size="small"
                @click="handleSlotComponentClick"
              />
            </div>
          </InfoPanel>

          <div class="code-example">
            <h5>Key Concepts:</h5>
            <ul>
              <li><strong>Default slots:</strong> Pass content between component tags</li>
              <li><strong>Named slots:</strong> Multiple content areas in one component</li>
              <li><strong>Slot props:</strong> Pass data back from child to parent</li>
              <li><strong>Composition:</strong> Building complex UIs from simple components</li>
            </ul>
          </div>
        </div>
      </InfoPanel>

      <!-- Exercise Section -->
      <InfoPanel title="🏃‍♂️ Exercise: Create Your Own Component">
        <div class="section-content">
          <h4>Try It Yourself!</h4>
          <div class="exercise">
            <p><strong>Challenge:</strong> Create a TodoItem component that:</p>
            <ol>
              <li>Accepts a todo object as a prop (with id, text, and completed fields)</li>
              <li>Emits events for toggling completion and deleting items</li>
              <li>Shows different styles for completed vs pending todos</li>
              <li>Has a slot for custom actions</li>
            </ol>
            <p><strong>Bonus:</strong> Add a priority prop that changes the visual appearance!</p>
          </div>
        </div>
      </InfoPanel>
    </div>
  </div>
</template>

<style scoped>
.components-workshop {
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

.user-list {
  display: grid;
  gap: 1rem;
  margin: 1rem 0;
}

.selected-user {
  background: #e8f5e8;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  color: #2d5a2d;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.success-counter {
  background: #e8f5e8;
  color: #2d5a2d;
  padding: 0.75rem;
  border-radius: 6px;
  margin-top: 1rem;
  font-weight: 500;
}

.custom-slot-content {
  background: #f0f8ff;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.custom-slot-content h5 {
  color: #007bff;
  margin-top: 0;
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
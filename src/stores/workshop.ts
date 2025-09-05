import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface Todo {
  id: number
  text: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  createdAt: Date
}

export interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

export const useTodoStore = defineStore('todos', () => {
  // State
  const todos = ref<Todo[]>([
    {
      id: 1,
      text: 'Learn Vue.js fundamentals',
      completed: true,
      priority: 'high',
      createdAt: new Date('2024-01-01')
    },
    {
      id: 2,
      text: 'Understand Pinia state management',
      completed: false,
      priority: 'high',
      createdAt: new Date('2024-01-02')
    },
    {
      id: 3,
      text: 'Build a todo application',
      completed: false,
      priority: 'medium',
      createdAt: new Date('2024-01-03')
    }
  ])

  const filter = ref<'all' | 'active' | 'completed'>('all')

  // Getters (computed)
  const completedTodos = computed(() => 
    todos.value.filter(todo => todo.completed)
  )

  const activeTodos = computed(() => 
    todos.value.filter(todo => !todo.completed)
  )

  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'active':
        return activeTodos.value
      case 'completed':
        return completedTodos.value
      default:
        return todos.value
    }
  })

  const todosByPriority = computed(() => {
    const grouped = {
      high: todos.value.filter(t => t.priority === 'high'),
      medium: todos.value.filter(t => t.priority === 'medium'),
      low: todos.value.filter(t => t.priority === 'low')
    }
    return grouped
  })

  const completionRate = computed(() => {
    if (todos.value.length === 0) return 0
    return Math.round((completedTodos.value.length / todos.value.length) * 100)
  })

  // Actions
  function addTodo(text: string, priority: Todo['priority'] = 'medium') {
    todos.value.push({
      id: Date.now(),
      text: text.trim(),
      completed: false,
      priority,
      createdAt: new Date()
    })
  }

  function removeTodo(id: number) {
    const index = todos.value.findIndex(todo => todo.id === id)
    if (index > -1) {
      todos.value.splice(index, 1)
    }
  }

  function toggleTodo(id: number) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  function updateTodo(id: number, updates: Partial<Todo>) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      Object.assign(todo, updates)
    }
  }

  function clearCompleted() {
    todos.value = todos.value.filter(todo => !todo.completed)
  }

  function setFilter(newFilter: typeof filter.value) {
    filter.value = newFilter
  }

  // Bulk actions
  function markAllComplete() {
    todos.value.forEach(todo => {
      todo.completed = true
    })
  }

  function markAllIncomplete() {
    todos.value.forEach(todo => {
      todo.completed = false
    })
  }

  return {
    // State
    todos,
    filter,
    
    // Getters
    completedTodos,
    activeTodos,
    filteredTodos,
    todosByPriority,
    completionRate,
    
    // Actions
    addTodo,
    removeTodo,
    toggleTodo,
    updateTodo,
    clearCompleted,
    setFilter,
    markAllComplete,
    markAllIncomplete
  }
})

export const useUserStore = defineStore('user', () => {
  // State
  const currentUser = ref<User | null>({
    id: 1,
    name: 'Workshop Participant',
    email: 'participant@workshop.com',
    avatar: '/placeholder-avatar.png'
  })

  const users = ref<User[]>([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com' },
  ])

  const preferences = ref({
    theme: 'light' as 'light' | 'dark',
    notifications: true,
    autoSave: true
  })

  // Getters
  const isLoggedIn = computed(() => currentUser.value !== null)
  
  const userCount = computed(() => users.value.length)

  // Actions
  function login(user: User) {
    currentUser.value = user
  }

  function logout() {
    currentUser.value = null
  }

  function updateProfile(updates: Partial<User>) {
    if (currentUser.value) {
      Object.assign(currentUser.value, updates)
    }
  }

  function updatePreferences(newPreferences: Partial<typeof preferences.value>) {
    Object.assign(preferences.value, newPreferences)
  }

  function addUser(user: Omit<User, 'id'>) {
    users.value.push({
      ...user,
      id: Date.now()
    })
  }

  return {
    // State
    currentUser,
    users,
    preferences,
    
    // Getters
    isLoggedIn,
    userCount,
    
    // Actions
    login,
    logout,
    updateProfile,
    updatePreferences,
    addUser
  }
})
<script setup lang="ts">
interface Props {
  title: string
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  loading?: boolean
}

interface Emits {
  click: []
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
})

const emit = defineEmits<Emits>()

const handleClick = () => {
  if (!props.disabled && !props.loading) {
    emit('click')
  }
}
</script>

<template>
  <button 
    class="custom-button"
    :class="[
      `variant-${variant}`,
      `size-${size}`,
      { disabled, loading }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="spinner"></span>
    <span v-else>{{ title }}</span>
  </button>
</template>

<style scoped>
.custom-button {
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Sizes */
.size-small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.size-medium {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.size-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

/* Variants */
.variant-primary {
  background-color: #007bff;
  color: white;
}

.variant-primary:hover:not(.disabled):not(.loading) {
  background-color: #0056b3;
}

.variant-secondary {
  background-color: #6c757d;
  color: white;
}

.variant-secondary:hover:not(.disabled):not(.loading) {
  background-color: #5a6268;
}

.variant-danger {
  background-color: #dc3545;
  color: white;
}

.variant-danger:hover:not(.disabled):not(.loading) {
  background-color: #c82333;
}

.variant-success {
  background-color: #28a745;
  color: white;
}

.variant-success:hover:not(.disabled):not(.loading) {
  background-color: #218838;
}

/* States */
.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading {
  cursor: not-allowed;
}

.spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
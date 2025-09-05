<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title: string
  collapsible?: boolean
  defaultExpanded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  collapsible: true,
  defaultExpanded: true,
})

const isExpanded = ref(props.defaultExpanded)

const toggle = () => {
  if (props.collapsible) {
    isExpanded.value = !isExpanded.value
  }
}
</script>

<template>
  <div class="info-panel">
    <header 
      class="panel-header" 
      :class="{ clickable: collapsible }"
      @click="toggle"
    >
      <h3>{{ title }}</h3>
      <span 
        v-if="collapsible" 
        class="toggle-icon"
        :class="{ expanded: isExpanded }"
      >
        ▼
      </span>
    </header>
    
    <div 
      v-show="isExpanded" 
      class="panel-content"
    >
      <slot>
        <p>This is the default content. You can replace this with your own content using slots!</p>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.info-panel {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}

.panel-header {
  background: #f8f9fa;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
}

.panel-header.clickable {
  cursor: pointer;
  transition: background-color 0.2s;
}

.panel-header.clickable:hover {
  background: #e9ecef;
}

.panel-header h3 {
  margin: 0;
  color: #333;
}

.toggle-icon {
  transition: transform 0.2s;
  font-size: 0.8rem;
  color: #666;
}

.toggle-icon.expanded {
  transform: rotate(180deg);
}

.panel-content {
  padding: 1rem;
  color: #666;
  line-height: 1.6;
}
</style>
<script setup lang="ts">
interface Props {
  name: string
  email: string
  avatar?: string
  isOnline?: boolean
}

interface Emits {
  userClicked: [user: { name: string; email: string }]
}

const props = withDefaults(defineProps<Props>(), {
  avatar: '/placeholder-avatar.png',
  isOnline: false,
})

const emit = defineEmits<Emits>()

const handleUserClick = () => {
  emit('userClicked', { name: props.name, email: props.email })
}
</script>

<template>
  <div class="user-card" @click="handleUserClick">
    <div class="avatar-container">
      <img :src="avatar" :alt="`${name}'s avatar`" class="avatar" />
      <div v-if="isOnline" class="online-indicator"></div>
    </div>
    <div class="user-info">
      <h3 class="user-name">{{ name }}</h3>
      <p class="user-email">{{ email }}</p>
      <span class="status" :class="{ online: isOnline, offline: !isOnline }">
        {{ isOnline ? 'Online' : 'Offline' }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.user-card {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  background: white;
}

.user-card:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
}

.avatar-container {
  position: relative;
  margin-right: 1rem;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.online-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  background-color: #4caf50;
  border: 2px solid white;
  border-radius: 50%;
}

.user-info {
  flex: 1;
}

.user-name {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  color: #333;
}

.user-email {
  margin: 0 0 0.5rem 0;
  color: #666;
  font-size: 0.9rem;
}

.status {
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-weight: 500;
}

.status.online {
  background-color: #e8f5e8;
  color: #4caf50;
}

.status.offline {
  background-color: #ffeaea;
  color: #f44336;
}
</style>
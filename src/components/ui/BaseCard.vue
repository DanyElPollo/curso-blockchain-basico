<script setup lang="ts">
defineProps<{
  icon?: string
  title?: string
  borderColor?: string
}>()
</script>

<template>
  <div class="card" :style="borderColor ? `border-color: ${borderColor}` : undefined">
    <div v-if="icon" class="card-icon">{{ icon }}</div>
    <h4 v-if="title">{{ title }}</h4>
    <slot />
  </div>
</template>

<style scoped>
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  transition: all var(--transition-normal);
}

.card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 10px 40px rgba(0, 212, 255, 0.1);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.card h4 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  margin-top: 0;
}
</style>

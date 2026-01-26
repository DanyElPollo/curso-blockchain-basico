<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="sidebar-header">
    <div class="logo">
      <slot>
        <span class="logo-icon">⛓️</span>
        <span class="logo-text">{{ title || 'Blockchain Academy' }}</span>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.sidebar-header {
  padding: 0 var(--spacing-lg) var(--spacing-lg);
  border-bottom: 1px solid var(--border);
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 1.3rem;
  font-weight: bold;
}

.logo-text {
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-icon {
  font-size: 1.5rem;
}
</style>

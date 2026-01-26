<script setup lang="ts">
defineProps<{
  noteTitle?: string
}>()
</script>

<template>
  <div class="technical-note">
    <h4 v-if="noteTitle">{{ noteTitle }}</h4>
    <slot />
  </div>
</template>

<style scoped>
.technical-note {
  background: rgba(124, 58, 237, 0.1);
  border-left: 4px solid var(--accent-secondary);
  padding: var(--spacing-md) var(--spacing-lg);
  margin: var(--spacing-md) 0;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.technical-note::before {
  content: 'Nota tecnica (no obligatoria para el curso)';
  display: block;
  font-weight: bold;
  color: var(--accent-secondary);
  margin-bottom: var(--spacing-sm);
  font-size: 0.9rem;
}

.technical-note h4 {
  color: var(--accent-secondary);
  margin-top: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.technical-note :deep(ul) {
  margin: var(--spacing-sm) 0 0 var(--spacing-lg);
}

.technical-note :deep(p) {
  margin-bottom: var(--spacing-sm);
}
</style>

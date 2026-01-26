<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="warning-box">
    <strong v-if="title">{{ title }}</strong>
    <slot />
  </div>
</template>

<style scoped>
.warning-box {
  background: rgba(245, 158, 11, 0.1);
  border-left: 4px solid var(--accent-orange);
  padding: var(--spacing-md) var(--spacing-lg);
  margin: var(--spacing-md) 0;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.warning-box strong {
  display: block;
  margin-bottom: var(--spacing-sm);
  color: var(--accent-orange);
}

.warning-box :deep(ul) {
  margin: var(--spacing-sm) 0 0 var(--spacing-lg);
}

.warning-box :deep(p) {
  margin-bottom: var(--spacing-sm);
}

.warning-box :deep(p:last-child) {
  margin-bottom: 0;
}
</style>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="info-box">
    <strong v-if="title">{{ title }}</strong>
    <slot />
  </div>
</template>

<style scoped>
.info-box {
  background: rgba(0, 212, 255, 0.1);
  border-left: 4px solid var(--accent);
  padding: var(--spacing-md) var(--spacing-lg);
  margin: var(--spacing-md) 0;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.info-box strong {
  display: block;
  margin-bottom: var(--spacing-sm);
  color: var(--accent);
}

.info-box :deep(p) {
  margin-bottom: var(--spacing-sm);
}

.info-box :deep(p:last-child) {
  margin-bottom: 0;
}
</style>

<script setup lang="ts">
defineProps<{
  language?: string
  code: string
}>()
</script>

<template>
  <pre><code>{{ code }}</code><span v-if="language" class="code-label">{{ language }}</span></pre>
</template>

<style scoped>
pre {
  background: var(--bg-code);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  overflow-x: auto;
  margin: var(--spacing-md) 0;
  position: relative;
}

code {
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.9rem;
  color: var(--accent-green);
  white-space: pre;
}

.code-label {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  background: var(--accent-secondary);
  color: white;
  padding: var(--spacing-xs) 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-family: system-ui, sans-serif;
}
</style>

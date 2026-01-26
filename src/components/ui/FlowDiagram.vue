<script setup lang="ts">
import type { FlowItem } from '@/types/course'

defineProps<{
  items: FlowItem[]
}>()
</script>

<template>
  <div class="diagram">
    <div class="flow-diagram">
      <template v-for="(item, index) in items" :key="index">
        <div class="flow-item">
          <strong>{{ item.title }}</strong>
          <small v-if="item.subtitle">{{ item.subtitle }}</small>
          <small v-if="item.highlight" :style="{ color: 'var(--accent-orange)' }">{{
            item.highlight
          }}</small>
        </div>
        <span v-if="index < items.length - 1" class="flow-arrow">→</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.diagram {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
  text-align: center;
}

.flow-diagram {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.flow-item {
  background: var(--bg-card);
  border: 2px solid var(--accent);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  min-width: 120px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.flow-item strong {
  color: var(--text-primary);
}

.flow-item small {
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.flow-arrow {
  color: var(--accent);
  font-size: 1.5rem;
}
</style>

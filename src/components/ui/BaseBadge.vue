<script setup lang="ts">
import type { BadgeVariant } from '@/types/course'

withDefaults(
  defineProps<{
    variant?: BadgeVariant
  }>(),
  {
    variant: 'blue',
  },
)
</script>

<template>
  <span class="badge" :class="`badge-${variant}`">
    <slot />
  </span>
</template>

<style scoped>
.badge {
  display: inline-block;
  padding: var(--spacing-xs) 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.badge-blue {
  background: rgba(0, 212, 255, 0.2);
  color: var(--accent);
}

.badge-purple {
  background: rgba(124, 58, 237, 0.2);
  color: var(--accent-secondary);
}

.badge-green {
  background: rgba(16, 185, 129, 0.2);
  color: var(--accent-green);
}

.badge-orange {
  background: rgba(245, 158, 11, 0.2);
  color: var(--accent-orange);
}
</style>

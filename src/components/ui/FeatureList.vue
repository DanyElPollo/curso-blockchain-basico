<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <ul class="feature-list">
    <li v-for="(item, index) in items" :key="index" v-html="item"></li>
  </ul>
</template>

<style scoped>
.feature-list {
  list-style: none;
  margin-left: 0;
  padding: 0;
}

.feature-list li {
  padding: 0.75rem 0;
  padding-left: var(--spacing-xl);
  position: relative;
  color: var(--text-secondary);
}

.feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-green);
  font-weight: bold;
}
</style>

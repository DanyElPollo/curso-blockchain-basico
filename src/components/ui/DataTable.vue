<script setup lang="ts">
import type { TableColumn } from '@/types/course'

defineProps<{
  columns: TableColumn[]
  rows: Record<string, string | number>[]
}>()
</script>

<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">{{ col.header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="col in columns" :key="col.key" v-html="row[col.key]"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  overflow-x: auto;
  margin: var(--spacing-md) 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

th,
td {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--border);
}

th {
  background: var(--bg-secondary);
  color: var(--accent);
  font-weight: 600;
}

td {
  color: var(--text-secondary);
}

tr:hover td {
  background: rgba(0, 212, 255, 0.05);
}

td :deep(code) {
  background: var(--bg-code);
  padding: 0.1rem 0.4rem;
  border-radius: var(--radius-sm);
}
</style>

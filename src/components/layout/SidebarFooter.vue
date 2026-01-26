<script setup lang="ts">
defineProps<{
  isPresentationMode: boolean
}>()

const emit = defineEmits<{
  togglePresentation: [value: boolean]
}>()

const handleToggle = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('togglePresentation', target.checked)
}
</script>

<template>
  <div class="sidebar-footer">
    <div class="mode-toggle">
      <label class="mode-label">Modo Presentacion</label>
      <label class="switch">
        <input type="checkbox" :checked="isPresentationMode" @change="handleToggle" />
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<style scoped>
.sidebar-footer {
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 1px solid var(--border);
}

.mode-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-sm);
}

.mode-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.switch {
  position: relative;
  width: 50px;
  height: 26px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg-card);
  border-radius: 26px;
  transition: var(--transition-normal);
  border: 1px solid var(--border);
}

.slider:before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 2px;
  background: var(--accent);
  border-radius: 50%;
  transition: var(--transition-normal);
}

input:checked + .slider {
  background: var(--accent-secondary);
}

input:checked + .slider:before {
  transform: translateX(22px);
}
</style>

<script setup lang="ts">
defineProps<{
  currentSlide: number
  totalSlides: number
  canGoPrev: boolean
  canGoNext: boolean
  isVisible: boolean
}>()

const emit = defineEmits<{
  prev: []
  next: []
}>()
</script>

<template>
  <div class="presentation-nav" :class="{ visible: isVisible }">
    <button class="pres-btn" :disabled="!canGoPrev" @click="emit('prev')">← Anterior</button>
    <span class="slide-counter">
      <span class="current">{{ currentSlide }}</span>
      /
      <span class="total">{{ totalSlides }}</span>
    </span>
    <button class="pres-btn" :disabled="!canGoNext" @click="emit('next')">Siguiente →</button>
  </div>
</template>

<style scoped>
.presentation-nav {
  display: none;
  position: fixed;
  bottom: 0px;
  left: var(--sidebar-width);
  right: 0;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-md);
  z-index: 1002;
  background: rgba(10, 10, 15, 0.9);
  padding: var(--spacing-md);
  backdrop-filter: blur(10px);
}

.presentation-nav.visible {
  display: flex;
}

.pres-btn {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-primary);
  padding: 0.75rem var(--spacing-lg);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: 1rem;
  transition: all var(--transition-normal);
}

.pres-btn:hover:not(:disabled) {
  background: var(--accent);
  color: var(--bg-primary);
}

.pres-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slide-counter {
  background: var(--bg-card);
  padding: 0.75rem var(--spacing-lg);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

/* Sidebar hidden state */
:global(.sidebar-hidden) .presentation-nav {
  left: 0;
}

@media (max-width: 1024px) {
  .presentation-nav {
    left: 0;
  }
}
</style>

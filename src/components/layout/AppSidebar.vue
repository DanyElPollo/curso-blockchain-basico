<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigation'
import SidebarHeader from './SidebarHeader.vue'
import SidebarNavGroup from './SidebarNavGroup.vue'
import SidebarFooter from './SidebarFooter.vue'

defineProps<{
  isOpen: boolean
  isPresentationMode: boolean
  activeSection: string
}>()

const emit = defineEmits<{
  linkClick: [sectionId: string]
  togglePresentation: [value: boolean]
}>()

const navigationStore = useNavigationStore()

const handleLinkClick = (sectionId: string) => {
  emit('linkClick', sectionId)
}

const handleTogglePresentation = (value: boolean) => {
  emit('togglePresentation', value)
}
</script>

<template>
  <nav class="sidebar" :class="{ open: isOpen }">
    <SidebarHeader />

    <div class="nav-groups">
      <SidebarNavGroup
        v-for="group in navigationStore.groups"
        :key="group.id"
        :group="group"
        :active-section="activeSection"
        @toggle="navigationStore.toggleGroup"
        @link-click="handleLinkClick"
      />
    </div>

    <SidebarFooter
      :is-presentation-mode="isPresentationMode"
      @toggle-presentation="handleTogglePresentation"
    />
  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--sidebar-width);
  height: 100vh;
  background: rgba(10, 10, 15, 0.98);
  backdrop-filter: blur(10px);
  border-right: 1px solid var(--border);
  z-index: 1000;
  padding: var(--spacing-lg) 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  transition: transform var(--transition-normal);
}

.sidebar::-webkit-scrollbar {
  width: 4px;
}

.sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar::-webkit-scrollbar-thumb {
  background: var(--border);
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: var(--accent-secondary);
}

.nav-groups {
  flex: 1;
  padding: var(--spacing-md) 0;
  overflow-y: auto;
}

/* Mobile styles */
@media (max-width: 1024px) {
  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar.open {
    transform: translateX(0);
  }
}

/* Hidden state applied via parent */
:global(.sidebar-hidden) .sidebar {
  transform: translateX(-100%);
}
</style>

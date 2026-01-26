<script setup lang="ts">
import type { NavGroup } from '@/types/navigation'

const props = defineProps<{
  group: NavGroup
  activeSection: string
}>()

const emit = defineEmits<{
  toggle: [groupId: string]
  linkClick: [sectionId: string]
}>()

const handleHeaderClick = () => {
  emit('toggle', props.group.id)
}

const handleLinkClick = (sectionId: string) => {
  emit('linkClick', sectionId)
}
</script>

<template>
  <div class="nav-group" :class="{ collapsed: group.collapsed }">
    <div class="nav-group-header" @click="handleHeaderClick">
      <span class="group-title">
        <span class="group-icon">{{ group.icon }}</span>
        {{ group.title }}
      </span>
      <span class="toggle-icon">▼</span>
    </div>
    <ul v-show="!group.collapsed" class="nav-links">
      <li v-for="link in group.links" :key="link.id">
        <a
          :href="link.href"
          :class="{ active: activeSection === link.id }"
          @click.prevent="handleLinkClick(link.id)"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav-group {
  margin-bottom: var(--spacing-sm);
}

.nav-group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem var(--spacing-lg);
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all var(--transition-normal);
}

.nav-group-header:hover {
  color: var(--accent);
  background: rgba(0, 212, 255, 0.05);
}

.group-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.group-icon {
  font-size: 1rem;
}

.toggle-icon {
  transition: transform var(--transition-normal);
  font-size: 0.7rem;
}

.nav-group.collapsed .toggle-icon {
  transform: rotate(-90deg);
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links a {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.6rem var(--spacing-lg) 0.6rem 2.5rem;
  transition: all var(--transition-normal);
  border-left: 3px solid transparent;
}

.nav-links a:hover {
  color: var(--accent);
  background: rgba(0, 212, 255, 0.05);
  border-left-color: var(--accent);
}

.nav-links a.active {
  color: var(--accent);
  background: rgba(0, 212, 255, 0.1);
  border-left-color: var(--accent);
}
</style>

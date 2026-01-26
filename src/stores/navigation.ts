import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { navigationGroups, sectionIds } from '@/data/navigation'
import type { NavGroup } from '@/types/navigation'

export const useNavigationStore = defineStore('navigation', () => {
  const groups = ref<NavGroup[]>(
    navigationGroups.map((group) => ({
      ...group,
      collapsed: false,
    })),
  )

  const activeSection = ref<string>('intro')
  const allSectionIds = computed(() => sectionIds)

  const toggleGroup = (groupId: string) => {
    const group = groups.value.find((g) => g.id === groupId)
    if (group) {
      group.collapsed = !group.collapsed
    }
  }

  const setActiveSection = (sectionId: string) => {
    activeSection.value = sectionId
  }

  const getSectionIndex = (sectionId: string): number => {
    return sectionIds.indexOf(sectionId)
  }

  return {
    groups,
    activeSection,
    allSectionIds,
    toggleGroup,
    setActiveSection,
    getSectionIndex,
  }
})

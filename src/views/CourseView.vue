<script setup lang="ts">
import { computed, watch, onMounted } from 'vue'
import { useSidebar } from '@/composables/useSidebar'
import { usePresentation } from '@/composables/usePresentation'
import { useScrollSpy } from '@/composables/useScrollSpy'

import AppSidebar from '@/components/layout/AppSidebar.vue'
import PresentationNav from '@/components/layout/PresentationNav.vue'

// Sections
import HeroSection from '@/components/sections/HeroSection.vue'
import FundamentalsSection from '@/components/sections/FundamentalsSection.vue'
import CryptoSection from '@/components/sections/CryptoSection.vue'
import ConsensusSection from '@/components/sections/ConsensusSection.vue'
import NetworksSection from '@/components/sections/NetworksSection.vue'
import WalletsSection from '@/components/sections/WalletsSection.vue'
import SmartContractsSection from '@/components/sections/SmartContractsSection.vue'
import TokensSection from '@/components/sections/TokensSection.vue'
import NftsSection from '@/components/sections/NftsSection.vue'
import DefiSection from '@/components/sections/DefiSection.vue'
import ToolsSection from '@/components/sections/ToolsSection.vue'
import Web3Section from '@/components/sections/Web3Section.vue'
import SecuritySection from '@/components/sections/SecuritySection.vue'
import ResourcesSection from '@/components/sections/ResourcesSection.vue'

const sidebar = useSidebar()
const presentation = usePresentation()
const scrollSpy = useScrollSpy()

const activeSection = computed(() => {
  if (presentation.isActive.value) {
    return presentation.currentSectionId.value ?? 'intro'
  }
  return scrollSpy.activeSection.value
})

const handleLinkClick = (sectionId: string) => {
  sidebar.close()
  if (presentation.isActive.value) {
    presentation.goToSection(sectionId)
  } else {
    scrollSpy.scrollToSection(sectionId)
  }
}

const handleTogglePresentation = (value: boolean) => {
  presentation.toggle(value)
}

// Watch for body class changes
watch(
  () => sidebar.bodyClasses.value,
  (classes) => {
    Object.entries(classes).forEach(([className, active]) => {
      document.body.classList.toggle(className, active)
    })
  },
  { immediate: true },
)

watch(
  () => presentation.isActive.value,
  (active) => {
    document.body.classList.toggle('presentation-mode', active)
  },
)

onMounted(() => {
  // Initial setup
  document.body.classList.remove('sidebar-hidden')
})
</script>

<template>
  <div class="course-layout">
    <!-- Sidebar Toggle Button -->
    <button
      class="sidebar-toggle"
      :class="{ 'sidebar-open': sidebar.isOpen.value }"
      @click="sidebar.toggle"
    >
      {{ sidebar.toggleIcon.value }}
    </button>

    <!-- Sidebar Overlay (mobile) -->
    <div
      class="sidebar-overlay"
      :class="{ active: sidebar.isOpen.value }"
      @click="sidebar.close"
    ></div>

    <!-- Sidebar -->
    <AppSidebar
      :is-open="sidebar.isOpen.value"
      :is-presentation-mode="presentation.isActive.value"
      :active-section="activeSection"
      @link-click="handleLinkClick"
      @toggle-presentation="handleTogglePresentation"
    />

    <!-- Presentation Navigation -->
    <PresentationNav
      :current-slide="presentation.currentSlide.value"
      :total-slides="presentation.totalSlides.value"
      :can-go-prev="presentation.canGoPrev.value"
      :can-go-next="presentation.canGoNext.value"
      :is-visible="presentation.isActive.value"
      @prev="presentation.prevSlide"
      @next="presentation.nextSlide"
    />

    <!-- Main Content -->
    <main :class="{ 'presentation-mode': presentation.isActive.value }">
      <HeroSection
        :class="{ active: presentation.currentSectionId.value === 'intro' }"
      />
      <FundamentalsSection
        :class="{ active: presentation.currentSectionId.value === 'fundamentals' }"
      />
      <CryptoSection
        :class="{ active: presentation.currentSectionId.value === 'crypto' }"
      />
      <ConsensusSection
        :class="{ active: presentation.currentSectionId.value === 'consensus' }"
      />
      <NetworksSection
        :class="{ active: presentation.currentSectionId.value === 'networks' }"
      />
      <WalletsSection
        :class="{ active: presentation.currentSectionId.value === 'wallets' }"
      />
      <SmartContractsSection
        :class="{ active: presentation.currentSectionId.value === 'smart-contracts' }"
      />
      <TokensSection
        :class="{ active: presentation.currentSectionId.value === 'tokens' }"
      />
      <NftsSection
        :class="{ active: presentation.currentSectionId.value === 'nfts' }"
      />
      <DefiSection
        :class="{ active: presentation.currentSectionId.value === 'defi' }"
      />
      <ToolsSection
        :class="{ active: presentation.currentSectionId.value === 'tools' }"
      />
      <Web3Section
        :class="{ active: presentation.currentSectionId.value === 'web3' }"
      />
      <SecuritySection
        :class="{ active: presentation.currentSectionId.value === 'security' }"
      />
      <ResourcesSection
        :class="{ active: presentation.currentSectionId.value === 'resources' }"
      />
    </main>
  </div>
</template>

<style scoped>
.course-layout {
  min-height: 100vh;
}

/* Sidebar Toggle */
.sidebar-toggle {
  position: fixed;
  top: var(--spacing-md);
  left: var(--spacing-md);
  z-index: 1001;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--accent);
  padding: var(--spacing-sm) 0.75rem;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: 1.2rem;
  transition: all var(--transition-normal);
}

.sidebar-toggle:hover {
  background: var(--accent);
  color: var(--bg-primary);
}

/* Desktop: toggle button position */
@media (min-width: 1025px) {
  .sidebar-toggle {
    left: calc(var(--sidebar-width) + 10px);
  }

  :global(.sidebar-hidden) .sidebar-toggle {
    left: var(--spacing-md);
  }
}

/* Mobile: toggle button position */
@media (max-width: 1024px) {
  .sidebar-toggle.sidebar-open {
    left: calc(var(--sidebar-width) + 10px);
  }
}

/* Sidebar Overlay */
.sidebar-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.sidebar-overlay.active {
  display: block;
}

/* Main Content */
main {
  margin-left: var(--sidebar-width);
  padding-top: 20px;
  transition: margin-left var(--transition-normal);
}

:global(.sidebar-hidden) main {
  margin-left: 0;
}

@media (max-width: 1024px) {
  main {
    margin-left: 0;
  }
}

/* Presentation Mode */
main.presentation-mode {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

main.presentation-mode :deep(section) {
  display: none !important;
  position: fixed;
  top: 0;
  left: var(--sidebar-width);
  right: 0;
  bottom: 0;
  min-height: auto;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: var(--spacing-xl) var(--spacing-xl) 6rem;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0;
  max-width: none;
  background: var(--bg-primary);
}

main.presentation-mode :deep(section.active) {
  display: block !important;
}

main.presentation-mode :deep(section > *) {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

main.presentation-mode :deep(section.hero) {
  display: none !important;
}

main.presentation-mode :deep(section.hero.active) {
  display: flex !important;
  justify-content: center;
  align-items: center;
}

:global(.sidebar-hidden) main.presentation-mode :deep(section) {
  left: 0;
}

@media (max-width: 1024px) {
  main.presentation-mode :deep(section) {
    left: 0;
    padding: var(--spacing-xl) var(--spacing-md) 6rem;
  }
}
</style>

import { ref, computed, onMounted, onUnmounted } from 'vue'
import { sectionIds } from '@/data/navigation'

const isActive = ref(false)
const currentSlideIndex = ref(0)

export function usePresentation() {
  const totalSlides = computed(() => sectionIds.length)

  const currentSlide = computed(() => currentSlideIndex.value + 1)

  const currentSectionId = computed(() => sectionIds[currentSlideIndex.value])

  const canGoPrev = computed(() => currentSlideIndex.value > 0)

  const canGoNext = computed(() => currentSlideIndex.value < sectionIds.length - 1)

  const toggle = (value?: boolean) => {
    isActive.value = value !== undefined ? value : !isActive.value

    if (isActive.value) {
      currentSlideIndex.value = 0
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const goToSlide = (index: number) => {
    if (index >= 0 && index < sectionIds.length) {
      currentSlideIndex.value = index
    }
  }

  const goToSection = (sectionId: string) => {
    const index = sectionIds.indexOf(sectionId)
    if (index !== -1) {
      currentSlideIndex.value = index
    }
  }

  const nextSlide = () => {
    if (canGoNext.value) {
      currentSlideIndex.value++
    }
  }

  const prevSlide = () => {
    if (canGoPrev.value) {
      currentSlideIndex.value--
    }
  }

  const handleKeydown = (e: KeyboardEvent) => {
    if (!isActive.value) return

    switch (e.key) {
      case 'ArrowRight':
      case ' ':
        e.preventDefault()
        nextSlide()
        break
      case 'ArrowLeft':
        e.preventDefault()
        prevSlide()
        break
      case 'Escape':
        toggle(false)
        break
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })

  return {
    isActive,
    currentSlide,
    totalSlides,
    currentSlideIndex,
    currentSectionId,
    canGoPrev,
    canGoNext,
    toggle,
    goToSlide,
    goToSection,
    nextSlide,
    prevSlide,
  }
}

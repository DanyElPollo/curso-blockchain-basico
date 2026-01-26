import { ref, onMounted, onUnmounted } from 'vue'
import { sectionIds } from '@/data/navigation'

const activeSection = ref<string>('intro')

export function useScrollSpy() {
  let observer: IntersectionObserver | null = null

  const updateActiveSection = () => {
    const scrollPos = window.scrollY + 150

    for (const id of sectionIds) {
      const section = document.getElementById(id)
      if (section) {
        const top = section.offsetTop
        const height = section.offsetHeight

        if (scrollPos >= top && scrollPos < top + height) {
          activeSection.value = id
          break
        }
      }
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const setupAnimationObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll('.card, .diagram').forEach((el) => {
      observer?.observe(el)
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection)
    updateActiveSection()
    setupAnimationObserver()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
    observer?.disconnect()
  })

  return {
    activeSection,
    scrollToSection,
  }
}

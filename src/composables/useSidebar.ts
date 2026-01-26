import { ref, computed, onMounted, onUnmounted } from 'vue'

const isHidden = ref(false)
const isOpen = ref(false)
const isMobile = ref(false)

export function useSidebar() {
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 1024
  }

  const toggle = () => {
    if (isMobile.value) {
      isOpen.value = !isOpen.value
    } else {
      isHidden.value = !isHidden.value
    }
  }

  const close = () => {
    if (isMobile.value) {
      isOpen.value = false
    }
  }

  const toggleIcon = computed(() => {
    if (isMobile.value) {
      return isOpen.value ? '✕' : '☰'
    }
    return isHidden.value ? '▶' : '◀'
  })

  const sidebarClasses = computed(() => ({
    open: isOpen.value,
    hidden: isHidden.value,
  }))

  const bodyClasses = computed(() => ({
    'sidebar-hidden': isHidden.value && !isMobile.value,
  }))

  onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
  })

  return {
    isHidden,
    isOpen,
    isMobile,
    toggle,
    close,
    toggleIcon,
    sidebarClasses,
    bodyClasses,
  }
}

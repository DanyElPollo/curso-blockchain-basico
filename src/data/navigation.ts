import type { NavGroup } from '@/types/navigation'

export const navigationGroups: NavGroup[] = [
  {
    id: 'fundamentals',
    icon: '📚',
    title: 'Fundamentos',
    links: [
      { id: 'intro', label: 'Introduccion', href: '#intro' },
      { id: 'fundamentals', label: 'Blockchain', href: '#fundamentals' },
      { id: 'crypto', label: 'Criptografia', href: '#crypto' },
      { id: 'consensus', label: 'Consenso', href: '#consensus' },
    ],
  },
  {
    id: 'ecosystem',
    icon: '🌐',
    title: 'Ecosistema',
    links: [
      { id: 'networks', label: 'Redes', href: '#networks' },
      { id: 'wallets', label: 'Wallets', href: '#wallets' },
    ],
  },
  {
    id: 'development',
    icon: '💻',
    title: 'Desarrollo',
    links: [
      { id: 'smart-contracts', label: 'Smart Contracts', href: '#smart-contracts' },
      { id: 'tokens', label: 'Tokens', href: '#tokens' },
      { id: 'nfts', label: 'NFTs', href: '#nfts' },
    ],
  },
  {
    id: 'applications',
    icon: '🚀',
    title: 'Aplicaciones',
    links: [
      { id: 'defi', label: 'DeFi', href: '#defi' },
      { id: 'web3', label: 'Web3', href: '#web3' },
    ],
  },
  {
    id: 'practice',
    icon: '🛠️',
    title: 'Practica',
    links: [
      { id: 'tools', label: 'Herramientas', href: '#tools' },
      { id: 'security', label: 'Seguridad', href: '#security' },
      { id: 'resources', label: 'Recursos', href: '#resources' },
    ],
  },
]

export const sectionIds = navigationGroups.flatMap((group) => group.links.map((link) => link.id))

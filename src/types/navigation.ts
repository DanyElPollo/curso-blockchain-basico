export interface NavLink {
  id: string
  label: string
  href: string
}

export interface NavGroup {
  id: string
  icon: string
  title: string
  links: NavLink[]
  collapsed?: boolean
}

export interface NavigationConfig {
  groups: NavGroup[]
}

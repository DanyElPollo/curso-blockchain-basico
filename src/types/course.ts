export interface BlockData {
  header: string
  transactions: string
  hash: string
  prevHash?: string
}

export interface CardItem {
  icon: string
  title: string
  description: string
  badges?: string[]
  list?: string[]
}

export interface TableColumn {
  key: string
  header: string
}

export interface TableRow {
  [key: string]: string | number
}

export interface FlowItem {
  title: string
  subtitle?: string
  highlight?: string
}

export type BadgeVariant = 'blue' | 'purple' | 'green' | 'orange'

export type BoxVariant = 'info' | 'warning' | 'technical'

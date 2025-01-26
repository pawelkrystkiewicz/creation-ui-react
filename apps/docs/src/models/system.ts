export type DocumentedProperty = {
  name: string
  type: string
  description: string
  defaultValue?: string | number | boolean
  note?: string
  experimental?: boolean
}

export type JSXNode = any

export type FunctionalComponent<P = {}> = (props: P) => JSXNode
export type ForwardedComponent<P = {}> = {
  (props: P, ref?: any): JSXNode | null
}

export type HTMLProps<T> = {
  [P in keyof T]?: T[P]
}

export type ClassName = string[] | string | undefined

export const DATE_TYPES = [
  //
  'date',
  'datetime-local',
  'month',
  'time',
  'week',
] as const

export type DateType = (typeof DATE_TYPES)[number]

export const INPUT_TYPES = [
  'email',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'url',
  'color',
  'file',
] as const

export type InputType = (typeof INPUT_TYPES)[number]

export type HTMLInputType = InputType | DateType

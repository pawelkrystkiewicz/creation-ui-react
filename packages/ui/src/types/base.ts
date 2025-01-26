export type JSXNode = any

export type FunctionalComponent<P = {}> = (props: P) => JSXNode
export type ForwardedComponent<P = {}> = {
  (props: P, ref?: any): JSXNode | null
}

export type HTMLProps<T> = {
  [P in keyof T]?: T[P]
}

export type ClassName = string[] | string | undefined

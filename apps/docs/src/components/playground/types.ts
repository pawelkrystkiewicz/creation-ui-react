import type { FC, ReactNode } from 'react'

export type PlaygroundValueType =
  | 'string'
  | 'boolean'
  | 'number'
  | 'array'
  | 'object'
export type PlaygroundValues = string | boolean | number
export type PlaygroundControls =
  | 'input:text'
  | 'input:number'
  | 'colors'
  | 'switch'
  | 'toggle-group'
  | 'nested'
  | 'select'

export type PlaygroundSelectValue = string | number

export type PlaygroundControl = {
  name: string
  type: PlaygroundValueType
  label?: ReactNode
  component?: PlaygroundControls
  defaultValue?: PlaygroundValues
  values?:
    | PlaygroundSelectValue[]
    | { label: ReactNode; value: PlaygroundSelectValue }[]
  controls?: PlaygroundControl[]
  helperText?: string
  noBracesInReplacement?: boolean
}

export interface PlaygroundProps<T = Record<string, unknown>> {
  component: FC<T>
  controls?: PlaygroundControl[]
  componentProps?: T
  code?: string
  className?: string
}

export interface PlaygroundState {
  [key: string]: PlaygroundValues
}

export interface PlaygroundContextValue extends PlaygroundProps {
  state: PlaygroundState
  handleChange: (name: string, value: PlaygroundValues) => void
}

export type PlaygroundConfiguratorProps<T> = Pick<
  PlaygroundProps<T>,
  'code' | 'component' | 'controls'
>

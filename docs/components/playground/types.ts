import type { FC } from 'react'

export type PlaygroundValueType = 'string' | 'boolean' | 'number' | 'array' | 'object'
export type PlaygroundValues = string | boolean | number
export type PlaygroundControls = 'input:text' | 'input:number' | 'colors' | 'switch' | 'toggle-group' | 'nested'

export type PlaygroundControl = {
  name: string
  type: PlaygroundValueType
  label?: string
  component?: PlaygroundControls
  defaultValue?: PlaygroundValues
  values?: any[]
  controls?: PlaygroundControl[]
  helperText?: string
}

export interface PlaygroundControllerProps {
  name: string
  component: FC<any>
  controls: PlaygroundControl[]
  showCode?: boolean
  componentProps?: any
}

export interface PlaygroundState {
  [key: string]: PlaygroundValues
}

export interface PlaygroundContextValue extends PlaygroundControllerProps {
  state: PlaygroundState
  handleChange: (name: string, value: PlaygroundValues) => void
}

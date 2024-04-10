import { PlaygroundControls, PlaygroundValueType } from './types'

export const INPUT_TYPES = [
  'text',
  'password',
  'submit',
  'reset',
  'radio',
  'checkbox',
  'button',
  'file',
  'image',
  'color',
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'url',
  'week',
  'search',
  'tel',
]

export const DEFAULT_CONTROLS: Record<PlaygroundValueType, PlaygroundControls> = {
  boolean: 'switch',
  array: 'toggle-group',
  string: 'input:text',
  number: 'input:number',
  object: 'nested',
}

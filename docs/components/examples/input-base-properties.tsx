import { ELEMENT_SIZES } from '@creation-ui/core'
import type { DocumentedProperty } from 'models/system'
import { ListOrTypes } from 'utils/list-or-types'
import { iconProp, variantProp } from './shared-props'

export const inputBaseProperties: DocumentedProperty[] = [
  {
    name: 'size',
    type: ListOrTypes([...ELEMENT_SIZES]),
    defaultValue: 'md',
    description: 'Size of the element',
  },
  { ...variantProp, defaultValue: 'outlined' },
  { name: 'required', type: 'boolean', description: 'Is element required?' },
  { name: 'readOnly', type: 'boolean', description: 'Is element read-only?' },
  { name: 'label', type: 'string', description: 'Input label' },
  { name: 'disabled', type: 'boolean', description: 'Is disabled?' },
  { name: 'loading', type: 'boolean', description: 'Show loading state' },
  {
    ...iconProp,
    name: 'startAdornment',
    description: 'Icon on the left side of the component',
  },
  {
    ...iconProp,
    name: 'endAdornment',
    description: 'Icon on the right side of the component',
  },
  {
    name: 'helperText',
    type: 'boolean',
    description: 'Additional information for display with component',
  },
  {
    name: 'error',
    type: 'boolean',
    description: 'Text to be displayed when input is invalid',
  },
  {
    name: 'cx',
    type: `{
        input?: 'string',
        label?: 'string',
        container?: {
          inner?: 'string',
          outer?: 'string',
        }
      }`,

    description:
      'Class names manipulation API. Each property ("input", "label", etc.) is assigned to different Input component',
  },
]

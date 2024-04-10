import { Playground } from '@components/playground'
import { Radio, RadioProps } from '@creation-ui/react'
import { ELEMENT_SIZES } from '@creation-ui/core'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'
import { createRadioControls } from './shared-playground-controls'

export const RadioExample = ({ ...props }: Omit<RadioProps, 'onChange' | 'ref'>) => {
  const [checked, setChecked] = useState<boolean>(false)

  return <Radio onChange={e => setChecked(e.target.checked)} checked={checked} {...props} />
}

export const radioControlsSet = createRadioControls()

export const RadioPlayground = () => <Playground name='Radio' component={RadioExample} controls={radioControlsSet} />

export const properties: DocumentedProperty[] = [
  {
    name: 'size',
    type: ListOrTypes([...ELEMENT_SIZES]),
    defaultValue: 'md',
    description: 'Size of the element',
  },
  { name: 'label', type: 'string', description: 'Input label' },
  {
    name: 'indeterminate',
    type: 'string',
    description: 'Should component display icon for the indeterminate state',
    note: 'Often used as indication that not all options are selected on the list',
  },
  { name: 'disabled', type: 'boolean', description: 'Is disabled?' },
  {
    name: 'enableFocusRing',
    type: 'boolean',
    description: 'Should component display focus ring when `:focus`',
  },
]

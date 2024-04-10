import { Playground } from '@components/playground'
import { ELEMENT_SIZES } from '@creation-ui/core'
import { Checkbox } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'
import {
  disabledControl,
  errorControl,
  helperTextControl,
  labelControl,
  loadingControl,
  readOnlyControl,
  sizeControl,
} from './shared-playground-controls'

export const CheckboxPlayground = () => {
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <Playground
      name='Checkbox'
      component={Checkbox}
      componentProps={{
        checked,
        onChange: e => setChecked(e.target.checked),
      }}
      controls={[
        sizeControl,
        errorControl,
        loadingControl,
        disabledControl,
        readOnlyControl,
        helperTextControl,
        labelControl,
      ]}
    />
  )
}

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

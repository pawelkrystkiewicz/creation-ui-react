import { Playground } from '@components/playground'
import { ButtonGroup } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { sizeControl, statusControl } from './shared-playground-controls'
import { classNameProps, disabledProp, labelProp, onClickCallback, sizeProp } from './shared-props'

export const ButtonGroupPlayground = () => {
  const buttons = [
    { label: 'Year', onClick: () => {} },
    { label: 'Month', onClick: () => {} },
    { label: 'Day', onClick: () => {} },
  ]

  return (
    <Playground
      component={ButtonGroup}
      name='ButtonGroup'
      componentProps={{
        options: buttons,
      }}
      controls={[sizeControl, statusControl]}
    />
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'options',
    description: 'Options of the button group.',
    type: 'ButtonGroupOption[]',
  },
  classNameProps,
  sizeProp,
]

export const buttonGroupOptions: DocumentedProperty[] = [classNameProps, labelProp, onClickCallback, disabledProp]

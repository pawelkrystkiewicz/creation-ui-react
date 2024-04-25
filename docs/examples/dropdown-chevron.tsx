import { Playground } from '@components/playground'
import { DropdownChevron } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'
import { sizeControl } from './shared-playground-controls'

export const DropdownChevronExample = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Playground
      name='DropdownChevron'
      component={DropdownChevron}
      controls={[sizeControl]}
      componentProps={{
        onClick: () => setIsOpen(!isOpen),
        open: isOpen,
      }}
    />
  )
}

export const properties: DocumentedProperty[] = [
  {
    description: 'State of the dropdown',
    name: 'open',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    description: 'Callback when the dropdown is clicked',
    name: 'onClick',
    type: '() => void',
  },
]

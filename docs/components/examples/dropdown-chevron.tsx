import { Button, DropdownChevron } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'

export const DropdownChevronExample = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex flex-col w-fit mx-auto'>
      <div className='mx-auto'>
        <DropdownChevron open={isOpen} />
      </div>
      <Button size='sm' variant='text' onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </Button>
    </div>
  )
}

export const properties: DocumentedProperty[] = [
  {
    description: 'State of the dropdown',
    name: 'open',
    type: 'boolean',
    defaultValue: 'false',
  },
]

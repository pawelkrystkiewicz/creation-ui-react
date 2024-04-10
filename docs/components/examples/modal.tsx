import { Button, Modal, ModalProps } from '@creation-ui/react'
import { childrenProp, elementTypeProp, openProp } from '@components/examples/shared-props'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'

export const ModalExample = (props: ModalProps) => {
  const [open, setOpen] = useState(false)

  const onClose = () => setOpen(false)
  const onClick = () => setOpen(true)

  return (
    <>
      <Button onClick={onClick}>Open modal</Button>
      <div>
        <Modal open={open} onClose={onClose} {...props}>
          <Modal.Title>Payment successful</Modal.Title>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Your payment has been successfully submitted. We&apos;ve sent you an email with all of the details of your
              order.
            </p>
          </div>
          <div className='mt-4'>
            <Button onClick={onClose}>Got it, thanks!</Button>
          </div>
        </Modal>
      </div>
    </>
  )
}

export const properties: DocumentedProperty[] = [
  openProp,
  {
    description: 'Callback function called when closing modal',
    name: 'onClose',
    type: '() => void',
  },
  {
    description: 'Callback function called when closing modal',
    name: 'onOverlayClick',
    type: '() => void',
  },
  childrenProp,
]

export const titlesProps: DocumentedProperty[] = [
  elementTypeProp,
  {
    description: 'This is the content that ProgressBar wraps around',
    name: 'children',
    type: 'React.ReactNode',
  },
  {
    description: 'Class names override',
    name: 'className',
    type: 'string',
  },
]

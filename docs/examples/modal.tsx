import { childrenProp, elementTypeProp, openProp } from '@root/examples/shared-props'
import { DocumentedProperty } from 'models/system'

import Icon from '@components/icon'
import { Button, Flex, Input, Modal, ModalProps, ModalTitle, ModalHeader, ModalFooter } from '@creation-ui/react'
import { mdiCreditCardEditOutline } from '@mdi/js'
import clsx from 'clsx'
import { useState } from 'react'

const MODAL_PADDING = 'p-4'
const FORM_GAP = 4

export const ModalExample = (props: ModalProps) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const onClose = () => setOpen(false)
  const onClick = () => setOpen(true)

  const onSave = () => {
    setLoading(true)
    new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, 500)
    }).then(() => {
      onClose()
      setLoading(false)
    })
  }

  return (
    <>
      <Button onClick={onClick}>Open modal</Button>
      <div>
        <Modal open={open} onClose={onClose} {...props}>
          <ModalHeader className={clsx('flex items-center gap-2', MODAL_PADDING)}>
            <Icon path={mdiCreditCardEditOutline} className='text-primary p-2 bg-primary/10 rounded-full' size={2} />
            <div className='flex flex-col'>
              <ModalTitle className={'font-bold'}>Edit payment details</ModalTitle>
              <div className='text-info text-xs'>We automatically bill on the 1st of each month.</div>
            </div>
          </ModalHeader>
          <div className={clsx('mt-3 mb-6', MODAL_PADDING, 'w-full max-w-md')}>
            <form className='w-full'>
              <Flex column gap={FORM_GAP}>
                <Flex gap={FORM_GAP}>
                  <Input
                    type='text'
                    placeholder='Olivia Rhye'
                    label='Name on card'
                    cx={{
                      container: {
                        outer: 'flex-grow',
                        inner: 'w-64',
                      },
                    }}
                  />
                  <Input type='text' placeholder='06 / 2024' label='Expiry' cx={{ container: { inner: 'w-24' } }} />
                </Flex>
                <Flex gap={FORM_GAP}>
                  <Input
                    type='text'
                    placeholder='1234 1234 1234 1234'
                    label={'Card number'}
                    cx={{
                      container: {
                        outer: 'flex-grow',
                        inner: 'w-64',
                      },
                    }}
                  />
                  <Input type='text' placeholder='•••' label='CVV' cx={{ container: { inner: 'w-24' } }} />
                </Flex>
              </Flex>
            </form>
          </div>
          <ModalFooter className={clsx(MODAL_PADDING, 'flex flex-row-reverse gap-1')}>
            <Button onClick={onSave} loading={loading}>
              Save
            </Button>
            <Button onClick={onClose} variant={'text'} color='error'>
              Cancel
            </Button>
          </ModalFooter>
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

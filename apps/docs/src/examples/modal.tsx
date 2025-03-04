'use client'
import { Container } from '@/components/container'
import {
  Button,
  Field,
  Flex,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '@creation-ui/react'
import { CreditCard } from 'iconoir-react'
import { useToggle } from 'react-use'

export const ModalExample = () => {
  const [open, toggleOpen] = useToggle(false)
  const [loading, toggleLoading] = useToggle(false)

  const onSave = () => {
    toggleLoading(true)
    new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, 500)
    }).then(() => {
      toggleOpen(false)
      toggleLoading(false)
    })
  }

  return (
    <Container variant='column'>
      <Button onClick={toggleOpen}>Open</Button>
      <Modal
        onClose={toggleOpen}
        open={open}
        className='sm:max-w-md w-full h-full sm:h-fit'
      >
        <ModalHeader border>
          <CreditCard className='text-primary p-2 bg-primary/10 rounded-full text-5xl flex-shrink-0' />
          <div className='flex flex-col'>
            <h2 className={'font-bold'}>Edit payment details</h2>
            <div className='text-info text-xs'>
              We automatically bill on the 1st of each month.
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <form className='w-full flex flex-col gap-5 mt-5'>
            <Field>
              <Label required>Name on card</Label>
              <Input
                type='text'
                placeholder='Olivia Rhye'
                cx={{
                  outer: 'flex-grow',
                  inner: 'w-64',
                }}
              />
            </Field>

            <Field>
              <Label required>Card number</Label>
              <Input
                type='text'
                placeholder='1234 1234 1234 1234'
                cx={{
                  outer: 'flex-grow',
                  inner: 'w-64',
                }}
              />
            </Field>
            <Flex items={'center'} gapX={5}>
              <Field>
                <Label required>Expires</Label>
                <Input
                  type='text'
                  placeholder={`12/${new Date().getFullYear().toString().slice(-2)}`}
                />
              </Field>
              <Field>
                <Label required>CVV</Label>
                <Input type='text' placeholder='•••' endAdornment={''} />
              </Field>
            </Flex>
          </form>
        </ModalBody>
        <ModalFooter border>
          <Button
            onClick={toggleOpen}
            disabled={loading}
            variant={'text'}
            color='error'
          >
            Cancel
          </Button>
          <Button onClick={onSave} loading={loading}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  )
}

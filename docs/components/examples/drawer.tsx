import { childrenProp, openProp, positionProp } from '@components/examples/shared-props'
import { Playground } from '@components/playground'
import { Button, Drawer, DrawerProps } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { positionControl } from './shared-playground-controls'
import { useState } from 'react'
import { Container } from '@components/container'
import clsx from 'clsx'

export const DrawerExample = (props: DrawerProps) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button onClick={handleOpen}>Open Drawer</Button>
      <Drawer open={open} onClose={handleClose} {...props}>
        <div className='p-5'>
          <h1>Payment successful</h1>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Your payment has been successfully submitted. We&apos;ve sent you an email with all of the details of your
              order.
            </p>
          </div>
          <div className='mt-4'>
            <Button onClick={handleClose}>Got it, thanks!</Button>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export const DrawerPlayground = () => (
  <Playground name='Drawer' component={DrawerExample} controls={[positionControl]} showCode={false} />
)
export const DrawerCustomizedExample = (props: DrawerProps) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const innerClasses = ['!w-[calc(100%-30px)]', '!h-[calc(100%-30px)]', 'rounded-xl', 'm-[15px]']

  return (
    <Container>
      <Button onClick={handleOpen}>Open Drawer</Button>
      <Drawer
        open={open}
        onClose={handleClose}
        cx={{
          width: 'xl:w-1/3 lg:w-1/2 w-full',
          container: {
            inner: clsx(innerClasses),
          },
        }}
      >
        <div className='p-5 flex flex-col'>
          <h1>Title</h1>
          <div className='mt-2 flex-grow'>
            <p className='text-sm text-gray-500'>Content</p>
          </div>
          <div className='mt-4'>
            <Button onClick={handleClose}>Save</Button>
          </div>
        </div>
      </Drawer>
    </Container>
  )
}

export const properties: DocumentedProperty[] = [
  openProp,
  childrenProp,
  positionProp,
  {
    description: 'Callback function called when closing Drawer',
    name: 'onClose',
    type: '() => void',
  },
  {
    description: 'Callback function called on overlay click. Maybe used to close Drawer or prevent closing.',
    name: 'onOverlayClick',
    type: '() => void',
  },
  {
    name: 'cx',
    description:
      'Class names manipulation API. Width and height control how much space Drawer takes. <code>container.outer</code> and <code>container.inner</code> control can be used to change how content is styled.',
    type: JSON.stringify({
      'height?': 'string',
      'width?': 'string',
      'container?': {
        'outer?': 'string',
        'inner?': 'string',
      },
    }),
  },
]

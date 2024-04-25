import { Dialog } from '@headlessui/react'
import clsx from 'clsx'
import { ModalTitleProps } from './modal.types'
import { modalClasses } from './classes'

export const ModalTitle = (props: ModalTitleProps) => {
  const { children, className, as = 'h3' } = props
  return (
    <Dialog.Title as={as} className={clsx(modalClasses.title, className)}>
      {children}
    </Dialog.Title>
  )
}

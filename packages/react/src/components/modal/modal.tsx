import { Overlay } from '@components/overlay'
import { Dialog, Transition } from '@headlessui/react'
import { useTheme } from '@theme'
import clsx from 'clsx'
import { Fragment } from 'react'
import { modalClasses, transitionProps } from './classes'
import type { ModalProps } from './modal.types'

export const Modal = (props: ModalProps) => {
  const { zIndex } = useTheme()
  const {
    children,
    className,
    onClose = () => {},
    onOverlayClick,
    open,
  } = props

  return (
    <>
      <Overlay className={'fixed'} active={open} onClick={onOverlayClick} />
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as='div'
          className={clsx(modalClasses.base, zIndex?.modals, className)}
          // @ts-ignore
          onClose={onClose}
        >
          <Transition.Child as={Fragment} {...transitionProps.modal}>
            <div className={clsx(modalClasses.layer[1])}>
              <div className={clsx(modalClasses.layer[2])}>
                <Dialog.Panel className={clsx(modalClasses.panel)}>
                  {children}
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

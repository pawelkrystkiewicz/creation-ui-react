import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import type { ModalProps, ModalTitleProps } from './modal.types'
import { useTheme } from '../../theme'
import { Overlay } from '../overlay'

const transitionProps = {
  modal: {
    enter: 'ease-in-out duration-[350ms]',
    enterFrom: 'opacity-0 scale-75',
    enterTo: 'opacity-100 scale-100',
    leave: 'ease-in-out duration-[350ms]',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-75',
  },
}

const modal = {
  base: ['relative'],
  layer: {
    1: ['fixed', 'inset-0', 'overflow-y-auto'],
    2: [
      'flex',
      'min-h-full',
      'items-center',
      'justify-center',
      'p-4',
      'text-center',
    ],
  },
  title: ['text-lg', 'font-medium', 'leading-6'],
  panel: [
    'w-full',
    'max-w-md',
    'transform',
    'overflow-hidden',
    'rounded-xl',
    'bg-info-50',
    'dark:bg-info',
    'p-6',
    'text-left',
    'align-middle',
    'shadow-xl',
    'transition-all',
  ],
}

const Modal = (props: ModalProps) => {
  const { zIndex } = useTheme()
  const {
    //
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
          className={clsx(modal.base, zIndex?.modals, className)}
          // @ts-ignore
          onClose={onClose}
        >
          <Transition.Child as={Fragment} {...transitionProps.modal}>
            <div className={clsx(modal.layer[1])}>
              <div className={clsx(modal.layer[2])}>
                <Dialog.Panel className={clsx(modal.panel)}>
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

const Title = (props: ModalTitleProps) => {
  const { children, className, as = 'h3' } = props
  return (
    <Dialog.Title as={as} className={clsx(modal.title, className)}>
      {children}
    </Dialog.Title>
  )
}

Modal.Title = Title

export default Modal

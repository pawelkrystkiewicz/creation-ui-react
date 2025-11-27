import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import clsx from 'clsx'
import React, { FC } from 'react'
import {
  //
  ModalHeaderProps,
  ModalProps,
  ModalBodyProps,
  ModalFooterProps,
} from './types'

export const Modal: FC<ModalProps> = ({ className, children, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogBackdrop
        transition
        className={clsx(
          'fixed',
          'inset-0',
          'flex',
          'w-screen',
          'justify-center',
          'overflow-y-auto',
          'transition',
          'micro-interactions',
          'focus:outline-0',
          'data-closed:opacity-0',
          'data-enter:ease-out',
          'data-leave:ease-in',
          'bg-black/50',
          'z-(--ui-z-overlays)',
        )}
      />

      <div
        className={clsx([
          'z-(--ui-z-modals)',
          'fixed',
          'inset-0',
          'w-screen',
          'overflow-y-auto',
        ])}
      >
        <div
          className={clsx([
            'grid',
            'min-h-full',
            'grid-rows-[1fr_auto_1fr]',
            'justify-items-center',
            'sm:grid-rows-[1fr_auto_3fr]',
            'sm:p-4',
          ])}
        >
          <DialogPanel
            transition
            className={clsx(className, [
              'row-start-2',
              'w-full',
              'rounded-md',
              'ring-1',
              'shadow-xl',
              'ring-zinc-950/10',
              'dark:ring-white/10',
              'forced-colors:outline',
              'transition',
              'duration-100',
              'will-change-transform',
              'data-closed:opacity-0',
              'data-enter:ease-out',
              'data-closed:data-enter:scale-95',
              'data-leave:ease-in',
              'bg-background',
            ])}
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export const ModalHeader: FC<ModalHeaderProps> = ({
  className,
  border,
  ...props
}) => {
  return (
    <DialogTitle
      {...props}
      className={clsx(
        className,
        'flex items-center gap-4 py-5 px-6 ',
        border && 'border-b border-border',
      )}
    />
  )
}

export const ModalBody: FC<ModalBodyProps> = ({
  className,

  ...props
}) => {
  return <div {...props} className={clsx(className, 'px-6')} />
}

export const ModalFooter: FC<ModalFooterProps> = ({
  className,
  border,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'px-6 py-3 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto',
        border && 'border-t border-border',
      )}
    />
  )
}

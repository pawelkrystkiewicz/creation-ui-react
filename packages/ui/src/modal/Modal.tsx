import { Dialog } from '@base-ui/react/dialog'
import clsx from 'clsx'
import type { FC } from 'react'
import {
  //
  ModalHeaderProps,
  ModalProps,
  ModalBodyProps,
  ModalFooterProps,
} from './types'

export const Modal: FC<ModalProps> = ({ className, children, open, onClose }) => {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(newOpen) => {
        if (!newOpen) onClose?.()
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop
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
            'opacity-0',
            'data-open:opacity-100',
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
            'pointer-events-none',
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
            <Dialog.Popup
              className={clsx(className, [
                'pointer-events-auto',
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
                'opacity-0',
                'scale-95',
                'data-open:opacity-100',
                'data-open:scale-100',
                'bg-background',
              ])}
            >
              {children}
            </Dialog.Popup>
          </div>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export const ModalHeader: FC<ModalHeaderProps> = ({
  className,
  border,
  ...props
}) => {
  return (
    <Dialog.Title
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

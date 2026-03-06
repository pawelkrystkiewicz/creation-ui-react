import { Dialog } from '@base-ui/react/dialog'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { drawerChildClasses, drawerStyles } from './classes'
import type { DrawerProps } from './types'

export const Drawer = ({
  open,
  children,
  onOverlayClick,
  ...props
}: DrawerProps) => {
  const { position = 'right', onClose = () => {}, cx } = props

  const verticalSize = cx?.height ?? 'h-full'
  const horizontalSize = cx?.width ?? 'w-1/3'

  const finalSize = {
    right: horizontalSize,
    left: horizontalSize,
    top: verticalSize,
    bottom: verticalSize,
  }[position]

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(newOpen, details) => {
        if (!newOpen) {
          if (details.reason === 'outside-press') onOverlayClick?.()
          onClose()
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop
          className={clsx(
            'fixed',
            'inset-0',
            'z-(--ui-z-overlays)',
            'bg-black/50',
            'transition-opacity',
            'micro-interactions',
            'opacity-0',
            'data-open:opacity-100',
          )}
        />
        <Dialog.Popup
          className={twMerge(
            drawerStyles({
              className: [finalSize, cx?.container?.outer],
              position,
            }),
          )}
        >
          <div
            className={clsx(
              drawerChildClasses,
              'h-full',
              cx?.container?.inner,
            )}
          >
            {children}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

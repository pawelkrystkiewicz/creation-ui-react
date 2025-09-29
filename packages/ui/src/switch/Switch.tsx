import {
  FieldProps,
  Field as HeadlessField,
  Switch as HeadlessSwitch,
  SwitchProps,
} from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { switchClasses, switchDot } from './classes'

export function SwitchField({
  className,
  ...props
}: { className?: string } & Omit<FieldProps, 'as' | 'className'>) {
  return (
    <HeadlessField
      data-slot='field'
      {...props}
      className={twMerge(
        className,
        // Base layout
        'grid grid-cols-[1fr_auto] items-center gap-x-8 gap-y-1 sm:grid-cols-[1fr_auto]',
        // Control layout
        '*:data-[slot=control]:col-start-2 *:data-[slot=control]:self-center',
        // Label layout
        '*:data-[slot=label]:col-start-1 *:data-[slot=label]:row-start-1 *:data-[slot=label]:justify-self-start',
        // Description layout
        '*:data-[slot=description]:col-start-1 *:data-[slot=description]:row-start-2',
        // With description
        'has-data-[slot=description]:**:data-[slot=label]:font-medium',
      )}
    />
  )
}

export function Switch({
  className,
  ...props
}: {
  className?: string
} & Omit<SwitchProps, 'as' | 'className' | 'children'>) {
  return (
    <HeadlessSwitch
      data-slot='control'
      {...props}
      className={twMerge(switchClasses(), className)}
    >
      <span aria-hidden='true' className={switchDot} />
    </HeadlessSwitch>
  )
}

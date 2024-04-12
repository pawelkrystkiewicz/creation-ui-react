import { classes, sharedErrorClasses, sharedReadOnlyCVA } from '@root/classes'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const { input, checkable } = classes

const base = twMerge(input, checkable, 'size-square', 'text-size')

export const checkboxClasses = cva(base, {
  variants: {
    error: {
      true: [sharedErrorClasses, '!checked:bg-error'],
      false: null,
    },
    readOnly: sharedReadOnlyCVA,
  },
})

import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import {
  classes,
  sharedErrorClasses,
  sharedReadOnlyCVA,
  sharedSizeSquareCVA,
} from '../../classes'

const { input, checkable } = classes

const base = twMerge(input, checkable)

export const checkboxClasses = cva(base, {
  variants: {
    size: sharedSizeSquareCVA,
    error: {
      true: [sharedErrorClasses, '!checked:bg-error-500'],
      false: null,
    },
    readOnly: sharedReadOnlyCVA,
  },
})

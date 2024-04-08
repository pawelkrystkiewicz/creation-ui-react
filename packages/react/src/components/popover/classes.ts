import { cva } from 'class-variance-authority'
import {
  sharedTextSizesBase,
  sharedTextSizesDescription,
  sharedTextSizesHeading,
} from '../../classes'

export const popoverCloseClasses = cva([], {
  variants: {
    size: sharedTextSizesBase,
  },
})
export const popoverContentClasses = cva(
  ['bg-background-secondary', 'shadow-lg', 'rounded', 'py-2', 'px-3'],
  {
    variants: {
      size: sharedTextSizesBase,
    },
  }
)
export const popoverDescriptionClasses = cva(['text-sm', 'leading-5'], {
  variants: {
    size: sharedTextSizesDescription,
  },
})
export const popoverHeadingClasses = cva(['font-bold'], {
  variants: {
    size: sharedTextSizesHeading,
  },
})
export const popoverTriggerClasses = cva(['cursor-pointer'], {
  variants: {
    size: sharedTextSizesBase,
  },
})

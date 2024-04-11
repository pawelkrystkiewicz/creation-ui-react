import {
  sharedTextSizesBase,
  sharedTextSizesDescription,
  sharedTextSizesHeading,
} from '@root/classes'
import { cva } from 'class-variance-authority'

export const popoverCloseClasses = cva([], {
  variants: {
    size: sharedTextSizesBase,
  },
})
export const popoverContentClasses = cva(
  [
    //
    'bg-white',
    'shadow-lg',
    'rounded',
    'py-2',
    'px-3',
  ],
  {
    variants: {
      size: sharedTextSizesBase,
    },
  }
)
export const popoverDescriptionClasses = cva(
  [
    //
    'text-info',
    'text-sm',
    'leading-5',
  ],
  {
    variants: {
      size: sharedTextSizesDescription,
    },
  }
)
export const popoverHeadingClasses = cva(['font-bold'], {
  variants: {
    size: sharedTextSizesHeading,
  },
})
export const popoverTriggerClasses = cva(
  [
    //
    'cursor-pointer',
  ],
  {
    variants: {
      size: sharedTextSizesBase,
    },
  }
)

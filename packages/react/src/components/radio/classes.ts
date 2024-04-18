import { ThemePreloadedClasses } from '@root/theme'
import { cva } from 'class-variance-authority'

export const radio = ({ inputs, size }: ThemePreloadedClasses) =>
  cva([inputs.base, inputs.checkable, 'rounded-full'], {
    variants: {
      size: {
        sm: [size.sm.square, size.sm.fontSize],
        md: [size.md.square, size.md.fontSize],
        lg: [size.lg.square, size.lg.fontSize],
      },
    },
  })

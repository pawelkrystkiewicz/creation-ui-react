import { ThemePreloadedClasses } from '@root/theme'
import { cva } from 'class-variance-authority'
import values from 'lodash.values'

export const checkboxClasses = ({
  inputs,
  readOnly,
  error,
  size,
  animations,
  focusable,
}: ThemePreloadedClasses) =>
  cva(
    [inputs.base, animations.microInteractionsAll, inputs.checkable, focusable],
    {
      variants: {
        error: {
          true: [values(error), '!checked:bg-error'],
        },
        readOnly: { true: readOnly },
        size: {
          sm: [size.sm.square, size.sm.fontSize],
          md: [size.md.square, size.md.fontSize],
          lg: [size.lg.square, size.lg.fontSize],
        },
      },
    }
  )

import { Button, ButtonProps } from '@components/button'
import { cva } from 'class-variance-authority'
import { FC } from 'react'

interface PeriodButton extends ButtonProps {
  period: string | number
  current?: boolean
}

const classes = cva([], {
  variants: {
    size: {
      sm: ['!size-10'],
      md: ['!size-12'],
      lg: ['!size-16'],
    },
  },
})

export const PeriodButton: FC<PeriodButton> = ({
  period,
  current,
  className,
  size,
  ...props
}) => (
  <Button
    size={size}
    variant={'text'}
    className={classes({ size, className })}
    {...props}
  >
    {period}
  </Button>
)

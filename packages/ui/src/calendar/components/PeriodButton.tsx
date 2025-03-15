import { FC } from 'react'
import { Button, type ButtonProps } from '../../button'

type PeriodButton = ButtonProps & {
  period: string | number
  current?: boolean
}

export const PeriodButton: FC<PeriodButton> = ({
  period,
  current,
  className,
  ...props
}) => (
  <Button variant={'text'} className={className} {...props}>
    {period}
  </Button>
)

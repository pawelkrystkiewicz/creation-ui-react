import { Icon as MdiIcon } from '@mdi/react'
import { IconProps } from '@mdi/react/dist/IconProps'
import clsx from 'clsx'

interface CustomIconProps extends IconProps {
  onClick?: () => void
}

const interactive = 'cursor-pointer hover:text-primary-500 active:text-primary-600'

export default function Icon({ size = 0.6, className, ...rest }: CustomIconProps) {
  return <MdiIcon className={clsx('my-auto', className, rest.onClick && interactive)} size={size} {...rest} />
}

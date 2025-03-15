import { Label as HeadlessLabel } from '@headlessui/react'
import { labelStyles } from './classes'
import type { FC } from 'react'
import type { LabelProps } from './types'

export const Label: FC<LabelProps> = ({ className, required, ...props }) => {
  return (
    <HeadlessLabel
      data-slot='label'
      {...props}
      className={labelStyles({ className, required })}
    />
  )
}

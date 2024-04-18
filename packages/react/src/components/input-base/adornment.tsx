import { inputIcon } from './classes'
import type { HTMLInputType } from '@types'
import type { FC } from 'react'
import { Show } from '../show'

interface AdornmentProps {
  adornment?: React.ReactNode
  position?: 'left' | 'right'
  type?: HTMLInputType
}

export const Adornment: FC<AdornmentProps> = ({
  position,
  type,
  adornment,
}) => (
  <Show when={!!adornment}>
    <div
      className={inputIcon({
        // @ts-expect-error
        type,
        position,
      })}
    >
      {adornment}
    </div>
  </Show>
)

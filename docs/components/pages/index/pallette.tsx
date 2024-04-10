import { docsMicroInteractions } from '@components/classes'
import Icon from '@components/icon'
import { HeaderSubbed } from '@components/page-elements/header-subbed'
import { ElementStatus, ELEMENT_STATUS } from '@creation-ui/core'
import { mdiOpenInNew } from '@mdi/js'
import clsx from 'clsx'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { ColorBox } from '../../page-elements/pallette/color-box'
import { ColorShades } from '../../page-elements/pallette/colors-list'

const colors = ELEMENT_STATUS

export const Pallette = () => {
  const [state, setState] = useState<ElementStatus | null>(null)
  return (
    <div className='h-screen-nextra w-full snap-start'>
      <HeaderSubbed href='#advantages' title='The colors' subtitle='We picked only the best' ariaLabel=' The colors' />
      <div className='h-full flex flex-col justify-center gap-16 pb-52'>
        <div className={twMerge('flex', 'justify-evenly w-full', docsMicroInteractions)}>
          {colors.map(color => (
            <ColorBox
              color={color as ElementStatus}
              key={color}
              selected={state === color}
              onClick={setState.bind(null, state === color ? null : color)}
            />
          ))}
        </div>

        <div
          className={clsx(state ? 'capitalize' : 'dark:text-gray-500 text-gray-200', 'font-bold text-3xl text-center ')}
        >
          {state ? state : 'Pick a color'}
        </div>

        <div className={clsx(!state && '!opacity-20 blur-md')}>
          <ColorShades color={state ?? 'info'} />
        </div>

        <div className='text-center flex flex-col items-center'>
          You wanted different? No worries, just
          <a
            href='https://tailwindcss.com/docs/customizing-colors'
            rel='noreferrer'
            target={'_blank'}
            className='text-center flex items-center gap-1'
          >
            checkout the docs.
            <Icon path={mdiOpenInNew} />
          </a>
        </div>
      </div>
    </div>
  )
}

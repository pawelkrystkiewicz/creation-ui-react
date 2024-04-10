import { gradient } from '@components/classes'
import { Logo } from '@components/logo'
import { Button } from '@creation-ui/react'
import clsx from 'clsx'
import Link from 'next/link'
import { CopyBlock, dracula } from 'react-code-blocks'

const contentContainer = [
  'flex',
  'flex-col',
  'place-items-center',
  'h-screen-nextra',
  'lg:gap-24',
  'lg:justify-center',
  'justify-evenly',
  'group',
  'snap-start',
]

const backLight = clsx([
  'h-52',
  'w-52',
  'transform',
  '-translate-x-1/2',
  '-translate-y-1/2',
  'top-1/2',
  'left-1/2',
  'rounded-full',
  'z-[-1]',
  'absolute',
  'opacity-50',
  'blur-2xl',
  'group-hover:scale-125',
  'group-hover:opacity-75',
  'transition',
  'duration-1000',
  gradient.bg,
])

export const Hero = () => {
  const installationScript = 'npm i @creation-ui/react'

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className={clsx(contentContainer)}>
        <div className='relative '>
          <Logo size='hero' />
          <div className={backLight} />
        </div>
        <div className='flex flex-col place-items-center gap-5'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center leading-snug'>
            Make beautiful things <br className='sm:block hidden' /> with&nbsp;
            <span className={clsx(gradient.text, 'block sm:inline')}>Creation UI</span>
          </h1>
          <p className='max-w-sm text-center font-thin'>
            Streamlined components to accelerate your development process
          </p>
        </div>
        <div className='flex place-items-center gap-3 lg:flex-row flex-col w-full lg:w-fit'>
          <div className='lg:w-52 w-full'>
            <Button size='lg' className={clsx(gradient.bg, 'w-full  hover:scale-110')}>
              <Link href='/docs'>Start &rarr;</Link>
            </Button>
          </div>
          <CopyBlock
            text={installationScript}
            language={'bash'}
            theme={dracula}
            showLineNumbers={false}
            wrapLongLines={false}
            customStyle={{
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              padding: '.75rem',
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  )
}

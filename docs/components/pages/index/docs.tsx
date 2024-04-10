import { gradient } from '@components/classes'
import { HeaderSubbed } from '@components/page-elements/header-subbed'
import { Button } from '@creation-ui/react'
import clsx from 'clsx'
import Link from 'next/link'

export const Docs = () => (
  <div className='h-screen-nextra-last w-full flex flex-col items-center snap-start'>
    <HeaderSubbed href='#docs' title='The docs' ariaLabel='The docs' subtitle='Here be dragons' />

    <div className='max-w-md prose text-base leading-relaxed dark:text-white'>
      <p>
        Unleash your creativity and bring your vision to life with this powerful tool. The possibilities are endless,
        allowing you to transform ideas into reality.
      </p>
      <p>
        Whether you&apos;re a seasoned developer or a newcomer to the field, our components are designed to help you
        create innovative solutions with ease. It is time to take the first step and embark on a journey and tell your
        own story.
      </p>

      <p>Your adventure awaits.</p>
    </div>

    <Button size='lg' className={clsx(gradient.bg, 'text-2xl hover:scale-110 mt-20')} status='info'>
      <Link href='/docs'>Ready? See the docs &rarr;</Link>
    </Button>
  </div>
)

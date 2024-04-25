import { gradient } from '@components/classes'
import Icon from '@components/icon'
import {
  mdiFileDocumentMultipleOutline,
  mdiReact,
  mdiShapePlus,
  mdiSpeedometer,
  mdiTailwind,
  mdiTools,
  mdiXml,
} from '@mdi/js'
import clsx from 'clsx'
import type { ReactNode } from 'react'

type AdvantageItem = {
  title: ReactNode
  description: ReactNode
  icon: ReactNode
}

export const advantages: AdvantageItem[] = [
  {
    title: 'Simplified Development',
    description:
      'Creation UI offers an easy-to-use and intuitive set of components, streamlining the development process for developers of all skill levels.',
    icon: <Icon size={1} path={mdiXml} title='user-friendly' />,
  },
  {
    title: 'Robust Components',
    description:
      'Our library of components is designed to adapt to various use cases and requirements, providing a solid foundation for your projects.',
    icon: <Icon size={1} path={mdiShapePlus} title='layers' />,
  },
  {
    title: 'Tailwind CSS Integration',
    description: (
      <>
        Leverage the power of{' '}
        <a href='https://tailwindcss.com/' target={'_blank'} rel='noreferrer'>
          Tailwind CSS
        </a>
        , a utility-first CSS framework that enables rapid styling, responsiveness, and customization to accelerate
        development and maintain design consistency.
      </>
    ),
    icon: <Icon size={1} path={mdiTailwind} title='wind' />,
  },
  {
    title: 'Built for React',
    description:
      "Creation UI is specifically designed for seamless integration with React, allowing you to take full advantage of React's features, ecosystem, and performance benefits.",
    icon: <Icon size={1} path={mdiReact} title='react' />,
  },

  {
    title: 'Flexible Customization',
    description:
      "Easily tailor components to your unique design requirements and branding, thanks to Creation UI's flexible customization options.",
    icon: <Icon size={1} path={mdiTools} title='tools' />,
  },
  {
    title: 'Documentation',
    description:
      'Get started quickly and troubleshoot any issues with our thorough documentation, complete with examples, explanations, and best practices.',
    icon: <Icon size={1} path={mdiFileDocumentMultipleOutline} title='book' />,
  },
  {
    title: 'Optimized Performance',
    description:
      'Built with performance in mind, Creation UI components are kept simple to not bloat your application with unnecessary code, while still providing the functionality you need.',
    icon: <Icon size={1} path={mdiSpeedometer} title='speedometer' />,
  },
]

export const AdvantageList = () => (
  <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 w-full mx-auto lg:max-w-4xl xl:max-w-full lg:pt-20 '>
    {advantages.map(({ description, icon, title }) => (
      <div className='h-42 border rounded-lg px-5 py-4  border-purple-300 snap-center' key={title?.toString()}>
        <div className='flex flex-col gap-1'>
          <span className={clsx('text-white h-10 w-10 rounded-full border flex flex-col items-center', gradient.bg)}>
            {icon}
          </span>
          <span className={clsx(gradient.text, 'font-bold', 'md:text-base', 'w-fit')}>{title}</span>
          <div className='mt-1 text-xs leading-normal'>{description}</div>
        </div>
      </div>
    ))}
  </div>
)

import { Header } from '@components/typography'

interface HeaderSubbedProps {
  title: string
  subtitle: string
  href: string
  ariaLabel: string
}

export const HeaderSubbed = ({ title, subtitle, href, ariaLabel }: HeaderSubbedProps) => (
  <div className='text-center flex flex-col place-items-center gap-2 mb-24 sm:mt-10'>
    <Header aria-label={ariaLabel} as={'h1'} href={href} className='text-5xl font-bold'>
      {title}
    </Header>
    <p className='max-w-sm text-center font-thin'>{subtitle}</p>
  </div>
)

import { AdvantageList } from '@components/page-elements/advantage/advatanges-lits'
import { HeaderSubbed } from '@components/page-elements/header-subbed'

export const Advantages = () => (
  <div className='h-full lg:h-[calc(100vh-var(--nextra-navbar-height))] w-full snap-start mb-36 lg:mb-0'>
    <HeaderSubbed href='#advantages' title='The why' ariaLabel='The why' subtitle='Reasons you are here' />
    <AdvantageList />
  </div>
)

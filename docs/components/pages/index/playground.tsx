import { Header } from '@components/typography'

export const Playground = () => (
  <div className='h-screen-nextra snap-start'>
    <div className='text-center flex flex-col place-items-center gap-2'>
      <Header aria-label={'The good stuff'} as={'h1'} href='#playground' className=' text-5xl font-bold'>
        The good stuff
      </Header>
      <p className='max-w-sm text-center font-thin'>Just a quick preview</p>
    </div>
    <div></div>
  </div>
)

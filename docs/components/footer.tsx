import { BASE_URL, TITLE } from '../constants'
import { Logo } from './logo'

export default function Footer() {
  return (
    <footer className='flex w-full place-items-center justify-center gap-2 h-10'>
      <span>{new Date().getFullYear()} &copy;</span>
      <a href={BASE_URL} rel='noreferrer' target='_blank' className='flex place-items-center gap-2'>
        <Logo size='sm' /> {TITLE}
      </a>
    </footer>
  )
}


import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-4xl font-bold'>404</h2>
      <p className='text-2xl'>Page not found</p>
      <Link className='mt-5' href='/'>
        Back Home
      </Link>
    </div>
  )
}

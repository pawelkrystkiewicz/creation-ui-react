import { docsMicroInteractions } from '@components/classes'
import { ElementStatus, colors } from '@creation-ui/core'
import { twMerge } from 'tailwind-merge'

interface ColorShadesProps {
  color: ElementStatus
}

export const ColorShades = ({ color }: ColorShadesProps) => {
  const shades = colors[color]
  const keys = Object.keys(shades)

  return (
    <div className='flex items-center sm:flex-nowrap flex-wrap justify-evenly mx-5 sm:p-0'>
      {keys.map(key => (
        <ColorShade key={key} hex={shades[key]} value={key} />
      ))}
    </div>
  )
}

const ColorShade = ({ hex, value }: any) => (
  <div className={'group flex flex-col items-center gap-1 relative'}>
    <span
      className={twMerge(
        //
        'group-hover:opacity-100 opacity-0 text-center  uppercase absolute -top-12',
        docsMicroInteractions,
      )}
    >
      {value}
    </span>
    <div
      className={twMerge(
        'w-5',
        'lg:w-10 h-10 rounded-lg',
        'text-center',
        'flex',
        'flex-col',
        'group-hover:scale-110',
        'cursor-default',
        'justify-center',
        'my-auto',
        value <= 500 ? 'text-gray-700' : 'text-white',
        docsMicroInteractions,
      )}
      style={{ background: hex }}
    >
      {/* <span>{value}</span> */}
    </div>
    <span
      className={twMerge(
        //
        'group-hover:opacity-100 opacity-0 text-center  uppercase absolute -bottom-12',
        docsMicroInteractions,
        '!delay-0',
      )}
    >
      {hex}
    </span>
  </div>
)

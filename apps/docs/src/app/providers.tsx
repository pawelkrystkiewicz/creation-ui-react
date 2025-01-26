import { IconoirProvider } from 'iconoir-react'
import type { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <IconoirProvider
      iconProps={{
        color: '#AAAAAA',
        strokeWidth: 1,
        width: '1em',
        height: '1em',
      }}>
      {children}
    </IconoirProvider>
  )
}

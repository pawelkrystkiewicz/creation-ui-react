import { createContext, useContext } from 'react'
import { PlaygroundContextValue } from '../types'

export const PlaygroundContext = createContext<PlaygroundContextValue>({} as any)

export const usePlayground = () => {
  const context = useContext(PlaygroundContext)

  if (!context) {
    throw new Error(`"PlaygroundProvider" must be present in React DOM tree`)
  }

  return context
}

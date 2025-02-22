'use client'
import { cloneDeep, set } from 'lodash'
import { useState } from 'react'
import UseClient from '../UseClient'
import { PlaygroundContext } from './context/context'
import { PlaygroundCode } from './playground.code'
import { PlaygroundComponent } from './playground.component'
import { PlaygroundControls } from './playground.controls'
import { PlaygroundView } from './playground.view'
import type {
  PlaygroundProps,
  PlaygroundState
} from './types'
import { prepareInitialState } from './utils/prepare-initial-state'

export function Playground<T>(props: PlaygroundProps<T>) {
  const { controls = [], code } = props

  const [state, setState] = useState<PlaygroundState>(
    prepareInitialState(controls),
  )

  const handleChange = (name: string, value: any) => {
    setState(state => {
      const newState = set(cloneDeep(state), name, value)
      return newState
    })
  }

  return (
    <PlaygroundContext.Provider
      value={{ ...props, state, handleChange } as any}
    >
      <PlaygroundView>
        <PlaygroundComponent />
        <PlaygroundControls />
        {code && (
          <UseClient>
            <PlaygroundCode />
          </UseClient>
        )}
      </PlaygroundView>
    </PlaygroundContext.Provider>
  )
}

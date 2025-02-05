'use client'
import { cloneDeep, set } from 'lodash'
import { useState, type FC } from 'react'
import { PlaygroundContext } from './context/context'
import { PlaygroundCode } from './playground.code'
import { PlaygroundComponent } from './playground.component'
import { PlaygroundControls } from './playground.controls'
import { PlaygroundView } from './playground.view'
import type {
  PlaygroundControl,
  PlaygroundProps,
  PlaygroundState,
} from './types'

const prepareInitialState = (controls: PlaygroundControl[]) =>
  controls?.reduce(
    (
      acc: Record<string, unknown>,
      { type, name, defaultValue, values, controls: c },
    ) => {
      if (c) {
        acc[name] = prepareInitialState(c)
        return acc
      }

      const [first] = values ?? []
      const fallback =
        type === 'boolean'
          ? false
          : type === 'string'
            ? ''
            : type === 'array'
              ? first.value
              : null

      return { ...acc, [name]: defaultValue ?? fallback }
    },
    {},
  )

export function Playground<T>(props: PlaygroundProps<T>) {
  const { showCode = true, controls = [] } = props

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
        {showCode && <PlaygroundCode />}
      </PlaygroundView>
    </PlaygroundContext.Provider>
  )
}

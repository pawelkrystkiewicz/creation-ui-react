import { cloneDeep, set } from 'lodash'
import React, { useState } from 'react'
import { PlaygroundContext } from './context/context'
import { PlaygroundCode } from './playground.code'
import { PlaygroundComponent } from './playground.component'
import { PlaygroundControls } from './playground.controls'
import { PlaygroundView } from './playground.view'
import { PlaygroundControl, PlaygroundControllerProps, PlaygroundState } from './types'

const prepareInitialState = (controls: PlaygroundControl[]) =>
  controls?.reduce((acc, { type, name, defaultValue, values, controls: c }) => {
    if (c) {
      acc[name] = prepareInitialState(c)
      return acc
    }

    const [first] = values ?? []
    const fallback = type === 'boolean' ? false : type === 'string' ? '' : type === 'array' ? first.value : null

    return { ...acc, [name]: defaultValue ?? fallback }
  }, {})

export const PlaygroundController: React.FC<PlaygroundControllerProps> = props => {
  const { showCode = true, controls } = props

  const [state, setState] = useState<PlaygroundState>(prepareInitialState(controls))

  const handleChange = (name: string, value: any) => {
    setState(state => {
      const newState = set(cloneDeep(state), name, value)
      return newState
    })
  }

  return (
    <PlaygroundContext.Provider value={{ ...props, state, handleChange }}>
      <PlaygroundView>
        <PlaygroundComponent />
        <PlaygroundControls />
        <PlaygroundCode visible={showCode} />
      </PlaygroundView>
    </PlaygroundContext.Provider>
  )
}

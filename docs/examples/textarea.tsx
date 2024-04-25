import { Playground } from '@components/playground'
import { TextArea } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { inputBaseProperties } from './input-base-properties'
import { createInputControls } from './shared-playground-controls'

const controls = createInputControls('TextArea')

export const TextAreaPlayground = () => <Playground name='TextArea' component={TextArea} controls={controls} />

export const properties: DocumentedProperty[] = inputBaseProperties

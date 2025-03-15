'use client'
import { Container } from '@/components/container'
import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import { Chip } from '@creation-ui/react'
import clsx from 'clsx'
import { HelpCircle, User } from 'iconoir-react'
import {
  colorControl,
  labelControl,
  variantBaseControl,
} from './shared-playground-controls'
import { colorProp, labelProp, variantProp } from './shared-props'

export const ChipPlayground = () => (
  <Playground
    component={Chip}
    code={`
import { Chip, type ChipProps } from '@creation-ui/react'

const ChipExample = (props: ChipProps) => {
  return <Chip {{props}} />
}
      `}
    controls={[labelControl, variantBaseControl, colorControl]}
  />
)

export const ChipAdornmentsExamples = () => {
  return (
    <Container>
      <Container variant='column'>
        <Chip label={'Chip'} />
      </Container>
      <Container variant='column'>
        <Chip
          label={'Start'}
          startAdornment={<User className='text-white' />}
        />
      </Container>
      <Container variant='column'>
        <Chip
          label={'End'}
          endAdornment={<HelpCircle className='text-white' />}
        />
      </Container>
      <Container variant='column'>
        <Chip
          label={'Both'}
          startAdornment={<User className='text-white' />}
          endAdornment={<HelpCircle className='text-white' />}
        />
      </Container>
      <Container variant='column'>
        <Chip
          label={'Jackpot'}
          startAdornment={<User className='text-white' />}
          endAdornment={<HelpCircle className='text-white' />}
          onDelete={() => alert(`Do you really want to delete this entry?`)}
        />
      </Container>
    </Container>
  )
}

export const ClickableChip = () => (
  <Container>
    <Chip
      label={'#flowers'}
      onClick={() => alert('Chip clicked')}
      variant='outlined'
    />
  </Container>
)

export const CustomChip = () => (
  <Chip
    style={{
      color: 'rgba(255, 153, 0)',
      backgroundColor: 'rgba(255, 153, 0, 0.1)',
      borderColor: 'rgba(255, 153, 0, 0.5)',
    }}
    label={'Indefatigable'}
    variant='contained'
  />
)

export const properties: DocumentedProperty[] = [
  labelProp,
  colorProp,
  variantProp,
]

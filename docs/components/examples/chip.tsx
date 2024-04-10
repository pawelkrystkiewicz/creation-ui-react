import { Container } from '@components/container'
import Icon from '@components/icon'
import { Playground } from '@components/playground'
import { ELEMENT_SIZES } from '@creation-ui/core'
import { Chip } from '@creation-ui/react'
import { mdiAccountOutline, mdiHelpCircle } from '@mdi/js'
import { DocumentedProperty } from 'models/system'
import { labelControl, sizeControl, statusControl, variantBaseControl } from './shared-playground-controls'
import { labelProp, sizeProp, statusProp } from './shared-props'

export const ChipPlayground = () => (
  <Playground component={Chip} name='Chip' controls={[labelControl, variantBaseControl, sizeControl, statusControl]} />
)

export const ChipDeleteable = () => (
  <Playground component={Chip} name='Chip' controls={[labelControl, variantBaseControl, sizeControl, statusControl]} />
)

export const ChipWithStartAdornment = () => (
  <Playground component={Chip} name='Chip' controls={[labelControl, variantBaseControl, sizeControl, statusControl]} />
)

export const ChipAdornmentsExamples = () => {
  return (
    <Container>
      <Container variant='column'>
        {ELEMENT_SIZES.map(size => (
          <Chip key={'chip' + size} size={size} label={'Chip'} />
        ))}
      </Container>
      <Container variant='column'>
        {ELEMENT_SIZES.map(size => (
          <Chip key={'start' + size} size={size} label={'Start'} startAdornment={<Icon path={mdiAccountOutline} />} />
        ))}
      </Container>
      <Container variant='column'>
        {ELEMENT_SIZES.map(size => (
          <Chip key={'end' + size} size={size} label={'End'} endAdornment={<Icon path={mdiHelpCircle} />} />
        ))}
      </Container>
      <Container variant='column'>
        {ELEMENT_SIZES.map(size => (
          <Chip
            key={'both' + size}
            size={size}
            label={'Both'}
            startAdornment={<Icon path={mdiAccountOutline} />}
            endAdornment={<Icon path={mdiHelpCircle} />}
          />
        ))}
      </Container>
      <Container variant='column'>
        {ELEMENT_SIZES.map(size => (
          <Chip
            key={size}
            size={size}
            label={'Jackpot'}
            startAdornment={<Icon path={mdiAccountOutline} />}
            endAdornment={<Icon path={mdiHelpCircle} />}
            onDelete={() => alert(`Do you really want to delete the "${size}" entry?`)}
          />
        ))}
      </Container>
    </Container>
  )
}

export const CustomChip = () => (
  <Chip
    label={'Indefatigable'}
    style={{
      color: 'rgba(255, 153, 0)',
      backgroundColor: 'rgba(255, 153, 0, 0.1)',
      borderColor: 'rgba(255, 153, 0, 0.5)',
    }}
  />
)

export const properties: DocumentedProperty[] = [labelProp, statusProp, sizeProp]

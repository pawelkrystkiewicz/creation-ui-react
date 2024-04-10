import { Theme } from '@creation-ui/react'
import type { ThemeProps } from '@creation-ui/core'
import { DocumentedProperty } from '@models/system'
import { positionProp, sizeProp } from './shared-props'

export const App = () => {
  // @ts-ignore
  const myTheme: ThemeProps = {
    // ... your theme options
  }

  return (
    <Theme theme={myTheme}>
      <>{/* Rest of your code  */}</>
    </Theme>
  )
}

const ofAll = ' of all children components'
const fromTailwind = 'TailwindCSS classname'

export const properties: DocumentedProperty[] = [
  {
    name: 'colors',
    type: 'ThemeColors',
    description: 'Default theme colors',
  },
  // {
  //   name: 'dir',
  //   defaultValue: 'ltr',
  //   type: 'ltr | rtl',
  //   description: 'The direction in which content is displayed',
  //   experimental: true,
  // },
  {
    name: 'drawers',
    type: 'ThemeDrawers',
    description: 'Default drawers settings',
  },
  {
    name: 'focusRing',
    defaultValue: 'true',
    type: 'boolean',
    description: 'Show focus ring on focusable components',
    experimental: true,
  },
  {
    name: 'font',
    type: 'ThemeFonts',
    description: 'Font settings',
  },
  {
    name: 'headings',
    type: 'ThemeHeadings',
    description: 'Headings settings',
  },
  {
    name: 'helpers',
    type: 'ThemeHelpers',
    description: 'Helper functions',
  },
  {
    name: 'respectReducedMotion',
    defaultValue: 'true',
    type: 'boolean',
    description: 'Should respect reduced motion requests?',
  },
  {
    name: 'roundness',
    description: `Default roundness ${fromTailwind}${ofAll}`,
    type: 'string',
    defaultValue: 'rounded-md',
  },
  {
    ...sizeProp,
    description: `Default size of all children components${ofAll}`,
  },
  {
    name: 'theme',
    defaultValue: 'light',
    type: 'light | dark',
    description: 'Should dark UI theme be used?',
  },
  {
    name: 'zIndex',
    type: 'ThemeZIndex',
    description: 'Z-index settings',
  },
]

export const drawersProps: DocumentedProperty[] = [
  {
    name: 'size',
    type: 'number | string',
    description: 'Width or height of the drawer',
    defaultValue: '50vw',
  },
  { ...positionProp, defaultValue: 'right' },
]
export const fontProps: DocumentedProperty[] = [
  {
    name: 'leading',
    type: 'string',
    description: 'Leading classname of font from TailwindCSS',
    defaultValue: 'leading-normal',
  },
  {
    name: 'fontFamily',
    type: 'string',
    description: 'Main font family name',
    defaultValue: 'Plus Jakarta Sans, sans-serif',
  },
  {
    name: 'fontFamilyMonospace',
    type: 'string',
    description: 'Monospace font family name',
    defaultValue: 'font-mono',
  },
  {
    name: 'fontWeight',
    type: 'string',
    description: 'Font weight',
    defaultValue: 'font-bold',
  },
]

export const headingsProps: DocumentedProperty[] = [
  {
    name: 'fontFamily',
    type: 'string',
    description: 'Main font family name',
    defaultValue: 'font-sans',
  },
  {
    name: 'fontWeight',
    type: 'string',
    description: 'Font weight',
    defaultValue: 'font-bold',
  },
  {
    name: 'sizes',
    type: 'Record<Headings, HeadingConfig>',
    description: 'Settings of each heading sizes',
  },
]

export const headingConfigProps: DocumentedProperty[] = [
  {
    name: 'fontSize',
    type: 'string',
    description: `Size of the heading font ${fromTailwind}`,
  },
  {
    name: 'fontWeight',
    type: 'string',
    description: `Weight of the heading font ${fromTailwind}`,
  },
  {
    name: 'leading',
    type: 'string',
    description: `Leading ${fromTailwind}`,
  },
]

export const helpersProps: DocumentedProperty[] = [
  {
    name: 'getLimitText',
    type: 'function',
    defaultValue: 'getLimitText: more => `+${more}`',
    description: 'Get autocomplete select limit text function',
  },
]

export const textsProps: DocumentedProperty[] = [
  {
    name: 'invalidInput',
    type: 'string',
    defaultValue: 'Input invalid',
    description: 'Invalid input info text',
  },
]

export const zIndexProps: DocumentedProperty[] = [
  {
    name: 'base',
    type: 'string',
    description: 'Base z-index. Level 1',
    defaultValue: '0',
  },
  {
    name: 'dropdowns',
    type: 'string',
    description: 'Dropdowns z-index. Level 2',
    defaultValue: 200,
  },
  {
    name: 'tooltips',
    type: 'string',
    description: 'Tooltips z-index. Level 3',
    defaultValue: 400,
  },
  {
    name: 'overlays',
    type: 'string',
    description: 'Overlays z-index. Level 4',
    defaultValue: 600,
  },
  {
    name: 'modals',
    type: 'string',
    description: 'Modals z-index. Level 5',
    defaultValue: 800,
  },
  {
    name: 'notifications',
    type: 'string',
    description: 'Notifications z-index. Level 6. Heights level.',
    defaultValue: 1000,
  },
]

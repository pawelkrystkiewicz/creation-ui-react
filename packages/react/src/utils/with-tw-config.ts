import headless from '@headlessui/tailwindcss'
import merge from 'lodash.merge'
import twColors from 'tailwindcss/colors'
import { breakpoints, typography } from '@theme'

const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray']

Object.keys(twColors).forEach(key => {
  if (deprecated.includes(key)) {
    // @ts-ignore
    delete twColors[key]
  }
})

const creationUiConfig = {
  darkMode: 'class',
  content: ['node_modules/@creation-ui/react/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    colors: {
      ...twColors,
      text: {
        primary: 'hsl(var(--text-primary) / <alpha-value>)',
        secondary: 'hsl(var(--text-secondary) / <alpha-value>)'
      },
      background: {
        primary: 'hsl(var(--background-primary) / <alpha-value>)',
        secondary: 'hsl(var(--background-secondary) / <alpha-value>)',
        input: 'hsl(var(--background-input) / <alpha-value>)'
      },
      border: 'hsl(var(--border) / <alpha-value>)',
      primary: 'hsl(var(--primary) / <alpha-value>)',
      warning: 'hsl(var(--warning) / <alpha-value>)',
      error: 'hsl(var(--error) / <alpha-value>)',
      success: 'hsl(var(--success) / <alpha-value>)',
      info: 'hsl(var(--info) / <alpha-value>)'
    },
    fontFamily: typography,
    screens: breakpoints
  },
  plugins: [headless({ prefix: 'ui' })]
}

/**
 * Merge @creation-ui and Tailwind CSS configurations
 * @param {object} userConfig - Tailwind config object
 * @return {object} new config object
 */
export const withTailwindConfig = (userConfig: object = {}): object =>
  merge(creationUiConfig, { ...userConfig })
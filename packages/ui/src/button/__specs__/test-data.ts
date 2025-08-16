import type { Properties, StandardLonghandPropertiesHyphen } from 'csstype'
import { ElementState } from '../../types'
import { ButtonProps } from '../Button'

type TestScenarios<T extends string, P extends Record<string, unknown>> = {
  [key in T]: {
    props: P
    expected: {
      disabled?: boolean
      css: StandardLonghandPropertiesHyphen
    }
  }
}

export const scenarios: TestScenarios<ElementState | 'loading', ButtonProps> = {
  disabled: {
    props: { disabled: true },
    expected: {
      disabled: true,
      css: {
        opacity: '0.5',
        cursor: 'default',
      },
    },
  },
  loading: {
    props: { loading: true },
    expected: {
      disabled: true,
      css: {
        opacity: '0.5',
        cursor: 'default',
      },
    },
  },
  default: {
    props: {},
    expected: {
      css: {
        color: 'oklch(0.6048 0.2165 257.21)',
        'background-color': 'oklab(0.6048 -0.0479284 -0.211128 / 0.1)',
        transform: 'none',
        opacity: '1',
      },
    },
  },
  active: {
    props: {},
    expected: {
      css: {
        color: 'oklch(0.6048 0.2165 257.21)',
        'background-color': 'oklab(0.6048 -0.0479284 -0.211128 / 0.1)',
        transform: 'none',
        opacity: '1',
      },
    },
  },
  hover: {
    props: {},
    expected: {
      css: {
        color: 'oklch(0.6048 0.2165 257.21)',
        'background-color': 'oklab(0.6048 -0.0479284 -0.211128 / 0.1)',
        transform: 'none',
        opacity: '1',
      },
    },
  },
  focus: {
    props: {},
    expected: {
      css: {
        color: 'oklch(0.6048 0.2165 257.21)',
        'background-color': 'oklab(0.6048 -0.0479284 -0.211128 / 0.1)',
        transform: 'none',
        opacity: '1',
      },
    },
  },
}

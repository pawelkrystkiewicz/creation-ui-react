import { describe, it, expect } from 'vitest'
import {
  assignPropsValues,
  getPropsObjectAsString,
  _extractPropsKeys,
  _formatPropValue,
  _getControlKeys,
} from '../prepare-props'
import { PlaygroundControl, PlaygroundValueType } from '../../types'
import { descriptionControl } from '@/examples/shared-playground-controls'
import {
  loadingControl,
  readOnlyControl,
} from '@/examples/shared-playground-controls'
import { disabledControl } from '@/examples/shared-playground-controls'
import { labelControl } from '@/examples/shared-playground-controls'

describe('assignPropsValues', () => {
  it('should be a function', () => {
    expect(assignPropsValues).toBeInstanceOf(Function)
  })
  ;[
    {
      description:
        'should return the original code if there are no props to replace',
      input: {
        codeTemplates: '()=>{return <div></div>}',
        values: {},
        controls: [],
      },
      expected: '()=>{return <div></div>}',
    },
    {
      description: 'should return the original code with replaced props',
      input: {
        codeTemplates: '()=>{return <div a={{a}} b={{b}}></div>}',
        values: {
          a: 1,
          b: 2,
        },
        controls: [
          {
            name: 'a',
            type: 'number',
          },
          {
            name: 'b',
            type: 'number',
          },
        ],
      },
      expected: '()=>{return <div a={1} b={2}></div>}',
    },
    {
      description:
        'bug: checkbox example should return the original code with replaced props',
      input: {
        codeTemplates: `
      export const CheckboxExample = ({
  label,
  description,
  disabled,
  loading,
  readOnly,
}: CheckboxProps & { label: string; description?: string }) => {
  return (
    <>
      <Field type='row' disabled={{disabled}}>
        <Checkbox name='checkbox' disabled={{disabled}} loading={{loading}} readOnly={{readOnly}} />
        <Label>{{label}}</Label>
        {description && <Description>{{description}}</Description>}
      </Field>
    </>
  )
}`,
        values: {
          label: 'Label',
          description: 'Description',
          disabled: false,
          loading: false,
          readOnly: false,
        },
        controls: [
          loadingControl,
          disabledControl,
          readOnlyControl,
          descriptionControl,
          labelControl,
        ],
      },
      expected: `
      export const CheckboxExample = ({
  label,
  description,
  disabled,
  loading,
  readOnly,
}: CheckboxProps & { label: string; description?: string }) => {
  return (
    <>
      <Field type='row' >
        <Checkbox name='checkbox'    />
        <Label>Label</Label>
        {description && <Description>Description</Description>}
      </Field>
    </>
  )
}`,
    },
  ].forEach(({ description, input, expected }) =>
    it(description, () => {
      const result = assignPropsValues(
        input.codeTemplates,
        input.values,
        input.controls as PlaygroundControl[],
      )
      expect(result).toStrictEqual(expected)
    }),
  )
})

describe('getPropsObjectAsString', () => {
  it('should be a function', () => {
    expect(getPropsObjectAsString).toBeInstanceOf(Function)
  })
  ;[
    {
      description: 'should return empty array if provided inputs are empty',
      input: { keys: [], values: {}, controlsMap: {} },
      expected: [],
    },
  ].forEach(({ description, input, expected }) =>
    it(description, () => {
      const result = getPropsObjectAsString(
        input.keys,
        input.values,
        input.controlsMap,
      )
      expect(result).toStrictEqual(expected)
    }),
  )
})

describe('_extractPropsKeys', () => {
  it('should be a function', () => {
    expect(_extractPropsKeys).toBeInstanceOf(Function)
  })
  ;[
    {
      description: 'should return empty array if there are no props to replace',
      input: '',
      expected: [],
    },
  ].forEach(({ description, input, expected }) =>
    it(description, () => {
      const result = _extractPropsKeys(input)
      expect(result).toStrictEqual(expected)
    }),
  )
})

describe('_formatPropValue', () => {
  it('should be a function', () => {
    expect(_formatPropValue).toBeInstanceOf(Function)
  })
  ;(
    [
      {
        description: 'should format boolean true',
        input: { value: true, type: 'boolean' },
        expected: 'true',
      },
      {
        description: 'should format boolean false',
        input: { value: false, type: 'boolean' },
        expected: 'false',
      },
      {
        description: 'should format number',
        input: { value: '3.14', type: 'number' },
        expected: 3.14,
      },
      {
        description: 'should format undefined type number',
        input: { value: undefined, type: 'number' },
        expected: 'undefined',
      },
      {
        description: 'should format text',
        input: { value: 'text', type: 'string' },
        expected: 'text',
      },
      {
        description: 'should format object to JSON string',
        input: { value: { a: 1, b: 2 }, type: 'object' },
        expected: '{"a":1,"b":2}',
      },
      {
        description: 'should format array to JSON string',
        input: { value: [1, 2, 3], type: 'array' },
        expected: '[1,2,3]',
      },
      {
        description: 'should format undefined',
        input: { value: undefined, type: 'string' },
        expected: '',
      },
    ] satisfies Array<{
      description: string
      input: { value: any; type: PlaygroundValueType }
      expected: string | number | undefined
    }>
  ).forEach(({ description, input, expected }) =>
    it(description, () => {
      const result = _formatPropValue(input.value, input.type as any)
      expect(result).toStrictEqual(expected)
    }),
  )
})

describe('_getControlKeys', () => {
  it('should be a function', () => {
    expect(_getControlKeys).toBeInstanceOf(Function)
  })
  ;[
    {
      description:
        'should return the original code if there are no props to replace',
      input: [],
      expected: {
        keys: [],
        controlsMap: {},
      },
    },
    {
      description: 'bug: should handle checbkox playground example',
      input: [
        loadingControl,
        disabledControl,
        readOnlyControl,
        descriptionControl,
        labelControl,
      ],
      expected: {
        keys: ['loading', 'disabled', 'readOnly', 'description', 'label'],
        controlsMap: {
          loading: loadingControl,
          disabled: disabledControl,
          readOnly: readOnlyControl,
          description: { ...descriptionControl, noBracesInReplacement: true },
          label: { ...labelControl, noBracesInReplacement: true },
        },
      },
    },
  ].forEach(({ description, input, expected }) =>
    it(description, () => {
      const result = _getControlKeys(input)
      expect(result).toStrictEqual(expected)
    }),
  )
})

import { BUTTON_CODE_TEMPLATE, BUTTON_CONTROLS } from '@/examples/button'
import { CHECKBOX_CODE_TEMPLATE, CHECKBOX_CONTROLS } from '@/examples/checkbox'
import { describe, expect, it } from 'vitest'
import { PlaygroundControl } from '../../types'
import { assignPropsValues } from '../prepare-props'

describe('assignPropsValues', () => {
  it('should be a function', () => {
    expect(assignPropsValues).toBeInstanceOf(Function)
  })
  ;[
    {
      description:
        'should return the original code if there are no props to replace',
      input: {
        codeTemplate: '()=>{return <div>Example</div>}',
        values: {},
      },
      expected: '()=>{return <div>Example</div>}',
    },
    {
      description: 'should return the original code with replaced props',
      input: {
        codeTemplate: '()=>{return <div a={{a}} b={{b}}>Example</div>}',
        values: {
          a: 1,
          b: 2,
        },
      },
      expected: '()=>{return <div a={1} b={2}>Example</div>}',
    },
    {
      description:
        'bug: checkbox example should return the original code with replaced props',
      input: {
        codeTemplate: CHECKBOX_CODE_TEMPLATE,
        values: {
          label: 'Label',
          description: 'Description',
          disabled: false,
          loading: false,
          readOnly: false,
        },
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
    {
      description:
        'bug: button example should return the original code with replaced props',
      input: {
        codeTemplate: BUTTON_CODE_TEMPLATE,
        values: {
          children: 'Button',
          variant: 'contained',
          color: 'primary',
          loading: false,
          disabled: false,
          uppercase: true,
          fullWidth: true,
        },
      },
      expected: `
import { Button, type ButtonProps } from '@creation-ui/react'

const ButtonExample = ({children, ...rest}: ButtonProps) => {
  return <Button variant='contained' color='primary' uppercase fullWidth>Button</Button>
}`,
    },
  ].forEach(({ description, input, expected }) =>
    it(description, () => {
      const result = assignPropsValues(input.codeTemplate, input.values)
      expect(result).toStrictEqual(expected)
    }),
  )
})

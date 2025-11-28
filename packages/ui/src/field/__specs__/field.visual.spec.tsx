import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Field } from '..'
import { Label } from '../../label'
import { Description } from '../../description'
import { Error } from '../../error'
import { Input } from '../../input'

describe('Field Visual Tests', () => {
  it('default field renders correctly', async () => {
    const { container } = render(
      <Field>
        <Label>Username</Label>
        <Input placeholder="Enter username" />
      </Field>
    )
    expect(container).toBeVisible()
    await expect(container.firstChild).toMatchScreenshot()
  })

  describe('Layout', () => {
    it('renders field with column layout (default)', async () => {
      const { container } = render(
        <Field layout="column">
          <Label>Email</Label>
          <Input type="email" placeholder="Enter email" />
        </Field>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders field with row layout', async () => {
      const { container } = render(
        <Field layout="row">
          <Label>Email</Label>
          <Input type="email" placeholder="Enter email" />
        </Field>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('With Description', () => {
    it('renders field with label and description', async () => {
      const { container } = render(
        <Field>
          <Label>Password</Label>
          <Description>Must be at least 8 characters</Description>
          <Input type="password" placeholder="Enter password" />
        </Field>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('With Error', () => {
    it('renders field with error message', async () => {
      const { container } = render(
        <Field>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter email" data-invalid />
          <Error>Please enter a valid email address</Error>
        </Field>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders field with description and error', async () => {
      const { container } = render(
        <Field>
          <Label>Password</Label>
          <Description>Must be at least 8 characters</Description>
          <Input type="password" placeholder="Enter password" data-invalid />
          <Error>Password is too short</Error>
        </Field>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Required field', () => {
    it('renders required field', async () => {
      const { container } = render(
        <Field>
          <Label required>Email</Label>
          <Input type="email" placeholder="Enter email" required />
        </Field>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Disabled field', () => {
    it('renders disabled field', async () => {
      const { container } = render(
        <Field disabled>
          <Label>Username</Label>
          <Description>This field is disabled</Description>
          <Input placeholder="Enter username" disabled />
        </Field>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Complex fields', () => {
    it('renders complete form field', async () => {
      const { container } = render(
        <Field>
          <Label required>Full Name</Label>
          <Description>Enter your first and last name</Description>
          <Input placeholder="John Doe" />
        </Field>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders multiple fields', async () => {
      const { container } = render(
        <div className="space-y-4">
          <Field>
            <Label required>First Name</Label>
            <Input placeholder="John" />
          </Field>
          <Field>
            <Label required>Last Name</Label>
            <Input placeholder="Doe" />
          </Field>
          <Field>
            <Label>Email</Label>
            <Description>We will never share your email</Description>
            <Input type="email" placeholder="john@example.com" />
          </Field>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })
})

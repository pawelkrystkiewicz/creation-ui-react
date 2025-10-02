import {
  FieldProps,
  Field as HeadlessField,
  Switch as HeadlessSwitch,
  SwitchProps,
} from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { switchClasses, switchDot } from './classes'

/**
 * Render a field wrapper for a switch control that arranges control, label, and description using slot-based layout.
 *
 * The component forwards all remaining FieldProps to the underlying Headless UI Field, applies a grid-based layout,
 * and merges the provided `className` with the component's slot-aware layout classes.
 *
 * @param className - Optional additional class names applied to the root field container.
 * @param props - Remaining FieldProps forwarded to the underlying HeadlessField.
 *
 * @returns A HeadlessField element configured for a switch control with slot-aware styling.
 *
 * @example
 * <SwitchField>
 *   <SwitchField.Label slot="label">Enable feature</SwitchField.Label>
 *   <SwitchField.Control slot="control">
 *     <Switch ... />
 *   </SwitchField.Control>
 *   <SwitchField.Description slot="description">Toggles the feature on or off.</SwitchField.Description>
 * </SwitchField>
 *
 * @remarks
 * - Accessibility: Provide a label (slot="label") and, when needed, a description (slot="description") so assistive technologies can associate the switch control correctly.
 */
export function SwitchField({
  className,
  ...props
}: { className?: string } & Omit<FieldProps, 'as' | 'className'>) {
  return (
    <HeadlessField
      data-slot='field'
      {...props}
      className={twMerge(
        className,
        // Base layout
        'grid grid-cols-[1fr_auto] items-center gap-x-8 gap-y-1 sm:grid-cols-[1fr_auto]',
        // Control layout
        '*:data-[slot=control]:col-start-2 *:data-[slot=control]:self-center',
        // Label layout
        '*:data-[slot=label]:col-start-1 *:data-[slot=label]:row-start-1 *:data-[slot=label]:justify-self-start',
        // Description layout
        '*:data-[slot=description]:col-start-1 *:data-[slot=description]:row-start-2',
        // With description
        'has-data-[slot=description]:**:data-[slot=label]:font-medium',
      )}
    />
  )
}

/**
 * Renders a styled toggle switch control with a visible knob.
 *
 * The component forwards all SwitchProps to the underlying Headless UI Switch, merges provided
 * class names with the component's default styles, and renders a non-interactive span as the
 * visual knob.
 *
 * @param className - Optional additional class names applied to the switch container.
 * @param props - Remaining SwitchProps forwarded to the underlying Headless UI Switch.
 * @returns The rendered Headless UI Switch element containing a styled, aria-hidden knob.
 *
 * @example
 * <Switch checked={enabled} onChange={setEnabled} />
 *
 * @accessibility
 * The component forwards ARIA attributes and state from Headless UI. Provide `checked` and
 * `onChange` to expose the switch state to assistive technologies; the inner knob is marked
 * `aria-hidden="true"` because it is purely decorative.
 */
export function Switch({
  className,
  ...props
}: {
  className?: string
} & Omit<SwitchProps, 'as' | 'className' | 'children'>) {
  return (
    <HeadlessSwitch
      data-slot='control'
      {...props}
      className={twMerge(switchClasses(), className)}
    >
      <span aria-hidden='true' className={switchDot} />
    </HeadlessSwitch>
  )
}

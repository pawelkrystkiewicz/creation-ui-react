import { Switch as BaseSwitch } from '@base-ui/react/switch'
import { twMerge } from 'tailwind-merge'
import { switchClasses, switchDot } from './classes'

/**
 * Render a field wrapper for a switch control that arranges control, label, and description using slot-based layout.
 *
 * @param className - Optional additional class names applied to the root field container.
 * @param disabled - Propagates disabled state to children via data-disabled attribute.
 * @param props - Remaining div props forwarded to the underlying element.
 *
 * @returns A div element configured for a switch control with slot-aware styling.
 *
 * @example
 * <SwitchField>
 *   <Label>Enable feature</Label>
 *   <Switch checked={enabled} onChange={setEnabled} />
 *   <Description>Toggles the feature on or off.</Description>
 * </SwitchField>
 *
 * @remarks
 * - Accessibility: Provide a label and, when needed, a description so assistive technologies can associate the switch control correctly.
 */
export function SwitchField({
  className,
  disabled,
  ...props
}: {
  className?: string
  disabled?: boolean
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'className'>) {
  return (
    <div
      data-slot='field'
      {...props}
      data-disabled={disabled || undefined}
      className={twMerge(
        'group',
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
 * @param className - Optional additional class names applied to the switch container.
 * @param onChange - Callback fired when the switch state changes with the new checked value.
 * @param props - Remaining props forwarded to the underlying Base UI Switch.
 * @returns A Base UI Switch element containing a styled, aria-hidden knob.
 *
 * @example
 * <Switch checked={enabled} onChange={setEnabled} />
 *
 * @accessibility
 * Provide `checked` and `onChange` to expose the switch state to assistive technologies;
 * the inner knob is marked `aria-hidden="true"` because it is purely decorative.
 */
export function Switch({
  className,
  onChange,
  ...props
}: {
  checked?: boolean
  className?: string
  defaultChecked?: boolean
  disabled?: boolean
  id?: string
  name?: string
  onChange?: (checked: boolean) => void
  readOnly?: boolean
  required?: boolean
}) {
  return (
    <BaseSwitch.Root
      data-slot='control'
      {...props}
      onCheckedChange={
        onChange ? (checked) => onChange(checked) : undefined
      }
      className={twMerge(switchClasses(), className)}
    >
      <span aria-hidden='true' className={switchDot} />
    </BaseSwitch.Root>
  )
}

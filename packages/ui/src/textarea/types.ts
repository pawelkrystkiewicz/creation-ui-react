export interface TextareaProps
  extends Omit<React.ComponentPropsWithoutRef<'textarea'>, 'className'> {
  className?: string
  invalid?: boolean
  resizable?: boolean
}

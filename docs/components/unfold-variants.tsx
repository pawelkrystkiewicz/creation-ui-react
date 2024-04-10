import { Container, ContainerVariants } from './container'

interface UnfoldVariantsProps {
  variants?: string[]
  component: any
  prop: string
  nameProp?: string
  componentProps?: any
  containerVariant?: ContainerVariants
}

export const UnfoldVariants = ({
  variants,
  component: Component,
  prop,
  componentProps,
  nameProp,
  containerVariant = 'row',
}: UnfoldVariantsProps) => (
  <Container variant={containerVariant}>
    {variants?.map((variant: string) => (
      <Component
        {...componentProps}
        key={variant}
        {...{
          [prop]: variant,
          ...(nameProp && {
            [nameProp]: getName(variant, nameProp, componentProps),
          }),
        }}
      />
    ))}
  </Container>
)

const getName = (variant: string, nameProp: string, componentProps?: Record<string, any>) => {
  const nameInProps = componentProps?.[nameProp]
  if (nameInProps) {
    return `${nameInProps} ${variant.toLocaleUpperCase()}`
  } else variant
}

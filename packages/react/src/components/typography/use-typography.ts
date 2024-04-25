import {  ClassName,  ElementTypography  } from '@types'
import { ThemeTypography, TypographyConfig } from '@theme'
import { cva } from 'class-variance-authority'
import merge from 'lodash.merge'
import values from 'lodash.values'
import { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'
import { getElementType } from './get-element-type'

interface GetDetailsArgs {
  typography?: ThemeTypography
  as?: ElementType
  className: ClassName
  config?: Partial<TypographyConfig>
  variant: ElementTypography
}

export const useTypography = ({
  typography,
  variant,
  className,
  config,
  as,
}: GetDetailsArgs) => {
  const { fontSize, ...textClasses } = merge(
    typography?.[variant],
    config?.[variant]
  )

  const classesValues = values(textClasses)

  const classes = cva(twMerge(classesValues, className), {
    variants: {
      size: fontSize,
    },
  })

  const Component = as ?? getElementType(variant)

  return {
    classes,
    Component,
  }
}

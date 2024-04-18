import type { ElementTheme } from '@types'
import { FC, useEffect, useMemo } from 'react'
import { animated, useSpring } from 'react-spring'
import { useLocalStorage } from '../../hooks'
import { darkModeToggleDefaultProperties } from './constants'
import type { DarkModeToggleProps } from './dark-mode-toggle.type'
import { updateDocumentClasses } from './utils'

export const DarkModeToggle: FC<DarkModeToggleProps> = ({
  onModeChange: onChange,
  children,
  theme,
  size = 24,
  animationProperties = darkModeToggleDefaultProperties,
  moonColor = 'white',
  sunColor = 'black',
  defaultTheme = 'light',
  localStorageKey = 'theme',
  style,
  ...rest
}) => {
  const [lsTheme, setLSTheme, _clearLS] = useLocalStorage<ElementTheme>(
    localStorageKey,
    defaultTheme,
    { raw: true }
  )
  const properties = useMemo(() => {
    if (animationProperties !== darkModeToggleDefaultProperties) {
      return Object.assign(darkModeToggleDefaultProperties, animationProperties)
    }
    return animationProperties
  }, [animationProperties])

  const isDarkTheme = lsTheme === 'dark'

  const { circle, svg, lines, mask } = properties[lsTheme ?? 'light']

  const { springConfig } = animationProperties

  const svgContainerProps = useSpring({ ...svg, config: springConfig })
  const centerCircleProps = useSpring({ ...circle, config: springConfig })
  const maskedCircleProps = useSpring({ ...mask, config: springConfig })
  const linesProps = useSpring({ ...lines, config: springConfig })

  const handleThemeChange = (theme: ElementTheme) => {
    updateDocumentClasses(theme)
    setLSTheme(theme)
    onChange?.(theme)
  }

  const toggle = () => handleThemeChange(isDarkTheme ? 'light' : 'dark')

  useEffect(() => {
    if (lsTheme === theme) {
      return
    }

    handleThemeChange(lsTheme ?? 'light')
  }, [])

  const uniqueMaskId = `circle-mask-${lsTheme}`
  const color = isDarkTheme ? moonColor : sunColor
  return (
    <animated.svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      color={color}
      fill='none'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      stroke='currentColor'
      onClick={toggle}
      className={'hover:opacity-75 cursor-pointer'}
      style={{
        cursor: 'pointer',
        // mixBlendMode: 'difference',
        ...svgContainerProps,
        ...style,
      }}
      {...rest}
    >
      <mask id={uniqueMaskId}>
        <rect x='0' y='0' width='100%' height='100%' fill='white' />
        <animated.circle
          // @ts-ignore
          style={maskedCircleProps}
          r='9'
          fill='black'
        />
      </mask>

      <animated.circle
        cx='12'
        cy='12'
        fill={color}
        // @ts-ignore
        style={centerCircleProps}
        mask={`url(#${uniqueMaskId})`}
      />
      <animated.g stroke='currentColor' style={linesProps}>
        <line x1='12' y1='1' x2='12' y2='3' />
        <line x1='12' y1='21' x2='12' y2='23' />
        <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
        <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
        <line x1='1' y1='12' x2='3' y2='12' />
        <line x1='21' y1='12' x2='23' y2='12' />
        <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
        <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
      </animated.g>
    </animated.svg>
  )
}

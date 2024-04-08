import twColors from 'tailwindcss/colors'

const { lime, red, amber, white, black, gray } = twColors

export const colors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  white,
  black,
  primary: {
    50: '#B8DBFF',
    100: '#A3D0FF',
    200: '#7ABBFF',
    300: '#52A7FF',
    400: '#2992FF',
    500: '#007DFF',
    600: '#0061C7',
    700: '#00468F',
    800: '#002A57',
    900: '#000F1F',
    950: '#00050A',
  },
  success: lime,
  error: red,
  warning: amber,
  info: gray,
}

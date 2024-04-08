const { withTailwindConfig } = require('@creation-ui/core')

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    //
    './packages/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '!node_modules',
    'node_modules/@creation-ui/core/**/*.{js,ts,jsx,tsx,mdx}',
    './**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Pro', 'sans-serif'],
        serif: ['Plus Jakarta Pro', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        text: {
          primary: 'hsl(var(--text-primary) / <alpha-value>)',
          secondary: 'hsl(var(--text-secondary) / <alpha-value>)',
        },
        background: {
          primary: 'hsl(var(--background-primary) / <alpha-value>)',
          secondary: 'hsl(var(--background-secondary) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        warning: 'hsl(var(--warning) / <alpha-value>)',
        error: 'hsl(var(--error) / <alpha-value>)',
        success: 'hsl(var(--success) / <alpha-value>)',
        info: 'hsl(var(--info) / <alpha-value>)',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      transitionDelay: {
        0: '0ms',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

module.exports = config

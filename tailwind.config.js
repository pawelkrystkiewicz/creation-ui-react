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
      colors: {
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        background: {
          primary: 'var(--background-primary)',
          secondary: 'var(--background-secondary)',
        },
        border: 'var(--border)',
        primary: 'var(--primary)',
        warning: 'var(--warning)',
        error: 'var(--error)',
        success: 'var(--success)',
        info: 'var(--info)',
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

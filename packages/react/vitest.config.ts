/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setup-vitest.ts',
    include: [
      './src/**/*.{test,tests,spec,specs}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
  },
})

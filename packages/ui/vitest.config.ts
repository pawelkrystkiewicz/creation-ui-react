import react from '@vitejs/plugin-react'
import { defineConfig, UserConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './test.setup.ts',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    includeTaskLocation: true,
  },
} as UserConfig)

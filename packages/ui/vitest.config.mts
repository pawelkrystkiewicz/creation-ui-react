import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  // @ts-expect-error
  plugins: [react()],
  test: {
    // coverage: {
    //   provider: 'v8',
    //   reporter: ['text', 'json', 'html'],
    // },
    globals: true,
    environment: 'jsdom',
    exclude: ['dist/**', '**/node_modules/**', '**/*.ct.spec.tsx'],
    includeTaskLocation: true,
  },
})

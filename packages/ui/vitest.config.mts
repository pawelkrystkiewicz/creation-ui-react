import react from '@vitejs/plugin-react'
import { defineConfig, UserConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
} as UserConfig)

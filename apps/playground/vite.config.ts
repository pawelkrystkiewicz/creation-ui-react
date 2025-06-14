/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    // @ts-ignore
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3001,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@creation-ui/react': path.resolve(__dirname, '../../packages/ui/dist'),
    },
  },
  base: '/',
  // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test-setup.ts',
    coverage: {
      provider: 'v8', // Use v8 for code coverage
      reporter: ['text', 'json', 'html'], // Report coverage in these formats
    },
  },
})

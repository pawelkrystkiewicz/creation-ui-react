import react from '@vitejs/plugin-react'
import { defineConfig, UserConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'json-summary'],
    },
    setupFiles: ['./test.setup.ts'],
    globals: true,
    environment: 'jsdom',
    exclude: ['dist/**', '**/node_modules/**'],
    includeTaskLocation: true,
    clearMocks: true,
    browser: {
      enabled: true,
      headless: process.env.CI ? true : false,
      provider: 'playwright',
      instances: [
        {
          browser: 'chromium',
          headless: true,
          viewport: { width: 1280, height: 720 },
        },
      ],
      expect: {
        toMatchScreenshot: {
          comparatorName: 'pixelmatch',
          comparatorOptions: {
            threshold: 0.01,
            allowedMismatchedPixelRatio: 0.001,
          },
        },
      },
    },
    thresholds: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10,
    },
  },
} as UserConfig)

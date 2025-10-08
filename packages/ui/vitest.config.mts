import react from '@vitejs/plugin-react'
import { defineConfig, UserConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'json-summary'],
      reportOnFailure: true,
      exclude: [
        'dist/**',
        '**/node_modules/**',
        '**/*.stories.tsx',
        '**/types.ts',
        '**/index.ts',
        '**/*.d.ts',
      ],
      thresholds: {
        statements: 80,
        branches: 70,
        functions: 80,
        lines: 80,
      },
    },
    css: true,
    setupFiles: ['./test.setup.ts'],
    globals: true,
    environment: 'jsdom',
    exclude: ['dist/**', '**/node_modules/**'],
    includeTaskLocation: true,
    clearMocks: true,
    browser: {
      enabled: true,
      headless: process.env.CI ? true : false,
      provider: playwright(),
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
  },
} as UserConfig)

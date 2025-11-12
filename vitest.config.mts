import { defineConfig, UserConfig } from 'vite'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'json-summary'],
      reportOnFailure: true,
      thresholds: { statements: 75, branches: 75, functions: 75, lines: 75 },
    },
    globals: true,
    environment: 'jsdom',
    include: ['scripts/**/*.spec.ts'],
    includeTaskLocation: true,
    clearMocks: true,
  },
} as UserConfig)

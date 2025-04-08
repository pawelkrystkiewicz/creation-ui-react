import { defineConfig, devices } from '@playwright/experimental-ct-react'

export default defineConfig({
  testMatch: '**/*.ct.spec.tsx',
  outputDir: './playwright/output',
  timeout: 60 * 1000,
  use: {
    ctViteConfig: {
      configFile: './vitest.config.mts',
    },
  },
  projects: [
    {
      name: 'visual-regression',
    },
    {
      name: 'chromium',
      use: devices['Desktop Chrome'],
      dependencies: ['visual-regression'],
    },
    {
      name: 'firefox',
      use: devices['Desktop Firefox'],
      dependencies: ['visual-regression'],
    },
    {
      name: 'webkit',
      use: devices['Desktop Safari'],
      dependencies: ['visual-regression'],
    },
  ],
})

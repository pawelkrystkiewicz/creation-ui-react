import { defineConfig, devices } from '@playwright/experimental-ct-react'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  testMatch: '**/*.ct.spec.tsx',
  outputDir: './playwright/output',
  timeout: 10 * 1000,
  use: {
    ctViteConfig: {
      plugins: [react(), tailwindcss()],
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

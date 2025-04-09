import { defineConfig, devices } from '@playwright/experimental-ct-react'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const __dirname = path.resolve()

export default defineConfig({
  testMatch: '**/*.ct.spec.tsx',
  testDir: path.join(__dirname, 'src'),
  outputDir: './playwright/output',
  timeout: 30 * 1000,
  snapshotPathTemplate:
    '{testDir}/__screenshots__{/projectName}/{testFilePath}/{arg}{ext}',
  reporter: process.env.CI ? 'github' : 'html',
  workers: process.env.CI ? 1 : undefined,
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

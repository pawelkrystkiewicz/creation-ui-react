import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    // coverage: {
    //   provider: 'v8',
    //   reporter: ['text', 'json', 'html'],
    // },
    exclude: ['dist/**', '**/node_modules/**', './src/**/*.node.spec.ts'],
    includeTaskLocation: true,
    workspace: [
      {
        extends: true,
        test: {
          name: 'unit',
          environment: 'node',
          include: ['./src/**/*.node.spec.ts'],
        },
      },
      {
        extends: true,
        test: {
          setupFiles: './test.setup.ts',
          name: 'react',
          include: ['./src/**/*.spec.tsx'],
          exclude: ['./src/**/*.node.spec.ts'],
          testTimeout: 10000,
          browser: {
            enabled: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
})

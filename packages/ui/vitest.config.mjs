import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/*.spec.*', '**/*.specs.*'],
    ignore: ['dist', 'node_modules'],
    pool: 'forks',
    poolOptions: {
      forks: {
        execArgv: [
          '--cpu-prof',
          '--cpu-prof-dir=test-runner-profile',
          '--heap-prof',
          '--heap-prof-dir=test-runner-profile',
        ],
        // To generate a single profile
        singleFork: true,
      },
    },
  },
})

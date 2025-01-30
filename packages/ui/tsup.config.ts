import { defineConfig } from 'tsup'
import copy from 'esbuild-plugin-copy'

export default defineConfig(options => ({
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  treeshake: true,
  clean: true,
  external: ['react'],
  esbuildPlugins: [
    copy({
      resolveFrom: 'cwd',
      assets: {
        from: ['src/index.css', 'src/theme.css'], // Source CSS file
        to: ['dist/index.css', 'dist/theme.css'], // Destination directory
      },
    }),
  ],
  ...options,
}))

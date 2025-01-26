import { defineConfig } from 'tsup'
import copy from 'esbuild-plugin-copy'

export default defineConfig(options => ({
  entryPoints: [
    'src/button.tsx',
    'src/alert.tsx',
    'src/avatar.tsx',
    'src/badge.tsx',
    'src/button.tsx',
    'src/checkbox.tsx',
    'src/description-list.tsx',
    'src/dialog.tsx',
    'src/divider.tsx',
    'src/dropdown.tsx',
    'src/fieldset.tsx',
    'src/heading.tsx',
    'src/input.tsx',
    'src/link.tsx',
    'src/listbox.tsx',
    'src/navbar.tsx',
    'src/pagination.tsx',
    'src/radio.tsx',
    'src/select.tsx',
    'src/sidebar-layout.tsx',
    'src/sidebar.tsx',
    'src/stacked-layout.tsx',
    'src/switch.tsx',
    'src/table.tsx',
    'src/text.tsx',
    'src/textarea.tsx',
    'src/types/index.ts',
  ],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
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

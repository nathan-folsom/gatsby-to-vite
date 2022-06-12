import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import linaria from '@linaria/rollup'
import css from 'rollup-plugin-css-only'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    react(),
    linaria({
      sourceMap: process.env.NODE_ENV !== 'production',
      include: ["../**/*.tsx"],
      exclude: ["**/node_modules/**"]
    }),
    css({ output: 'styles.css' })
  ]
})

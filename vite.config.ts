import { resolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  root: resolve('.', 'src', 'frontend'),
  build: {
    emptyOutDir: true,
    outDir: resolve('.', 'dist', 'frontend')
  },
  plugins: [
    react()
  ]
})
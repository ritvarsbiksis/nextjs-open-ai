import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test-setup.ts',
    cache: { dir: './.cache' },
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
  },
})

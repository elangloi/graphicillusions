import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig(({ isPreview }) => ({
  base: process.env.BASE_PATH ?? '/',
  // `vite preview` serves the prerendered dist/ like GitHub Pages does: /work → work/index.html.
  appType: isPreview ? 'mpa' : 'spa',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: { port: 5180 },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
}))

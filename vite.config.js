import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/little-lemon-reserve-a-table/',
  plugins: [react()],
  test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
    },
})

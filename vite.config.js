import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (www.pothusvending.com) → use root base in prod
export default defineConfig(({ mode }) => ({
  base: '/',
  plugins: [react()],
}))

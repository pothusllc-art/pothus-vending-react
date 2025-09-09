import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use '/' in dev, '/<repo>/' in production for GitHub Pages
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/pothus-vending-react/' : '/',
  plugins: [react()],
}))

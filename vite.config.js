import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true
  },
  base: process.env.NODE_ENV === 'production'
    ? '/interactive-card-details-form-solution/'
    : '/',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: 'localhost',
    watch: {
      usePolling: true,  // Enables polling for file changes (better on some systems)
      interval: 100      // Check for changes every 100ms
    },
    hmr: {
      host: 'localhost',
      port: 3000,
      protocol: 'http'
    }
  }
})

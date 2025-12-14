import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client'),
      '@shared': path.resolve(__dirname, 'shared')
    }
  },
  server: {
    // Proxy API requests to the local server during development
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
    fs: {
      // Allow serving files from root and Builder.io folders
      allow: [
        path.resolve(__dirname, '.'),        // root folder
        path.resolve(__dirname, 'client'),   // client folder (Builder.io)
        path.resolve(__dirname, 'shared')    // shared folder (Builder.io)
      ]
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api":{ //after visit on /api it prelink to target
        target:"http://localhost:5019"
      }
    }
  }
})

import { fileURLToPath, URL } from 'node:url'
import Pages from 'vite-plugin-pages'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Pages({}), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: './pocketbase/pb_public'
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  base: "/bolt-diy-test/",
};


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})

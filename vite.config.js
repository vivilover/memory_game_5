import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // plugins: [react()],
  // define: {'process.env': {}},
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.PERENUAL_API_KEY': JSON.stringify(env.PERENUAL_API_KEY)
    },
    plugins: [react()],
  }
})

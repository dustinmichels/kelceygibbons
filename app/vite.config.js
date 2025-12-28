import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
  base: process.env.NODE_ENV === 'production' ? '/kelceygibbons/' : '/',
})

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // Usa el plugin oficial
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // ¡Sin PostCSS intermedio!
  ]
})
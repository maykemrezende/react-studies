import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    react(),
    // Mostra erros de TypeScript e ESLint no overlay do navegador durante o `npm run dev`.
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}" --max-warnings 0',
        useFlatConfig: true,
      },
    }),
  ],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Rutas relativas: el build funciona en cualquier subcarpeta o dominio
  // (GitHub Pages, Netlify, un subdirectorio) sin reconfigurar la base.
  base: './',
  plugins: [react(), tailwindcss()],

  // Build multi-página: el portafolio (index.html) y el CV imprimible (cv.html)
  // son dos entradas independientes, cada una con su propio CSS. Comparten los
  // datos de src/data/cv.ts, así que el CV siempre refleja lo último al desplegar.
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        cv: 'cv.html',
      },
    },
  },

  server: {
    host: true,
    // Se listan los dominios de túnel en vez de `true` para no exponer el
    // código a un ataque de DNS rebinding (mismo criterio que el cv-app).
    allowedHosts: ['.ngrok-free.app', '.ngrok-free.dev', '.ngrok.app', '.ngrok.io'],
  },
})

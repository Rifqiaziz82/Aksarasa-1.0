import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';


// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest:{
        name: 'Aksarasa App',
        short_name: 'Aksarasa',
        description: 'Aplikasi untuk menemanimu di perpus serta memakan',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons:[
                    {
            src:"/icons/typescript.png",
            sizes: "72x72",
            type:"image/png",
            purpose:"any"
          },
         {
            src:"/icons/typescript.png",
            sizes: "96x96",
            type:"image/png",
            purpose:"any"
          },
                    {
            src:"/icons/typescript.png",
            sizes: "128x128",
            type:"image/png",
            purpose:"any"
          },
          {
            src:"/icons/typescript.png",
            sizes: "192x192",
            type:"image/png",
            purpose:"any"
          },
          {
            src:"/icons/typescript.png",
            sizes: "512x512",
            type:"image/png",
            purpose:"any"
          },
          {
            src:"/icons/typescript.png",
            sizes: "192x192",
            type:"image/png",
            purpose:"maskable"
          },
                              {
            src:"/icons/typescript.png",
            sizes: "512x512",
            type:"image/png",
            purpose:"maskable"
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      }
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    allowedHosts: true, 
  }
})

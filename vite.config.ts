import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {TanStackRouterVite} from "@tanstack/router-vite-plugin";

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: './src/client/main.tsx',
          output: {
            entryFileNames: 'static/client.js'
          }
        }
      },
      plugins: [
        react(),
        TanStackRouterVite()
      ]
    }
  } else {
    return {
      ssr: {
        external: ['react', 'react-dom']
      },
      plugins: [
        devServer({
          entry: 'src/index.tsx'
        })
      ]
    }
  }
})
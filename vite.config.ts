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
      ],
      // refs: https://zenn.dev/hatobato/articles/1b22dbe585c9ae
      // 以下のパラメータを指定しないとapp.css, app.jsのURLが0.0.0.0になってしまうため、明示的にlocalhostに変更
      hmr: {
        host: 'localhost'
      },
      // Windowsアプリでファイル編集した際に監視されない問題があるため、usePolling:trueにすることで監視を強制させる
      // https://vitejs.dev/config/server-options.html#server-watch
      watch: {
        usePolling: true
      }
    }
  }
})
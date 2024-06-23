import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    {
      name: "isolation",
      configureServer(server) {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          next();
        });
      },
    },
  ],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    // 省略文件后缀
    extensions: ['', '.js', '.json', '.vue', '.scss', '.css']
  },
  build: {
    target: ['esnext']
  },
  server: {
    // 修改端口
    host: '0.0.0.0',
    port: 3100,
    // headers: {
    //   'Cross-Origin-Embedder-Policy': 'require-corp',
    //   'Cross-Origin-Opener-Policy': 'same-origin'
    // },
    proxy: {
      '/api': {
        target: "http://127.0.0.1:9501/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})

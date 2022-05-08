import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  base: './',
  server: {
    port: 3009,
    proxy: {
      '/api': {
        target: 'http://localhost:80',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src')
    }
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svgs')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  build: {
    outDir: 'build',
    // base64编码大小限制
    assetsInlineLimit: 10000,
    // sourcemap，测试环境下开启
    sourcemap: false,
    // rollup options
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/chunk/[name]-[hash].js'
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnable: true,
        math: {
          always: true
        }
      }
    }
  }
})

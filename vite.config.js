import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        })
      ]
    })
  ],
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 8085,
    open: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      util: fileURLToPath(new URL('./src/utils', import.meta.url))
      // store: fileURLToPath(new URL('./src/stores', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // 设置 SCSS 编译器的 API 版本。
        javascriptEnabled: true, // 允许在 SCSS 文件中使用 JavaScript 代码
        additionalData: `@use "@/assets/styles/main.scss" as *;`
      }
    }
  }
})

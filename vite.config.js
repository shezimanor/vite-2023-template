import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import removeConsole from 'vite-plugin-remove-console';

// 如果要在這裡使用ENV: https://cn.vitejs.dev/config/#using-environment-variables-in-config

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 讓 index.html 裡的 src="/assets/xxx"改為相對路徑 src="assets/xxx"
  plugins: [vue(), removeConsole()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});

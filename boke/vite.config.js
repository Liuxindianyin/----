import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/----/',  // 替换为你的仓库名，确保前后都有 '/'
  plugins: [vue()]
});

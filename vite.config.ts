import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
    port: 3000, // 개발 서버 포트 설정
    open: true,
    // localhost:3000/api/users 로 하는 요청을 http:/127.0.0.1:8080/users로 대체해서 서버로 요청을 보냄.
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        rewrite: (path: string) => {
          return path.replace(/^\/api/, '');
        },
      },
    },
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      pages: path.resolve(__dirname, 'src/pages'),
      services: path.resolve(__dirname, 'src/services'),
      store: path.resolve(__dirname, 'src/store'),
      styles: path.resolve(__dirname, 'src/styles'),
      types: path.resolve(__dirname, 'src/types'),
    },
  },
});

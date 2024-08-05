import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/roomsalaya/', // ตั้งค่า base URL
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // เปลี่ยนเป็นพอร์ตที่เซิร์ฟเวอร์ API ของคุณทำงานอยู่
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // หาก API ของคุณไม่ต้องการ /api prefix
      },
    },
  },
});

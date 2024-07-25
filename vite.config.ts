import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/roomsalaya/',  // เปลี่ยน '/roomsalaya/' ให้ตรงกับชื่อ repository ของคุณ
  plugins: [react()],
});

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  base: '/chart',
  build: {
    outDir: 'dist',
    manifest: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    modules: {
      generateScopedName: '[local]_[hash:base64:5]',
    },
  },
});

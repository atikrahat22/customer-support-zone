import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/customer-support-zone/',
  server: {
    open: true,
    strictPort: true,
    headers: {
      'Content-Security-Policy': "default-src 'self' 'unsafe-eval' 'unsafe-inline'; script-src 'self' 'unsafe-eval' 'unsafe-inline' http://localhost:5173 https://localhost:5173 http://localhost:3000 https://localhost:3000; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self'; connect-src 'self' https: ws: wss: http://localhost:5173 https://localhost:5173 http://localhost:3000 https://localhost:3000; base-uri 'self'; form-action 'self';",
      'Content-Type': 'text/javascript'
    },
    mimeTypes: {
      'application/javascript': ['.js', '.jsx'],
      'application/json': ['.json'],
      'text/javascript': ['.js', '.jsx']
    }
  },
  esbuild: {
    legalComments: "none"
  },
  build: {
    sourcemap: false
  }
});

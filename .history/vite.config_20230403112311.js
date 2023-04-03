import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig(() => {
  return {
    loader: "jsx",
    server: {
        open: true,
      },
    build: {
      outDir: 'build',
    },
    plugins: [react(), eslint()],
  };
});
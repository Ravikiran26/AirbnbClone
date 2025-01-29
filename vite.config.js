import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Enable JSX for .js files
    include: /src\/.*\.[tj]sx?$/, // Include .js, .jsx, .ts, .tsx
  },
});

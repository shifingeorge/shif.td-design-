import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // serve built assets relative to the current path so hosted sites can load JS/CSS
  base: './',
  plugins: [react()],
  optimizeDeps: {
    // pre-bundle lucide-react to avoid runtime resolution issues
    include: ['lucide-react'],
  },
  ssr: {
    // ensure lucide-react isn't treated as external during SSR builds
    noExternal: ['lucide-react'],
  },
});

// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/THREE-JS-PROJECT/',
    server: {
        port: 3000
    },
    build: {
        outDir: 'dist'
    },
    optimizeDeps: {
        include: ['three']
    }
});

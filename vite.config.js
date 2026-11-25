import { defineConfig } from 'vite';

// Only index.html, what it imports from src/, and src/assets/static are
// emitted to dist/. The docs/ folder (design source files) is never bundled
// or copied, so it is never deployed (the Pages workflow uploads dist/ only).
export default defineConfig({
  publicDir: 'src/assets/static',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
  server: {
    // Keep design docs out of the dev server's file watcher.
    watch: { ignored: ['**/docs/**'] },
  },
});

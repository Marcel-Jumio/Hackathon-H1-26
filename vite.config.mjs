import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Multi-page dev/build setup: the briefing page at the repo root, and the Studio UI (WP6).
// /engine and /microsite are plain ES modules consumed directly by the Studio — no separate
// build step needed for them.
export default defineConfig({
  plugins: [react()],
  // Relative base so the built asset URLs resolve under the GitHub Pages
  // project subpath (/Hackathon-H1-26/) as well as at the root in local dev.
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        studio: fileURLToPath(new URL('./studio/index.html', import.meta.url)),
      },
    },
  },
});

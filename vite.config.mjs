import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// Multi-page dev/build setup: the briefing page at the repo root, and the Studio UI (WP6).
// /engine and /microsite are plain ES modules consumed directly by the Studio — no separate
// build step needed for them.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        studio: fileURLToPath(new URL('./studio/index.html', import.meta.url)),
      },
    },
  },
});

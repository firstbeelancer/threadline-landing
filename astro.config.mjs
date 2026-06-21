import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://threadline.tigerapps.pro',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});

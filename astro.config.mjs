import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://threadline.tigerapps.pro',
  compressHTML: true,
  integrations: [
    tailwind({
      applyBaseStyles: false, // we handle base styles ourselves
    }),
  ],
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

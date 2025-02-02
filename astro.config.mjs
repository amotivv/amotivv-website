import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // Enable content collections
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'https://elihat2022.github.io',
  base: '/astro_foxyverbs/',
  trailingSlash: 'always' // Ensure all page URLs have a trailing slash
});
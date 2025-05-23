import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'https://elihat2022.github.io', 
  base: "astro_foxyverbs"// Cambia esto por tu dominio
});
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://arnaslie.github.io',
  // GitHub Pages project site: everything is served under /portfolio.io/.
  base: '/portfolio.io/',
  integrations: [mdx()],
});

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.reelestate.se',
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  security: {
    allowedDomains: [
      { hostname: 'www.reelestate.se', protocol: 'https' },
      { hostname: 'reelestate.se', protocol: 'https' },
    ],
  },
});

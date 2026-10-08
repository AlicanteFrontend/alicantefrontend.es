// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { routes } from './src/i18n/ui.ts';

const site = 'https://alicantefrontend.es';
const hreflang = { es: 'es', en: 'en' };

export default defineConfig({
  site,
  integrations: [
    icon(),
    sitemap({
      filter: (page) => Object.values(routes).some((r) => Object.values(r).some((path) => new URL(path, site).href === page)),
      serialize(item) {
        const route = Object.values(routes).find((r) => Object.values(r).some((path) => new URL(path, site).href === item.url));
        if (route) {
          item.links = Object.entries(route).map(([lang, path]) => ({ lang: hreflang[lang], url: new URL(path, site).href }));
        }
        return item;
      },
    }),
  ],
  redirects: {
    '/cfp': {
      status: 302,
      destination: 'https://forms.gle/7hH1oyibwH1YpRc6A'
    },
    '/telegram': {
      status: 302,
      destination: 'https://t.me/alicantefrontend'
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});

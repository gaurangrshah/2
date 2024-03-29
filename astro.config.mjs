import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
// import icon from 'astro-icon';

import tailwind from "@astrojs/tailwind";
import { analytics, site } from "./src/config.json";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
const __dirname = path.dirname(fileURLToPath(import.meta.url));


// https://astro.build/config
export default defineConfig({
  site: site.site_url,
  // @TODO: replace URL
  base: site.base_path,
  trailingSlash: site.trailingSlash ? 'always' : 'never',
  output: 'server',
  integrations: [
    tailwind({
      applyBaseStyles: false // allows base styles to be overridden
    }),
    // icon({
    //   include: {
    //   },
    // }),
    sitemap({
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date('2022-02-24'),
    })
  ],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  },
  adapter: vercel()
});

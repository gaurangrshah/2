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
  output: 'hybrid',
  integrations: [tailwind({
    applyBaseStyles: false // allows base styles to be overridden
  })
  // icon({
  //   include: {
  //   },
  // }),
  , sitemap()],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  },
  adapter: vercel()
});
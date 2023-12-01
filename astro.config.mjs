import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
// import icon from 'astro-icon';

import tailwind from "@astrojs/tailwind";
import { analytics, site } from "./src/config.json"

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: site.site_url, // @TODO: replace URL
  base: site.base_path,
  trailingSlash: site.trailingSlash ? 'always' : 'never',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: true
    }),
    // icon({
    //   include: {
    //   },
    // }),
  ],
   vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});

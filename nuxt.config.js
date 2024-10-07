// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import autoprefixer from "autoprefixer";
import postCssSortMediaQueries from "postcss-sort-media-queries";

export default defineNuxtConfig({
   compatibilityDate: "2024-04-03",
   devtools: { enabled: true },
   modules: ["@pinia/nuxt", "@nuxtjs/device"],
   runtimeConfig: {
      public: {
         apiBase: process.env.NUXT_PUBLIC_API_BASE_URL,
         apiKey: process.env.NUXT_PUBLIC_API_KEY,
      },
   },
   vite: {
      server: {
         port: 3001,
         host: "0.0.0.0",
         strictPort: true,
         hmr: {
            port: 3001,
         },
      },
      vue: {
         script: {
            defineModel: true,
            propsDestructure: true,
         },
      },
      css: {
         postcss: {
            plugins: [
               postCssSortMediaQueries({ sort: "desktop-first" }),
               autoprefixer({
                  overrideBrowserslist: ["last 3 versions", "ie >= 10"],
               }),
            ],
         },
         preprocessorOptions: {
            scss: {
               additionalData:
                  '@use "sass:math"; @use "~/assets/scss/mixins.scss" as *; @import "~/assets/scss/variables.scss";',
               silenceDeprecations: ["legacy-js-api"],
            },
         },
      },
   },
});

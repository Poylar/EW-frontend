import path, { resolve } from "path";
import { defineConfig } from "vite";
import vitePugPlugin from "vite-plugin-pug-transformer";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import viteImagemin from "vite-plugin-imagemin";
const ASSET_PATH = process.env.ASSET_PATH || "/";
export default defineConfig({
  base: "/EW-frontend/",
  build: {
    outDir: "build",
    assetsDir: "assets",

    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        landing: resolve(__dirname, "landing.html"),
        designSupport: resolve(__dirname, "design-support.html"),
        team: resolve(__dirname, "team.html"),
        cases: resolve(__dirname, "cases.html"),
        contacts: resolve(__dirname, "contacts.html"),
        error404: resolve(__dirname, "404.html"),
        seo: resolve(__dirname, "seo.html"),
        thankyou: resolve(__dirname, "thank-you.html"),
        corporatewebsites: resolve(__dirname, "corporate-websites.html"),
        sitevizitka: resolve(__dirname, "site-vizitka.html"),
        case: resolve(__dirname, "case.html"),
      },
      output: {
        chunkFileNames: "assets/js/app-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|mp4)$/.test(name ?? "")) {
            return "assets/media/[name]-[hash][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }

          if (/\.woff|2$/.test(name ?? "")) {
            return "assets/fonts/[name]-[extname]";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  server: {
    open: true,
  },
  css: {
    devSourcemap: true,
  },

  plugins: [
    vitePugPlugin(),
    createSvgIconsPlugin({
      symbolId: "[name]",
      iconDirs: [path.resolve(process.cwd(), "src/assets/images/icons")],
    }),
    // viteImagemin({
    //   gifsicle: {
    //     optimizationLevel: 7,
    //     interlaced: false,
    //   },
    //   optipng: {
    //     optimizationLevel: 7,
    //   },
    //   mozjpeg: {
    //     quality: 100,
    //   },
    //   pngquant: {
    //     quality: [0.8, 0.9],
    //     speed: 4,
    //   },
    //   svgo: {
    //     plugins: [
    //       {
    //         name: "removeViewBox",
    //       },
    //       {
    //         name: "removeEmptyAttrs",
    //         active: false,
    //       },
    //     ],
    //   },
    // }),
  ],
});

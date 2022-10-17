// vite.config.js
import path, { resolve } from "path";
import { defineConfig } from "vite";
import vitePugPlugin from "vite-plugin-pug-transformer";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import viteImagemin from "vite-plugin-imagemin";
var __vite_injected_original_dirname = "C:\\Users\\user\\Desktop\\work\\einzwerk";
var ASSET_PATH = process.env.ASSET_PATH || "/";
var vite_config_default = defineConfig({
  base: "/EW-frontend/",
  build: {
    outDir: "build",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "index.html"),
        landing: resolve(__vite_injected_original_dirname, "landing.html"),
        designSupport: resolve(__vite_injected_original_dirname, "design-support.html"),
        team: resolve(__vite_injected_original_dirname, "team.html"),
        cases: resolve(__vite_injected_original_dirname, "cases.html"),
        contacts: resolve(__vite_injected_original_dirname, "contacts.html"),
        error404: resolve(__vite_injected_original_dirname, "404.html"),
        seo: resolve(__vite_injected_original_dirname, "seo.html")
      },
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }
          if (/\.woff|2$/.test(name ?? "")) {
            return "assets/fonts/[name]-[extname]";
          }
          return "assets/[name]-[hash][extname]";
        }
      }
    }
  },
  server: {
    open: true
  },
  css: {
    devSourcemap: true
  },
  plugins: [
    vitePugPlugin(),
    createSvgIconsPlugin({
      symbolId: "[name]",
      iconDirs: [path.resolve(process.cwd(), "src/assets/images/icons")]
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 100
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERlc2t0b3BcXFxcd29ya1xcXFxlaW56d2Vya1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxEZXNrdG9wXFxcXHdvcmtcXFxcZWluendlcmtcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3VzZXIvRGVza3RvcC93b3JrL2Vpbnp3ZXJrL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHBhdGgsIHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCB2aXRlUHVnUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1wdWctdHJhbnNmb3JtZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI7XHJcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSBcInZpdGUtcGx1Z2luLWltYWdlbWluXCI7XHJcbmNvbnN0IEFTU0VUX1BBVEggPSBwcm9jZXNzLmVudi5BU1NFVF9QQVRIIHx8IFwiL1wiO1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6IFwiL0VXLWZyb250ZW5kL1wiLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6IFwiYnVpbGRcIixcclxuICAgIGFzc2V0c0RpcjogXCJhc3NldHNcIixcclxuXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgbWFpbjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiaW5kZXguaHRtbFwiKSxcclxuICAgICAgICBsYW5kaW5nOiByZXNvbHZlKF9fZGlybmFtZSwgXCJsYW5kaW5nLmh0bWxcIiksXHJcbiAgICAgICAgZGVzaWduU3VwcG9ydDogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiZGVzaWduLXN1cHBvcnQuaHRtbFwiKSxcclxuICAgICAgICB0ZWFtOiByZXNvbHZlKF9fZGlybmFtZSwgXCJ0ZWFtLmh0bWxcIiksXHJcbiAgICAgICAgY2FzZXM6IHJlc29sdmUoX19kaXJuYW1lLCBcImNhc2VzLmh0bWxcIiksXHJcbiAgICAgICAgY29udGFjdHM6IHJlc29sdmUoX19kaXJuYW1lLCBcImNvbnRhY3RzLmh0bWxcIiksXHJcbiAgICAgICAgZXJyb3I0MDQ6IHJlc29sdmUoX19kaXJuYW1lLCBcIjQwNC5odG1sXCIpLFxyXG4gICAgICAgIHNlbzogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic2VvLmh0bWxcIiksXHJcbiAgICAgIH0sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiBcImFzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzXCIsXHJcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanNcIixcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogKHsgbmFtZSB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoL1xcLihnaWZ8anBlP2d8cG5nfHN2ZykkLy50ZXN0KG5hbWUgPz8gXCJcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiYXNzZXRzL2ltYWdlcy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKC9cXC5jc3MkLy50ZXN0KG5hbWUgPz8gXCJcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiYXNzZXRzL2Nzcy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKC9cXC53b2ZmfDIkLy50ZXN0KG5hbWUgPz8gXCJcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiYXNzZXRzL2ZvbnRzL1tuYW1lXS1bZXh0bmFtZV1cIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gXCJhc3NldHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBvcGVuOiB0cnVlLFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBkZXZTb3VyY2VtYXA6IHRydWUsXHJcbiAgfSxcclxuXHJcbiAgcGx1Z2luczogW1xyXG4gICAgdml0ZVB1Z1BsdWdpbigpLFxyXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgICBzeW1ib2xJZDogXCJbbmFtZV1cIixcclxuICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgXCJzcmMvYXNzZXRzL2ltYWdlcy9pY29uc1wiKV0sXHJcbiAgICB9KSxcclxuICAgIHZpdGVJbWFnZW1pbih7XHJcbiAgICAgIGdpZnNpY2xlOiB7XHJcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXHJcbiAgICAgICAgaW50ZXJsYWNlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlwbmc6IHtcclxuICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcclxuICAgICAgfSxcclxuICAgICAgbW96anBlZzoge1xyXG4gICAgICAgIHF1YWxpdHk6IDEwMCxcclxuICAgICAgfSxcclxuICAgICAgcG5ncXVhbnQ6IHtcclxuICAgICAgICBxdWFsaXR5OiBbMC44LCAwLjldLFxyXG4gICAgICAgIHNwZWVkOiA0LFxyXG4gICAgICB9LFxyXG4gICAgICBzdmdvOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInJlbW92ZVZpZXdCb3hcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicmVtb3ZlRW1wdHlBdHRyc1wiLFxyXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVMsT0FBTyxRQUFRLGVBQWU7QUFDclUsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxrQkFBa0I7QUFKekIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxhQUFhLFFBQVEsSUFBSSxjQUFjO0FBQzdDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUVYLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE1BQU0sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsUUFDckMsU0FBUyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxRQUMxQyxlQUFlLFFBQVEsa0NBQVcscUJBQXFCO0FBQUEsUUFDdkQsTUFBTSxRQUFRLGtDQUFXLFdBQVc7QUFBQSxRQUNwQyxPQUFPLFFBQVEsa0NBQVcsWUFBWTtBQUFBLFFBQ3RDLFVBQVUsUUFBUSxrQ0FBVyxlQUFlO0FBQUEsUUFDNUMsVUFBVSxRQUFRLGtDQUFXLFVBQVU7QUFBQSxRQUN2QyxLQUFLLFFBQVEsa0NBQVcsVUFBVTtBQUFBLE1BQ3BDO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUM1QixjQUFJLHlCQUF5QixLQUFLLFFBQVEsRUFBRSxHQUFHO0FBQzdDLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGNBQUksU0FBUyxLQUFLLFFBQVEsRUFBRSxHQUFHO0FBQzdCLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGNBQUksWUFBWSxLQUFLLFFBQVEsRUFBRSxHQUFHO0FBQ2hDLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsY0FBYztBQUFBLElBQ2QscUJBQXFCO0FBQUEsTUFDbkIsVUFBVTtBQUFBLE1BQ1YsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyx5QkFBeUIsQ0FBQztBQUFBLElBQ25FLENBQUM7QUFBQSxJQUNELGFBQWE7QUFBQSxNQUNYLFVBQVU7QUFBQSxRQUNSLG1CQUFtQjtBQUFBLFFBQ25CLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxtQkFBbUI7QUFBQSxNQUNyQjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSLFNBQVMsQ0FBQyxLQUFLLEdBQUc7QUFBQSxRQUNsQixPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0osU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

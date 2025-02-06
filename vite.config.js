// import { defineConfig } from "vite"
// import react from "@vitejs/plugin-react"

// export default defineConfig({
//   plugins: [react()],
//   base: "/",
//   build: {
//     outDir: "dist",
//   },
//   rollupOptions: {
//     output: {
//       entryFileNames: "[name]-[hash].js",
//       chunkFileNames: "[name]-[hash].js",
//       assetFileNames: "[name]-[hash][extname]",
//     },
//   },
// })

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/BRp99.github.io/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: () => {},
      },
    },
  },
})

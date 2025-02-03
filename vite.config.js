import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  rollupOptions: {
    output: {
      entryFileNames: "[name]-[hash].mjs",
      chunkFileNames: "[name]-[hash].mjs",
      assetFileNames: "[name]-[hash][extname]",
    },
  },
})

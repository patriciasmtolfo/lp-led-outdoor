import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(process.cwd(), "github-pages"),
  base: "/lp-led-outdor/",
  publicDir: resolve(process.cwd(), "public"),
  plugins: [react()],
  build: {
    outDir: resolve(process.cwd(), "gh-pages-dist"),
    emptyOutDir: true,
  },
});

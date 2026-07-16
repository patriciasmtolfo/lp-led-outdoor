import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import react from "@vitejs/plugin-react";
import { build as bundle } from "esbuild";
import { defineConfig } from "vite";

function prerenderLandingPage() {
  return {
    name: "prerender-landing-page",
    apply: "build" as const,
    async closeBundle() {
      const outputDir = resolve(process.cwd(), "gh-pages-dist");
      const renderer = resolve(process.cwd(), ".sites-runtime/prerender-pages.mjs");
      await bundle({
        entryPoints: [resolve(process.cwd(), "github-pages/prerender.tsx")],
        bundle: true,
        format: "esm",
        platform: "node",
        packages: "external",
        outfile: renderer,
        loader: { ".css": "empty" },
        logLevel: "silent",
      });
      const { render } = await import(`${pathToFileURL(renderer).href}?build=${Date.now()}`);
      const htmlPath = resolve(outputDir, "index.html");
      const html = await readFile(htmlPath, "utf8");
      const root = '<div id="root"></div>';
      if (!html.includes(root)) throw new Error("Static root element was not found for prerendering.");
      await writeFile(htmlPath, html.replace(root, `<div id="root">${render()}</div>`));
    },
  };
}

export default defineConfig({
  root: resolve(process.cwd(), "github-pages"),
  base: "/",
  publicDir: resolve(process.cwd(), "public"),
  plugins: [react(), prerenderLandingPage()],
  build: {
    outDir: resolve(process.cwd(), "gh-pages-dist"),
    emptyOutDir: true,
  },
});

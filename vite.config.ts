/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  test: {
    globals: true,
    environment: "jsdom",
  },
  build: {
    lib: {
      entry: {
        icons: path.resolve(__dirname, "src/icons/index.ts"),
        forms: path.resolve(__dirname, "src/forms/index.ts"),
        nav: path.resolve(__dirname, "src/nav/index.ts"),
        layouts: path.resolve(__dirname, "src/layouts/index.ts"),
        general: path.resolve(__dirname, "src/general/index.ts"),
        utils: path.resolve(__dirname, "src/utils/index.ts"),
        "": path.resolve(__dirname, "src/index.ts"),
      },
      name: "ui-grawiki",
      // formats: ["es", "umd"], un seul fichier
      // fileName: (format) => `gwk-ui.${ format }.js`, un seul fichier
      formats: ["es", "cjs"],
      fileName: (format, entryName) =>
        `${entryName ? entryName + "/" : ""}ui-grawiki.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@ui/utils",
        "@ui/general",
        "@ui/icons",
        "@ui/assets",
        "@ui/forms",
        "@ui/layouts",
        "@ui/nav",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "./src"),
      "@ui/icons": path.resolve(__dirname, "./src/icons"),
      "@ui/forms": path.resolve(__dirname, "./src/forms"),
      "@ui/general": path.resolve(__dirname, "./src/general"),
      "@ui/utils": path.resolve(__dirname, "./src/utils"),
      "@ui/nav": path.resolve(__dirname, "./src/nav"),
      "@ui/assets": path.resolve(__dirname, "./src/assets"),
      "@ui/layouts": path.resolve(__dirname, "./src/layouts"),
    },
  },
});

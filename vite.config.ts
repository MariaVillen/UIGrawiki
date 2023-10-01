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
        icons: path.resolve(__dirname, "src/components/icons/index.ts"),
        forms: path.resolve(__dirname, "src/components/forms/index.ts"),
        nav: path.resolve(__dirname, "src/components/nav/index.ts"),
        layouts: path.resolve(__dirname, "src/components/layouts/index.ts"),
        general: path.resolve(__dirname, "src/components/general/index.ts"),
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
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

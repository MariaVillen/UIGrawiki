// vite.config.ts
import { defineConfig } from "file:///C:/Users/Maria/Documents/Proyectos/GRAWIKI/UiGrawiki/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Maria/Documents/Proyectos/GRAWIKI/UiGrawiki/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///C:/Users/Maria/Documents/Proyectos/GRAWIKI/UiGrawiki/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\Maria\\Documents\\Proyectos\\GRAWIKI\\UiGrawiki";
var vite_config_default = defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  test: {
    globals: true,
    environment: "jsdom"
  },
  build: {
    lib: {
      entry: {
        icons: path.resolve(__vite_injected_original_dirname, "src/icons/index.ts"),
        forms: path.resolve(__vite_injected_original_dirname, "src/forms/index.ts"),
        nav: path.resolve(__vite_injected_original_dirname, "src/nav/index.ts"),
        layouts: path.resolve(__vite_injected_original_dirname, "src/layouts/index.ts"),
        general: path.resolve(__vite_injected_original_dirname, "src/general/index.ts"),
        "": path.resolve(__vite_injected_original_dirname, "src/index.ts")
      },
      name: "ui-grawiki",
      // formats: ["es", "umd"], un seul fichier
      // fileName: (format) => `gwk-ui.${ format }.js`, un seul fichier
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName ? entryName + "/" : ""}ui-grawiki.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNYXJpYVxcXFxEb2N1bWVudHNcXFxcUHJveWVjdG9zXFxcXEdSQVdJS0lcXFxcVWlHcmF3aWtpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNYXJpYVxcXFxEb2N1bWVudHNcXFxcUHJveWVjdG9zXFxcXEdSQVdJS0lcXFxcVWlHcmF3aWtpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9NYXJpYS9Eb2N1bWVudHMvUHJveWVjdG9zL0dSQVdJS0kvVWlHcmF3aWtpL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJWaXRlL2NsaWVudFwiIC8+XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgZHRzKHsgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSB9KV0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiBcImpzZG9tXCIsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeToge1xuICAgICAgICBpY29uczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaWNvbnMvaW5kZXgudHNcIiksXG4gICAgICAgIGZvcm1zOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9mb3Jtcy9pbmRleC50c1wiKSxcbiAgICAgICAgbmF2OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9uYXYvaW5kZXgudHNcIiksXG4gICAgICAgIGxheW91dHM6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2xheW91dHMvaW5kZXgudHNcIiksXG4gICAgICAgIGdlbmVyYWw6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2dlbmVyYWwvaW5kZXgudHNcIiksXG4gICAgICAgIFwiXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4LnRzXCIpLFxuICAgICAgfSxcbiAgICAgIG5hbWU6IFwidWktZ3Jhd2lraVwiLFxuICAgICAgLy8gZm9ybWF0czogW1wiZXNcIiwgXCJ1bWRcIl0sIHVuIHNldWwgZmljaGllclxuICAgICAgLy8gZmlsZU5hbWU6IChmb3JtYXQpID0+IGBnd2stdWkuJHsgZm9ybWF0IH0uanNgLCB1biBzZXVsIGZpY2hpZXJcbiAgICAgIGZvcm1hdHM6IFtcImVzXCIsIFwiY2pzXCJdLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQsIGVudHJ5TmFtZSkgPT5cbiAgICAgICAgYCR7ZW50cnlOYW1lID8gZW50cnlOYW1lICsgXCIvXCIgOiBcIlwifXVpLWdyYXdpa2kuJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6IFwiUmVhY3RcIixcbiAgICAgICAgICBcInJlYWN0LWRvbVwiOiBcIlJlYWN0RE9NXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFHQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQU5qQixJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRSxrQkFBa0IsS0FBSyxDQUFDLENBQUM7QUFBQSxFQUNsRCxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLFFBQ0wsT0FBTyxLQUFLLFFBQVEsa0NBQVcsb0JBQW9CO0FBQUEsUUFDbkQsT0FBTyxLQUFLLFFBQVEsa0NBQVcsb0JBQW9CO0FBQUEsUUFDbkQsS0FBSyxLQUFLLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsUUFDL0MsU0FBUyxLQUFLLFFBQVEsa0NBQVcsc0JBQXNCO0FBQUEsUUFDdkQsU0FBUyxLQUFLLFFBQVEsa0NBQVcsc0JBQXNCO0FBQUEsUUFDdkQsSUFBSSxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQzVDO0FBQUEsTUFDQSxNQUFNO0FBQUE7QUFBQTtBQUFBLE1BR04sU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3JCLFVBQVUsQ0FBQyxRQUFRLGNBQ2pCLEdBQUcsWUFBWSxZQUFZLE1BQU0sRUFBRSxjQUFjLE1BQU07QUFBQSxJQUMzRDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

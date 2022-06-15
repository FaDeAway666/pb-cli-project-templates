import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": process.cwd() + "/src",
    },
  },
  plugins: [react()],
  build: {
    target: "esnext",
  },
  // css: {
  //   postcss: {
  //     plugins: [tailwindcss()],
  //   },
  // },
});

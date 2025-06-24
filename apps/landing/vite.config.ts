import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // якщо конфіг у apps/landing
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // для імпортів типу @/components
    },
  },
  build: {
    outDir: "../../dist/landing",
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
  },
});

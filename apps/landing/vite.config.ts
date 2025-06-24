import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // якщо конфіг у apps/landing
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
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

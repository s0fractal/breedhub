import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // якщо конфіг у apps/app
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "../../dist/app",
    emptyOutDir: true,
  },
  server: {
    port: 5174, // якщо треба одночасно запускати app та landing
    open: true,
  },
});

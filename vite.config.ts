import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: "apps/app", // <-- це важливо!
  plugins: [react()],
  build: {
    outDir: "../../dist/app",
    emptyOutDir: true,
  },
});

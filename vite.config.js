import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Mengizinkan semua host (termasuk Ngrok) untuk mengakses server ini
    allowedHosts: true,
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174, // Set your fixed port here
    strictPort: true, // Optional: throws an error if port 3000 is already in use, instead of automatically trying 3001
  },
});

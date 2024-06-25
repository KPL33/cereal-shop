import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["nodemailer"], // Keep nodemailer as an external dependency
    },
  },
  plugins: [react()],
  css: {
    modules: false, // Enable or disable CSS modules as needed
    // Additional CSS configuration can be added here
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  return {
    base: mode === "development" ? "/" : "/summer-school/",
    plugins: [react(), tailwindcss()],
  };
});

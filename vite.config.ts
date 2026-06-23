import { defineConfig } from "@core/vite-config";

export default defineConfig({
  nitro: {
    preset: "vercel"
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});

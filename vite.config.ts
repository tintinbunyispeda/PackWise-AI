import { defineConfig } from "@core/vite-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});

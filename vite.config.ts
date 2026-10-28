import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, "index.html"),
        booking: resolve(root, "booking.html"),
        contact: resolve(root, "contact.html"),
        rooms: resolve(root, "rooms.html"),
        experiences: resolve(root, "experiences.html"),
        about: resolve(root, "about.html"),
      },
    },
  },
});

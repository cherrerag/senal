import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import auth from "auth-astro";

// D-11: el sitio es privado. Cada página se sirve en el servidor y el middleware exige sesión de Google.
export default defineConfig({
  site: "https://claudio.noisezero.dev",
  trailingSlash: "ignore",
  output: "server",
  adapter: vercel(),
  integrations: [auth()],
});

import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import auth from "auth-astro";
import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

// D-13: imágenes privadas. Astro publica como estáticos solo lo que está en estaticos/ (favicon y robots).
// Las imágenes siguen en public/ (ahí las deja también motor.portal), viajan dentro de la función
// y las sirven src/pages/fotos/[...ruta].ts y src/pages/biblioteca/<obra>/img/[...ruta].ts, que exigen sesión.
const privadas = [
  "fotos",
  ...(existsSync("public/biblioteca") ? readdirSync("public/biblioteca").map((o) => `biblioteca/${o}/img`) : []),
].filter((c) => existsSync(join("public", c)));

const archivos = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? archivos(p) : n.startsWith(".") ? [] : [p];
  });

// D-11: el sitio es privado. Cada página se sirve en el servidor y el middleware exige sesión de Google.
export default defineConfig({
  site: "https://claudio.noisezero.dev",
  trailingSlash: "ignore",
  output: "server",
  adapter: vercel({ includeFiles: privadas.flatMap((c) => archivos(join("public", c))) }),
  publicDir: "./estaticos",
  integrations: [auth()],
  // En Vercel la función veía "localhost" como host; con allowedDomains Astro confía en el host real reenviado.
  security: { allowedDomains: [{ hostname: "claudio.noisezero.dev", protocol: "https" }] },
});

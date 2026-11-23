// D-13: las imágenes viven en public/, pero Astro ya no las publica como estáticos (publicDir es estaticos/).
// Se sirven desde la función del servidor, así que pasan por el middleware y exigen sesión.
import { readFile } from "node:fs/promises";
import { join, normalize, sep } from "node:path";

const tipos: Record<string, string> = {
  jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp", svg: "image/svg+xml", gif: "image/gif", avif: "image/avif",
};

export async function servirImagen(carpeta: string, ruta: string | undefined): Promise<Response> {
  const base = join(process.cwd(), "public", carpeta);
  const archivo = normalize(join(base, ruta ?? ""));
  const ext = archivo.split(".").pop()?.toLowerCase() ?? "";
  if (!ruta || !archivo.startsWith(base + sep) || !tipos[ext]) return new Response(null, { status: 404 });
  try {
    const datos = await readFile(archivo);
    return new Response(datos, {
      headers: { "Content-Type": tipos[ext], "Cache-Control": "private, max-age=86400" },
    });
  } catch {
    return new Response(null, { status: 404 });
  }
}

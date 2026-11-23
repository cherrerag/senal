import type { APIRoute } from "astro";
import { servirImagen } from "../../lib/imagenPrivada";
export const GET: APIRoute = ({ params }) => servirImagen("fotos", params.ruta);

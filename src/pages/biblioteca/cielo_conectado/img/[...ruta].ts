import type { APIRoute } from "astro";
import { servirImagen } from "../../../../lib/imagenPrivada";
export const GET: APIRoute = ({ params }) => servirImagen("biblioteca/cielo_conectado/img", params.ruta);

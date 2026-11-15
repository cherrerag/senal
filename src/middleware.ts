import { defineMiddleware } from "astro:middleware";
import { getSession } from "auth-astro/server";

// Todo el sitio exige sesión, salvo la página de entrada y las rutas de Auth.js.
const abiertas = ["/entrar", "/api/auth"];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url;
  if (abiertas.some((p) => pathname === p || pathname.startsWith(p + "/"))) return next();
  // Solo en `npm run dev` con VISTA_LOCAL=1: revisar páginas sin pasar por Google. Nunca aplica en producción.
  if (import.meta.env.DEV && process.env.VISTA_LOCAL === "1") return next();
  const session = await getSession(context.request);
  if (!session?.user) {
    const destino = encodeURIComponent(pathname + search);
    return context.redirect(`/entrar?volver=${destino}`, 302);
  }
  context.locals.usuario = session.user;
  return next();
});

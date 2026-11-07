# ESTADO · Señal

**Última actualización:** 2026-11-07 · **Fase actual:** F0 Cimientos

## Dónde estamos
- F0 en curso: proyecto Astro creado, look Nebulosa aplicado, portada en mosaico con fotos reales y las seis secciones como páginas «en construcción».
- `npm run build` genera 7 páginas sin errores. Verificado en navegador (escritorio y 390 px): sin errores de consola, sin scroll lateral, la navegación con transiciones funciona.
- Pendiente para cerrar F0: push a GitHub, despliegue en Vercel y dominio `claudio.noisezero.dev` respondiendo con HTTPS.
- Producción en Vercel: https://senal-six.vercel.app (proyecto `senal`, despliegue automático desde `main` de cherrerag/senal). `claudio.noisezero.dev` ya está agregado en Vercel; falta el registro DNS en Cloudflare (A `claudio` → 76.76.21.21, sin proxy).

## Siguiente
- F1 · Portada: pulir el mosaico, transiciones entre bloques y secciones, medir el desenfoque en teléfono.
- F2 · Proyectos: casos Noise Zero y Cava Musical con las fotos de `public/fotos/`.

## Fotos producidas (public/fotos)
sala, kiosco, radios, esquema, raspberry, pcb, esp32, cables, luz, escritorio. Originales en `_material/` (no se versiona).
Descartadas: las fotos de la pantalla OLED (muestran la red Wi-Fi y la IP).

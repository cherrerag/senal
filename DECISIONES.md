# Sitio personal «Señal» · Decisiones

Registro de decisiones del sitio web personal de Claudio Herrera. Se actualiza en cada sesión.

## D-01 · Concepto (2026-11-07)
Señal y ruido: el sitio publica lo que queda después de quitar el ruido. Validación continua.

## D-02 · Estructura (2026-11-07) ✅ cerrada
Inicio · Proyectos (casos de estudio con formato fijo: problema, decisión, qué falló, estado, stack, evidencia) · Bitácora (desde el día del cambio, abril 2026) · Biblioteca (enciclopedias) · Ensayos · Método · Ahora.

## D-03 · Contenido de la primera ola (2026-11-07) ✅ cerrada
- Primera ola: Noise Zero, Cava Musical, «Seis meses construyendo con IA» (Bitácora y Método), «10 ideas críticas», El Universo como Sistema.
- Segunda ola: COCKPIT, Music Map, Historia de Chile, Transmisión de Datos 2027.
- Fuera: HRH (datos familiares) y Expediente Solar (direcciones y boletas).
- Nunca publicar `.env`, IPs internas (192.168.100.x) ni usuarios de servidores.

## D-04 · Técnica y futuro (2026-11-07) ✅ cerrada
Astro + contenido en Markdown en Git, publicado en Vercel. Dominio personal (noisezero.dev queda para el producto). Widget «la sala ahora» de solo lectura a través del túnel. Transiciones con View Transitions y animaciones atadas al scroll.

## D-05 · Diagramación (2026-11-07) ✅ cerrada
- **Portada: C · Mosaico.** Tablero de bloques de distintos tamaños; cada bloque abre su sección con una transición.
- **Interior: A · Revista.** Barra horizontal fija con progreso de lectura, secciones a todo el ancho, imagen y texto alternados, bitácora que se desliza de lado.

### ⏳ Evaluación pendiente
Cuando el sitio esté desarrollado, revisar de nuevo las alternativas descartadas con contenido y fotos reales:
- **v2 · Columna fija** (identidad y menú fijos a la izquierda, scrollytelling en el caso Noise Zero): https://claude.ai/artifact/N6RRHzEXKWhk8UJUFqiw38
- **B · Recorrido horizontal** (paneles a pantalla completa que avanzan de lado): https://claude.ai/artifact/1SEJMcEgPyovSwH9zk1uEE#horizontal
- Ideas a rescatar aunque no se elijan: el diagrama de la sala que se enciende por etapas (v2) y los paneles horizontales para la bitácora o una presentación de proyectos (B).

## D-06 · Look: 15 · Nebulosa (2026-11-07) ✅ cerrada
Espacio profundo con nubes de gas magenta, turquesa y dorado, estrellas al fondo y tarjetas translúcidas (vidrio esmerilado). Elegido entre 17 looks: https://claude.ai/artifact/SAXkeEkuQKe53NrEQFwHN2 (botón 15)
- Colores: fondo #05040c · texto #f4eefb · secundario #b3a8c9 · líneas rgba(255,255,255,.13) · acento dorado #ffc77a.
- Nubes: magenta rgba(255,92,170,.35) · turquesa rgba(60,190,200,.28) · dorado rgba(255,180,90,.22).
- Tipografía: Gloock (titulares) · Instrument Sans (texto e interfaz) · IBM Plex Mono (datos y fechas).
- Esquinas 14px, desenfoque de 14px en las tarjetas.
- Finalistas por si se revisa: 12 Atacama nocturno, 13 Prisma, 17 Espectrograma.

## D-07 · Dominio de lanzamiento (2026-11-07) ✅ cerrada
Se publica en **claudio.noisezero.dev** (subdominio gratis del dominio que ya está pagado). Un dominio personal nuevo se pagaría aparte; se decide más adelante.

## D-08 · Los dos cambios (2026-11-07) ✅ cerrada
No hay una fecha única del «día del cambio». Se fechan con el historial de git de los repos del MacBook Pro M5:
- **Primer cambio · 2026-03-18:** empieza el primer proyecto (primer commit de HRH).
- **Segundo cambio · 2026-07-25:** la suscripción se nota en el ritmo: de ~1 commit por semana (semanas 24–29) a 41 en la semana del 20 al 26 de julio, y 95 en la semana 37.

## D-09 · Ensayos de la primera ola (2026-11-07) ✅ cerrada
De «10 ideas críticas» se publican dos de las diez para partir (por definir cuáles; propuesta: I · La física de la información y VII · Fenomenología de la IA).

## D-10 · Fotos (2026-11-07) ✅ cerrada
Las fotos y videos originales viven en `_material/` (fuera de git). Las producidas (recorte, color atenuado, webp 1400/700 px) van en `public/fotos/`. Se descartan las fotos de la pantalla OLED porque muestran la red Wi-Fi y la IP.

## Preguntas abiertas
- Cuáles dos de las 10 ideas críticas se publican primero.
- Dominio personal propio (más adelante).

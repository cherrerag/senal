# ESTADO · Señal

**Última actualización:** 2026-11-08 · **Sitio:** https://claudio.noisezero.dev (privado, entra con Google)

## Próximo paso de Claudio
Pedir a Claude la **revisión de redacción del crédito**: que cada texto diga con precisión qué hizo Claudio (idea, dirección, decisiones, pruebas en su casa) y qué hizo Claude (código, textos, diseño). Caso por caso, contrastando con las fuentes.

## Lo desarrollado
- **F0–F4 (7 nov):** Astro + look Nebulosa, portada en mosaico, interiores tipo revista. Repo `cherrerag/senal`; un push a `main` despliega en Vercel (`senal`).
- **Contenido:** casos Noise Zero, Cava Musical, COCKPIT, Second Brain y Music Map. Bitácora con gráfico de ritmo, Método, Ahora, Biblioteca y Ensayos I y VII.
- **Honestidad (8 nov):** se quitaron frases inventadas. Cada caso dice lo que existe y lo que aún no existe.
- **Ensayos (8 nov):** firmados «Por Claude, a pedido de Claudio Herrera».
- **Capturas (8 nov):** COCKPIT con textos difuminados, Cava (galería y búsqueda), Second Brain recortado solo al grafo y Music Map.
- **Acceso privado (8 nov):** login con Google (auth-astro). Middleware que manda a `/entrar` y robots `Disallow`. Variables en Vercel: AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET, AUTH_SECRET, AUTH_TRUST_HOST, AUTH_URL. Arreglo del host «localhost» con `security.allowedDomains` (commit 368a7bb). Login probado por Claudio.

- **Método completo (22 nov):** el documento de Claudio «Seis meses construyendo con IA: el método de un Product Owner» (24 oct) se publica en `/metodo/seis-meses`, firmado por Claudio, con índice lateral y tablas. Texto en `src/data/seis-meses-con-ia.md`; enlace al final de `/metodo`. En lugar de la línea «[embedded content]» va el esquema «El sistema hoy» (roles, memoria y cierre) recreado en HTML con estilo Nebulosa, a pedido de Claudio. Se corrigió «llegé» → «llegué».
- **Imágenes privadas (22 nov):** `/fotos` y `/biblioteca/<obra>/img` ya no se publican como estáticos: Astro usa `estaticos/` como carpeta pública (solo favicon y robots). Las imágenes siguen en `public/` (motor.portal las deja ahí igual), viajan dentro de la función de Vercel y las sirven rutas que exigen sesión. Si se agrega una obra nueva a la Biblioteca, crear su `src/pages/biblioteca/<obra>/img/[...ruta].ts` (copiar el de satelital). Ojo con el tamaño: la función pesa ~150 MB con las imágenes y Vercel admite 250 MB.
- **Biblioteca: El cielo conectado (22 nov):** CIELO CONECTADO publicada en `/biblioteca/cielo_conectado` (158 entradas, 132 imágenes en `public/biblioteca/cielo_conectado/img`, área Comunicaciones). Se regenera con `python -m motor.portal cielo_conectado Comunicaciones`. Commit 33561d2.
- **Biblioteca: Más allá de nuestra altura (15 nov):** SATELITAL publicada en `/biblioteca/satelital` (151 entradas, 239 imágenes en `public/biblioteca/satelital/img`). Se regenera desde el Agente de conocimiento con `python -m motor.portal satelital`. Vista local sin login: `VISTA_LOCAL=1 npm run dev`. Commit 48d3aac.

## Pendientes (en orden)
1. **Redacción del crédito** Claudio / Claude en todo el sitio (próximo paso).
2. **Music Map:** antes de mostrar la app, sacar del bundle los correos de familia y las claves, mover la API de la Cava al servidor y mejorar el rendimiento sobre 100 nodos. Plan: https://claude.ai/artifact/DSmV7C4K33J8VkL2GBaDbn
3. **Cava:** el sumiller (búsqueda IA) responde 401; probable API key. Cuando funcione, cambiar la captura.
4. ~~**Fotos:** protegerlas también.~~ Hecho el 22 nov (D-13).
5. **Acceso:** Claudio pidió (22 nov) que entre solo su Gmail en todo el sitio. Falta que él agregue `AUTH_ALLOWED_EMAILS` en Vercel (Production) y se redespliegue; el código ya lo respeta. Más adelante, registro de usuarios.
6. **Bibliotecas** (El Universo y otras): Claudio las rehace en un proyecto aparte con agentes. En el sitio quedan «En revisión».
7. **Diagramación:** comparar v2/B después de la segunda ola.

## Reglas que se mantienen
- Nunca publicar .env, IPs internas, nombres de Wi-Fi ni usuarios de servidor. HRH y el expediente solar son privados. La Cava no se enlaza (controla la sala real).
- Las credenciales las pone Claudio. Publicar en producción requiere su sí explícito.
- Ruta de publicación: archivos a ~/human/WEB, luego Remote Control en el Mac para build, commit y push a main.

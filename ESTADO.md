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

## Pendientes (en orden)
1. **Redacción del crédito** Claudio / Claude en todo el sitio (próximo paso).
2. **Music Map:** antes de mostrar la app, sacar del bundle los correos de familia y las claves, mover la API de la Cava al servidor y mejorar el rendimiento sobre 100 nodos. Plan: https://claude.ai/artifact/DSmV7C4K33J8VkL2GBaDbn
3. **Cava:** el sumiller (búsqueda IA) responde 401; probable API key. Cuando funcione, cambiar la captura.
4. **Fotos:** hoy se abren por enlace directo aunque el sitio sea privado. Protegerlas también.
5. **Acceso:** hoy entra cualquier Gmail verificado. Para restringirlo, agregar AUTH_ALLOWED_EMAILS en Vercel. Más adelante, registro de usuarios.
6. **Bibliotecas** (El Universo y otras): Claudio las rehace en un proyecto aparte con agentes. En el sitio quedan «En revisión».
7. **Diagramación:** comparar v2/B después de la segunda ola.

## Reglas que se mantienen
- Nunca publicar .env, IPs internas, nombres de Wi-Fi ni usuarios de servidor. HRH y el expediente solar son privados. La Cava no se enlaza (controla la sala real).
- Las credenciales las pone Claudio. Publicar en producción requiere su sí explícito.
- Ruta de publicación: archivos a ~/human/WEB, luego Remote Control en el Mac para build, commit y push a main.

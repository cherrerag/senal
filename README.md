# Señal

Sitio personal de Claudio Herrera: proyectos, bitácora, enciclopedias y ensayos.
Publicado en https://claudio.noisezero.dev

- **Empieza por** [`ESTADO.md`](ESTADO.md) (dónde está el proyecto hoy) y [`DECISIONES.md`](DECISIONES.md) (qué se decidió y por qué).
- **Stack:** Astro 5, CSS propio (look Nebulosa), fuentes servidas por el sitio (Fontsource), Vercel.

## Trabajar en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Estructura

```
src/
├── styles/nebulosa.css   tokens del look (D-06)
├── layouts/Base.astro    cabecera, fuentes, transiciones
├── components/           Signal (señal animada)
├── data/sitio.ts         datos de portada y secciones (se reemplaza por colecciones en F2–F4)
└── pages/                portada en mosaico y secciones
public/fotos/             fotos producidas (webp, 1400 y 700 px)
_material/                originales: fotos, videos y borradores. NO se versiona.
```

## Reglas

- Nunca publicar `.env`, IPs internas (192.168.x.x), nombres de red ni usuarios de servidores. Ojo con las fotos de la pantalla OLED: muestran la red y la IP.
- Una fase por sesión; una fase está terminada cuando se verificó ejecutándola.

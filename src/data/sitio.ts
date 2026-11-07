// Datos de la portada y de las secciones. Fuente: DECISIONES.md, «Seis meses construyendo con IA»
// y el historial de git de los repos en ~/dev (MacBook Pro M5). Se reemplaza por colecciones de contenido en F2–F4.

export const secciones = [
  { slug: "proyectos", nombre: "Proyectos", fase: "F2", resumen: "Casos de estudio: el problema, lo que decidí, lo que falló y la evidencia." },
  { slug: "bitacora", nombre: "Bitácora", fase: "F3", resumen: "Los hitos fechados desde los dos cambios de 2026." },
  { slug: "biblioteca", nombre: "Biblioteca", fase: "F4", resumen: "Enciclopedias construidas con fuentes primarias." },
  { slug: "ensayos", nombre: "Ensayos", fase: "F4", resumen: "Dos de las 10 ideas críticas, para empezar." },
  { slug: "metodo", nombre: "Método", fase: "F3", resumen: "Siete reglas que sobrevivieron al uso diario." },
  { slug: "ahora", nombre: "Ahora", fase: "F3", resumen: "En qué estoy este mes." },
] as const;

// Los dos cambios, fechados con el historial de commits de los seis repos.
export const cambios = [
  {
    fecha: "2026-03-18",
    titulo: "Primer cambio",
    texto: "Empieza el primer proyecto. El primer commit de HRH abre todo lo que vino después.",
  },
  {
    fecha: "2026-07-25",
    titulo: "Segundo cambio",
    texto: "Llega la suscripción y se nota: de cerca de un commit por semana a 41 en siete días.",
  },
];

export const hitos = [
  { fecha: "2026-03-18", titulo: "Primer cambio", cambio: true },
  { fecha: "2026-04-09", titulo: "Noise Zero" },
  { fecha: "2026-07-25", titulo: "Segundo cambio", cambio: true },
  { fecha: "2026-09-07", titulo: "Second Brain" },
  { fecha: "2026-10-20", titulo: "COCKPIT v2" },
];

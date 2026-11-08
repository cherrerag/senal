// Datos del sitio. Fuentes: DECISIONES.md, «Seis meses construyendo con IA» (24 oct 2026),
// los README de cada repo y el historial de git del MacBook Pro M5.

export const nav = [
  { href: "/proyectos", nombre: "Proyectos" },
  { href: "/bitacora", nombre: "Bitácora" },
  { href: "/biblioteca", nombre: "Biblioteca" },
  { href: "/ensayos", nombre: "Ensayos" },
  { href: "/metodo", nombre: "Método" },
  { href: "/ahora", nombre: "Ahora" },
];

export type Proyecto = {
  slug?: string;
  nombre: string;
  resumen: string;
  stack: string[];
  commits: number;
  periodo: string;
  estado: "En producción" | "Activo" | "Pausado";
  foto?: string;
  ola: 1 | 2;
};

export const proyectos: Proyecto[] = [
  { slug: "noise-zero", nombre: "Noise Zero", resumen: "Una sala de escucha hi-fi que se mide a sí misma, ecualiza según el disco y compone la luz con 480 LEDs.", stack: ["ESP32-S3", "Raspberry Pi", "FastAPI", "React", "WiiM"], commits: 171, periodo: "abr → oct 2026", estado: "En producción", foto: "sala", ola: 1 },
  { slug: "cava-musical", nombre: "Cava Musical", resumen: "Catálogo de más de 5.000 álbumes hi-fi con búsqueda semántica, que manda el disco a la sala.", stack: ["Next.js", "Supabase", "pgvector", "Vercel"], commits: 53, periodo: "abr → oct 2026", estado: "En producción", foto: "cava-galeria", ola: 1 },
  { slug: "cockpit", nombre: "COCKPIT", resumen: "Mi centro de mando: una sola fuente de tareas, máximo dos críticas a la vez y un radar de todos los repositorios.", stack: ["Next.js", "Supabase", "Gemini", "PWA"], commits: 62, periodo: "abr → oct 2026", estado: "En producción", foto: "cockpit-board", ola: 1 },
  { slug: "second-brain", nombre: "Second Brain", resumen: "Una bóveda de Markdown que comparten mis proyectos y mis agentes de IA: la memoria que los chats no tienen.", stack: ["Obsidian", "Markdown", "Git"], commits: 85, periodo: "sep → oct 2026", estado: "Activo", foto: "secondbrain-grafo", ola: 1 },
  { slug: "music-map", nombre: "Music Map", resumen: "Una constelación de afinidades entre artistas, que se expande con un clic y termina en una playlist.", stack: ["FastAPI", "React", "D3", "Three.js"], commits: 54, periodo: "ago → sep 2026", estado: "Pausado", foto: "musicmap", ola: 1 },
];

// Los dos cambios, fechados con el historial de commits de los repos del M5.
export const cambios = [
  { fecha: "2026-03-18", titulo: "Primer cambio", texto: "Empieza el primer proyecto. El primer commit de HRH abre todo lo que vino después: sprints, documentos de PO y una IA como equipo." },
  { fecha: "2026-07-25", titulo: "Segundo cambio", texto: "Llega la suscripción y se nota en el ritmo: de cerca de un commit por semana entre junio y julio a 41 en la semana del 20 al 26 de julio, y 95 en una semana de septiembre." },
];

export type Hito = { fecha: string; titulo: string; texto: string; cambio?: boolean };
export const hitos: Hito[] = [
  { fecha: "2026-03-18", titulo: "Primer cambio: HRH", texto: "Primer proyecto con sprints y documentos de PO. Arranca el trabajo con IA como equipo.", cambio: true },
  { fecha: "2026-04-09", titulo: "SALA / Noise Zero", texto: "Hardware ESP32 y Raspberry Pi para la sala de escucha." },
  { fecha: "2026-04-16", titulo: "Cava Musical en Next.js", texto: "El catálogo pasa de scripts a producto web." },
  { fecha: "2026-04-18", titulo: "COCKPIT, proyecto piloto", texto: "Primera adopción de Git, PRD y protocolo de sesión." },
  { fecha: "2026-07-25", titulo: "Segundo cambio: la suscripción", texto: "El ritmo se multiplica. Ese mismo día se escribe la metodología de SALA: los documentos son el estado y ESTADO.md se actualiza en cada cierre.", cambio: true },
  { fecha: "2026-08-14", titulo: "Music Map", texto: "Visualización de afinidades musicales conectada a Cava." },
  { fecha: "2026-08-30", titulo: "SALA cierra su saneamiento", texto: "Línea base verificada antes de integrar nada nuevo. La Raspberry queda autónoma." },
  { fecha: "2026-09-07", titulo: "Second Brain en Obsidian", texto: "Memoria técnica compartida entre proyectos y agentes." },
  { fecha: "2026-09-10", titulo: "Auditoría de 27 directorios", texto: "Tres linajes de código y cuatro antipatrones identificados en /dev." },
  { fecha: "2026-09-12", titulo: "Notion sale de la ruta crítica", texto: "5.087 álbumes en PostgreSQL con búsqueda semántica." },
  { fecha: "2026-10-20", titulo: "COCKPIT v2 «One Only Manager»", texto: "Supabase como fuente única de tareas, cierre de sesión asistido y despliegue continuo." },
  { fecha: "2026-11-07", titulo: "Señal en línea", texto: "Este sitio se publica en claudio.noisezero.dev." },
];

// Commits por semana ISO (suma de los seis repos), para el gráfico de la bitácora.
export const ritmo: [number, number][] = [
  [12, 9], [13, 8], [14, 9], [15, 6], [16, 10], [17, 4], [18, 2], [19, 11], [20, 6], [21, 10], [22, 0], [23, 14], [24, 1], [25, 0], [26, 0], [27, 1], [28, 0], [29, 0],
  [30, 41], [31, 20], [32, 28], [33, 71], [34, 13], [35, 12], [36, 16], [37, 95], [38, 11], [39, 21], [40, 16], [41, 0], [42, 12], [43, 9],
];

export const principios = [
  { t: "Los documentos son el estado, no la conversación.", d: "Cualquier persona o IA debe poder retomar un proyecto leyendo un solo archivo de estado." },
  { t: "Diseñar antes de codificar.", d: "Las fases de diseño producen documentos que reviso; en esas fases la IA tiene prohibido escribir código." },
  { t: "«Confírmame qué entendiste antes de escribir.»", d: "Cada sesión empieza con la IA resumiendo el estado. Si el resumen no cuadra, se corrige antes de que construya sobre una premisa falsa." },
  { t: "Terminado significa verificado.", d: "Una tarea no está lista porque compila, sino cuando existe una prueba ejecutada que demuestra que hace lo que dice." },
  { t: "Una tarea por sesión.", d: "La deuda que aparece en el camino se anota con su evidencia y se sigue con la tarea." },
  { t: "Las decisiones difíciles se escriben.", d: "Un registro de decisión (ADR) por cada alternativa descartada o decisión difícil de revertir; SALA acumula doce." },
  { t: "WIP estricto.", d: "Máximo dos tareas críticas en ejecución. Las ideas nuevas esperan siete días en una incubadora antes de recibir un PRD." },
];

export const antipatrones = [
  { a: "«El build pasó, entonces funciona»", p: "La IA asumió la forma de una API sin consultarla; compiló sin errores y la pantalla quedó vacía.", r: "Verificar ejecutando, no leyendo: toda spec que consume una API exige una prueba de contrato en ejecución." },
  { a: "Documentos que mienten", p: "SALA declaraba cero deuda técnica con su función principal rota.", r: "Un cambio que invalida un documento lo actualiza en el mismo commit." },
  { a: "Contratos implícitos", p: "Tres módulos escribieron su propia versión del mismo payload: causa de 5 de los primeros 16 ítems de deuda.", r: "Un archivo de contratos por proyecto, actualizado con cada cambio de datos." },
  { a: "Notion como base de datos", p: "Tres migraciones del catálogo y roturas cuando alguien renombraba un campo en la interfaz.", r: "Una herramienta sin esquema no es una base transaccional; un solo punto de verdad por integración." },
  { a: "Cuatro scripts para lo mismo", p: "Cada proyecto programaba su propio cargador de Notion o su propio login de TIDAL.", r: "Lo que ya se resolvió se convierte en un servicio compartido, no se copia." },
  { a: "Firmware desde cero", p: "Reescribir el ESP32 entero, con audio y 480 LEDs a la vez, se trabó en el hardware.", r: "Partir de una referencia probada y aplicar cambios pequeños." },
  { a: "El commit de seis sprints", p: "Un solo commit cerró seis sprints: irrevisable e irreversible.", r: "Una tarea por sesión, un commit por tarea." },
  { a: "Auditar la rama equivocada", p: "Dos hallazgos falsos por leer un ESTADO.md desactualizado de otra rama.", r: "La verdad vive en la rama principal; confirmarla es el paso cero." },
  { a: "Probar en la nube lo que solo estaba en local", p: "Se validó en producción un cambio que no se había integrado.", r: "Local primero, rama principal después, producción al final." },
];

export const enciclopedias = [
  { area: "Astrofísica", titulo: "El Universo como Sistema", detalle: "Cosmología observacional, red cósmica, astrofísica estelar y escalas. 4 tomos y 80 capítulos, con fórmulas y tablas.", estado: "En revisión: se rehace en un proyecto propio." },
  { area: "Exploración", titulo: "Misiones Espaciales y Exploración Planetaria", detalle: "De Apolo y Gemini a Artemis, pasando por la exploración robótica profunda y los observatorios en puntos de Lagrange.", estado: "Portal de lectura listo." },
  { area: "Comunicaciones", titulo: "Comunicaciones Espaciales y Redes Interplanetarias", detalle: "Telemetría, enlaces de espacio profundo y redes tolerantes a demoras. Tomo III de la serie del espacio.", estado: "En escritura." },
  { area: "Historia", titulo: "Historia de Chile", detalle: "Diez partes, de la tierra y los primeros pueblos al retorno a la democracia y el pueblo mapuche, con seis apéndices.", estado: "Segunda ola." },
  { area: "Ingeniería", titulo: "Transmisión de Datos 2027", detalle: "Fotónica, DWDM coherente, Carrier Ethernet, SRv6, sincronización 5G y seguridad post-cuántica. 7 tomos, 84 fuentes.", estado: "Segunda ola." },
];

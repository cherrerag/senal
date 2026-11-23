---
titulo: "Seis meses construyendo con IA: el método de un Product Owner"
---

Entre marzo y octubre de 2026 construí seis sistemas de software reales, con 456 commits, sin ser desarrollador de oficio. Soy ingeniero electrónico con MBA y trabajo como Product Owner en telecomunicaciones. Lo hice dirigiendo agentes de IA como si fueran un equipo de desarrollo.

La tesis de este documento es simple: cuando la IA abarata la ejecución, el cuello de botella se mueve a decidir qué construir, especificarlo bien y verificar que funciona. Ese es el trabajo de un Product Owner. Aquí cuento cómo llegué a un método que lo demuestra, qué salió mal y qué principios sobrevivieron.

## Origen

Empecé con problemas propios, no con un plan de carrera. Quería un catálogo curado de música hi-fi conectado a TIDAL, una sala de escucha que reaccionara al sonido y un planificador de alimentación para mi familia.

Mi ventaja no era programar. Era saber descomponer un problema, escribir requisitos y distinguir lo importante del ruido: las herramientas diarias de un PO. Mi desventaja era obvia: no tenía la disciplina técnica de un equipo de ingeniería.

Los primeros meses fueron scripts sueltos, conversaciones largas con la IA y resultados que funcionaban un día y no al siguiente. El problema de fondo apareció rápido: **el contexto vivía en los chats**. Cuando el chat terminaba, el proyecto perdía la memoria.

## Evolución

El método no se diseñó de una vez: lo forzaron tres quiebres. Cada uno fue un fracaso que me obligó a sacar el conocimiento de la conversación y ponerlo en un sistema.

1. **De chats a documentos (julio).** En SALA, los documentos decían "libre de deuda técnica" mientras el feature principal estaba muerto. Nadie lo había ejecutado. Desde ahí, los documentos son el estado del proyecto.
2. **De Notion a una base de datos real (septiembre).** Notion como base transaccional me costó tres migraciones del catálogo y roturas silenciosas. Supabase pasó a ser la fuente única.
3. **De nueve repos sueltos a un sistema operativo personal (octubre).** Con nueve repositorios activos, el problema ya no era técnico sino de foco. Nació COCKPIT v2 como centro de mando único.

| Fecha | Hito | Qué cambió |
| --- | --- | --- |
| 2026-10-20 | COCKPIT v2 "One Only Manager" | Supabase como fuente única de tareas, cierre de sesión asistido y despliegue continuo |
| 2026-09-12 | Notion sale de la ruta crítica de Cava | 5.087 álbumes en PostgreSQL con búsqueda semántica |
| 2026-09-10 | Auditoría de 27 directorios en /dev | Tres linajes de código y cuatro antipatrones identificados |
| 2026-09-07 | Second Brain en Obsidian | Memoria técnica compartida entre proyectos y agentes |
| 2026-08-30 | SALA cierra su hito de saneamiento | Línea base verificada antes de integrar nada nuevo |
| 2026-08-14 | Music Map | Visualización de afinidades musicales conectada a Cava |
| 2026-07-25 | Metodología escrita en SALA | Los documentos son el estado; ESTADO.md en cada cierre |
| 2026-04-18 | COCKPIT, proyecto piloto | Primera adopción de Git, PRD y protocolo de sesión |
| 2026-04-16 | Cava Musical en Next.js | El catálogo pasa de scripts a producto web |
| 2026-04-09 | SALA / Noise Zero | Hardware ESP32 y Raspberry Pi para la sala de escucha |
| 2026-03-18 | HRH | Primer proyecto con sprints y documentos de PO |

## El sistema hoy

Hoy trabajo como un PO con un equipo de agentes: yo decido y verifico, la IA diseña y ejecuta, y el estado vive en archivos, no en la memoria de nadie.

<figure class="esquema" aria-label="El sistema de trabajo hoy: roles, memoria y cierre">
<div class="e-caja e-po"><b>Claudio · Product Owner</b><span>Decide qué construir, define terminado, verifica</span></div>
<div class="e-flecha" aria-hidden="true">↓</div>
<div class="e-fila e-dos">
<div class="e-caja"><b>Arquitecto · Claude.ai y Gemini</b><span>Diseña, escribe specs y audita</span><span>En fase de diseño no escribe código</span></div>
<div class="e-spec" aria-hidden="true"><span class="mono">spec</span><span class="e-f">→</span></div>
<div class="e-caja"><b>Ejecutor · Claude Code</b><span>Implementa una tarea por sesión</span><span>Verifica ejecutando antes de cerrar</span></div>
</div>
<div class="e-flecha e-etq"><span class="mono">leen y escriben el estado</span> ↓</div>
<div class="e-fila e-tres">
<div class="e-caja"><b>Repositorios</b><span>ESTADO.md: dónde estoy hoy</span><span>Contratos de datos</span><span>Decisiones registradas (ADR)</span></div>
<div class="e-caja"><b>Second Brain</b><span>Patrones y antipatrones</span><span>Specs y conocimiento</span><span>Memoria entre proyectos</span></div>
<div class="e-caja"><b>COCKPIT</b><span>Tareas y WIP en Supabase</span><span>Salud de proyectos</span><span>Coach de IA diario</span></div>
</div>
<div class="e-flecha" aria-hidden="true">↓</div>
<div class="e-caja e-cierre"><b>Cierre de sesión asistido <span class="mono">(cierra-sesion)</span></b>
<ol class="e-pasos"><li>build verificado</li><li>commit</li><li>ESTADO al día</li><li>tarea en DONE</li><li>aprobación del PO</li><li>push</li></ol></div>
</figure>

Cada sesión arranca leyendo el estado y termina con un cierre asistido que no deja pasar código sin verificar ni documentos desactualizados.

## Antipatrones y aprendizajes

Casi todos mis errores fueron de producto y de proceso, no de código. La IA escribe código que compila; lo que falla es la especificación, la verificación y la disciplina de cierre. Los documenté en auditorías y retrospectivas para que ni yo ni los agentes los repitamos.

| Antipatrón | Qué pasó | Regla que dejó |
| --- | --- | --- |
| "El build pasó, entonces funciona" | La IA asumió la forma de una API sin consultarla; compiló sin errores y la pantalla quedó vacía | Verificar ejecutando, no leyendo: toda spec que consume una API exige una prueba de contrato en ejecución |
| Documentos que mienten | SALA declaraba cero deuda técnica con su función principal rota | Un cambio que invalida un documento lo actualiza en el mismo commit |
| Contratos implícitos | Tres módulos escribieron su propia versión del mismo payload: causa de 5 de los primeros 16 ítems de deuda | Un archivo de contratos por proyecto, actualizado con cada cambio de datos |
| Notion como base de datos | Tres migraciones del catálogo y roturas cuando alguien renombraba un campo en la interfaz | Una herramienta sin esquema no es una base transaccional; un solo punto de verdad por integración |
| Cuatro scripts para lo mismo | Cada proyecto programaba su propio cargador de Notion o su propio login de TIDAL | Lo que ya se resolvió se convierte en un servicio compartido, no se copia |
| Firmware desde cero | Reescribir el ESP32 entero, con audio y 480 LEDs a la vez, se trabó en el hardware | Partir de una referencia probada y aplicar cambios pequeños |
| El commit de seis sprints | Un solo commit cerró seis sprints: irrevisable e irreversible | Una tarea por sesión, un commit por tarea |
| Auditar la rama equivocada | Dos hallazgos falsos por leer un ESTADO.md desactualizado de otra rama | La verdad vive en la rama principal; confirmarla es el paso cero |
| Probar en la nube lo que solo estaba en local | Se validó en producción un cambio que no se había integrado | Local primero, rama principal después, producción al final |

El aprendizaje transversal: **la IA es un ejecutor excelente y un verificador perezoso**. Si la definición de terminado es débil, la IA cierra la tarea antes de tiempo. La calidad la pone quien escribe la definición de terminado.

## Principios que sobrevivieron

De todo lo que probé, siete reglas resistieron el uso diario en todos los proyectos. Ninguna es técnica en esencia: son reglas de gestión de producto aplicadas a un equipo de agentes.

1. **Los documentos son el estado, no la conversación.** Cualquier persona o IA debe poder retomar un proyecto leyendo un solo archivo de estado.
2. **Diseñar antes de codificar.** Las fases de diseño producen documentos que reviso; en esas fases la IA tiene prohibido escribir código.
3. **"Confírmame qué entendiste antes de escribir."** Cada sesión empieza con la IA resumiendo el estado. Si el resumen no cuadra, se corrige antes de que construya sobre una premisa falsa.
4. **Terminado significa verificado.** Una tarea no está lista porque compila, sino cuando existe una prueba ejecutada que demuestra que hace lo que dice.
5. **Una tarea por sesión.** La deuda que aparece en el camino se anota con su evidencia y se sigue con la tarea.
6. **Las decisiones difíciles se escriben.** Un registro de decisión (ADR) por cada alternativa descartada o decisión difícil de revertir; SALA acumula doce.
7. **WIP estricto.** Máximo dos tareas críticas en ejecución. Las ideas nuevas esperan siete días en una incubadora antes de recibir un PRD.

## Implicancias para el rol de Product Owner

Mi conclusión después de estos meses: la IA no reemplaza al Product Owner, le cambia el centro de gravedad. Cuando construir cuesta poco, el valor está en lo que pasa antes y después del código.

- **La definición de terminado se vuelve la palanca principal de calidad.** Con un equipo humano, un buen desarrollador compensa una historia mal escrita. Un agente de IA no: ejecuta exactamente lo especificado y cierra en cuanto puede.
- **El PO pasa a diseñar el contexto, no solo el backlog.** Archivos de estado, contratos y decisiones registradas son lo que permite que un agente trabaje bien. Eso es documentación de producto con otro lector.
- **Verificar es parte del rol.** Exigir evidencia ejecutada, no reportes de avance, deja de ser tarea de QA y pasa a ser criterio de aceptación diario.
- **El foco es el recurso escaso.** Con ejecución barata, la tentación es abrir proyectos sin límite. Gestionar WIP y saber congelar es más importante que nunca; este documento nació justamente de una limpieza de portafolio.
- **El PO puede validar con software real, no con maquetas.** La distancia entre una idea y un prototipo funcional se redujo de semanas a sesiones.

La pregunta abierta que me interesa explorar: cómo se ven estos principios en un equipo de telecomunicaciones real, donde el contexto es más grande, regulado y compartido entre muchas personas.

## Lo que construí

Seis sistemas y 456 commits entre marzo y octubre de 2026; tres corren hoy en producción. El estado refleja la limpieza de portafolio de octubre: pausar también es una decisión de producto.

| Proyecto | Qué hace | Stack principal | Commits | Estado |
| --- | --- | --- | --- | --- |
| SALA / Noise Zero | Sala de escucha hi-fi con análisis acústico, tira de 480 LEDs y kiosco táctil | ESP32-S3, Raspberry Pi, FastAPI, React, WiiM, TIDAL | 171 | En producción, pausado |
| Second Brain | Memoria técnica compartida entre proyectos y agentes de IA | Obsidian, Markdown, Git | 85 | Activo |
| COCKPIT | Centro de mando personal: tareas, WIP, salud de proyectos y coach de IA | Next.js, Supabase, Gemini, Vercel | 62 | En producción, activo |
| Music Map | Constelación interactiva de afinidades entre artistas | FastAPI, React, D3 | 54 | Pausado |
| Cava Musical | Catálogo curado de 5.087 álbumes hi-fi con búsqueda semántica | Next.js, Supabase, pgvector, Vercel | 53 | En producción, pausado |
| HRH | Planificador de alimentación familiar con agente de IA | FastAPI, Next.js, Claude API | 31 | Congelado |

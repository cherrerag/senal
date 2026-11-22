---
titulo: La capa de transporte de la SDA y los láseres que no se entienden entre sí
parte: V
parte_titulo: ¿Cómo se comunican los gobiernos y las fuerzas armadas por satélite, y cómo se orienta el mundo?
orden: 59
---

*El Pentágono está construyendo una red de cientos de satélites unidos por láser, y su mayor problema no es apuntar la luz: es que los terminales de distintos fabricantes hablen el mismo idioma.*

<div class="galeria"><figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_83da042ff38d.jpg" alt="La visión de la SDA: una malla de cientos de satélites en órbita baja, con las órbitas media y geoestacionaria más arriba, y sus usos (seguimiento de misiles, navegación alterna, gestión de batalla)." loading="lazy" /><figcaption>La visión de la SDA: una malla de cientos de satélites en órbita baja, con las órbitas media y geoestacionaria más arriba, y sus usos (seguimiento de misiles, navegación alterna, gestión de batalla). <span class="credito">Fuente: Space Development Agency (dominio público)</span></figcaption></figure><figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0020_h_03fb4b3e9481.jpg" alt="Enlaces ópticos entre satélites de órbita baja que reencaminan datos de forma dinámica, con un nodo de relevo geoestacionario y una estación terrena." loading="lazy" /><figcaption>Enlaces ópticos entre satélites de órbita baja que reencaminan datos de forma dinámica, con un nodo de relevo geoestacionario y una estación terrena. <span class="credito">Fuente: Woodrow Scientific, Software Defined Satellites: Architecture & Challenges (2026)</span></figcaption></figure><p class="galeria-pie">De la arquitectura al enlace: a la izquierda, la malla de la SDA en capas según su propia presentación; a la derecha, un esquema genérico de cómo los enlaces ópticos entre satélites reencaminan los datos sin pasar por tierra. El reto de la capa de transporte es que esos láseres de distintos fabricantes se entiendan entre sí.</p></div>


Imagine dos trenes que corren por vías paralelas a casi 8 km por segundo, y que un pasajero de cada uno debe pasarle al otro un mensaje con una linterna. Así describe la GAO el desafío de un enlace láser entre satélites en órbita baja. Cuando van en el mismo plano orbital, como vagones de un mismo tren, basta encontrarse una vez. Cuando van en planos distintos, se acercan, se cruzan y se alejan, y cada satélite debe saltar a otro vecino antes de perder la conexión.

Sobre esos enlaces se apoya la arquitectura de la **Agencia de Desarrollo Espacial** (SDA, por su sigla en inglés), creada por el Congreso para mudar a la órbita baja misiones que antes dependían de pocos satélites grandes y lejanos, a los que un funcionario llamó "blancos grandes, gordos y jugosos". Su red, la PWSA, prevé al menos 300 a 500 satélites en dos capas principales: una de **seguimiento**, que detecta misiles, y una de **transporte**, que mueve los datos por la constelación y hacia tierra, mar y aire. El DOD había comprometido casi 11.000 millones de dólares desde 2020 y planea gastar casi 35.000 millones hasta el año fiscal 2029.

## Por qué láser

Los enlaces ópticos entre satélites (en la industria, ISL ópticos; aquí, terminales ópticos u OCT) transmiten entre 10 y 40 veces más rápido que la radio, con un haz unas 1.000 veces más angosto, difícil de interceptar. Además no usan espectro regulado. El precio es la precisión: vibraciones, cambios de temperatura y nubes (en los enlaces a tierra) pueden cortar la conexión.

## Lo que mostró el primer lote

La SDA construye por "tramos" (*tranches*) cada dos años. El tramo 0, de demostración, tenía 28 satélites; se lanzaron 27, entre abril de 2023 y comienzos de 2024, con más de un año de atraso. La GAO identificó ocho capacidades láser que debía probar. A diciembre de 2024, un contratista había demostrado tres y otro una; los otros dos, ninguna. El primer enlace entre satélites le tomó a un contratista unos 11 meses. Y el hito clave, conectar en el espacio terminales de **fabricantes distintos**, seguía pendiente: el enlace entre satélites de York y SpaceX usaba terminales del mismo proveedor.

Aun así, la SDA siguió adelante con contratos por casi 10.000 millones de dólares para los tramos 1 y 2, con 165 y 264 satélites y unas diez veces más terminales láser que el tramo 0. Al menos cuatro desarrolladores de terminales trabajan para nueve contratistas principales. La GAO recomendó demostrar lo básico antes de seguir; el DOD aceptó con comentarios.

## El problema del idioma

Para que todos se entiendan, la SDA escribió su propio estándar óptico. Fija una velocidad de 2,5 Gbit/s, mientras algunos productos comerciales llegan a 100 Gbit/s: cuarenta veces menos, en parte porque el cifrado militar no soporta tasas mayores. El estándar cambió entre tramos, y la versión 4.0, de junio de 2024, pensada para enlaces más allá de la órbita baja, fue calificada por los contratistas de "revolucionaria", con posibles cambios de hardware.

En noviembre de 2026, el problema escaló. Según Breaking Defense, la capa de seguimiento de la SDA, la nueva red troncal de datos de la Fuerza Espacial (Space Data Network Backbone, que construye SpaceX) y los satélites de alerta de misiles en órbita media usan estándares ópticos distintos y no son compatibles. La SDA contrató a SpaceX por 9,9 millones de dólares, con opciones hasta casi 12,7 millones, para estudiar cómo integrar sus terminales láser "Plaser" con los satélites de seguimiento. Las alternativas en estudio: satélites "traductores" que lleven terminales de ambos estándares, comprar terminales de SpaceX para los próximos satélites o escribir un estándar nuevo.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Quién fija el estándar óptico del futuro?</p>


Puede que no lo fije un comité, sino el volumen. El estándar de la SDA nació para que muchos proveedores compitieran; la red troncal de SpaceX nace del fabricante que más terminales láser tiene en órbita. Si el Pentágono termina comprando terminales de SpaceX para hablar con su propia red, el estándar de facto será el de un privado. Para un fabricante de terminales ópticos, la pregunta comercial es con quién debe ser compatible su producto en 2030, y la respuesta todavía está abierta.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


Un satélite en órbita baja ve una estación terrena durante unos 10 minutos por pasada, según la GAO. Por eso los equipos del tramo 0 tuvieron problemas incluso para coordinar las pruebas: cada intento de diagnóstico y cada actualización de software debía caber en esas ventanas.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Inversión prevista en la PWSA:** casi 35.000 millones de dólares hasta el año fiscal 2029.
- **Tramos:** T0 = 28 satélites (657 millones); T1 = 165 (3.674 millones); T2 = 264 (6.267 millones).
- **Estándar óptico SDA:** 2,5 Gbit/s; enlaces exigidos de hasta 6.500 km.
- **Contrato SpaceX (noviembre de 2026):** 9,9 millones de dólares, opciones hasta 12,7 millones, trabajo hasta el 7 de octubre de 2027.
- [Laser Communications: Space Development Agency Should Create Links Between Development Phases (GAO-25-106838)](https://files.gao.gov/reports/GAO-25-106838/index.html) — GAO, 2025 (S0092): la auditoría de los enlaces láser de la SDA, capacidad por capacidad.
- [SDA explores integration of SpaceX laser communication terminals with missile tracking sats](https://breakingdefense.com/2026/11/sda-explores-integration-of-spacex-laser-communication-terminals-with-missile-tracking-sats/) — Breaking Defense, 2026 (S0017): la incompatibilidad entre estándares y el estudio con SpaceX.

</aside>

**Puertas:** [Cómo se arma la red: láseres entre satélites, gateways y puntos de presencia](/biblioteca/cielo_conectado/parte-ii/ii-14-como-se-arma-la-red-laseres-entre-satelites-gatewa), [Láser en todas partes: la red óptica como columna vertebral](/biblioteca/cielo_conectado/parte-xii/xii-7-laser-en-todas-partes-la-red-optica-como-columna-v), [Rocket Lab: lanzador y fabricante de satélites para la SDA](/biblioteca/cielo_conectado/parte-viii/viii-6-rocket-lab-lanzador-y-fabricante-de-satelites-para), [Láser a 100 Gbps: el relay óptico de próxima generación](/biblioteca/cielo_conectado/parte-vi/vi-6-laser-a-100-gbps-el-relay-optico-de-proxima-genera), [Comprar en vez de construir: la estrategia comercial de la Fuerza Espacial](/biblioteca/cielo_conectado/parte-v/v-6-comprar-en-vez-de-construir-la-estrategia-comercia)

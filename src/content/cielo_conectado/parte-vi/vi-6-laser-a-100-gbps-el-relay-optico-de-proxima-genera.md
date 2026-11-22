---
titulo: 'Láser a 100 Gbps: el relay óptico de próxima generación'
parte: VI
parte_titulo: ¿Cómo se comunican la ciencia y la exploración?
orden: 76
---

*Pasar de radio a luz multiplica la capacidad por cien, pero basta una nube sobre la estación para que el enlace se corte.*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_393f3282adb7.jpg" alt="El terminal espacial del LLCD en una sala limpia, antes de volar en la nave LADEE. Desde la órbita de la Luna envió datos a 622 megabits por segundo en 2013." loading="lazy" /><figcaption>El terminal espacial del LLCD en una sala limpia, antes de volar en la nave LADEE. Desde la órbita de la Luna envió datos a 622 megabits por segundo en 2013. <span class="credito">Fuente: NASA (dominio público)</span></figcaption></figure>


En 2013, una pequeña nave llamada LADEE orbitaba la Luna con un terminal láser a bordo. Desde 400.000 kilómetros mandó datos a la Tierra a 622 megabits por segundo, y recibió desde tierra a 20 megabits por segundo. Funcionó sin errores incluso apuntando a 3 grados del Sol en pleno día. Esa demostración, llamada LLCD (Lunar Laser Communications Demonstration), convenció a la NASA de que el láser no era un experimento curioso, sino el reemplazo natural de la radio para mover grandes volúmenes de datos.

## Por qué la luz cabe más

La radio y el láser viajan a la misma velocidad; la diferencia está en la frecuencia. La banda Ka llega hasta 40 GHz, mientras que una señal óptica alcanza unos 200.000 GHz. Según la NASA, eso permite tasas de datos entre 10 y 100 veces mayores que la radio, con equipos más chicos, livianos y de menor consumo. Como el haz es muy estrecho, también es más difícil de interceptar. Y hay una ventaja regulatoria que interesa a cualquier operador: los enlaces ópticos no requieren licencia de espectro, según destaca uno de los fabricantes de estaciones.

La cuenta muestra el salto. Mover 1 terabyte por el mejor enlace de radio de TDRS, a 1,2 gigabits por segundo, toma casi dos horas. A 100 gigabits por segundo toma 80 segundos.

## La arquitectura que diseña la NASA

El Centro Goddard de la NASA, junto con el Laboratorio Lincoln del MIT, diseñó una red de relay óptico de próxima generación. El documento que la describe, publicado en el sitio de la NASA en 2025, refleja el plan tal como se concibió antes del lanzamiento del demostrador LCRD, que en ese texto aún estaba previsto para 2019. El primer nodo, llamado LOCNESS, debía estar en órbita geoestacionaria hacia 2025, y un segundo nodo sería provisto por la industria mediante una asociación público-privada. Las fuentes de este atlas no confirman si LOCNESS llegó a lanzarse.

El diseño es lo que interesa. Cada nodo lleva cuatro terminales ópticos iguales, con telescopios de 22 centímetros. Recibe datos de las naves cliente a 10 gigabits por segundo y los reenvía a más de 100 gigabits por segundo, ya sea hacia tierra o hacia otro nodo. El módem de 100 gigabits no es un invento espacial: viene de la industria de la fibra óptica, con chips de fotónica de silicio y procesadores digitales coherentes calificados para el espacio. Para un ingeniero de telecomunicaciones la escena es familiar: es tecnología de red troncal terrestre puesta en órbita.

## El problema de las nubes

La radio atraviesa las nubes; el láser no. La NASA lo dice sin rodeos: un enlace óptico hacia tierra no funciona si la estación está bajo cubierta nubosa. La respuesta del diseño tiene tres capas. Primero, los nodos se hablan entre sí: si la estación que ve un nodo está nublada, el dato salta a otro nodo que vea una estación despejada. TDRS nunca pudo hacer eso, porque sus satélites solo hablan con tierra. Segundo, cada nodo lleva un enlace de respaldo en banda Ka de alrededor de 1 gigabit por segundo, que no depende del clima y sirve también a quien necesita baja latencia. Tercero, a bordo hay almacenamiento con redes tolerantes a interrupciones (DTN): si no hay camino libre, el dato espera en el nodo y sale cuando se abre un enlace.

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0106_p005_af896f5571da.jpg" alt="Esquema de la NASA del problema de las nubes: si una nube tapa la estación óptica, un nodo con redes tolerantes a interrupciones (DTN, arriba) puede retener los datos o desviarlos. El LCRD, sin DTN (abajo), no puede." loading="lazy" /><figcaption>Esquema de la NASA del problema de las nubes: si una nube tapa la estación óptica, un nodo con redes tolerantes a interrupciones (DTN, arriba) puede retener los datos o desviarlos. El LCRD, sin DTN (abajo), no puede. <span class="credito">Fuente: NASA Goddard, en «NASA's Next Generation >100 Gbps Optical Communications Relay» (2025)</span></figcaption></figure>


En tierra, eso cambia la lógica de dónde construir. Con radio, una buena estación es la que tiene la mejor vista del cielo. Con láser, importa más tener varias estaciones en climas distintos, porque la probabilidad de que todas estén nubladas a la vez es baja. La NASA lo llama diversidad espacial. Las estaciones ópticas, a cambio, son más chicas: para órbita baja bastan telescopios de 40 a 60 centímetros; para el espacio profundo hacen falta de 3 a 8 metros.

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0116_p061_ea8b17277912.jpg" alt="El OCTL del JPL en Table Mountain (California): una estación óptica con apertura de 1 metro dentro de una cúpula, muy lejos del tamaño de un plato de radio de espacio profundo." loading="lazy" /><figcaption>El OCTL del JPL en Table Mountain (California): una estación óptica con apertura de 1 metro dentro de una cúpula, muy lejos del tamaño de un plato de radio de espacio profundo. <span class="credito">Fuente: NASA/JPL, en «SOA: Ground Data Systems and Mission Operations» (2026)</span></figcaption></figure>


## Quién construye la tierra óptica

Durante una década el sector sufrió un problema del huevo y la gallina, según la NASA: nadie ponía terminales ópticos en los satélites porque no había estaciones en tierra, y nadie construía estaciones porque había pocos satélites. Eso empieza a cambiar. En Europa, la ESA, el centro aeroespacial alemán DLR y KSAT formaron una red óptica común. La primera estación comercial, en Nemea (Grecia), soporta hasta 3 gigabits por segundo; el informe la da como operativa desde 2021 en un pasaje y desde 2022 en otro. Cailabs vende estaciones de más de 10 gigabits por segundo para órbita baja, tiene unidades en Francia y en Australia Occidental (esta última operada por SSC) y, tras levantar 67 millones de dólares, apunta a fabricar 50 estaciones por año en 2027.

Los operadores comerciales ya están en el juego. SpaceX movió datos por láser entre la Dragon y Starlink durante las misiones tripuladas Polaris Dawn y Fram2. Amazon y Telesat preparan demostraciones ópticas para la NASA. Europa opera su sistema de relay de datos EDRS, que con terminales láser de 1,8 gigabits por segundo entre órbita baja y geoestacionaria sirve a los satélites Sentinel de Copernicus y reduce la espera de los datos de horas a minutos.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Qué cambia en el segmento terrestre?</p>


Con radio, el activo escaso es el espectro y la antena grande. Con láser, el activo escaso es tener muchas estaciones pequeñas en lugares con cielos despejados y climas distintos, conectadas por fibra. Para un proveedor de estaciones como servicio, eso significa más sitios y menos licencias. Para un país con desiertos claros o buena estadística de cielo despejado, es una oportunidad de convertirse en nodo óptico de la red.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


Las estaciones ópticas detectan la luz fotón a fotón. Para captar señales muy débiles usan detectores de nanohilos superconductores enfriados a 1 kelvin, apenas un grado por encima del cero absoluto.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **LLCD (2013):** 622 Mbps de bajada y 20 Mbps de subida desde 400.000 km.
- **LCRD:** 1,244 Gbps con estaciones en Table Mountain (California) y Haleakala (Hawái).
- **Arquitectura de próxima generación:** 10 Gbps por usuario; más de 100 Gbps entre nodos y hacia tierra; respaldo Ka de 1 Gbps; cuatro terminales de 22 cm por nodo.
- **Estaciones ópticas:** 40–60 cm para órbita baja; 3–8 m para espacio profundo.
- **Cailabs:** más de 10 Gbps por estación; 67 millones de dólares levantados; meta de 50 estaciones por año en 2027.
- **EDRS:** 1,8 Gbps entre órbita baja y geoestacionaria.
- [NASA's Next Generation >100 Gbps Optical Communications Relay](https://www.nasa.gov/wp-content/uploads/2025/09/nasas-next-generation-100-gbps-optical-communications-relay.pdf) — NASA Goddard, 2025 (S0106): la arquitectura del relay óptico y el manejo de las nubes.
- [SOA: Ground Data Systems and Mission Operations](https://www.nasa.gov/wp-content/uploads/2026/05/11-soa-ground-data-systems-2026-final.pdf) — NASA, 2026 (S0116): estaciones ópticas en el mundo, proveedores y requisitos.
- [NASA's Push Toward Commercial Space Communications Gains Momentum](https://www.nasa.gov/technology/space-comms/nasas-push-toward-commercial-space-communications-gains-momentum/) — NASA, 2025 (S0107): las demostraciones ópticas de SpaceX, Amazon y Telesat.
- [Software Defined Satellites: Architecture & Challenges (2026)](https://woodrowscientific.com/blog/satellites-reconfigurable-via-software-updates) — Woodrow Scientific, 2026 (S0020): EDRS y los enlaces láser entre satélites.

</aside>

**Puertas:** [La Deep Space Network y sus pares: cómo se escucha el espacio profundo](/biblioteca/cielo_conectado/parte-vi/vi-2-la-deep-space-network-y-sus-pares-como-se-escucha-), [La NASA sale a comprar: 278,5 millones de dólares para relay comercial](/biblioteca/cielo_conectado/parte-vi/vi-4-la-nasa-sale-a-comprar-278-5-millones-de-dolares-p), [Cómo se arma la red: láseres entre satélites, gateways y puntos de presencia](/biblioteca/cielo_conectado/parte-ii/ii-14-como-se-arma-la-red-laseres-entre-satelites-gatewa), [La capa de transporte de la SDA y los láseres que no se entienden entre sí](/biblioteca/cielo_conectado/parte-v/v-5-la-capa-de-transporte-de-la-sda-y-los-laseres-que-), [Láser en todas partes: la red óptica como columna vertebral](/biblioteca/cielo_conectado/parte-xii/xii-7-laser-en-todas-partes-la-red-optica-como-columna-v)

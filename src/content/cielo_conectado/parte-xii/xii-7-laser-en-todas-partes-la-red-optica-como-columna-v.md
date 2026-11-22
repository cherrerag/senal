---
titulo: 'Láser en todas partes: la red óptica como columna vertebral'
parte: XII
parte_titulo: ¿Qué viene hasta 2035?
orden: 141
---

*Miles de satélites ya hablan entre sí con luz; el problema es que todavía hablan idiomas distintos.*

En noviembre de 2026, la Agencia de Desarrollo Espacial de EE.UU. (SDA) adjudicó a SpaceX un contrato de 9,9 millones de dólares para un estudio poco glamoroso: averiguar cómo hacer que sus satélites de seguimiento de misiles se entiendan con los terminales láser de SpaceX. El motivo, según Breaking Defense, es que los terminales de la red troncal que SpaceX construye para la Fuerza Espacial, los de la capa de seguimiento de la SDA y los de los satélites de alerta en órbita media usan cada uno un estándar óptico distinto. Son incompatibles. El Pentágono invirtió miles de millones en redes láser y ahora paga por estudiar cómo traducirlas.

Esa escena resume el estado de la tecnología. El láser ya es la columna vertebral de las grandes constelaciones: Starlink mueve su tráfico entre satélites con enlaces ópticos, y SpaceX le dijo a la Oficina de Rendición de Cuentas (GAO) que establecer y mantener esos enlaces es "muy difícil". Lo que falta no es el láser, sino un idioma común entre fabricantes.

## Por qué todos quieren luz

La GAO resume las ventajas con cifras. Un enlace láser transmite entre 10 y 40 veces más rápido que uno de radio, con un haz unas 1.000 veces más angosto. Eso lo hace difícil de interceptar, y además no necesita licencia de espectro: en EE.UU. el láser no se regula, porque el riesgo de interferencia es bajo. Los terminales son más livianos y gastan menos energía que un equipo de radio equivalente.

Las desventajas son mecánicas y atmosféricas. Dos satélites que cruzan órbitas distintas deben apuntarse, engancharse y seguirse mientras se mueven a unos 7,7 km por segundo; la mínima vibración degrada el enlace. Hacia tierra, las nubes cortan la luz, algo que la radio casi no sufre. Por eso la NASA diseña su próximo relay óptico con un enlace complementario en banda Ka para el tráfico que no puede esperar (ver [Láser a 100 Gbps: el relay óptico de próxima generación](/biblioteca/cielo_conectado/parte-vi/vi-6-laser-a-100-gbps-el-relay-optico-de-proxima-genera)).

<div class="galeria"><figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0108_h_a3e192b1466c.jpg" alt="Recreación del LCRD de la NASA, el relay láser en órbita geoestacionaria: dos haces de luz roja muy angostos salen del satélite, que debe apuntarlos con precisión extrema." loading="lazy" /><figcaption>Recreación del LCRD de la NASA, el relay láser en órbita geoestacionaria: dos haces de luz roja muy angostos salen del satélite, que debe apuntarlos con precisión extrema. <span class="credito">Fuente: NASA</span></figcaption></figure><figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_393f3282adb7.jpg" alt="Terminal espacial del LLCD, el primer sistema láser de alta tasa de la NASA, en la sala limpia." loading="lazy" /><figcaption>Terminal espacial del LLCD, el primer sistema láser de alta tasa de la NASA, en la sala limpia. <span class="credito">Fuente: NASA (dominio público)</span></figcaption></figure><figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_c639b001aa80.jpg" alt="DSS-13, antena experimental de 34 metros en Goldstone, con un terminal óptico bajo el centro del plato." loading="lazy" /><figcaption>DSS-13, antena experimental de 34 metros en Goldstone, con un terminal óptico bajo el centro del plato. <span class="credito">Fuente: NASA/JPL-Caltech (dominio público)</span></figcaption></figure><p class="galeria-pie">Del espacio al suelo, el láser ya tiene hardware real. Un relay óptico en órbita, el terminal de vuelo del primer sistema láser de alta tasa de la NASA y una antena de Goldstone con un receptor óptico bajo el plato muestran que el problema no es la luz, sino apuntarla y entenderse con ella.</p></div>


## Tres idiomas para la misma luz

Hoy compiten tres familias de estándares. La primera es el **estándar OCT de la SDA**, escrito por el gobierno para que terminales de distintos fabricantes se conecten en su red militar. Usa 2,5 Gbps, bastante menos que los 100 Gbps de algunos productos comerciales, en parte porque el cifrado militar no soporta tasas mayores. Cambió entre tandas, y su versión 4.0, de junio de 2024, fue calificada por los contratistas de "revolucionaria", con cambios de hardware y software.

La segunda es la del **CCSDS**, el Comité Consultivo de Sistemas de Datos Espaciales que reúne a las agencias civiles. La NASA pide a empresas y gobiernos que quieran conectarse con su red óptica de relay que sigan esas guías. La tercera son los **estándares propietarios**, como el de los terminales de SpaceX, que se imponen por volumen: son los que ya están en órbita en mayor cantidad.

Los resultados de interoperabilidad son modestos. A diciembre de 2024, la SDA había logrado un enlace entre satélites de York Space Systems y de SpaceX, pero ambos usaban terminales del mismo fabricante, así que la prueba entre dos proveedores de terminales distintos seguía pendiente. Según la GAO, hay al menos cuatro desarrolladores de terminales repartidos entre nueve contratistas principales.

## La salida: traductores, compras o un estándar nuevo

Para unir sus redes, el Pentágono maneja tres caminos según Breaking Defense: satélites traductores llamados Space Exchange Points, comprar terminales de SpaceX para los futuros satélites de seguimiento o escribir un estándar nuevo. En tierra ya aparecen productos que hablan varios idiomas: Woodrow Scientific ofrece un amplificador óptico para estaciones que cambia por software entre CCSDS, SDA y formatos propietarios.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Quién va a fijar el estándar?</p>


Las fuentes apuntan a un empate de dos fuerzas. Por volumen, el que tiene más terminales en órbita: SpaceX, que además construye la red troncal militar de EE.UU. Por mandato, los gobiernos: la SDA en defensa y el CCSDS en ciencia. Para un operador comercial que quiera vender transporte óptico a gobiernos o a otras constelaciones, la decisión práctica es soportar más de un estándar o usar traductores. Para un fabricante de terminales, ser compatible con el estándar del cliente más grande vale más que tener el enlace más rápido.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


Novaspace pone "más de 50.000 terminales láser en órbita" entre las cifras que definen el futuro de las comunicaciones satelitales, y en mayo de 2026 tituló un comunicado así: las comunicaciones ópticas espaciales se convierten en un mercado estratégico de 12.900 millones de dólares.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Ventaja del láser:** entre 10 y 40 veces más tasa que la radio, haz unas 1.000 veces más angosto (GAO).
- **Estándar OCT de la SDA:** 2,5 Gbps; versión 4.0 de junio de 2024.
- **Relay óptico de próxima generación de la NASA:** más de 100 Gbps hacia tierra, usuarios de hasta 10 Gbps.
- **Contrato SDA–SpaceX:** 9,9 millones de dólares, con opciones hasta casi 12,7 millones, hasta el 7 de octubre de 2027.
- [GAO-25-106838, Laser Communications](https://files.gao.gov/reports/GAO-25-106838/index.html) — GAO, 2025 (S0092): ventajas, desafíos y el estándar óptico de la SDA.
- [SDA explores integration of SpaceX laser communication terminals with missile tracking sats](https://breakingdefense.com/2026/11/sda-explores-integration-of-spacex-laser-communication-terminals-with-missile-tracking-sats/) — Breaking Defense, 2026 (S0017): la incompatibilidad entre redes ópticas militares.
- [NASA's Next Generation 100 Gbps Optical Communications Relay](https://www.nasa.gov/wp-content/uploads/2025/09/nasas-next-generation-100-gbps-optical-communications-relay.pdf) — NASA Goddard, 2025 (S0106): la red óptica civil y los estándares CCSDS.
- [Software Defined Satellites: Architecture & Challenges](https://woodrowscientific.com/blog/satellites-reconfigurable-via-software-updates) — Woodrow Scientific, 2026 (S0020): un equipo de tierra que habla varios estándares ópticos.
- [The Next Chapter of Satellite Communications](https://nova.space/wp-content/uploads/2026/11/White-Paper_SWISSto12_The-Next-Chapter-of-Satellite-Communications_Novaspace.pdf) — SWISSto12 y Novaspace, 2026 (S0048): terminales láser en órbita.

</aside>

**Puertas:** [Cómo se arma la red: láseres entre satélites, gateways y puntos de presencia](/biblioteca/cielo_conectado/parte-ii/ii-14-como-se-arma-la-red-laseres-entre-satelites-gatewa), [La capa de transporte de la SDA y los láseres que no se entienden entre sí](/biblioteca/cielo_conectado/parte-v/v-5-la-capa-de-transporte-de-la-sda-y-los-laseres-que-), [Láser a 100 Gbps: el relay óptico de próxima generación](/biblioteca/cielo_conectado/parte-vi/vi-6-laser-a-100-gbps-el-relay-optico-de-proxima-genera), [¿Datacenters en el espacio? Lo que hay detrás de la idea](/biblioteca/cielo_conectado/parte-xii/xii-6-datacenters-en-el-espacio-lo-que-hay-detras-de-la-), [Tres escenarios para 2035: un dominante, dos bloques o un ecosistema](/biblioteca/cielo_conectado/parte-xii/xii-10-tres-escenarios-para-2035-un-dominante-dos-bloques)

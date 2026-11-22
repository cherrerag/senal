---
titulo: 'Interferencia, jamming y spoofing: cómo se ataca una señal'
parte: XI
parte_titulo: ¿Qué riesgos amenazan a las redes satelitales?
orden: 129
---

*"Bajo un ataque de bloqueo, todos nuestros sistemas se ponen en negro", dice un piloto de ambulancia aérea noruego, y agrega: "la suplantación es peor".*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0013_h_0e64918938d6.jpg" alt="Una antena de navegación por satélite sobre su trípode, lista para ser bloqueada durante el ensayo Jammertest, en Noruega. Nada en el equipo delata la interferencia: el receptor sigue pareciendo normal mientras deja de funcionar." loading="lazy" /><figcaption>Una antena de navegación por satélite sobre su trípode, lista para ser bloqueada durante el ensayo Jammertest, en Noruega. Nada en el equipo delata la interferencia: el receptor sigue pareciendo normal mientras deja de funcionar. <span class="credito">Fuente: ESA, ensayo Jammertest 2025</span></figcaption></figure>


Lars Amdal pilotea helicópteros de la ambulancia aérea de Noruega. En un artículo de la ESA de 2025 explica la diferencia entre dos ataques que conoce de primera mano. Con el bloqueo (*jamming*), el receptor se satura con una señal más fuerte y deja de funcionar: el piloto sabe que está a ciegas. Con la suplantación (*spoofing*), el receptor recibe señales falsas que parecen verdaderas. "Vemos nuestra posición movida a otro lugar y no podemos saber si somos nosotros los que nos movemos o la señal". Hay una variante más difícil de detectar, el *meaconing*: alguien capta señales reales, las retrasa y las retransmite. Engaña al receptor con señales auténticas.

## Barato, común y cada vez más frecuente

La señal que llega de un satélite a tierra es muy débil, y por eso es tan fácil de tapar†. El CSIS clasifica el bloqueo y la suplantación como armas electrónicas, que no destruyen nada y solo actúan mientras el emisor está encendido. Se puede atacar la subida, hacia el satélite, o la bajada, hacia el usuario, con equipos tan simples como un transmisor montado en un camión. El CSIS destaca que la tecnología para bloquear y suplantar muchas señales satelitales está "disponible comercialmente y es barata". Por eso se extiende entre Estados y grupos no estatales por igual, y la interferencia regional indiscriminada se volvió "la nueva normalidad" de los conflictos.

Los casos se acumulan. En marzo de 2023, la aerolínea Qantas y la federación internacional de pilotos advirtieron sobre buques de guerra chinos que bloqueaban radio y GPS en el mar de China Meridional, el mar de Filipinas, el este del océano Índico y el noroeste de Australia. Rusia fue señalada por interferencias de GPS en Polonia, Escandinavia y los países bálticos. Hamas habría usado bloqueadores para apoyar su ataque del 7 de octubre de 2023. Y en el segundo trimestre de 2025, más de 10.000 barcos en el mundo reportaron interferencia maliciosa, ocho veces más que en el primer trimestre, según la ESA.

La navegación por satélite es el blanco más visible porque todos la usan, pero las comunicaciones también sufren. En noviembre de 2023, el satélite de radar Sentinel-1 de la ESA registró interferencias mientras fotografiaba Sebastopol. Algunos expertos citados por el CSIS lo atribuyen a sistemas rusos de guerra electrónica pensados contra drones y no contra satélites. En Ucrania, según un funcionario de defensa de Estados Unidos citado por el mismo informe, Starlink actualizó sus terminales a comienzos de la guerra para resistir los intentos rusos de bloqueo.

## Cómo se defiende un operador

Hay tres capas. La primera es la antena. Una antena común escucha en todas direcciones. Una antena de patrón de recepción controlado, que la industria llama CRPA, puede concentrarse en los satélites y "hacerse sorda" hacia donde viene la interferencia. En el Salón Aeronáutico de París de 2025, la ESA firmó un contrato con la italiana Leonardo para usar aprendizaje automático en estas antenas. La meta es hacerlas más chicas y livianas, útiles en aviones, y que se reajusten más rápido. El objetivo es un prototipo probado en laboratorio en dos años, es decir, tecnología todavía en desarrollo.

La segunda capa es saber qué está pasando. El programa de innovación en navegación de la ESA (NAVISP) financió tres proyectos para monitorear y mapear la interferencia. La tercera es la propia señal. Galileo suma mejoras graduales como más frecuencias, mayor ancho de banda y autenticación del mensaje de navegación, y la ESA promete un salto mayor con su segunda generación. En comunicaciones militares, Estados Unidos sigue el mismo camino con formas de onda diseñadas para resistir el bloqueo ([Antiinterferencia: el Protected Tactical SATCOM y su cambio de rumbo](/biblioteca/cielo_conectado/parte-v/v-4-antiinterferencia-el-protected-tactical-satcom-y-s)).


<aside class="recuadro sirve">
<p class="recuadro-t">¿Qué capacidad de detección necesita un operador para vender servicio garantizado?</p>


Necesita poder responder tres preguntas en minutos: si hay interferencia, dónde está y si es accidental o deliberada. Sin esa capacidad, un operador no puede distinguir una falla propia de un ataque ni defender un acuerdo de nivel de servicio. El CSIS plantea un problema adicional para quien opera en zonas de guerra: hay que mantener el servicio a los usuarios "buenos" pese al bloqueo y, al mismo tiempo, negárselo a los "malos" que usan los mismos terminales. Eso exige monitoreo propio del espectro, terminales que se actualicen a distancia y acuerdos con los gobiernos.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


La interferencia no siempre viene de un atacante. El clima espacial también la produce: las partículas cargadas que el Sol inyecta en la ionosfera pueden alterar o retrasar las señales de navegación, según la ESA.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Barcos afectados por interferencia maliciosa:** más de 10.000 en el segundo trimestre de 2025, ocho veces más que en el primero.
- **Peso económico:** el 10% del PIB europeo depende de la navegación por satélite; un corte costaría del orden de miles de millones de euros diarios a Europa (ESA).
- **Contrato ESA-Leonardo:** firmado en el Salón Aeronáutico de París de 2025; prototipo de laboratorio en dos años.
- [Navigating through interference at Jammertest](https://www.esa.int/articles/navigating-through-interference-at-jammertest) — ESA, 2025 (S0013): bloqueo, suplantación y *meaconing* explicados por quienes los sufren.
- [No signal left behind: new ways to detect jamming and spoofing](https://www.esa.int/it/articoli/no-signal-left-behind-new-ways-to-detect-jamming-and-spoofing) — ESA, 2025 (S0014): la cifra de barcos afectados y los proyectos de monitoreo.
- [ESA teams up with Leonardo against satnav jamming](https://www.esa.int/media-advisories/news-media/media/media-advisories/n-36-2025-esa-teams-up-with-leonardo-against-satnav-jamming) — ESA, 2025 (S0012): el contrato de antenas inteligentes.
- [Space Threat Assessment 2024](https://aerospace.csis.org/wp-content/uploads/2024/04/240417_Swope_SpaceThreatAssessment_2024.pdf) — CSIS, 2024 (S0099): los casos de bloqueo y suplantación por país.

</aside>

**Puertas:** [Jammertest: Noruega convierte la interferencia en laboratorio](/biblioteca/cielo_conectado/parte-xi/xi-8-jammertest-noruega-convierte-la-interferencia-en-l), [Antiinterferencia: el Protected Tactical SATCOM y su cambio de rumbo](/biblioteca/cielo_conectado/parte-v/v-4-antiinterferencia-el-protected-tactical-satcom-y-s), [Cuatro sistemas para saber dónde estás: GPS, Galileo, BeiDou y GLONASS](/biblioteca/cielo_conectado/parte-v/v-13-cuatro-sistemas-para-saber-donde-estas-gps-galileo), [Navegación de respaldo: Iridium PNT y la ley de resiliencia del GPS](/biblioteca/cielo_conectado/parte-v/v-16-navegacion-de-respaldo-iridium-pnt-y-la-ley-de-res), [Starlink en Ucrania: lo que mostró una guerra conectada desde órbita](/biblioteca/cielo_conectado/parte-v/v-7-starlink-en-ucrania-lo-que-mostro-una-guerra-conec)

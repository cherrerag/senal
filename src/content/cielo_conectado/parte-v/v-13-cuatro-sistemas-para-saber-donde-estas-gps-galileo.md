---
titulo: 'Cuatro sistemas para saber dónde estás: GPS, Galileo, BeiDou y GLONASS'
parte: V
parte_titulo: ¿Cómo se comunican los gobiernos y las fuerzas armadas por satélite, y cómo se orienta el mundo?
orden: 67
---

*Cuatro Estados regalan al mundo la posición y la hora exacta, y casi toda la economía digital se apoya en esa señal sin saber lo débil que es.*

<div class="galeria"><figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_009f8759f31a.jpg" alt="Las órbitas de GPS, Galileo, GLONASS y BeiDou a escala: cuatro anillos muy próximos, a unos 20.000 km de altura, entre la Estación Espacial pegada a la Tierra y la órbita geoestacionaria. Que vivan en capas casi idénticas explica por qué un receptor puede usarlos todos a la vez." loading="lazy" /><figcaption>Las órbitas de GPS, Galileo, GLONASS y BeiDou a escala: cuatro anillos muy próximos, a unos 20.000 km de altura, entre la Estación Espacial pegada a la Tierra y la órbita geoestacionaria. Que vivan en capas casi idénticas explica por qué un receptor puede usarlos todos a la vez. <span class="credito">Fuente: cmglee (CC BY-SA 3.0)</span></figcaption></figure><figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_c2d64e62740f.jpg" alt="Recreación de un satélite GPS III en órbita." loading="lazy" /><figcaption>Recreación de un satélite GPS III en órbita. <span class="credito">Fuente: U.S. Air Force (dominio público)</span></figcaption></figure><p class="galeria-pie">Los cuatro sistemas, de lejos y de cerca: el diagrama compara sus órbitas con las de otros satélites, y la recreación muestra un GPS III, con sus paneles solares y su haz de antenas apuntado hacia la Tierra. Desde esa distancia, la señal llega al suelo con muy poca potencia.</p></div>


En la aldea noruega de Bleik, a casi 70 grados de latitud norte, se reúnen cada año cientos de ingenieros para algo inusual: interferir a propósito las señales de navegación por satélite. En 2025 fueron 360 participantes de 120 organizaciones y más de 20 países. "Bajo un ataque de *jamming*, todos nuestros sistemas se apagan", contó allí Lars Amdal, piloto de la ambulancia aérea noruega. "El *spoofing* es peor": la pantalla muestra al helicóptero en otro lugar y la tripulación no sabe si se mueve el aparato o la señal ([Jammertest: Noruega convierte la interferencia en laboratorio](/biblioteca/cielo_conectado/parte-xi/xi-8-jammertest-noruega-convierte-la-interferencia-en-l)).

Esa escena resume la paradoja de los **sistemas globales de navegación por satélite** (GNSS, por su sigla en inglés). Son infraestructuras públicas, gratuitas y de cobertura mundial. Y su señal llega a la Tierra tan debilitada que un transmisor pequeño puede taparla (*jamming*) o falsificarla (*spoofing*).

## Cuatro dueños

**GPS (EE.UU.).** Lo opera la Fuerza Espacial. Su ficha cuenta 37 satélites de navegación en órbita (incluidos repuestos que entran y salen de la constelación), de las generaciones IIR, IIR-M, IIF y GPS III, con la serie GPS IIIF en camino. En tierra tiene una estación de control maestra, una alterna, estaciones de monitoreo y antenas; su sistema de control de nueva generación, OCX, es una historia de atrasos en sí misma ([OCX: el segmento terrestre del GPS que tardó una década](/biblioteca/cielo_conectado/parte-v/v-14-ocx-el-segmento-terrestre-del-gps-que-tardo-una-de)). La misma oficina ha desplegado más de 2 millones de equipos GPS militares.

**Galileo (Unión Europea).** Es infraestructura de la Unión; la Agencia Espacial Europea (ESA) es su diseñadora y responsable del desarrollo. Incluye un servicio cifrado para gobiernos, el Servicio Público Regulado, y la autenticación del mensaje de navegación, que permite al receptor verificar que la señal es genuina. La ESA prepara una segunda generación con más capacidad contra interferencias.

**BeiDou (China).** Lo administra la Oficina China de Navegación por Satélite. Su tercera generación, completada en 2020, combina 3 satélites geoestacionarios, 3 en órbita geosíncrona inclinada y 24 en órbita media. Es el único de los cuatro que también manda mensajes cortos ([BeiDou: la navegación china que también manda mensajes](/biblioteca/cielo_conectado/parte-v/v-15-beidou-la-navegacion-china-que-tambien-manda-mensa)).

**GLONASS (Rusia).** Lo operan las Fuerzas Espaciales rusas, según el CSIS, y lo monitorea un centro de análisis de Roscosmos que, además, publica el estado de las constelaciones de BeiDou, GPS y Galileo. Rusia y China mantienen un comité conjunto para coordinar GLONASS y BeiDou.

## Lo que depende de ellos

La ESA estima que el 10 % del PIB europeo depende de la navegación por satélite, y que una interrupción costaría "del orden de miles de millones de euros diarios" a Europa. Las razones no son solo los mapas del teléfono. Los GNSS entregan, sobre todo, **tiempo**: una hora de referencia precisa en cualquier parte del planeta. BeiDou, por ejemplo, mantiene su escala de tiempo a menos de 50 nanosegundos de la hora universal. Con esa referencia se sincronizan las redes financieras, las redes eléctricas y las estaciones base celulares; Iridium, que vende un servicio alternativo, menciona entre sus clientes a centros de datos y radiobases 5G ([Navegación de respaldo: Iridium PNT y la ley de resiliencia del GPS](/biblioteca/cielo_conectado/parte-v/v-16-navegacion-de-respaldo-iridium-pnt-y-la-ley-de-res)).

Las amenazas crecen. En el segundo trimestre de 2025, más de 10.000 buques sufrieron interferencia maliciosa en todo el mundo, ocho veces más que en el trimestre anterior, según la ESA. El CSIS atribuye a Rusia interferencias de GPS en Polonia, Escandinavia y los países bálticos, y a buques chinos en el mar de China Meridional ([China y Rusia: comunicaciones militares y armas contra satélites](/biblioteca/cielo_conectado/parte-v/v-12-china-y-rusia-comunicaciones-militares-y-armas-con)).


<aside class="recuadro sirve">
<p class="recuadro-t">¿Qué depende de ellos en una red de telecomunicaciones?</p>


Más de lo que parece. Una red celular moderna necesita que sus radiobases compartan la misma hora con precisión de microsegundos para no interferirse entre ellas†, y la fuente de esa hora suele ser un receptor GNSS en el techo. Si alguien lo interfiere, la radiobase pierde la sincronía y, con el tiempo, el servicio se degrada. Para un operador, la pregunta práctica es: ¿cuántos de mis sitios dependen de un solo GNSS y qué respaldo tienen? Usar varios sistemas a la vez ayuda contra fallas, pero no contra un *jammer*, que tapa todas las señales cercanas.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


Según la norma oficial de BeiDou, el receptor de su servicio de mensajes debe captar una señal de al menos −157,6 dBW. Traducido: unas dos décimas de femtovatio, es decir, 0,0000000000000002 vatios. Por eso es tan fácil taparla desde tierra.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **GPS:** 37 satélites de navegación (incluye repuestos); 4 antenas terrestres GPS; más de 2 millones de equipos militares desplegados.
- **BeiDou-3:** 3 GEO + 3 IGSO + 24 MEO; completado en 2020; tiempo a menos de 50 ns de UTC.
- **Peso económico (ESA):** 10 % del PIB europeo habilitado por la navegación satelital.
- **Interferencia marítima:** más de 10.000 buques afectados en el segundo trimestre de 2025, ocho veces más que en el primero.
- [Navigating through interference at Jammertest](https://www.esa.int/articles/navigating-through-interference-at-jammertest) — ESA, 2025 (S0013): cómo se prueba la resistencia de Galileo y los receptores en el Ártico.
- [No signal left behind: new ways to detect jamming and spoofing](https://www.esa.int/it/articoli/no-signal-left-behind-new-ways-to-detect-jamming-and-spoofing) — ESA, 2025 (S0014): la escala de la interferencia y su costo.
- [BeiDou Navigation Satellite System Open Service Performance Standard](http://en.beidou.gov.cn/SYSTEMS/Officialdocument/202110/P020211014595952404052.pdf) — China Satellite Navigation Office, 2021 (S0083): la arquitectura oficial de BeiDou.
- [MILCOM and PNT fact sheet](https://www.ssc.spaceforce.mil/Portals/3/SSC_Fact_Sheet_PNT_FINAL.pdf) — Space Systems Command, sin fecha (S0096): la flota GPS en números.
- [GLONASS constellation status](https://glonass-iac.ru/en/sostavOG/) — Information-Analytical Centre, Roscosmos, 2026 (S0087): el centro ruso que monitorea los cuatro sistemas.

</aside>

**Puertas:** [OCX: el segmento terrestre del GPS que tardó una década](/biblioteca/cielo_conectado/parte-v/v-14-ocx-el-segmento-terrestre-del-gps-que-tardo-una-de), [BeiDou: la navegación china que también manda mensajes](/biblioteca/cielo_conectado/parte-v/v-15-beidou-la-navegacion-china-que-tambien-manda-mensa), [Navegación de respaldo: Iridium PNT y la ley de resiliencia del GPS](/biblioteca/cielo_conectado/parte-v/v-16-navegacion-de-respaldo-iridium-pnt-y-la-ley-de-res), [Interferencia, jamming y spoofing: cómo se ataca una señal](/biblioteca/cielo_conectado/parte-xi/xi-7-interferencia-jamming-y-spoofing-como-se-ataca-una), [Jammertest: Noruega convierte la interferencia en laboratorio](/biblioteca/cielo_conectado/parte-xi/xi-8-jammertest-noruega-convierte-la-interferencia-en-l)

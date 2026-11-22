---
titulo: 'O3b mPOWER y la órbita media: el nicho de SES'
parte: III
parte_titulo: ¿Qué pasa con los operadores geoestacionarios y de órbita media?
orden: 31
---

*A 8.000 km de altura, entre la órbita baja de Starlink y el geoestacionario clásico, SES construyó una red de satélites que forman miles de haces cada uno y que vende algo distinto a la velocidad: garantías.*

<div class="galeria"><figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_4bcd778189f6.jpg" alt="Modelo de escritorio de un satélite O3b mPOWER, con sus dos paneles solares abiertos. Desde 8.000 km, cada uno de los reales reparte su potencia en miles de haces." loading="lazy" /><figcaption>Modelo de escritorio de un satélite O3b mPOWER, con sus dos paneles solares abiertos. Desde 8.000 km, cada uno de los reales reparte su potencia en miles de haces. <span class="credito">Fuente: Blervis, Wikimedia Commons (CC0)</span></figcaption></figure><figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_dd2e99caf3d6.jpg" alt="Huella de la constelación O3b sobre el mapa: una franja ancha alrededor del ecuador que cubre casi toda América Latina, África y el sur de Asia, y deja fuera las latitudes altas." loading="lazy" /><figcaption>Huella de la constelación O3b sobre el mapa: una franja ancha alrededor del ecuador que cubre casi toda América Latina, África y el sur de Asia, y deja fuera las latitudes altas. <span class="credito">Fuente: Lloyd Wood, Wikimedia Commons (CC BY-SA 4.0)</span></figcaption></figure><p class="galeria-pie">mPOWER en dos vistas: el satélite y la franja del planeta que cubre la órbita media sobre el ecuador.</p></div>


En un crucero que cruza el Atlántico viajan miles de pasajeros que quieren subir fotos y ver series al mismo tiempo, y una tripulación que necesita la red para operar el barco. Ese es el cliente ideal de O3b mPOWER: mucho tráfico concentrado en un punto que se mueve, dispuesto a pagar por un servicio con niveles de rendimiento firmados. SES dice atender a cinco de las seis grandes navieras de cruceros con contratos gestionados multiórbita, además de más de 13.000 barcos comerciales y de recreo.


<aside class="recuadro hondo">
<p class="recuadro-t">Ficha del sistema</p>


- **Objetivo:** conexiones de alta capacidad y baja latencia, de decenas de megabits a varios gigabits por segundo por sitio, para cruceros, energía y minería, telefónicas y gobiernos.
- **Estado a noviembre de 2026:** constelación de 13 satélites, de los cuales 10 están lanzados; los satélites 7 a 10 están en servicio y los 11 a 13 tienen lanzamiento previsto en el segundo semestre de 2026. Servicio comercial desde abril de 2024.
- **Dueño:** SES (100 %).
- **Segmento espacial:** órbita media ecuatorial a unos 8.000 km; satélites construidos por Boeing sobre la plataforma 702X, en banda Ka, cada uno con más de 5.000 haces digitales orientables, según Woodrow Scientific; cobertura de casi 400 millones de km², cuatro quintos de la superficie terrestre, entre unos 50° de latitud norte y sur. Convive con 20 satélites O3b de primera generación.
- **Segmento terrestre:** gateways dedicados a MEO y mixtos GEO/MEO dentro de la red de 146 telepuertos de SES; software ARC (Adaptive Resource Controller), que reparte tráfico en tiempo real y cambia de órbita entre MEO, GEO y LEO.
- **Clientes y alianzas:** navieras como MSC, Carnival y Virgin Voyages; telefónicas y proveedores de nube como AWS; gobiernos; producto SES Cruise mPOWERED combinado con Starlink; demostraciones de relevo de datos para la NASA.
- **Cifras clave:** 13 satélites; más de 5.000 haces por satélite; unos 189 millones de dólares cobrados al seguro en 2025 por los satélites 1 a 4.

</aside>

## Una red que nació con un problema

La historia de mPOWER no es lineal. SES determinó que los seis primeros satélites tendrán una vida útil y una capacidad "significativamente menores" que lo previsto. Con Boeing acordó mejorar los siete restantes; los satélites 7 a 10 ya llegaron mejorados y en servicio, y aportan la capacidad y la redundancia que les faltaban a los primeros. El costo extra, según SES, cabe dentro del presupuesto de inversión comprometido, y el seguro empezó a pagar.

La lógica técnica sigue intacta. Un satélite en MEO está unas cuatro veces y media más cerca de la Tierra que uno geoestacionario†, así que la señal tarda bastante menos en ir y volver, y SES puede servir aplicaciones sensibles a la latencia que el GEO no atiende. Y como cada satélite reparte su potencia en miles de haces que se apuntan por software, puede concentrar capacidad sobre un puerto, una plataforma petrolera o un barco en movimiento. Para crecer basta con agregar satélites a la misma órbita.

## La NASA y el negocio de relevo

En 2025, SES Space & Defense probó con un satélite de Planet en órbita baja un servicio de relevo: el satélite de observación envía sus datos a O3b mPOWER (en banda Ka, para alta velocidad) o a los geoestacionarios de SES en banda C (para telemetría y comando), en vez de esperar a pasar sobre una estación terrestre. Es parte del proyecto de la NASA para reemplazar su red de relevo TDRS con servicios comerciales; la agencia planea comprarlos hacia 2031.

## ¿Qué significa?

La órbita media funciona como nicho porque ocupa un hueco preciso: más latencia que la órbita baja, pero más capacidad garantizada por haz y menos satélites que mantener. SES la está convirtiendo en columna vertebral de su estrategia: meoSphere, su red MEO de próxima generación, arranca con misiones piloto desde marzo de 2026, y en IRIS² SES aportará 18 satélites MEO nuevos, pagará cerca de la mitad de su costo y podrá comercializar más del 90 % de esa capacidad.

La amenaza es evidente: cada vez que Starlink mejora su servicio a cruceros y aviones, el argumento de la latencia pierde peso. La respuesta de SES ha sido no competir de frente sino integrar: vende mPOWER junto con Starlink en un mismo servicio gestionado.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Puede un nicho entre la órbita baja y la geoestacionaria sostenerse solo?</p>


Probablemente no como red aislada, y SES no lo intenta. mPOWER vale como pieza de un paquete: la capa que da capacidad garantizada y alta por sitio, combinada con GEO para cobertura amplia y con LEO de terceros para latencia mínima. Para un cliente, eso significa contratos con niveles de servicio firmados que una red de consumo no ofrece. Para SES, significa que la órbita media es un diferenciador mientras Starlink no venda garantías equivalentes.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


La misma arquitectura de carga útil 702X de Boeing que vuela en O3b mPOWER se adaptó para uso militar en el WGS-11 de la Fuerza Espacial de EE.UU., el primer satélite definido por software de esa constelación militar, que según Boeing tiene el doble de capacidad que cualquiera de los diez anteriores.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [SES Annual Report 2025](https://www.ses.com/sites/ses_v2/files/investor-files/2026-03/SES_AR25_2MAR26_vs21_web-LR.pdf) — SES, 2026 (S0067): estado de la constelación, problemas de los seis primeros satélites e IRIS².
- [Software Defined Satellites: Architecture & Challenges](https://woodrowscientific.com/blog/satellites-reconfigurable-via-software-updates) — Woodrow Scientific, 2026 (S0020): la plataforma 702X y sus más de 5.000 haces.
- [NASA's Push Toward Commercial Space Communications Gains Momentum](https://www.nasa.gov/technology/space-comms/nasas-push-toward-commercial-space-communications-gains-momentum/) — NASA, 2025 (S0107): las demostraciones de relevo de SES con Planet.
- [SES FY 2025 Results Analyst Presentation](https://www.ses.com/sites/ses_v2/files/investor-files/2026-03/2603_FY_25_AnalystPresentation_Final.pdf) — SES, 2026 (S0068): la visión de meoSphere y sus misiones piloto.

</aside>

**Puertas:** [SES con Intelsat: el mayor operador multiórbita](/biblioteca/cielo_conectado/parte-iii/iii-2-ses-con-intelsat-el-mayor-operador-multiorbita), [Baja, media o geoestacionaria: latencia, cobertura y costo por bit](/biblioteca/cielo_conectado/parte-i/i-2-baja-media-o-geoestacionaria-latencia-cobertura-y-), [La NASA sale a comprar: 278,5 millones de dólares para relay comercial](/biblioteca/cielo_conectado/parte-vi/vi-4-la-nasa-sale-a-comprar-278-5-millones-de-dolares-p), [IRIS²: 348 satélites y la apuesta europea por la soberanía](/biblioteca/cielo_conectado/parte-v/v-8-iris2-348-satelites-y-la-apuesta-europea-por-la-so), [Del hogar al crucero: clientes, planes y precios de la órbita baja](/biblioteca/cielo_conectado/parte-ii/ii-16-del-hogar-al-crucero-clientes-planes-y-precios-de-)

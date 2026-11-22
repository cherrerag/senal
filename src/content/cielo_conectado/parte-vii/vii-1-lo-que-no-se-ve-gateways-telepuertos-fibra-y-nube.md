---
titulo: 'Lo que no se ve: gateways, telepuertos, fibra y nube'
parte: VII
parte_titulo: ¿Qué hace falta en tierra para que todo esto funcione, y quién lo provee?
orden: 78
---

*Por cada dólar que la industria satelital comercial facturó en 2025, 55 centavos se quedaron en tierra.*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_2f013e6acab4.jpg" alt="Antena 2 de la estación terrena de Raisting, en Baviera: un plato de 28,5 m inaugurado en 1969. Así luce el segmento terrestre, el que nadie fotografía y que hoy concentra más de la mitad del negocio satelital." loading="lazy" /><figcaption>Antena 2 de la estación terrena de Raisting, en Baviera: un plato de 28,5 m inaugurado en 1969. Así luce el segmento terrestre, el que nadie fotografía y que hoy concentra más de la mitad del negocio satelital. <span class="credito">Fuente: Richard Bartz (Wikimedia Commons, CC BY-SA 2.5)</span></figcaption></figure>


Un satélite de comunicaciones, por sí solo, no conecta a nadie. Sirve de espejo o de enrutador en el cielo, pero el tráfico tiene que entrar y salir por algún lado: por una antena grande que habla con la red (el **gateway**, o estación de pasarela), por un recinto con muchas de esas antenas y equipos de operación (el **telepuerto**), por un edificio donde el tráfico se entrega a internet o a la red de un cliente (el **punto de presencia**, o PoP) y, en el otro extremo, por la antena del usuario. Todo eso es el segmento terrestre. Es la parte que nadie fotografía y, según la contabilidad de la industria, la que más plata mueve.

## El bloque más grande del negocio

El informe anual de la Satellite Industry Association (SIA), elaborado por BryceTech y publicado en mayo de 2026, cifra los ingresos del segmento terrestre en 165.200 millones de dólares en 2025, un 6 % más que el año anterior. La industria satelital comercial completa sumó 303.000 millones: 105.000 millones en servicios, 20.400 millones en fabricación de satélites y 12.400 millones en lanzamientos. La cuenta es simple: 165.200 dividido por 303.000 da 0,55. Más de la mitad del negocio está abajo.

Hay que leer esa cifra con cuidado. La SIA mete en el mismo saco los equipos de red satelital (que crecieron 8 %) y los equipos de navegación por satélite, que incluyen receptores y chips GNSS de consumo (que crecieron 6 %). El comunicado no separa cuánto corresponde a cada uno, y es razonable suponer que buena parte del total son chips de navegación en teléfonos y autos†. Aun así, el mensaje para el negocio se sostiene: por cada satélite hay antenas, fibra, edificios, software y millones de terminales, y ese gasto se repite cada vez que cambia una generación de satélites.

## Cuatro capas y sus dueños

La primera capa son los **gateways propios de las constelaciones**. Starlink dice operar "la red terrestre satelital más grande jamás desplegada": más de 100 sitios de gateway solo en Estados Unidos, con más de 1.500 antenas fabricadas en su planta de Redmond, Washington. Eutelsat OneWeb llama a sus gateways *Satellite Network Portals* (SNP) y todavía en 2025 seguía construyendo y licenciando los que le faltaban. Telesat diseñó Lightspeed con "estaciones de aterrizaje" repartidas por el mundo y conectadas por fibra a PoP regionales.

La segunda capa son los **telepuertos de los operadores históricos**. SES, ya fusionada con Intelsat, declara 146 telepuertos propios o de socios, 50 PoP y unos 600.000 km de fibra terrestre, es decir, unas quince vueltas a la Tierra†. Eutelsat tiene seis telepuertos propios, dos en México. Hughes concentra gateways y operaciones en Cheyenne (Wyoming) y Gilbert (Arizona).

La tercera capa es la de quienes **alquilan antenas por minuto o por pasada**: las estaciones como servicio (GSaaS, por *Ground Station as a Service*). KSAT, la noruega, suma más de 200 antenas en más de 40 sitios; la sueca SSC, la italiana Leaf Space, ATLAS, RBC Signals y Viasat compiten en el mismo mercado. Encima de ellas apareció la nube: AWS Ground Station alquila antenas de 5,4 m y entrega los datos directamente a sus servidores, cobrando por minuto.

La cuarta capa son los **terminales de usuario**, desde la parábola de TV hasta la antena plana de barrido electrónico. Es el componente más caro para el cliente, el más difícil de abaratar y el que más pesa en el costo de captar a cada abonado.

## Tabla: quién está en cada capa

| Capa | Qué hace | Actores (ejemplos del corpus) | Escala citable |
|---|---|---|---|
| Gateways de constelaciones | Conectan los satélites con la red terrestre | Starlink, Eutelsat OneWeb (SNP), Telesat Lightspeed, Amazon Leo | Starlink: más de 100 sitios y 1.500 antenas solo en EE.UU. (informe 2025) |
| Telepuertos históricos | Control de flota (TT&C), video, datos, servicios a terceros | SES-Intelsat, Eutelsat, Hughes/EchoStar, Hispasat | SES: 146 telepuertos, 50 PoP, 600.000 km de fibra (informe anual 2025) |
| Estaciones como servicio | Alquiler de antenas por pasada, minuto o contrato | KSAT, SSC, Leaf Space, Viasat RTE, ATLAS, RBC Signals | KSAT: más de 200 antenas en más de 40 sitios (2025-2026); ATLAS: 51 antenas en 34 estaciones (sept. 2024) |
| Nube como estación | Antena más cómputo y almacenamiento | AWS Ground Station y su programa de socios | Antenas de 5,4 m, cobro por minuto (NASA, 2026) |
| Fibra, PoP y datacenters | Llevar el tráfico del gateway a internet | Operadores de fibra, nubes, cables submarinos | SES: cada telepuerto conectado a al menos dos PoP |
| Terminales | La antena y el módem del cliente | SpaceX (propios); en licencias FCC figuran Intellian, SeaTel, Prodelin, Paradigm, GetSat, Cobham | Kit de Starlink: unos 350 dólares en 2024 (Nokia) |

## ¿Cuántos gateways necesita una constelación?

Nadie lo publica completo, y esa opacidad ya dice algo. Un estudio de Nokia de 2025 estimaba que Starlink operaba unas 150 estaciones terrenas en todo el mundo, la mitad en Estados Unidos. El propio informe de Starlink de 2025 habla de más de 100 sitios *solo* en Estados Unidos. Las dos cifras no cuadran, y la diferencia muestra lo rápido que crece la red y lo poco que se sabe desde afuera. La forma de seguirla es leer licencias país por país, como se explica en las entradas sobre avisos de la FCC y sobre los gateways de Starlink.

Lo que sí se puede decir es por qué hacen falta tantos. Un gateway solo ve los satélites que pasan sobre su zona, y cada uno de ellos tiene que dejar su tráfico en algún lado. Cuanto más cerca está el gateway del usuario y del datacenter, menor es la latencia: Nokia calcula que la fibra terrestre suma alrededor de 1 ms de ida y vuelta por cada 100 km. Los enlaces láser entre satélites reducen la dependencia de tener un gateway en cada país, pero no la eliminan: el tráfico igual tiene que bajar.

## Quién gana y hacia dónde va

Ganan quienes tienen sitios escasos (latitudes polares, terrenos con permisos, terrenos cerca de nodos de fibra), quienes venden la fibra y el cómputo que viene después, y quienes fabrican terminales a escala. El movimiento financiero más revelador de 2024-2025 fue de Eutelsat: acordó separar sus activos terrestres pasivos (terrenos, edificios, antenas y circuitos de sus telepuertos y SNP) en una empresa nueva, vender el 80 % al fondo de infraestructura EQT y quedarse con el 20 %, con un valor empresa de 790 millones de euros. Según su documento de registro, nacería "la mayor empresa neutral de estaciones como servicio" del mundo. Los telepuertos empiezan a tratarse como las torres de telefonía: infraestructura compartida que un fondo compra y alquila.

Hay otras tres tendencias **propuestas o en marcha**. La FCC propuso en octubre de 2025 una licencia nacional de estación terrena para reducir trámites, todavía en etapa de propuesta. Las bandas más altas, como la W que Argentina y Chile habilitaron en 2026, prometen más capacidad por gateway. Y las estaciones ópticas, que bajan datos por láser sin pedir espectro, ya tienen sitios comerciales en Europa.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Para quien evalúa oportunidades, el segmento terrestre es el lugar donde un actor local puede entrar sin lanzar un satélite. Las constelaciones necesitan terrenos con permisos, fibra, energía, operación 24/7 y socios con licencia en cada país. El riesgo es la integración vertical: SpaceX fabrica sus propias antenas de gateway y sus propios terminales. La oportunidad está en lo que no conviene integrar: sitios escasos, licencias locales, fibra y servicios a los operadores medianos que no pueden construir su propia red.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


En 2025, cuando un corte de energía dejó sin luz a toda España y Portugal, Starlink siguió funcionando porque sus satélites desviaron el tráfico por láser hacia estaciones terrenas de otras partes de Europa que no estaban afectadas. Un gateway lejano puede salvar el servicio cuando el cercano se apaga.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">América Latina</p>


La primera estación terrena de comunicaciones satelitales de América Latina fue Longovilo, en Melipilla, Chile, construida en 1968; por ella pasó la transmisión televisiva del alunizaje del Apolo 11 en 1969. Casi seis décadas después, Chile autoriza por decreto gateways de Starlink en Cabrero, Pudahuel y Las Condes.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [Affordability and Productivity Drive Historic Satellite Industry Growth](https://sia.org/affordability-productivity-drive-historic-satellite-industry-growth-satellite-industry-association-releases-29th-annual-state-of-the-satellite-industry-report/) — SIA, 2026 (S0130): las cifras de 2025 por segmento (terrestre 165.200 M USD, servicios 105.000 M, fabricación 20.400 M, lanzamiento 12.400 M).
- [Starlink Progress Report 2025](https://starlink.com/public-files/starlinkProgressReport_2025.pdf) — SpaceX/Starlink, 2025 (S0129): más de 100 sitios de gateway y 1.500 antenas en EE.UU., resiliencia ante cortes.
- [SES Annual Report 2025](https://www.ses.com/sites/ses_v2/files/investor-files/2026-03/SES_AR25_2MAR26_vs21_web-LR.pdf) — SES, 2026 (S0067): 146 telepuertos, 50 PoP y 600.000 km de fibra.
- [Universal Registration Document FY24-25](https://www.companiesmarketcap.com/universal-registration-documents/43436.urd.en.2024-2025.pdf) — Eutelsat, 2025 (S0063): la venta del 80 % de sus activos terrestres a EQT por un valor empresa de 790 M€.
- [SOA: Ground Data Systems and Mission Operations](https://www.nasa.gov/wp-content/uploads/2026/05/11-soa-ground-data-systems-2026-final.pdf) — NASA, 2026 (S0116): el mapa de proveedores de estaciones como servicio, con antenas, bandas y modelos de cobro.

</aside>

**Puertas:** [Cómo se arma la red: láseres entre satélites, gateways y puntos de presencia](/biblioteca/cielo_conectado/parte-ii/ii-14-como-se-arma-la-red-laseres-entre-satelites-gatewa), [Estaciones como servicio: el mercado de alquilar antenas](/biblioteca/cielo_conectado/parte-vii/vii-5-estaciones-como-servicio-el-mercado-de-alquilar-an), [Puntos de presencia y fibra: dónde el satélite se conecta a internet](/biblioteca/cielo_conectado/parte-vii/vii-9-puntos-de-presencia-y-fibra-donde-el-satelite-se-c), [Terminales de usuario: de la parábola a la antena plana electrónica](/biblioteca/cielo_conectado/parte-vii/vii-11-terminales-de-usuario-de-la-parabola-a-la-antena-p), [Lo que cuesta una red: satélites, lanzamientos y tierra](/biblioteca/cielo_conectado/parte-ix/ix-4-lo-que-cuesta-una-red-satelites-lanzamientos-y-tie)

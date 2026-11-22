---
titulo: 'Los gateways de Starlink: banda Ka, banda W y la versión 5'
parte: VII
parte_titulo: ¿Qué hace falta en tierra para que todo esto funcione, y quién lo provee?
orden: 81
---

*SpaceX dice que sus nuevos gateways triplican la capacidad de la red, pero no dice cuántos tiene.*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0129_p025_044b23a685a3.jpg" alt="Un Community Gateway de Starlink en una azotea de las Galápagos: unas pocas antenas bajo cúpulas y una caseta de equipos. Un sitio así bastó para evitar un cable submarino y muestra cuán compacta puede ser una estación de pasarela." loading="lazy" /><figcaption>Un Community Gateway de Starlink en una azotea de las Galápagos: unas pocas antenas bajo cúpulas y una caseta de equipos. Un sitio así bastó para evitar un cable submarino y muestra cuán compacta puede ser una estación de pasarela. <span class="credito">Fuente: SpaceX/Starlink, Progress Report 2025</span></figcaption></figure>


Cada satélite Starlink baja su tráfico a un gateway, una estación con varias antenas de 1,85 m fabricadas por SpaceX que conecta la constelación con la fibra. El informe de progreso de Starlink de 2025 da la única cifra oficial: más de 100 sitios de gateway solo en Estados Unidos, con más de 1.500 antenas, "la red terrestre satelital más grande jamás desplegada". Si se divide 1.500 por 100, sale un promedio de unas 15 antenas por sitio. Los permisos de la FCC muestran que los sitios grandes llegan a 40 antenas idénticas, como los de Atlanta, Miami o Ashburn.

Fuera de Estados Unidos el número no se publica. Un estudio de Nokia de 2025 estimaba unas 150 estaciones terrenas en todo el mundo, la mitad en Estados Unidos; el propio informe de Starlink sugiere que ya eran más. La red mundial hay que reconstruirla con licencias país por país.

## De la banda Ka a la banda E

Los gateways estadounidenses que la FCC licenció en 2025 trabajan en dos familias de frecuencias. En **banda Ka** suben entre 27,5 y 30 GHz y bajan entre 17,8 y 19,3 GHz, con canales de 480 MHz. En **banda E** suben entre 81 y 86 GHz y bajan entre 71 y 76 GHz, con canales de 1,2 GHz. La banda E es la que rinde más capacidad por antena, pero viene con condiciones: coordinación previa con usuarios federales y radioenlaces, protección de radioobservatorios y un ángulo mínimo de elevación de 25 grados para gateways bajo los 62° de latitud norte.

La presión por capacidad viene del cielo. Según SpaceX, cada satélite de tercera generación (V3), que empezó a lanzarse en Starship en septiembre de 2026, tendrá más de un terabit por segundo de bajada, y cada lanzamiento sumará 60 Tbps a la red. Todo ese tráfico, salvo el que viaja entre usuarios por láser, tiene que bajar por gateways. SpaceX lo reconoce en su informe: la red escala "con satélites de tercera generación y estaciones terrenas de gateway".

## La versión 5 y la ola de la banda W

En 2026 ENACOM, el regulador argentino, autorizó a Starlink Argentina a usar la **banda W** (92 a 114,25 GHz) para "Gateways Versión 5". Según lo que informó la empresa al regulador, esa tecnología triplica la capacidad de la red, aumenta la reutilización del espectro y permite más usuarios por zona. La autorización usa segmentos todavía no atribuidos al servicio satelital en el país y exige proteger a los demás servicios de esas bandas.

Chile siguió por la vía de la norma general. El 2 de julio de 2026, Subtel incorporó la banda W a la norma técnica del servicio fijo por satélite, para todos los operadores, entre ellos Starlink y HughesNet, y anunció la banda V para los días siguientes. En Brasil, Anatel formalizó el 19 de noviembre de 2026 nuevas subbandas Ku, Ka y Q/V para Starlink. A noviembre de 2026, las autorizaciones existen; la cantidad de gateways W construidos no aparece en ninguna fuente pública del corpus.

## Lo que dicen los decretos chilenos

Chile es de los pocos países donde los gateways aparecen con nombre en el diario oficial. El decreto 234 de 2025 autorizó cuatro gateways de Starlink y puso una condición geográfica: en banda E, solo desde la Región de Coquimbo al sur, con posibles límites de elevación para proteger al radiotelescopio ALMA. En agosto de 2026 otros dos decretos corrigieron coordenadas y número de antenas de las estaciones "SpaceX Cabrero 1", "SpaceX Pudahuel 1" y "SpaceX Las Condes 1". El decreto obliga además a Starlink a informar a Subtel, en febrero, junio y octubre, cuántas estaciones tiene, para calcular los derechos de espectro: el regulador conoce el número aunque el público no.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Para un dueño de terreno o un telepuerto local, el negocio con Starlink no está en vender antenas, porque SpaceX fabrica las suyas en Redmond. Está en lo que SpaceX no fabrica: terrenos con permisos, energía estable, acceso a fibra cerca de un punto de intercambio y zonas que cumplan las condiciones del regulador. Las bandas más altas, como la W, sufren más con la lluvia†, lo que suele empujar a repartir la capacidad en más sitios separados entre sí†. Cada nueva generación de satélites reabre la pregunta de dónde poner los próximos gateways.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


Starlink también vende gateways a terceros. Su "Community Gateway" entrega hasta 10 Gbps simétricos en una banda Ka dedicada; en 2025 activó 13 sitios nuevos y llegó a 20 en nueve países, incluido el primero en las islas Galápagos, donde evitó tender un cable submarino.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [Starlink Progress Report 2025](https://starlink.com/public-files/starlinkProgressReport_2025.pdf) — SpaceX/Starlink, 2025 (S0129): más de 100 sitios y 1.500 antenas en EE.UU., satélites V3 y Community Gateways.
- [ENACOM autoriza a Starlink Argentina a operar en nuevas bandas de frecuencia satelital](https://www.enacom.gob.ar/institucional/enacom-autoriza-a-starlink-argentina-a-operar-en-nuevas-bandas-de-frecuencia-satelital_n4841) — ENACOM, 2026 (S0033): la banda W para los "Gateways Versión 5" y la promesa de triplicar capacidad.
- [Subtel amplía la competencia en los servicios satelitales en Chile e incorpora nuevas bandas](https://www.subtel.gob.cl/subtel-amplia-la-competencia-en-los-servicios-satelitales-en-chile-e-incorpora-nuevas-bandas-para-mejorar-la-conectividad/) — Subtel, 2026 (S0042): la banda W en la norma técnica chilena.
- [Decreto 837 exento, Transportes](https://www.bcn.cl/leychile) — Ministerio de Transportes y Telecomunicaciones de Chile, 2026 (S0031): las estaciones SpaceX Cabrero 1, Pudahuel 1 y Las Condes 1.
- [Satellite communication benchmarking with terrestrial 5G networks](https://www.nokia.com/asset/i/215031) — Nokia, 2025 (S0080): la estimación de unas 150 estaciones Starlink en el mundo.

</aside>

**Puertas:** [Starlink: más de 9 millones de clientes y la mayor flota jamás puesta en órbita](/biblioteca/cielo_conectado/parte-ii/ii-2-starlink-mas-de-9-millones-de-clientes-y-la-mayor-), [Starlink V3 en Starship: un terabit por satélite](/biblioteca/cielo_conectado/parte-ii/ii-5-starlink-v3-en-starship-un-terabit-por-satelite), [La ola de la banda W: Subtel, ENACOM y Anatel abren espectro](/biblioteca/cielo_conectado/parte-xiii/xiii-6-la-ola-de-la-banda-w-subtel-enacom-y-anatel-abren-), [Gateways comunitarios y backhaul: cuando el satélite alimenta a la red celular](/biblioteca/cielo_conectado/parte-ii/ii-17-gateways-comunitarios-y-backhaul-cuando-el-satelit), [Puntos de presencia y fibra: dónde el satélite se conecta a internet](/biblioteca/cielo_conectado/parte-vii/vii-9-puntos-de-presencia-y-fibra-donde-el-satelite-se-c)
